export async function userRoutes (server, opts) {
    const users = [];
// Listar usuarios criados
    server.get('/users', async (request, reply) => {
      return users;
    });
  
// Buscar usuario pelo id
    server.get('/users/:id', async (request, reply) => {
      const user = users.find(u => u.id === parseInt(request.params.id));
      if (!user) {
        return reply.status(404).send({ error: 'Usuário não encontrado' });
      }
      return user;
    });
  
// Criar usuario
    server.post('/users', async (request, reply) => {
      const { name, email } = request.body;
      const newUser = { id: users.length + 1, name, email };
      users.push(newUser);
      return reply.status(201).send(newUser);
    });

// Atualizar usuário
    server.put('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const { name, email } = request.body;
  
    const userIndex = users.findIndex(u => u.id === parseInt(id));
  
    if (userIndex === -1) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  
    users[userIndex] = { ...users[userIndex], name, email };
    return reply.send(users[userIndex]);
  });

// Deletar usuário
    server.delete('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
  
    if (userIndex === -1) {
      return reply.status(404).send({ error: 'Usuário não encontrado' });
    }
  
    const deletedUser = users.splice(userIndex, 1)[0];
    return reply.send({ message: 'Usuário removido com sucesso', user: deletedUser });
  });
  

  }



  
  