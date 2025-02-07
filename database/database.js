import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

import EventEmitter from 'events';
const emitter = new EventEmitter();
emitter.setMaxListeners(50);

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
}).promise();

console.log('Database connected');

async function createAuthorIfNotExist(discordId, discordUsername) {
  const result = await pool.query("SELECT COUNT(*) FROM authors WHERE discordId = ?", [discordId]);
  if (result) return;

  await pool.query("INSERT INTO authors (discordId, discordUsername) VALUES (?, ?)", [discordId, discordUsername]);
  return;
}

async function getAuthorUsername(discordId) {
  try {
    const [username] = await pool.query("SELECT discordUsername FROM authors WHERE discordId = ?", [discordId]);
    return username[0].discordUsername;
  } catch {
    return "";
  }
}

async function getOpdracht(tableName, weekNr, opdrachtNr) {
  const [opdracht] = await pool.query(`SELECT * FROM ${tableName} WHERE weekNr = ? AND opdrachtNr = ?`, [weekNr, opdrachtNr]);
  return opdracht[0];
}

async function createOpdracht(tableName, weekNr, opdrachtNr, opdrachtInhoud, discordId, discordUsername) {
  createAuthorIfNotExist(discordId, discordUsername);
  const [opdracht] = await pool.query(`INSERT INTO ${tableName} (weekNr, opdrachtNr, opdrachtInhoud, author) VALUES (?, ?, ?, ?)`,
    [weekNr, opdrachtNr, opdrachtInhoud, discordId]
  );
  return opdracht.insertId;
}

await createOpdracht("JS", 1, 1, 'Yusu mooie opdracht', 1, 'test');
const result = await getOpdracht("JS", 1, 1);
console.log(result);
const author = await getAuthorUsername(1);
console.log(author);

await pool.end();
// const opdracht = await getOpdracht(1, 1);
// console.log(`author: ${opdracht.discordId}`);
// console.log(`Week: ${opdracht.weekNr}, Opdracht: ${opdracht.opdrachtNr}`);
// console.log(`Antwoord: ${opdracht.opdrachtInhoud}`);