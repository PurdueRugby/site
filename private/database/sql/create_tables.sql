DROP TABLE IF EXISTS 'schedule';
CREATE TABLE 'schedule' (
  `id` int(11) ,
  `title` varchar(255) DEFAULT NULL,
  `date_played` DATETIME DEFAULT `TBD`,
  `location` varchar(255) DEFAULT `TBD`,
  `home_score` int DEFAULT NULL,
  `away_score` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

