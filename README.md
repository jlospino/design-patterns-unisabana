# Actividad 1: Patrones de Diseño

Este repositorio contiene la solución para la Guía de actividad 1 de la asignatura de Arquitectura de Software de la Universidad de La Sabana. El objetivo del proyecto es identificar, modelar e implementar diferentes patrones de diseño (creacionales, estructurales y de comportamiento) para resolver problemáticas específicas de acoplamiento, escalabilidad y mantenimiento de código.

## Generalidades del Proyecto

* **Lenguaje de programación utilizado:** TypeScript (JS/TS).
* **Enfoque de la entrega:** Modular (una carpeta independiente por cada ejercicio con su propia documentación y código ejecutable).

---

## Estructura del Repositorio

El proyecto se encuentra dividido en tres módulos independientes, correspondientes a los tres escenarios planteados en la guía:

### 🚗 [Ejercicio 1: Personalización de Automóviles](./ejercicio_1_automovil/)
* **Tipo de Patrón:** Creacional.
* **Patrón Seleccionado:** **Builder (Constructor)**.
* **Problema resuelto:** Evita el antipatrón del "constructor telescópico" al crear objetos complejos (`Automóvil`) con múltiples configuraciones opcionales, garantizando la inmutabilidad, flexibilidad y la legibilidad del código.

### 🔔 [Ejercicio 2: Gestión de Notificaciones Multiplataforma](./ejercicio_2_notificaciones/)
* **Tipo de Patrón:** Estructural.
* **Patrón Seleccionado:** **Bridge (Puente)**.
* **Problema resuelto:** Desacopla la abstracción (tipos de notificación como mensajes o alertas) de su implementación (plataformas de visualización como Web, Móvil o Escritorio), evitando la explosión combinatoria de subclases.

### 💬 [Ejercicio 3: Sistema de Chat Grupal](./ejercicio_3_chat/)
* **Tipo de Patrón:** De Comportamiento.
* **Patrón Seleccionado:** **Mediator (Mediador)**.
* **Problema resuelto:** Centraliza la comunicación entre diferentes usuarios dentro de una sala de chat, eliminando las conexiones directas punto a punto (muchos a muchos) y reduciendo el acoplamiento del sistema.

---

## Criterios de Evaluación Cubiertos

Cada una de las carpetas de los ejercicios contiene un archivo `README.md` individual para asegurar el cumplimiento de la rúbrica:
1. **Justificación Teórica:** Explicación detallada de la elección del patrón de diseño según los requerimientos del escenario.
2. **Diagrama de Clases UML:** Modelado gráfico de la estructura de la solución bajo buenas prácticas.
3. **Código Fuente:** Implementación funcional, tipada y limpia en TypeScript coherente con el diagrama propuesto.

---

## Integrantes (Componente Grupal)

* Camilo Acevedo Escalante - camiloaces@unisabana.edu.co
* Deisy Carolina Melo Muñoz - deisymemu@unisabana.edu.co
* Jose Luis Ospino Cueva - joseoscu@unisabana.edu.co
* Pedro Pablo Sintura Huertas - pedrosh@unisabana.edu.co
* Susana Duque Yarce - susanaduya@unisabana.edu.co

---

## Instalación y Ejecución

Para clonar el repositorio e instalar las dependencias necesarias para ejecutar el código de TypeScript, sigue estos pasos:

```bash
# 1. Clonar el repositorio
git clone https://github.com/jlospino/design-patterns-unisabana
cd design-patterns-unisabana

# 2. Instalar dependencias (TypeScript, Ts-Node, etc.)
npm install

# 3. Ejemplo: Ejecutar el Ejercicio 1 usando ts-node
npx ts-node ejercicio_1_automovil/index.ts