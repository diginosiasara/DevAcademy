/* Módulo 3 · Herencia (UF2404 · UD3) */
export default [
{ t:"Herencia y la regla «es-un»", min:8, src:"UF2404 · UD3 · 3.1", tags:["herencia","es-un","extends","Object","super"],
 s:"Derivar clases a partir de otras y comprobar si la herencia está bien planteada.",
 sum:["Una subclase hereda atributos y métodos de su superclase.","Solo hereda si se cumple «es-un».","Toda clase Java desciende de Object."],
 h:`<h2 id="concepto">Concepto</h2><p>La herencia es el proceso de derivar una clase (<em>derivada o subclase</em>) de otra (<em>base o superclase</em>), de modo que la subclase puede usar los métodos de la base. Actúa de modo jerárquico: cada clase tiene una superclase y cero o más subclases, y la herencia transfiere atributos y métodos hacia abajo.</p>
<h2 id="esun">La regla «es-un»</h2><p>Un coche «es un» vehículo, así que <code>Coche</code> puede heredar de <code>Vehiculo</code>. Pero «una línea es un punto?»: no, así que <code>Linea</code> no debe heredar de <code>Punto</code>. Test: «A es-un B». Un pájaro es un animal; un perro es un mamífero; un pastel de fresas es un pastel.</p>
<pre><code>class Vehiculo {
    protected int velocidad;
    void acelerar(int d) { velocidad += d; }
}
class Coche extends Vehiculo {
    private int puertas = 4;
    void abrirMaletero() { /* ... */ }
}
Coche c = new Coche();
c.acelerar(20);   // método heredado</code></pre>
<h2 id="object">La clase Object</h2><p>En Java solo se hereda de una clase (<strong>herencia simple</strong>) y toda clase desciende de <code>Object</code>, que aporta <code>equals()</code>, <code>hashCode()</code>, <code>toString()</code>, <code>getClass()</code> y <code>clone()</code>.</p>
<div class="note">Si la herencia «es-un» no se sostiene, usa <strong>composición</strong> (lección sobre relaciones entre clases).</div>`,
 q:["¿Es buena idea que Cuadrado herede de Rectangulo?","Suele ser un mal diseño: si cambias solo el ancho, el cuadrado deja de ser cuadrado. La subclase no puede sustituir a la superclase (principio de Liskov)."],
 ex:"Escribe tres frases «A es-un B» correctas y una incorrecta para un sistema de empleados." },
{ t:"Constructores, protected y acoplamiento en la herencia", min:8, src:"UF2404 · UD3 · 3.1.3 a 3.1.7 y 3.3", tags:["super","protected","constructor","Demeter","acoplamiento"],
 s:"Cómo se crean los objetos en una jerarquía y cómo limitar el acoplamiento.",
 sum:["El constructor de la subclase llama primero al de la superclase con super(...).","protected abre el acceso a las subclases, pero aumenta el acoplamiento.","La ley de Demeter recomienda hablar solo con tus «amigos» directos."],
 h:`<h2 id="creacion">Creación de objetos en la herencia</h2><p>Al crear un objeto de la subclase se construye primero la parte de la superclase. Con <code>super(...)</code> se invoca su constructor; con <code>super.metodo()</code> se llama a la versión de la superclase.</p>
<pre><code>class Empleado {
    protected String nombre;
    Empleado(String nombre) { this.nombre = nombre; }
    double sueldo() { return 1500; }
}
class Directivo extends Empleado {
    Directivo(String nombre) { super(nombre); }
    @Override double sueldo() { return super.sueldo() + 800; }
}</code></pre>
<h2 id="acceso">Acceso y acoplamiento</h2><p>Los atributos <code>protected</code> son visibles para las subclases, pero crean dependencia: si cambias la superclase, puedes romper a las hijas. Preferible: atributos <code>private</code> y métodos de acceso.</p>
<h2 id="demeter">Ley de Demeter</h2><p>Un método solo debería enviar mensajes a: su propio objeto, sus parámetros, los objetos que crea y sus atributos. Evita cadenas como <code>a.getB().getC().hacer()</code>.</p>`,
 q:["¿Qué hace super(nombre) en el constructor?","Invoca al constructor de la superclase para inicializar su parte del objeto."],
 ex:"Crea una subclase Becario de Empleado cuyo sueldo sea la mitad del de Empleado." },
{ t:"Clases abstractas, métodos virtuales y redefinición", min:8, src:"UF2404 · UD3 · 3.4", tags:["abstract","override","clase raíz","virtual"],
 s:"Jerarquías de clases: clase raíz, abstractas y redefinición de métodos.",
 sum:["Una clase abstracta no se puede instanciar y define responsabilidades de subclase.","Un método abstracto debe implementarse en las subclases concretas.","Redefinir (@Override) cambia el comportamiento heredado."],
 h:`<h2 id="raiz">Clasificación jerárquica</h2><p>Las clases se organizan en un árbol con una <strong>clase raíz</strong> (en Java, <code>Object</code>). Hacia abajo, las clases se vuelven más específicas.</p>
<h2 id="abstractas">Clases abstractas</h2><p>Representan un concepto abstracto para el que no tiene sentido crear instancias. Un método <code>abstract</code> se llama <em>responsabilidad de subclase</em>: toda subclase concreta debe implementarlo. Una clase con algún método abstracto debe declararse <code>abstract</code>.</p>
<pre><code>abstract class Cuenta {
    protected double saldo;
    abstract double interesMensual();       // responsabilidad de subclase
    void abonarIntereses() { saldo += interesMensual(); }
}
class CuentaJoven extends Cuenta {
    @Override double interesMensual() { return saldo * 0.004; }
}</code></pre>
<h2 id="virtuales">Métodos virtuales y redefinición</h2><p>Un método es <em>virtual</em> si la versión que se ejecuta depende del tipo real del objeto. En Java los métodos de instancia lo son por defecto. La clase derivada <strong>redefine</strong> el comportamiento de la base con la misma firma.</p>`,
 q:["¿Se puede hacer new de una clase abstracta?","No: solo de sus subclases concretas."],
 ex:"Declara una clase abstracta Figura con area() y dos subclases. ¿Qué pasa si una subclase no implementa area()?" },
{ t:"Herencia múltiple e interfaces", min:7, src:"UF2404 · UD3 · 3.2", tags:["interface","implements","diamante","herencia múltiple"],
 s:"El problema de la herencia múltiple y cómo lo resuelven las interfaces en Java.",
 sum:["La herencia múltiple crea conflictos de nombres y el problema del diamante.","Java solo permite heredar de una clase, pero implementar varias interfaces.","Una interfaz define un contrato sin implementación de estado."],
 h:`<h2 id="problema">El problema</h2><p>La herencia múltiple permite que una clase derive de varias. Trae <strong>conflictos de nombres</strong> (dos padres con el mismo método) y <strong>herencia repetida</strong> (el «diamante»: A, de la que heredan B y C, y D hereda de ambas).</p>
<h2 id="interfaces">Solución en Java: interfaces</h2><p>Una interfaz no tiene almacenamiento asociado, así que se pueden combinar varias sin conflicto de estado. Una clase hereda de <em>una</em> clase y puede <code>implements</code> tantas interfaces como necesite; cada interfaz es un tipo independiente.</p>
<pre><code>interface Volador { void volar(); }
interface Nadador { void nadar(); }

class Pato extends Animal implements Volador, Nadador {
    public void volar() { System.out.println("Vuelo corto"); }
    public void nadar() { System.out.println("Nado"); }
}</code></pre>
<div class="note">Una interfaz no puede implementar otra, pero sí <em>extenderla</em>.</div>`,
 q:["¿Por qué Java no permite extends de dos clases?","Para evitar conflictos de nombres y el problema del diamante; se resuelve con interfaces."],
 ex:"Diseña una interfaz Imprimible y haz que dos clases no relacionadas la implementen." }
];
