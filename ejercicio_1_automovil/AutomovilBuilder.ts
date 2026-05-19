import { Automovil } from "./Automovil";
import { IAutomobilBuilder } from "./IAutomobilBuilder";

export class AutomovilBuilder implements IAutomobilBuilder {
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

  setMotor(motor: string): IAutomobilBuilder {
    this.motor = motor;
    return this;
  }

  setColor(color: string): IAutomobilBuilder {
    this.color = color;
    return this;
  }

  setRines(rines: number): IAutomobilBuilder {
    this.rines = rines;
    return this;
  }

  setSistemaDeSonido(sistemaDeSonido: string): IAutomobilBuilder {
    this.sistemaDeSonido = sistemaDeSonido;
    return this;
  }

  setInteriores(interiores: string): IAutomobilBuilder {
    this.interiores = interiores;
    return this;
  }

  setTechoSolar(techoSolar: boolean): IAutomobilBuilder {
    this.techoSolar = techoSolar;
    return this;
  }

  setGPS(gps: boolean): IAutomobilBuilder {
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
