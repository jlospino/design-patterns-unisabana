import { Automovil } from "./Automovil";

export interface IAutomobilBuilder {
  setMotor(motor: string): IAutomobilBuilder;
  setColor(color: string): IAutomobilBuilder;
  setRines(rines: number): IAutomobilBuilder;
  setSistemaDeSonido(sistemaDeSonido: string): IAutomobilBuilder;
  setInteriores(interiores: string): IAutomobilBuilder;
  setTechoSolar(techoSolar: boolean): IAutomobilBuilder;
  setGPS(gps: boolean): IAutomobilBuilder;
  getResult(): Automovil;
}
