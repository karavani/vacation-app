-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: vacation_schema
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `followed_vacations`
--

DROP TABLE IF EXISTS `followed_vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followed_vacations` (
  `user_id` bigint NOT NULL,
  `vacation_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`vacation_id`),
  KEY `FK_vacations_followed_vacations_idx` (`vacation_id`),
  CONSTRAINT `FK_users_followed_vacations` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_vacations_followed_vacations` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followed_vacations`
--

LOCK TABLES `followed_vacations` WRITE;
/*!40000 ALTER TABLE `followed_vacations` DISABLE KEYS */;
INSERT INTO `followed_vacations` VALUES (2,2),(9,2),(11,2),(15,2),(2,3),(1,5),(2,5),(9,7),(11,7),(9,8),(11,8),(2,23),(2,29),(23,29);
/*!40000 ALTER TABLE `followed_vacations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email` varchar(145) DEFAULT NULL,
  `user_type` varchar(45) NOT NULL DEFAULT 'customer',
  PRIMARY KEY (`id`),
  UNIQUE KEY `usename_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','password',NULL,'admin'),(2,'Kyle','e2d2af960ada70e65297bec6a535e705','Kyle@gmail.com','customer'),(3,'john','123123',';aslfm;lasjf;las','customer'),(4,'johasfnasd','c5724ea9a640e3c2fcd919dd989f0759',';aslfm;lasjf;las','customer'),(6,'johaawfasfsfnasd','c5724ea9a640e3c2fcd919dd989f0759',';aslfm;lasjf;las','customer'),(8,'Ali','e2d2af960ada70e65297bec6a535e705','noam12882@gmail.com','customer'),(9,'Noam ---->','c5724ea9a640e3c2fcd919dd989f0759','noam12882@gmail.com','admin'),(10,'Brad','c5724ea9a640e3c2fcd919dd989f0759','brad@walla.com','customer'),(11,'Gil','c5724ea9a640e3c2fcd919dd989f0759','gilhafa2@gmail.com','customer'),(13,'Bella','e2d2af960ada70e65297bec6a535e705','bellaloti@gmail.com','customer'),(14,'Mili','8155c61ac2e69a443cbcbc263a1dcf4b','milliondollar@toto.com','customer'),(15,'ori','c5724ea9a640e3c2fcd919dd989f0759','orieri@walla.com','customer'),(16,'illan','69f4d5791ff3a0ec57de020e31a32b2b','ilanium@wallak.col','customer'),(17,'funny','e4f3cab1bdbe7e3267970e16b24ce487','funnyemail@gmail.com','customer'),(18,'tov','16f0592fd36e3fc86371523da53f12f6','tovli@gmail.com','customer'),(19,'don','69f4d5791ff3a0ec57de020e31a32b2b','dondon@gmail.com','customer'),(20,'money','196ba61946184f9e0ed56286a35303b4','moneytalk@walla.com','customer'),(21,'Beni','9efdb3a2e40eb297e8568181af58c246','beniboo@elelisrael.com','customer'),(22,'won','672c8bf9534ecbee4eda0fd872b22745','wontheelection@bibi.com','customer'),(23,'felix','e2d2af960ada70e65297bec6a535e705','felix@gmail.com','customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `destination` varchar(150) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` bigint NOT NULL,
  `image_url` varchar(350) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (2,'Australia','2021-03-16','2021-04-06','In every corner of Australia you’ll find unique experiences and landscapes bursting with colour, culture and natural beauty',620,'https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/03/move-to-australia.jpg?fit=1024%2C684&ssl=1'),(3,'Thailand','2021-03-01','2021-04-02','Thailand is so popular is the people, the culture, and the natural Thailand is so popularThailand is so popular is the people, the culture, and the natural  isgdgsdgs\nasdgThailand is so popular is the people, the culture, and \nsdsdg\nsdgsdds  ',640,'https://www.traveldailymedia.com/assets/2020/01/thailandblogger.jpg'),(5,'Venezuela','2021-02-27','2021-03-14','is a country on the northern coast of South America, consisting of a continental landmass and many islands and islets in the Caribbean Sea.',420,'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_319452293.jpg'),(7,'Tanzania','2027-12-21','2012-03-21','officially the United Republic of Tanzania is a country in East Africa within the African Great Lakes region',520,'https://www.state.gov/wp-content/uploads/2018/11/Tanzania-e1555938157355-2501x1406.jpg'),(8,'Japan','2021-01-13','2021-01-30','guergous place',570,'https://cdn.bcdtravel.com/move-global/wp-content/uploads/sites/142/Move_MarketMonitor_Japan_slider_May2019.jpg'),(23,'Greece','2021-01-20','2021-01-30',' the cradle of Western Civilization, the birthplace of democracy, the Olympic Games, and its ancient history and magnificent temples',120,'https://www.vacay.co.ke/wp-content/uploads/2018/02/greek-islands-holiday.jpg'),(29,'Netherlands','2021-01-20','2021-01-30','informally Holland, is a country primarily located in Western Europe and partly in the Caribbean,',510,'https://broganabroad.com/wp-content/uploads/2020/05/Alkmaar-Netherlands.jpg'),(31,'France','2021-02-10','2021-02-27','officially the French Republic is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions',366,'https://static.officeholidays.com/images/1280x853c/france-01.jpg');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-07 15:51:44
