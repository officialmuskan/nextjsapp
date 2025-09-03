import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'school_management',
};

let connection;

export async function connectToDatabase() {
  if (!connection) {
    try {
      console.log('Connecting to database with config:', {
        host: dbConfig.host,
        user: dbConfig.user,
        database: dbConfig.database
      });
      
      connection = await mysql.createConnection(dbConfig);
      console.log('Connected to MySQL database successfully');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
  return connection;
}

export async function query(sql, params = []) {
  try {
    console.log('Executing query:', sql);
    console.log('With params:', params);
    
    const db = await connectToDatabase();
    const [results] = await db.execute(sql, params);
    
    console.log('Query executed successfully');
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}