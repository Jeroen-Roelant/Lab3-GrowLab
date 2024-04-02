-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2024 at 02:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `growlab_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblauth`
--

CREATE TABLE `tblauth` (
  `UUID` varchar(36) NOT NULL,
  `passHash` binary(32) NOT NULL COMMENT 'password stored as hash in SHA256'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblbadge`
--

CREATE TABLE `tblbadge` (
  `UUID` varchar(36) NOT NULL,
  `title` varchar(45) NOT NULL,
  `icon` text NOT NULL COMMENT 'url to icon/ blob base64(temp)',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblchat`
--

CREATE TABLE `tblchat` (
  `UUID` varchar(36) NOT NULL,
  `user1` varchar(36) NOT NULL COMMENT 'uuid of user',
  `user2` varchar(36) NOT NULL COMMENT 'uuid of user',
  `messages` mediumtext NOT NULL COMMENT 'message IDs saved as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblcoachclass`
--

CREATE TABLE `tblcoachclass` (
  `UUID` varchar(36) NOT NULL,
  `idOwner` varchar(36) NOT NULL,
  `idMember` text NOT NULL COMMENT 'member ids stored as CSV',
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `totalCheckpoints` tinyint(4) NOT NULL,
  `currentCheckpoint` tinytext NOT NULL,
  `postId` text NOT NULL COMMENT 'Post IDs stored as CSV',
  `sessionId` text NOT NULL COMMENT 'Session IDs stored as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblcomment`
--

CREATE TABLE `tblcomment` (
  `UUID` varchar(36) NOT NULL,
  `poster` varchar(36) NOT NULL COMMENT 'id of poster',
  `content` text NOT NULL,
  `likedUsers` text NOT NULL COMMENT 'liked users IDs saved as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblexperienceentry`
--

CREATE TABLE `tblexperienceentry` (
  `UUID` varchar(36) NOT NULL,
  `title` tinytext NOT NULL,
  `icon` text NOT NULL COMMENT 'url or blob base64 TEMP',
  `description` int(11) NOT NULL,
  `type` enum('education','work','other') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblmatchcontent`
--

CREATE TABLE `tblmatchcontent` (
  `UUID` varchar(36) NOT NULL,
  `interests` text NOT NULL COMMENT 'interest IDs saved as CSV',
  `talents` text NOT NULL COMMENT 'talent IDs saved as CSV',
  `lookingFor` text NOT NULL COMMENT 'textfield with short description'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblmessage`
--

CREATE TABLE `tblmessage` (
  `UUID` varchar(36) NOT NULL,
  `chat` varchar(36) NOT NULL COMMENT 'ID of chat message belongs to',
  `sender` varchar(36) NOT NULL COMMENT 'id of sender',
  `content` text NOT NULL,
  `type` enum('text','image') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblpendingconnection`
--

CREATE TABLE `tblpendingconnection` (
  `UUID` varchar(36) NOT NULL,
  `idSender` varchar(36) NOT NULL,
  `idTarget` varchar(36) NOT NULL,
  `state` enum('sent','accepted','denied') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblpost`
--

CREATE TABLE `tblpost` (
  `UUID` varchar(36) NOT NULL,
  `poster` varchar(36) NOT NULL COMMENT 'id of poster',
  `visibility` enum('public','private','group','network','system') NOT NULL,
  `title` tinytext NOT NULL,
  `content` text NOT NULL,
  `type` enum('text','image','video') NOT NULL,
  `comments` text NOT NULL COMMENT 'comment IDs saved as CSV',
  `likes` text NOT NULL COMMENT 'liked users IDs saved as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblstartup`
--

CREATE TABLE `tblstartup` (
  `UUID` varchar(36) NOT NULL,
  `idOwner` varchar(36) NOT NULL,
  `idMember` text NOT NULL COMMENT 'Member IDs stored as CSV',
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `postId` text NOT NULL COMMENT 'post IDs stored as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `UUID` varchar(36) NOT NULL COMMENT 'primary key UUID',
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `role` enum('starter','coach','admin','moderator') NOT NULL,
  `connectionsCoaches` text NOT NULL COMMENT 'Coach connections stored as CSV',
  `connectionsStarters` text NOT NULL COMMENT 'Starter connections stored as CSV',
  `isProUser` tinyint(1) NOT NULL COMMENT 'Bool that decides if user gets pro perks (temp option)',
  `badgeId` text NOT NULL COMMENT 'Badge ID''s stored as CSV',
  `dateJoined` date NOT NULL,
  `profilePictureUrl` varchar(100) NOT NULL,
  `bannerPictureUrl` varchar(100) NOT NULL,
  `educationId` text NOT NULL COMMENT 'experience IDs stored as CSV',
  `experienceId` text NOT NULL COMMENT 'experience IDs stored as CSV'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Table for users';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblauth`
--
ALTER TABLE `tblauth`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblbadge`
--
ALTER TABLE `tblbadge`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblchat`
--
ALTER TABLE `tblchat`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblcoachclass`
--
ALTER TABLE `tblcoachclass`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblcomment`
--
ALTER TABLE `tblcomment`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblexperienceentry`
--
ALTER TABLE `tblexperienceentry`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblmatchcontent`
--
ALTER TABLE `tblmatchcontent`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblmessage`
--
ALTER TABLE `tblmessage`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblpendingconnection`
--
ALTER TABLE `tblpendingconnection`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblpost`
--
ALTER TABLE `tblpost`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tblstartup`
--
ALTER TABLE `tblstartup`
  ADD PRIMARY KEY (`UUID`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`UUID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
