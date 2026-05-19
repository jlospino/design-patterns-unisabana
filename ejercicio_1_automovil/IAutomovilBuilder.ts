import { Automovil } from "./Automovil";

export interface IAutomovilBuilder {
  setMotor(motor: string): IAutomovilBuilder;
  setColor(color: string): IAutomovilBuilder;
  setRines(rines: number): IAutomovilBuilder;
  setSistemaDeSonido(sistemaDeSonido: string): IAutomovilBuilder;
  setInteriores(interiores: string): IAutomovilBuilder;
  setTechoSolar(techoSolar: boolean): IAutomovilBuilder;
  setGPS(gps: boolean): IAutomovilBuilder;
  getResult(): Automovil;
}
