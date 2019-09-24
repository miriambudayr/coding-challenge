CREATE DATABASE database;

CREATE TABLE tasks
(
  task_group VARCHAR(255),
  task_id INT NOT NULL PRIMARY KEY,
  task_name VARCHAR(255),
  completed_at DATE
);

CREATE TABLE dependencies
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  task_id INT FOREIGN KEY REFERENCES tasks
(task_id),
  dependency_id INT FOREIGN KEY REFERENCES tasks
(task_id)
)


