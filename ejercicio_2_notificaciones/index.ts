// Interfaz de implementacion: define como cada plataforma renderiza un mensaje
interface Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void;
}

// Implementaciones concretas de la plataforma
class PlataformaWeb implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[WEB] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}

class PlataformaMovil implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[MOVIL] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}

class PlataformaEscritorio implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[ESCRITORIO] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}

// Abstraccion base: mantiene una referencia a la plataforma mediante composicion
abstract class Notificacion {
    protected plataforma: Plataforma;

    constructor(plataforma: Plataforma) {
        this.plataforma = plataforma;
    }

    // Permite cambiar la plataforma en tiempo de ejecucion sin recrear el objeto
    cambiarPlataforma(nuevaPlataforma: Plataforma): void {
        this.plataforma = nuevaPlataforma;
    }

    abstract enviar(contenido: string): void;
}

// Abstracciones refinadas: cada tipo de notificacion delega en la plataforma
class NotificacionMensaje extends Notificacion {
    enviar(contenido: string): void {
        this.plataforma.renderizarMensaje("Mensaje", contenido);
    }
}

class NotificacionAlerta extends Notificacion {
    enviar(contenido: string): void {
        this.plataforma.renderizarMensaje("Alerta", `ATENCION: ${contenido}`);
    }
}

// Cliente: combina libremente cualquier notificacion con cualquier plataforma
function main() {
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
}

main();
