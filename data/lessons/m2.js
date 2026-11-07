/* Módulo 2 · Objetos y clases (UF2404 · UD2) */
export default [
{ t:"Objetos: estado, comportamiento e identidad", min:7, src:"UF2404 · UD1 · 1.4 y UD2 · 2.2", tags:["objeto","estado","comportamiento","identidad"],
 s:"Qué es un objeto y qué tres propiedades lo definen.",
 sum:["Un objeto tiene estado, comportamiento e identidad.","El estado se guarda en atributos; el comportamiento, en métodos.","Dos objetos con el mismo estado siguen siendo distintos."],
 h:`<h2 id="definicion">Un objeto es una abstracción de la realidad</h2><p>Los objetos reales tienen dos características: <strong>estado</strong> y <strong>comportamiento</strong>. Un perro tiene raza, color y tamaño (estado) y puede correr, saltar o ladrar (comportamiento). Un objeto pantalla tendría resolución y tamaño, y podría encenderse o apagarse.</p>
<h2 id="tres">Las tres propiedades (Booch)</h2><ul><li><strong>Estado:</strong> propiedades del objeto y sus valores actuales.</li><li><strong>Comportamiento:</strong> cómo actúa y reacciona al cambiar de estado y recibir mensajes.</li><li><strong>Identidad:</strong> lo que lo distingue de cualquier otro objeto.</li></ul>
<h2 id="identidad">Identidad, igualdad y copia</h2><p>Dos objetos pueden tener el mismo estado y ser objetos distintos. En Java, <code>==</code> compara referencias (identidad) y <code>equals()</code> compara contenido.</p>
<pre><code>String a = new String("hola");
String b = new String("hola");
System.out.println(a == b);       // false: distinta identidad
System.out.println(a.equals(b));  // true: mismo estado</code></pre>`,
 q:["¿Qué compara == en objetos Java?","Compara las referencias, es decir, la identidad, no el contenido."],
 ex:"Define estado y comportamiento de un objeto Lampara. ¿Qué mensajes aceptaría?" },
{ t:"Clases, atributos y métodos", min:8, src:"UF2404 · UD2 · 2.1 y 2.3", tags:["clase","atributo","método","constructor","this"],
 s:"La clase como plantilla: atributos, métodos, constructores y la referencia this.",
 sum:["La clase es la plantilla; los objetos son sus instancias.","Los atributos guardan el estado y los métodos definen el comportamiento.","this referencia a la instancia actual."],
 h:`<h2 id="clase">Clase y objeto</h2><p>Una clase es una plantilla que define las características comunes de un conjunto de objetos; un objeto es una instancia concreta. En la vida real usamos <em>un coche determinado</em>, no la idea genérica de coche. En Java, todo el código vive dentro de una clase, y el nombre del archivo <code>.java</code> debe coincidir con el de la clase pública.</p>
<h2 id="miembros">Atributos y métodos</h2><p>Los <strong>atributos</strong> (variables miembro) describen el estado; los <strong>métodos</strong> (funciones miembro) definen lo que el objeto puede hacer. Ambos se llaman <em>miembros</em>.</p>
<pre><code>public class Coche {
    private String color;
    private int velocidad;

    public Coche(String color) {      // constructor
        this.color = color;           // this: instancia actual
        this.velocidad = 0;
    }
    public void acelerar(int delta) { velocidad += delta; }
    public int getVelocidad() { return velocidad; }
}

Coche miCoche = new Coche("rojo");
miCoche.acelerar(30);</code></pre>
<h2 id="this">La referencia this</h2><p><code>this</code> permite distinguir atributos de parámetros con el mismo nombre y pasar la instancia actual a otro objeto.</p>`,
 q:["¿Para qué sirve el constructor?","Para inicializar el estado de un objeto cuando se crea con new."],
 ex:"Escribe una clase Libro con título y autor, un constructor y un método descripcion() que devuelva ambos." },
{ t:"Encapsulación e interfaz", min:7, src:"UF2404 · UD1 · 1.4.2 y UD2 · 2.1", tags:["encapsulación","interfaz","private","visibilidad"],
 s:"Ocultar los detalles internos y exponer solo una interfaz estable.",
 sum:["La encapsulación oculta la implementación y expone una interfaz.","Los atributos deben ser privados y accederse mediante métodos.","Así se puede cambiar el interior sin romper a quien usa la clase."],
 h:`<h2 id="vistas">Dos vistas del objeto</h2><p>Los atributos de un objeto deben estar ocultos al resto: no se accede directamente a ellos para consultarlos o modificarlos, sino mediante métodos. Esa separación entre la vista externa (<em>interfaz</em>) y la interna (<em>implementación</em>) es la <strong>encapsulación</strong>. Como la caja negra de un avión, el objeto guarda su información y solo se alcanza a través de su interfaz.</p>
<h2 id="visibilidad">Niveles de visibilidad en Java</h2><div class="scroll"><table><caption class="sr">Modificadores de acceso</caption><thead><tr><th scope="col">Modificador</th><th scope="col">Quién accede</th></tr></thead><tbody><tr><th scope="row"><code>private</code></th><td>Solo la propia clase</td></tr><tr><th scope="row">(por defecto)</th><td>Clases del mismo paquete</td></tr><tr><th scope="row"><code>protected</code></th><td>Mismo paquete y subclases</td></tr><tr><th scope="row"><code>public</code></th><td>Cualquier clase</td></tr></tbody></table></div>
<pre><code>public class Cuenta {
    private double saldo;
    public void ingresar(double c) {
        if (c &lt;= 0) throw new IllegalArgumentException("Importe no válido");
        saldo += c;
    }
    public double getSaldo() { return saldo; }
}</code></pre>
<div class="note"><strong>Beneficio:</strong> si mañana cambia cómo se calcula <code>getSaldo()</code>, el código que usa la clase no tiene que modificarse.</div>`,
 q:["¿Por qué el atributo saldo es privado?","Para que solo se modifique mediante métodos que validan los datos."],
 ex:"Añade a Cuenta un método retirar() que impida dejar el saldo en negativo." },
{ t:"Mensajes y tipos de métodos", min:8, src:"UF2404 · UD2 · 2.2.1 y 2.2.2", tags:["mensaje","get","set","static","constructor"],
 s:"Cómo se comunican los objetos y cómo se clasifican los métodos.",
 sum:["Un mensaje se envía a un objeto receptor, que decide cómo responder.","Hay métodos de acceso, de modificación, constructores y estáticos.","Los métodos estáticos pertenecen a la clase, no a una instancia."],
 h:`<h2 id="mensaje">Mensaje frente a llamada a procedimiento</h2><p>Un mensaje parece una llamada a procedimiento, pero uno de sus argumentos tiene naturaleza especial: el <strong>objeto receptor</strong>. En lugar de <code>ingreso(unaCuenta, 100000)</code> escribimos <code>unaCuenta.ingresar(100000)</code>. El receptor decide qué método ejecutar.</p>
<h2 id="tipos">Tipos de métodos</h2><ul><li><strong>De acceso o consulta (<code>get</code>):</strong> devuelven información del estado sin cambiarlo.</li><li><strong>De modificación (<code>set</code>):</strong> cambian el estado; los objetos que los ofrecen son <em>mutables</em>.</li><li><strong>Constructores:</strong> se ejecutan al crear la instancia; en Java y C++ llevan el nombre de la clase.</li><li><strong>De instancia y de clase (<code>static</code>):</strong> los primeros reciben un <code>this</code> implícito; los estáticos pertenecen a la clase.</li></ul>
<pre><code>public class Contador {
    private static int creados = 0;     // pertenece a la clase
    public Contador() { creados++; }
    public static int getCreados() { return creados; }
}</code></pre>
<div class="note">Por norma, evita atributos públicos: es preferible ofrecer métodos <code>get</code> y <code>set</code> con validación.</div>`,
 q:["¿Qué es un método estático?","Un método asociado a la clase, que no necesita una instancia para ejecutarse."],
 ex:"Añade a Contador un método reiniciar() estático y explica por qué no puede usar this." },
{ t:"Un programa orientado a objetos completo", min:9, src:"UF2404 · UD2 · 2.4", tags:["programa","POO = objetos + mensajes","ejemplo"],
 s:"POO = objetos + mensajes: un ejemplo de principio a fin.",
 sum:["Un programa OO es un conjunto de objetos que intercambian mensajes.","Hay una clase principal con main que crea los objetos.","Cada clase tiene una responsabilidad clara."],
 h:`<h2 id="idea">POO = objetos + mensajes</h2><p>Un programa orientado a objetos es un conjunto de objetos que colaboran enviándose mensajes. Normalmente hay una clase con el método <code>main</code> que crea los objetos iniciales y arranca la colaboración.</p>
<h2 id="ejemplo">Ejemplo: una pequeña biblioteca</h2>
<pre><code>class Libro {
    private final String titulo;
    private boolean prestado;
    Libro(String titulo) { this.titulo = titulo; }
    String getTitulo() { return titulo; }
    boolean estaPrestado() { return prestado; }
    void prestar() {
        if (prestado) throw new IllegalStateException("Ya prestado");
        prestado = true;
    }
    void devolver() { prestado = false; }
}

class Biblioteca {
    private final java.util.List&lt;Libro&gt; fondo = new java.util.ArrayList&lt;&gt;();
    void añadir(Libro l) { fondo.add(l); }
    int disponibles() {
        int n = 0;
        for (Libro l : fondo) if (!l.estaPrestado()) n++;
        return n;
    }
}

public class Main {
    public static void main(String[] args) {
        Biblioteca b = new Biblioteca();
        Libro l = new Libro("Clean Code");
        b.añadir(l);
        l.prestar();
        System.out.println(b.disponibles());   // 0
    }
}</code></pre>
<h2 id="analisis">Cómo analizarlo</h2><p>Busca los <strong>sustantivos</strong> (Libro, Biblioteca) como candidatos a clases y los <strong>verbos</strong> (prestar, devolver) como candidatos a métodos.</p>`,
 q:["¿Quién decide cómo se presta un libro?","El propio objeto Libro, que conoce su estado y valida la operación."],
 ex:"Añade una clase Socio y haz que prestar() reciba el socio que se lleva el libro." }
];
