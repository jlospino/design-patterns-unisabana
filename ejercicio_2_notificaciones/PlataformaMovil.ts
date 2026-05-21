import { Plataforma } from "./Plataforma";

export class PlataformaMovil implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[MOVIL] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}
