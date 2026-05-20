// ==========================================
// 1. INTERFAZ DE IMPLEMENTACIÓN (La Plataforma)
// ==========================================
interface Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void;
}

// ==========================================
// 2. IMPLEMENTACIONES CONCRETAS
// ==========================================
class PlataformaWeb implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[WEB] [${tipo.toUpperCase()}]: ${contenido} (Componentes HTML5)`);
    }
}

class PlataformaMovil implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[MÓVIL] [${tipo.toUpperCase()}]: ${contenido} (Notificación Push)`);
    }
}

class PlataformaEscritorio implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[ESCRITORIO] [${tipo.toUpperCase()}]: ${contenido} (System Tray)`);
    }
}

// ==========================================
// 3. LA ABSTRACCIÓN (El Puente / Bridge)
// ==========================================
abstract class Notificacion {
    protected plataforma: Plataforma; // Aquí se hace el puente mediante composición

    constructor(plataforma: Plataforma) {
        this.plataforma = plataforma;
    }

    // Permite cambiar la plataforma dinámicamente en tiempo de ejecución
    cambiarPlataforma(nuevaPlataforma: Plataforma): void {
        this.plataforma = nuevaPlataforma;
    }

    abstract enviar(contenido: string): void;
}

// ==========================================
// 4. ABSTRACCIONES REFINADAS (Tipos de Notificación)
// ==========================================
class NotificacionMensaje extends Notificacion {
    enviar(contenido: string): void {
        this.plataforma.renderizarMensaje("Mensaje Informativo", contenido);
    }
}

class NotificacionAlerta extends Notificacion {
    enviar(contenido: string): void {
        const contenidoUrgente = `🚨 ATENCIÓN: ${contenido}`;
        this.plataforma.renderizarMensaje("Alerta Crítica", contenidoUrgente);
    }
}

// ==========================================
// 5. EJECUCIÓN Y PRUEBAS (Cliente)
// ==========================================
function ejecutarDemostracion() {
    const web = new PlataformaWeb();
    const movil = new PlataformaMovil();
    const escritorio = new PlataformaEscritorio();

    console.log("--- Inicializando Envío de Notificaciones ---");
    const mensajeInformativo = new NotificacionMensaje(web);
    mensajeInformativo.enviar("Su reporte mensual ya está disponible.");

    // Cambiar dinámicamente a Móvil
    mensajeInformativo.cambiarPlataforma(movil);
    mensajeInformativo.enviar("Su reporte mensual ya está disponible.");

    console.log("\n--- Cambio de Tipo de Notificación ---");
    const alertaSeguridad = new NotificacionAlerta(escritorio);
    alertaSeguridad.enviar("Se ha detectado un inicio de sesión sospechoso.");
}

// Invocamos la función para ver el resultado
ejecutarDemostracion();
