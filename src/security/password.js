/**
 * password.js
 * Hash seguro de contraseñas usando bcrypt.
 * Estándar OWASP: 10–12 rondas de salt.
 */

import bcrypt from "bcrypt";

const SALT_ROUNDS = 12; // ?? Nivel recomendado en 2025

/**
 * Hashea una contraseña.
 */
export const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

/**
 * Compara una contraseña ingresada contra su hash.
 */
export const verifyPassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};
