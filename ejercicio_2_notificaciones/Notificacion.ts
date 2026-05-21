import { Plataforma } from "./Plataforma";

// Abstraccion base: mantiene una referencia a la plataforma mediante composicion
export abstract class Notificacion {
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
