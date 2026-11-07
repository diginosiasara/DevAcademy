/* Contenido del curso. ÚNICA fuente de verdad: build/build.mjs genera de aquí todas las páginas.
   Fuentes: MF0227_3 (UF2404 y UF2405), Booch «Análisis y diseño orientado a objetos» y documentos de apoyo. */
import m1 from "./lessons/m1.js"; import m2 from "./lessons/m2.js"; import m3 from "./lessons/m3.js"; import m4 from "./lessons/m4.js"; import m5 from "./lessons/m5.js";
import m6 from "./lessons/m6.js"; import m7 from "./lessons/m7.js"; import m8 from "./lessons/m8.js"; import m9 from "./lessons/m9.js"; import m10 from "./lessons/m10.js";

export const MODULES = [
  { id: "m1", t: "Fundamentos y ciclo de desarrollo", d: "Abstracción, paradigmas, modelo de objetos, ciclo de vida y modularidad." },
  { id: "m2", t: "Objetos y clases", d: "Estado, comportamiento, identidad, encapsulación y mensajes." },
  { id: "m3", t: "Herencia", d: "Generalización y especialización, clases abstractas e interfaces." },
  { id: "m4", t: "Relaciones entre clases", d: "Asociación, agregación, composición y cuándo elegir cada una." },
  { id: "m5", t: "Polimorfismo", d: "Sobrecarga, sobrescritura, ligadura dinámica y comprobación de tipos." },
  { id: "m6", t: "Programación estructurada", d: "Variables, estructuras de control, funciones y paso de parámetros." },
  { id: "m7", t: "Estructuras de datos y memoria", d: "Arrays, colecciones y recolección de basura." },
  { id: "m8", t: "Lenguajes orientados a objetos", d: "Clasificación y comparación de Java, C++, C#, Python y PHP." },
  { id: "m9", t: "Implementación en Java", d: "Excepciones, eventos, hilos, red y acceso a datos." },
  { id: "m10", t: "Web y bases de datos", d: "Arquitectura multicapa, SQL y persistencia con JDBC." },
];
const all = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
let n = 0;
export const LESSONS = all.flatMap((ls, i) => ls.map((l) => ({ ...l, id: `poo-${String(++n).padStart(2, "0")}`, m: `m${i + 1}` })));
