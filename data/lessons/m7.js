/* Módulo 7 · Estructura de la información y memoria (UF2404 · UD7) */
export default [
{ t:"Tipos de datos y arrays", min:7, src:"UF2404 · UD7 · 7.1 y 7.2", tags:["tipos primitivos","String","array","referencia"],
 s:"Datos simples, referencias y arrays, la estructura estructurada más básica.",
 sum:["Los tipos primitivos guardan el valor; los objetos, una referencia.","Un array es una secuencia de elementos del mismo tipo y tamaño fijo.","Los índices empiezan en 0."],
 h:`<h2 id="simples">Datos simples</h2><p>Numéricos (<code>int</code>, <code>long</code>, <code>double</code>…), lógicos (<code>boolean</code>), carácter (<code>char</code>), cadenas (<code>String</code>, que es un objeto) y las <strong>referencias</strong> a memoria que usan los objetos.</p>
<h2 id="arrays">Arrays</h2><p>Un array agrupa valores del mismo tipo con un tamaño fijo. El intérprete comprueba que el índice no salga de los límites.</p>
<pre><code>int[] notas = new int[3];
notas[0] = 7; notas[1] = 9; notas[2] = 6;

double media = 0;
for (int n : notas) media += n;
media /= notas.length;                // 7.33

String[][] tablero = new String[3][3];   // array bidimensional</code></pre>`,
 q:["¿Qué pasa si accedes a notas[3]?","Se lanza ArrayIndexOutOfBoundsException."],
 ex:"Calcula el máximo de un array de enteros sin usar librerías." },
{ t:"Colecciones: listas, pilas, colas y tablas hash", min:8, src:"UF2404 · UD7 · 7.2.1 a 7.2.4", tags:["List","Stack","Queue","HashMap","árbol"],
 s:"Estructuras dinámicas de la librería de Java para guardar objetos.",
 sum:["List guarda elementos en orden; Set evita repetidos; Map asocia claves y valores.","Pila = LIFO; cola = FIFO.","Una tabla hash busca por clave en tiempo casi constante."],
 h:`<h2 id="estructuras">Estructuras dinámicas</h2><p>Los arrays tienen tamaño fijo. Las <strong>listas enlazadas</strong>, <strong>pilas</strong> y <strong>colas</strong> crecen según se necesite. Otras estructuras complejas: <strong>tablas hash</strong>, <strong>árboles</strong> y <strong>grafos</strong>. Java las ofrece en <code>java.util</code>.</p>
<pre><code>import java.util.*;

List&lt;String&gt; lista = new ArrayList&lt;&gt;();
lista.add("POO"); lista.add("Java");

Deque&lt;Integer&gt; pila = new ArrayDeque&lt;&gt;();
pila.push(1); pila.push(2);          // pop() devuelve 2 (LIFO)

Queue&lt;String&gt; cola = new LinkedList&lt;&gt;();
cola.add("a"); cola.add("b");        // poll() devuelve "a" (FIFO)

Map&lt;String, Integer&gt; edades = new HashMap&lt;&gt;();
edades.put("Ana", 30);
System.out.println(edades.get("Ana"));</code></pre>
<div class="note">Programa contra la <strong>interfaz</strong> (<code>List</code>) y no contra la implementación (<code>ArrayList</code>): es polimorfismo aplicado.</div>`,
 q:["¿Qué estructura sigue el orden LIFO?","La pila: el último en entrar es el primero en salir."],
 ex:"Usa un Map para contar cuántas veces aparece cada palabra en una frase." },
{ t:"Gestión de memoria y recolector de basura", min:7, src:"UF2404 · UD7 · 7.3", tags:["memoria","heap","garbage collector","constructor","finalize"],
 s:"Creación y destrucción de objetos, objetos inalcanzables y recolección automática.",
 sum:["Los objetos se crean en el heap con new.","El recolector libera los objetos inalcanzables automáticamente.","Java evita fugas de memoria y punteros colgantes."],
 h:`<h2 id="manual">De la gestión manual a la automática</h2><p>En C el programador reservaba y liberaba memoria (<code>malloc</code>, <code>free</code>). Java ofrece <strong>gestión automática</strong>: los objetos se crean en el <em>heap</em> y la máquina virtual (JVM) libera lo que ya no se usa mediante el <strong>recolector de basura</strong> (<em>garbage collector</em>).</p>
<h2 id="objetos">Construcción y destrucción</h2><p>El programador decide <em>cuándo se crea</em> un objeto (<code>new</code> y su constructor). Cuando no queda ninguna referencia que lo alcance, es un <strong>objeto inalcanzable</strong> y el recolector puede liberarlo. En Java no se destruyen objetos explícitamente.</p>
<pre><code>Persona p = new Persona("Ana");
p = null;                  // el objeto queda inalcanzable
System.gc();               // solo una sugerencia, no una orden</code></pre>
<h2 id="ventajas">Ventajas</h2><p>No hay «fugas» de memoria por olvidar liberar ni <em>punteros colgantes</em> (referencias a memoria ya liberada). Para recursos externos (ficheros, conexiones) usa <code>try-with-resources</code> y <code>close()</code> en vez de confiar en <code>finalize()</code>, que está obsoleto.</p>
<p>En dispositivos con poca memoria (como móviles con J2ME) crear objetos innecesarios tiene coste. Técnicas clásicas de reserva: <em>First Fit</em>, <em>Buddy System</em> y <em>Suballocators</em>.</p>`,
 q:["¿Cuándo puede el recolector liberar un objeto?","Cuando es inalcanzable, es decir, no hay ninguna referencia que llegue a él."],
 ex:"Crea un bucle que genere miles de objetos temporales y explica por qué no se agota la memoria." }
];
