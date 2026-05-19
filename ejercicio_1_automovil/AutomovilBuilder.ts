import { Automovil } from "./Automovil";
export class AutomovilBuilder {
  private motor: string = "Estándar";
  private color: string = "Blanco";
  private rines: number = 15;
  private sistemaDeSonido: string = "Básico";
  private interiores: string = "Estándar";
  private techoSolar: boolean = false;
  private gps: boolean = false;

  constructor() {
    this.resetState();
  }

  private resetState(): void {
    this.motor = "Estándar";
    this.color = "Blanco";
    this.rines = 15;
    this.sistemaDeSonido = "Básico";
    this.interiores = "Estándar";
    this.techoSolar = false;
    this.gps = false;
  }

  setMotor(motor: string): AutomovilBuilder {
    this.motor = motor;
    return this;
  }

  setColor(color: string): AutomovilBuilder {
    this.color = color;
    return this;
  }

  setRines(rines: number): AutomovilBuilder {
    this.rines = rines;
    return this;
  }

  setSistemaDeSonido(sistemaDeSonido: string): AutomovilBuilder {
    this.sistemaDeSonido = sistemaDeSonido;
    return this;
  }

  setInteriores(interiores: string): AutomovilBuilder {
    this.interiores = interiores;
    return this;
  }

  setTechoSolar(techoSolar: boolean): AutomovilBuilder {
    this.techoSolar = techoSolar;
    return this;
  }

  setGPS(gps: boolean): AutomovilBuilder {
    this.gps = gps;
    return this;
  }

  getResult(): Automovil {
    const resultado = new Automovil(
      this.motor,
      this.color,
      this.rines,
      this.sistemaDeSonido,
      this.interiores,
      this.techoSolar,
      this.gps
    );
    this.resetState();
    return resultado;
  }
}
