-- Criar banco e tabelas (MySQL)
CREATE DATABASE IF NOT EXISTS turmas_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE turmas_db;


DROP TABLE IF EXISTS atividades;
DROP TABLE IF EXISTS turmas;
DROP TABLE IF EXISTS professores;


CREATE TABLE professores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL
) ENGINE=InnoDB;


CREATE TABLE turmas (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
professor_id INT NOT NULL,
FOREIGN KEY (professor_id) REFERENCES professores(id) ON DELETE CASCADE
) ENGINE=InnoDB;


CREATE TABLE atividades (
id INT AUTO_INCREMENT PRIMARY KEY,
descricao TEXT NOT NULL,
turma_id INT NOT NULL,
FOREIGN KEY (turma_id) REFERENCES turmas(id) ON DELETE CASCADE
) ENGINE=InnoDB;


-- Inserir ao menos 3 registros por tabela
INSERT INTO professores (nome, email, senha) VALUES
('Ana Silva', 'ana.silva@example.com', '$2b$10$hashdummy1'),
('Bruno Costa', 'bruno.costa@example.com', '$2b$10$hashdummy2'),
('Carla Souza', 'carla.souza@example.com', '$2b$10$hashdummy3');


INSERT INTO turmas (nome, professor_id) VALUES
('Turma A', 1),
('Turma B', 1),
('Turma C', 2);


INSERT INTO atividades (descricao, turma_id) VALUES
('Atividade 1: Leitura', 1),
('Atividade 2: Exercícios', 1),
('Atividade 3: Avaliação', 2);