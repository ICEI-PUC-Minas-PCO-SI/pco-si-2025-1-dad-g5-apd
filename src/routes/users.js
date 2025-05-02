import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export async function userRoutes(server, opts) {

  // Listar todos os usuários
  server.get('/users', async (request, reply) => {
    const users = await prisma.usuario.findMany();
    return users;
  });

  // Buscar usuário por ID
  server.get('/users/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const user = await prisma.usuario.findUnique({ where: { id } });
    if (!user) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
    return user;
  });

  // Criar novo usuário
  server.post('/users', async (request, reply) => {
    const { nome, email, senha } = request.body;

    try {
      const newUser = await prisma.usuario.create({
        data: { nome, email, senha }
      });
      return reply.status(201).send(newUser);
    } catch (error) {
      return reply.status(400).send({ error: 'Erro ao criar usuário', details: error.message });
    }
  });

  // Atualizar usuário
  server.put('/users/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const { nome, email, senha } = request.body;

    try {
      const updatedUser = await prisma.usuario.update({
        where: { id },
        data: { nome, email, senha }
      });
      return reply.send(updatedUser);
    } catch (error) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  });

  // Deletar usuário
  server.delete('/users/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    try {
      const deletedUser = await prisma.usuario.delete({
        where: { id }
      });
      return reply.send({ message: 'Usuário removido com sucesso', user: deletedUser });
    } catch (error) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  });
}
