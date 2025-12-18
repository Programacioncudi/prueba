/**
 * Archivo: src/modules/usuarios/usuarios.service.js
 * Responsabilidad:
 *   - Lógica de negocio de usuarios: registro y login.
 */

import { usuariosRepository } from "./usuarios.repository.js";
import { hashPassword, verifyPassword } from "../../security/password.js";
import { generateToken } from "../../security/jwt.js";

export const usuariosService = {
  /**
   * Registrar nuevo usuario.
   */
  registrar: async (data) => {
    const existe = await usuariosRepository.findByEmail(data.email);
    if (existe) {
      throw new Error("El email ya está registrado.");
    }

    const hashed = await hashPassword(data.password);

    const usuario = await usuariosRepository.create({
      email: data.email,
      password: hashed,
      rol: data.rol
    });

    return {
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    };
  },

  /**
   * Login de usuario.
   */
  login: async (email, password) => {
    const usuario = await usuariosRepository.findByEmail(email);
    if (!usuario) {
      throw new Error("Credenciales inválidas.");
    }

    const valid = await verifyPassword(password, usuario.password);
    if (!valid) {
      throw new Error("Credenciales inválidas.");
    }

    const token = generateToken({
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    });

    return {
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        rol: usuario.rol
      }
    };
  }
};

