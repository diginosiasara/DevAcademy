/* Contenido del curso (fuente: Compendio UF2404-UF2406, Área D y fichas relacionadas).
   Es la ÚNICA fuente de verdad: build/build.mjs genera de aquí las páginas HTML. */
export const MODULES = [
 {
  "id": "m1",
  "t": "Fundamentos del paradigma",
  "d": "Abstracción, paradigmas y qué hace «orientado a objetos» a un lenguaje."
 },
 {
  "id": "m2",
  "t": "Objetos y clases",
  "d": "Los bloques básicos: estado, comportamiento, mensajes y encapsulación."
 },
 {
  "id": "m3",
  "t": "Herencia y polimorfismo",
  "d": "Reutilizar y especializar: jerarquías de clases y enlace dinámico."
 },
 {
  "id": "m4",
  "t": "Robustez y recursos",
  "d": "Excepciones como objetos y gestión automática de memoria."
 },
 {
  "id": "m5",
  "t": "De los objetos al sistema",
  "d": "POO en aplicaciones web y su relación con las bases de datos."
 }
];

export const LESSONS = [
 {
  "id": "poo-01",
  "m": "m1",
  "t": "Abstracción y paradigmas",
  "min": 6,
  "src": "POO-01",
  "tags": [
   "abstracción",
   "paradigma",
   "modelo"
  ],
  "s": "Por qué modelamos la realidad ocultando detalles y qué es un paradigma.",
  "h": "<h2 id=\"abstraccion\">Abstracción</h2><p>Es la supresión intencionada de detalles de un proceso o artefacto para destacar otros aspectos. En cada nivel se muestra cierta información y se omite otra: así creamos <strong>modelos</strong> de la realidad.</p>\n<h2 id=\"paradigma\">Paradigma</h2><p>Un paradigma es una forma de entender y representar la realidad: un conjunto de teorías, estándares y métodos que organizan el pensamiento. En programación conviven varios (estructurado, orientado a objetos, funcional…) y los lenguajes ofrecen distintos niveles de abstracción.</p>\n<div class=\"note\"><strong>Idea clave:</strong> la ocultación de información deja a la vista una interfaz simple (<em>qué</em> hace algo) y esconde la implementación (<em>cómo</em> lo hace).</div>",
  "q": [
   "¿Qué se muestra y qué se oculta en una abstracción?",
   "Se muestra lo relevante para el nivel actual (la interfaz) y se omiten los detalles de implementación."
  ]
 },
 {
  "id": "poo-02",
  "m": "m1",
  "t": "¿Qué es un lenguaje orientado a objetos?",
  "min": 7,
  "src": "POO-01",
  "tags": [
   "Alan Kay",
   "historia",
   "características"
  ],
  "s": "Las seis características básicas según Alan Kay, las opcionales y un repaso histórico.",
  "h": "<h2 id=\"kay\">Las seis características de Alan Kay</h2><ol><li>Todo es un objeto.</li><li>Cada objeto tiene su memoria, formada por otros objetos.</li><li>Todo objeto es instancia de una clase.</li><li>Los objetos de una misma clase reciben los mismos mensajes.</li><li>Las clases forman una jerarquía de herencia de raíz única.</li><li>Un programa es un conjunto de objetos que se comunican con mensajes.</li></ol>\n<h2 id=\"opcionales\">Características opcionales</h2><p>Polimorfismo, genericidad (<code>Lista&lt;T&gt;</code>), gestión de errores con excepciones, aserciones, tipado estático, recogida de basura, concurrencia, persistencia y reflexión. Ser «más o menos OO» no es una condición booleana.</p>\n<h2 id=\"historia\">Historia breve</h2><p><strong>Simula</strong> (1967) introdujo clase, objeto, herencia y polimorfismo. <strong>Smalltalk</strong> (Alan Kay, Xerox PARC, 1980) afirmó los conceptos de método y paso de mensajes. <strong>C++</strong> y <strong>Eiffel</strong> llegaron en los 80; hoy dominan Java, C++, PHP, C# y Python.</p>\n<div class=\"note\"><strong>Ojo:</strong> usar un lenguaje OO no basta; hay que seguir el paradigma.</div>",
  "q": [
   "¿Basta con usar Java para programar orientado a objetos?",
   "No: hay que organizar el programa en clases y objetos que colaboran mediante mensajes."
  ]
 },
 {
  "id": "poo-03",
  "m": "m1",
  "t": "Estructurada frente a orientada a objetos",
  "min": 5,
  "src": "POO-02",
  "tags": [
   "comparativa",
   "función",
   "clase"
  ],
  "s": "Comparativa de ambos enfoques y ventajas de la POO.",
  "h": "<h2 id=\"tabla\">Comparativa</h2><div class=\"scroll\"><table><caption class=\"sr\">Programación estructurada y orientada a objetos</caption><thead><tr><th scope=\"col\">Criterio</th><th scope=\"col\">Estructurada</th><th scope=\"col\">Orientada a objetos</th></tr></thead><tbody>\n<tr><th scope=\"row\">Unidad</th><td>La función</td><td>La clase</td></tr><tr><th scope=\"row\">Datos y código</th><td>Separados</td><td>Unidos en el objeto</td></tr><tr><th scope=\"row\">Enfoque</th><td>Acciones, de lo general a lo particular</td><td>Objetos relacionados entre sí</td></tr><tr><th scope=\"row\">Lectura</th><td>Secuencial, de arriba abajo</td><td>Más compacta, exige entender las relaciones</td></tr></tbody></table></div>\n<h2 id=\"ventajas\">Ventajas de la POO</h2><p>Facilita crear programas y mantenerlos, agiliza el desarrollo y permite crear tipos nuevos a partir de los existentes. La estructurada se apoya en tres estructuras: secuencial, selectiva (<code>if</code>) y repetitiva.</p>",
  "q": [
   "¿Cuál es la unidad de programación en la POO?",
   "La clase."
  ]
 },
 {
  "id": "poo-04",
  "m": "m2",
  "t": "Objetos, clases y mensajes",
  "min": 8,
  "src": "POO-01",
  "tags": [
   "clase",
   "objeto",
   "mensaje"
  ],
  "s": "Estado, comportamiento, instancias y comunicación entre objetos.",
  "h": "<h2 id=\"objeto\">Objeto y clase</h2><p>Un objeto encapsula un <strong>estado</strong> (datos) y un <strong>comportamiento</strong> (operaciones). Los objetos se agrupan en clases y cada objeto es una instancia de una.</p>\n<pre><code><span class=\"k\">public class</span> Libro {\n  <span class=\"k\">private</span> String titulo;\n  <span class=\"k\">public</span> Libro(String titulo) { <span class=\"k\">this</span>.titulo = titulo; }\n  <span class=\"k\">public</span> String getTitulo() { <span class=\"k\">return</span> titulo; }\n}\nLibro l = <span class=\"k\">new</span> Libro(<span class=\"s\">\"Clean Code\"</span>);</code></pre>\n<h2 id=\"mensajes\">Mensajes y métodos</h2><p>Se envía un mensaje a un objeto con <code>receptor.selector(argumentos)</code>; el objeto decide qué método ejecutar. A diferencia de una llamada a procedimiento, el receptor es conocido y la interpretación puede variar según su clase.</p>\n<div class=\"note\">Piensa en <strong>responsabilidades</strong>: no preguntes qué puedes hacer con tus datos, pregunta qué pueden hacer ellos por ti.</div>",
  "q": [
   "¿Qué diferencia un mensaje de una llamada a función?",
   "El mensaje tiene receptor, y su interpretación depende de la clase de ese receptor."
  ]
 },
 {
  "id": "poo-05",
  "m": "m2",
  "t": "Encapsulación y ocultación de información",
  "min": 6,
  "src": "POO-01",
  "tags": [
   "encapsulación",
   "interfaz",
   "private"
  ],
  "s": "Separar interfaz e implementación para proteger el estado.",
  "h": "<h2 id=\"vistas\">Dos vistas del objeto</h2><p>Cuando hay una división estricta entre la vista interna y la externa hablamos de <strong>encapsulación</strong>: la <em>interfaz</em> (qué sabe hacer) es visible y la <em>implementación</em> (cómo) permanece oculta.</p>\n<pre><code><span class=\"k\">public class</span> Cuenta {\n  <span class=\"k\">private double</span> saldo;\n  <span class=\"k\">public void</span> ingresar(<span class=\"k\">double</span> c) {\n    <span class=\"k\">if</span> (c &lt;= 0) <span class=\"k\">throw new</span> IllegalArgumentException();\n    saldo += c;\n  }\n}</code></pre>\n<p>Beneficios: comunicación clara en el equipo, programas autodocumentados y cambios internos sin romper a quien usa el objeto.</p>",
  "q": [
   "¿Por qué el atributo <code>saldo</code> es privado?",
   "Para que solo se modifique mediante métodos que validan los datos."
  ]
 },
 {
  "id": "poo-06",
  "m": "m3",
  "t": "Herencia y jerarquías de clases",
  "min": 6,
  "src": "POO-01",
  "tags": [
   "herencia",
   "generalización",
   "extends"
  ],
  "s": "Organizar el conocimiento en jerarquías y reutilizar comportamiento.",
  "h": "<h2 id=\"jerarquia\">Generalización</h2><p>En la vida real organizamos el conocimiento en jerarquías: un florista es un dependiente, que es un humano, que es un mamífero. Las clases hacen lo mismo: una subclase hereda memoria y comportamiento de sus ancestros.</p>\n<pre><code><span class=\"k\">class</span> Dependiente { <span class=\"k\">void</span> cobrar() {} }\n<span class=\"k\">class</span> Florista <span class=\"k\">extends</span> Dependiente { <span class=\"k\">void</span> componerRamo() {} }</code></pre>\n<div class=\"note\">Hereda cuando exista una relación «es un». Si no, usa composición.</div>",
  "q": [
   "¿Qué hereda <code>Florista</code> de <code>Dependiente</code>?",
   "Sus atributos y métodos, por ejemplo <code>cobrar()</code>."
  ]
 },
 {
  "id": "poo-07",
  "m": "m3",
  "t": "Polimorfismo y enlace dinámico",
  "min": 6,
  "src": "POO-01",
  "tags": [
   "polimorfismo",
   "enlace dinámico",
   "override"
  ],
  "s": "Un mismo mensaje, distintos comportamientos según el objeto receptor.",
  "h": "<h2 id=\"poli\">Polimorfismo</h2><p>Capacidad de una entidad de referenciar elementos de distinto tipo en distintos instantes. Con el <strong>enlace dinámico</strong> el método se elige en tiempo de ejecución; con el estático, en compilación.</p>\n<pre><code><span class=\"k\">abstract class</span> Figura { <span class=\"k\">abstract double</span> area(); }\n<span class=\"k\">class</span> Circulo <span class=\"k\">extends</span> Figura { <span class=\"k\">double</span> area() { <span class=\"k\">return</span> Math.PI * 4; } }\n<span class=\"k\">class</span> Cuadrado <span class=\"k\">extends</span> Figura { <span class=\"k\">double</span> area() { <span class=\"k\">return</span> 9; } }\nFigura f = <span class=\"k\">new</span> Circulo();\nf.area(); <span class=\"c\">// se ejecuta Circulo.area()</span></code></pre>",
  "q": [
   "¿Cuándo se decide qué <code>area()</code> se ejecuta?",
   "En tiempo de ejecución, según la clase real del objeto."
  ]
 },
 {
  "id": "poo-08",
  "m": "m4",
  "t": "Excepciones: errores como objetos",
  "min": 7,
  "src": "EXC-01 · EXC-02",
  "tags": [
   "excepciones",
   "try-catch",
   "finally"
  ],
  "s": "Capturar y tratar errores con try, catch y finally.",
  "h": "<h2 id=\"trycatch\">Estructura try-catch-finally</h2><p>El código que puede fallar va en un bloque <code>try</code>; cada <code>catch</code> trata un tipo de excepción y <code>finally</code> se ejecuta siempre. Las excepciones son objetos, por eso forman jerarquías.</p>\n<pre><code><span class=\"k\">try</span> {\n  Integer.parseInt(texto);\n} <span class=\"k\">catch</span> (NumberFormatException e) {\n  System.out.println(<span class=\"s\">\"No es un número\"</span>);\n} <span class=\"k\">catch</span> (Exception e) {\n  System.out.println(<span class=\"s\">\"Error genérico\"</span>);\n} <span class=\"k\">finally</span> {\n  System.out.println(<span class=\"s\">\"Siempre se ejecuta\"</span>);\n}</code></pre>\n<div class=\"note\">Los <code>catch</code> van de lo más específico a lo más genérico.</div>",
  "q": [
   "¿Por qué <code>catch (Exception e)</code> va el último?",
   "Porque captura todo; si fuera primero, ocultaría los catch específicos."
  ]
 },
 {
  "id": "poo-09",
  "m": "m4",
  "t": "Memoria y recolector de basura",
  "min": 5,
  "src": "POO-03",
  "tags": [
   "memoria",
   "garbage collector",
   "JVM"
  ],
  "s": "Reserva de memoria y liberación automática de objetos sin uso.",
  "h": "<h2 id=\"reserva\">Reserva y recolección</h2><p>La reserva toma parte de la memoria disponible para una aplicación. El <strong>recolector de basura</strong> escanea la memoria de la máquina virtual y libera la que ya no se usa, reutilizándola automáticamente.</p>\n<p>Esto evita fugas, pero la memoria sigue siendo limitada: en dispositivos pequeños, como en la KVM de J2ME, crear objetos innecesarios tiene coste. Estrategias clásicas de reserva: <em>First Fit</em>, <em>Buddy System</em> y <em>Suballocators</em>.</p>",
  "q": [
   "¿Qué hace el recolector de basura?",
   "Libera automáticamente la memoria de los objetos que ya no se utilizan."
  ]
 },
 {
  "id": "poo-10",
  "m": "m5",
  "t": "POO en la web y en las bases de datos",
  "min": 7,
  "src": "WEB-04 · BDR-05 · BDR-06",
  "tags": [
   "capas",
   "persistencia",
   "relacional"
  ],
  "s": "Objetos como base de aplicaciones por capas y su correspondencia con tablas.",
  "h": "<h2 id=\"web\">Componentes OO en la web</h2><p>La descomposición en clases y objetos permitió dividir los sistemas en niveles (presentación, lógica de negocio y datos) y abarcar reglas de negocio complejas.</p>\n<h2 id=\"persistencia\">Persistencia</h2><p>La <strong>persistencia</strong> hace que un objeto trascienda en el tiempo, normalmente guardándolo en una base de datos. Como el modelo relacional y el de objetos difieren, se establece una correspondencia: clase ↔ tabla, atributo ↔ columna, objeto ↔ fila.</p>",
  "q": [
   "¿A qué corresponde un objeto en el modelo relacional?",
   "A una fila de una tabla (la clase)."
  ]
 }
];
