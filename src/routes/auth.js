import { PrismaClient } from '../generated/prisma/index.js';
import { checkPassword } from '../helper/hash.js';

const prisma = new PrismaClient();

export async function authRoutes(server, opts) {
  server.post('/login', async (req, reply) => {
    const { email, senha } = req.body;
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return reply.status(401).send({ error: 'Credenciais inválidas' });

    const ok = await checkPassword(senha, user.senha);
    if (!ok) return reply.status(401).send({ error: 'Credenciais inválidas' });

    const token = server.jwt.sign({ id: user.id, nome: user.nome, email: user.email });

    return { token, user: { id: user.id, nome: user.nome, email: user.email } };
  });
}
