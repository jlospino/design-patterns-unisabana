import { PlataformaWeb } from "./PlataformaWeb";
import { PlataformaMovil } from "./PlataformaMovil";
import { PlataformaEscritorio } from "./PlataformaEscritorio";
import { NotificacionMensaje } from "./NotificacionMensaje";
import { NotificacionAlerta } from "./NotificacionAlerta";

console.log("PATRON BRIDGE - GESTION DE NOTIFICACIONES\n");

const web = new PlataformaWeb();
const movil = new PlataformaMovil();
const escritorio = new PlataformaEscritorio();

console.log("--- Envio de notificaciones ---");

const mensaje = new NotificacionMensaje(web);
mensaje.enviar("Su reporte mensual ya esta disponible.");

mensaje.cambiarPlataforma(movil);
mensaje.enviar("Su reporte mensual ya esta disponible.");

console.log("");

const alerta = new NotificacionAlerta(escritorio);
alerta.enviar("Se ha detectado un inicio de sesion sospechoso.");
