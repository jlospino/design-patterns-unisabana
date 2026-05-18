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
    this.builder.reset();
    this.builder.setMotor("V8 Turbo");
    this.builder.setColor("Rojo Ferrari");
    this.builder.setRines(20);
    this.builder.setSistemaDeSonido("Premium Bose");
    this.builder.setInteriores("Cuero");
    this.builder.setTechoSolar(true);
    this.builder.setGPS(true);
    return this.builder.getResult();
  }

  buildCarEconomico(): Automovil {
    this.builder.reset();
    this.builder.setColor("Blanco");
    // Usa los valores por defecto para los demás
    return this.builder.getResult();
  }

  buildCarDeLujo(): Automovil {
    this.builder.reset();
    this.builder.setMotor("V12");
    this.builder.setColor("Negro Mate");
    this.builder.setRines(22);
    this.builder.setSistemaDeSonido("Premium Bose");
    this.builder.setInteriores("Cuero");
    this.builder.setTechoSolar(true);
    this.builder.setGPS(true);
    return this.builder.getResult();
  }
}
