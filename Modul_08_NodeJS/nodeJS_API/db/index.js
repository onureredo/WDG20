import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DB_URI });

pool.connect((err) => {
  if (err) {
    console.log('Error connecting to DB', err);
  } else {
    console.log('connected to neonDB');
  }
});

export default pool;
