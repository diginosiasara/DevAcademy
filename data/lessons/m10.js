/* Módulo 10 · Web y bases de datos (UF2405) */
export default [
{ t:"POO en la web: arquitectura multicapa", min:8, src:"UF2405 · UD1 y UD2", tags:["web","multicapa","MVC","cliente-servidor"],
 s:"Aplicaciones en capas de presentación, lógica de negocio y datos.",
 sum:["Una aplicación web separa presentación, lógica de negocio y datos.","Cada capa depende solo de la inferior.","Los objetos de negocio concentran las reglas del dominio."],
 h:`<h2 id="web">El modelo web</h2><p>En la web, un cliente ligero (el navegador) pide recursos a un servidor web y este a un servidor de aplicaciones y de datos. Se apoya en protocolos como HTTP y en tecnologías como JSP, servlets, ASP o PHP.</p>
<h2 id="capas">Arquitectura de tres capas</h2><div class="scroll"><table><caption class="sr">Capas de una aplicación</caption><thead><tr><th scope="col">Capa</th><th scope="col">Responsabilidad</th></tr></thead><tbody><tr><th scope="row">Presentación</th><td>Interfaz de usuario (HTML, formularios)</td></tr><tr><th scope="row">Lógica de negocio</th><td>Reglas del dominio, objetos de negocio</td></tr><tr><th scope="row">Datos</th><td>Persistencia y acceso a la base de datos</td></tr></tbody></table></div>
<p>La descomposición en clases y objetos facilitó dividir los sistemas en niveles y abarcar reglas de negocio complejas.</p>
<pre><code>// Capa de negocio: no sabe nada de HTML ni de SQL
class PedidoService {
    private final PedidoRepositorio repo;
    PedidoService(PedidoRepositorio repo) { this.repo = repo; }
    void confirmar(Pedido p) {
        if (p.getLineas().isEmpty()) throw new IllegalStateException("Pedido vacío");
        repo.guardar(p);
    }
}</code></pre>`,
 q:["¿Qué capa contiene las reglas del negocio?","La capa de lógica de negocio, formada por los objetos del dominio."],
 ex:"Reparte en capas: validar un correo, guardar un usuario, mostrar un formulario." },
{ t:"Modelo relacional y SQL básico", min:8, src:"UF2405 · UD4 y UD5", tags:["SQL","relacional","SELECT","clave primaria"],
 s:"Tablas, columnas, filas y la sentencia SELECT.",
 sum:["Una base relacional guarda datos en tablas con filas y columnas.","La clave primaria identifica cada fila.","SELECT consulta; FROM indica la tabla; WHERE filtra."],
 h:`<h2 id="tablas">Tablas, columnas y filas</h2><p>Una base de datos relacional se forma de <strong>tablas</strong> (relaciones). Cada <strong>columna</strong> es un atributo y cada <strong>fila</strong> es un registro único. Otros objetos son las <strong>vistas</strong> (tabla virtual resultado de una consulta), los <strong>procedimientos almacenados</strong> y los <strong>índices</strong>.</p>
<h2 id="select">La sentencia SELECT</h2><p>Es la sentencia por excelencia para consultar. <code>SELECT</code> y <code>FROM</code> son obligatorias; <code>WHERE</code> es opcional.</p>
<pre><code>SELECT nombre, apellidos
FROM CLIENTES
WHERE dni_cliente = '74850399J';</code></pre>
<h2 id="ddl">Crear tablas (DDL)</h2><pre><code>CREATE TABLE CLIENTES (
    dni_cliente VARCHAR(10) PRIMARY KEY,
    nombre      VARCHAR(50) NOT NULL,
    apellidos   VARCHAR(80)
);</code></pre>`,
 q:["¿Qué cláusulas son obligatorias en un SELECT básico?","SELECT y FROM; WHERE es opcional."],
 ex:"Escribe una consulta que devuelva los clientes cuyo apellido empiece por «G»." },
{ t:"Persistencia: del objeto a la tabla con JDBC", min:9, src:"UF2405 · UD4 y UD5", tags:["persistencia","JDBC","mapeo objeto-relacional","DAO"],
 s:"Correspondencia entre clases y tablas y acceso a datos con JDBC.",
 sum:["Clase ↔ tabla, atributo ↔ columna, objeto ↔ fila.","JDBC abre conexiones y ejecuta SQL.","Usa PreparedStatement para evitar inyección SQL."],
 h:`<h2 id="mapeo">Del modelo de objetos al relacional</h2><p>La <strong>persistencia</strong> hace que un objeto trascienda en el tiempo, normalmente guardándolo en una base de datos. Como los modelos difieren, se establece una correspondencia: <strong>clase ↔ tabla</strong>, <strong>atributo ↔ columna</strong>, <strong>objeto ↔ fila</strong>. Las relaciones de agregación y herencia se traducen con claves ajenas.</p>
<h2 id="jdbc">Acceso con JDBC</h2><pre><code>public class ClienteDAO {
    private final java.sql.Connection con;
    public ClienteDAO(java.sql.Connection con) { this.con = con; }

    public Cliente buscar(String dni) throws java.sql.SQLException {
        String sql = "SELECT nombre, apellidos FROM CLIENTES WHERE dni_cliente = ?";
        try (var ps = con.prepareStatement(sql)) {
            ps.setString(1, dni);
            try (var rs = ps.executeQuery()) {
                return rs.next() ? new Cliente(dni, rs.getString(1), rs.getString(2)) : null;
            }
        }
    }
}</code></pre>
<div class="note"><strong>Seguridad:</strong> nunca concatenes datos del usuario dentro del SQL; usa parámetros (<code>?</code>) para evitar la inyección SQL.</div>
<h2 id="dao">El patrón DAO</h2><p>Una clase <em>DAO</em> (Data Access Object) encapsula todo el acceso a datos: la capa de negocio trabaja con objetos y no conoce el SQL.</p>`,
 q:["¿Por qué usar PreparedStatement?","Para pasar parámetros de forma segura y evitar la inyección SQL."],
 ex:"Añade a ClienteDAO un método guardar(Cliente) con INSERT parametrizado." }
];
