import Fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import { userRoutes } from './routes/users.js';
import { transactionRoutes } from './routes/transactions.js';
import { authRoutes } from './routes/auth.js'; 

const server = Fastify({ logger: true });

// registra o plugin JWT com sua chave secreta
server.register(fastifyJwt, {
  secret: 'sua_chave_secreta_segura_aqui',
});

// decorator para usar autenticação via JWT em rotas que precisar
server.decorate("authenticate", async (req, reply) => {
  try {
    await req.jwtVerify();
  } catch (err) {
    return reply.status(401).send({ error: 'Token inválido ou ausente' });
  }
});

server.register(authRoutes);
server.register(userRoutes);
server.register(transactionRoutes);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Servidor rodando em: ${address}`);
});
