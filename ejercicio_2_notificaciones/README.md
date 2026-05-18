# Ejercicio 2: Gestión de Notificaciones Multiplataforma

## Patrón de Diseño

- **Categoría:** Estructural
- **Patrón:** Bridge (Puente)

## Descripción del Problema

- **Escenario:**
Estás desarrollando una aplicación que gestiona la visualización de notificaciones en
diferentes plataformas (por ejemplo: escritorio, móvil, web). Las notificaciones pueden ser
de distintos tipos (mensaje, alerta, advertencia, confirmación) y cada tipo puede mostrarse
de distintas formas según la plataforma.

- **Problema:**
 Si usas herencia tradicional, tendrías que crear clases como:

  - NotificacionMensajeWeb, NotificacionAlertaWeb, NotificacionMensajeMovil, NotificacionAlertaMovil, etc.

  - Esto lleva rápidamente a una explosión combinatoria de subclases difíciles de mantener.

- **Beneficios esperados de la solución:**
  - Separación de responsabilidades: Separar la lógica de la notificación del medio por el
que se presenta.

  - Escalabilidad: Poder agregar nuevas plataformas o tipos de notificación sin modificar
el resto del sistema.

  - Reducción de clases: Evitar la multiplicación de clases para cada combinación.

  - Flexibilidad en tiempo de ejecución: Poder cambiar la plataforma dinámicamente si
es necesario.

## Justificación

- Se aplica el patrón Bridge para separar la abstracción de las notificaciones de su implementación en cada plataforma. Esto evita el crecimiento desmedido del código y garantiza la flexibilidad y el aislamiento de responsabilidades que requiere el proyecto.

## Diagrama de Clases UML

<img width="956" height="425" alt="DiagranaClasesUML" src="https://github.com/user-attachments/assets/f8ade0d8-0260-40a1-a1d0-5decf62e6f13" />

## Ejecución

```bash
npx ts-node ejercicio_2_notificaciones/index.ts
```
