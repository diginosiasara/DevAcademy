/* Módulo 10 · Arquitectura de aplicaciones web (UF2405 · UD1 a UD3) */
export default [
{ t:"Arquitectura web: cliente ligero y servidores", min:7, src:"UF2405 · UD1 · 1.1", tags:["web","cliente ligero","servidor web","servidor de aplicaciones"],
 s:"De la arquitectura cliente-servidor tradicional a la web con cliente ligero.",
 sum:["En la arquitectura cliente-servidor el cliente pide y el servidor responde.","En la web el cliente es ligero: un navegador que solo presenta.","Intervienen servidor web, de aplicaciones y de datos."],
 h:`<h2 id="cliente-servidor">Cliente-servidor</h2><p>El <strong>cliente</strong> solicita servicios y gestiona la interfaz; el <strong>servidor</strong> atiende muchas peticiones, centraliza recursos y aplica reglas. En el modelo tradicional (dos capas) el cliente contenía la interfaz y la lógica, y el servidor la base de datos: había que instalar y actualizar la aplicación en cada equipo.</p>
<h2 id="web">La web y el cliente ligero</h2><p>Una <strong>aplicación web</strong> se ejecuta en un servidor y se usa desde un navegador. El navegador es un <em>cliente ligero</em>: no instala la aplicación, solo muestra la interfaz y envía peticiones. Esto simplifica el despliegue y el mantenimiento.</p>
<h2 id="ventajas">Ventajas e inconvenientes</h2><p><strong>Ventajas:</strong> despliegue centralizado, multiplataforma y mantenimiento más barato. <strong>Inconvenientes:</strong> dependencia de la red, interactividad menor que una aplicación local y mayor exposición a ataques.</p>
<h2 id="servidores">Los servidores</h2><div class="scroll"><table><caption class="sr">Servidores en una aplicación web</caption><thead><tr><th scope="col">Servidor</th><th scope="col">Función</th><th scope="col">Ejemplos</th></tr></thead><tbody><tr><th scope="row">Web</th><td>Recibe peticiones HTTP y sirve contenido estático</td><td>Apache HTTP, Nginx, IIS</td></tr><tr><th scope="row">De aplicaciones</th><td>Ejecuta la lógica de negocio</td><td>Tomcat, WildFly, .NET</td></tr><tr><th scope="row">De datos</th><td>Almacena y consulta los datos</td><td>MySQL, PostgreSQL, SQL Server</td></tr></tbody></table></div>`,
 q:["¿Qué ventaja principal tiene el cliente ligero?","No hay que instalar ni actualizar la aplicación en cada equipo: basta un navegador."], ex:"Dibuja el recorrido de una petición desde el navegador hasta la base de datos y la respuesta." },
{ t:"Protocolos y tecnologías de la web", min:8, src:"UF2405 · UD1 · 1.2", tags:["TCP/IP","HTTP","OSI","DNS","FTP","SMTP"],
 s:"Modelo OSI, pila TCP/IP y los protocolos de aplicación más habituales.",
 sum:["Un protocolo define cómo se comunican los equipos.","TCP/IP es la base de Internet; HTTP es el de la web.","Cada protocolo usa un puerto conocido."],
 h:`<h2 id="modelos">Modelo OSI y pila TCP/IP</h2><p>Los protocolos se organizan en <strong>capas</strong> (modelo OSI, de siete). TCP/IP simplifica a cuatro: <strong>aplicación</strong> (HTTP, FTP, SMTP, DNS, TELNET), <strong>transporte</strong> (TCP, UDP), <strong>internet</strong> (IP) y <strong>acceso a red</strong>. IP encamina los paquetes sin garantizar su entrega; TCP añade conexión y fiabilidad.</p>
<h2 id="protocolos">Protocolos habituales</h2><div class="scroll"><table><caption class="sr">Protocolos y puertos</caption><thead><tr><th scope="col">Protocolo</th><th scope="col">Uso</th><th scope="col">Puerto</th></tr></thead><tbody><tr><th scope="row">HTTP / HTTPS</th><td>Páginas web (HTTPS cifrado)</td><td>80 / 443</td></tr><tr><th scope="row">FTP</th><td>Transferencia de ficheros (datos y control)</td><td>20 y 21</td></tr><tr><th scope="row">SMTP</th><td>Envío de correo</td><td>25</td></tr><tr><th scope="row">DNS</th><td>Traducir nombres a direcciones IP</td><td>53</td></tr><tr><th scope="row">TELNET</th><td>Conexión remota sin cifrar</td><td>23</td></tr></tbody></table></div>
<h2 id="direcciones">Direcciones, DNS y URL</h2><p>Cada equipo tiene una <strong>dirección IP</strong> (cuatro números en IPv4). Como son difíciles de recordar, el servicio <strong>DNS</strong> traduce nombres como <code>www.ejemplo.es</code> a su IP. Una <strong>URL</strong> localiza un recurso: <code>protocolo://servidor/ruta</code>. Un servidor web puede ejecutar programas externos mediante <strong>CGI</strong>, interfaz que devuelve el resultado como HTML.</p>
<h2 id="http">Petición y respuesta HTTP</h2><pre><code>GET /temario.html HTTP/1.1
Host: devacademy.example

HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8</code></pre>
<p>Métodos frecuentes: <code>GET</code> (leer), <code>POST</code> (enviar datos), <code>PUT</code> y <code>DELETE</code>. Códigos: 200 correcto, 301 redirección, 404 no encontrado, 500 error del servidor.</p>`,
 q:["¿Qué protocolo traduce nombres de dominio en direcciones IP?","DNS."], ex:"Abre las herramientas del navegador y localiza el código de estado de una petición." },
{ t:"Estándares de facto y componentes orientados a objetos", min:7, src:"UF2405 · UD1 · 1.3 y 1.4", tags:["Java EE","JavaBeans",".NET","PHP","componentes"],
 s:"Modelos de programación web más extendidos y los componentes OO como base.",
 sum:["Estándares de facto: Java EE, .NET y PHP.","La POO permitió dividir las aplicaciones en niveles y reglas de negocio.","Un componente es una unidad reutilizable con interfaz definida."],
 h:`<h2 id="facto">Estándares de facto</h2><p>Son modelos que se imponen por uso, no por una norma oficial: <strong>Java EE</strong> (Jakarta EE: servlets, JSP, EJB), <strong>.NET</strong> (ASP.NET) y <strong>PHP</strong> (con Apache y MySQL). Todos separan presentación, lógica y datos.</p>
<h2 id="componentes">Por qué componentes orientados a objetos</h2><p>Las aplicaciones crecieron y una estructura lineal se volvió inmanejable. La POO aportó objetos con <em>estado, comportamiento e identidad</em>, clases abstractas, y relaciones de generalización, agregación y asociación. Los lenguajes OO permiten dividir el sistema en niveles y abarcar reglas de negocio complejas.</p>
<h2 id="bean">Un componente sencillo: JavaBean</h2><pre><code>public class Cliente implements java.io.Serializable {
    private String dni;
    private String nombre;
    public Cliente() { }                       // constructor sin argumentos
    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }
    public String getNombre() { return nombre; }
    public void setNombre(String n) { this.nombre = n; }
}</code></pre>
<p>Un <em>JavaBean</em> es una clase con constructor vacío, atributos privados y accesores <code>get/set</code>; las capas de presentación y de datos lo reutilizan.</p>`,
 q:["¿Qué características tiene un JavaBean?","Constructor sin argumentos, atributos privados y métodos get/set (normalmente serializable)."], ex:"Escribe un JavaBean Producto con código, nombre y precio." },
{ t:"Arquitectura multicapa y modelo de tres capas", min:8, src:"UF2405 · UD2 · 2.1 y 2.2", tags:["multicapa","tres capas","N-tier","presentación","datos"],
 s:"Organizar la aplicación en capas con responsabilidades separadas.",
 sum:["Cada capa solo conoce a la inferior.","Las tres capas son presentación, aplicación (negocio) y datos.","Separar la lógica permite cambiar la interfaz sin tocar el negocio."],
 h:`<h2 id="porque">Por qué capas</h2><p>Separar responsabilidades <strong>reduce dependencias</strong>, facilita entender y mantener sistemas complejos y permite que las capas se distribuyan físicamente en distintos servidores. Una capa solo hace referencia a elementos de las capas inferiores.</p>
<h2 id="tres">Modelo de tres capas en la web</h2><div class="scroll"><table><caption class="sr">Capas de una aplicación web</caption><thead><tr><th scope="col">Capa</th><th scope="col">Responsabilidad</th><th scope="col">Tecnología típica</th></tr></thead><tbody><tr><th scope="row">Presentación</th><td>Genera pantallas y recoge datos del usuario</td><td>HTML, CSS, JavaScript, JSP</td></tr><tr><th scope="row">Aplicación o negocio</th><td>Reglas y procesos del dominio</td><td>Clases Java, servicios</td></tr><tr><th scope="row">Datos</th><td>Almacena y recupera la información</td><td>SGBD, DAO</td></tr></tbody></table></div>
<p>Con esta separación se pueden construir muchas interfaces de usuario (web, móvil, API) sin afectar a la lógica de negocio.</p>
<p><strong>Ventajas:</strong> separación de responsabilidades, reutilización y escalabilidad. <strong>Desventajas:</strong> más complejidad y más puntos de comunicación entre capas.</p>
<pre><code>// La capa de negocio no sabe nada de HTML ni de SQL
class PedidoService {
    private final PedidoDAO dao;
    PedidoService(PedidoDAO dao) { this.dao = dao; }
    void confirmar(Pedido p) {
        if (p.getLineas().isEmpty()) throw new IllegalStateException("Pedido vacío");
        dao.guardar(p);
    }
}</code></pre>`,
 q:["¿Qué capa aplica las reglas del dominio?","La de aplicación o negocio."], ex:"Reparte en capas: validar un correo, mostrar un formulario y guardar un usuario." },
{ t:"Diseño de arquitecturas y lógica de negocio", min:8, src:"UF2405 · UD2 · 2.3 y 2.4", tags:["MVC","lógica de negocio","cinco capas","escalabilidad"],
 s:"Criterios de diseño multicapa, el patrón MVC y qué es la lógica de negocio.",
 sum:["La lógica de negocio son las reglas propias del dominio.","MVC separa modelo, vista y controlador.","Las capas se pueden subdividir según la necesidad (por ejemplo cinco)."],
 h:`<h2 id="negocio">Lógica de negocio</h2><p>Son las <strong>reglas del dominio</strong>: cómo se calcula un descuento, cuándo se puede cancelar un pedido, qué datos son válidos. Viven en objetos de dominio y servicios, independientes de la interfaz y de la base de datos.</p>
<h2 id="mvc">Patrón MVC</h2><ul><li><strong>Modelo:</strong> datos y reglas.</li><li><strong>Vista:</strong> presentación al usuario.</li><li><strong>Controlador:</strong> recibe las peticiones, invoca al modelo y elige la vista.</li></ul>
<h2 id="diseno">Criterios de diseño</h2><ul><li>Alta <strong>cohesión</strong> y bajo <strong>acoplamiento</strong> entre capas.</li><li><strong>Escalabilidad:</strong> poder replicar la capa que se sature.</li><li><strong>Seguridad:</strong> la base de datos no se expone directamente al cliente.</li><li><strong>Reutilización:</strong> la misma lógica sirve a varias interfaces.</li></ul>
<p>El modelo de tres capas puede refinarse; por ejemplo, un modelo de cinco capas distingue presentación, control, negocio, acceso a datos y datos.</p>
<pre><code>// Controlador sencillo (servlet) que delega en el servicio
protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
    Pedido p = servicio.crear(req.getParameter("dni"));
    res.sendRedirect("confirmacion.html?id=" + p.getId());
}</code></pre>`,
 q:["¿Qué hace el controlador en MVC?","Recibe la petición, llama al modelo y decide qué vista mostrar."], ex:"Identifica modelo, vista y controlador en una aplicación que conozcas." },
{ t:"Capa de presentación: HTML y formularios", min:7, src:"UF2405 · UD3 · 3.1", tags:["HTML","formularios","CSS","hipertexto"],
 s:"El lenguaje de hipertexto, etiquetas y formularios para recoger datos.",
 sum:["HTML es un lenguaje de marcado, no de programación.","Define la estructura; CSS, la apariencia.","Los formularios envían datos al servidor con GET o POST."],
 h:`<h2 id="html">HTML</h2><p>HTML (<em>HyperText Markup Language</em>) es un lenguaje de marcado estático: sus <strong>etiquetas</strong> (<code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;a&gt;</code>) estructuran el contenido y cada navegador las interpreta. La apariencia se separa en hojas de estilo <strong>CSS</strong>.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;title&gt;Alta de cliente&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Nuevo cliente&lt;/h1&gt;
  &lt;form action="/clientes" method="post"&gt;
    &lt;label for="dni"&gt;DNI&lt;/label&gt;
    &lt;input id="dni" name="dni" required&gt;
    &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
    &lt;input id="nombre" name="nombre" required&gt;
    &lt;button type="submit"&gt;Guardar&lt;/button&gt;
  &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h2 id="etiquetas">Etiquetas más usadas</h2><div class="scroll"><table><caption class="sr">Etiquetas HTML</caption><thead><tr><th scope="col">Etiqueta</th><th scope="col">Uso</th></tr></thead><tbody><tr><th scope="row"><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code></th><td>Títulos</td></tr><tr><th scope="row"><code>&lt;p&gt;</code></th><td>Párrafo</td></tr><tr><th scope="row"><code>&lt;a href&gt;</code></th><td>Enlace</td></tr><tr><th scope="row"><code>&lt;img src alt&gt;</code></th><td>Imagen con texto alternativo</td></tr><tr><th scope="row"><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></th><td>Listas</td></tr><tr><th scope="row"><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code></th><td>Tablas</td></tr></tbody></table></div><p>Un documento tiene dos partes: <code>&lt;head&gt;</code> (título, codificación) y <code>&lt;body&gt;</code> (contenido). Basta un editor de texto para escribirlo y un navegador para verlo.</p>
<h2 id="buenas">Buenas prácticas</h2><p>Usa etiquetas semánticas, asocia cada <code>input</code> con su <code>label</code> y valida también en el servidor: el navegador no es de fiar.</p>`,
 q:["¿Por qué validar también en el servidor?","Porque el cliente puede modificarse o saltarse; el servidor debe garantizar los datos."], ex:"Añade un campo de correo electrónico al formulario." },
{ t:"Presentación dinámica: JavaScript y HTML dinámico", min:7, src:"UF2405 · UD3 · 3.2", tags:["JavaScript","DOM","scripting","AJAX"],
 s:"Lenguajes de scripting en el cliente para páginas que reaccionan.",
 sum:["JavaScript se ejecuta en el navegador y manipula el DOM.","Permite validar y actualizar la página sin recargarla.","Con fetch se piden datos al servidor en segundo plano."],
 h:`<h2 id="scripting">Scripting en el cliente</h2><p>Un lenguaje de <em>scripting</em> interpretado, como <strong>JavaScript</strong>, se incluye en la página y se ejecuta en el navegador. Manipula el <strong>DOM</strong> (la estructura del documento) para crear <em>HTML dinámico</em>: mostrar errores, filtrar listas o actualizar partes de la página.</p>
<pre><code>&lt;button id="saludar"&gt;Saludar&lt;/button&gt;
&lt;p id="salida"&gt;&lt;/p&gt;
&lt;script&gt;
  document.getElementById("saludar").addEventListener("click", () =&gt; {
    document.getElementById("salida").textContent = "¡Hola!";
  });
&lt;/script&gt;</code></pre>
<h2 id="ajax">Peticiones asíncronas</h2><pre><code>fetch("/api/clientes/74850399J")
  .then(r =&gt; r.json())
  .then(c =&gt; console.log(c.nombre));</code></pre>
<div class="note">JavaScript mejora la experiencia, pero la lógica de negocio y la seguridad siguen en el servidor.</div>`,
 q:["¿Dónde se ejecuta JavaScript?","En el navegador del cliente (también en servidor con Node.js, pero aquí hablamos del cliente)."], ex:"Escribe un script que muestre cuántos caracteres lleva escritos un campo de texto." },
{ t:"Lenguajes de servidor: Servlets, JSP, PHP y ASP", min:8, src:"UF2405 · UD3 · 3.3", tags:["Servlet","JSP","PHP","ASP","Tomcat"],
 s:"Tecnologías que generan páginas en el servidor y atienden peticiones de clientes ligeros.",
 sum:["El código de servidor genera HTML dinámico por cada petición.","Los servlets son clases Java; JSP mezcla HTML y Java.","PHP y ASP son alternativas de scripting en servidor."],
 h:`<h2 id="servlets">Servlets</h2><p>Un <strong>servlet</strong> es una clase Java que atiende peticiones HTTP dentro de un contenedor como <strong>Apache Tomcat</strong>.</p>
<pre><code>@WebServlet("/saludo")
public class SaludoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html;charset=UTF-8");
        String nombre = req.getParameter("nombre");
        res.getWriter().println("&lt;h1&gt;Hola, " + nombre + "&lt;/h1&gt;");
    }
}</code></pre>
<h2 id="jsp">JSP</h2><p>Las <strong>Java Server Pages</strong> son páginas HTML con fragmentos Java; el contenedor las compila a servlets. Se usan para la vista, dejando la lógica en servlets y clases.</p>
<h2 id="otros">PHP y ASP</h2><div class="scroll"><table><caption class="sr">Lenguajes de servidor</caption><thead><tr><th scope="col">Tecnología</th><th scope="col">Características</th></tr></thead><tbody><tr><th scope="row">PHP</th><td>Interpretado, incrustado en HTML, fácil de aprender; necesita Apache o IIS</td></tr><tr><th scope="row">ASP / ASP.NET</th><td>De Microsoft; se ejecuta sobre IIS</td></tr><tr><th scope="row">Servlets / JSP</th><td>Java; requieren un contenedor (Tomcat)</td></tr></tbody></table></div>
<div class="note"><strong>Seguridad:</strong> escapa siempre el texto del usuario antes de escribirlo en HTML para evitar ataques XSS.</div>`,
 q:["¿Qué método de HttpServlet atiende peticiones GET?","doGet()."], ex:"Haz que el servlet salude con un parámetro «nombre» y escápalo antes de mostrarlo." }
];
