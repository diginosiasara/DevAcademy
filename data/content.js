/* Contenido del curso. ÚNICA fuente de verdad: build/build.mjs genera de aquí todas las páginas.
   Fuentes: MF0227_3 (UF2404, UF2405 y UF2406), Booch «Análisis y diseño orientado a objetos» y documentos de apoyo. */
import m1 from "./lessons/m1.js"; import m2 from "./lessons/m2.js"; import m3 from "./lessons/m3.js"; import m4 from "./lessons/m4.js"; import m5 from "./lessons/m5.js";
import * as X from "./lessons/extra.js"; import * as Y from "./lessons/extra2.js"; import m11 from "./lessons/m11.js"; import m12 from "./lessons/m12.js";
import m13 from "./lessons/m13.js"; import m6 from "./lessons/m6.js"; import m7 from "./lessons/m7.js"; import m8 from "./lessons/m8.js"; import m9 from "./lessons/m9.js"; import m10 from "./lessons/m10.js";

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
  { id: "m10", t: "Arquitectura de aplicaciones web", d: "Cliente ligero, protocolos, multicapa, MVC y capa de presentación." },
  { id: "m11", t: "Bases de datos relacionales", d: "Modelo E-R, DDL, DML, JOIN, subconsultas y del relacional a los objetos." },
  { id: "m12", t: "Acceso a datos desde aplicaciones", d: "JDBC, consultas, procedimientos almacenados, transacciones y DAO." },
  { id: "m13", t: "Ciclo de vida del desarrollo de aplicaciones", d: "UF2406: modelos de ciclo de vida, estimación, UML, GUI, calidad, pruebas, excepciones y documentación." },
];
const [abs, kay, estr, compl, ciclo, modul] = m1, [obj, clase, encap, msg, prog] = m2, [m6e, m6f] = m6, [tipArr, colec, memo] = m7, [lenguajes] = m8, [exc, eventos] = m9, [conceptos, er, relaciones, ddl, dml, join, objetos] = m11;
const all = [
  [abs, kay, estr, compl, X.ing, ciclo, X.met, modul],
  [obj, X.tipos, clase, encap, msg, prog],
  m3, m4, m5,
  [Y.calidad, m6e, Y.operadores, Y.control, m6f, Y.ambito, Y.reflexion],
  [Y.simples, tipArr, colec, X.ficheros, memo],
  [Y.ventajas, lenguajes, Y.javacpp, X.librerias, Y.javautil],
  [X.entorno, Y.javalang, X.basicas, X.caso, exc, Y.gui, eventos, Y.multimedia, X.hilos, X.red],
  m10,
  [conceptos, Y.modelos, er, relaciones, Y.transformacion, Y.algebra, Y.tiposql, ddl, Y.ddl2, dml, join, objetos],
  m12,
  m13,
];
let n = 0;
export const LESSONS = all.flatMap((ls, i) => ls.map((l) => ({ ...l, id: `poo-${String(++n).padStart(2, "0")}`, m: `m${i + 1}` })));
