/* Módulo 1 · Fundamentos y ciclo de desarrollo (UF2404 · UD1). id y módulo se asignan en data/content.js */
export default [
{ t:"Abstracción y paradigmas", min:6, src:"UF2404 · UD1 · Booch cap. 2", tags:["abstracción","paradigma","niveles"],
 s:"Por qué modelamos la realidad ocultando detalles y cómo han evolucionado los paradigmas.",
 sum:["Abstraer es destacar lo esencial y ocultar el resto.","Un paradigma es una forma de organizar el pensamiento y el código.","La POO eleva el nivel de abstracción: de instrucciones a objetos."],
 h:`<h2 id="abstraccion">Abstracción</h2><p>Es la supresión intencionada de detalles de un proceso o artefacto para destacar con más claridad otros aspectos. En cada nivel se muestra cierta información y se omite otra, y así creamos <strong>modelos</strong> de la realidad. Según Booch, una abstracción denota las características esenciales de un objeto que lo distinguen de los demás, desde la perspectiva del observador.</p>
<h2 id="niveles">El progreso de la abstracción</h2><p>Los lenguajes han subido de nivel con el tiempo: código máquina, ensamblador, lenguajes de alto nivel y, finalmente, lenguajes orientados a objetos. Cada salto permite expresar más con menos detalle técnico.</p>
<h2 id="paradigmas">Paradigmas</h2><p>Un paradigma es una forma de entender y representar la realidad. Los principales paradigmas de programación son: <strong>procedimental</strong>, <strong>orientado a objetos</strong>, <strong>lógico</strong>, <strong>funcional</strong>, <strong>orientado a reglas</strong> y <strong>orientado a restricciones</strong>.</p>
<div class="note"><strong>Idea clave:</strong> la ocultación de información deja a la vista una interfaz simple (<em>qué</em> hace algo) y esconde la implementación (<em>cómo</em> lo hace).</div>`,
 q:["¿Qué se muestra y qué se oculta en una abstracción?","Se muestra lo esencial para el nivel actual (la interfaz) y se omiten los detalles de implementación."],
 ex:"Piensa en un cajero automático: escribe qué operaciones ofrece al usuario (interfaz) y qué detalles internos le ocultan." },
{ t:"¿Qué es un lenguaje orientado a objetos?", min:7, src:"UF2404 · UD1 y UD8", tags:["Alan Kay","historia","características"],
 s:"Las seis características básicas de Alan Kay, las opcionales, la historia y las metas de la POO.",
 sum:["Un lenguaje OO se define por seis características básicas.","Otras características (genericidad, excepciones…) son opcionales.","Usar un lenguaje OO no basta: hay que seguir el paradigma."],
 h:`<h2 id="kay">Las seis características de Alan Kay</h2><ol><li>Todo es un objeto.</li><li>Cada objeto tiene su memoria, formada por otros objetos.</li><li>Todo objeto es instancia de una clase.</li><li>Los objetos de una misma clase reciben los mismos mensajes.</li><li>Las clases forman una jerarquía de herencia de raíz única.</li><li>Un programa es un conjunto de objetos que se comunican con mensajes.</li></ol>
<h2 id="opcionales">Características opcionales</h2><p>Polimorfismo, genericidad (<code>List&lt;T&gt;</code>), excepciones, aserciones, tipado estático, recogida de basura, concurrencia, persistencia y reflexión. Ser «más o menos OO» no es una condición de sí o no.</p>
<h2 id="historia">Historia breve</h2><p><strong>Simula</strong> (1967) introdujo clase, objeto, herencia y polimorfismo. <strong>Smalltalk</strong> (Alan Kay, Xerox PARC, años 70 y 80) afirmó el método y el paso de mensajes. <strong>C++</strong> y <strong>Eiffel</strong> llegaron en los años 80; después Java, C#, PHP y Python popularizaron el paradigma.</p>
<h2 id="metas">Metas de la POO</h2><p>Facilitar la <strong>reutilización</strong>, la <strong>extensibilidad</strong> y el <strong>mantenimiento</strong>, y construir programas más robustos y cercanos al problema real.</p>
<div class="note"><strong>Ojo:</strong> usar un lenguaje OO no basta; hay que organizar el programa en clases y objetos que colaboran.</div>`,
 q:["¿Basta con escribir código en Java para hacer POO?","No: hay que diseñar clases y objetos que colaboran mediante mensajes."],
 ex:"Comprueba cuáles de las seis características de Kay cumple Java (pista: los tipos primitivos como int no son objetos)." },
{ t:"Programación estructurada frente a orientada a objetos", min:6, src:"UF2404 · UD1 · UD6", tags:["comparativa","función","clase"],
 s:"Dos formas de descomponer un problema: por acciones o por objetos.",
 sum:["La estructurada descompone en funciones; la POO, en objetos.","En POO datos y comportamiento viajan juntos.","La POO facilita el mantenimiento y la reutilización."],
 h:`<h2 id="ejemplo">Dos descomposiciones del mismo problema</h2><p>Describir un coche con funciones daría: arrancar, acelerar, frenar, cambiar de marcha. Describirlo con objetos da: motor, volante, acelerador, freno y caja de cambios, cada uno con lo que sabe y hace. En el primer caso nos fijamos en <em>lo que debería hacer</em>; en el segundo, en <em>qué elementos existen</em>. Pensar en objetos nos acerca a cómo razonamos en la vida cotidiana.</p>
<h2 id="tabla">Comparativa</h2><div class="scroll"><table><caption class="sr">Programación estructurada y orientada a objetos</caption><thead><tr><th scope="col">Criterio</th><th scope="col">Estructurada</th><th scope="col">Orientada a objetos</th></tr></thead><tbody>
<tr><th scope="row">Unidad</th><td>La función</td><td>La clase</td></tr><tr><th scope="row">Datos y código</th><td>Separados</td><td>Unidos en el objeto</td></tr><tr><th scope="row">Enfoque</th><td>Acciones, de lo general a lo particular</td><td>Objetos relacionados entre sí</td></tr><tr><th scope="row">Reutilización</th><td>Copiando o llamando funciones</td><td>Herencia, composición y polimorfismo</td></tr></tbody></table></div>
<h2 id="estructuras">Las tres estructuras de control</h2><p>La programación estructurada se apoya en tres estructuras: <strong>secuencial</strong>, <strong>selectiva</strong> (<code>if</code>, <code>switch</code>) y <strong>repetitiva</strong> (<code>for</code>, <code>while</code>). La POO no las sustituye: las usamos <em>dentro</em> de los métodos.</p>`,
 q:["¿Sustituye la POO a las estructuras de control?","No: siguen usándose dentro del cuerpo de los métodos."],
 ex:"Descompón «gestionar una biblioteca» primero en funciones y luego en objetos. ¿Cuántos sustantivos encuentras?" },
{ t:"La complejidad y el modelo de objetos", min:8, src:"Booch · cap. 1 y 2", tags:["complejidad","modelo de objetos","principios"],
 s:"Por qué el software es complejo y los siete elementos del modelo de objetos de Booch.",
 sum:["El software es complejo por naturaleza; la tarea es crear una ilusión de sencillez.","Se domina con descomposición, abstracción y jerarquía.","El modelo de objetos tiene 4 elementos mayores y 3 menores."],
 h:`<h2 id="complejidad">Complejidad inherente</h2><p>Según Booch, el software es complejo de forma innata: la complejidad del dominio del problema, la dificultad de gestionar el proceso de desarrollo, la flexibilidad del software y el comportamiento de sistemas discretos. La tarea del equipo es <strong>crear una ilusión de sencillez</strong>. Para ello usamos tres herramientas: descomposición, abstracción y jerarquía.</p>
<h2 id="mayores">Elementos mayores</h2><ul><li><strong>Abstracción:</strong> características esenciales de un objeto.</li><li><strong>Encapsulamiento:</strong> separar la interfaz «contractual» de la implementación.</li><li><strong>Modularidad:</strong> módulos cohesivos y débilmente acoplados.</li><li><strong>Jerarquía:</strong> ordenación de abstracciones (herencia y agregación).</li></ul>
<h2 id="menores">Elementos menores</h2><p><strong>Tipos</strong> (imponer la clase de un objeto), <strong>concurrencia</strong> (varios hilos de control) y <strong>persistencia</strong> (que el objeto trascienda en el tiempo). Un modelo es orientado a objetos si incluye los cuatro mayores.</p>`,
 q:["¿Cuáles son los cuatro elementos mayores del modelo de objetos?","Abstracción, encapsulamiento, modularidad y jerarquía."],
 ex:"Para un sistema de reservas de hotel, nombra una abstracción, un módulo y una jerarquía." },
{ t:"Ciclo de desarrollo: análisis, diseño y programación OO", min:9, src:"UF2404 · UD1 · 1.1 y apoyo INTECO", tags:["ciclo de vida","AOO","DOO","ágil"],
 s:"Fases del desarrollo orientado a objetos, modelos de ciclo de vida y metodologías ágiles.",
 sum:["AOO modela el problema, DOO la solución y POO la implementa.","Los modelos de ciclo de vida organizan las fases en el tiempo.","Las metodologías ágiles priorizan entregas cortas y colaboración."],
 h:`<h2 id="fases">Análisis, diseño y programación</h2><p><strong>Análisis orientado a objetos (AOO):</strong> identifica los objetos y las clases del dominio del problema. <strong>Diseño (DOO):</strong> define la arquitectura, las clases de la solución y sus relaciones. <strong>Programación (POO):</strong> implementa el diseño en un lenguaje OO. Las pruebas y el mantenimiento completan el ciclo.</p>
<h2 id="modelos">Modelos de ciclo de vida</h2><div class="scroll"><table><caption class="sr">Modelos de ciclo de vida</caption><thead><tr><th scope="col">Modelo</th><th scope="col">Idea principal</th></tr></thead><tbody><tr><th scope="row">Cascada</th><td>Fases secuenciales; no se vuelve atrás</td></tr><tr><th scope="row">En V</th><td>Cada fase de desarrollo tiene su nivel de pruebas</td></tr><tr><th scope="row">Iterativo</th><td>Se repite el ciclo refinando el producto</td></tr><tr><th scope="row">Incremental</th><td>Se entrega por partes funcionales</td></tr><tr><th scope="row">Espiral</th><td>Iteraciones guiadas por el análisis de riesgos</td></tr><tr><th scope="row">Prototipos</th><td>Se valida con el cliente un modelo previo</td></tr></tbody></table></div>
<h2 id="agil">Metodologías tradicionales y ágiles</h2><p>Entre las tradicionales está <strong>RUP</strong>. Las ágiles parten del <strong>Manifiesto ágil</strong> y se materializan en <strong>XP</strong> (Extreme Programming), <strong>Scrum</strong> y <strong>DSDM</strong>. Prácticas habituales: <strong>TDD</strong> (escribir la prueba antes del código), integración continua y programación por parejas.</p>`,
 q:["¿Qué diferencia hay entre análisis y diseño?","El análisis modela el problema (el qué); el diseño define la solución (el cómo)."],
 ex:"Elige un proyecto pequeño y decide si usarías cascada o un enfoque iterativo. Justifica en dos líneas." },
{ t:"Modularidad: el módulo en la programación orientada a objetos", min:6, src:"UF2404 · UD1 · 1.2 y 1.3", tags:["módulo","cohesión","acoplamiento","paquete"],
 s:"Cómo dividir un sistema en partes cohesivas y poco acopladas.",
 sum:["Modularizar es dividir el sistema en módulos manejables.","Buen diseño: alta cohesión y bajo acoplamiento.","En POO el módulo básico es la clase; las clases se agrupan en paquetes."],
 h:`<h2 id="modulo">Concepto de módulo</h2><p>Un módulo es una unidad que agrupa elementos relacionados y se puede construir, probar y modificar por separado. Dividir un sistema en módulos reduce la complejidad y permite trabajar en equipo.</p>
<h2 id="calidad">Cohesión y acoplamiento</h2><ul><li><strong>Cohesión alta:</strong> todo lo que hay dentro del módulo tiene un propósito común.</li><li><strong>Acoplamiento bajo:</strong> el módulo depende poco de los demás.</li></ul>
<h2 id="paquetes">El módulo en la POO</h2><p>La <strong>clase</strong> es el eje de la modularidad: agrupa datos y operaciones. Varias clases relacionadas se agrupan en <strong>paquetes</strong> (<code>package</code> en Java).</p>
<pre><code>package academia.modelo;

public class Curso {
    private String titulo;
    public Curso(String titulo) { this.titulo = titulo; }
}</code></pre>`,
 q:["¿Qué buscamos al modularizar?","Alta cohesión dentro de cada módulo y bajo acoplamiento entre módulos."],
 ex:"Agrupa en dos paquetes las clases Alumno, Curso, Nota y InformePdf. ¿Qué criterio has seguido?" }
];
