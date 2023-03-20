-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2023 at 05:05 PM
-- Server version: 5.7.40
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `age` date NOT NULL,
  `meansOfCommunication` int(11) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(30) NOT NULL,
  `houseNamber` varchar(10) NOT NULL,
  `zipCode` varchar(10) NOT NULL,
  `info` varchar(100) DEFAULT NULL,
  `isDeleted` tinyint(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `createTime`, `firstName`, `lastName`, `age`, `meansOfCommunication`, `phone`, `email`, `state`, `city`, `street`, `houseNamber`, `zipCode`, `info`, `isDeleted`) VALUES
(16, '2023-03-03 08:31:26', 'מנשה', 'אברהמי', '2015-03-11', 2, '0553627382', 'jhdfjg@lihdsf.com', 'ניו יורק', 'haifa', 'התאנה', '1558', '12332', NULL, 0),
(17, '2023-03-03 08:31:28', 'מנשה', 'אברהמי', '2015-03-11', 3, '0553627382', 'jhdfjg@lihdsf.com', 'ניו יורק', 'haifa', 'התאנה', '1558', '12332', NULL, 0),
(18, '2023-03-04 21:28:21', 'חיים', 'בן קיש', '2023-03-21', 2, '0553627382', '', 'ניו יורק', 'haifa', 'התאנה', '1558', '12332', NULL, 0),
(19, '2023-03-04 21:28:24', 'חיים', 'בן קיש', '2023-03-21', 2, '0553627382', '', 'ניו יורק', 'haifa', 'התאנה', '1558', '12332', NULL, 0),
(20, '2023-03-06 11:02:43', 'ghfgh', 'fghfgh', '2022-12-15', 3, '345345345', 'ffghfh@gfgh', 'fghfgh', 'fghfgh', 'fghfgh', '4', '5646', 'fghfhf', 0),
(21, '2023-03-06 11:03:42', 'fghfgh', 'fghfgh', '1994-07-05', 0, '4534556756', 'fgfghfh@fghfgh', '', 'fghfgh', 'fghfgh', '4', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `meansOfCommunication` int(11) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(30) NOT NULL,
  `houseNamber` varchar(10) NOT NULL,
  `zipCode` varchar(10) NOT NULL,
  `info` varchar(100) DEFAULT NULL,
  `isDeleted` tinyint(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `createTime`, `firstName`, `lastName`, `meansOfCommunication`, `phone`, `email`, `state`, `city`, `street`, `houseNamber`, `zipCode`, `info`, `isDeleted`) VALUES
(1, '2023-02-21 11:23:03', 'לוי יצחק', 'לויוב', 1, '0553627382', 'דגכדגכ', 'ישראל', 'קריית מלאכי', 'התאנה', '1', '12332', 'בדיקה 1', 1),
(2, '2023-02-21 11:23:16', 'יוני הכריש', 'לויוב', 1, '0553627382', 'levi@levi', 'ישראל', 'קריית מלאכי', 'התאנה', '1', '12332', 'בדיקה 28', 0),
(3, '2023-02-26 12:43:49', 'שרה המלכה', 'לויוב', 3, '0504343244', 'levi@levi.com', 'ניו יורק', 'ניו יורק', 'יוניון', '1558', '130231', 'יחי המלך', 0),
(4, '2023-02-27 10:05:04', 'dudi', 'leviov', 3, '0553627382', 'ljhkl@dfgfdgh.com', 'ישראל', 'haifa', 'התאנה', '1', '12332', 'rtyurtyuryu', 0),
(5, '2023-02-27 10:37:46', 'שרה', 'לויוב', 2, '0553627382', 'ghjgfj', 'ישראל', 'haifa', 'התאנה', '1558', '12332', '', 0),
(6, '2023-02-27 10:38:07', 'לוי הלוי לויוב', '8', 2, '0553627382', 'ghjgfj', 'ישראל', 'haifa', 'התאנה', '1558', '12332', '', 0),
(7, '2023-02-27 11:17:28', 'שמעון', 'sdafsdf', 2, '0553627382', 'sdf', 'ניו יורק', 'haifa', 'התאנה', '1558', '130231', '', 0),
(8, '2023-02-27 11:50:48', 'חיים ', 'הלוי', 2, '533434533', 'ghfgh', 'fgh', 'fgh', 'fgh', 'fgh', 'fgh', 'fgh', 1),
(9, '2023-02-27 11:50:48', 'ghfghf', 'fghf', 2, 'fghfgh', 'ghfgh', 'fgh', 'fgh', 'fgh', 'fgh', 'fgh', 'fgh', 1),
(10, '2023-02-28 12:21:57', 'sdf', 'fh', 0, 'fhgf', 'gf', 'gf', 'gf', 'ngf', 'gf', 'bnvn', 'bnn', 1),
(11, '2023-02-28 12:26:02', 'yf', 'fgf', 0, 'gf', 'gfng', 'fng', 'ng', 'fng', 'fn', 'gfn', 'bnb', 1),
(12, '2023-02-28 12:27:04', 'kkkkkk', 'asd', 0, 'gf', 'hf', 'hgf', 'gfg', 'fhg', 'fhg', 'fghf', 'hfjyg', 0),
(13, '2023-02-28 12:46:54', 'בדיקה 770', 'דג', 0, 'דגדג', 'דגכ', 'י', 'חכ', 'חכ', 'חכ', 'חכ', 'כחכ', 0),
(14, '2023-02-28 15:08:04', 'מיריימי', 'ןןי', 2, 'ןי', 'ןי', '', 'ג', 'לחי', 'לחי', '', 'לחי', 0),
(15, '2023-02-28 15:16:10', 'ככככככככככככ', 'עחע', 0, 'ע', 'חיעיח', 'יעחיע', 'חיע', 'חיע', 'חיעח', 'יע', '', 1),
(16, '2023-03-06 10:50:16', 'דוד', 'לוי', 0, '050328382', 'david@david', 'ישראל', 'נתניה', 'עומן', '2', '232323', 'קר\'קר\'קר', 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `imageName` varchar(50) DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `category`, `imageName`, `isDeleted`) VALUES
(1, 'נקניק', 10, 0, NULL, NULL, 1),
(2, 'אפרסק', 3.4, 3, NULL, NULL, 1),
(3, 'סרגל', 2, 0, NULL, NULL, 1),
(4, 'פפיאה', 10, 0, NULL, NULL, 1),
(5, 'אגס', 4, 0, NULL, NULL, 1),
(11, 'גמבה', 6, 1, NULL, NULL, 0),
(12, 'חסה', 5, 0, NULL, NULL, 0),
(18, 'תפילין', 3500, 500, NULL, NULL, 0),
(13, 'מלפפון', 3.9, 0, NULL, NULL, 0),
(14, 'בצל', 2.9, 0, NULL, NULL, 0),
(15, 'סלק', 3.9, 0, NULL, NULL, 0),
(16, 'תפו\"א', 1.9, 0, NULL, NULL, 0),
(17, 'תמרים ', 18, 5, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(200) NOT NULL DEFAULT '',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `createTime`, `userId`, `task`, `status`, `level`, `remark`, `isDeleted`) VALUES
(10, '2023-01-23 18:19:02.090596', 7, 'משימה 555', 0, 2, '', 0),
(11, '2023-01-23 18:19:07.612826', 7, 'משימה 2', 1, 1, '', 0),
(12, '2023-01-23 18:19:12.425056', 7, 'משימה 3', 0, 1, 'מאוד דחוףףףףףףףףףףף', 0),
(13, '2023-01-23 18:19:15.639717', 7, 'משימה 4', 2, 2, '', 0),
(14, '2023-01-23 18:19:19.489217', 7, 'משימה 5', 2, 1, '', 1),
(15, '2023-01-29 18:31:52.045611', 7, 'לוודא שאין כפילויות', 1, 0, '', 1),
(16, '2023-01-29 18:56:36.042422', 7, 'משימה 3', 0, 2, '', 0),
(17, '2023-02-04 22:15:57.063989', 7, 'בדיקה', 2, 1, '', 0),
(18, '2023-02-05 22:50:28.361607', 8, 'לעבוד על הפרוייקט', 0, 1, 'חשוב!', 0),
(19, '2023-02-06 21:47:05.564952', 9, 'לתלות כביסה', 2, 2, 'מאוד דחוף', 0),
(20, '2023-02-06 21:48:32.889369', 9, 'עוגיות', 1, 0, '', 1),
(22, '2023-02-23 12:07:08.002764', 7, 'בבא בתרא', 2, 1, '', 0),
(23, '2023-03-05 17:05:41.649363', 10, 'hii', 2, 0, '', 0),
(24, '2023-03-06 08:53:15.229562', 10, 'בדיקה 1', 0, 0, '', 0),
(25, '2023-03-06 16:22:41.593731', 7, 'תפוח', 2, 1, '', 0),
(26, '2023-03-06 20:52:42.695003', 7, 'ברוך', 2, 1, '', 0),
(27, '2023-03-07 16:59:48.704197', 10, 'איציק', 1, 0, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isManager` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`, `isManager`) VALUES
(1, '2023-01-11 20:44:41', 'dfger', 'dfgs@dfgdgs', 'dfgs', '234234234234', 0),
(3, '2023-01-15 17:53:24', 'levi', 'levi@levi', 'levi leviov', 'fcea920f7412b5da7be0cf42b8c93759', 0),
(4, '2023-01-15 18:14:25', 'yossi', 'yossi@yossi', 'yossi', 'b59c67bf196a4758191e42f76670ceba', 0),
(5, '2023-01-15 18:19:14', 'chim', 'yossi@yossi', 'avrham', 'c6f46d45bc02173543156c552764c939', 0),
(6, '2023-01-15 18:35:03', 'chim', 'yossi@yossi', 'qqqq', 'b59c67bf196a4758191e42f76670ceba', 0),
(7, '2023-01-15 20:00:53', 'לוי לויוב', 'ghjjjjj@fghfh', 'www', 'e34a8899ef6468b74f8a1048419ccc8b', 0),
(8, '2023-02-05 22:49:24', 'לוי לויוב', 'levi@gmail.com', 'levi', '81dc9bdb52d04dc20036dbd8313ed055', 0),
(9, '2023-02-06 21:46:18', 'שרה לויוב', 'sarayakobov3@gmail.com', 'sara', '20029b8274d349f604e9a643ff29889a', 0),
(10, '2023-03-05 17:04:25', 'levi Leviov', 'levi.leviov@gmail.com', '', '', 0),
(11, '2023-03-05 18:10:28', 'לביא ניהול נכסים', 'laviltd1234@gmail.com', '', '', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
