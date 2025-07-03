-- create database if not exists Online_Curs;
-- use Online_Curs;

-- @block

create table if not exists teachers(
    id int auto_increment primary key not null,
    fullname varchar(32), 
    specialization varchar(32)
    );

-- @block

CREATE TABLE IF NOT EXISTS courses(
    id int auto_increment primary key not null,
    title varchar(50),
    description TEXT,
    teachers_id int,
    foreign key(teachers_id) references teachers(id),
    price decimal(10,2)
);

CREATE TABLE IF NOT EXISTS students(
    id int auto_increment primary key not null,
    fullname varchar(32),
    phone varchar(32) unique
);

CREATE TABLE IF NOT EXISTS enrollments(
    id int auto_increment primary key not null,
    students_id int,
    courses_id int,
    foreign key(students_id) references students(id),
    foreign key(courses_id) references courses(id),
    enrolled_at DATE
);
-- ----------------------------------------------------------------

-- @block
INSERT INTO teachers(fullname,specialization) VALUES
('Anvar Qodirov', 'Matematika'),
('Dilfuza Karimova', 'Biologiya'),
('Javohir To`xtayev', 'Fizika'),
('Gulbahor Islomova', 'Tarix'),
('Murod Shukurov', 'Ingliz tili');
-- @block
INSERT INTO courses (title, description, teachers_id, price) VALUES
("Boshlang'ich Algebra", "Bu kurs algebra asoslarini o'rgatadi.", 1, 120000.00),
('Organik Kimyo', 'Kurs organik birikmalar haqida.', 2, 150000.00),
('Mexanika Asoslari', 'Mexanika asosiy tushunchalari.', 3, 130000.00),
('Jahon Tarixi', 'Dunyo tarixi haqida kurs.', 4, 110000.00),
('IELTS Tayyorlov', 'IELTS imtihoniga tayyorlov.', 5, 250000.00),
('Geometriya', 'Geometriya asosiy mavzular.', 1, 125000.00),
('Botanika', "O'simliklar va ularning tuzilishi.", 2, 140000.00),
('Optika', 'Nur va optika asoslari.', 3, 135000.00),
("O'zbekiston Tarixi", 'Yurtimiz tarixi haqida.', 4, 115000.00),
('Speaking Club', 'Ingliz tili gapirish amaliyoti.', 5, 200000.00);

-- @block
INSERT INTO students (fullname, phone) VALUES
('Azizbek Karimov', '+998901234567'),
('Dilnoza Akbarova', '+998911112233'),
('Javohir Salimov', '+998933334455'),
("Madina To'raeva", '+998944445566'),
('Sherzod Umarov', '+998955556677');

-- @block

INSERT INTO enrollments(students_id,courses_id,enrolled_at) VALUES
(1, 3, '2025-06-01'),
(2, 5, '2025-06-03'),
(3, 2, '2025-06-05'),
(4, 7, '2025-06-07'),
(5, 1, '2025-06-10'),
(2, 8, '2025-06-12'),
(3, 4, '2025-06-15');

-- @block
SELECT t.id,c.teachers_id,t.fullname,c.title FROM courses c INNER JOIN teachers t on c.teachers_id=t.id;

-- @block
SELECT s.fullname,c.title FROM enrollments e INNER JOIN students s 
ON e.students_id=s.id INNER JOIN courses c ON e.courses_id=c.id;