export class Automovil {
  constructor(
    public readonly motor: string,
    public readonly color: string,
    public readonly rines: number,
    public readonly sistemaDeSonido: string,
    public readonly interiores: string,
    public readonly techoSolar: boolean,
    public readonly gps: boolean,
  ) {}

  mostrarInfo(): string {
    return `
╔══════════════════════════════════════╗
║      INFORMACIÓN DEL AUTOMÓVIL       ║
╠══════════════════════════════════════╣
  Motor: ${this.motor}
  Color: ${this.color}
  Tamaño de Rines: ${this.rines}"
  Sistema de Sonido: ${this.sistemaDeSonido}
  Interiores: ${this.interiores}
  Techo Solar: ${this.techoSolar ? "Sí" : "No"}
  GPS: ${this.gps ? "Sí" : "No"}
╚══════════════════════════════════════╝
    `;
  }
}
