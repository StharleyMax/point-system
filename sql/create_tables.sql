-- Create Table user
CREATE TABLE IF NOT EXISTS users (
  user_id Serial NOT NULL,
  cpf varchar(11) NOT NULL UNIQUE,
  name varchar(255) not null,
  password varchar(255) not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  PRIMARY KEY (user_id)
);

-- CREATE TABLE REGISTRO PONTO
CREATE TABLE IF NOT EXISTS point_record(
  point_record_id Serial NOT NULL,
  start_point timestamp,
  start_lunch timestamp,
  return_lunch  timestamp ,
  exit_point timestamp,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  user_id INT NOT NULL,
  PRIMARY KEY (point_record_id),
  CONSTRAINT fk_user_points
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
