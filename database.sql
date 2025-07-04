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



DELIMITER $$
CREATE PROCEDURE insert_random_enrollments()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE rand_course INT;
    DECLARE rand_days INT;
    DECLARE enrollment_date DATE;

    WHILE i <= 1000000 DO
        SET rand_course = FLOOR(1 + (RAND() * 100));
        SET rand_days = FLOOR(RAND() * 2922);
        SET enrollment_date = DATE_ADD('2018-01-01', INTERVAL rand_days DAY);

        INSERT INTO enrollments (course_id, student_name, enrolled_at)
        VALUES (
            rand_course,
            CONCAT('Student_', i),
            enrollment_date
        );
        SET i = i + 1;
    END WHILE;
END$$
DELIMITER ;
