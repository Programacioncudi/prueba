-- Script ENTERPRISE para clonar estructura de personalv5 → personalv5_test
DROP DATABASE IF EXISTS personalv5_test;
CREATE DATABASE personalv5_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Generar instrucciones CREATE TABLE para cada tabla real
SET @src = 'personalv5';
SET @dst = 'personalv5_test';

-- Prepara cursor
SELECT CONCAT(
    'CREATE TABLE ', @dst, '.', table_name,
    ' LIKE ', @src, '.', table_name, ';'
)
FROM information_schema.tables
WHERE table_schema = @src;
