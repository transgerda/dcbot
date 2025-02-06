CREATE DATABASE opdrachten_school;
USE opdrachten_school;

CREATE TABLE PHP (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  maker varchar(20) NOT NULL
);

CREATE TABLE OOP (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  maker varchar(20) NOT NULL
);

CREATE TABLE databases (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  maker varchar(20) NOT NULL
);

CREATE TABLE Javascript (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  maker varchar(20) NOT NULL
);

CREATE TABLE WDV (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  maker varchar(20) NOT NULL
);



-- INSERT INTO testtable (weekNr, opdrachtNr, opdrachtInhoud, maker)
-- VALUES 
--   (1, 1, 'Pietje heeft hele mooie code geschreven', 'Frits'),
--   (1, 1, 'gert houdt van bordspellen', 'Martijn');