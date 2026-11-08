/* Lecciones añadidas en la segunda auditoría (lectura completa de UF2404 y UF2405). */
export const calidad = { t:"Calidad del código y buenas prácticas", min:9, src:"UF2404 · UD6 · calidad del código", tags:["calidad","complejidad","refactorización","Fowler","comentarios"],
 s:"Principios de calidad, complejidad, reglas de codificación y cómo escribir buen código Java.",
 sum:["Un buen código se entiende, se prueba y se mantiene con facilidad.","La complejidad cuenta los caminos lógicos de cada unidad: if, while, for, case, catch.","Refactorizar mejora el diseño sin cambiar el comportamiento."],
 h:`<h2 id="principios">Principios de calidad</h2><p>La calidad del código se mide por su <strong>legibilidad</strong>, <strong>mantenibilidad</strong>, <strong>eficiencia</strong> y <strong>facilidad de prueba</strong>. Se programa una vez, pero se lee y modifica muchas veces.</p>
<h2 id="complejidad">Complejidad</h2><p>La complejidad es el número de caminos lógicos de un componente: sentencias selectivas (<code>if</code>, <code>case</code>), iterativas (<code>while</code>, <code>for</code>) y tratamiento de excepciones (<code>throw</code>, <code>catch</code>). Cuantos más caminos, más pruebas hacen falta y más riesgo hay.</p>
<div class="scroll"><table><caption class="sr">Complejidad por unidad y riesgo</caption><thead><tr><th scope="col">Complejidad</th><th scope="col">Riesgo</th></tr></thead><tbody><tr><th scope="row">1 a 10</th><td>Código sencillo, riesgo bajo</td></tr><tr><th scope="row">11 a 20</th><td>Riesgo moderado</td></tr><tr><th scope="row">21 a 50</th><td>Riesgo alto</td></tr><tr><th scope="row">Más de 50</th><td>No se puede probar razonablemente</td></tr></tbody></table></div>
<h2 id="java">Escribir un buen código Java</h2><ul><li><strong>Mantén pequeñas las clases</strong>: una responsabilidad clara.</li><li><strong>Mantén pequeños los métodos</strong>: hacen una sola cosa.</li><li><strong>Nombra los métodos con cuidado</strong>: verbos que describan lo que hacen (<code>calcularIva</code>).</li><li><strong>Usa los comentarios para el porqué</strong>, no para repetir el qué.</li><li>Respeta las convenciones de nombres e indentación del equipo.</li></ul>
<h2 id="refactorizar">Refactorizar (Fowler)</h2><p>Martin Fowler popularizó la <strong>refactorización</strong>: cambiar la estructura interna sin alterar el comportamiento externo, apoyándose en pruebas. Operaciones típicas: extraer método, renombrar, mover método y sustituir condicionales por polimorfismo.</p>
<pre><code>// Antes: un método largo que mezcla cálculo e impresión
void factura(double base, boolean vip) {
    double total = base * 1.21;
    if (vip) total = total * 0.9;
    System.out.println("Total: " + total);
}

// Después: métodos pequeños con nombre claro
double conIva(double base) { return base * 1.21; }
double conDescuento(double total, boolean vip) { return vip ? total * 0.9 : total; }
void factura(double base, boolean vip) {
    System.out.println("Total: " + conDescuento(conIva(base), vip));
}</code></pre>`,
 q:["¿Qué mide la complejidad de un método?","El número de caminos lógicos que tiene (condiciones, bucles y excepciones)."], ex:"Cuenta la complejidad de un método tuyo con un if, un for y un catch." };

export const operadores = { t:"Operadores y expresiones", min:9, src:"UF2404 · UD6 · 6.1", tags:["operadores","precedencia","expresiones","bits","concatenación"],
 s:"Operadores aritméticos, relacionales, lógicos y de bits; precedencia y expresiones.",
 sum:["La división entera descarta los decimales.","&& y || evalúan en cortocircuito.","La precedencia decide el orden; los paréntesis lo aclaran."],
 h:`<h2 id="aritmeticos">Operadores aritméticos</h2><p>Suma (<code>+</code>), resta, producto, división y resto (<code>%</code>), más incremento <code>++</code> y decremento <code>--</code>. Con <strong>enteros</strong> la división descarta los decimales y un valor fuera de rango desborda sin avisar. Con <strong>reales</strong> la precisión es limitada y existen valores especiales (<code>Infinity</code>, <code>NaN</code>).</p>
<pre><code>System.out.println(7 / 2);          // 3 (división entera)
System.out.println(7 % 2);          // 1
System.out.println(7 / 2.0);        // 3.5
System.out.println(0.1 + 0.2);      // 0.30000000000000004
System.out.println(Integer.MAX_VALUE + 1);   // -2147483648 (desbordamiento)</code></pre>
<h2 id="concatenacion">Concatenación</h2><p>El operador <code>+</code> con una cadena concatena: <code>"Total: " + 3 + 4</code> da <code>"Total: 34"</code>; con paréntesis, <code>"Total: " + (3 + 4)</code> da <code>"Total: 7"</code>.</p>
<h2 id="logicos">Relacionales, lógicos y de bits</h2><ul><li><strong>Relacionales:</strong> <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>.</li><li><strong>Lógicos:</strong> <code>&amp;&amp;</code>, <code>||</code> (cortocircuito) y <code>!</code>.</li><li><strong>De bits:</strong> <code>&amp;</code>, <code>|</code>, <code>^</code>, <code>~</code>, desplazamientos <code>&lt;&lt;</code>, <code>&gt;&gt;</code> y <code>&gt;&gt;&gt;</code> (sin signo).</li><li><strong>Asignación:</strong> <code>=</code> y compuestos como <code>+=</code>, <code>*=</code>.</li><li><strong>Condicional:</strong> <code>cond ? a : b</code>.</li></ul>
<pre><code>int x = 6;                 // 0110
System.out.println(x &amp; 3);   // 2  (0010)
System.out.println(x &lt;&lt; 1);  // 12
String a = null;
if (a != null &amp;&amp; a.length() &gt; 3) { }   // seguro: no evalúa a.length() si a es null</code></pre>
<h2 id="precedencia">Precedencia, separadores y comentarios</h2><p>De mayor a menor: operadores unarios, <code>* / %</code>, <code>+ -</code>, relacionales, igualdad, <code>&amp;&amp;</code>, <code>||</code>, condicional y asignación. Ante la duda, usa paréntesis. Los separadores son <code>( ) { } [ ] ; , .</code> y los comentarios <code>//</code>, <code>/* */</code> y <code>/** */</code> (Javadoc).</p>`,
 q:["¿Cuánto vale 7 / 2 en Java con enteros?","3: la división entera descarta la parte decimal."], ex:"Predice y comprueba el resultado de 1 + 2 + \"3\" + 4 + 5." };

export const control = { t:"Sentencias de control: if, switch, bucles y saltos", min:9, src:"UF2404 · UD6 · 6.2", tags:["if","switch","while","for","break","continue"],
 s:"Estructuras condicionales, iterativas y de salto con sus diferencias.",
 sum:["if-else y switch eligen entre alternativas.","while y for comprueban antes; do-while ejecuta al menos una vez.","break, continue y return alteran el flujo."],
 h:`<h2 id="condicionales">Condicionales</h2><pre><code>int nota = 7;
if (nota &gt;= 9) System.out.println("Sobresaliente");
else if (nota &gt;= 7) System.out.println("Notable");
else System.out.println("Otro");

switch (nota) {
    case 10: case 9: System.out.println("A"); break;
    case 8:          System.out.println("B"); break;
    default:         System.out.println("C");
}

String texto = switch (nota) { case 10, 9 -&gt; "A"; case 8 -&gt; "B"; default -&gt; "C"; };   // Java 14+</code></pre>
<p>En el <code>switch</code> clásico, sin <code>break</code> la ejecución «cae» en el caso siguiente.</p>
<h2 id="bucles">Bucles</h2><ul><li><strong>while:</strong> comprueba la condición antes de cada vuelta.</li><li><strong>do-while:</strong> comprueba al final, así que se ejecuta al menos una vez.</li><li><strong>for:</strong> inicialización, condición y paso; <code>for-each</code> recorre colecciones y arrays.</li></ul>
<pre><code>int i = 0;
while (i &lt; 3) { System.out.print(i++ + " "); }          // 0 1 2

int n;
do { n = (int) (Math.random() * 10); } while (n != 7);    // al menos una vez

for (int k = 0; k &lt; 5; k++) { System.out.print(k + " "); }
for (String s : new String[] {"a", "b"}) { System.out.print(s); }</code></pre>
<h2 id="saltos">Saltos</h2><p><code>break</code> sale del bucle o del switch; <code>continue</code> pasa a la siguiente vuelta; <code>return</code> termina el método. Con una <em>etiqueta</em> se sale de bucles anidados.</p>
<pre><code>externo:
for (int a = 0; a &lt; 3; a++) {
    for (int b = 0; b &lt; 3; b++) {
        if (a * b == 2) break externo;     // sale de los dos bucles
    }
}</code></pre>
<p>Un <strong>bloque</strong> <code>{ }</code> agrupa sentencias y define un ámbito: las variables declaradas dentro no existen fuera.</p>`,
 q:["¿Qué diferencia hay entre while y do-while?","do-while ejecuta el cuerpo al menos una vez porque comprueba la condición al final."], ex:"Escribe un bucle que busque el primer múltiplo de 7 mayor que 100 y use break." };

export const ambito = { t:"Ámbito de las variables y constantes", min:7, src:"UF2404 · UD6 · 6.3.6 y 6.3.7 · 6.5.3", tags:["ámbito","variable local","static","final","constante"],
 s:"Variables locales, de bloque, de instancia y estáticas; constantes y valores por defecto.",
 sum:["Una variable solo existe en el bloque donde se declara.","Las variables locales no tienen valor inicial por defecto.","static pertenece a la clase y final hace constante un valor."],
 h:`<h2 id="tipos">Tipos de variables según su ámbito</h2><ul><li><strong>Locales:</strong> dentro de un método; viven mientras se ejecuta.</li><li><strong>De bloque:</strong> dentro de <code>{ }</code>, por ejemplo la variable de un <code>for</code>.</li><li><strong>De instancia:</strong> atributos; existen mientras exista el objeto.</li><li><strong>Estáticas (de clase):</strong> una sola copia compartida por todos los objetos.</li></ul>
<h2 id="valores">Valores iniciales</h2><p>Los atributos reciben un valor por defecto (<code>0</code>, <code>false</code> o <code>null</code>). Las <strong>variables locales no</strong>: el compilador exige asignarles un valor antes de usarlas.</p>
<pre><code>class Contador {
    static int total = 0;          // de clase
    int mio = 0;                   // de instancia
    static final double IVA = 0.21;   // constante

    void sumar() {
        int paso = 1;              // local
        for (int i = 0; i &lt; 3; i++) {   // i: variable de bloque
            mio += paso; total += paso;
        }
        // System.out.println(i);  // error: i no existe aquí
    }
}</code></pre>
<h2 id="constantes">Constantes y final</h2><p><code>final</code> impide reasignar una variable; en un parámetro impide que el método cambie su referencia. Por convención las constantes se escriben en mayúsculas: <code>MAX_ALUMNOS</code>.</p>
<h2 id="sombreado">Sombreado</h2><p>Una variable local con el mismo nombre que un atributo lo oculta; <code>this.nombre</code> accede al atributo.</p>`,
 q:["¿Qué valor tiene una variable local sin inicializar?","Ninguno: el compilador no permite usarla hasta que se le asigna un valor."], ex:"Cuenta con un atributo static cuántos objetos Contador se han creado." };

export const reflexion = { t:"Reflexión: invocar métodos en tiempo de ejecución", min:8, src:"UF2404 · UD6 · 6.4 y 6.5.1", tags:["reflexión","Class","Method","invoke"],
 s:"Obtener los métodos de una clase y llamarlos dinámicamente con java.lang.reflect.",
 sum:["La reflexión inspecciona clases, métodos y atributos en ejecución.","Class, Method y Constructor son las piezas clave.","Es potente pero lenta y rompe la encapsulación: úsala con moderación."],
 h:`<h2 id="concepto">Concepto</h2><p>La <strong>reflexión</strong> permite que un programa examine y use su propia estructura: conocer los métodos de una clase, sus parámetros y llamarlos por nombre. Se usa en frameworks, serialización y herramientas de pruebas.</p>
<h2 id="obtener">Obtener métodos</h2><pre><code>Class&lt;?&gt; clase = Class.forName("java.lang.String");     // obtener la clase
for (java.lang.reflect.Method m : clase.getMethods()) {
    System.out.println(m.getName() + " " + m.getParameterCount());
}</code></pre>
<h2 id="invocar">Invocar un método</h2><pre><code>class Calculadora {
    public int sumar(int a, int b) { return a + b; }
    public String saludo() { return "Hola"; }
}

Object obj = new Calculadora();
java.lang.reflect.Method m1 = obj.getClass().getMethod("sumar", int.class, int.class);
System.out.println(m1.invoke(obj, 2, 3));                 // 5 (con N parámetros)

java.lang.reflect.Method m2 = obj.getClass().getMethod("saludo");
System.out.println(m2.invoke(obj));                        // Hola (sin parámetros)</code></pre>
<div class="note"><strong>Cuidado:</strong> <code>setAccessible(true)</code> salta la visibilidad <code>private</code>; no lo uses salvo en herramientas. La reflexión es más lenta que la llamada directa y los errores aparecen en ejecución.</div>`,
 q:["¿Qué método de Method ejecuta el método reflejado?","invoke(objeto, argumentos...)."], ex:"Lista por reflexión los métodos públicos de una clase tuya y llama a uno de ellos." };

export const simples = { t:"Tipos simples, literales y conversión de tipos", min:8, src:"UF2404 · UD7 · 7.1", tags:["int","double","char","boolean","cast","conversión"],
 s:"Tipos enteros, de coma flotante, booleano y carácter, sus literales y las conversiones entre ellos.",
 sum:["Cada tipo simple tiene un tamaño y un rango fijos en Java.","La conversión implícita amplía; la explícita (cast) puede perder datos.","Los literales indican tipo: 5L, 1.5f, 'a', true."],
 h:`<h2 id="tipos">Tipos y rangos</h2><div class="scroll"><table><caption class="sr">Tipos simples de Java</caption><thead><tr><th scope="col">Tipo</th><th scope="col">Tamaño</th><th scope="col">Rango / uso</th></tr></thead><tbody><tr><th scope="row"><code>byte</code></th><td>8 bits</td><td>−128 a 127</td></tr><tr><th scope="row"><code>short</code></th><td>16 bits</td><td>−32 768 a 32 767</td></tr><tr><th scope="row"><code>int</code></th><td>32 bits</td><td>≈ ±2 147 millones</td></tr><tr><th scope="row"><code>long</code></th><td>64 bits</td><td>enteros muy grandes (sufijo <code>L</code>)</td></tr><tr><th scope="row"><code>float</code></th><td>32 bits</td><td>coma flotante (sufijo <code>f</code>)</td></tr><tr><th scope="row"><code>double</code></th><td>64 bits</td><td>coma flotante por defecto</td></tr><tr><th scope="row"><code>boolean</code></th><td>—</td><td><code>true</code> o <code>false</code></td></tr><tr><th scope="row"><code>char</code></th><td>16 bits</td><td>carácter Unicode</td></tr></tbody></table></div>
<h2 id="literales">Literales</h2><pre><code>int dec = 255, hex = 0xFF, bin = 0b1111_1111;
long grande = 9_000_000_000L;
double d = 1.5e3;            // 1500.0
float f = 2.5f;
char c = 'A', salto = '\\n', unicode = '\\u0041';
boolean ok = true;</code></pre>
<h2 id="conversion">Conversión de tipos</h2><p>La conversión <strong>implícita</strong> (ampliación) no pierde información: <code>int</code> → <code>long</code> → <code>double</code>. La <strong>explícita</strong> (<em>cast</em>) estrecha el tipo y puede perder datos.</p>
<pre><code>int i = 10;
double d2 = i;               // implícita: 10.0
double pi = 3.99;
int t = (int) pi;            // explícita: 3 (trunca, no redondea)
byte b = (byte) 200;         // -56: desbordamiento
char letra = (char) ('a' + 1);   // 'b'</code></pre>`,
 q:["¿Qué valor tiene (int) 3.99?","3: el cast trunca la parte decimal, no redondea."], ex:"Calcula la media de tres enteros sin perder decimales." };

export const ventajas = { t:"Ventajas, desventajas y clasificación de los lenguajes OO", min:8, src:"UF2404 · UD8 · 8.1 y 8.2", tags:["clasificación","ventajas","desventajas","Smalltalk","Visual Basic","Scratch"],
 s:"Para qué sirve el paradigma, qué inconvenientes tiene y cómo se clasifican los lenguajes.",
 sum:["La POO mejora reutilización, extensibilidad y mantenimiento.","Tiene curva de aprendizaje y puede ser excesiva en problemas pequeños.","Los lenguajes se clasifican por nivel de abstracción y por grado de orientación a objetos."],
 h:`<h2 id="ventajas">Ventajas</h2><ul><li><strong>Reusabilidad:</strong> una clase se reutiliza en varias aplicaciones.</li><li><strong>Extensibilidad:</strong> la herencia y la modularidad permiten crecer sin rehacer.</li><li><strong>Flexibilidad:</strong> las clases son módulos independientes para definir otras nuevas.</li><li><strong>Mantenibilidad:</strong> se cambia una clase sin afectar a las demás.</li><li><strong>Modelado natural</strong> y <strong>robustez</strong> por la ocultación de información.</li></ul>
<h2 id="desventajas">Desventajas</h2><ul><li>Curva de aprendizaje más alta (pensar en objetos).</li><li>Mayor consumo de memoria y, a veces, de rendimiento.</li><li>Sobrecoste de diseño: en problemas muy pequeños puede ser excesivo.</li><li>Un mal diseño de jerarquías es difícil de corregir.</li></ul>
<h2 id="clasificacion">Clasificación</h2><div class="scroll"><table><caption class="sr">Clasificación de lenguajes</caption><thead><tr><th scope="col">Criterio</th><th scope="col">Categorías</th></tr></thead><tbody><tr><th scope="row">Nivel de abstracción</th><td>Bajo (ensamblador), medio (C), alto (Java, Python)</td></tr><tr><th scope="row">Paradigma</th><td>Puros (Smalltalk, Eiffel), híbridos (C++, Java, C#, Python), basados en objetos (Visual Basic clásico) y que usan objetos</td></tr></tbody></table></div>
<p>Otros ejemplos citados: <strong>Smalltalk</strong> (puro, de Alan Kay), <strong>Visual Basic</strong> (objetos y propiedades con la forma <code>NombreObjeto.NombrePropiedad</code>), <strong>Objective-C</strong>, <strong>Delphi</strong>, <strong>PowerBuilder</strong> y <strong>Scratch</strong>, un lenguaje visual para aprender a programar con bloques.</p>
<div class="note">Rankings como el índice <strong>TIOBE</strong> miden la popularidad de los lenguajes; las posiciones cambian cada año, así que consulta el más reciente.</div>`,
 q:["Nombra tres ventajas de la POO.","Reutilización, extensibilidad y mantenibilidad (también flexibilidad y robustez)."], ex:"Clasifica Java, C, Smalltalk y Python según el paradigma y el nivel de abstracción." };

export const javacpp = { t:"Java frente a C++: qué cambia", min:8, src:"UF2404 · UD8 · 8.2", tags:["Java","C++","portabilidad","robustez","seguridad"],
 s:"Elementos similares, suprimidos e introducidos al pasar de C++ a Java.",
 sum:["Java conserva la sintaxis de C++ pero elimina punteros, preprocesador y herencia múltiple de clases.","Los tipos tienen tamaño fijo, lo que garantiza la portabilidad.","La memoria es automática y la ejecución, controlada por la JVM."],
 h:`<h2 id="similares">Similares</h2><p>La sintaxis, los operadores, las estructuras de control y el modelo de clases son muy parecidos. Quien conoce C++ lee Java con facilidad.</p>
<h2 id="tabla">Diferencias</h2><div class="scroll"><table><caption class="sr">Java y C++</caption><thead><tr><th scope="col">Aspecto</th><th scope="col">C++</th><th scope="col">Java</th></tr></thead><tbody>
<tr><th scope="row">Punteros</th><td>Sí, con aritmética</td><td>No: solo referencias</td></tr>
<tr><th scope="row">Memoria</th><td>Manual (<code>new</code>/<code>delete</code>)</td><td>Recolector de basura</td></tr>
<tr><th scope="row">Herencia múltiple</th><td>De clases</td><td>Solo de interfaces</td></tr>
<tr><th scope="row">Preprocesador, <code>goto</code>, <code>struct</code>, <code>union</code></th><td>Sí</td><td>Suprimidos</td></tr>
<tr><th scope="row">Sobrecarga de operadores</th><td>Sí</td><td>No</td></tr>
<tr><th scope="row">Tipos de datos</th><td>Tamaño dependiente de la plataforma</td><td>Tamaño fijo (<code>int</code> = 32 bits)</td></tr>
<tr><th scope="row">Cadenas y vectores</th><td>Arrays de caracteres</td><td>Objetos <code>String</code> y arrays con control de límites</td></tr>
<tr><th scope="row">Ejecución</th><td>Código nativo</td><td>Bytecode en la JVM</td></tr></tbody></table></div>
<h2 id="caracteristicas">Características de Java</h2><ul><li><strong>Portabilidad:</strong> el mismo bytecode se ejecuta en cualquier plataforma con JVM.</li><li><strong>Sencillez:</strong> menos conceptos propensos a error.</li><li><strong>Robustez:</strong> comprobaciones en compilación y en ejecución.</li><li><strong>Seguridad:</strong> verificador de bytecode y entorno restringido.</li><li><strong>Dinamicidad:</strong> las clases se cargan cuando se necesitan.</li></ul>`,
 q:["¿Por qué Java es más portable que C++?","Porque los tipos tienen tamaño fijo y el bytecode se ejecuta en una máquina virtual en cada plataforma."], ex:"Haz una lista de errores típicos de C++ que Java evita por diseño." };

export const javautil = { t:"java.util en detalle: Collection, Iterator, Comparator y Map", min:9, src:"UF2404 · UD8 · 8.3", tags:["Collection","Iterator","Comparator","Map","TreeSet","java.util"],
 s:"Interfaces y clases principales del paquete java.util y cómo ordenar y recorrer colecciones.",
 sum:["Collection es la raíz de List y Set; Map es aparte.","Iterator recorre y puede eliminar; Comparator define el orden.","TreeSet y TreeMap mantienen los elementos ordenados."],
 h:`<h2 id="interfaces">Interfaces</h2><ul><li><strong>Collection:</strong> grupo de elementos; de ella derivan <code>List</code> (con orden y repetidos) y <code>Set</code> (sin repetidos; <code>SortedSet</code> los ordena).</li><li><strong>Map</strong> y <strong>SortedMap:</strong> pares clave-valor.</li><li><strong>Iterator:</strong> recorre una colección.</li><li><strong>Comparator</strong> y <strong>Comparable:</strong> definen el orden.</li></ul>
<h2 id="implementaciones">Implementaciones</h2><div class="scroll"><table><caption class="sr">Implementaciones de colecciones</caption><thead><tr><th scope="col">Clase</th><th scope="col">Estructura</th><th scope="col">Cuándo</th></tr></thead><tbody><tr><th scope="row">ArrayList</th><td>Array dinámico</td><td>Acceso por índice</td></tr><tr><th scope="row">LinkedList</th><td>Lista enlazada</td><td>Inserciones al inicio o medio</td></tr><tr><th scope="row">HashSet / HashMap</th><td>Tabla hash</td><td>Búsqueda rápida sin orden</td></tr><tr><th scope="row">TreeSet / TreeMap</th><td>Árbol</td><td>Elementos ordenados</td></tr></tbody></table></div>
<h2 id="uso">Recorrer y ordenar</h2><pre><code>import java.util.*;

List&lt;String&gt; nombres = new ArrayList&lt;&gt;(List.of("Marta", "Ana", "Luis", "Eva"));

Iterator&lt;String&gt; it = nombres.iterator();
while (it.hasNext()) {
    if (it.next().length() == 3) it.remove();      // elimina con seguridad
}

nombres.sort(Comparator.comparing(String::length).thenComparing(Comparator.naturalOrder()));
System.out.println(nombres);                        // [Luis, Marta] (sin los de 3 letras, ordenados por longitud)

SortedSet&lt;Integer&gt; ordenados = new TreeSet&lt;&gt;(List.of(5, 1, 3));
System.out.println(ordenados);                      // [1, 3, 5]

Map&lt;String, List&lt;String&gt;&gt; porLetra = new TreeMap&lt;&gt;();
porLetra.computeIfAbsent("A", k -&gt; new ArrayList&lt;&gt;()).add("Ana");</code></pre>
<div class="note">Otras clases clásicas del paquete: <code>Calendar</code>, <code>StringTokenizer</code> y <code>Date</code>; hoy se prefiere <code>java.time</code> para fechas y <code>split()</code> para cadenas.</div>`,
 q:["¿Qué estructura usarías para tener elementos únicos y ordenados?","TreeSet."], ex:"Ordena una lista de objetos Alumno por nota descendente con un Comparator." };

export const javalang = { t:"El lenguaje Java: características, comentarios e identificadores", min:8, src:"UF2404 · UD9 · 9.1 a 9.4", tags:["Java","bytecode","Javadoc","identificadores","convenciones"],
 s:"Cómo funciona Java, reglas de los identificadores y convenciones de escritura.",
 sum:["javac genera bytecode que ejecuta la JVM.","Los identificadores distinguen mayúsculas y no pueden ser palabras reservadas.","Las convenciones hacen el código legible para todo el equipo."],
 h:`<h2 id="caracteristicas">Características</h2><p>Java es un lenguaje <strong>simple, orientado a objetos, distribuido, interpretado, robusto, seguro, de arquitectura neutra, portable, multihilo y dinámico</strong>. El código fuente se compila con <code>javac</code> a <em>bytecode</em> (<code>.class</code>) y la <strong>JVM</strong> lo ejecuta en cada plataforma.</p>
<h2 id="comentarios">Comentarios</h2><pre><code>// comentario de una línea
/* comentario
   de varias líneas */
/**
 * Calcula el IVA de un importe.
 * @param base importe sin IVA
 * @return el importe del IVA
 */
public double iva(double base) { return base * 0.21; }</code></pre>
<p>Los comentarios <code>/** */</code> los procesa <strong>Javadoc</strong> para generar la documentación.</p>
<h2 id="identificadores">Identificadores</h2><ul><li>Empiezan por letra, <code>_</code> o <code>$</code>; después pueden llevar dígitos.</li><li>Distinguen mayúsculas de minúsculas.</li><li>No pueden ser palabras reservadas (<code>class</code>, <code>int</code>, <code>if</code>…).</li></ul>
<h2 id="convenciones">Convenciones de legibilidad</h2><div class="scroll"><table><caption class="sr">Convenciones de nombres</caption><thead><tr><th scope="col">Elemento</th><th scope="col">Estilo</th><th scope="col">Ejemplo</th></tr></thead><tbody><tr><th scope="row">Clases e interfaces</th><td>PascalCase</td><td><code>CuentaJoven</code></td></tr><tr><th scope="row">Métodos y variables</th><td>camelCase</td><td><code>calcularIva</code></td></tr><tr><th scope="row">Constantes</th><td>MAYÚSCULAS_CON_GUION</td><td><code>MAX_ALUMNOS</code></td></tr><tr><th scope="row">Paquetes</th><td>minúsculas</td><td><code>academia.modelo</code></td></tr></tbody></table></div>`,
 q:["¿Es válido el identificador 2abc en Java?","No: no puede empezar por un dígito."], ex:"Escribe un Javadoc completo para un método dividir(int a, int b)." };

export const multimedia = { t:"Multimedia en Java: imágenes y sonido", min:7, src:"UF2404 · UD9 · 9.4", tags:["imágenes","Java Sound","ImageIO","Clip","wav"],
 s:"Mostrar imágenes y reproducir sonido con la librería estándar.",
 sum:["ImageIO lee imágenes; ImageIcon y JLabel las muestran.","Java Sound reproduce ficheros wav con Clip.","Los recursos multimedia se cierran y se cargan con cuidado de la memoria."],
 h:`<h2 id="imagenes">Manejo de imágenes</h2><pre><code>import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.image.BufferedImage;
import java.io.File;

BufferedImage img = ImageIO.read(new File("foto.png"));
JLabel etiqueta = new JLabel(new ImageIcon(img));
JFrame ventana = new JFrame("Imagen");
ventana.add(etiqueta);
ventana.pack();
ventana.setVisible(true);</code></pre>
<h2 id="sonido">Java Sound</h2><p>Los ficheros <strong>wav</strong> guardan la forma de onda sin comprimir; Java Sound también admite otros formatos como au o aiff.</p>
<pre><code>import javax.sound.sampled.*;
import java.io.File;

try (AudioInputStream in = AudioSystem.getAudioInputStream(new File("sonido.wav"))) {
    Clip clip = AudioSystem.getClip();
    clip.open(in);
    clip.start();                              // reproducir una vez
    // clip.loop(Clip.LOOP_CONTINUOUSLY);      // repetir sin fin
    Thread.sleep(clip.getMicrosecondLength() / 1000);
} catch (Exception e) {
    e.printStackTrace();
}</code></pre>
<div class="note">La reproducción ocurre en un hilo aparte; espera su fin o mantén vivo el programa hasta que termine.</div>`,
 q:["¿Qué clase de Java Sound reproduce un fragmento de audio cargado en memoria?","Clip."], ex:"Crea una ventana que muestre una imagen y reproduzca un sonido al pulsar un botón." };

export const gui = { t:"Componentes gráficos: AWT y Swing", min:8, src:"UF2404 · UD8 · 8.3 y UD9 · 9.16", tags:["Swing","AWT","JFrame","layout","componentes"],
 s:"Ventanas, componentes y gestores de diseño para interfaces de escritorio.",
 sum:["AWT es la base; Swing añade componentes ligeros (los que empiezan por J).","Un contenedor organiza los componentes con un gestor de diseño (layout).","Las ventanas se crean en el hilo de eventos con invokeLater."],
 h:`<h2 id="jerarquia">AWT y Swing</h2><p><strong>AWT</strong> (<code>java.awt</code>) es la librería original de componentes gráficos. <strong>Swing</strong> (<code>javax.swing</code>) la amplía con componentes propios de Java: <code>JFrame</code>, <code>JPanel</code>, <code>JLabel</code>, <code>JButton</code>, <code>JTextField</code>, <code>JCheckBox</code>, <code>JComboBox</code>… Todos heredan de <code>Component</code>.</p>
<h2 id="layouts">Gestores de diseño</h2><ul><li><strong>FlowLayout:</strong> uno detrás de otro.</li><li><strong>BorderLayout:</strong> norte, sur, este, oeste y centro.</li><li><strong>GridLayout:</strong> una cuadrícula regular.</li></ul>
<h2 id="ejemplo">Una ventana con evento</h2><pre><code>import javax.swing.*;
import java.awt.FlowLayout;

SwingUtilities.invokeLater(() -&gt; {
    JFrame f = new JFrame("DevAcademy");
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    f.setLayout(new FlowLayout());
    JTextField campo = new JTextField(15);
    JButton boton = new JButton("Saludar");
    JLabel salida = new JLabel(" ");
    boton.addActionListener(e -&gt; salida.setText("Hola, " + campo.getText()));
    f.add(campo); f.add(boton); f.add(salida);
    f.pack();
    f.setVisible(true);
});</code></pre>`,
 q:["¿Por qué se usa SwingUtilities.invokeLater?","Para crear la interfaz en el hilo de eventos de Swing, que es el único que debe tocarla."], ex:"Cambia el diseño a BorderLayout con el campo al norte y el botón al sur." };

export const modelos = { t:"Modelos de datos y las doce reglas de Codd", min:8, src:"UF2405 · UD4 · 4.1", tags:["modelo jerárquico","modelo en red","Codd","relacional"],
 s:"Evolución de los modelos de datos y los criterios que definen un sistema relacional.",
 sum:["Los modelos jerárquico y en red precedieron al relacional.","Codd definió doce reglas para considerar relacional un sistema.","El relacional destaca por su independencia y su lenguaje estándar."],
 h:`<h2 id="modelos">Modelos de datos</h2><ul><li><strong>Jerárquico:</strong> los datos se organizan en árbol; un padre tiene varios hijos.</li><li><strong>En red:</strong> permite varios padres y relaciones más complejas, con enlaces explícitos.</li><li><strong>Relacional:</strong> tablas relacionadas por claves; el más extendido.</li><li><strong>Orientado a objetos:</strong> guarda objetos con datos y comportamiento.</li></ul>
<p>Las bases de datos pueden ser también <strong>distribuidas</strong> (repartidas entre varios equipos) o accederse <em>en red</em>.</p>
<h2 id="codd">Las doce reglas de Codd</h2><ol><li><strong>Información:</strong> todo se representa como valores en tablas.</li><li><strong>Acceso garantizado:</strong> tabla, clave y columna localizan cada dato.</li><li><strong>Valores nulos</strong> tratados de forma sistemática.</li><li><strong>Catálogo dinámico</strong> en línea, consultable como los datos.</li><li><strong>Sublenguaje de datos completo</strong> (definición, manipulación, seguridad, transacciones).</li><li><strong>Actualización de vistas.</strong></li><li><strong>Inserción, modificación y borrado</strong> de alto nivel (por conjuntos).</li><li><strong>Independencia física</strong> de los datos.</li><li><strong>Independencia lógica</strong> de los datos.</li><li><strong>Independencia de integridad:</strong> las reglas se guardan en el catálogo.</li><li><strong>Independencia de distribución.</strong></li><li><strong>No subversión:</strong> no se puede saltar la integridad con un lenguaje de bajo nivel.</li></ol>
<div class="note">Codd añadió una regla 0: el sistema debe gestionar sus bases de datos <em>únicamente</em> con capacidades relacionales.</div>`,
 q:["¿Qué garantiza la independencia física?","Que cambiar cómo se almacenan los datos no obliga a cambiar las aplicaciones."], ex:"Explica con un ejemplo la independencia lógica usando una vista." };

export const algebra = { t:"Álgebra relacional y sublenguajes SQL (DDL, DML, DCL)", min:8, src:"UF2405 · UD4 · 4.4 y UD5", tags:["álgebra relacional","selección","proyección","DCL","GRANT"],
 s:"Operaciones formales sobre relaciones y su correspondencia con SQL.",
 sum:["El álgebra relacional define operaciones sobre tablas.","Selección filtra filas; proyección elige columnas.","SQL se divide en DDL, DML, DCL y control de transacciones."],
 h:`<h2 id="operaciones">Operaciones del álgebra relacional</h2><div class="scroll"><table><caption class="sr">Álgebra relacional y SQL</caption><thead><tr><th scope="col">Operación</th><th scope="col">Qué hace</th><th scope="col">En SQL</th></tr></thead><tbody>
<tr><th scope="row">Selección</th><td>Filas que cumplen una condición</td><td><code>WHERE</code></td></tr>
<tr><th scope="row">Proyección</th><td>Solo ciertas columnas</td><td>lista tras <code>SELECT</code></td></tr>
<tr><th scope="row">Unión</th><td>Filas de una o de otra tabla</td><td><code>UNION</code></td></tr>
<tr><th scope="row">Diferencia / intersección</th><td>Filas en una y no en otra / en ambas</td><td><code>EXCEPT</code> / <code>INTERSECT</code></td></tr>
<tr><th scope="row">Producto cartesiano</th><td>Todas las combinaciones de filas</td><td><code>FROM a, b</code></td></tr>
<tr><th scope="row">Concatenación (join)</th><td>Producto filtrado por una condición</td><td><code>JOIN ... ON</code></td></tr></tbody></table></div>
<pre><code>-- Selección + proyección: nombre de los alumnos con nota notable
SELECT nombre FROM ALUMNOS WHERE nota &gt;= 7;</code></pre>
<h2 id="sublenguajes">Sublenguajes de SQL</h2><div class="scroll"><table><caption class="sr">Sublenguajes SQL</caption><thead><tr><th scope="col">Sublenguaje</th><th scope="col">Función</th><th scope="col">Sentencias</th></tr></thead><tbody><tr><th scope="row">DQL</th><td>Consulta</td><td><code>SELECT</code></td></tr><tr><th scope="row">DDL</th><td>Definición de datos</td><td><code>CREATE</code>, <code>ALTER</code>, <code>DROP</code></td></tr><tr><th scope="row">DML</th><td>Manipulación de datos</td><td><code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></td></tr><tr><th scope="row">DCL</th><td>Control de acceso</td><td><code>GRANT</code>, <code>REVOKE</code></td></tr><tr><th scope="row">TCL</th><td>Transacciones</td><td><code>COMMIT</code>, <code>ROLLBACK</code></td></tr></tbody></table></div>
<pre><code>GRANT SELECT, INSERT ON CLIENTES TO analista;
REVOKE INSERT ON CLIENTES FROM analista;</code></pre>`,
 q:["¿Qué operación del álgebra relacional corresponde a WHERE?","La selección."], ex:"Expresa con álgebra relacional y SQL «nombres de clientes de Madrid»." };

export const transformacion = { t:"Del modelo entidad-relación al modelo relacional", min:9, src:"UF2405 · UD4 · 4.2", tags:["transformación","entidad débil","recursiva","especialización"],
 s:"Reglas para convertir un diagrama E-R en tablas, incluidas las relaciones especiales.",
 sum:["Cada entidad pasa a ser una tabla y su identificador, la clave primaria.","Las relaciones se transforman según su cardinalidad.","Las entidades débiles, recursivas y las jerarquías tienen reglas propias."],
 h:`<h2 id="reglas">Reglas generales</h2><ul><li><strong>Entidad → tabla</strong>; atributos → columnas; identificador → clave primaria.</li><li><strong>1:1:</strong> clave ajena en una de las tablas (o fusión de ambas).</li><li><strong>1:N:</strong> clave ajena en el lado N.</li><li><strong>N:M:</strong> tabla nueva con las dos claves.</li><li><strong>Ternaria</strong> (tres entidades): tabla con las tres claves ajenas.</li></ul>
<h2 id="debil">Entidad débil</h2><p>Su clave primaria combina la de la entidad fuerte con su propio discriminante.</p>
<pre><code>CREATE TABLE MUNICIPIOS (
    id_provincia INT,
    id_municipio INT,
    nombre       VARCHAR(60),
    PRIMARY KEY (id_provincia, id_municipio),
    FOREIGN KEY (id_provincia) REFERENCES PROVINCIAS(id_provincia)
);</code></pre>
<h2 id="recursiva">Relación recursiva</h2><p>Una entidad se relaciona consigo misma (una persona tiene un jefe que también es persona): la clave ajena apunta a la propia tabla.</p>
<pre><code>CREATE TABLE EMPLEADOS (
    dni    VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(50),
    dni_jefe VARCHAR(10),
    FOREIGN KEY (dni_jefe) REFERENCES EMPLEADOS(dni)
);</code></pre>
<h2 id="jerarquia">Generalización y especialización</h2><p>Un EMPLEADO puede ser TÉCNICO, ADMINISTRADOR o DIRECTIVO. Se crea una tabla para el supertipo y una para cada subtipo, cuya clave primaria referencia a la del supertipo.</p>
<pre><code>CREATE TABLE TECNICOS (
    dni VARCHAR(10) PRIMARY KEY,
    especialidad VARCHAR(40),
    FOREIGN KEY (dni) REFERENCES EMPLEADOS(dni)
);</code></pre>
<div class="note">Es el paralelo de la <strong>herencia</strong> en POO: «un técnico es un empleado».</div>`,
 q:["¿Dónde va la clave ajena en una relación 1:N?","En la tabla del lado N («muchos»)."], ex:"Transforma a tablas: Autor escribe Libro (N:M) con el año de edición como atributo de la relación." };

export const ddl2 = { t:"DDL avanzado: vistas, disparadores, procedimientos, ALTER y DROP", min:9, src:"UF2405 · UD6 · 6.4 a 6.6", tags:["CREATE VIEW","trigger","CREATE PROCEDURE","ALTER","DROP"],
 s:"Crear vistas, triggers y procedimientos, y modificar o borrar objetos de la base de datos.",
 sum:["Una vista guarda una consulta; un trigger reacciona a eventos; un procedimiento agrupa sentencias.","ALTER modifica y DROP elimina; CASCADE propaga el borrado.","La sintaxis cambia entre SGBD: aquí se usa MySQL."],
 h:`<h2 id="vistas">Vistas</h2><pre><code>CREATE VIEW VISTA_ESTUDIANTES AS
    SELECT dni, nombre, apellidos FROM ESTUDIANTES;

ALTER VIEW VISTA_ESTUDIANTES AS
    SELECT dni, nombre, apellidos, direccion FROM ESTUDIANTES;

DROP VIEW VISTA_ESTUDIANTES;</code></pre>
<h2 id="triggers">Disparadores (triggers)</h2><p>Se ejecutan automáticamente antes o después de un <code>INSERT</code>, <code>UPDATE</code> o <code>DELETE</code>, <em>para cada fila</em> afectada.</p>
<pre><code>DELIMITER //
CREATE TRIGGER antes_borrar_cliente BEFORE DELETE ON CLIENTES
FOR EACH ROW
BEGIN
    INSERT INTO LOG_BORRADOS (dni, fecha) VALUES (OLD.dni_cliente, NOW());
END//
DELIMITER ;</code></pre>
<h2 id="procedimientos">Procedimientos almacenados</h2><pre><code>DELIMITER //
CREATE PROCEDURE inserta_cliente(IN p_dni VARCHAR(10), IN p_nombre VARCHAR(50))
BEGIN
    INSERT INTO CLIENTES (dni_cliente, nombre) VALUES (p_dni, p_nombre);
END//
DELIMITER ;

CALL inserta_cliente('108749504V', 'Antonio');</code></pre>
<h2 id="alter">ALTER</h2><p><code>ALTER</code> modifica objetos existentes: bases de datos, tablas, vistas, disparadores (activar o desactivar) y procedimientos.</p>
<pre><code>ALTER TABLE ESTUDIANTES ADD COLUMN telefono VARCHAR(15);
ALTER TABLE ESTUDIANTES MODIFY COLUMN telefono VARCHAR(20);</code></pre>
<h2 id="drop">DROP y TRUNCATE</h2><pre><code>DROP TABLE ESTUDIANTES;           -- elimina la tabla
DROP TRIGGER antes_borrar_cliente;
DROP PROCEDURE inserta_cliente;
TRUNCATE TABLE LOG_BORRADOS;      -- vacía, conserva la estructura</code></pre>
<div class="note"><strong>Estándares:</strong> SQL-92 fijó la base; SQL:1999 (SQL3) añadió disparadores, procedimientos y tipos de datos más ricos.</div>`,
 q:["¿Cuándo se ejecuta un trigger BEFORE DELETE?","Antes de borrar cada fila afectada."], ex:"Crea un trigger que impida insertar un precio negativo." };

export const tiposql = { t:"Tipos de datos SQL, valores nulos y SQL embebido", min:8, src:"UF2405 · UD5 · 5.3 y UD7", tags:["tipos SQL","VARCHAR","NULL","SQL embebido","precompilador"],
 s:"Tipos numéricos, de cadena y de fecha, tratamiento de NULL y SQL incrustado en un lenguaje anfitrión.",
 sum:["Elegir bien el tipo ahorra espacio y evita errores.","NULL significa «sin valor» y se compara con IS NULL.","El SQL embebido necesita un precompilador; hoy se usa JDBC."],
 h:`<h2 id="tipos">Tipos de datos</h2><div class="scroll"><table><caption class="sr">Tipos de datos SQL</caption><thead><tr><th scope="col">Grupo</th><th scope="col">Tipos</th><th scope="col">Notas</th></tr></thead><tbody><tr><th scope="row">Numéricos exactos</th><td><code>INT</code>, <code>SMALLINT</code>, <code>DECIMAL(p,s)</code></td><td>Para dinero y contadores</td></tr><tr><th scope="row">Numéricos aproximados</th><td><code>FLOAT</code>, <code>REAL</code>, <code>DOUBLE</code></td><td>Coma flotante con error de redondeo</td></tr><tr><th scope="row">Cadena</th><td><code>CHAR(n)</code>, <code>VARCHAR(n)</code>, <code>TEXT</code></td><td><code>CHAR</code> es de longitud fija; <code>VARCHAR</code> varía</td></tr><tr><th scope="row">Fecha y hora</th><td><code>DATE</code>, <code>TIME</code>, <code>TIMESTAMP</code></td><td><code>TIMESTAMP</code> combina fecha y hora</td></tr><tr><th scope="row">Binarios</th><td><code>BLOB</code></td><td>Imágenes, audio, documentos</td></tr></tbody></table></div>
<h2 id="nulos">Valores nulos</h2><p><code>NULL</code> no es cero ni cadena vacía: es <em>desconocido</em>. No se compara con <code>=</code>.</p>
<pre><code>SELECT nombre FROM CLIENTES WHERE telefono IS NULL;
SELECT nombre FROM CLIENTES WHERE telefono IS NOT NULL;
SELECT nombre, COALESCE(telefono, 'sin teléfono') FROM CLIENTES;</code></pre>
<h2 id="funciones">Funciones útiles</h2><p>De agregación (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code>), de cadena (<code>UPPER</code>, <code>LENGTH</code>, <code>CONCAT</code>) y de fecha (<code>NOW</code>, <code>CURRENT_DATE</code>).</p>
<h2 id="embebido">SQL embebido</h2><p>Las sentencias SQL se escriben dentro del programa en un lenguaje anfitrión (como C o Java con SQLJ) y un <strong>precompilador</strong> las convierte en llamadas a la base de datos antes de compilar. Este enfoque estático ha sido sustituido en la práctica por APIs como <strong>JDBC</strong>, donde el SQL se envía como cadena en ejecución.</p>`,
 q:["¿Cómo se comprueba que una columna no tiene valor?","Con IS NULL, no con = NULL."], ex:"Elige el tipo de dato adecuado para un precio, un DNI y la fecha de alta." };
