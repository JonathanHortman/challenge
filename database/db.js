const { Client } = require('pg');

const client = new Client({
  user: 'nombre_de_usuario',
  host: 'ruta_de_tu_basedatos_rds.amazonaws.com',
  database: 'nombre_de_la_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

async function connectDB() {
  try {
    await client.connect();
    console.log('Conexión exitosa a PostgreSQL');
  } catch (error) {
    console.error('Error de conexión:', error);
  }
}

async function disconnectDB() {
  try {
    await client.end();
    console.log('Desconexión exitosa de PostgreSQL');
  } catch (error) {
    console.error('Error al desconectar:', error);
  }
}

module.exports = { connectDB, disconnectDB, client };