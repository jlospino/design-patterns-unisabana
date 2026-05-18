# Ejercicio 3: Sistema de Chat Grupal

## Patrón de Diseño

- **Categoría:** De Comportamiento
- **Patrón:** Mediator (Mediador)

## Descripción del Problema

> _Estás desarrollando una aplicación de chat grupal. Los usuarios pueden enviarse mensajes entre sí dentro de una sala de chat. Sin embargo, gestionar las interacciones directas entre cada usuario haría que cada uno deba conocer y comunicarse con todos los demás, lo que resulta en una alta dependencia entre objetos. Sin un mediador, cada usuario tendría que mantener referencias directas a todos los demás, lo que genera un sistema difícil de escalar y mantener. Si agregas o eliminas usuarios, debes actualizar muchas relaciones._

## Justificación

> _Es un patrón de diseño de comportamiento que ayuda a reducir las dependencias desordenadas entre objetos. Este patrón limita la comunicación directa entre ellos, haciendo que solo interactúen a través de un objeto mediador. Es útil reducir la complejidad de las relaciones entre objetos_

## Diagrama de Clases UML

> _Inserta aquí el diagrama UML (imagen o enlace)._

## Ejecución

```bash
npx ts-node ejercicio_3_chat/index.ts
```
