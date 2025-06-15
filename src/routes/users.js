import { PrismaClient } from '../generated/prisma/index.js';
import { hashPassword, checkPassword } from '../helper/hash.js'; 

const prisma = new PrismaClient();

export async function userRoutes(server, opts) {

  // buscar users
  server.get('/users', async (_, reply) => {
    const users = await prisma.usuario.findMany({
      select: { id: true, nome: true, email: true }
    });
    return users;
  });

  // buscar por id
  server.get('/users/:id', async (req, reply) => {
    const id = +req.params.id;
    const user = await prisma.usuario.findUnique({
      where: { id },
      select: { id: true, nome: true, email: true }
    });
    if (!user) return reply.status(404).send({ error: 'Usuário não encontrado' });
    return user;
  });

  // criar users
  server.post('/users', async (req, reply) => {
    const { nome, email, senha } = req.body;
    try {
      const senhaHash = await hashPassword(senha);

      const newUser = await prisma.usuario.create({
        data: { nome, email, senha: senhaHash },
        select: { id: true, nome: true, email: true }
      });

      return reply.status(201).send(newUser);
    } catch (err) {
      return reply.status(400).send({ error: 'Erro ao criar usuário', details: err.message });
    }
  });

  // atualizar users
  server.put('/users/:id', async (req, reply) => {
    const id = +req.params.id;
    const { nome, email, senha } = req.body;

    try {
      const data = { nome, email };

      if (senha) data.senha = await hashPassword(senha);

      const updated = await prisma.usuario.update({
        where: { id },
        data,
        select: { id: true, nome: true, email: true }
      });

      return updated;
    } catch (err) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  });

  // deletar users
  server.delete('/users/:id', async (req, reply) => {
    const id = +req.params.id;
    try {
      await prisma.usuario.delete({ where: { id } });
      return { message: 'Usuário removido com sucesso' };
    } catch {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  });
}
