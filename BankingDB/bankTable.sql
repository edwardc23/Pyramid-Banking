CREATE DATABASE  IF NOT EXISTS `bankDB`;
USE `bankDB`;
--
-- Table structure for table `student`
--
DROP TABLE IF EXISTS `checking`;
CREATE TABLE `checking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
	AcctNumber VARCHAR(16) NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    Balance VARCHAR(30) NOT NULL,
    
  
  PRIMARY KEY (`id`)
) ;
DROP TABLE IF EXISTS `savings`;
CREATE TABLE `savings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
	AcctNumber VARCHAR(16) NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    Balance VARCHAR(30) NOT NULL,
    
  
  PRIMARY KEY (`id`)
) ;
DROP TABLE IF EXISTS `admininfo`;
CREATE TABLE admininfo (
                ID INT AUTO_INCREMENT NOT NULL,
                Username VARCHAR(1000) NOT NULL,
                Password VARCHAR(1000) NOT NULL,
                FullName VARCHAR(1000) NOT NULL,
                Saving VARCHAR(1000) NOT NULL,
                Checking VARCHAR(1000) NOT NULL,

                PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;