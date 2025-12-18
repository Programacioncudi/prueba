-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         9.5.0 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.13.0.7147
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para personalv5
CREATE DATABASE IF NOT EXISTS `personalv5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `personalv5`;

-- Volcando estructura para tabla personalv5.agentes
CREATE TABLE IF NOT EXISTS `agentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `planta_id` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  `ocupacion_id` int DEFAULT NULL,
  `regimen_horario_id` int DEFAULT NULL,
  `ley_id` int DEFAULT NULL,
  `sector_id` int DEFAULT NULL,
  `jefatura_id` int DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_baja` date DEFAULT NULL,
  `estado_empleo` enum('ACTIVO','INACTIVO','BAJA') DEFAULT 'ACTIVO',
  `salario_mensual` decimal(12,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  KEY `planta_id` (`planta_id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `ocupacion_id` (`ocupacion_id`),
  KEY `regimen_horario_id` (`regimen_horario_id`),
  KEY `ley_id` (`ley_id`),
  KEY `sector_id` (`sector_id`),
  KEY `jefatura_id` (`jefatura_id`),
  CONSTRAINT `agentes_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`),
  CONSTRAINT `agentes_ibfk_2` FOREIGN KEY (`planta_id`) REFERENCES `planta` (`id`),
  CONSTRAINT `agentes_ibfk_3` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`ID`),
  CONSTRAINT `agentes_ibfk_4` FOREIGN KEY (`ocupacion_id`) REFERENCES `ocupacion` (`id`),
  CONSTRAINT `agentes_ibfk_5` FOREIGN KEY (`regimen_horario_id`) REFERENCES `regimenhorario` (`id`),
  CONSTRAINT `agentes_ibfk_6` FOREIGN KEY (`ley_id`) REFERENCES `ley` (`id`),
  CONSTRAINT `agentes_ibfk_7` FOREIGN KEY (`sector_id`) REFERENCES `reparticiones` (`id`),
  CONSTRAINT `agentes_ibfk_8` FOREIGN KEY (`jefatura_id`) REFERENCES `jefaturas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.agentes: ~0 rows (aproximadamente)
DELETE FROM `agentes`;

-- Volcando estructura para tabla personalv5.agentes_servicios
CREATE TABLE IF NOT EXISTS `agentes_servicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `dependencia_id` int DEFAULT NULL,
  `servicio_nombre` varchar(255) DEFAULT NULL,
  `jefe_nombre` varchar(255) DEFAULT NULL,
  `fecha_desde` date DEFAULT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  KEY `dependencia_id` (`dependencia_id`),
  CONSTRAINT `agentes_servicios_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`),
  CONSTRAINT `agentes_servicios_ibfk_2` FOREIGN KEY (`dependencia_id`) REFERENCES `reparticiones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.agentes_servicios: ~0 rows (aproximadamente)
DELETE FROM `agentes_servicios`;

-- Volcando estructura para tabla personalv5.bonificaciones
CREATE TABLE IF NOT EXISTS `bonificaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `decreto_numero` varchar(50) DEFAULT NULL,
  `motivo` varchar(150) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `anio` int DEFAULT NULL,
  `observaciones` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_bonificaciones_dni` (`dni`),
  CONSTRAINT `bonificaciones_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.bonificaciones: ~0 rows (aproximadamente)
DELETE FROM `bonificaciones`;

-- Volcando estructura para tabla personalv5.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CATEGORIA` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ux_categoria_categoria` (`CATEGORIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.categoria: ~0 rows (aproximadamente)
DELETE FROM `categoria`;

-- Volcando estructura para tabla personalv5.cc
CREATE TABLE IF NOT EXISTS `cc` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `cc_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.cc: ~0 rows (aproximadamente)
DELETE FROM `cc`;

-- Volcando estructura para tabla personalv5.ccoodegdeba
CREATE TABLE IF NOT EXISTS `ccoodegdeba` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nro_expediente` varchar(255) DEFAULT NULL,
  `caratula` varchar(255) DEFAULT NULL,
  `fecha_y_zura` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.ccoodegdeba: ~0 rows (aproximadamente)
DELETE FROM `ccoodegdeba`;

-- Volcando estructura para tabla personalv5.citaciones
CREATE TABLE IF NOT EXISTS `citaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `citado_por` varchar(255) DEFAULT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  `citacion_activa` tinyint(1) DEFAULT NULL,
  `fecha_citacion` datetime DEFAULT NULL,
  `cierre_citacion` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `citaciones_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.citaciones: ~0 rows (aproximadamente)
DELETE FROM `citaciones`;

-- Volcando estructura para tabla personalv5.codigoa
CREATE TABLE IF NOT EXISTS `codigoa` (
  `nu` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(3) NOT NULL,
  `observacion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nu`),
  UNIQUE KEY `ux_codigoa_codigo` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.codigoa: ~0 rows (aproximadamente)
DELETE FROM `codigoa`;

-- Volcando estructura para tabla personalv5.consultas
CREATE TABLE IF NOT EXISTS `consultas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `motivo_consulta` mediumtext,
  `explicacion` mediumtext,
  `atendido_por` varchar(255) DEFAULT NULL,
  `hora_atencion` datetime DEFAULT CURRENT_TIMESTAMP,
  `impreso` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `consultas_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.consultas: ~0 rows (aproximadamente)
DELETE FROM `consultas`;

-- Volcando estructura para tabla personalv5.disiplina
CREATE TABLE IF NOT EXISTS `disiplina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `disciplina` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_disciplina` (`disciplina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.disiplina: ~0 rows (aproximadamente)
DELETE FROM `disiplina`;

-- Volcando estructura para tabla personalv5.dominios
CREATE TABLE IF NOT EXISTS `dominios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.dominios: ~0 rows (aproximadamente)
DELETE FROM `dominios`;

-- Volcando estructura para tabla personalv5.especialidaddesmedicas
CREATE TABLE IF NOT EXISTS `especialidaddesmedicas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `especialidad` varchar(255) DEFAULT NULL,
  `profesion_referencia` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_especialidad` (`especialidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.especialidaddesmedicas: ~0 rows (aproximadamente)
DELETE FROM `especialidaddesmedicas`;

-- Volcando estructura para tabla personalv5.expedientes
CREATE TABLE IF NOT EXISTS `expedientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `caratula` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `expedientes_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.expedientes: ~0 rows (aproximadamente)
DELETE FROM `expedientes`;

-- Volcando estructura para tabla personalv5.funciones
CREATE TABLE IF NOT EXISTS `funciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `funcion` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.funciones: ~0 rows (aproximadamente)
DELETE FROM `funciones`;

-- Volcando estructura para tabla personalv5.inconvenientesagentes
CREATE TABLE IF NOT EXISTS `inconvenientesagentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `motivo` mediumtext,
  `observaciones` mediumtext,
  `fecha_incidente` date DEFAULT NULL,
  `fecha_desde` date DEFAULT NULL,
  `fecha_hasta` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `inconvenientesagentes_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.inconvenientesagentes: ~0 rows (aproximadamente)
DELETE FROM `inconvenientesagentes`;

-- Volcando estructura para tabla personalv5.jefaturas
CREATE TABLE IF NOT EXISTS `jefaturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sector` varchar(100) DEFAULT NULL,
  `jefe` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_jefaturas_sector` (`sector`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.jefaturas: ~0 rows (aproximadamente)
DELETE FROM `jefaturas`;

-- Volcando estructura para tabla personalv5.jefedeptos
CREATE TABLE IF NOT EXISTS `jefedeptos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jefedepto` varchar(255) DEFAULT NULL,
  `depto` varchar(255) DEFAULT NULL,
  `oficinacentral` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.jefedeptos: ~0 rows (aproximadamente)
DELETE FROM `jefedeptos`;

-- Volcando estructura para tabla personalv5.ley
CREATE TABLE IF NOT EXISTS `ley` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ley_nombre` varchar(200) DEFAULT NULL,
  `codigoexp` int DEFAULT NULL,
  `leyactiva` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.ley: ~0 rows (aproximadamente)
DELETE FROM `ley`;

-- Volcando estructura para tabla personalv5.localidades
CREATE TABLE IF NOT EXISTS `localidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provincia_nombre` varchar(255) DEFAULT NULL,
  `municipio_nombre` varchar(255) DEFAULT NULL,
  `localidad_nombre` varchar(255) DEFAULT NULL,
  `municipio_id` varchar(50) DEFAULT NULL,
  `provincia_id` varchar(50) DEFAULT NULL,
  `localidad_codigo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_localidad_unica` (`provincia_id`,`municipio_id`,`localidad_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.localidades: ~0 rows (aproximadamente)
DELETE FROM `localidades`;

-- Volcando estructura para tabla personalv5.ministerios
CREATE TABLE IF NOT EXISTS `ministerios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ministerio` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_ministerio` (`ministerio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.ministerios: ~0 rows (aproximadamente)
DELETE FROM `ministerios`;

-- Volcando estructura para tabla personalv5.nomenclador
CREATE TABLE IF NOT EXISTS `nomenclador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(50) DEFAULT NULL,
  `tareas` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.nomenclador: ~0 rows (aproximadamente)
DELETE FROM `nomenclador`;

-- Volcando estructura para tabla personalv5.ocupacion
CREATE TABLE IF NOT EXISTS `ocupacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_ocupacion` varchar(50) NOT NULL,
  `codigo` int DEFAULT NULL,
  `regimen_horario_id` int DEFAULT NULL,
  `es_insalubre` tinyint(1) DEFAULT NULL,
  `especialidad_id` int DEFAULT NULL,
  `ley_id` int DEFAULT NULL,
  `agrupamiento` varchar(255) DEFAULT NULL,
  `grado` varchar(255) DEFAULT NULL,
  `asignacion` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_ocupacion_nombre` (`nombre_ocupacion`),
  KEY `regimen_horario_id` (`regimen_horario_id`),
  KEY `especialidad_id` (`especialidad_id`),
  KEY `ley_id` (`ley_id`),
  CONSTRAINT `ocupacion_ibfk_1` FOREIGN KEY (`regimen_horario_id`) REFERENCES `regimenhorario` (`id`),
  CONSTRAINT `ocupacion_ibfk_2` FOREIGN KEY (`especialidad_id`) REFERENCES `especialidaddesmedicas` (`id`),
  CONSTRAINT `ocupacion_ibfk_3` FOREIGN KEY (`ley_id`) REFERENCES `ley` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.ocupacion: ~0 rows (aproximadamente)
DELETE FROM `ocupacion`;

-- Volcando estructura para tabla personalv5.ordenesdetrabajo
CREATE TABLE IF NOT EXISTS `ordenesdetrabajo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `fecha` date DEFAULT NULL,
  `requiere` varchar(255) DEFAULT NULL,
  `descripcion_tarea` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `ordenesdetrabajo_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.ordenesdetrabajo: ~0 rows (aproximadamente)
DELETE FROM `ordenesdetrabajo`;

-- Volcando estructura para tabla personalv5.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `pedido` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `lugar` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.pedidos: ~0 rows (aproximadamente)
DELETE FROM `pedidos`;

-- Volcando estructura para tabla personalv5.permisos
CREATE TABLE IF NOT EXISTS `permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clave` varchar(150) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `dominio_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clave` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.permisos: ~0 rows (aproximadamente)
DELETE FROM `permisos`;

-- Volcando estructura para tabla personalv5.personal
CREATE TABLE IF NOT EXISTS `personal` (
  `dni` varchar(20) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `sexo_id` int DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `domicilio` varchar(200) DEFAULT NULL,
  `localidad_id` int DEFAULT NULL,
  `cuil` varchar(20) DEFAULT NULL,
  `nacionalidad` varchar(50) DEFAULT NULL,
  `observaciones` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dni`),
  KEY `sexo_id` (`sexo_id`),
  KEY `localidad_id` (`localidad_id`),
  CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`sexo_id`) REFERENCES `sexo` (`id`),
  CONSTRAINT `personal_ibfk_2` FOREIGN KEY (`localidad_id`) REFERENCES `localidades` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.personal: ~0 rows (aproximadamente)
DELETE FROM `personal`;

-- Volcando estructura para tabla personalv5.planta
CREATE TABLE IF NOT EXISTS `planta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planta_nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_planta_nombre` (`planta_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.planta: ~0 rows (aproximadamente)
DELETE FROM `planta`;

-- Volcando estructura para tabla personalv5.regimenhorario
CREATE TABLE IF NOT EXISTS `regimenhorario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `regimen_horario` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_regimen_horario` (`regimen_horario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.regimenhorario: ~0 rows (aproximadamente)
DELETE FROM `regimenhorario`;

-- Volcando estructura para tabla personalv5.reparticiones
CREATE TABLE IF NOT EXISTS `reparticiones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reparticion_nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_reparticion_nombre` (`reparticion_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.reparticiones: ~0 rows (aproximadamente)
DELETE FROM `reparticiones`;

-- Volcando estructura para tabla personalv5.resoluciones
CREATE TABLE IF NOT EXISTS `resoluciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `motivo` varchar(50) DEFAULT NULL,
  `observaciones` varchar(50) DEFAULT NULL,
  `numero` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `resoluciones_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.resoluciones: ~0 rows (aproximadamente)
DELETE FROM `resoluciones`;

-- Volcando estructura para tabla personalv5.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.roles: ~0 rows (aproximadamente)
DELETE FROM `roles`;

-- Volcando estructura para tabla personalv5.roles_permisos
CREATE TABLE IF NOT EXISTS `roles_permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_id` int NOT NULL,
  `permiso_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rol_permiso` (`rol_id`,`permiso_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.roles_permisos: ~0 rows (aproximadamente)
DELETE FROM `roles_permisos`;

-- Volcando estructura para tabla personalv5.sexo
CREATE TABLE IF NOT EXISTS `sexo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sexo_nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_sexo_nombre` (`sexo_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.sexo: ~0 rows (aproximadamente)
DELETE FROM `sexo`;

-- Volcando estructura para tabla personalv5.tareas
CREATE TABLE IF NOT EXISTS `tareas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_tarea` varchar(255) DEFAULT NULL,
  `descripcion_tarea` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `asignado_a` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.tareas: ~0 rows (aproximadamente)
DELETE FROM `tareas`;

-- Volcando estructura para tabla personalv5.tareasadquiridias
CREATE TABLE IF NOT EXISTS `tareasadquiridias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tarea` varchar(255) DEFAULT NULL,
  `descripcion_tarea` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.tareasadquiridias: ~0 rows (aproximadamente)
DELETE FROM `tareasadquiridias`;

-- Volcando estructura para tabla personalv5.tblarchivos
CREATE TABLE IF NOT EXISTS `tblarchivos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `tamanio` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `descripcion_archivo` varchar(255) DEFAULT NULL,
  `nombre_archivo_original` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dni` (`dni`),
  CONSTRAINT `tblarchivos_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.tblarchivos: ~0 rows (aproximadamente)
DELETE FROM `tblarchivos`;

-- Volcando estructura para tabla personalv5.tipodecuidado
CREATE TABLE IF NOT EXISTS `tipodecuidado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cuidado_nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_cuidado_nombre` (`cuidado_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.tipodecuidado: ~0 rows (aproximadamente)
DELETE FROM `tipodecuidado`;

-- Volcando estructura para tabla personalv5.tipoderesolucion
CREATE TABLE IF NOT EXISTS `tipoderesolucion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resolucion_nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_resolucion_nombre` (`resolucion_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.tipoderesolucion: ~0 rows (aproximadamente)
DELETE FROM `tipoderesolucion`;

-- Volcando estructura para tabla personalv5.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
  `creado_en` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado_en` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;

-- Volcando estructura para tabla personalv5.usuarios_dominios
CREATE TABLE IF NOT EXISTS `usuarios_dominios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `dominio_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_usuario_dominio` (`usuario_id`,`dominio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personalv5.usuarios_dominios: ~0 rows (aproximadamente)
DELETE FROM `usuarios_dominios`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
