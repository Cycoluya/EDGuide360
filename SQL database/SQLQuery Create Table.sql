USE EduGuide360;

CREATE TABLE learner(
	id INT IDENTITY (1,1) PRIMARY KEY,
	name VARCHAR (255),
	surname VARCHAR (255),
	email VARCHAR (255) not null,
	password VARCHAR (255) not null
);