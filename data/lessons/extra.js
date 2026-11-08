/* Lecciones añadidas tras la auditoría de contenido (UF2404 completo). content.js las coloca en su módulo. */
export const ing = { t:"Ingeniería del software: conceptos y principios", min:8, src:"Apoyo INTECO · caps. 2 y 3", tags:["ingeniería del software","calidad","principios","capas"],
 s:"Qué es el software, qué es la ingeniería del software y sus principios.",
 sum:["El software es un producto lógico: programas, datos y documentación.","La ingeniería del software busca producir software de calidad con proceso y método.","Se apoya en tres capas: procesos, métodos y herramientas."],
 h:`<h2 id="software">El software</h2><p>El software no se reduce al código: incluye <strong>programas</strong>, <strong>datos</strong> y <strong>documentación</strong>. Se desarrolla (no se fabrica), no se desgasta con el uso, pero sí se deteriora con los cambios mal controlados, y se clasifica en software de sistema, de aplicación, de ingeniería, empotrado y web, entre otros.</p>
<h2 id="ingenieria">Ingeniería del software</h2><p>Es la aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software. Nació para afrontar la «crisis del software»: proyectos fuera de plazo y presupuesto, con errores y difíciles de mantener. Su objetivo primario es obtener productos de calidad dentro de coste y plazo.</p>
<h2 id="principios">Principios y capas</h2><ul><li><strong>Principios:</strong> rigor, abstracción, modularidad, ocultación de información, anticipación al cambio, generalidad y construcción incremental.</li><li><strong>Capas:</strong> los <em>procesos</em> (el marco de trabajo), los <em>métodos</em> (cómo hacer cada tarea) y las <em>herramientas</em> que los automatizan.</li></ul>
<div class="note"><strong>Conexión con la POO:</strong> abstracción, modularidad y ocultación de información son justo los pilares del paradigma orientado a objetos.</div>`,
 q:["¿Qué tres capas sostienen la ingeniería del software?","Procesos, métodos y herramientas."], ex:"Enumera los componentes de software de una aplicación que conozcas: programas, datos y documentación." };

export const met = { t:"Metodologías: RUP, XP, Scrum y prácticas ágiles", min:9, src:"Apoyo INTECO · caps. 4 a 6", tags:["metodología","RUP","XP","Scrum","TDD","ágil"],
 s:"Metodologías tradicionales y ágiles, y las prácticas que más se usan hoy.",
 sum:["Una metodología define cómo, cuándo y quién hace cada actividad.","Las ágiles priorizan entregas frecuentes, colaboración y adaptación al cambio.","TDD, integración continua y programación por parejas mejoran la calidad."],
 h:`<h2 id="metodologia">¿Para qué una metodología?</h2><p>Una metodología es un conjunto de pasos, técnicas y herramientas para organizar el desarrollo. Aporta orden, calidad, estimaciones más fiables y un lenguaje común al equipo. Se dividen en <strong>tradicionales</strong> (planificadas, con documentación extensa) y <strong>ágiles</strong>.</p>
<h2 id="rup">RUP</h2><p>El <em>Rational Unified Process</em> es un proceso iterativo basado en UML y dirigido por casos de uso. Sus fases son <strong>inicio, elaboración, construcción y transición</strong>.</p>
<h2 id="agiles">Metodologías ágiles</h2><p>Nacen del <strong>Manifiesto ágil</strong> (2001): individuos y su interacción, software funcionando, colaboración con el cliente y respuesta al cambio.</p>
<div class="scroll"><table><caption class="sr">Metodologías ágiles</caption><thead><tr><th scope="col">Método</th><th scope="col">Idea clave</th></tr></thead><tbody><tr><th scope="row">XP (Extreme Programming)</th><td>Ciclos muy cortos, pruebas continuas, programación por parejas, refactorización</td></tr><tr><th scope="row">Scrum</th><td>Sprints de 1 a 4 semanas; roles Product Owner, Scrum Master y equipo; reuniones diarias</td></tr><tr><th scope="row">DSDM</th><td>Marco ágil con plazo y coste fijos, y alcance que se ajusta</td></tr></tbody></table></div>
<h2 id="practicas">Prácticas de ingeniería</h2><ul><li><strong>TDD:</strong> primero se escribe la prueba que falla, luego el código mínimo que la pasa y después se refactoriza.</li><li><strong>Integración continua:</strong> integrar y probar el código varias veces al día.</li><li><strong>Programación por parejas:</strong> dos personas, un teclado; mejora la calidad y reparte el conocimiento.</li></ul>
<pre><code>// TDD con JUnit 5: la prueba se escribe antes que la clase
@Test
void ingresarSumaAlSaldo() {
    Cuenta c = new Cuenta();
    c.ingresar(50);
    assertEquals(50, c.getSaldo(), 0.001);
}</code></pre>`,
 q:["¿Cuál es el orden de TDD?","Prueba que falla, código mínimo que la pasa y refactorización."], ex:"Escribe una prueba JUnit para el método retirar() de Cuenta antes de implementarlo." };

export const tipos = { t:"Tipos de datos y clases: primitivos, envoltorios y String", min:8, src:"UF2404 · UD2 · 2.1.2 y UD7 · 7.1", tags:["tipos primitivos","wrapper","String","autoboxing"],
 s:"Diferencia entre tipos primitivos y clases, y cómo se relacionan.",
 sum:["Los primitivos guardan el valor; las clases, referencias a objetos.","Cada primitivo tiene una clase envoltorio (int → Integer).","String es una clase inmutable."],
 h:`<h2 id="primitivos">Tipos primitivos</h2><p>Java tiene ocho: <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>char</code> y <code>boolean</code>. Guardan el valor directamente y no son objetos: no tienen métodos ni pueden ser <code>null</code>.</p>
<h2 id="clases">Clases y referencias</h2><p>Una variable de tipo clase guarda una <strong>referencia</strong> al objeto. Asignar una variable a otra copia la referencia, no el objeto.</p>
<h2 id="envoltorios">Clases envoltorio</h2><p>Para usar primitivos como objetos (por ejemplo en colecciones) existen <code>Integer</code>, <code>Double</code>, <code>Boolean</code>, <code>Character</code>… Java convierte automáticamente (<em>autoboxing</em>).</p>
<pre><code>int a = 5;
Integer b = a;                  // autoboxing
int c = b + 1;                  // unboxing
int n = Integer.parseInt("42"); // texto a número

String s = "Hola";
String t = s.concat(" mundo");  // String es inmutable: crea otro objeto
System.out.println(s.length() + " " + t.toUpperCase());</code></pre>
<div class="note"><strong>Cuidado:</strong> compara cadenas con <code>equals()</code>, no con <code>==</code>.</div>`,
 q:["¿Puede un int valer null?","No: es un primitivo. Un Integer sí puede ser null."], ex:"Convierte la cadena «3.14» a double y súmale 1." };

export const ficheros = { t:"Ficheros: leer y escribir datos", min:7, src:"UF2404 · UD7 · 7.2.3", tags:["ficheros","java.io","java.nio","try-with-resources"],
 s:"Leer y escribir ficheros de texto con Java y cerrar los recursos correctamente.",
 sum:["Un fichero guarda datos de forma persistente en disco.","Files y BufferedReader/Writer simplifican el trabajo con texto.","try-with-resources cierra el fichero aunque haya error."],
 h:`<h2 id="concepto">Ficheros</h2><p>Los datos en variables desaparecen al terminar el programa; un <strong>fichero</strong> los guarda en el disco (<em>persistencia</em> sencilla). Se trabaja con flujos de entrada y salida: texto (<code>Reader</code>/<code>Writer</code>) o bytes (<code>InputStream</code>/<code>OutputStream</code>).</p>
<h2 id="leer-escribir">Leer y escribir texto</h2><pre><code>import java.io.*;
import java.nio.file.*;
import java.util.List;

// Escribir
try (BufferedWriter w = Files.newBufferedWriter(Path.of("notas.txt"))) {
    w.write("Ana;9");
    w.newLine();
    w.write("Luis;7");
} catch (IOException e) {
    System.err.println("No se pudo escribir: " + e.getMessage());
}

// Leer todas las líneas
try {
    List&lt;String&gt; lineas = Files.readAllLines(Path.of("notas.txt"));
    for (String l : lineas) System.out.println(l);
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
<h2 id="bytes">Flujos de bytes</h2><p>Para datos binarios (imágenes, copias exactas) se usan <code>FileInputStream</code> y <code>FileOutputStream</code>, que leen y escriben bytes sin interpretar texto.</p>
<pre><code>try (FileInputStream in = new FileInputStream("origen.bin");
     FileOutputStream out = new FileOutputStream("copia.bin")) {
    byte[] buffer = new byte[4096];
    int leidos;
    while ((leidos = in.read(buffer)) != -1) out.write(buffer, 0, leidos);
}</code></pre>
<h2 id="serializacion">Serialización de objetos</h2><p>Serializar es convertir un objeto en una secuencia de bytes para guardarlo o enviarlo. La clase debe implementar <code>Serializable</code>; los atributos <code>transient</code> no se guardan.</p>
<pre><code>class Alumno implements Serializable {
    private static final long serialVersionUID = 1L;
    String nombre;
    transient String clave;            // no se serializa
    Alumno(String n, String c) { nombre = n; clave = c; }
}

try (ObjectOutputStream o = new ObjectOutputStream(new FileOutputStream("alumno.bin"))) {
    o.writeObject(new Alumno("Ana", "secreto"));
}
try (ObjectInputStream i = new ObjectInputStream(new FileInputStream("alumno.bin"))) {
    Alumno a = (Alumno) i.readObject();
    System.out.println(a.nombre + " " + a.clave);   // Ana null
}</code></pre>
<div class="note"><code>try-with-resources</code> cierra el fichero automáticamente, incluso si ocurre una excepción.</div>`,
 q:["¿Por qué usar try-with-resources al trabajar con ficheros?","Para cerrar el recurso siempre, evitando fugas aunque haya errores."], ex:"Lee un fichero de notas «nombre;nota» y calcula la nota media." };

export const librerias = { t:"Librerías de clases: paquetes, import y JAR", min:7, src:"UF2404 · UD8 · 8.3", tags:["librería","package","import","JAR","Javadoc"],
 s:"Cómo se define, se crea y se utiliza una librería de clases.",
 sum:["Una librería es un conjunto de clases reutilizables agrupadas en paquetes.","import evita escribir el nombre completo de las clases.","Un JAR empaqueta las clases para distribuirlas."],
 h:`<h2 id="estructura">Estructura de una librería</h2><p>Una librería agrupa clases relacionadas en <strong>paquetes</strong> (<code>package</code>), cuya estructura de carpetas refleja el nombre. Java incluye una librería estándar: <code>java.lang</code> (automática), <code>java.util</code>, <code>java.io</code>, <code>java.time</code>, <code>java.sql</code>…</p>
<h2 id="uso">Creación y utilización</h2><pre><code>// Fichero academia/util/Texto.java
package academia.util;
public class Texto {
    public static String capitalizar(String s) {
        return s.isEmpty() ? s : Character.toUpperCase(s.charAt(0)) + s.substring(1);
    }
}

// Fichero Main.java
import academia.util.Texto;
public class Main {
    public static void main(String[] a) {
        System.out.println(Texto.capitalizar("hola"));   // Hola
    }
}</code></pre>
<h2 id="jar">Empaquetado y documentación</h2><p>Un archivo <strong>JAR</strong> empaqueta las clases compiladas (<code>jar cf utilidades.jar academia/</code>) y se añade al <em>classpath</em>. La herramienta <strong>Javadoc</strong> genera la documentación a partir de los comentarios <code>/** ... */</code>.</p>`,
 q:["¿Para qué sirve import?","Para usar clases de otros paquetes sin escribir su nombre completo."], ex:"Crea un paquete academia.util con una clase que invierta cadenas y úsala desde otro paquete." };

export const entorno = { t:"Elegir lenguaje, tipos de aplicaciones y entorno de desarrollo", min:8, src:"UF2404 · UD9 · 9.1 a 9.3 y apoyo NetBeans", tags:["JDK","IDE","NetBeans","aplicaciones","herramientas"],
 s:"Criterios para elegir lenguaje, tipos de aplicaciones y preparación del entorno (JDK, IDE y MySQL).",
 sum:["Se elige el lenguaje según el tipo de aplicación, el equipo y el ecosistema.","Un IDE integra editor, compilador, depurador y pruebas.","Para empezar en Java necesitas el JDK y un IDE."],
 h:`<h2 id="eleccion">Elección del lenguaje</h2><p>Se decide según el tipo de aplicación, el rendimiento necesario, la plataforma, la experiencia del equipo, las librerías disponibles y el mantenimiento a largo plazo. Java destaca por su portabilidad («compila una vez, ejecuta en cualquier lugar»), su ecosistema y su uso empresarial.</p>
<h2 id="aplicaciones">Tipos de aplicaciones</h2><ul><li><strong>Escritorio:</strong> interfaz gráfica local (Swing, JavaFX).</li><li><strong>Web:</strong> se ejecutan en un servidor y se usan con navegador.</li><li><strong>Móviles:</strong> Android (Java o Kotlin), iOS.</li><li><strong>Servicios y APIs:</strong> sin interfaz, consumidos por otras aplicaciones.</li><li><strong>Empotradas:</strong> dentro de dispositivos.</li></ul>
<h2 id="herramientas">Herramientas de desarrollo</h2><p>Necesitas el <strong>JDK</strong> (compilador <code>javac</code>, máquina virtual <code>java</code>, herramientas) y un <strong>IDE</strong> (Entorno Integrado de Desarrollo) como NetBeans, Eclipse o IntelliJ IDEA. Con una base de datos como <strong>MySQL</strong> completas el entorno para aplicaciones con datos. Otras herramientas: control de versiones (Git), gestores de construcción (Maven, Gradle) y depuradores.</p>
<h2 id="instalacion">Instalación y variables de entorno</h2><p>Tras instalar el JDK hay que definir <code>JAVA_HOME</code> (carpeta del JDK) y añadir su subcarpeta <code>bin</code> al <code>PATH</code> para poder usar <code>javac</code> y <code>java</code> desde la consola. Se comprueba con <code>java -version</code>.</p>
<h2 id="ides">Entornos y editores</h2><ul><li><strong>NetBeans:</strong> proyectos, plantillas, depurador, gestor de plugins y soporte para bases de datos.</li><li><strong>Eclipse:</strong> se organiza en <em>workspaces</em>; se crean clases con <em>New &gt; Class</em>.</li><li><strong>Editores ligeros</strong> (Notepad++): coloreado y autocompletado, sin proyecto ni depurador.</li></ul>
<pre><code>// Ciclo manual: escribir, compilar y ejecutar
// Hola.java
public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola, DevAcademy");
    }
}
// javac Hola.java   -&gt; genera Hola.class
// java Hola         -&gt; ejecuta en la JVM</code></pre>`,
 q:["¿Qué contiene el JDK que no tiene solo el JRE?","El compilador (javac) y las herramientas de desarrollo."], ex:"Instala el JDK y un IDE y ejecuta el programa Hola." };

export const basicas = { t:"Clases básicas de la librería estándar", min:8, src:"UF2404 · UD9 · 9.5", tags:["String","Math","StringBuilder","LocalDate","Scanner"],
 s:"String, StringBuilder, Math, fechas y entrada por teclado.",
 sum:["String es inmutable; StringBuilder permite modificar texto eficientemente.","Math ofrece operaciones matemáticas estáticas.","java.time maneja fechas; Scanner lee del teclado."],
 h:`<h2 id="strings">Cadenas</h2><p><code>String</code> es inmutable: cada modificación crea otro objeto. Para construir texto en bucles usa <code>StringBuilder</code>.</p>
<pre><code>String s = "  Programación  ";
System.out.println(s.trim().toUpperCase());      // PROGRAMACIÓN
System.out.println("a,b,c".split(",").length);   // 3

StringBuilder sb = new StringBuilder();
for (int i = 1; i &lt;= 3; i++) sb.append(i).append(' ');
System.out.println(sb);                            // 1 2 3</code></pre>
<h2 id="math">Math y fechas</h2><pre><code>System.out.println(Math.max(3, 7));       // 7
System.out.println(Math.sqrt(16));        // 4.0
System.out.println(Math.round(2.6));      // 3

import java.time.LocalDate;
LocalDate hoy = LocalDate.now();
LocalDate manana = hoy.plusDays(1);</code></pre>
<h2 id="entrada">Entrada por teclado</h2><pre><code>import java.util.Scanner;
Scanner sc = new Scanner(System.in);
System.out.print("Edad: ");
int edad = sc.nextInt();</code></pre>`,
 q:["¿Cuándo usar StringBuilder en lugar de String?","Al concatenar muchas veces (por ejemplo en un bucle), para no crear un objeto nuevo en cada paso."], ex:"Pide una frase por teclado y muestra cuántas palabras tiene." };

export const caso = { t:"Caso práctico: implementar el paradigma completo", min:12, src:"UF2404 · UD9 · 9.6 a 9.14", tags:["caso práctico","herencia","interfaz","polimorfismo","composición"],
 s:"Un programa que reúne clases, sobrecarga, atributos, interfaz, composición, herencia, abstracción y polimorfismo.",
 sum:["Una clase abstracta define lo común; las subclases, lo específico.","Una interfaz añade capacidades transversales.","El código que usa los objetos trabaja con el tipo general."],
 h:`<h2 id="enunciado">Enunciado</h2><p>Una empresa tiene empleados fijos y por horas. Todos cobran, pero de forma distinta. Algunos pueden dirigir proyectos. Queremos calcular la nómina total sin que el código dependa del tipo de empleado.</p>
<h2 id="diseno">Diseño</h2><ul><li><code>Empleado</code> (abstracta): atributos <code>nombre</code> y método abstracto <code>pago()</code>.</li><li><code>Fijo</code> y <code>PorHoras</code> heredan de <code>Empleado</code> (herencia + polimorfismo).</li><li><code>Dirigente</code> (interfaz) para quien puede dirigir.</li><li><code>Empresa</code> contiene una lista de empleados (composición).</li></ul>
<h2 id="codigo">Implementación</h2><pre><code>import java.util.*;

abstract class Empleado {
    private final String nombre;
    protected Empleado(String nombre) { this.nombre = nombre; }
    public String getNombre() { return nombre; }
    public abstract double pago();
    @Override public String toString() { return nombre + ": " + pago(); }
}
interface Dirigente { String dirigir(); }

class Fijo extends Empleado implements Dirigente {
    private final double sueldo;
    Fijo(String n, double sueldo) { super(n); this.sueldo = sueldo; }
    public double pago() { return sueldo; }
    public String dirigir() { return getNombre() + " dirige el proyecto"; }
}
class PorHoras extends Empleado {
    private final int horas; private final double tarifa;
    PorHoras(String n, int horas, double tarifa) { super(n); this.horas = horas; this.tarifa = tarifa; }
    PorHoras(String n, int horas) { this(n, horas, 12.5); }   // sobrecarga de constructor
    public double pago() { return horas * tarifa; }
}

class Empresa {
    private final List&lt;Empleado&gt; plantilla = new ArrayList&lt;&gt;();   // composición
    void contratar(Empleado e) { plantilla.add(e); }
    double nomina() { double t = 0; for (Empleado e : plantilla) t += e.pago(); return t; }
}

public class Main {
    public static void main(String[] args) {
        Empresa e = new Empresa();
        Fijo ana = new Fijo("Ana", 2000);
        e.contratar(ana);
        e.contratar(new PorHoras("Luis", 80));
        System.out.println(e.nomina());   // 3000.0
        System.out.println(ana.dirigir());
    }
}</code></pre>
<div class="note"><strong>Comprueba:</strong> si añades <code>Becario</code>, ¿tienes que cambiar <code>Empresa.nomina()</code>? No: ese es el valor del polimorfismo.</div>`,
 q:["¿Por qué nomina() no cambia al añadir un nuevo tipo de empleado?","Porque trabaja con el tipo general Empleado y la ligadura dinámica elige el pago() de cada uno."], ex:"Añade la clase Becario y la excepción SalarioInvalidoException cuando el pago sea negativo." };

export const hilos = { t:"Hilos: concurrencia, estados y sincronización", min:10, src:"UF2404 · UD9 · 9.17", tags:["hilos","Thread","estados","prioridad","wait","synchronized","ExecutorService"],
 s:"Fundamentos, creación, prioridad, estados, comunicación y sincronización de hilos.",
 sum:["Un hilo es un flujo de ejecución; varios hilos permiten hacer tareas a la vez.","Estados: nuevo, ejecutable, bloqueado/en espera y terminado.","synchronized, wait y notify coordinan hilos que comparten datos."],
 h:`<h2 id="fundamentos">Fundamentos</h2><p>Un <strong>hilo</strong> (<em>thread</em>) es un flujo de ejecución dentro de un proceso. Varios hilos comparten la memoria del proceso, lo que permite colaborar pero también provoca errores si no se coordinan. La <strong>programación multihilo</strong> mejora la capacidad de respuesta (la interfaz no se congela) y aprovecha varios núcleos.</p>
<h2 id="creacion">Creación y prioridad</h2><p>Se crea con <code>Thread</code> o con <code>Runnable</code> (preferible, porque deja libre la herencia). Cada hilo tiene prioridad de 1 a 10, que es solo una sugerencia al planificador.</p>
<pre><code>class Tarea implements Runnable {
    public void run() { System.out.println("Hola desde " + Thread.currentThread().getName()); }
}
Thread t = new Thread(new Tarea(), "trabajador-1");
t.setPriority(Thread.NORM_PRIORITY);
t.start();   // nunca run() directamente
t.join();    // espera a que termine</code></pre>
<h2 id="estados">Estados</h2><div class="scroll"><table><caption class="sr">Estados de un hilo</caption><thead><tr><th scope="col">Estado</th><th scope="col">Significado</th></tr></thead><tbody><tr><th scope="row">NEW</th><td>Creado, sin iniciar</td></tr><tr><th scope="row">RUNNABLE</th><td>Listo o ejecutándose</td></tr><tr><th scope="row">BLOCKED / WAITING</th><td>Esperando un monitor, <code>wait()</code> o <code>sleep()</code></td></tr><tr><th scope="row">TERMINATED</th><td>Ha acabado su <code>run()</code></td></tr></tbody></table></div>
<h2 id="metodos">Métodos útiles</h2><div class="scroll"><table><caption class="sr">Métodos de Thread</caption><thead><tr><th scope="col">Método</th><th scope="col">Efecto</th></tr></thead><tbody><tr><th scope="row"><code>sleep(ms)</code></th><td>Pausa el hilo actual</td></tr><tr><th scope="row"><code>yield()</code></th><td>Cede el turno a otros hilos</td></tr><tr><th scope="row"><code>isAlive()</code></th><td>Indica si el hilo sigue en marcha</td></tr><tr><th scope="row"><code>join()</code></th><td>Espera a que termine</td></tr><tr><th scope="row"><code>interrupt()</code></th><td>Solicita que se detenga</td></tr></tbody></table></div><p>Para <strong>parar</strong> un hilo no se usa <code>stop()</code> (obsoleto e inseguro): se consulta una bandera o <code>isInterrupted()</code> dentro de <code>run()</code>.</p>
<h2 id="sincronizacion">Sincronización y comunicación</h2><p>Si dos hilos modifican el mismo dato hay una <strong>condición de carrera</strong>. <code>synchronized</code> garantiza acceso exclusivo; <code>wait()</code> y <code>notify()</code> permiten que un hilo espere una condición y otro le avise.</p>
<pre><code>class Buzon {
    private String mensaje;
    synchronized void poner(String m) throws InterruptedException {
        while (mensaje != null) wait();
        mensaje = m; notifyAll();
    }
    synchronized String coger() throws InterruptedException {
        while (mensaje == null) wait();
        String m = mensaje; mensaje = null; notifyAll(); return m;
    }
}</code></pre>
<h2 id="executor">Grupos de hilos</h2><pre><code>ExecutorService pool = Executors.newFixedThreadPool(4);
pool.submit(() -&gt; System.out.println("tarea"));
pool.shutdown();</code></pre>`,
 q:["¿Qué pasa si llamas a run() en lugar de start()?","El código se ejecuta en el hilo actual; no se crea un hilo nuevo."], ex:"Implementa productor y consumidor con la clase Buzon." };

export const red = { t:"Programación en red: cliente-servidor y sockets", min:8, src:"UF2404 · UD9 · 9.18", tags:["sockets","cliente-servidor","TCP","puerto"],
 s:"Modelo cliente-servidor y comunicación con sockets TCP.",
 sum:["El servidor espera peticiones en un puerto; el cliente se conecta y solicita.","Un socket es un extremo de la comunicación.","Un servidor real atiende a cada cliente en un hilo distinto."],
 h:`<h2 id="modelo">Aplicación cliente-servidor</h2><p>El <strong>servidor</strong> queda a la espera en una dirección IP y un puerto; el <strong>cliente</strong> inicia la conexión y envía peticiones. Cada extremo se representa con un <strong>socket</strong> (TCP: orientado a conexión y fiable).</p>
<pre><code>// Servidor: un hilo por cliente
try (ServerSocket srv = new ServerSocket(5000)) {
    while (true) {
        Socket s = srv.accept();
        new Thread(() -&gt; atender(s)).start();
    }
}
static void atender(Socket s) {
    try (var in = new java.io.BufferedReader(new java.io.InputStreamReader(s.getInputStream()));
         var out = new java.io.PrintWriter(s.getOutputStream(), true)) {
        out.println("Recibido: " + in.readLine());
    } catch (java.io.IOException e) { }
}

// Cliente
try (Socket s = new Socket("localhost", 5000);
     var out = new java.io.PrintWriter(s.getOutputStream(), true);
     var in = new java.io.BufferedReader(new java.io.InputStreamReader(s.getInputStream()))) {
    out.println("Hola");
    System.out.println(in.readLine());
}</code></pre>
<h2 id="udp">UDP y multidifusión</h2><p>Además de TCP, existe <strong>UDP</strong>: sin conexión y sin garantía de entrega, pero rápido. Java lo ofrece con <code>DatagramSocket</code> y, para enviar a un grupo, <code>MulticastSocket</code>.</p>
<pre><code>try (DatagramSocket s = new DatagramSocket()) {
    byte[] datos = "hola".getBytes();
    s.send(new DatagramPacket(datos, datos.length, InetAddress.getByName("localhost"), 6000));
}</code></pre>
<p>En el lado del cliente web aparecen también los <em>plug-ins</em>, los <em>scripts</em> y componentes como <em>ActiveX</em> que amplían el navegador.</p>
<div class="note">Esta es la base de la web: un navegador es un cliente y un servidor web atiende sus peticiones HTTP.</div>`,
 q:["¿Qué hace accept() en el servidor?","Bloquea hasta que llega un cliente y devuelve el socket de esa conexión."], ex:"Haz que el servidor devuelva el texto en mayúsculas." };
