import { Notificacion } from "./Notificacion";

export class NotificacionMensaje extends Notificacion {
    enviar(contenido: string): void {
        this.plataforma.renderizarMensaje("Mensaje", contenido);
    }
}
