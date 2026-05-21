import { Plataforma } from "./Plataforma";

export class PlataformaEscritorio implements Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void {
        console.log(`[ESCRITORIO] [${tipo.toUpperCase()}]: ${contenido}`);
    }
}
