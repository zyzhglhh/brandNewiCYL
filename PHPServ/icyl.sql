-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2014 年 08 月 06 日 12:24
-- 服务器版本: 5.5.24-log
-- PHP 版本: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `icyl`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `UserName` char(20) NOT NULL,
  `Password` char(50) NOT NULL,
  `Name` char(20) CHARACTER SET utf8 NOT NULL,
  `Gender` tinyint(1) NOT NULL,
  `Birthday` date DEFAULT NULL,
  `Mobile` char(20) NOT NULL,
  `Email` char(50) DEFAULT NULL,
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`UserName`, `Password`, `Name`, `Gender`, `Birthday`, `Mobile`, `Email`) VALUES
('aaaaaaaaaaa', 'a642a77abd7d4f51bf9226ceaf891fcbb5b299b8', '啊啊', 1, '0000-00-00', '12222222222', NULL),
('alexgzhou', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '周天舒', 1, '2014-08-01', '13282037883', 'alexgzhou@163.com'),
('alexgzhou1', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '周天舒', 0, '0000-00-00', '13282037883', NULL),
('alexgzhou11', '004537f3b1fd67347489185a1c4b55da58f6edca', '地点', 1, '0000-00-00', '1111111111', NULL),
('wwwwwwww', '267c2f5c46997698ca1f8f2889536a658d337484', '的在', 1, '0000-00-00', '32343423123', NULL),
('wwwwwwwwww', 'f638e2789006da9bb337fd5689e37a265a70f359', '地方', 1, '0000-00-00', '4534534534534', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
