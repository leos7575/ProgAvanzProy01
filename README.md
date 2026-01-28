# 🛒 Mi Wishlist Interactiva

Proyecto práctico para la asignatura **Optativa 2: Programación Móvil Avanzada**.  
Esta aplicación es una **Progressive Web App (PWA)** desarrollada con **Angular 17+**, enfocada estrictamente en la arquitectura moderna y la reactividad mediante **Signals**.

---

## 🚀 Descripción del Proyecto
El objetivo es demostrar la transición de la sintaxis "Legacy" de Angular a los nuevos estándares de la industria. La aplicación permite:

- Visualizar un catálogo de productos (Cursos, Videojuegos, Hardware).
- Agregar elementos a una lista de deseos.
- **Cálculo reactivo:** el "Total a Pagar" se actualiza automáticamente mediante **`computed signals`** sin lógica manual de suma.

---

## 🛠️ Arquitectura y Tecnologías (Modern Standards)

Este proyecto cumple con el patrón **MVC** y la **Regla de Oro** (cero sintaxis Legacy).

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

## 📦 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/leos7575/ProgAvanzProy01.git
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Ejecutar servidor de desarrollo:**
   ```bash
   ng serve
   ```
4. Navega a `http://localhost:4200/`.

---

## 💡 Reflexión: Desafío de la Nueva Sintaxis

Lo más desafiante de la transición a la arquitectura moderna fue cambiar la mentalidad de la detección de cambios manual a confiar plenamente en la **reactividad automática** de **Signals** y **`computed`**, así como acostumbrarse a la inyección de dependencias sin constructor.

---

## ✒️ Autores

- **Luis Enrique Villalobos Esparza** 
- **Leonardo Delgado Esparza**

