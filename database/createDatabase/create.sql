CREATE DATABASE opdrachten_school_dcbot;
USE opdrachten_school_dcbot;

CREATE TABLE authors (
  discordId integer PRIMARY KEY,
  discordUsername varchar(50)
);

CREATE TABLE PHP (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  author varchar(20) NOT NULL
);

CREATE TABLE OOP (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  author varchar(20) NOT NULL
);

CREATE TABLE DB (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  author varchar(20) NOT NULL
);

CREATE TABLE JS (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  author varchar(20) NOT NULL
);

CREATE TABLE WDV (
  id integer PRIMARY KEY AUTO_INCREMENT,
  weekNr int NOT NULL,
  opdrachtNr int NOT NULL,
  opdrachtInhoud varchar(500) NOT NULL,
  author varchar(20) NOT NULL
);