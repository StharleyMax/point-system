-- Create Table user
CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL,
  name varchar(250) NOT NULL,
  PRIMARY KEY (user_id)
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
