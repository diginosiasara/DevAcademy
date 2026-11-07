/* Módulo 12 · Acceso a datos desde aplicaciones (UF2405 · UD5) */
export default [
{ t:"Acceso a datos: API, controladores y conexión", min:8, src:"UF2405 · UD5 · 5.1 a 5.4.1", tags:["ODBC","JDBC","driver","conexión"],
 s:"API de acceso a datos, tipos de controlador y cómo establecer la conexión.",
 sum:["Una API de acceso evita depender del SGBD concreto.","ODBC (independiente del lenguaje) y JDBC (Java) son las más conocidas.","La conexión se abre con una URL, usuario y contraseña."],
 h:`<h2 id="api">API y controladores</h2><p>Para que una aplicación hable con cualquier base de datos sin cambiar el código se usa una <strong>API de acceso</strong> y un <strong>controlador (driver)</strong> específico de cada SGBD. <strong>ODBC</strong> es la interfaz estándar independiente del lenguaje; <strong>JDBC</strong> es la API de Java. Otros mecanismos clásicos: CGI y OLE DB.</p>
<h2 id="niveles">Niveles</h2><ol><li>La <strong>aplicación</strong> usa la API.</li><li>El <strong>gestor de controladores</strong> (<code>DriverManager</code>) elige el driver adecuado.</li><li>El <strong>driver</strong> traduce las llamadas al protocolo del SGBD.</li><li>El <strong>SGBD</strong> ejecuta las sentencias.</li></ol>
<h2 id="conexion">Establecer la conexión</h2><pre><code>String url = "jdbc:mysql://localhost:3306/academia";
try (Connection con = DriverManager.getConnection(url, "usuario", "clave")) {
    System.out.println("Conectado: " + !con.isClosed());
} catch (SQLException e) {
    System.err.println(e.getMessage());
}</code></pre>
<div class="note"><strong>Seguridad:</strong> no escribas las credenciales en el código; léelas de configuración o variables de entorno, y usa un usuario con los permisos mínimos.</div>`,
 q:["¿Qué función tiene el driver?","Traducir las llamadas de la API al protocolo propio del SGBD."], ex:"Escribe un método que devuelva una Connection leyendo la URL de una variable de entorno." },
{ t:"Ejecutar consultas y manipular resultados", min:9, src:"UF2405 · UD5 · 5.4.2 y 5.4.3", tags:["Statement","PreparedStatement","ResultSet","tipos de datos"],
 s:"Statement, PreparedStatement y ResultSet, y correspondencia de tipos SQL con tipos Java.",
 sum:["PreparedStatement evita la inyección SQL.","ResultSet recorre el resultado fila a fila.","Cada tipo SQL tiene su equivalente Java."],
 h:`<h2 id="objetos">Objetos de JDBC</h2><ul><li><strong>Connection:</strong> la sesión con la base de datos.</li><li><strong>Statement / PreparedStatement:</strong> ejecutan sentencias SQL.</li><li><strong>ResultSet:</strong> el resultado de una consulta, con un cursor que avanza con <code>next()</code>.</li></ul>
<pre><code>String sql = "SELECT dni_cliente, nombre FROM CLIENTES WHERE apellidos LIKE ?";
try (PreparedStatement ps = con.prepareStatement(sql)) {
    ps.setString(1, "G%");
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            System.out.println(rs.getString("dni_cliente") + " " + rs.getString("nombre"));
        }
    }
}

// Modificaciones: executeUpdate devuelve las filas afectadas
try (PreparedStatement ps = con.prepareStatement("UPDATE CLIENTES SET nombre = ? WHERE dni_cliente = ?")) {
    ps.setString(1, "Irene");
    ps.setString(2, "74850399J");
    int filas = ps.executeUpdate();
}</code></pre>
<h2 id="tipos">Tipos SQL y tipos Java</h2><div class="scroll"><table><caption class="sr">Correspondencia de tipos</caption><thead><tr><th scope="col">SQL</th><th scope="col">Java</th><th scope="col">Método</th></tr></thead><tbody><tr><th scope="row">VARCHAR</th><td>String</td><td><code>getString</code></td></tr><tr><th scope="row">INTEGER</th><td>int</td><td><code>getInt</code></td></tr><tr><th scope="row">DECIMAL</th><td>BigDecimal</td><td><code>getBigDecimal</code></td></tr><tr><th scope="row">DATE</th><td>LocalDate</td><td><code>getObject(col, LocalDate.class)</code></td></tr><tr><th scope="row">BLOB</th><td>byte[] / InputStream</td><td><code>getBytes</code></td></tr></tbody></table></div>
<div class="note"><strong>Inyección SQL:</strong> nunca concatenes datos del usuario en la sentencia; usa parámetros <code>?</code>.</div>`,
 q:["¿Por qué PreparedStatement es más seguro que concatenar texto?","Porque los parámetros se envían separados del SQL y no pueden alterar la sentencia."], ex:"Haz un método que devuelva una lista de Cliente a partir de un ResultSet." },
{ t:"Procedimientos almacenados y transacciones", min:9, src:"UF2405 · UD5 · 5.4.4 y 5.4.5", tags:["procedimiento almacenado","trigger","transacción","commit","ACID"],
 s:"Llamar a procedimientos almacenados y agrupar operaciones en transacciones.",
 sum:["Un procedimiento almacenado guarda sentencias SQL en el servidor.","Una transacción agrupa operaciones: o se hacen todas o ninguna.","ACID: atomicidad, consistencia, aislamiento y durabilidad."],
 h:`<h2 id="procedimientos">Procedimientos almacenados</h2><p>Guardan sentencias SQL en el servidor para ejecutarlas por su nombre, con parámetros. Reducen tráfico y centralizan reglas. Los <strong>disparadores</strong> (<em>triggers</em>) son procedimientos que se ejecutan solos ante un evento (INSERT, UPDATE, DELETE).</p>
<pre><code>try (CallableStatement cs = con.prepareCall("{call confirmar_pedido(?)}")) {
    cs.setInt(1, 123);
    cs.execute();
}</code></pre>
<h2 id="transacciones">Transacciones</h2><p>Una <strong>transacción</strong> es un conjunto de operaciones que se ejecutan como una unidad. Propiedades <strong>ACID</strong>: <em>atomicidad</em>, <em>consistencia</em>, <em>aislamiento</em> y <em>durabilidad</em>.</p>
<pre><code>con.setAutoCommit(false);
try {
    restar(con, "A", 100);
    sumar(con, "B", 100);
    con.commit();            // todo correcto
} catch (SQLException e) {
    con.rollback();          // se deshace todo
    throw e;
} finally {
    con.setAutoCommit(true);
}</code></pre>
<h2 id="distribuidas">Transacciones distribuidas</h2><p>Cuando una transacción afecta a varias bases de datos se coordina con el protocolo de <strong>confirmación en dos fases</strong> (<em>two-phase commit</em>): primero todos los participantes votan si pueden confirmar y, si todos aceptan, se confirma; si no, se deshace. En Java se gestionan con JTA/XA.</p>`,
 q:["¿Qué garantiza la atomicidad?","Que se ejecutan todas las operaciones de la transacción o ninguna."], ex:"Implementa una transferencia entre dos cuentas con commit y rollback." },
{ t:"Persistencia de objetos con el patrón DAO", min:9, src:"UF2405 · UD4 y UD5", tags:["persistencia","DAO","capa de datos","repositorio"],
 s:"Encapsular el acceso a datos para que la lógica de negocio trabaje solo con objetos.",
 sum:["Un DAO encapsula todo el SQL de una entidad.","La capa de negocio depende de una interfaz, no del SGBD.","Facilita cambiar de base de datos y probar el código."],
 h:`<h2 id="dao">Qué es un DAO</h2><p>Un <em>Data Access Object</em> es una clase que concentra las operaciones de lectura y escritura de una entidad (crear, leer, actualizar, borrar). La capa de negocio usa una <strong>interfaz</strong> y no conoce el SQL ni el SGBD.</p>
<pre><code>public interface ClienteDAO {
    Cliente buscar(String dni) throws SQLException;
    void guardar(Cliente c) throws SQLException;
}

public class ClienteDAOJdbc implements ClienteDAO {
    private final Connection con;
    public ClienteDAOJdbc(Connection con) { this.con = con; }

    public Cliente buscar(String dni) throws SQLException {
        String sql = "SELECT nombre, apellidos FROM CLIENTES WHERE dni_cliente = ?";
        try (PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, dni);
            try (ResultSet rs = ps.executeQuery()) {
                return rs.next() ? new Cliente(dni, rs.getString(1), rs.getString(2)) : null;
            }
        }
    }
    public void guardar(Cliente c) throws SQLException {
        try (PreparedStatement ps = con.prepareStatement(
                "INSERT INTO CLIENTES (dni_cliente, nombre, apellidos) VALUES (?, ?, ?)")) {
            ps.setString(1, c.getDni()); ps.setString(2, c.getNombre()); ps.setString(3, c.getApellidos());
            ps.executeUpdate();
        }
    }
}</code></pre>
<h2 id="ventajas">Ventajas</h2><p>Aplica el principio de <em>responsabilidad única</em> y el polimorfismo: puedes sustituir <code>ClienteDAOJdbc</code> por una versión en memoria para las pruebas o por otra para otro SGBD sin tocar el negocio.</p>`,
 q:["¿Por qué el servicio depende de la interfaz ClienteDAO y no de la clase JDBC?","Para poder cambiar la implementación (otra base de datos o pruebas) sin modificar el negocio."], ex:"Crea una implementación ClienteDAOMemoria con un Map para probar el servicio sin base de datos." }
];
