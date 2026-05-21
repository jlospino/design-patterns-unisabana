import { Notificacion } from "./Notificacion";

export class NotificacionAlerta extends Notificacion {
    enviar(contenido: string): void {
        this.plataforma.renderizarMensaje("Alerta", `ATENCION: ${contenido}`);
    }
}
