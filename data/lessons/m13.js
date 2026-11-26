/* Módulo 13 · El ciclo de vida del desarrollo de aplicaciones (UF2406 · UD1–UD8) */
import { FIGS } from "../figs.js";

const tbl = (cap, head, rows) => `<div class="scroll"><table><caption class="sr">${cap}</caption><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;
const note = (label, text) => `<div class="note"><strong>${label}:</strong> ${text}</div>`;
const fig = (f, alt, cap) => `<figure class="fig"><img src="../img/guia/${f}" width="${FIGS[f][0]}" height="${FIGS[f][1]}" alt="${alt}" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`;

export default [
{ t:"Proceso de ingeniería del software: fases, modelos y metodologías", min:10, src:"UF2406 · UD1", tags:["ciclo de vida","cascada","espiral","requisitos","CASE"],
s:"Fases del proceso, modelos de ciclo de vida, requisitos y trazabilidad, metodologías orientadas a objetos y herramientas CASE.",
sum:["Fases: especificación, diseño, construcción, validación, implantación y mantenimiento.","Cascada, sashimi, incremental/prototipos y espiral se distinguen por cómo reparten el riesgo y la entrega.","MÉTRICA v3 (España), Merise (Francia) y SSADM (Reino Unido) son metodologías estructuradas oficiales."],
h:`<h2 id="fases">Las fases del proceso</h2><p>La <strong>ingeniería del software</strong> nació de la «crisis del software»: proyectos que costaban y tardaban mucho más de lo previsto. Su respuesta es un proceso ordenado en fases. Para un repaso de los conceptos generales, mira <a href="poo-05.html">Ingeniería del software: conceptos y principios</a>.</p>
${tbl("Fases del proceso de ingeniería del software", ["Fase","Qué se hace"], [["1. Especificación","Definir <em>qué</em> debe hacer el sistema (requisitos)."],["2. Diseño","Decidir <em>cómo</em> lo hará: arquitectura y diseño detallado."],["3. Construcción","Programar y hacer las pruebas unitarias de cada módulo."],["4. Validación","Comprobar que el producto cumple lo que se pidió."],["5. Implantación","Puesta en marcha y entrega al cliente."],["6. Mantenimiento","Corregir, adaptar y mejorar tras la entrega."]])}
<h2 id="modelos">Modelos de ciclo de vida</h2>
${fig("f_cascada_v.png","Esquema del modelo en cascada, con cinco fases en escalera, y del modelo en V, que empareja cada fase de diseño con su nivel de prueba","Modelo en cascada (izquierda) y modelo en V (derecha).")}
${tbl("Comparación de los modelos de ciclo de vida", ["Modelo","Idea","Ventaja","Inconveniente"], [["Cascada","Fases secuenciales; la salida de una es la entrada de la siguiente.","Sencillo y bien documentado.","Rígido; el cliente ve el producto al final."],["Cascada con realimentación (sashimi)","Permite solapar fases.","Menos documentación y vuelta atrás posible.","Control más difícil."],["Incremental y prototipos","Entregas parciales; se refina con la reacción del usuario.","Resultados tempranos.","La arquitectura puede degradarse."],["Espiral","Cada vuelta empieza por el análisis de riesgos.","Gestiona bien el riesgo.","Complejo; exige experiencia."]])}
${fig("f_espiral.png","Espiral de Boehm con cuatro cuadrantes: determinar objetivos, analizar riesgos, desarrollar y validar, y planificar el siguiente ciclo","Modelo en espiral de Boehm: cada vuelta recorre cuatro cuadrantes.")}
<h2 id="requisitos">Requisitos y trazabilidad</h2><p>El cliente rara vez sabe al principio todo lo que necesita, así que se combinan varias técnicas de captura: <strong>entrevistas</strong>, entrevistas <strong>JAD</strong> (muy estructuradas, con participantes de todos los niveles), <strong>prototipos</strong> y <strong>casos de uso</strong> (introducidos por Jacobson en 1992).</p><p>La <strong>trazabilidad</strong> consiste en conocer por qué fases y procesos ha pasado cada elemento, de modo que cualquier problema pueda <em>rastrearse hasta su origen</em>.</p>
${note("Idea clave","Un requisito sin trazabilidad no se puede validar ni mantener: no sabes qué diseño, código y pruebas lo implementan.")}
<h2 id="metodologias">Metodologías orientadas a objetos y estructuradas</h2>
${tbl("Metodologías y su origen", ["Metodología","Rasgo clave"], [["Coad y Yourdon","De las más sencillas de aprender en análisis orientado a objetos."],["Proceso Unificado y UML","Obra de «los tres amigos»: Jacobson, Booch y Rumbaugh."],["MÉTRICA v3","Metodología oficial de la Administración española. Planificación (<strong>PSI</strong>), desarrollo (<strong>EVS, ASI, DSI, CSI, IAS</strong>) y mantenimiento (<strong>MSI</strong>)."],["Merise","Administración francesa; arranca con el <em>esquema director</em>."],["SSADM","Administración del Reino Unido; sus fases se llaman módulos."]])}
${note("Truco","MÉTRICA v3: «Pepe Es A Dos Cervezas Ilusionado» → PSI, EVS, ASI, DSI, CSI, IAS; y MSI para mantener.")}
<h2 id="case">Herramientas CASE y gestión de configuración</h2>
${tbl("Tipos de herramientas CASE", ["Tipo","Apoya…"], [["Upper CASE","Planificación, análisis de requisitos y estrategia."],["Lower CASE","Diseño detallado, codificación, pruebas y mantenimiento."],["I-CASE (integradas)","Todo el ciclo, mediante un <strong>repositorio</strong> común cuyo <strong>metamodelo</strong> define cómo se guarda la información."]])}
<p>Un <strong>IDE</strong> reúne editor, compilador y depurador. Para el trabajo en equipo se usa un sistema de <strong>gestión de configuración</strong> como <strong>CVS</strong> (Dick Grune, 1986): cada desarrollador trabaja en su <em>copia de trabajo</em>, envía los cambios al <em>repositorio</em> y puede abrir <em>ramas</em>.</p>`,
q:["¿Qué modelo de ciclo de vida realiza el análisis de riesgos en cada iteración y quién lo propuso?","El modelo en espiral, propuesto por Boehm."],
ex:"Para cada caso elige un modelo de ciclo de vida y justifica: (a) software de control con requisitos cerrados y contrato de precio fijo; (b) una app móvil cuyos requisitos cambian cada mes." },

{ t:"Planificación y seguimiento: estimación, PERT y Gantt", min:9, src:"UF2406 · UD2", tags:["COCOMO","puntos de función","PERT","Gantt","camino crítico"],
s:"Cómo estimar el esfuerzo de un proyecto, planificarlo con WBS, PERT y Gantt, y hacer su seguimiento.",
sum:["COCOMO (Boehm) estima esfuerzo y duración a partir de las KLOC; tiene tres modos y tres submodelos.","Los puntos de función (Albrecht, IBM, 1979) miden el tamaño desde el punto de vista del usuario.","El camino crítico es la ruta más larga: no tiene holgura y fija la duración mínima."],
h:`<h2 id="estimacion">Estimar antes de empezar</h2>
${tbl("Técnicas de estimación", ["Técnica","Qué es","Dato de examen"], [["COCOMO","Modelo constructivo de costes de B. W. Boehm. Submodelos <strong>básico, intermedio y detallado</strong>.","Modos: orgánico, semiacoplado y empotrado."],["Puntos de función","Tamaño funcional visto por el usuario.","Allan Albrecht, IBM, 1979."],["MK II","Variante de puntos de función.","Norma ISO/IEC 20968."],["COSMIC","Cuenta los <em>movimientos de datos</em> (entradas, salidas, lecturas y escrituras) de cada proceso funcional.","Consorcio creado en 1998."],["SLIM (Putnam)","Modelo de gestión del ciclo de vida del software.","Artículo original de 1978."],["Delphi","Consenso de expertos con cuestionarios iterativos y anónimos.","Variante cara a cara: <em>Estimation-Talk-Estimation</em>."]])}
${tbl("Modos de COCOMO", ["Modo","Proyecto típico"], [["Orgánico","Equipo pequeño de programadores con experiencia, en un entorno familiar."],["Semiacoplado","Equipo mixto; complejidad y experiencia intermedias."],["Empotrado","Fuertes restricciones de hardware y de entorno; el más rígido."]])}
<p>En el modelo básico, el <strong>esfuerzo</strong> es <code>E = a · KLOC<sup>b</sup></code> (persona-mes) y la <strong>duración</strong> es <code>D = c · E<sup>d</sup></code> (meses). Para el modo orgánico: a = 2,4; b = 1,05; c = 2,5; d = 0,38.</p>
${note("Ejemplo","Proyecto orgánico de 32 KLOC: E = 2,4 · 32<sup>1,05</sup> ≈ <strong>91,3 persona-mes</strong>; D = 2,5 · 91,3<sup>0,38</sup> ≈ <strong>13,9 meses</strong>; equipo medio ≈ 91,3 / 13,9 ≈ <strong>6,6 personas</strong>.")}
${note("Ojo","Los coeficientes del resto de modos (semiacoplado: a = 3,0 y b = 1,12; empotrado: a = 3,6 y b = 1,20) aparecen en la tabla del manual; compruébalos allí, sobre todo el exponente d, porque varía entre fuentes.")}
<h2 id="planificacion">Planificar: WBS, PERT y Gantt</h2>
${fig("f_gantt_pert.png","A la izquierda, un diagrama de Gantt con cinco tareas en barras; a la derecha, una red PERT con cinco nodos y el camino crítico resaltado","Gantt (calendario) y PERT (dependencias y camino crítico).")}
${tbl("Herramientas de planificación", ["Herramienta","Qué muestra"], [["WBS / EDT","Descomposición jerárquica del trabajo; el primer nivel es el objetivo principal."],["PBS","Descomposición del producto; con la WBS permite obtener las dependencias para PERT."],["PERT","Red de actividades (años 50); calcula el camino crítico y la holgura total."],["Gantt","Barras de tareas sobre una escala temporal."],["Nivelación de recursos","Evita retrasos por cuellos de botella de recursos."]])}
${note("Idea clave","El <strong>camino crítico</strong> es la ruta más larga: sus actividades no tienen holgura y cualquier retraso retrasa el proyecto. Puede haber varias rutas críticas.")}
<h2 id="seguimiento">Seguimiento</h2><ul><li>Combina <strong>recopilar información</strong>, <strong>acciones correctivas</strong> y <strong>gestión de los cambios</strong>; no basta con rellenar formularios.</li><li>La reunión <em>stand-up</em> se hace de pie para que sea breve.</li><li>Los <strong>informes</strong> deben centrarse en lo más sobresaliente del proceso de gestión.</li></ul>`,
q:["¿Qué indica el camino crítico de un diagrama PERT?","La ruta más larga, sin holgura: determina la duración mínima del proyecto."],
ex:"Con a = 2,4; b = 1,05; c = 2,5 y d = 0,38, calcula esfuerzo, duración y tamaño medio del equipo de un proyecto orgánico de 20 KLOC." },

{ t:"Diagramado con UML", min:10, src:"UF2406 · UD3", tags:["UML","diagrama de clases","casos de uso","secuencia","componentes"],
s:"Los 14 diagramas de UML 2.x y cómo se leen los de clases, casos de uso, secuencia, componentes y despliegue.",
sum:["UML tiene 14 diagramas: 7 de estructura y 7 de comportamiento (incluidos 4 de interacción).","En el diagrama de clases, el rombo vacío es agregación y el relleno es composición.","«include» es obligatorio y se reutiliza; «extend» es opcional o condicional."],
h:`<h2 id="familias">Dos familias de diagramas</h2><p><strong>UML</strong> es un lenguaje de modelado, no una metodología, creado por Booch, Jacobson y Rumbaugh. Un diagrama UML no es un documento completo: se complementa con texto.</p>
${fig("f_uml.png","Árbol de los diagramas UML 2.x dividido en estructura (clases, objetos, componentes, despliegue, paquetes) y comportamiento (casos de uso, actividad, secuencia, estados, comunicación)","Los diagramas UML 2.x se agrupan en estructura y comportamiento.")}
${note("Idea clave","UML 2.x define <strong>14 diagramas</strong>: <strong>7 de estructura</strong> (clases, objetos, componentes, estructura compuesta, despliegue, paquetes y perfiles) y <strong>7 de comportamiento</strong> (casos de uso, actividad, máquina de estados y cuatro de interacción: secuencia, comunicación, tiempos y visión global).")}
<h2 id="clases">Diagrama de clases</h2><p>Una clase se dibuja como una caja con tres compartimentos: nombre, atributos y operaciones. La <strong>visibilidad</strong> se marca con <code>+</code> (público), <code>-</code> (privado), <code>#</code> (protegido) y <code>~</code> (paquete). La <strong>multiplicidad</strong> usa valores como <code>1</code>, <code>0..1</code>, <code>*</code> y <code>1..*</code>.</p>
${fig("f_uml_rel.png","Leyenda con las seis relaciones entre clases: asociación, agregación, composición, generalización, dependencia y realización","Notación de las relaciones entre clases.")}
<p>Estas relaciones se explican con código en <a href="poo-19.html">Asociación, agregación y composición</a>. Recuerda que una <strong>interfaz</strong> solo declara: no se puede instanciar, y la implementa un clasificador mediante la relación de <em>realización</em>.</p>
<h2 id="casos">Diagrama de casos de uso</h2>
${tbl("Elementos de un diagrama de casos de uso", ["Elemento","Detalle"], [["Actor","Rol externo que interactúa con el sistema; se nombra por el rol que asume."],["Caso de uso","Funcionalidad del sistema vista desde un usuario externo."],["«include»","Flecha discontinua del caso base al incluido: comportamiento obligatorio y reutilizado."],["«extend»","Comportamiento opcional o condicional que amplía el caso base, con puntos de extensión."]])}
<h2 id="secuencia">Diagrama de secuencia</h2><ul><li>Muestra las <strong>líneas de vida</strong> de los objetos y el <strong>orden temporal</strong> de los mensajes; el tiempo avanza hacia abajo.</li><li>Tipos de mensaje: <strong>síncrono, asíncrono, crear, eliminar y respuesta</strong>.</li><li>El mensaje <em>crear</em> apunta a la caja del objeto; <em>eliminar</em> termina su línea de vida.</li></ul>
<h2 id="despliegue">Componentes y despliegue</h2><p>Un <strong>componente</strong> es una unidad con interfaces <em>provistas</em> y <em>requeridas</em>, formada por uno o más <em>artefactos</em>. El <strong>diagrama de despliegue</strong> muestra la configuración física (nodos y artefactos) y sirve, por ejemplo, para comparar los entornos de desarrollo, preproducción y producción.</p>
${note("Truco","<strong>Estructura = foto</strong> (cómo está montado). <strong>Comportamiento = película</strong> (qué ocurre y en qué orden).")}`,
q:["¿Cuántos diagramas define UML 2.x y cómo se reparten?","14: siete de estructura y siete de comportamiento (cuatro de ellos de interacción)."],
ex:"Dibuja el diagrama de clases de una biblioteca con Socio, Libro y Préstamo; indica visibilidad, multiplicidades y qué relación es una composición." },

{ t:"Desarrollo de la interfaz gráfica de usuario (GUI)", min:8, src:"UF2406 · UD4", tags:["GUI","Swing","AWT","eventos","usabilidad"],
s:"Componentes gráficos en Java, gestión de eventos con oyentes y criterios básicos de usabilidad.",
sum:["Swing amplía AWT con apariencia y comportamiento adaptables.","Un evento lo genera una fuente y lo gestiona un oyente registrado con addActionListener.","Un buen mensaje de error describe el error, ayuda a resolverlo y explica sus consecuencias."],
h:`<h2 id="awt-swing">AWT frente a Swing</h2>
${tbl("Diferencias entre AWT y Swing", ["Aspecto","AWT","Swing"], [["Idea","Primeras bibliotecas gráficas de Java.","Evolución de AWT con una gama muy amplia de funciones."],["Apariencia","Poco flexible.","Apariencia y comportamiento adaptables (arquitectura de componentes)."]])}
<p>Los componentes y contenedores se detallan en <a href="poo-46.html">Componentes gráficos: AWT y Swing</a>; aquí nos centramos en el modelo de eventos y en la usabilidad.</p>
<h2 id="eventos">Modelo de eventos</h2><p>En Java, un <strong>evento</strong> es un objeto. El componente que lo produce es la <strong>fuente</strong>; un objeto <strong>oyente</strong> (<em>listener</em>), registrado con <code>addActionListener</code>, lo gestiona en su método <code>actionPerformed</code>. Más práctica en <a href="poo-47.html">Eventos: programar la interacción</a>.</p>
<pre><code>JButton boton = new JButton("Aceptar");
boton.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        String texto = e.getActionCommand();   // etiqueta del botón
        Object origen = e.getSource();         // quién generó el evento
    }
});
marco.add(boton);   // se añade al contenedor (JFrame o JPanel)</code></pre>
${note("Idea clave","Separar el código que <strong>construye</strong> la interfaz del que hace el <strong>trabajo real</strong>. Con clases internas, el oyente ve todas las variables de instancia de la clase externa.")}
<h2 id="usabilidad">Usabilidad y diseño orientado al usuario</h2>
${tbl("Principios de usabilidad", ["Aspecto","Qué recordar"], [["Percepción","Para el usuario la interfaz <em>es</em> el sistema; un buen diseño hace coincidir la imagen del sistema con la percepción del usuario."],["Tiempo de respuesta","Se caracteriza por dos valores: duración media y variabilidad."],["Ayuda","Integrada (dentro del software) y complementaria (manuales y tutoriales)."],["Mensajes de error","Describen el error, ayudan a resolverlo y explican sus consecuencias."],["Prototipado","Con lenguajes de cuarta generación se muestra pronto el sistema al usuario."]])}`,
q:["¿Qué devuelve getSource() en un ActionEvent y qué getActionCommand()?","getSource() devuelve el objeto que generó el evento; getActionCommand(), la etiqueta o comando asociado."],
ex:"Crea una ventana con un campo de texto y un botón «Saludar» que muestre el nombre introducido en una etiqueta, usando un ActionListener." },

{ t:"Calidad del software: modelos, métricas y madurez", min:8, src:"UF2406 · UD5", tags:["calidad","ISO 9126","CMM","métricas","mantenibilidad"],
s:"Por qué la calidad se gestiona desde el principio, qué características mide ISO 9126 y cómo se clasifican los niveles de madurez CMM.",
sum:["El coste de un fallo crece un orden de magnitud cada vez que cambia la fase.","ISO/IEC 9126 define seis características de calidad.","CMM tiene cinco niveles inclusivos: Inicial, Repetible, Definido, Gestionado y Optimizado."],
h:`<h2 id="coste">El coste de llegar tarde</h2><p>Corregir un fallo cuesta un <strong>orden de magnitud más</strong> cada vez que el desarrollo avanza de fase. Por eso existe el <strong>aseguramiento de la calidad del software (SQA)</strong>. Las prácticas de código se tratan en <a href="poo-24.html">Calidad del código y buenas prácticas</a>.</p>
<h2 id="modelos">Modelos de calidad</h2>
${fig("f_iso9126.png","Seis recuadros con las características ISO 9126: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad","Las seis características de calidad de ISO/IEC 9126.")}
${tbl("Modelos de calidad del software", ["Modelo","Rasgo"], [["McCall","Modelo inicial basado en factores de calidad (operación, revisión y transición)."],["Boehm","Modelo inicial jerárquico."],["ISO 9126","Seis características con subcaracterísticas; evolucionó hacia la familia ISO/IEC 25000."],["CISQ (Bill Curtis)","Cinco características: fiabilidad, eficiencia de rendimiento, seguridad, mantenibilidad y tamaño."]])}
<ul><li><strong>Calidad externa</strong>: la que percibe el usuario. <strong>Calidad interna</strong>: la que no ve (código y arquitectura); se mide antes y permite predecir la externa.</li><li>La mayoría de las <strong>vulnerabilidades</strong> (inyección SQL, XSS…) procede de errores básicos de codificación.</li><li>La <strong>mantenibilidad</strong> se relaciona con la <em>deuda técnica</em>: el coste acumulado por no mantener bien el código.</li><li>El <strong>tamaño</strong> puede ser técnico (líneas de código) o funcional (puntos de función).</li></ul>
<h2 id="cmm">Modelo de madurez CMM</h2>
${tbl("Niveles de madurez CMM", ["Nivel","Nombre","Característica"], [["1","Inicial","Procesos ad hoc, poco predecibles."],["2","Repetible","Gestión básica de proyectos; se repiten los éxitos."],["3","Definido","Procesos documentados y estándar en la organización."],["4","Gestionado","Procesos medidos y controlados cuantitativamente."],["5","Optimizado","Mejora continua."]])}
${note("Ojo","Los niveles son <strong>inclusivos</strong>: para alcanzar uno hay que haber logrado y mantener todos los anteriores.")}
${note("Truco","<strong>I</strong>nicial → <strong>R</strong>epetible → <strong>D</strong>efinido → <strong>G</strong>estionado → <strong>O</strong>ptimizado: «Ingenieros Reales Documentan Grandes Obras».")}`,
q:["¿Cuántas características define ISO/IEC 9126 y cuáles son?","Seis: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad."],
ex:"Clasifica en una característica ISO 9126: «la web carga en menos de 2 s», «se puede cambiar el motor de pago sin reescribir todo», «funciona en Windows y Linux»." },

{ t:"Tipos de pruebas: caja negra, caja blanca y JUnit", min:10, src:"UF2406 · UD6", tags:["pruebas","JUnit","caja negra","caja blanca","depuración"],
s:"Niveles y técnicas de prueba, diferencia entre probar y depurar, pruebas unitarias con JUnit y documentación de pruebas.",
sum:["Caja negra examina entradas y salidas; caja blanca examina la estructura interna.","Probar detecta el fallo; depurar localiza y corrige su causa.","En JUnit, la clase de prueba se llama NombreClaseTest y cada prueba es independiente."],
h:`<h2 id="niveles">Niveles de prueba</h2>
${fig("f_pruebas.png","Pirámide de pruebas con las unitarias en la base, después integración, sistema y aceptación en la cima","Muchas pruebas unitarias en la base y pocas de aceptación arriba.")}
<h2 id="cajas">Caja negra frente a caja blanca</h2>
${tbl("Comparación de pruebas de caja negra y caja blanca", ["","Caja negra","Caja blanca (cristal)"], [["Examina","Solo entradas y salidas; el software es una caja cerrada.","La estructura de control interna del programa."],["Técnicas","Clases de equivalencia y valores límite.","Cobertura de sentencias, ramas y caminos."],["Comprueba","Que los resultados son correctos para los datos dados.","Que se recorren los caminos lógicos del código."]])}
${note("Idea clave","<strong>Clases de equivalencia</strong>: se agrupan las entradas que el programa trata igual y se diseña <em>un caso por clase</em>.")}
<h2 id="depuracion">Depurar no es probar</h2><p>Probar <strong>detecta</strong> el fallo; depurar <strong>localiza y corrige</strong> su causa. El <em>depurador</em> permite ejecutar paso a paso, poner puntos de ruptura e inspeccionar variables. Escribir mensajes de salida funciona, pero es una técnica rudimentaria.</p>
<h2 id="junit">Pruebas unitarias con JUnit</h2>
<pre><code>public class CalculadoraTest {            // convención: NombreClase + Test
    @Test
    public void sumaDosNumeros() {
        assertEquals(5, new Calculadora().suma(2, 3));
    }
}</code></pre>
<ul><li>Cada prueba debe ser <strong>independiente</strong>: no se debe asumir ningún orden de ejecución.</li><li>Las pruebas automatizadas se repiten sin intervención humana, son rápidas y repetibles.</li><li>Al ejecutarlas se obtiene un objeto <code>org.junit.runner.Result</code>.</li></ul>
<h2 id="plan">Plan, casos e informes</h2>
${tbl("Documentos de pruebas", ["Documento","Contenido"], [["Plan de pruebas","Enfoque sistemático para probar el sistema: alcance, recursos y calendario."],["Caso de prueba","Preparación, pasos, resultado esperado y espacio para el resultado real."],["IEEE 829-2008","Estándar de documentación de pruebas de software."],["Seguimiento de ejecución","Cuándo se ejecutó, quién, cuánto tardó y con qué resultado."],["Informes de pruebas","Resumen de resultados para la organización."]])}
${note("Ojo","Las ejecuciones pueden ser manuales o automatizadas, y normalmente se combinan. Si el software es nuevo, conviene duplicar la estimación inicial del calendario de pruebas.")}`,
q:["¿Qué técnica de prueba usa clases de equivalencia y de qué tipo es?","Es una técnica de caja negra: se diseña un caso por cada clase de entradas equivalentes."],
ex:"Una función acepta edades de 18 a 65. Define las clases de equivalencia y los valores límite que probarías." },

{ t:"Excepciones: gestión de errores y buenas prácticas", min:8, src:"UF2406 · UD7", tags:["excepciones","try-catch","finally","throws"],
s:"Jerarquía de excepciones en Java, orden de los catch, finally, excepciones comprobadas y propias.",
sum:["Throwable se divide en Error y Exception; RuntimeException no es comprobada.","Los catch van del tipo más específico al más general.","finally se ejecuta siempre, salvo que termine la JVM o muera el hilo."],
h:`<h2 id="jerarquia">Jerarquía de excepciones</h2><p>Esta lección repasa lo esencial para el examen; el desarrollo completo con ejemplos está en <a href="poo-45.html">Excepciones: tratar errores con objetos</a>.</p>
${fig("f_excepciones.png","Árbol de excepciones de Java: Throwable se divide en Error y Exception; Exception incluye RuntimeException no comprobadas y el resto comprobadas","Jerarquía de excepciones en Java.")}
<h2 id="flujo">try, catch y finally</h2>
${fig("f_trycatch.png","Flujo de un bloque try con catch cuando hay excepción y finally que se ejecuta siempre","Flujo de try, catch y finally.")}
<pre><code>try {
    FileReader f = new FileReader("datos.txt");
} catch (FileNotFoundException e) {      // más específica primero
    System.err.println("No existe: " + e.getMessage());
} catch (Exception e) {                  // más general al final
    throw new MiExcepcion("Error leyendo", e);   // excepción encadenada
} finally {
    // cerrar archivos y conexiones: se ejecuta siempre
}</code></pre>
${tbl("Conceptos clave sobre excepciones", ["Concepto","Qué recordar"], [["Excepción","Objeto generado ante una situación anómala; el sistema busca un manejador recorriendo la pila de llamadas."],["try / catch","El catch debe ir inmediatamente después del try."],["finally","Se ejecuta siempre, salvo que la JVM termine o el hilo muera o se interrumpa."],["throw / throws","<code>throw</code> lanza una excepción; <code>throws</code> la declara en la firma del método."],["Comprobadas","El compilador obliga a capturarlas o declararlas (por ejemplo, IOException)."],["RuntimeException y Error","No son obligatorias: errores de programación o fallos graves de la JVM."],["Propias","Se crean extendiendo <code>Exception</code> o una de sus subclases."]])}
${note("Ojo","Si ningún método de la pila trata la excepción, el programa termina. Capturar <code>Exception</code> a secas es mala práctica: oculta errores concretos.")}
${note("Truco","Orden de los catch: de lo <strong>específico</strong> a lo <strong>general</strong>, como un embudo que se va abriendo.")}`,
q:["¿Cuándo no se ejecuta el bloque finally?","Cuando la JVM termina (por ejemplo con System.exit) o el hilo muere o se interrumpe."],
ex:"Escribe un método que lea un entero de un texto: captura NumberFormatException con un mensaje claro y garantiza en finally el cierre del recurso." },

{ t:"Documentación del software", min:7, src:"UF2406 · UD8", tags:["documentación","Javadoc","estándares","programación literaria"],
s:"Qué documentos genera un proyecto, cómo se genera documentación automática del código y por qué importan los estándares de codificación.",
sum:["Documentar puede costar entre el 20 y el 30 % del esfuerzo de desarrollo.","Javadoc y Doxygen generan manuales de referencia a partir de los comentarios del código.","Knuth defiende la programación literaria: código y explicación juntos."],
h:`<h2 id="tipos">Tipos de documentación</h2>
${tbl("Documentos del proyecto", ["Documento","Para qué sirve","Rasgo"], [["Requisitos","Qué debe hacer el sistema.","Su necesidad crece con la complejidad, el impacto y la vida útil del software."],["Arquitectura","Estructura global.","Parco en detalles y detallado en la explicación."],["Estudio comercial","Justifica las alternativas.","Basado en investigación profunda y sin jerga innecesaria."],["Diseño de base de datos","Diseño conceptual, lógico y físico.","Parte importante del diseño en software empresarial."],["De código","Cómo funciona por dentro.","Estilo de guía de referencia; se genera automáticamente."],["De usuario","Cómo se usa el programa.","A veces la escribe quien conoce bien la API."]])}
<h2 id="automatica">Documentación automática</h2><p>Herramientas como <strong>Javadoc</strong>, <strong>Doxygen</strong>, <strong>NDoc</strong> o <strong>EiffelStudio</strong> extraen los comentarios y especificaciones del código fuente y generan manuales de referencia en texto o HTML. Así la documentación vive junto al código.</p>
<pre><code>/**
 * Calcula el área de un rectángulo.
 * @param base   longitud de la base
 * @param altura longitud de la altura
 * @return el área
 */
public double area(double base, double altura) { return base * altura; }</code></pre>
<h2 id="estandares">Estándares y programación literaria</h2><ul><li><strong>Donald Knuth</strong> defiende la <strong>programación literaria</strong>: escribir código y documentación a la vez y en el mismo sitio.</li><li>Documentar el código es añadir información para que entiendan qué hace los <em>humanos</em>, no solo los ordenadores.</li><li>Los <strong>estándares de codificación</strong> (nombres, indentación, comentarios) mejoran la legibilidad y el mantenimiento. La <strong>indentación</strong> consiste en escribir las estructuras anidadas con espacios o tabuladores delante.</li><li>Documentar puede suponer entre el <strong>20 y el 30 %</strong> del esfuerzo de desarrollo.</li></ul>
${note("Idea clave","Un documento de arquitectura debe ser <strong>parco en detalles y detallado en la explicación</strong>: el código explica el «cómo», el documento explica el «porqué».")}`,
q:["¿Qué herramientas generan documentación a partir de los comentarios del código?","Javadoc, Doxygen, NDoc o EiffelStudio, entre otras."],
ex:"Escribe el comentario Javadoc de un método <code>dividir(int a, int b)</code> que puede lanzar ArithmeticException; incluye @param, @return y @throws." }
];
