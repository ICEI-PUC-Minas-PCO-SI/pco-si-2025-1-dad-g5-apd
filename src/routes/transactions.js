import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export async function transactionRoutes(server, opts) {

  // lista transacoes do user
  server.get('/users/:id/transacoes', async (request, reply) => {
    const { id } = request.params;

    const transacoes = await prisma.transacao.findMany({
      where: { usuarioId: parseInt(id) }
    });

    return transacoes;
  });

  server.post('/users/:id/transacoes', async (request, reply) => {
    const { id } = request.params;
    const { tipo, valor, descricao } = request.body;

    if (!['entrada', 'saida'].includes(tipo)) {
      return reply.status(400).send({ erro: 'Tipo de transação inválido. Use "entrada" ou "saida".' });
    }

    const nova = await prisma.transacao.create({
      data: {
        tipo,
        valor,
        descricao,
        usuarioId: parseInt(id)
      }
    });

    return reply.status(201).send(nova);
  });

  // att transacao
  server.put('/users/:id/transacoes/:idTransacao', async (request, reply) => {
    const { idTransacao } = request.params;
    const { tipo, valor, descricao } = request.body;

    try {
      const atualizada = await prisma.transacao.update({
        where: { id: parseInt(idTransacao) },
        data: { tipo, valor, descricao }
      });

      return reply.send(atualizada);
    } catch (error) {
      return reply.status(404).send({ erro: 'Transação não encontrada' });
    }
  });

  // deleta transacao
  server.delete('/users/:id/transacoes/:idTransacao', async (request, reply) => {
    const { idTransacao } = request.params;

    try {
      const deletada = await prisma.transacao.delete({
        where: { id: parseInt(idTransacao) }
      });

      return reply.send({ mensagem: 'Transação removida com sucesso', transacao: deletada });
    } catch (error) {
      return reply.status(404).send({ erro: 'Transação não encontrada' });
    }
  });

// Relatório de transações do usuário
server.get('/users/:id/relatorio', async (request, reply) => {
  const { id } = request.params;

  const transacoes = await prisma.transacao.findMany({
    where: { usuarioId: parseInt(id) },
    select: {
      tipo: true,
      valor: true,
      descricao: true,
    },
  });

  const entradas = transacoes.filter(t => t.tipo === 'entrada');
  const saidas = transacoes.filter(t => t.tipo === 'saida');

  const totalEntradas = entradas.reduce((acc, t) => acc + t.valor, 0);
  const totalSaidas = saidas.reduce((acc, t) => acc + t.valor, 0);
  const saldoFinal = totalEntradas - totalSaidas;

  return {
    entradas,
    saidas,
    totalEntradas,
    totalSaidas,
    saldoFinal,
    situacao: saldoFinal >= 0 ? 'positivo' : 'negativo',
  };
});
}