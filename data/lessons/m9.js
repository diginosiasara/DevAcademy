/* Módulo 9 · Implementación con un lenguaje OO (UF2404 · UD9) */
export default [
{ t:"Excepciones: tratar errores con objetos", min:8, src:"UF2404 · UD9 · 9.15 y compendio EXC", tags:["excepciones","try-catch","finally","throw"],
 s:"Capturar, propagar y crear excepciones con try, catch, finally y throw.",
 sum:["Una excepción es un objeto que representa un error en ejecución.","try/catch/finally separa el código normal del tratamiento de errores.","Los catch van de lo más específico a lo más general."],
 h:`<h2 id="problema">El problema de los códigos de error</h2><p>Antes, los métodos devolvían un valor especial (por ejemplo <code>null</code>) y quien llamaba debía comprobarlo cada vez: el código se llenaba de comprobaciones. Una <strong>excepción</strong> es una situación anómala durante la ejecución (índice fuera de rango, conexión perdida, fichero que falla) que se trata aparte.</p>
<h2 id="trycatch">try, catch y finally</h2><pre><code>try {
    int n = Integer.parseInt(texto);
} catch (NumberFormatException e) {
    System.out.println("No es un número");
} catch (Exception e) {
    System.out.println("Error genérico: " + e.getMessage());
} finally {
    System.out.println("Siempre se ejecuta");
}</code></pre>
<div class="note">Los <code>catch</code> van de lo más específico a lo más genérico; <code>finally</code> se ejecuta siempre.</div>
<h2 id="lanzar">Lanzar y declarar</h2><p><code>throw</code> lanza una excepción; <code>throws</code> declara en la firma las excepciones <em>comprobadas</em> que un método no trata. Puedes crear las tuyas heredando de <code>Exception</code>.</p>
<pre><code>class SaldoInsuficienteException extends Exception {
    SaldoInsuficienteException(String m) { super(m); }
}
void retirar(double c) throws SaldoInsuficienteException {
    if (c &gt; saldo) throw new SaldoInsuficienteException("Saldo insuficiente");
    saldo -= c;
}</code></pre>`,
 q:["¿Por qué catch (Exception e) debe ir el último?","Porque captura todo; si fuera primero, ocultaría a los catch específicos."],
 ex:"Lee un número con Scanner y repite la petición hasta que el usuario escriba un entero válido." },
{ t:"Eventos: programar la interacción", min:6, src:"UF2404 · UD9 · 9.16", tags:["eventos","listener","interfaz gráfica","callback"],
 s:"Fuentes, eventos y oyentes: cómo reacciona un programa a un clic o a una tecla.",
 sum:["Un evento representa algo que ocurre: un clic, una tecla, un temporizador.","La fuente genera el evento y el oyente (listener) lo atiende.","Es el patrón Observador aplicado a interfaces."],
 h:`<h2 id="modelo">Fuente, evento y oyente</h2><p>Los eventos permiten al programa interactuar con el usuario. Cuando se pulsa un botón o una tecla se crea un <strong>evento</strong> que describe lo ocurrido (dónde, cuándo, qué tecla). La <strong>fuente</strong> notifica a los <strong>oyentes</strong> registrados. Desde Java 1.1 existe una clase base <code>EventObject</code> y oyentes por tipo de evento, en lugar de comparar nombres de componentes.</p>
<pre><code>import javax.swing.*;

JButton boton = new JButton("Saludar");
boton.addActionListener(e -&gt; JOptionPane.showMessageDialog(null, "¡Hola!"));</code></pre>
<h2 id="tipos">Tipos</h2><p>Eventos generales (pulsar una tecla, mover el ratón) y eventos semánticos de alto nivel (pulsar un botón, elegir un elemento).</p>`,
 q:["¿Quién recibe el evento: la fuente o el oyente?","El oyente registrado en la fuente."],
 ex:"Crea una ventana con un botón que cuente cuántas veces se ha pulsado." },
{ t:"Hilos: programación concurrente", min:8, src:"UF2404 · UD9 · 9.17", tags:["hilos","Thread","sincronización","concurrencia"],
 s:"Crear hilos, sus estados y cómo evitar condiciones de carrera.",
 sum:["Un hilo es una ejecución independiente dentro de un programa.","Se crean con Thread o Runnable.","synchronized evita que dos hilos modifiquen a la vez un mismo recurso."],
 h:`<h2 id="fundamentos">Fundamentos</h2><p>Un <strong>hilo</strong> (<em>thread</em>) es un flujo de ejecución. Con varios hilos un programa hace tareas a la vez. Cada hilo pasa por estados: nuevo, ejecutable, bloqueado o en espera y terminado. También tiene una <em>prioridad</em>.</p>
<h2 id="creacion">Creación</h2><pre><code>Runnable tarea = () -&gt; System.out.println("Hola desde " + Thread.currentThread().getName());
Thread t = new Thread(tarea);
t.start();      // no llames a run() directamente
t.join();       // espera a que termine</code></pre>
<h2 id="sincronizacion">Sincronización</h2><p>Si dos hilos modifican el mismo dato hay una <strong>condición de carrera</strong>. Con <code>synchronized</code> solo un hilo a la vez ejecuta la sección crítica.</p>
<pre><code>class Contador {
    private int n;
    synchronized void incrementar() { n++; }
    synchronized int valor() { return n; }
}</code></pre>`,
 q:["¿Qué método inicia realmente un hilo?","start(); run() solo ejecutaría el código en el hilo actual."],
 ex:"Lanza dos hilos que incrementen 1000 veces un contador compartido, con y sin synchronized." },
{ t:"Programación en red y acceso a bases de datos", min:8, src:"UF2404 · UD9 · 9.18 y 9.19", tags:["sockets","cliente-servidor","JDBC","red"],
 s:"Modelo cliente-servidor con sockets y conexión a una base de datos desde Java.",
 sum:["En el modelo cliente-servidor el servidor espera y el cliente solicita.","Un socket es un extremo de una comunicación en red.","JDBC permite ejecutar SQL desde Java."],
 h:`<h2 id="cliente-servidor">Cliente y servidor</h2><p>El servidor queda a la espera en un puerto; el cliente se conecta y envía peticiones. Cada extremo se representa con un <strong>socket</strong>.</p>
<pre><code>// Servidor
try (ServerSocket srv = new ServerSocket(5000);
     Socket s = srv.accept();
     var in = new java.io.BufferedReader(new java.io.InputStreamReader(s.getInputStream()))) {
    System.out.println("Recibido: " + in.readLine());
}

// Cliente
try (Socket s = new Socket("localhost", 5000);
     var out = new java.io.PrintWriter(s.getOutputStream(), true)) {
    out.println("Hola servidor");
}</code></pre>
<h2 id="bd">Acceso a bases de datos</h2><p>Con <strong>JDBC</strong> el programa abre una conexión, envía sentencias SQL y recorre el resultado. Se verá con detalle en el módulo de bases de datos.</p>`,
 q:["¿Qué clase usa el servidor para esperar conexiones?","ServerSocket, con accept()."],
 ex:"Modifica el servidor para que responda «Recibido» al cliente." }
];
