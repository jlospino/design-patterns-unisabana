import { Automovil } from "./Automovil";
import { IAutomobilBuilder } from "./IAutomobilBuilder";

export class Director {
  private builder: IAutomobilBuilder;

  constructor(builder: IAutomobilBuilder) {
    this.builder = builder;
  }

  changeBuilder(builder: IAutomobilBuilder): void {
    this.builder = builder;
  }

  buildCar(): Automovil {
    return this.builder.getResult();
  }

  buildCarDeportivo(): Automovil {
    return this.builder
      .setMotor("V8 Turbo")
      .setColor("Rojo Ferrari")
      .setRines(20)
      .setSistemaDeSonido("Premium Bose")
      .setInteriores("Cuero")
      .setTechoSolar(true)
      .setGPS(true)
      .getResult();
  }

  buildCarEconomico(): Automovil {
    return this.builder
      .setColor("Azul")
      .getResult();
  }

  buildCarDeLujo(): Automovil {
    return this.builder
      .setMotor("V12")
      .setColor("Negro Mate")
      .setRines(22)
      .setSistemaDeSonido("Premium Bose")
      .setInteriores("Cuero")
      .setTechoSolar(true)
      .setGPS(true)
      .getResult();
  }
}
