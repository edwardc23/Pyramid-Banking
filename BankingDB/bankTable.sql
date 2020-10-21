CREATE DATABASE  IF NOT EXISTS `Entries`;
USE `Entries`;
--
-- Table structure for table `student`
--
DROP TABLE IF EXISTS `entry`;
CREATE TABLE `entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
 
  
  PRIMARY KEY (`id`)
) ;
CREATE TABLE admininfo (
                ID INT AUTO_INCREMENT NOT NULL,
                Username VARCHAR(1000) NOT NULL,
                Password VARCHAR(1000) NOT NULL,
                PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;