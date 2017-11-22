-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.7.12


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema trainingDemo
--

CREATE DATABASE IF NOT EXISTS trainingDemo;
USE trainingDemo;

--
-- Temporary table structure for view `v00_01`
--
DROP TABLE IF EXISTS `v00_01`;
DROP VIEW IF EXISTS `v00_01`;
CREATE TABLE `v00_01` (
  `bmdm` varchar(10),
  `bmmc` varchar(255),
  `type` varchar(2),
  `cjrq` varchar(10),
  `deltag` char(1),
  `cxrq` varchar(10),
  `content` char(0)
);

--
-- Temporary table structure for view `v00_03`
--
DROP TABLE IF EXISTS `v00_03`;
DROP VIEW IF EXISTS `v00_03`;
CREATE TABLE `v00_03` (
  `userno` varchar(10),
  `username` varchar(255),
  `passwd` varchar(255),
  `roleno` varchar(4),
  `bmdm` varchar(10),
  `deltag` char(1),
  `bmmc` varchar(255),
  `rolename` varchar(255)
);

--
-- Definition of table `d00_01`
--

DROP TABLE IF EXISTS `d00_01`;
CREATE TABLE `d00_01` (
  `bmdm` varchar(10) NOT NULL,
  `bmmc` varchar(255) DEFAULT NULL,
  `type` varchar(2) DEFAULT '0',
  `deltag` char(1) DEFAULT '0' COMMENT '删除标记：0未删除（默认），1已删除',
  `cjrq` varchar(10) DEFAULT NULL,
  `cxrq` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`bmdm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='部门表';

--
-- Dumping data for table `d00_01`
--

/*!40000 ALTER TABLE `d00_01` DISABLE KEYS */;
INSERT INTO `d00_01` (`bmdm`,`bmmc`,`type`,`deltag`,`cjrq`,`cxrq`) VALUES 
 ('01','电子与信息工程学院',NULL,'0',NULL,NULL),
 ('0101','行政工作单位','1','0',NULL,NULL),
 ('010101','学院办公室','1','0',NULL,NULL),
 ('010102','本科教学管理科','1','0',NULL,NULL),
 ('010103','研究生教学管理科','1','0',NULL,NULL),
 ('010104','科研管理科','1','0',NULL,NULL),
 ('0102','教学工作单位','2','0',NULL,NULL),
 ('010201','计算机科学系','2','0',NULL,NULL),
 ('010202','信息与通信工程系','2','0',NULL,NULL),
 ('010203','电子科学系','2','0',NULL,NULL),
 ('010204','实验中心','2','0',NULL,NULL),
 ('0103','学生工作单位','3','0',NULL,NULL),
 ('010301','团委','3','0',NULL,NULL),
 ('0104','科学研究机构','4','0',NULL,NULL),
 ('010401','重点实验室','41','0',NULL,NULL),
 ('01040101','信息与管理省高校重点实验室','41','0',NULL,NULL),
 ('0104010101','人工智能与控制研究室','41','0',NULL,NULL),
 ('0104010102','图形图像多媒体研究室','41','0',NULL,NULL),
 ('0104010103','信息传输与处理研究室','0','0',NULL,NULL),
 ('010402','工程中心','42','0',NULL,NULL),
 ('01040201','数字化矿山装备工程技术研究中心','42','0',NULL,NULL),
 ('01040202','矿山数据安全工程研究中心','42','0',NULL,NULL),
 ('01040203','智慧矿山协同创新中心','42','0',NULL,NULL),
 ('010403','研究机构','43','0',NULL,NULL),
 ('01040301','数据科学与产业研究院','43','0',NULL,NULL),
 ('01040302','电子与信息工程研究所','43','0',NULL,NULL);
/*!40000 ALTER TABLE `d00_01` ENABLE KEYS */;


--
-- Definition of table `d00_02`
--

DROP TABLE IF EXISTS `d00_02`;
CREATE TABLE `d00_02` (
  `roleno` varchar(4) NOT NULL,
  `rolename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='角色表';

--
-- Dumping data for table `d00_02`
--

/*!40000 ALTER TABLE `d00_02` DISABLE KEYS */;
INSERT INTO `d00_02` (`roleno`,`rolename`) VALUES 
 ('0001','系统管理员'),
 ('0002','人事管理员'),
 ('0003','科研管理员'),
 ('0004','教学管理员'),
 ('0005','教师');
/*!40000 ALTER TABLE `d00_02` ENABLE KEYS */;


--
-- Definition of table `d00_03`
--

DROP TABLE IF EXISTS `d00_03`;
CREATE TABLE `d00_03` (
  `userno` varchar(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `roleno` varchar(4) DEFAULT NULL,
  `bmdm` varchar(10) DEFAULT NULL COMMENT '部门代码D00_01',
  `deltag` char(1) DEFAULT '0',
  PRIMARY KEY (`userno`),
  KEY `zddm` (`bmdm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用户表';

--
-- Dumping data for table `d00_03`
--

/*!40000 ALTER TABLE `d00_03` DISABLE KEYS */;
INSERT INTO `d00_03` (`userno`,`username`,`passwd`,`roleno`,`bmdm`,`deltag`) VALUES 
 ('0123','李四','GGCMCM@FGFLGAFBGDBCMBMGL','0005','01','0'),
 ('0124','邢五','C@GBE@BMBLEABEG@LMEMCFEL','0005','01','0'),
 ('0125','赵某','GDCAMGGCLELGDLGAF@','0005','01','0'),
 ('0126','钱某某','L@FELMF@CAGM@BE@FDMAB','0004','010201','0'),
 ('rsadmin','人事管理员','ALMMC@MFMDLCG','0002','010101','0');
/*!40000 ALTER TABLE `d00_03` ENABLE KEYS */;


--
-- Definition of table `d00_04`
--

DROP TABLE IF EXISTS `d00_04`;
CREATE TABLE `d00_04` (
  `menuid` varchar(12) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='菜单表';

--
-- Dumping data for table `d00_04`
--

/*!40000 ALTER TABLE `d00_04` DISABLE KEYS */;
INSERT INTO `d00_04` (`menuid`,`text`,`url`) VALUES 
 ('01','系统管理',NULL),
 ('0101','部门管理','D00/D0001.jsp'),
 ('0102','角色管理','D00/D0002.jsp'),
 ('0103','用户管理','D00/D0003.jsp'),
 ('0104','权限管理','D00/D0005.jsp'),
 ('0105','修改密码','D00/changePasswd.jsp'),
 ('02','基础信息管理',NULL),
 ('0201','职称代码管理','D01/D0101.jsp'),
 ('0202','政治面貌代码管理','D01/D0102.jsp'),
 ('0203','职务代码管理','D01/D0103.jsp'),
 ('0204','岗位代码管理','D01/D0104.jsp'),
 ('0205','学历代码管理','D01/D0105.jsp'),
 ('0206','学位代码管理','D01/D0106.jsp'),
 ('0207','学科管理','D01/D0107.jsp'),
 ('0208','纵向项目类型管理','D01/D0121.jsp'),
 ('0209','专业管理','D01/D0131.jsp'),
 ('0210','班级管理',''),
 ('0211','教研项目类型管理','D01/D0133.jsp'),
 ('0212','授权点管理','D01/D0134.jsp'),
 ('03','教师信息管理',NULL),
 ('0301','教师基本信息管理','D02/D0201.jsp'),
 ('0302','教师简历管理','D02/D0202.jsp'),
 ('0303','学科身份管理','D02/D0211.jsp'),
 ('0304','专业身份管理','D02/D0212.jsp'),
 ('0305','职务变动管理','D02/D0213.jsp'),
 ('0306','职称变动管理','D02/D0214.jsp'),
 ('0307','部门变动管理','D02/D0215.jsp'),
 ('0308','岗位变动管理','D02/D0216.jsp'),
 ('0309','业务归属变动管理','D02/D0217.jsp'),
 ('0310','学历变动管理','D02/D0218.jsp'),
 ('0311','学位变动管理','D02/D0219.jsp'),
 ('04','科研管理',NULL),
 ('0401','论文管理',''),
 ('040101','个人论文管理','D03/D0301.jsp'),
 ('040102','论文成果管理','D03/D03011.jsp'),
 ('0402','科研项目管理',NULL),
 ('040201','纵向项目管理','D03/D0302.jsp'),
 ('040202','纵向项目成果管理','D03/D03021.jsp'),
 ('040203','横向项目管理','D03/D0303.jsp'),
 ('040204','横向项目成果管理','D03/D03031.jsp'),
 ('040205','项目结题管理','D03/D0312.jsp'),
 ('040206','项目鉴定管理','D03/D0313.jsp'),
 ('0403','科研经费管理','D03/D0304.jsp'),
 ('0404','专利管理',''),
 ('040401','专利管理','D03/D0305.jsp'),
 ('040402','专利成果管理','D03/D03051.jsp'),
 ('0405','著作管理',''),
 ('040501','著作管理','D03/D0306.jsp'),
 ('040502','著作成果管理','D03/D03061.jsp'),
 ('0406','获奖管理',''),
 ('040601','奖励管理','D03/D0307.jsp'),
 ('040602','奖励成果管理','D03/D03071.jsp'),
 ('0407','参加学术会议管理','D03/D0308.jsp'),
 ('0408','学术报告管理','D03/D0309.jsp'),
 ('0409','成果转化管理','D03/D0310.jsp'),
 ('0410','软件著作权管理','D03/D0311.jsp'),
 ('05','教学管理',NULL),
 ('0501','导师遴选','D04/D0401.jsp'),
 ('0502','教研项目管理','D04/D0402.jsp'),
 ('0503','教研项目成果管理','D04/D04021.jsp'),
 ('0504','教研获奖管理','D04/D0403.jsp'),
 ('0505','教研获奖成果管理','D04/D04031.jsp');
/*!40000 ALTER TABLE `d00_04` ENABLE KEYS */;


--
-- Definition of table `d00_05`
--

DROP TABLE IF EXISTS `d00_05`;
CREATE TABLE `d00_05` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleno` varchar(12) DEFAULT NULL,
  `menuid` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='菜单权限表';

--
-- Dumping data for table `d00_05`
--

/*!40000 ALTER TABLE `d00_05` DISABLE KEYS */;
INSERT INTO `d00_05` (`id`,`roleno`,`menuid`) VALUES 
 (22,'0001','01'),
 (23,'0001','0101'),
 (24,'0001','0102'),
 (25,'0001','0103'),
 (26,'0001','0104'),
 (27,'0001','0105'),
 (28,'0001','02'),
 (29,'0001','0201'),
 (30,'0001','0202'),
 (31,'0001','0203'),
 (32,'0001','0204'),
 (33,'0001','0205'),
 (34,'0001','0206'),
 (35,'0001','0207'),
 (36,'0001','0208'),
 (37,'0001','0209'),
 (38,'0001','0210'),
 (39,'0001','0211'),
 (40,'0001','0212'),
 (41,'0002','03'),
 (42,'0002','0301'),
 (43,'0002','0302'),
 (44,'0002','0303'),
 (45,'0002','0304'),
 (46,'0002','0305'),
 (47,'0002','0306'),
 (48,'0002','0307'),
 (49,'0002','0308'),
 (50,'0002','0309'),
 (51,'0002','0310'),
 (52,'0002','0311'),
 (53,'0003','04'),
 (54,'0003','0401'),
 (55,'0003','040101'),
 (56,'0003','040102'),
 (57,'0003','0402'),
 (58,'0003','040201'),
 (59,'0003','040202'),
 (60,'0003','040203'),
 (61,'0003','040204'),
 (62,'0003','040205'),
 (63,'0003','040206'),
 (64,'0003','0403'),
 (65,'0003','0404'),
 (66,'0003','040401'),
 (67,'0003','040402'),
 (68,'0003','0405'),
 (69,'0003','040501'),
 (70,'0003','040502'),
 (71,'0003','0406'),
 (72,'0003','040601'),
 (73,'0003','040602'),
 (74,'0003','0407'),
 (75,'0003','0408'),
 (76,'0003','0409'),
 (77,'0003','0410'),
 (78,'0004','05'),
 (79,'0004','0501'),
 (80,'0004','0502'),
 (81,'0004','0503'),
 (82,'0004','0504'),
 (83,'0004','0505'),
 (109,'0005','01'),
 (110,'0005','0105'),
 (111,'0005','03'),
 (112,'0005','0301'),
 (113,'0005','0302'),
 (114,'0005','0310'),
 (115,'0005','0311'),
 (116,'0005','04'),
 (117,'0005','0401'),
 (118,'0005','040101'),
 (119,'0005','0402'),
 (120,'0005','040201'),
 (121,'0005','040203'),
 (122,'0005','040205'),
 (123,'0005','040206'),
 (124,'0005','0403'),
 (125,'0005','0404'),
 (126,'0005','040401'),
 (127,'0005','0405'),
 (128,'0005','040501'),
 (129,'0005','0406'),
 (130,'0005','040601'),
 (131,'0005','0407'),
 (132,'0005','0408'),
 (133,'0005','0409'),
 (134,'0005','0410'),
 (135,'0005','05'),
 (136,'0005','0502'),
 (137,'0005','0504');
/*!40000 ALTER TABLE `d00_05` ENABLE KEYS */;


--
-- Definition of view `v00_01`
--

DROP TABLE IF EXISTS `v00_01`;
DROP VIEW IF EXISTS `v00_01`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v00_01` AS select `d00_01`.`bmdm` AS `bmdm`,`d00_01`.`bmmc` AS `bmmc`,`d00_01`.`type` AS `type`,`d00_01`.`cjrq` AS `cjrq`,`d00_01`.`deltag` AS `deltag`,`d00_01`.`cxrq` AS `cxrq`,'' AS `content` from `d00_01`;

--
-- Definition of view `v00_03`
--

DROP TABLE IF EXISTS `v00_03`;
DROP VIEW IF EXISTS `v00_03`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v00_03` AS select `d00_03`.`userno` AS `userno`,`d00_03`.`username` AS `username`,`d00_03`.`passwd` AS `passwd`,`d00_03`.`roleno` AS `roleno`,`d00_03`.`bmdm` AS `bmdm`,`d00_03`.`deltag` AS `deltag`,`d00_01`.`bmmc` AS `bmmc`,`d00_02`.`rolename` AS `rolename` from ((`d00_03` left join `d00_01` on((`d00_03`.`bmdm` = `d00_01`.`bmdm`))) left join `d00_02` on((`d00_03`.`roleno` = `d00_02`.`roleno`)));



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
