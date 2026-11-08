/* Módulo 11 · Bases de datos relacionales (UF2405 · UD4, UD6 y UD7) */
export default [
{ t:"Bases de datos relacionales: conceptos y claves", min:7, src:"UF2405 · UD4 · 4.1", tags:["SGBD","relacional","clave primaria","clave ajena"],
 s:"Base de datos, sistema gestor, modelo relacional y claves.",
 sum:["Un SGBD gestiona los datos y ofrece acceso seguro y concurrente.","En el modelo relacional los datos se guardan en tablas.","Las claves primaria y ajena identifican y relacionan filas."],
 h:`<h2 id="bd">Base de datos y SGBD</h2><p>Una <strong>base de datos</strong> es un conjunto de información organizada e independiente de su almacenamiento físico. Un <strong>SGBD</strong> (sistema gestor, como MySQL, PostgreSQL u Oracle) es el software que la gestiona. Intervienen tres perfiles: <em>usuario final</em>, <em>desarrollador de aplicaciones</em> y <em>administrador</em> (garantiza integridad, consistencia y seguridad).</p>
<h2 id="relacional">Modelo relacional</h2><p>Los datos se guardan en <strong>tablas</strong> (relaciones). Cada <strong>columna</strong> es un atributo y cada <strong>fila</strong> un registro.</p>
<div class="scroll"><table><caption class="sr">Tabla CLIENTES</caption><thead><tr><th scope="col">dni_cliente (PK)</th><th scope="col">nombre</th><th scope="col">apellidos</th></tr></thead><tbody><tr><td>5689364V</td><td>Rafael</td><td>Gómez Muñoz</td></tr><tr><td>74850399J</td><td>Irene</td><td>Marín Benítez</td></tr></tbody></table></div>
<h2 id="claves">Claves e integridad</h2><ul><li><strong>Clave primaria:</strong> identifica de forma única cada fila.</li><li><strong>Clave candidata:</strong> otra columna que también podría identificarla.</li><li><strong>Clave ajena:</strong> referencia a la clave primaria de otra tabla.</li><li><strong>Integridad referencial:</strong> no puede haber una clave ajena que apunte a una fila inexistente.</li></ul>`,
 q:["¿Para qué sirve una clave ajena?","Para relacionar una tabla con otra apuntando a su clave primaria."], ex:"Identifica clave primaria y ajena en un sistema de pedidos." },
{ t:"Diseño de bases de datos: modelo entidad-relación", min:8, src:"UF2405 · UD4 · 4.2 · apoyo UD4", tags:["entidad-relación","conceptual","lógico","físico","normalización"],
 s:"Diseño en niveles: conceptual, lógico y físico, con el modelo E-R y normalización.",
 sum:["El diseño pasa por tres niveles: conceptual, lógico y físico.","El modelo E-R representa entidades, atributos y relaciones.","La normalización evita redundancias."],
 h:`<h2 id="niveles">Tres niveles de diseño</h2><ul><li><strong>Conceptual:</strong> modelo entidad-relación, independiente del SGBD.</li><li><strong>Lógico:</strong> se traduce a tablas del modelo relacional.</li><li><strong>Físico:</strong> tipos de datos, índices y almacenamiento concretos del SGBD.</li></ul>
<h2 id="er">Modelo entidad-relación</h2><p>Una <strong>entidad</strong> es un objeto del mundo real distinguible (Cliente, Pedido) descrito por <strong>atributos</strong>. Una <strong>relación</strong> asocia entidades. Se dibuja con rectángulos (entidades), rombos (relaciones) y líneas. La <strong>cardinalidad</strong> indica con cuántas entidades se asocia otra. Una <strong>entidad débil</strong> no tiene clave propia y depende de una fuerte: su clave combina la de la fuerte con un discriminante (doble rectángulo).</p>
<h2 id="normalizacion">Normalización</h2><div class="scroll"><table><caption class="sr">Formas normales</caption><thead><tr><th scope="col">Forma</th><th scope="col">Exige</th></tr></thead><tbody><tr><th scope="row">1FN</th><td>Valores atómicos, sin grupos repetidos</td></tr><tr><th scope="row">2FN</th><td>1FN y sin dependencias parciales de la clave</td></tr><tr><th scope="row">3FN</th><td>2FN y sin dependencias entre atributos no clave</td></tr></tbody></table></div>
<div class="note">Contraste con la POO: una <em>clase</em> guarda datos y comportamiento; una <em>entidad</em> solo describe datos.</div>`,
 q:["¿En qué nivel se elige el tipo de dato concreto de cada columna?","En el nivel físico."], ex:"Diseña el diagrama E-R de una biblioteca con Libro, Socio y Préstamo." },
{ t:"Tipos de relaciones y su implementación", min:7, src:"UF2405 · UD4 · 4.3", tags:["1:N","N:M","clave ajena","tabla intermedia"],
 s:"Relaciones uno a uno, uno a varios y varios a varios, y cómo se implementan en tablas.",
 sum:["1:1 y 1:N se implementan con una clave ajena.","N:M exige una tabla intermedia.","Las relaciones pueden tener atributos propios."],
 h:`<h2 id="tipos">Tres cardinalidades</h2><ul><li><strong>1:1:</strong> un empleado tiene un puesto de aparcamiento.</li><li><strong>1:N:</strong> un departamento tiene varios empleados; cada empleado, un solo departamento.</li><li><strong>N:M:</strong> un alumno cursa varias asignaturas y una asignatura tiene varios alumnos.</li></ul>
<h2 id="implementacion">Implementación</h2><pre><code>-- 1:N, la clave ajena va en el lado «muchos»
CREATE TABLE EMPLEADOS (
    id_empleado INT PRIMARY KEY,
    nombre      VARCHAR(60) NOT NULL,
    id_dpto     INT,
    FOREIGN KEY (id_dpto) REFERENCES DEPARTAMENTOS(id_dpto)
);

-- N:M, tabla intermedia con clave compuesta y atributo propio
CREATE TABLE MATRICULAS (
    id_alumno     INT,
    id_asignatura INT,
    nota          DECIMAL(4,2),
    PRIMARY KEY (id_alumno, id_asignatura),
    FOREIGN KEY (id_alumno)     REFERENCES ALUMNOS(id_alumno),
    FOREIGN KEY (id_asignatura) REFERENCES ASIGNATURAS(id_asignatura)
);</code></pre>`,
 q:["¿Cómo se implementa una relación N:M?","Con una tabla intermedia que contiene las claves de ambas entidades."], ex:"Implementa la relación entre Pedido y Producto con cantidad y precio." },
{ t:"Lenguaje de definición de datos (DDL)", min:8, src:"UF2405 · UD6", tags:["DDL","CREATE","ALTER","DROP","vistas","índices"],
 s:"Crear, modificar y borrar estructuras: tablas, vistas, índices, disparadores y procedimientos.",
 sum:["DDL define la estructura de la base de datos.","CREATE crea, ALTER modifica, DROP elimina y TRUNCATE vacía.","Las restricciones garantizan la integridad de los datos."],
 h:`<h2 id="create">CREATE</h2><pre><code>CREATE TABLE CLIENTES (
    dni_cliente VARCHAR(10) PRIMARY KEY,
    nombre      VARCHAR(50) NOT NULL,
    apellidos   VARCHAR(80),
    email       VARCHAR(120) UNIQUE,
    alta        DATE DEFAULT CURRENT_DATE
);</code></pre>
<p>Restricciones habituales: <code>PRIMARY KEY</code>, <code>FOREIGN KEY</code>, <code>NOT NULL</code>, <code>UNIQUE</code>, <code>CHECK</code> y <code>DEFAULT</code>. Con <code>CREATE</code> también se crean bases de datos, <strong>vistas</strong>, <strong>índices</strong>, <strong>disparadores</strong> (triggers) y <strong>procedimientos almacenados</strong>.</p>
<h2 id="database">Bases de datos y claves ajenas</h2><pre><code>CREATE DATABASE gestion;
USE gestion;

CREATE TABLE PEDIDOS (
    id_pedido   INT PRIMARY KEY,
    dni_cliente VARCHAR(10) NOT NULL,
    FOREIGN KEY (dni_cliente) REFERENCES CLIENTES(dni_cliente)
        ON DELETE CASCADE      -- al borrar el cliente se borran sus pedidos
);</code></pre>
<h2 id="alter">ALTER</h2><pre><code>ALTER TABLE CLIENTES ADD COLUMN telefono VARCHAR(15);
ALTER TABLE CLIENTES DROP COLUMN telefono;</code></pre>
<h2 id="drop">DROP y TRUNCATE</h2><pre><code>TRUNCATE TABLE LOG;      -- borra todas las filas, conserva la tabla
DROP TABLE LOG;          -- elimina la tabla entera</code></pre>
<h2 id="vistas">Vistas e índices</h2><pre><code>CREATE VIEW CLIENTES_ACTIVOS AS
    SELECT dni_cliente, nombre FROM CLIENTES WHERE alta &gt; '2025-01-01';
CREATE INDEX idx_apellidos ON CLIENTES (apellidos);</code></pre>
<div class="note"><strong>SQL-92</strong> es el estándar de referencia; cada SGBD comercial añade extensiones propias.</div>`,
 q:["¿Qué diferencia hay entre TRUNCATE y DROP?","TRUNCATE vacía la tabla conservando su estructura; DROP elimina también la estructura."], ex:"Crea una tabla PRODUCTOS con restricción CHECK para que el precio sea positivo." },
{ t:"Lenguaje de manipulación de datos (DML)", min:9, src:"UF2405 · UD7 · 7.1 a 7.5", tags:["SELECT","INSERT","UPDATE","DELETE","GROUP BY"],
 s:"Consultar, insertar, modificar y eliminar datos con SQL.",
 sum:["SELECT consulta; INSERT, UPDATE y DELETE modifican datos.","WHERE filtra; ORDER BY ordena; GROUP BY agrupa.","UPDATE y DELETE sin WHERE afectan a todas las filas."],
 h:`<h2 id="select">SELECT</h2><pre><code>SELECT nombre, apellidos
FROM CLIENTES
WHERE apellidos LIKE 'G%'
ORDER BY apellidos ASC;

SELECT COUNT(*) AS total, AVG(total) AS media
FROM PEDIDOS
WHERE fecha &gt;= '2026-01-01';</code></pre>
<p>Funciones de agregación: <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code>. Con <code>GROUP BY</code> se agrupan filas y con <code>HAVING</code> se filtran los grupos.</p>
<pre><code>SELECT dni_cliente, SUM(total) AS gastado
FROM PEDIDOS
GROUP BY dni_cliente
HAVING SUM(total) &gt; 1000;</code></pre>
<h2 id="condiciones">Más condiciones</h2><pre><code>SELECT DISTINCT apellidos FROM CLIENTES;                    -- sin repetidos
SELECT * FROM PEDIDOS WHERE total BETWEEN 100 AND 500;
SELECT * FROM CLIENTES WHERE apellidos IN ('Gómez', 'Marín');
SELECT * FROM CLIENTES c WHERE EXISTS
    (SELECT 1 FROM PEDIDOS p WHERE p.dni_cliente = c.dni_cliente);
SELECT * FROM PEDIDOS WHERE total &gt; ALL (SELECT total FROM PEDIDOS WHERE dni_cliente = '5689364V');</code></pre>
<h2 id="insert">INSERT</h2><pre><code>INSERT INTO CLIENTES (dni_cliente, nombre, apellidos)
VALUES ('74850399J', 'Irene', 'Marín Benítez');</code></pre>
<p>También se puede insertar el resultado de una consulta: <code>INSERT INTO HISTORICO SELECT * FROM PEDIDOS WHERE fecha &lt; '2025-01-01';</code></p>
<h2 id="update-delete">UPDATE y DELETE</h2><pre><code>UPDATE CLIENTES SET apellidos = 'Marín Gil' WHERE dni_cliente = '74850399J';
DELETE FROM CLIENTES WHERE dni_cliente = '74850399J';</code></pre>
<div class="note"><strong>Cuidado:</strong> sin <code>WHERE</code>, <code>UPDATE</code> y <code>DELETE</code> afectan a toda la tabla.</div>`,
 q:["¿Qué cláusula filtra los grupos de un GROUP BY?","HAVING."], ex:"Escribe una consulta que devuelva el número de pedidos por cliente." },
{ t:"JOIN, UNION y subconsultas", min:8, src:"UF2405 · UD7 · 7.6 y 7.7", tags:["JOIN","UNION","subconsulta","INNER JOIN"],
 s:"Combinar tablas y consultas: JOIN, UNION y subconsultas.",
 sum:["JOIN combina filas de varias tablas por una condición.","UNION junta los resultados de dos consultas compatibles.","Una subconsulta es una consulta dentro de otra."],
 h:`<h2 id="join">JOIN</h2><pre><code>-- Pedidos con el nombre del cliente
SELECT p.id_pedido, c.nombre, p.total
FROM PEDIDOS p
INNER JOIN CLIENTES c ON c.dni_cliente = p.dni_cliente;

-- Todos los clientes, tengan o no pedidos
SELECT c.nombre, p.id_pedido
FROM CLIENTES c
LEFT JOIN PEDIDOS p ON p.dni_cliente = c.dni_cliente;</code></pre>
<div class="scroll"><table><caption class="sr">Tipos de JOIN</caption><thead><tr><th scope="col">Tipo</th><th scope="col">Devuelve</th></tr></thead><tbody><tr><th scope="row">INNER JOIN</th><td>Solo filas con coincidencia en ambas tablas</td></tr><tr><th scope="row">LEFT JOIN</th><td>Todas las de la izquierda y las coincidentes de la derecha</td></tr><tr><th scope="row">RIGHT JOIN</th><td>Todas las de la derecha y las coincidentes de la izquierda</td></tr></tbody></table></div>
<h2 id="union">UNION</h2><pre><code>SELECT nombre FROM CLIENTES
UNION
SELECT nombre FROM PROVEEDORES;     -- sin duplicados (UNION ALL los conserva)</code></pre>
<h2 id="subconsultas">Subconsultas</h2><pre><code>SELECT nombre FROM CLIENTES
WHERE dni_cliente IN (SELECT dni_cliente FROM PEDIDOS WHERE total &gt; 500);</code></pre>`,
 q:["¿Qué JOIN devuelve también los clientes sin pedidos?","LEFT JOIN (con CLIENTES a la izquierda)."], ex:"Lista los clientes que nunca han hecho un pedido." },
{ t:"Del modelo relacional al modelo de objetos", min:8, src:"UF2405 · UD4 · 4.5 y 4.6", tags:["mapeo objeto-relacional","ORM","JPA","persistencia"],
 s:"Correlación entre ambos modelos y cómo se almacenan objetos en bases de datos relacionales.",
 sum:["Clase ↔ tabla, atributo ↔ columna, objeto ↔ fila.","Herencia y colecciones se traducen con claves ajenas o tablas.","Un ORM como JPA/Hibernate automatiza la correspondencia."],
 h:`<h2 id="correlacion">Correlación entre modelos</h2><p>El modelo relacional guarda <em>datos</em>; el de objetos también <em>comportamiento</em> (código ejecutable). Para almacenar objetos en una base relacional se establece una correspondencia: <strong>clase ↔ tabla</strong>, <strong>atributo ↔ columna</strong>, <strong>objeto ↔ fila</strong> e <strong>identidad ↔ clave primaria</strong>. Las asociaciones se traducen en claves ajenas; las colecciones, en tablas intermedias; la herencia, en una tabla por jerarquía o por clase.</p>
<h2 id="diferencias">Diferencias</h2><div class="scroll"><table><caption class="sr">Modelo relacional y de objetos</caption><thead><tr><th scope="col"></th><th scope="col">Relacional</th><th scope="col">Objetos</th></tr></thead><tbody><tr><th scope="row">Consulta</th><td>Lenguaje estándar SQL</td><td>Depende del sistema</td></tr><tr><th scope="row">Contenido</th><td>Datos</td><td>Datos y operaciones</td></tr><tr><th scope="row">Multimedia</th><td>Se guarda como BLOB</td><td>Cualquier objeto</td></tr></tbody></table></div>
<h2 id="orm">Mapeo objeto-relacional</h2><pre><code>@Entity
@Table(name = "CLIENTES")
public class Cliente {
    @Id @Column(name = "dni_cliente") private String dni;
    private String nombre;
    @OneToMany(mappedBy = "cliente") private java.util.List&lt;Pedido&gt; pedidos;
}</code></pre>
<p>Con <strong>JPA</strong> (implementado por Hibernate) las anotaciones indican la correspondencia y el framework genera el SQL.</p>`,
 q:["¿A qué se corresponde un objeto en la base relacional?","A una fila de la tabla que representa su clase."], ex:"Diseña las tablas para una jerarquía Vehículo, Coche y Moto." }
];
