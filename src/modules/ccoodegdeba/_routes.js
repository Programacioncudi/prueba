/**
 * Archivo: src/modules/_routes.js
 * Responsabilidad:
 *   - Router raíz de módulos.
 *   - Montar todas las rutas de cada módulo de RRHH.
 */

import express from "express";

import categoriaRoutes from "./categoria/categoria.routes.js";
import codigoaRoutes from "./codigoa/codigoa.routes.js";
import disiplinaRoutes from "./disiplina/disiplina.routes.js";
import especialidaddesmedicasRoutes from "./especialidaddesmedicas/especialidaddesmedicas.routes.js";
import jefaturasRoutes from "./jefaturas/jefaturas.routes.js";
import jefedeptosRoutes from "./jefedeptos/jefedeptos.routes.js";
import leyRoutes from "./ley/ley.routes.js";
import ministeriosRoutes from "./ministerios/ministerios.routes.js";
import nomencladorRoutes from "./nomenclador/nomenclador.routes.js";
import plantaRoutes from "./planta/planta.routes.js";
import reparticionesRoutes from "./reparticiones/reparticiones.routes.js";
import sexoRoutes from "./sexo/sexo.routes.js";
import tipodecuidadoRoutes from "./tipodecuidado/tipodecuidado.routes.js";
import tipoderesolucionRoutes from "./tipoderesolucion/tipoderesolucion.routes.js";
import regimenhorarioRoutes from "./regimenhorario/regimenhorario.routes.js";
import localidadesRoutes from "./localidades/localidades.routes.js";
import ocupacionRoutes from "./ocupacion/ocupacion.routes.js";
import agentesRoutes from "./agentes/agentes.routes.js";
import agentes_serviciosRoutes from "./agentes_servicios/agentes_servicios.routes.js";
import bonificacionesRoutes from "./bonificaciones/bonificaciones.routes.js";
import citacionesRoutes from "./citaciones/citaciones.routes.js";
import consultasRoutes from "./consultas/consultas.routes.js";
import inconvenientesagentesRoutes from "./inconvenientesagentes/inconvenientesagentes.routes.js";
import ordenesdetrabajoRoutes from "./ordenesdetrabajo/ordenesdetrabajo.routes.js";
import pedidosRoutes from "./pedidos/pedidos.routes.js";
import resolucionesRoutes from "./resoluciones/resoluciones.routes.js";
import tblarchivosRoutes from "./tblarchivos/tblarchivos.routes.js";
import ccRoutes from "./cc/cc.routes.js";
import expedientesRoutes from "./expedientes/expedientes.routes.js";
import tareasRoutes from "./tareas/tareas.routes.js";
import tareasadquiridiasRoutes from "./tareasadquiridias/tareasadquiridias.routes.js";
import funcionesRoutes from "./funciones/funciones.routes.js";
import ccoodegdebaRoutes from "./ccoodegdeba/ccoodegdeba.routes.js";
import usuariosRoutes from "./usuarios/usuarios.routes.js"; // lo que ya tenés

const router = express.Router();

router.use("/categoria", categoriaRoutes);
router.use("/codigoa", codigoaRoutes);
router.use("/disiplina", disiplinaRoutes);
router.use("/especialidaddesmedicas", especialidaddesmedicasRoutes);
router.use("/jefaturas", jefaturasRoutes);
router.use("/jefedeptos", jefedeptosRoutes);
router.use("/ley", leyRoutes);
router.use("/ministerios", ministeriosRoutes);
router.use("/nomenclador", nomencladorRoutes);
router.use("/planta", plantaRoutes);
router.use("/reparticiones", reparticionesRoutes);
router.use("/sexo", sexoRoutes);
router.use("/tipodecuidado", tipodecuidadoRoutes);
router.use("/tipoderesolucion", tipoderesolucionRoutes);
router.use("/regimenhorario", regimenhorarioRoutes);
router.use("/localidades", localidadesRoutes);
router.use("/ocupacion", ocupacionRoutes);
router.use("/agentes", agentesRoutes);
router.use("/agentes_servicios", agentes_serviciosRoutes);
router.use("/bonificaciones", bonificacionesRoutes);
router.use("/citaciones", citacionesRoutes);
router.use("/consultas", consultasRoutes);
router.use("/inconvenientesagentes", inconvenientesagentesRoutes);
router.use("/ordenesdetrabajo", ordenesdetrabajoRoutes);
router.use("/pedidos", pedidosRoutes);
router.use("/resoluciones", resolucionesRoutes);
router.use("/tblarchivos", tblarchivosRoutes);
router.use("/cc", ccRoutes);
router.use("/expedientes", expedientesRoutes);
router.use("/tareas", tareasRoutes);
router.use("/tareasadquiridias", tareasadquiridiasRoutes);
router.use("/funciones", funcionesRoutes);
router.use("/ccoodegdeba", ccoodegdebaRoutes);
router.use("/usuarios", usuariosRoutes);

export default router;
