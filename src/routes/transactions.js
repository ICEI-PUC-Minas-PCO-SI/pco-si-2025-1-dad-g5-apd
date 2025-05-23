import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export async function transactionRoutes(server, opts) {

  //Listar todas as transações de um usuário
  server.get('/users/:id/transacoes', async (request, reply) => {
    const { id } = request.params;

    const transacoes = await prisma.transacao.findMany({
      where: { usuarioId: parseInt(id) }
    });

    const ganhos = transacoes
      .filter(t => t.tipo === 'entrada')
      .reduce((acc, t) => acc + t.valor, 0);
  
    const gastos = transacoes
      .filter(t => t.tipo === 'saida')
      .reduce((acc, t) => acc + t.valor, 0);
  
    const saldo = ganhos - gastos;


    return {
      transacoes,
      totalGanhos: ganhos,
      totalGastos: gastos,
      saldoFinal: saldo,
    };
  }); 

  

  // Criar nova transação
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

  // Atualizar transação
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

  // Deletar transação
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
}