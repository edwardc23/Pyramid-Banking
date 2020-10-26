DROP DATABASE IF EXISTS `bankDB`;
CREATE DATABASE  IF NOT EXISTS `bankDB`;
USE `bankDB`;
--
-- Table structure for table `student`
--
DROP TABLE IF EXISTS `checking`;
CREATE TABLE `checking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
	acct_number VARCHAR(16) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    balance VARCHAR(30) NOT NULL,
    
  
  PRIMARY KEY (`id`)
) ;
DROP TABLE IF EXISTS `savings`;
CREATE TABLE `savings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
	acct_number VARCHAR(16) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    balance VARCHAR(30) NOT NULL,
    
  
  PRIMARY KEY (`id`)
) ;
DROP TABLE IF EXISTS `admininfo`;
CREATE TABLE admininfo (
                id INT AUTO_INCREMENT NOT NULL,
                user_name VARCHAR(1000) NOT NULL,
                password VARCHAR(1000) NOT NULL,
                full_name VARCHAR(1000) NOT NULL,
                saving VARCHAR(1000) NOT NULL,
                checking VARCHAR(1000) NOT NULL,

                PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;