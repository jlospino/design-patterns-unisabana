/**
 * BUILDER CONCRETO: AutomovilBuilder
 * 
 * Implementa la interfaz IAutomobilBuilder.
 * Construye el objeto Automovil paso a paso.
 * Mantiene el estado del automóvil durante la construcción.
 */
import { Automovil } from "./Automovil";
import { IAutomobilBuilder } from "./IAutomobilBuilder";

export class AutomovilBuilder implements IAutomobilBuilder {
  private automovil!: Automovil;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.automovil = new Automovil(
      "Estándar",
      "Blanco",
      15,
      "Básico",
      "Estándar",
      false,
      false
    );
  }

  setMotor(motor: string): void {
    this.automovil = new Automovil(
      motor,
      this.automovil.color,
      this.automovil.rines,
      this.automovil.sistemaDeSonido,
      this.automovil.interiores,
      this.automovil.techoSolar,
      this.automovil.gps
    );
  }

  setColor(color: string): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      color,
      this.automovil.rines,
      this.automovil.sistemaDeSonido,
      this.automovil.interiores,
      this.automovil.techoSolar,
      this.automovil.gps
    );
  }

  setRines(rines: number): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      this.automovil.color,
      rines,
      this.automovil.sistemaDeSonido,
      this.automovil.interiores,
      this.automovil.techoSolar,
      this.automovil.gps
    );
  }

  setSistemaDeSonido(sistemaDeSonido: string): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      this.automovil.color,
      this.automovil.rines,
      sistemaDeSonido,
      this.automovil.interiores,
      this.automovil.techoSolar,
      this.automovil.gps
    );
  }

  setInteriores(interiores: string): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      this.automovil.color,
      this.automovil.rines,
      this.automovil.sistemaDeSonido,
      interiores,
      this.automovil.techoSolar,
      this.automovil.gps
    );
  }

  setTechoSolar(techoSolar: boolean): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      this.automovil.color,
      this.automovil.rines,
      this.automovil.sistemaDeSonido,
      this.automovil.interiores,
      techoSolar,
      this.automovil.gps
    );
  }

  setGPS(gps: boolean): void {
    this.automovil = new Automovil(
      this.automovil.motor,
      this.automovil.color,
      this.automovil.rines,
      this.automovil.sistemaDeSonido,
      this.automovil.interiores,
      this.automovil.techoSolar,
      gps
    );
  }

  getResult(): Automovil {
    const resultado = this.automovil;
    this.reset();
    return resultado;
  }
}
