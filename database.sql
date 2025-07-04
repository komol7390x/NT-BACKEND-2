CREATE DATABASE IF NOT EXISTS online_curse;
USE online_curse;

-- @block
CREATE TABLE instructors (
id INT PRIMARY KEY AUTO_INCREMENT,
full_name VARCHAR(100),
rating DECIMAL(3,2)
);


CREATE TABLE courses (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(100),
instructor_id INT,
price DECIMAL(10,2),
FOREIGN KEY (instructor_id) REFERENCES instructors(id)
);

CREATE TABLE enrollments (
id INT PRIMARY KEY AUTO_INCREMENT,
course_id INT,
student_name VARCHAR(100),
enrolled_at DATE,
FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- @block
SELECT * FROM enrollments
