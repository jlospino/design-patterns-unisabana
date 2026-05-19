import { Automovil } from "./Automovil";
import { AutomovilBuilder } from "./AutomovilBuilder";

export class Director {
  private builder: AutomovilBuilder;

  constructor(builder: AutomovilBuilder) {
    this.builder = builder;
  }

  changeBuilder(builder: AutomovilBuilder): void {
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
