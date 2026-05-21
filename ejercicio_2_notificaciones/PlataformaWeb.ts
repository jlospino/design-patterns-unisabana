import { Plataforma } from "./Plataforma";

export class PlataformaWeb implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[WEB] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}
