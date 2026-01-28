# 🛒 Mi Wishlist Interactiva

Proyecto práctico para la asignatura **Optativa 2: Programación Móvil Avanzada**.  
Esta aplicación es una **Progressive Web App (PWA)** desarrollada con **Angular 17+**, enfocada estrictamente en la arquitectura moderna y la reactividad mediante **Signals**.

---

## 🌐 Acceso a la Aplicación

Puedes acceder a la página mediante el siguiente link:

👉 **[https://wishlist-lemon-nine.vercel.app/home](https://wishlist-lemon-nine.vercel.app/home)**

---

## 🚀 Descripción del Proyecto
El objetivo es demostrar la transición de la sintaxis "Legacy" de Angular a los nuevos estándares de la industria. La aplicación permite:

- Visualizar un catálogo de productos (Cursos, Videojuegos, Hardware).
- Agregar elementos a una lista de deseos.
- **Cálculo reactivo:** el "Total a Pagar" se actualiza automáticamente mediante **`computed signals`** sin lógica manual de suma.

---

## 🛠️ Arquitectura y Tecnologías (Modern Standards)

### 1. Modelo (M)
- Uso de **interfaces fuertemente tipadas** para los artículos (`id`, `nombre`, `precio`).
- **Cero uso de `any`**.

### 2. Controlador / Lógica (C)
- **Gestión de estado con Signals:** uso de `signal()` para almacenar productos y selecciones.
- **Reactividad computada:** el total se calcula usando `computed()`, reaccionando automáticamente a los cambios.
- **Inyección de dependencias moderna:** se elimina `constructor()` en favor de `inject()`.

### 3. Vista (V)
- **Control Flow moderno:** se reemplazan `*ngIf` y `*ngFor` por la nueva sintaxis de bloques:
  - `@for` (con propiedad `track` obligatoria por ID).
  - `@if` para manejo de estados vacíos y visualización condicional.

---


## 💡 Reflexión: Desafío de la Nueva Sintaxis

Lo más desafiante de la transición a la arquitectura moderna fue cambiar la mentalidad de la detección de cambios manual a confiar plenamente en la **reactividad automática** de **Signals** y **`computed`**, así como acostumbrarse a la inyección de dependencias sin constructor.

---

## ✒️ Autores

- **Luis Enrique Villalobos Esparza** 
- **Leonardo Delgado Esparza**

