-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 05:11 PM
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
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbltestproduct`
--

CREATE TABLE `tbltestproduct` (
  `id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbltestproduct`
--

INSERT INTO `tbltestproduct` (`id`, `age`, `name`) VALUES
(2, 332, 'Bertje'),
(3, 22, 'Patje'),
(4, 13, 'Stefke'),
(5, 27, 'Steveke'),
(6, 19, 'Anneliesje'),
(7, 100, 'Jerommeke'),
(8, 30, 'Rani'),
(9, 30, 'Joske');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `testText` text NOT NULL,
  `testDate` date NOT NULL,
  `testVarChar` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `testText`, `testDate`, `testVarChar`) VALUES
(1, 'Hello', '2024-02-07', 'test'),
(2, 'gagagoogie', '2024-02-05', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbltestproduct`
--
ALTER TABLE `tbltestproduct`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbltestproduct`
--
ALTER TABLE `tbltestproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
