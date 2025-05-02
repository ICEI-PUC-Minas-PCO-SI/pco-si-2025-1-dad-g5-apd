export async function transactionRoutes(server, opts) {
  let transacoes = [];

  // Listar todas as transações de um usuário
  server.get('/usuarios/:id/transacoes', async (request, reply) => {
    const { id } = request.params;
    const transacoesDoUsuario = transacoes.filter(t => t.idUsuario === parseInt(id));
    return transacoesDoUsuario;
  });

  // Criar uma nova transação para um usuário
  server.post('/usuarios/:id/transacoes', async (request, reply) => {
    const { id } = request.params;
    const { tipo, valor, descricao } = request.body;

    if (!['entrada', 'saida'].includes(tipo)) {
      return reply.status(400).send({ erro: 'Tipo de transação inválido. Use "entrada" ou "saida".' });
    }

    const novaTransacao = {
      idTransacao: transacoes.length + 1,
      idUsuario: parseInt(id),
      tipo,
      valor,
      descricao
    };

    transacoes.push(novaTransacao);
    return reply.status(201).send(novaTransacao);
  });

  // Atualizar uma transação específica de um usuário
  server.put('/usuarios/:id/transacoes/:idTransacao', async (request, reply) => {
    const { id, idTransacao } = request.params;
    const { tipo, valor, descricao } = request.body;

    const index = transacoes.findIndex(t =>
      t.idUsuario === parseInt(id) && t.idTransacao === parseInt(idTransacao)
    );

    if (index === -1) {
      return reply.status(404).send({ erro: 'Transação não encontrada' });
    }

    transacoes[index] = {
      ...transacoes[index],
      tipo,
      valor,
      descricao
    };

    return reply.send(transacoes[index]);
  });

  // Deletar uma transação específica de um usuário
  server.delete('/usuarios/:id/transacoes/:idTransacao', async (request, reply) => {
    const { id, idTransacao } = request.params;

    const index = transacoes.findIndex(t =>
      t.idUsuario === parseInt(id) && t.idTransacao === parseInt(idTransacao)
    );

    if (index === -1) {
      return reply.status(404).send({ erro: 'Transação não encontrada' });
    }

    const transacaoRemovida = transacoes.splice(index, 1)[0];
    return reply.send({ mensagem: 'Transação removida com sucesso', transacao: transacaoRemovida });
  });
}

