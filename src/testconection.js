
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     
  user: 'root',
  password: 'Snorlax1$1', 
  database: 'cashcontrol'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
  connection.end();
});
