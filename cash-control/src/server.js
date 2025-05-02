import Fastify from 'fastify';
import { userRoutes } from './routes/users.js';
import { transactionRoutes } from './routes/transactions.js';

const server = Fastify({ logger: true });

server.register(userRoutes);
server.register(transactionRoutes);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Servidor rodando em: ${address}`);
});
