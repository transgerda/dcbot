import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
}).promise();


async function getOpdrachten() {
  const [opdrachten] = await pool.query("SELECT * FROM testtable");
  return opdrachten;
}

async function getOpdrachtById(i) {
  const [opdracht] = await pool.query("SELECT * FROM testtable WHERE id = ?", [id]);
  return opdracht[0];
}

async function getOpdracht(weekNr, opdrachtNr) {
  const [opdracht] = await pool.query("SELECT * FROM testtable WHERE weekNr = ? AND opdrachtNr = ?", [weekNr, opdrachtNr]);
  return opdracht[0];
}

async function createOpdracht(weekNr, opdrachtNr, opdrachtInhoud, maker) {
  const [opdracht] = await pool.query('INSERT INTO testtable (weekNr, opdrachtNr, opdrachtInhoud, maker) VALUES (?, ?, ?, ?)',
    [weekNr, opdrachtNr, opdrachtInhoud, maker]
  );
  const id = opdracht.insertId;
  return getOpdrachtById(id);
}

const opdracht = await getOpdracht(1, 2);
console.log(`Maker: ${opdracht.maker}`);
console.log(`Week: ${opdracht.weekNr}, Opdracht: ${opdracht.opdrachtNr}`);
console.log(`Antwoord: ${opdracht.opdrachtInhoud}`);