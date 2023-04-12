-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2023 at 12:01 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `copy_of_mail_addresses_list_123_`
--

CREATE TABLE `copy_of_mail_addresses_list_123_` (
  `id` int(11) NOT NULL,
  `Name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `copy_of_mail_addresses_list_123_`
--

INSERT INTO `copy_of_mail_addresses_list_123_` (`id`, `Name`, `email`, `password`) VALUES
(2, 'David Moto.', 'david.moto@taitataveta.go.ke', 'Welcome2020!'),
(3, 'Harrison Kamwana?', 'harrison.kamwana@taitataveta.go.ke', 'Welcome2020!'),
(4, 'Raphael Mwadime', 'raphael.mwadime@taitataveta.go.ke', 'Welcome2020!'),
(5, 'Robin Kimari', 'robin.kimari@taitataveta.go.ke', 'Welcome2020!'),
(6, 'Amos Saleh', 'amos.saleh@taitataveta.go.ke', 'Welcome2020!'),
(7, 'Mercy Hamisi', 'mercy.hamisi@taitataveta.go.ke', 'Welcome2020!'),
(8, 'Lucy Mrombo', 'lucy.mrombo@taitataveta.go.ke', 'Welcome2020!'),
(9, 'Hope Wanyika', 'hope.wanyika@taitataveta.go.ke', 'Welcome2020!'),
(10, 'Samson Kamande', 'samson.kamande@taitataveta.go.ke', 'Welcome2020!'),
(11, 'Justus Mwandawiro', 'justus.mwandawiro@taitataveta.go.ke', 'Welcome2020!'),
(12, 'Aloice Mjomba', 'aloice.mjomba@taitataveta.go.ke', 'Welcome2020!'),
(13, 'Crispus Mwambi', 'crispus.mwambi@taitataveta.go.ke', 'Welcome2020!'),
(14, 'Samuel Maina', 'samuel.maina@taitataveta.go.ke', 'Welcome2020!'),
(15, 'Antony Otuoma', 'antony.otuoma@taitataveta.go.ke', 'Welcome2020!'),
(16, 'Emily Kamata', 'emily.kamata@taitataveta.go.ke', 'Welcome2020!'),
(17, 'Julius Mkungu', 'julius.mkungu@taitataveta.go.ke', 'Welcome2020!'),
(18, 'Simon Mwachia', 'simon.mwachia@taitataveta.go.ke', 'Welcome2020!'),
(19, 'Gibran Mwadime', 'gibran.mwadime@taitataveta.go.ke', 'Welcome2020!'),
(20, 'Kelvin Kitonga', 'kelvin.kitonga@taitataveta.go.ke', 'Welcome2020!'),
(21, 'Stanley Mwang\'ombe', 'stanley.mwangombe@taitataveta.go.ke', 'Welcome2020!'),
(22, 'Raymond Mwalugha', 'raymond.mwalugha@taitataveta.go.ke', 'Welcome2020!'),
(23, 'Polinah Wanjala', 'polinah.wanjala@taitataveta.go.ke', 'Welcome2020!'),
(24, 'Defence Mwandoe', 'defence.mwandoe@taitataveta.go.ke', 'Welcome2020!'),
(25, 'Evelyn Mngoda', 'evelyn.mngoda@taitataveta.go.ke', 'Welcome2020!'),
(26, 'Joseph Kenyatta Mnyauro', 'joseph.kenyatta@taitataveta.go.ke', 'Welcome2020!'),
(27, 'Julither Mwaviswa', 'julither.mwaviswa@taitataveta.go.ke', 'Welcome2020!'),
(28, 'Julius Shaki', 'julius.shaki@taitataveta.go.ke', 'Welcome2020!'),
(29, 'Holliness Kawa', 'holliness.kawa@taitataveta.go.ke', 'Welcome2020!'),
(30, 'Abigael Mwaluma', 'abigael.mwaluma@taitataveta.go.ke', 'Welcome2020!'),
(31, 'Joyce Mwasio', 'joyce.mwasio@taitataveta.go.ke', 'Welcome2020!'),
(32, 'Hussein Menza', 'hussein.menza@taitataveta.go.ke', 'Welcome2020!'),
(33, 'Cosmus Mwaghesha', 'cosmus.mwaghesha@taitataveta.go.ke', 'Welcome2020!'),
(34, 'Aggrey Mnyambo', 'aggrey.mnyambo@taitataveta.go.ke', 'Welcome2020!'),
(35, 'Agnes Mwadime', 'agnes.mwadime@taitataveta.go.ke', 'Welcome2020!'),
(36, 'Erusmus Mwanyasi', 'erusmus.mwanyasi@taitataveta.go.ke', 'Welcome2020!'),
(37, ' Dr. Sikujua Seboru', 'sikujua.seboru@taitataveta.go.ke', 'Welcome2020!'),
(38, 'Rose Sariki ', 'rose.sariki@taitataveta.go.ke', 'Welcome2020!'),
(39, 'Francis Rongaine ', 'francis.rongaine@taitataveta.go.ke', 'Welcome2020!'),
(40, 'Isaac Kitheka', 'isaac.kitheka@taitataveta.go.ke', 'Welcome2020!'),
(41, 'Rosina Kisochi', 'rosina.kisochi@taitataveta.go.ke', 'Welcome2020!'),
(42, 'Moris Tunge', 'moris.tunge@taitataveta.go.ke', 'Welcome2020!'),
(43, 'Maureen Kirigha', 'maureen.kirigha@taitataveta.go.ke', 'Welcome2020!'),
(44, 'George Mwanjala ', 'george.mwanjala@taitataveta.go.ke', 'Welcome2020!'),
(45, 'Mercy Mwazo', 'mercy.mwazo@taitataveta.go.ke', 'Welcome2020!'),
(46, 'Rafael Kimbio ', 'rafael.kimbio@taitataveta.go.ke', 'Welcome2020!'),
(47, 'Esther Mwangombe ', 'esther.mwangombe@taitataveta.go.ke', 'Welcome2020!'),
(48, 'Stanley Mwaighacho', 'stanley.maighacho@taitataveta.go.ke', 'Welcome2020!'),
(49, 'Joseph Jumases', 'joseph.jumases@taitataveta.go.ke', 'Welcome2020!'),
(50, 'Michael Mwawasi', 'michael.mwawasi@taitataveta.go.ke', 'Welcome2020!'),
(51, 'Jesper Kisombe ', 'jesper.kisombe@taitataveta.go.ke', 'Welcome2020!'),
(52, 'Topister Lenjo ', 'topister.lenjo@taitataveta.go.ke', 'Welcome2020!'),
(53, 'Stanley Makeo ', 'stanley.makeo@taitataveta.go.ke', 'Welcome2020!'),
(54, 'Dawis Mwanyumba ', 'dawis.mwanyumba@taitataveta.go.ke', 'Welcome2020!'),
(55, 'Charles Mwadeghu ', 'charles.mwadeghu@taitataveta.go.ke', 'Welcome2020!'),
(56, 'Jones Mwasi ', 'jones.mwasi@taitataveta.go.ke', 'Welcome2020!'),
(57, 'Martin Madaraka ', 'martin.madaraka@taitataveta.go.ke', 'Welcome2020!'),
(58, 'Gasper Kabaka', 'gasper.kabaka@taitataveta.go.ke', 'Welcome2020!'),
(59, 'Silvanus Mwakoma', 'silvanus.mwakoma@taitataveta.go.ke', 'Welcome2020!'),
(60, 'David Ngumbao', 'david.ngumbao@taitataveta.go.ke', 'Welcome2020!'),
(61, 'sabastian Mrombo', 'sabastian.mrombo@taitataveta.go.ke', 'Welcome2020!'),
(62, 'Wilbad Chombo', 'wilbad.chombo@taitataveta.go.ke', 'Welcome2020!'),
(63, 'Fridah Mwamengi', 'fridah.mwamengi@taitataveta.go.ke', 'Welcome2020!'),
(64, 'Reuben Nyondo', 'reuben.nyondo@taitataveta.go.ke', 'Welcome2020!'),
(65, 'Calist Mwashengwa', 'calist.mwashengwa@taitataveta.go.ke', 'Welcome2020!'),
(66, 'Peter Mzugha', 'peter.mzugha@taitataveta.go.ke', 'Welcome2020!'),
(67, 'Browne Mwanyalo', 'brian.mwanyalo@taitataveta.go.ke', 'Welcome2020!'),
(68, 'Richard  Mwabusa', 'richard.mwabusa@taitataveta.go.ke', 'Welcome2020!'),
(69, 'Benedict Mwania', 'benedict.mwania@taitataveta.go.ke', 'Welcome2020!'),
(70, 'Simeon Musimi', 'simeon.musimi@taitataveta.go.ke', 'Welcome2020!'),
(71, 'Joseph Leiyan', 'joseph.leiyan@taitataveta.go.ke', 'Welcome2020!'),
(72, 'Edward Poisa', 'edward.poisa@taitataveta.go.ke', 'Welcome2020!'),
(73, 'Fredrick Mwanjulu', 'fredrick.mwanjulu@taitataveta.go.ke', 'Welcome2020!'),
(74, 'Ibrahim Sang\'eno', 'ibrahim.sangeno@taitataveta.go.ke', 'Welcome2020!'),
(75, 'Benjamin Mwadeghu', 'benjamin.mwadeghu@taitataveta.go.ke', 'Welcome2020!'),
(76, 'Joan Lavoga', 'joanlavoga@taitataveta.go.ke', 'Welcome2020!'),
(77, 'Selina Mwaruma', 'selina.mwaruma@taitataveta.go.ke', 'Welcome2020!'),
(78, 'Solomon Mbwangi', 'solomon.mbwangi@taitataveta.go.ke', 'Welcome2020!'),
(79, 'Christine Tatu', 'christine.tatu@taitataveta.go.ke', 'Welcome2020!'),
(80, 'Hamilliton Maza', 'hamilliton.maza@taitataveta.go.ke', 'Welcome2020!'),
(81, 'Evelyne Mwakidende', 'evelynemwakidende@taitataveta.go.ke', 'Welcome2020!'),
(82, 'Harrison Mwakulomba', 'harrisonmwakulomba@taitataveta.go.ke', 'Welcome2020!'),
(83, 'Haron Tsuma', 'harontsuma@taitataveta.go.ke', 'Welcome2020!'),
(84, 'Peter Mbaya', 'petermbaya@taitataveta.go.ke', 'Welcome2020!'),
(85, 'Romana Chari', 'romanachari@taitataveta.go.ke', 'Welcome2020!'),
(86, 'Onyiego Nyakundi', 'onyiegonyakundi@taitataveta.go.ke', 'Welcome2020!'),
(87, 'Solomon Maghanga', 'solomonmaghanga@taitataveta.go.ke', 'Welcome2020!'),
(88, 'Edward Shaghasha', 'edwardshaghasha@taitataveta.go.ke', 'Welcome2020!'),
(89, 'Barnabas Mwazi', 'barnabasmwazi@taitataveta.go.ke', 'Welcome2020!'),
(90, 'Joel Kimori', 'joelkimori@taitataveta.go.ke', 'Welcome2020!'),
(91, 'Julius Mjawasi', 'juliusmjawasi@taitataveta.go.ke', 'Welcome2020!'),
(92, 'Aron Kiprono', 'aronkiprono@taitataveta.go.ke', 'Welcome2020!'),
(93, 'Nicholas Mbede', 'nicholasmbede@taitataveta.go.ke', 'Welcome2020!'),
(94, 'Edward Mwang\'ombe', 'edwardmwangombe@taitataveta.go.ke', 'Welcome2020!'),
(95, 'Lucas Mlolwa', 'lucasmlolwa@taitataveta.go.ke', 'Welcome2020!'),
(96, 'Chrispin Mghenyi', 'chrispinmghenyi@taitataveta.go.ke', 'Welcome2020!'),
(97, 'Stephen Sekiondo', 'stephensekiondo@taitataveta.go.ke', 'Welcome2020!'),
(98, 'Samson Masale', 'samsonmasale@taitataveta.go.ke', 'Welcome2020!'),
(99, 'Erick Kinama', 'erickkinama@taitataveta.go.ke', 'Welcome2020!'),
(100, 'Kevin Omondi', 'kevinomondi@taitataveta.go.ke', 'Welcome2020!'),
(101, 'Abraham Mwakulomba', 'abrahammwakulomba@taitataveta.go.ke', 'Welcome2020!'),
(102, 'Willyhem Nyanyao', 'willyhemnyanyao@taitataveta.go.ke', 'Welcome2020!'),
(103, 'Florence Mnjallah', 'florencemnjallah@taitataveta.go.ke', 'Welcome2020!'),
(104, 'Danson Mwaimbe', 'dansonmwaimbe@taitataveta.go.ke', 'Welcome2020!'),
(105, 'Kevin Moze', 'kevinmoze@taitataveta.go.ke', 'Welcome2020!'),
(106, 'Zeruliah Maghanga', 'zeruliahmaghanga@taitataveta.go.ke', 'Welcome2020!'),
(107, 'Simon Mwangoma', 'simonmwangoma@taitataveta.go.ke', 'Welcome2020!'),
(108, 'Caroline Mghanga', 'carolinemghanga@taitataveta.go.ke', 'Welcome2020!'),
(109, 'Agnela Mwadali', 'agnelamwadali@taitataveta.go.ke', 'Welcome2020!'),
(110, 'Lazarus Mwaisakenyi', 'lazarusmwaisakenyi@taitataveta.go.ke', 'Welcome2020!'),
(111, 'Fredrick Ongo', 'fredrickongo@taitataveta.go.ke', 'Welcome2020!'),
(112, 'Violet Nasumuni', 'violetnasumuni@taitataveta.go.ke', 'Welcome2020!'),
(116, 'Davis Mwakazi', 'davis.mwakazi@taitataveta.go.ke', 'Welcome2020!'),
(117, 'Albert Mwakio', 'albert.mwakio@taitataveta.go.ke', 'Welcome2020!'),
(118, 'Elizabeth Ngele', 'elizabeth.ngele@taitataveta.go.ke', 'Welcome2020!'),
(119, 'Linah Mole', 'linah.mole@taitataveta.go.ke', 'Welcome2020!'),
(120, 'Christine Mwakera', 'christine.mwakera@taitataveta.go.ke', 'Welcome2020!'),
(121, 'Director Healthservices', 'director.healthservices@taitataveta.go.ke', 'Welcome2020!'),
(122, 'MoiCounty Refferal', 'county.refferal@taitataveta.go.ke', 'Welcome2020!'),
(123, 'Wesu subcounty', 'wesu.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(124, 'Mwatate subcounty', 'mwatate.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(125, 'Taveta subcounty', 'taveta.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(126, 'Wundanyi subcounty', 'wundanyi.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(127, 'Wesu subcounty', 'wesu.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(128, 'Mwatate subcounty', 'mwatate.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(129, 'Taveta subcounty', 'taveta.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(130, 'Wundanyi subcounty', 'wundanyi.subcounty@taitataveta.go.ke', 'Welcome2020!'),
(131, 'CountyHealth Management', 'health.management@taitataveta.go.ke', 'Welcome2020!'),
(132, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!'),
(133, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!'),
(134, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!'),
(135, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!'),
(136, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!'),
(137, 'cco Health', 'ccohealth@taitataveta.go.ke', 'Welcome2020!'),
(138, 'healthservices Taita', 'healthservices@taitataveta.go.ke', 'Welcome2020!'),
(139, 'daniel Mwakisha', 'daniel.mwakisha@taitataveta.go.ke', 'Welcome2020!'),
(140, 'Philomena Kirote', 'philomena.kirote@taitataveta.go.ke', 'Welcome2020!'),
(141, 'educ libraries', 'educlibraries@taitataveta.go.ke', 'Welcome2020!'),
(142, 'Philip Mwangale', 'philip.mwangale@taitataveta.go.ke', 'Welcome2020!'),
(143, 'loans board', 'loansboard@taitataveta.go.ke', 'Welcome2020!'),
(144, 'Raphael Chola', 'raphael.chola@taitataveta.go.ke', 'Welcome2020!'),
(145, 'polina Wanjala', 'polina.wanjala@taitataveta.go.ke', 'Welcome2020!'),
(146, 'Patroba Mwambogha', 'patroba.mwambogha@taitataveta.go.ke', 'Welcome2020!'),
(147, 'Winfred mdali', 'winfred.mdali@taitataveta.go.ke', 'Welcome2020!'),
(148, 'Vincent Chege', 'Vincent.Chege@taitataveta.go.ke', 'Welcome2020!'),
(149, 'Folrence Fundi', 'florence.fundi@taitataveta.go.ke', 'Welcome2020!'),
(150, 'Frank Mwangemi', 'frank.mwangemi@taitataveta.go.ke', 'Welcome2020!'),
(151, 'Sylvanus Mwakoma', 'Sylvanus.mwakoma@taitataveta.go.ke', 'Welcome2020!'),
(152, 'Kefa Mshimba', 'kefa.mshimba@taitataveta.go.ke', 'Welcome2020!'),
(153, 'Donald Ndau', 'donald.ndau@taitataveta.go.ke', 'Welcome2020!'),
(154, 'KALAMA MASHA', 'kalama.masha@taitataveta.go.ke', 'Welcome2020!'),
(155, 'PHEDYLORAH KENGEDA', 'phedylorah.kengeda@taitataveta.go.ke', 'Welcome2020!'),
(156, 'DENNIS MWASHUMA', 'dennis.mwashuma@taitataveta.go.ke', 'Welcome2020!'),
(157, 'AQULINA MILIMITO', 'aqulina.milimito@taitataveta.go.ke', 'Welcome2020!'),
(158, 'ERASTUS GONZI', 'erastus.gonzi@taitataveta.go.ke', 'Welcome2020!'),
(159, 'JANE MAJALA', 'jane.majala@taitataveta.go.ke', 'Welcome2020!'),
(160, 'NICKSON MWADIME', 'nickson.mwadime@taitataveta.go.ke', 'Welcome2020!'),
(161, 'MARY MNGOLA', 'mary.mngola@taitataveta.go.ke', 'Welcome2020!'),
(162, 'DANIEL WAMBUI', 'daniel.wambui@taitataveta.go.ke', 'Welcome2020!'),
(163, 'PATRICK ALWALA', 'patrick.alwala@taitataveta.go.ke', 'Welcome2020!'),
(164, 'Trade Com', 'tradecom@taitataveta.go.ke', 'Welcome2020!'),
(165, 'Agriculture Taita', 'agriculture@taitataveta.go.ke', 'Welcome2020!'),
(166, 'cco Agriculture', 'ccoagriculture@taitataveta.go.ke', 'Welcome2020!'),
(167, 'sabina maghanga', 'sabina.maghanga@taitataveta.go.ke', 'Welcome2020!'),
(168, 'davis mshighati', 'davis.mshighati@taitataveta.go.ke', 'Welcome2020!'),
(169, 'christopher pongah', 'christopher.pongah@taitataveta.go.ke', 'Welcome2020!'),
(170, 'alfred mlolwa', 'alfred.mlolwa@taitataveta.go.ke', 'Welcome2020!'),
(171, 'mutie mota', 'mutie.mota@taitataveta.go.ke', 'Welcome2020!'),
(172, 'Mathew Mwamburi', 'mathmwamburi@taitataveta.go.ke', 'Welcome2020!'),
(173, 'cco Finance', 'ccofinance@taitataveta.go.ke', 'Welcome2020!'),
(174, 'finance taita', 'finance@taitataveta.go.ke', 'Welcome2020!'),
(175, 'Fredrick Nganga', 'fredrick.nganga@taitataveta.go.ke', 'Welcome2020!'),
(176, 'internal audit', 'internalaudit@taitataveta.go.ke', 'Welcome2020!'),
(177, 'itax taita', 'itax@taitataveta.go.ke', 'Welcome2020!'),
(178, 'mtt revenue', 'mttrevenue@taitataveta.go.ke', 'Welcome2020!'),
(179, 'rev director', 'revdirector@taitataveta.go.ke', 'Welcome2020!'),
(180, 'Josephine Kache', 'josephine.kache@taitataveta.go.ke', 'Welcome2020!'),
(181, 'Joyce Kambe', 'joyce.kambe@taitataveta.go.ke', 'Welcome2020!'),
(182, 'planning taita', 'planning@taitataveta.go.ke', 'Welcome2020!'),
(183, 'procurement taita', 'procurement@taitataveta.go.ke', 'Welcome2020!'),
(184, 'Leonard Langat', 'llangat@taitataveta.go.ke', 'Welcome2020!'),
(185, 'Eric Mwamburi', 'erickmwamburi@taitataveta.go.ke', 'Welcome2020!'),
(186, 'Davis Mwangoma', 'mwangomadavis@taitataveta.go.ke', 'Welcome2020!'),
(187, 'Cathrine Ogola', 'ogola.kate@taitataveta.go.ke', 'Welcome2020!'),
(188, 'Wilson Menza', 'wilson.menza@taitataveta.go.ke', 'Welcome2020!'),
(189, 'silas Njongwa', 'silas.njongwa@taitataveta.go.ke', 'Welcome2020!'),
(190, 'Prisillar Mwandawiro', 'prisillar.mwandawiro@taitataveta.go.ke', 'Welcome2020!'),
(191, 'Dan Githira', 'dgithira@taitataveta.go.ke', 'Welcome2020!'),
(192, 'environment taita', 'environment@taitataveta.go.ke', 'Welcome2020!'),
(193, 'Grace Furo', 'grace.furo@taitataveta.go.ke', 'Welcome2020!'),
(194, 'lands taita', 'lands@taitataveta.go.ke', 'Welcome2020!'),
(195, 'Getrude Shuwe', 'getrude.shuwe@taitataveta.go.ke', 'Welcome2020!'),
(196, 'Reuben ngeti', 'reuben.ngeti@taitataveta.go.ke', 'Welcome2020!'),
(197, 'Joyce Segi', 'joyce.segi@taitataveta.go.ke', 'Welcome2020!'),
(198, 'Lucy Madanji', 'lucy.madanji@taitataveta.go.ke', 'Welcome2020!'),
(199, 'ict taita', 'ict@taitataveta.go.ke', 'Welcome2020!'),
(200, 'ict director', 'ictdirector@taitataveta.go.ke', 'Welcome2020!'),
(201, 'ict support', 'ictsupport@taitataveta.go.ke', 'Welcome2020!'),
(202, 'Clifford Kangero', 'ckangero@taitataveta.go.ke', 'Welcome2020!'),
(203, 'Elijah Mruttu', 'elijah.mruttu@taitataveta.go.ke', 'Welcome2020!'),
(204, 'Mary Nyaga', 'mary.nyaga@taitataveta.go.ke', 'Welcome2020!'),
(205, 'county secretary', 'countysecretary@taitataveta.go.ke', 'Welcome2020!'),
(206, 'Gabriel Katuta', 'gabriel.katuta@taitataveta.go.ke', 'Welcome2020!'),
(207, 'John Mwakima', 'john.mwakima@taitataveta.go.ke', 'Welcome2020!'),
(208, 'first lady', 'firstlady@taitataveta.go.ke', 'Welcome2020!'),
(209, 'Dennis Onsarigo', 'donsarigo@taitataveta.go.ke', 'Welcome2020!'),
(210, 'governor press', 'governorspress@taitataveta.go.ke', 'Welcome2020!'),
(211, 'Mchikirwa Ndelejai', 'mchikirwa.ndelejai@taitataveta.go.ke', 'Welcome2020!'),
(212, 'chief staff', 'chiefofstaff@taitataveta.go.ke', 'Welcome2020!'),
(213, 'governor taita', 'governor@taitataveta.go.ke', 'Welcome2020!'),
(214, 'Granton Samboja', 'gsamboja@taitataveta.go.ke', 'Welcome2020!'),
(215, 'industrialization taita', 'industrialization@taitataveta.go.ke', 'Welcome2020!'),
(216, 'info taita', 'info@taitataveta.go.ke', 'Welcome2020!'),
(217, 'pr taita', 'pr@taitataveta.go.ke', 'Welcome2020!'),
(218, 'energy taita', 'energy@taitataveta.go.ke', 'Welcome2020!'),
(219, 'Deputy Governor', 'deputygovernor@taitataveta.go.ke', 'Welcome2020!'),
(220, 'M Mlangui', 'mmlagui@taitataveta.go.ke', 'Welcome2020!'),
(221, 'Mwatate Compliments', 'complaintsmwatate@taitataveta.go.ke', 'Welcome2020!'),
(222, 'Taveta Compliments', 'complaintstaveta@taitataveta.go.ke', 'Welcome2020!'),
(223, 'payroll taitataveta', 'payroltaitataveta@taitataveta.go.ke', 'Welcome2020!'),
(224, 'admin recruitment', 'adminrecruitment@taitataveta.go.ke', 'Welcome2020!'),
(225, 'Jackson Maka', 'jackson.maka@taitataveta.go.ke', 'Welcome2020!'),
(226, 'Gibran Maghanga', 'gibran.mghanga@taitataveta.go.ke', 'Welcome2020!'),
(227, 'Voi Compliments', 'complaintsvoi@taitataveta.go.ke', 'Welcome2020!'),
(228, 'Wundanyi Compliments', 'complaintswundanyi@taitataveta.go.ke', 'Welcome2020!'),
(229, 'Aggrey Mwanyambo', 'aggrey.mnyambo@taitataveta.go.ke', 'Welcome2020!'),
(230, 'Esther Chari', 'esther.chari@taitataveta.go.ke', 'Welcome2020!'),
(231, 'Peter Salai', 'peter.salai@taitataveta.go.ke', 'Welcome2020!'),
(232, 'Edward Lenjo', 'edward.lenjo@taitataveta.go.ke', 'Welcome2020!'),
(233, 'Hare taita', 'hare@taitataveta.go.ke', 'Welcome2020!'),
(234, 'Hezron Mwakulomba', 'hemwakulomba@taitataveta.go.ke', 'Welcome2020!'),
(235, 'houghton Mombo', 'houghton.mombo@taitataveta.go.ke', 'Welcome2020!'),
(236, 'public works', 'publicworks@taitataveta.go.ke', 'Welcome2020!'),
(237, 'Amos Mwamburi', 'amosmwamburi@taitataveta.go.ke', 'Welcome2020!'),
(238, 'leshamta Leshamta', 'leshamta@taitataveta.go.ke', 'Welcome2020!');

-- --------------------------------------------------------

--
-- Table structure for table `mails`
--

CREATE TABLE `mails` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mails`
--

INSERT INTO `mails` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'John Mwanyika', 'john.mwanyika@outlook.com', 'Welcome2020', '2023-04-10 14:41:45', '2023-04-10 14:41:45'),
(2, 'David Moto', 'david.moto@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Harrison Kamwana', 'harrison.kamwana@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Raphael Mwadime', 'raphael.mwadime@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Robin Kimari', 'robin.kimari@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Amos Saleh', 'amos.saleh@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Mercy Hamisi', 'mercy.hamisi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Lucy Mrombo', 'lucy.mrombo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Hope Wanyika', 'hope.wanyika@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Samson Kamande', 'samson.kamande@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Justus Mwandawiro', 'justus.mwandawiro@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Aloice Mjomba', 'aloice.mjomba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Crispus Mwambi', 'crispus.mwambi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Samuel Maina', 'samuel.maina@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Antony Otuoma', 'antony.otuoma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Emily Kamata', 'emily.kamata@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Julius Mkungu', 'julius.mkungu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Simon Mwachia', 'simon.mwachia@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Gibran Mwadime', 'gibran.mwadime@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Kelvin Kitonga', 'kelvin.kitonga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Stanley Mwang\'ombe', 'stanley.mwangombe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Raymond Mwalugha', 'raymond.mwalugha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Polinah Wanjala', 'polinah.wanjala@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Defence Mwandoe', 'defence.mwandoe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Evelyn Mngoda', 'evelyn.mngoda@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Joseph Kenyatta Mnyauro', 'joseph.kenyatta@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Julither Mwaviswa', 'julither.mwaviswa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Julius Shaki', 'julius.shaki@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Holliness Kawa', 'holliness.kawa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Abigael Mwaluma', 'abigael.mwaluma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Joyce Mwasio', 'joyce.mwasio@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Hussein Menza', 'hussein.menza@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Cosmus Mwaghesha', 'cosmus.mwaghesha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Aggrey Mnyambo', 'aggrey.mnyambo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Agnes Mwadime', 'agnes.mwadime@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Erusmus Mwanyasi', 'erusmus.mwanyasi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, ' Dr. Sikujua Seboru', 'sikujua.seboru@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'Rose Sariki ', 'rose.sariki@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Francis Rongaine ', 'francis.rongaine@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'Isaac Kitheka', 'isaac.kitheka@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'Rosina Kisochi', 'rosina.kisochi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Moris Tunge', 'moris.tunge@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'Maureen Kirigha', 'maureen.kirigha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 'George Mwanjala ', 'george.mwanjala@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 'Mercy Mwazo', 'mercy.mwazo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 'Rafael Kimbio ', 'rafael.kimbio@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 'Esther Mwangombe ', 'esther.mwangombe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 'Stanley Mwaighacho', 'stanley.maighacho@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'Joseph Jumases', 'joseph.jumases@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'Michael Mwawasi', 'michael.mwawasi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 'Jesper Kisombe ', 'jesper.kisombe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 'Topister Lenjo ', 'topister.lenjo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 'Stanley Makeo ', 'stanley.makeo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 'Dawis Mwanyumba ', 'dawis.mwanyumba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 'Charles Mwadeghu ', 'charles.mwadeghu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 'Jones Mwasi ', 'jones.mwasi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 'Martin Madaraka ', 'martin.madaraka@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 'Gasper Kabaka', 'gasper.kabaka@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 'Silvanus Mwakoma', 'silvanus.mwakoma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 'David Ngumbao', 'david.ngumbao@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 'sabastian Mrombo', 'sabastian.mrombo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 'Wilbad Chombo', 'wilbad.chombo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 'Fridah Mwamengi', 'fridah.mwamengi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 'Reuben Nyondo', 'reuben.nyondo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 'Calist Mwashengwa', 'calist.mwashengwa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 'Peter Mzugha', 'peter.mzugha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 'Browne Mwanyalo', 'brian.mwanyalo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 'Richard Mwabusa', 'richard.mwabusa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 'Benedict Mwania', 'benedict.mwania@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 'Simeon Musimi', 'simeon.musimi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 'Joseph Leiyan', 'joseph.leiyan@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 'Edward Poisa', 'edward.poisa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 'Fredrick Mwanjulu', 'fredrick.mwanjulu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 'Ibrahim Sang\'eno', 'ibrahim.sangeno@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 'Benjamin Mwadeghu', 'benjamin.mwadeghu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 'Joan Lavoga', 'joanlavoga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'Selina Mwaruma', 'selina.mwaruma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'Solomon Mbwangi', 'solomon.mbwangi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'Christine Tatu', 'christine.tatu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 'Hamilliton Maza', 'hamilliton.maza@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'Evelyne Mwakidende', 'evelynemwakidende@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 'Harrison Mwakulomba', 'harrisonmwakulomba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 'Haron Tsuma', 'harontsuma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'Peter Mbaya', 'petermbaya@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 'Romana Chari', 'romanachari@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 'Onyiego Nyakundi', 'onyiegonyakundi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 'Solomon Maghanga', 'solomonmaghanga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 'Edward Shaghasha', 'edwardshaghasha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 'Barnabas Mwazi', 'barnabasmwazi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 'Joel Kimori', 'joelkimori@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 'Julius Mjawasi', 'juliusmjawasi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 'Aron Kiprono', 'aronkiprono@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 'Nicholas Mbede', 'nicholasmbede@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 'Edward Mwang\'ombe', 'edwardmwangombe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 'Lucas Mlolwa', 'lucasmlolwa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 'Chrispin Mghenyi', 'chrispinmghenyi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 'Stephen Sekiondo', 'stephensekiondo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 'Samson Masale', 'samsonmasale@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 'Erick Kinama', 'erickkinama@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 'Kevin Omondi', 'kevinomondi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 'Abraham Mwakulomba', 'abrahammwakulomba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 'Willyhem Nyanyao', 'willyhemnyanyao@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 'Florence Mnjallah', 'florencemnjallah@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 'Danson Mwaimbe', 'dansonmwaimbe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 'Kevin Moze', 'kevinmoze@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 'Zeruliah Maghanga', 'zeruliahmaghanga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 'Simon Mwangoma', 'simonmwangoma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 'Caroline Mghanga', 'carolinemghanga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 'Agnela Mwadali', 'agnelamwadali@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 'Lazarus Mwaisakenyi', 'lazarusmwaisakenyi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 'Fredrick Ongo', 'fredrickongo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 'Violet Nasumuni', 'violetnasumuni@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 'Davis Mwakazi', 'davis.mwakazi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 'Albert Mwakio', 'albert.mwakio@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, 'Elizabeth Ngele', 'elizabeth.ngele@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 'Linah Mole', 'linah.mole@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, 'Christine Mwakera', 'christine.mwakera@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, 'Director Healthservices', 'director.healthservices@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, 'MoiCounty Refferal', 'county.refferal@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, 'Wesu subcounty', 'wesu.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, 'Mwatate subcounty', 'mwatate.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, 'Taveta subcounty', 'taveta.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 'Wundanyi subcounty', 'wundanyi.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, 'Wesu subcounty', 'wesu.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, 'Mwatate subcounty', 'mwatate.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, 'Taveta subcounty', 'taveta.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, 'Wundanyi subcounty', 'wundanyi.subcounty@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, 'CountyHealth Management', 'health.management@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, 'Medical Supritendant', 'medical.supritendant@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, 'cco Health', 'ccohealth@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 'healthservices Taita', 'healthservices@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 'daniel Mwakisha', 'daniel.mwakisha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 'Philomena Kirote', 'philomena.kirote@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 'educ libraries', 'educlibraries@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 'Philip Mwangale', 'philip.mwangale@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 'loans board', 'loansboard@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 'Raphael Chola', 'raphael.chola@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 'polina Wanjala', 'polina.wanjala@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 'Patroba Mwambogha', 'patroba.mwambogha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 'Winfred mdali', 'winfred.mdali@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(145, 'Vincent Chege', 'Vincent.Chege@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(146, 'Folrence Fundi', 'florence.fundi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(147, 'Frank Mwangemi', 'frank.mwangemi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(148, 'Sylvanus Mwakoma', 'Sylvanus.mwakoma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(149, 'Kefa Mshimba', 'kefa.mshimba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, 'Donald Ndau', 'donald.ndau@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, 'KALAMA MASHA', 'kalama.masha@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, 'PHEDYLORAH KENGEDA', 'phedylorah.kengeda@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(153, 'DENNIS MWASHUMA', 'dennis.mwashuma@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(154, 'AQULINA MILIMITO', 'aqulina.milimito@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(155, 'ERASTUS GONZI', 'erastus.gonzi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(156, 'JANE MAJALA', 'jane.majala@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(157, 'NICKSON MWADIME', 'nickson.mwadime@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(158, 'MARY MNGOLA', 'mary.mngola@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(159, 'DANIEL WAMBUI', 'daniel.wambui@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(160, 'PATRICK ALWALA', 'patrick.alwala@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(161, 'Trade Com', 'tradecom@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(162, 'Agriculture Taita', 'agriculture@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(163, 'cco Agriculture', 'ccoagriculture@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(164, 'sabina maghanga', 'sabina.maghanga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(165, 'davis mshighati', 'davis.mshighati@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(166, 'christopher pongah', 'christopher.pongah@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(167, 'alfred mlolwa', 'alfred.mlolwa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(168, 'mutie mota', 'mutie.mota@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(169, 'Mathew Mwamburi', 'mathmwamburi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(170, 'cco Finance', 'ccofinance@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(171, 'finance taita', 'finance@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(172, 'Fredrick Nganga', 'fredrick.nganga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(173, 'internal audit', 'internalaudit@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(174, 'itax taita', 'itax@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(175, 'mtt revenue', 'mttrevenue@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(176, 'rev director', 'revdirector@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(177, 'Josephine Kache', 'josephine.kache@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(178, 'Joyce Kambe', 'joyce.kambe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(179, 'planning taita', 'planning@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(180, 'procurement taita', 'procurement@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(181, 'Leonard Langat', 'llangat@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(182, 'Eric Mwamburi', 'erickmwamburi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(183, 'Davis Mwangoma', 'mwangomadavis@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(184, 'Cathrine Ogola', 'ogola.kate@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(185, 'Wilson Menza', 'wilson.menza@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(186, 'silas Njongwa', 'silas.njongwa@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(187, 'Prisillar Mwandawiro', 'prisillar.mwandawiro@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(188, 'Dan Githira', 'dgithira@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(189, 'environment taita', 'environment@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(190, 'Grace Furo', 'grace.furo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(191, 'lands taita', 'lands@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(192, 'Getrude Shuwe', 'getrude.shuwe@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(193, 'Reuben ngeti', 'reuben.ngeti@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(194, 'Joyce Segi', 'joyce.segi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(195, 'Lucy Madanji', 'lucy.madanji@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(196, 'ict taita', 'ict@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(197, 'ict director', 'ictdirector@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(198, 'ict support', 'ictsupport@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(199, 'Clifford Kangero', 'ckangero@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(200, 'Elijah Mruttu', 'elijah.mruttu@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(201, 'Mary Nyaga', 'mary.nyaga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(202, 'county secretary', 'countysecretary@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(203, 'Gabriel Katuta', 'gabriel.katuta@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(204, 'John Mwakima', 'john.mwakima@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(205, 'first lady', 'firstlady@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(206, 'Dennis Onsarigo', 'donsarigo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(207, 'governor press', 'governorspress@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(208, 'Mchikirwa Ndelejai', 'mchikirwa.ndelejai@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(209, 'chief staff', 'chiefofstaff@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(210, 'governor taita', 'governor@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(211, 'Granton Samboja', 'gsamboja@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(212, 'industrialization taita', 'industrialization@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(213, 'info taita', 'info@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(214, 'pr taita', 'pr@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(215, 'energy taita', 'energy@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(216, 'Deputy Governor', 'deputygovernor@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(217, 'M Mlangui', 'mmlagui@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(218, 'Mwatate Compliments', 'complaintsmwatate@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(219, 'Taveta Compliments', 'complaintstaveta@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(220, 'payroll taitataveta', 'payroltaitataveta@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(221, 'admin recruitment', 'adminrecruitment@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(222, 'Jackson Maka', 'jackson.maka@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(223, 'Gibran Maghanga', 'gibran.mghanga@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(224, 'Voi Compliments', 'complaintsvoi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(225, 'Wundanyi Compliments', 'complaintswundanyi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(226, 'Aggrey Mwanyambo', 'aggrey.mnyambo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(227, 'Esther Chari', 'esther.chari@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(228, 'Peter Salai', 'peter.salai@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(229, 'Edward Lenjo', 'edward.lenjo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(230, 'Hare taita', 'hare@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(231, 'Hezron Mwakulomba', 'hemwakulomba@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(232, 'houghton Mombo', 'houghton.mombo@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(233, 'public works', 'publicworks@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(234, 'Amos Mwamburi', 'amosmwamburi@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(235, 'leshamta Leshamta', 'leshamta@taitataveta.go.ke', 'Welcome2020!', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` enum('female','male') DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `name`, `age`, `gender`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'John Benjamin Mwanyika', 24, 'male', '54 Mwatate', '2023-04-05 13:53:44', '2023-04-05 13:53:44'),
(2, 'Valen Mwamburi', 21, 'female', '54 Nairobi', '2023-04-05 13:55:16', '2023-04-05 13:55:16'),
(4, 'Jackson Masai', 21, 'male', '876 Nairobi', '2023-04-06 11:38:23', '2023-04-06 22:47:04'),
(5, 'Sarah Wanjala', 22, 'female', '76 Kilifi', '2023-04-06 11:43:25', '2023-04-06 11:43:25'),
(6, 'Kelvin Kitonga', 35, 'male', '78 Kilifi', '2023-04-06 13:01:00', '2023-04-06 13:01:00'),
(7, 'Brian Mbwele', 37, 'male', '13 Eldoret', '2023-04-06 20:03:47', '2023-04-07 10:25:52'),
(8, 'Jackline Mlefu Mwamidi', 22, 'female', '12 Werugha', '2023-04-06 20:53:04', '2023-04-06 21:33:50');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230405120144-create-person.js'),
('20230410133047-create-mail.js'),
('20230410152318-create-session.js');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `sid` varchar(255) DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `data` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `copy_of_mail_addresses_list_123_`
--
ALTER TABLE `copy_of_mail_addresses_list_123_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mails`
--
ALTER TABLE `mails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `copy_of_mail_addresses_list_123_`
--
ALTER TABLE `copy_of_mail_addresses_list_123_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=264;

--
-- AUTO_INCREMENT for table `mails`
--
ALTER TABLE `mails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
