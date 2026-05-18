import { AutomovilBuilder } from "./AutomovilBuilder";
import { Director } from "./Director";

// ========================================
// EJEMPLOS DE USO
// ========================================
console.log("PATRÓN BUILDER - DEMOSTRACIÓN COMPLETA\n");

const builder = new AutomovilBuilder();

const director = new Director(builder);

const autoDeportivo = director.buildCarDeportivo();
console.log("AUTO DEPORTIVO");
console.log(autoDeportivo.mostrarInfo());

const autoEconomico = director.buildCarEconomico();
console.log("AUTO ECONÓMICO");
console.log(autoEconomico.mostrarInfo());

const autoDeLujo = director.buildCarDeLujo();
console.log("AUTO DE LUJO");
console.log(autoDeLujo.mostrarInfo());


const autoEstandar = director.buildCar();
console.log("AUTO ESTANDAR:");
console.log(autoEstandar.mostrarInfo());

