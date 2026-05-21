// Interfaz de implementacion: define como cada plataforma renderiza un mensaje
export interface Plataforma {
    renderizarMensaje(tipo: string, contenido: string): void;
}
