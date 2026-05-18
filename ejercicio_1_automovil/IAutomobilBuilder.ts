import { Automovil } from "./Automovil";

export interface IAutomobilBuilder {
  reset(): void;
  setMotor(motor: string): void;
  setColor(color: string): void;
  setRines(rines: number): void;
  setSistemaDeSonido(sistemaDeSonido: string): void;
  setInteriores(interiores: string): void;
  setTechoSolar(techoSolar: boolean): void;
  setGPS(gps: boolean): void;
  getResult(): Automovil;
}
