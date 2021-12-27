-- Create Table user
CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL,
  name varchar(250) NOT NULL,
  PRIMARY KEY (user_id)
);


-- CREATE TABLE REGISTRO PONTO
CREATE TABLE IF NOT EXISTS point_record(
  point_record_id INT NOT NULL,
  start_point varchar(20),
  start_lunch varchar(20),
  return_lunch  varchar(20),
  exit_point varchar(20),
  user_id INT NOT NULL,
  PRIMARY KEY (point_record_id),
  CONSTRAINT fk_users
      FOREIGN KEY(user_id)
        REFERENCES users(user_id)
);



/*
exemplo com chave estrangeira
CREATE TABLE IF NOT EXISTS citys (
  city_id INT NOT NULL,
  city_name varchar(450) NOT NULL,
  country_id INT NOT NULL,
  PRIMARY KEY(city_id),
  CONSTRAINT fk_country
      FOREIGN KEY(country_id)
        REFERENCES country(country_id)
);

*/
