import { sequelize } from "../../src/config/db.config.js";
import { User } from "../../src/modules/usuarios/usuarios.model.js";
import bcrypt from "bcrypt";

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });

  const hashAdmin = await bcrypt.hash("admin123", 10);
  const hashUser = await bcrypt.hash("user123", 10);
  
  await User.bulkCreate([
    {
      username: "admin@test.com",
      password: hashAdmin,
      role: "admin",
      dni: "11111111",
      telefono: "0000000000",
      activo: true
    },
    {
      username: "user@test.com",
      password: hashUser,
      role: "user",
      dni: "22222222",
      telefono: "0000000000",
      activo: true
    }
  ]);
}); // ✅ AGREGADO: Cierre del beforeAll

afterAll(async () => {
  await sequelize.close();
});