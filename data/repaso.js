/* Apuntes de repaso (guía visual de estudio). Datos estructurados: build/templates.mjs los convierte en repaso.html.
   Marcas en los textos: **negrita**, `código`, *cursiva*. Bloques: p, h3, b, fig, tbl, call (clave|ojo|truco|ej), code. */
export const REPASO = [
 {
  "code": "UF2404",
  "name": "Fundamentos: ingeniería del software, metodologías y orientación a objetos",
  "intro": "Base de todo lo demás. Repaso condensado a partir de los documentos de apoyo (INTECO, paradigma OO, modelo E-R y gestión de memoria): ciclos de vida, metodologías tradicionales y ágiles, paradigma orientado a objetos, modelo E-R y recolector de basura. El temario completo de UF2404 está en las lecciones del curso.",
  "units": [
   {
    "id": "UD1",
    "title": "Ingeniería del software y ciclos de vida",
    "hook": "Qué es el software, qué es la ingeniería del software y los modelos de ciclo de vida (cascada, V, iterativo, incremental, espiral, prototipos).",
    "blocks": [
     {
      "t": "p",
      "x": "**Ingeniería del software:** disciplina que aplica un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software. Se apoya en tres **capas**: **procesos**, **métodos** y **herramientas**."
     },
     {
      "t": "call",
      "k": "clave",
      "x": "Las tres capas de la ingeniería del software: **Procesos** (el «qué y cuándo») · **Métodos** (el «cómo») · **Herramientas** (el apoyo automatizado)."
     },
     {
      "t": "h3",
      "x": "Modelos de ciclo de vida"
     },
     {
      "t": "fig",
      "f": "f_cascada_v.png",
      "w": 6.3,
      "cap": "Cascada y V: el segundo relaciona cada fase con su prueba."
     },
     {
      "t": "tbl",
      "head": [
       "Modelo",
       "Descripción",
       "Cuándo encaja"
      ],
      "w": [
       1800,
       4600,
       3238
      ],
      "rows": [
       [
        "**Cascada**",
        "Fases lineales, cada una produce la entrada de la siguiente",
        "Requisitos estables y bien conocidos"
       ],
       [
        "**En V**",
        "Variante de cascada: cada fase de diseño tiene su fase de prueba",
        "Verificación y validación rigurosas"
       ],
       [
        "**Iterativo**",
        "Se repite el ciclo refinando el producto completo",
        "Requisitos que se aclaran con el tiempo"
       ],
       [
        "**Incremental**",
        "Se entrega el sistema en **partes funcionales** sucesivas",
        "Entregas tempranas de valor"
       ],
       [
        "**Espiral**",
        "Iteraciones con **análisis de riesgos** en cada vuelta",
        "Proyectos grandes y de alto riesgo"
       ],
       [
        "**Prototipos**",
        "Se construye una maqueta para validar requisitos con el usuario",
        "Requisitos poco claros / interfaz"
       ]
      ]
     },
     {
      "t": "fig",
      "f": "f_espiral.png",
      "w": 4.6,
      "cap": "Modelo en espiral."
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "**ISO/IEC 12207** establece un **marco de referencia común** para los procesos del ciclo de vida del software. No impone un modelo concreto."
     }
    ],
    "quiz": [
     {
      "q": "Las tres capas de la ingeniería del software son…",
      "o": [
       "Datos, lógica y presentación",
       "Procesos, métodos y herramientas",
       "Análisis, diseño y código",
       "Cliente, servidor y red"
      ],
      "a": 1,
      "e": "Procesos, métodos y herramientas."
     },
     {
      "q": "¿Qué modelo de ciclo de vida asocia cada fase de diseño con una fase de pruebas?",
      "o": [
       "Cascada",
       "En V",
       "Espiral",
       "Prototipos"
      ],
      "a": 1,
      "e": "El modelo en V."
     },
     {
      "q": "La norma ISO/IEC 12207 define…",
      "o": [
       "Calidad del producto",
       "Un marco común de procesos del ciclo de vida",
       "Estimación de costes",
       "Notación UML"
      ],
      "a": 1,
      "e": "Marco común para los procesos del ciclo de vida."
     }
    ]
   },
   {
    "id": "UD2",
    "title": "Metodologías tradicionales y ágiles",
    "hook": "RUP, desarrollo iterativo e incremental, manifiesto ágil, XP, Scrum, DSDM, TDD, integración continua y programación por pares.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. RUP – Rational Unified Process"
     },
     {
      "t": "tbl",
      "head": [
       "Fase",
       "Objetivo"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**Iniciación**",
        "Definir el **alcance** del proyecto"
       ],
       [
        "**Elaboración**",
        "Analizar las necesidades del negocio y definir los **principios arquitectónicos**"
       ],
       [
        "**Construcción**",
        "Crear el **diseño** de la aplicación y el **código** fuente"
       ],
       [
        "**Transición**",
        "**Entregar** el sistema a los usuarios"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "RUP: 4 fases × **9 disciplinas** (6 de **ingeniería**: modelado de negocio, requisitos, análisis y diseño, implementación, pruebas, despliegue · 3 de **soporte**: gestión de configuración y cambios, gestión de proyectos, entorno). Cada iteración termina con un **prototipo**."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**I-E-C-T**: «**I**ngenieros **E**ntregan **C**ódigo **T**odos los días» → Iniciación, Elaboración, Construcción, Transición."
     },
     {
      "t": "h3",
      "x": "2. Manifiesto ágil: 4 valores"
     },
     {
      "t": "tbl",
      "head": [
       "VALORAMOS MÁS…",
       "…QUE"
      ],
      "w": [
       4819,
       4819
      ],
      "hc": true,
      "rows": [
       [
        "**Individuos e interacciones**",
        "procesos y herramientas"
       ],
       [
        "**Software que funciona**",
        "documentación exhaustiva"
       ],
       [
        "**Colaboración con el cliente**",
        "negociación del contrato"
       ],
       [
        "**Respuesta ante el cambio**",
        "seguir un plan"
       ]
      ]
     },
     {
      "t": "p",
      "x": "Principios destacados: el software funcionando es la **medida principal del progreso** · desarrollo **sostenible** (ritmo constante) · **simplicidad** (maximizar el trabajo no hecho) · **equipos auto-organizados** · reflexión periódica para mejorar · la conversación **cara a cara** es la forma más eficaz de comunicar."
     },
     {
      "t": "h3",
      "x": "3. Scrum"
     },
     {
      "t": "fig",
      "f": "f_scrum.png",
      "w": 6.3,
      "cap": "Flujo de Scrum."
     },
     {
      "t": "b",
      "items": [
       "El término viene del **rugby** (Takeuchi y Nonaka, 1986); Schwaber y Sutherland lo presentaron en **OOPSLA '95**.",
       "Enfoque **empírico**: acepta que el problema no puede entenderse del todo al principio.",
       "Reuniones: **Scrum diario** (estado del proyecto), **planificación de iteración**, **revisión** y **retrospectiva**."
      ]
     },
     {
      "t": "h3",
      "x": "4. Otras metodologías y prácticas ágiles"
     },
     {
      "t": "tbl",
      "head": [
       "Nombre",
       "Idea clave"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**XP (Extreme Programming)**",
        "Pruebas **unitarias** (¿hago lo que quise decir?) y de **aceptación** (¿era lo que debía?); simplicidad y retroalimentación"
       ],
       [
        "**DSDM**",
        "Método ágil de desarrollo de sistemas dinámicos; factores críticos de éxito"
       ],
       [
        "**Crystal Clear, AUP**",
        "Otros métodos ágiles (AUP = Proceso Unificado Ágil)"
       ],
       [
        "**TDD**",
        "Desarrollo guiado por pruebas: **primero la prueba**, luego el código"
       ],
       [
        "**Integración continua**",
        "Integrar y probar el código en el repositorio con mucha frecuencia"
       ],
       [
        "**Pair programming**",
        "Dos programadores comparten un puesto: uno escribe, otro revisa"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "**RAD** (Rapid Application Development) y **RUP** son **iterativos e incrementales**. La idea básica: desarrollar en ciclos, aprendiendo de cada versión."
     }
    ],
    "quiz": [
     {
      "q": "¿Cuántas fases tiene RUP?",
      "o": [
       "3",
       "4",
       "5",
       "9"
      ],
      "a": 1,
      "e": "Iniciación, elaboración, construcción y transición (9 son las disciplinas)."
     },
     {
      "q": "El manifiesto ágil valora más…",
      "o": [
       "Procesos y herramientas",
       "Software que funciona",
       "Documentación exhaustiva",
       "Negociación de contrato"
      ],
      "a": 1,
      "e": "Software que funciona sobre documentación exhaustiva."
     },
     {
      "q": "En TDD lo primero que se escribe es…",
      "o": [
       "El código",
       "La prueba",
       "La documentación",
       "El manual"
      ],
      "a": 1,
      "e": "Test Driven Development: primero el test."
     },
     {
      "q": "La palabra Scrum procede del…",
      "o": [
       "Fútbol",
       "Rugby",
       "Baloncesto",
       "Ajedrez"
      ],
      "a": 1,
      "e": "Término del rugby."
     }
    ]
   },
   {
    "id": "UD3",
    "title": "Paradigma orientado a objetos",
    "hook": "Abstracción, características de un lenguaje OO (Alan Kay), características opcionales, historia y metas de calidad (Meyer).",
    "blocks": [
     {
      "t": "p",
      "x": "**Abstracción:** supresión intencionada de algunos detalles de un proceso o artefacto para destacar otros aspectos. Es una técnica para **comprender y manejar sistemas complejos** (ejemplo: las escalas de un mapa)."
     },
     {
      "t": "fig",
      "f": "f_poo.png",
      "w": 6,
      "cap": "Pilares de la POO."
     },
     {
      "t": "h3",
      "x": "Las 6 características básicas de un LOO (Alan Kay, 1993)"
     },
     {
      "t": "tbl",
      "head": [
       "#",
       "Característica"
      ],
      "w": [
       700,
       8938
      ],
      "rows": [
       [
        "1",
        "**Todo es un objeto**"
       ],
       [
        "2",
        "Cada objeto tiene su **propia memoria**, formada a partir de otros objetos"
       ],
       [
        "3",
        "Todo objeto es **instancia de una clase**"
       ],
       [
        "4",
        "Los objetos de la misma clase reciben los **mismos mensajes**; la clase define comportamiento y estructura"
       ],
       [
        "5",
        "Las clases se organizan en un **árbol de raíz única**: la **jerarquía de herencia**"
       ],
       [
        "6",
        "Un programa es un **conjunto de objetos que se comunican mediante mensajes**"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Características opcionales"
     },
     {
      "t": "tbl",
      "head": [
       "Característica",
       "Significado"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**Tipado estático**",
        "Se impone el tipo del objeto en **compilación** → menos errores en ejecución"
       ],
       [
        "**Recogida de basura**",
        "Libera **automáticamente** la memoria de objetos que ya no se usan"
       ],
       [
        "**Concurrencia**",
        "Varios objetos actúan a la vez (hilos)"
       ],
       [
        "**Persistencia**",
        "La existencia del objeto **trasciende en el tiempo** (suele usar una BD)"
       ],
       [
        "**Reflexión**",
        "El programa manipula su propio estado, estructura y comportamiento"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Orientación a objetos no es booleana:** un lenguaje puede ser «más OO» que otro."
     },
     {
      "t": "h3",
      "x": "Metas de la POO: calidad (Bertrand Meyer)"
     },
     {
      "t": "tbl",
      "head": [
       "Parámetros",
       "Incluye",
       "Se consigue con"
      ],
      "w": [
       2400,
       3000,
       4238
      ],
      "hc": true,
      "rows": [
       [
        "**Extrínsecos**",
        "**Fiabilidad** = corrección + robustez",
        "Tipado estático, aserciones, memoria automática, **manejo disciplinado de excepciones**"
       ],
       [
        "**Intrínsecos**",
        "**Modularidad** = extensibilidad + reutilización",
        "Diseño simple, componentes autocontenidos"
       ]
      ]
     },
     {
      "t": "p",
      "x": "**Corrección:** hace con exactitud lo que dice la especificación. **Robustez:** reacciona bien ante condiciones excepcionales (fuera de la especificación). **Meta final:** mejorar la calidad y la **mantenibilidad**."
     },
     {
      "t": "p",
      "x": "**Historia:** Simula → Smalltalk → años 80 (Eiffel, C++) → actualidad."
     }
    ],
    "quiz": [
     {
      "q": "Según Alan Kay, un programa OO es…",
      "o": [
       "Una secuencia de instrucciones",
       "Un conjunto de objetos que se comunican con mensajes",
       "Una colección de funciones",
       "Un grafo de datos"
      ],
      "a": 1,
      "e": "Característica 6."
     },
     {
      "q": "La fiabilidad en la POO se compone de…",
      "o": [
       "Extensibilidad y reutilización",
       "Corrección y robustez",
       "Velocidad y memoria",
       "Portabilidad y usabilidad"
      ],
      "a": 1,
      "e": "Fiabilidad = corrección + robustez."
     },
     {
      "q": "Persistencia es…",
      "o": [
       "Ejecutar varios hilos",
       "Que el objeto existe más allá de la ejecución del programa",
       "Liberar memoria",
       "Comprobar tipos"
      ],
      "a": 1,
      "e": "La existencia del objeto trasciende en el tiempo."
     }
    ]
   },
   {
    "id": "UD4",
    "title": "Programación estructurada vs. POO y modelo E-R",
    "hook": "Diferencias entre paradigmas y repaso del modelo entidad-relación (entidades débiles y especialización).",
    "blocks": [
     {
      "t": "tbl",
      "head": [
       "",
       "ESTRUCTURADA",
       "ORIENTADA A OBJETOS"
      ],
      "w": [
       2000,
       3819,
       3819
      ],
      "hc": true,
      "rows": [
       [
        "**Unidad**",
        "La **función**",
        "La **clase**"
       ],
       [
        "**Enfoque**",
        "Orientada a **acciones**; de lo general a lo particular",
        "Encapsula **datos y procedimientos** en objetos relacionados"
       ],
       [
        "**Lectura**",
        "Se puede leer en **secuencia** (arriba → abajo)",
        "Más compacta pero más lenta de comprender"
       ],
       [
        "**Ventajas**",
        "Sencilla de codificar y de seguir los fallos",
        "Reutilización, mantenimiento más fácil, nuevos tipos a partir de los existentes"
       ]
      ]
     },
     {
      "t": "p",
      "x": "**Estructuras de control:** **secuencial** (una tras otra) · **selectiva** (IF) · **repetitiva** (mientras se cumpla una condición)."
     },
     {
      "t": "h3",
      "x": "Modelo E-R (documento de apoyo)"
     },
     {
      "t": "b",
      "items": [
       "**Entidad débil:** no tiene clave primaria propia; relación **N:1** con la fuerte; su PK = PK de la fuerte + **discriminante** (clave parcial). Se dibuja con **línea doble**.",
       "**Especialización (arriba→abajo)** y **generalización (abajo→arriba)**.",
       "Paso a tablas: entidad fuerte → tabla; **N:M → tabla propia con las dos claves**; **N:1 → clave ajena del lado N**; **1:1 → clave en una de ellas**; atributos **compuestos** → atómicos; **multivaluados** → otra tabla."
      ]
     },
     {
      "t": "call",
      "k": "ej",
      "x": "**Biblioteca:** LIBRO (ISBN, título…) · EJEMPLAR (cod_ejemplar, precio, ocupado) · PIDE_PRESTADO (cod_ejemplar, num_socio, fecha_inicio, fecha_entrega) → ejemplo clásico de N:M convertida en tabla."
     }
    ],
    "quiz": [
     {
      "q": "La unidad de programación en la programación estructurada es…",
      "o": [
       "La clase",
       "El objeto",
       "La función",
       "El módulo gráfico"
      ],
      "a": 2,
      "e": "Estructurada = función; POO = clase."
     },
     {
      "q": "Una relación N:M en E-R se convierte en…",
      "o": [
       "Una clave ajena",
       "Una tabla nueva con ambas claves",
       "Un atributo",
       "Una vista"
      ],
      "a": 1,
      "e": "Tabla propia."
     }
    ]
   },
   {
    "id": "UD5",
    "title": "Gestión de memoria y recolector de basura (J2ME)",
    "hook": "Cómo gestiona la memoria una máquina virtual con recursos limitados.",
    "blocks": [
     {
      "t": "p",
      "x": "En sistemas **móviles** la memoria es limitada, así que la ocupación de la máquina virtual debe ser **mínima** y las tareas de gestión **muy rápidas**."
     },
     {
      "t": "tbl",
      "head": [
       "Tema",
       "Contenido"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**Gestión manual**",
        "El programador reserva y libera memoria (riesgo de fugas y punteros colgantes)"
       ],
       [
        "**Gestión automática**",
        "El sistema libera memoria no usada (**recolector de basura**)"
       ],
       [
        "**Ubicador de memoria (allocator)**",
        "Reserva de memoria: **First Fit**, **Buddy System**, **Suballocators**"
       ],
       [
        "**Recolectores de traza**",
        "**Mark-Sweep**, **Copying**, **Incremental**, **Conservative**"
       ],
       [
        "**Contadores de referencias**",
        "Simple, diferido, de 1 bit…"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Mark-Sweep:** se **marcan** los objetos alcanzables desde las variables del programa (raíces y derivados) y se **barren** (liberan) los no marcados; después puede **compactarse** el heap. En la KVM: *markRootObjects → markNonRootObjects → sweepTheHeap → compactTheHeap*."
     },
     {
      "t": "h3",
      "x": "Entorno de desarrollo"
     },
     {
      "t": "p",
      "x": "**NetBeans** es un **IDE** (entorno de desarrollo integrado) que no solo sirve para Java. Para empezar se necesita **JDK** (con las variables **JAVA_HOME / PATH**), **NetBeans** y, para las prácticas con base de datos, **MySQL**."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué algoritmo marca los objetos alcanzables y luego barre el resto?",
      "o": [
       "First Fit",
       "Mark-Sweep",
       "Buddy System",
       "Copying"
      ],
      "a": 1,
      "e": "Mark-Sweep collection."
     },
     {
      "q": "First Fit, Buddy System y Suballocators son técnicas de…",
      "o": [
       "Recolección de basura",
       "Reserva de memoria",
       "Compilación",
       "Seguridad"
      ],
      "a": 1,
      "e": "Ubicadores de memoria."
     }
    ]
   }
  ]
 },
 {
  "code": "UF2405",
  "name": "Modelo de programación web y bases de datos",
  "intro": "Cómo se construye una aplicación web de varias capas y cómo habla con una base de datos relacional: arquitectura, presentación, diseño relacional, acceso (JDBC/ODBC) y SQL (DDL y DML).",
  "units": [
   {
    "id": "UD1",
    "title": "Introducción al desarrollo de aplicaciones web",
    "hook": "Qué es una aplicación web, quién habla con quién (cliente, servidor web, servidor de aplicaciones, servidor de datos) y con qué protocolos y lenguajes.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Qué es una aplicación web"
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Aplicación web** = software que el usuario utiliza a través de un **navegador**, accediendo a un **servidor web**. Es independiente del sistema operativo, fácil de mantener (no se instala nada en cada PC) y usa un **cliente ligero**."
     },
     {
      "t": "p",
      "x": "La web se apoya en **tres pautas**: cómo se **transfiere** la información (**HTTP**), cómo se **describe** (**HTML**) y cómo se **localiza** (**URL**)."
     },
     {
      "t": "fig",
      "f": "f_http.png",
      "w": 6.3,
      "cap": "Ciclo petición/respuesta: DNS → TCP → HTTP request → HTTP response."
     },
     {
      "t": "p",
      "x": "Funciones del **navegador (browser)**: construir y enviar la petición HTTP, recibir/interpretar/mostrar la respuesta, caché local y gestión de **cookies**."
     },
     {
      "t": "h3",
      "x": "2. Arquitectura cliente/servidor"
     },
     {
      "t": "tbl",
      "head": [
       "Elemento",
       "Qué hace",
       "Ejemplo"
      ],
      "w": [
       2000,
       5000,
       2638
      ],
      "rows": [
       [
        "**Cliente ligero**",
        "Solo presentación; no soporta la lógica de la aplicación",
        "Navegador web"
       ],
       [
        "**Servidor web**",
        "Aloja sitios y aplicaciones; atiende peticiones HTTP las 24 h",
        "Apache, IIS"
       ],
       [
        "**Servidor de aplicaciones**",
        "Ejecuta la lógica de negocio (servidores web de nueva generación)",
        "Tomcat, J2EE"
       ],
       [
        "**Servidor de datos / archivos**",
        "Almacena y comparte datos o archivos; gestiona la BD",
        "SGBD relacional"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "Lo más importante de una aplicación web: **que el cliente haga pocas tareas**. El servidor almacena datos, aplica reglas de negocio y genera el HTML."
     },
     {
      "t": "p",
      "x": "**Tipos de arquitectura:** monocapa · cliente/servidor de **2 capas** · de **3 capas** (presentación + lógica + datos) · **n capas**. En 3 capas se separa lógica de negocio y datos, pero no es obligatoria la separación física."
     },
     {
      "t": "h3",
      "x": "3. Otros servidores (documento de apoyo)"
     },
     {
      "t": "tbl",
      "head": [
       "Servidor",
       "Función"
      ],
      "w": [
       2600,
       7038
      ],
      "rows": [
       [
        "Archivos",
        "Almacena y distribuye ficheros por la red de la organización"
       ],
       [
        "Impresión",
        "Controla impresoras remotas; cola por orden de llegada o importancia"
       ],
       [
        "Correo",
        "Envía correos entre usuarios dentro y fuera de la red"
       ],
       [
        "Fax / Telefonía",
        "Transmite, recibe y distribuye faxes / gestiona la telefonía de la red"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "4. Protocolos: modelo TCP/IP"
     },
     {
      "t": "fig",
      "f": "f_tcpip.png",
      "w": 6.3,
      "cap": "Capas TCP/IP con los protocolos y puertos más repetidos."
     },
     {
      "t": "tbl",
      "head": [
       "Protocolo",
       "Para qué sirve",
       "Detalle de examen"
      ],
      "w": [
       1700,
       4300,
       3638
      ],
      "rows": [
       [
        "**HTTP**",
        "Transmitir documentos web",
        "Protocolo por defecto de la web; **sin estado** (no guarda conexiones)"
       ],
       [
        "**FTP**",
        "Transferencia de archivos",
        "Puerto **20** datos · **21** control"
       ],
       [
        "**DNS**",
        "Traducir nombres de dominio a IP",
        "Nombres ↔ direcciones IP"
       ],
       [
        "**TELNET**",
        "Sesión de trabajo en un ordenador remoto",
        "Terminal remoto"
       ],
       [
        "**SMTP / POP**",
        "Enviar (SMTP) / recibir (POP) correo",
        "Dos protocolos complementarios"
       ],
       [
        "**IP**",
        "Direccionamiento y envío de paquetes",
        "**No** orientado a conexión"
       ],
       [
        "**TCP**",
        "Transporte fiable de datos",
        "**Orientado a conexión**, fiable"
       ],
       [
        "**UDP**",
        "Transporte rápido sin garantías",
        "**No** orientado a conexión; paquetes sin pedir conexión"
       ]
      ]
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**TCP = Teléfono** (marcas, conectas, hablas, confirmas) · **UDP = Buzón** (echas la carta y no esperas respuesta)."
     },
     {
      "t": "h3",
      "x": "5. Tecnologías y lenguajes web"
     },
     {
      "t": "tbl",
      "head": [
       "Rol",
       "Tecnología",
       "Idea clave"
      ],
      "w": [
       2200,
       2200,
       5238
      ],
      "rows": [
       [
        "Estructura",
        "**HTML** / XHTML",
        "Lenguaje de marcas; ficheros .htm / .html; estático"
       ],
       [
        "Presentación",
        "**CSS**",
        "Hojas de estilo en cascada"
       ],
       [
        "Cliente dinámico",
        "**JavaScript**, **AJAX**",
        "Scripts en el navegador; AJAX = interacción sin recargar la página"
       ],
       [
        "Acceso al documento",
        "**DOM**",
        "API estándar (W3C) para acceder y cambiar el contenido del documento"
       ],
       [
        "Servidor dinámico",
        "**PHP · ASP · JSP**",
        "PHP: script interpretado, código abierto · ASP: Microsoft (IIS) · JSP: Java, multiplataforma (Tomcat)"
       ],
       [
        "Histórico",
        "**CGI**",
        "Una de las primeras tecnologías de contenido dinámico"
       ],
       [
        "Plataformas",
        "**J2EE** / Microsoft",
        "Servidores de aplicaciones basados en J2EE o en la plataforma Microsoft completa"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "6. Componentes orientados a objetos"
     },
     {
      "t": "fig",
      "f": "f_poo.png",
      "w": 6,
      "cap": "Cuatro pilares de la POO."
     },
     {
      "t": "p",
      "x": "Un **objeto** tiene **estado** (atributos), **comportamiento** (métodos) e **identidad**. Una **clase** es la plantilla de un grupo de objetos. Relaciones entre clases: **generalización/especialización** (superclases y subclases), **agregación** (objeto compuesto de otros) y **asociación** (conexión con cardinalidad). El manual cita como propiedades: **abstracción, encapsulación, jerarquía y modularidad**."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué protocolo es el predeterminado en la arquitectura web cliente/servidor y no guarda información de conexiones?",
      "o": [
       "FTP",
       "HTTP",
       "SMTP",
       "TELNET"
      ],
      "a": 1,
      "e": "HTTP transmite documentos web y es un protocolo sin estado."
     },
     {
      "q": "En FTP, ¿qué puerto se usa para el flujo de datos?",
      "o": [
       "21",
       "80",
       "20",
       "25"
      ],
      "a": 2,
      "e": "20 = datos; 21 = control."
     },
     {
      "q": "¿Cuál es una característica esencial del cliente ligero?",
      "o": [
       "Ejecuta toda la lógica de negocio",
       "Solo se ocupa de la presentación",
       "Almacena la base de datos",
       "Sustituye al servidor web"
      ],
      "a": 1,
      "e": "El cliente ligero no soporta la lógica de la aplicación."
     },
     {
      "q": "¿Qué protocolo de transporte NO está orientado a conexión?",
      "o": [
       "TCP",
       "HTTP",
       "UDP",
       "FTP"
      ],
      "a": 2,
      "e": "UDP envía paquetes sin establecer conexión previa."
     }
    ]
   },
   {
    "id": "UD2",
    "title": "Arquitectura multicapa (N-tier)",
    "hook": "Separar presentación, lógica de negocio y datos: por qué, cómo y con qué patrón (MVC).",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Del cliente/servidor a n capas"
     },
     {
      "t": "p",
      "x": "El modelo **cliente/servidor** (años 80): el cliente solicita servicios y el servidor los presta y centraliza recursos. Evoluciona a la arquitectura **de dos niveles**, a la de **tres capas** y a **n capas** (con más servidores: chat, correo…). En sistemas distribuidos el **middleware** actúa de intermediario entre cliente y servidor y se ejecuta en ambas partes."
     },
     {
      "t": "fig",
      "f": "f_3capas.png",
      "w": 6.3,
      "cap": "Modelo de tres capas en una aplicación web."
     },
     {
      "t": "tbl",
      "head": [
       "Capa",
       "Responsabilidad",
       "Claves"
      ],
      "w": [
       2300,
       4300,
       3038
      ],
      "rows": [
       [
        "**Presentación**",
        "Interfaz de usuario; cómo se presenta la aplicación",
        "Solo presenta y maneja datos con objetos de la capa de negocio"
       ],
       [
        "**Lógica de negocio**",
        "Enlace usuario ↔ BD; reglas de negocio; procesa peticiones",
        "Capa **intermedia**, reutilizable; aísla presentación y datos"
       ],
       [
        "**Datos**",
        "Almacenamiento y acceso a los datos",
        "SGBD, ficheros"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "El reparto de procesos entre capas se llama **procesamiento distribuido**. El objetivo del modelo en capas es **repartir responsabilidades de forma jerárquica** y separarlas con seguridad."
     },
     {
      "t": "h3",
      "x": "2. Propiedades de una buena aplicación multicapa"
     },
     {
      "t": "fig",
      "f": "f_acid.png",
      "w": 6.3,
      "cap": "Propiedades ACID de toda aplicación transaccional."
     },
     {
      "t": "p",
      "x": "Además de **transaccional (ACID)**, debe ser **escalable**: poder crecer en volumen de carga sin tener que rediseñarse."
     },
     {
      "t": "h3",
      "x": "3. Patrón Modelo-Vista-Controlador"
     },
     {
      "t": "fig",
      "f": "f_mvc.png",
      "w": 4.6,
      "cap": "MVC separa interfaz gráfica y código de programación."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**M**odelo = **M**is datos · **V**ista = lo que **V**eo · **C**ontrolador = el que **C**oordina."
     },
     {
      "t": "h3",
      "x": "4. Lógica de negocio"
     },
     {
      "t": "b",
      "items": [
       "Las **reglas de negocio** cambian con más frecuencia que las tareas que soportan → se **encapsulan en componentes**.",
       "Lo habitual: **componentes orientados a objetos** sin código de interfaz ni de acceso a datos.",
       "Dos formas de organizar la lógica: **diseño procedimental** o **diseño orientado a objetos** (datos + comportamiento).",
       "Separar en capas lógicas da **flexibilidad** de ubicación física: la lógica puede ejecutarse en un servidor de aplicaciones."
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "No confundas **capa** (separación lógica) con **nivel/tier** (separación física). Tres capas no implican tres máquinas."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué tres capas forman el modelo clásico de una aplicación web?",
      "o": [
       "Vista, red y disco",
       "Presentación, lógica de negocio y datos",
       "Cliente, router y servidor DNS",
       "HTML, CSS y JavaScript"
      ],
      "a": 1,
      "e": "Presentación + aplicación/negocio + datos."
     },
     {
      "q": "En MVC, ¿qué componente recibe los eventos del usuario y coordina?",
      "o": [
       "Modelo",
       "Vista",
       "Controlador",
       "Middleware"
      ],
      "a": 2,
      "e": "El controlador recibe acciones y actualiza el modelo/vista."
     },
     {
      "q": "¿Qué propiedad ACID asegura que las transacciones concurrentes no se interfieran?",
      "o": [
       "Atomicidad",
       "Consistencia",
       "Aislamiento",
       "Durabilidad"
      ],
      "a": 2,
      "e": "Aislamiento = independencia entre transacciones."
     },
     {
      "q": "Las reglas de negocio se encapsulan en componentes porque…",
      "o": [
       "Nunca cambian",
       "Cambian con frecuencia",
       "Sustituyen a la base de datos",
       "Son código de interfaz"
      ],
      "a": 1,
      "e": "Cambian más que las tareas concretas a las que dan soporte."
     }
    ]
   },
   {
    "id": "UD3",
    "title": "La capa de presentación",
    "hook": "HTML, DHTML, lenguajes de script y la diferencia entre lenguajes de cliente y de servidor.",
    "blocks": [
     {
      "t": "p",
      "x": "La capa de presentación se ocupa del **formato**: cómo se visualiza la información. Su base es **HTML** (HyperText Markup Language), lenguaje de **etiquetas** `<...>` heredadas de SGML. Se necesitan dos herramientas: un **editor HTML** y un **navegador**."
     },
     {
      "t": "code",
      "x": "<html>\n  <head> <title>Mi página</title> </head>   <!-- encabezamiento: valores del documento -->\n  <body>\n    <p>Un párrafo</p>\n    <a href=\"otra.html\">Enlace</a>\n  </body>\n</html>"
     },
     {
      "t": "tbl",
      "head": [
       "Etiqueta",
       "Función"
      ],
      "w": [
       2600,
       7038
      ],
      "rows": [
       [
        "`<html> … </html>`",
        "Inicio y fin de todo documento HTML"
       ],
       [
        "`<head>`",
        "Encabezamiento: define valores para todo el documento"
       ],
       [
        "`<p>`, `<pre>`",
        "Párrafo · texto preformateado"
       ],
       [
        "Listas",
        "Numeradas, no numeradas y de definición"
       ],
       [
        "`<a name>` / `<a href>`",
        "Destino de un vínculo / enlace al destino"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "HTML dinámico (DHTML)"
     },
     {
      "t": "p",
      "x": "Conjunto de técnicas para dar **control absoluto al diseñador** sobre la página: **hojas de estilo en cascada (CSS)**, control de la **colocación de objetos** y el **modelo dinámico de objetos**, núcleo de DHTML que permite scripts, cambios de estilo y atributos."
     },
     {
      "t": "h3",
      "x": "Lado cliente vs. lado servidor"
     },
     {
      "t": "tbl",
      "head": [
       "",
       "Lado CLIENTE",
       "Lado SERVIDOR"
      ],
      "w": [
       2000,
       3819,
       3819
      ],
      "hc": true,
      "rows": [
       [
        "**Se ejecuta en**",
        "El navegador (no hay que transformar los datos)",
        "El servidor, que envía al cliente el resultado ya procesado"
       ],
       [
        "**Lenguajes**",
        "HTML · JavaScript · Applets Java · VBScript · Flash · CSS",
        "JSP/Servlets · PHP · ASP"
       ],
       [
        "**Ejemplos clave**",
        "JavaScript: scripts dentro del HTML, basado en objetos. Applet: programa Java dentro de la página, más difícil que JS pero independiente de navegador y SO",
        "JSP: Java, requiere contenedor de servlets (**Apache Tomcat**). PHP: código abierto, incrustado en HTML. ASP: Microsoft, requiere **IIS**"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "**VBScript** solo es compatible con **Internet Explorer**; está basado en Visual Basic y es muy parecido a JavaScript. Un **script** es un pequeño programa incluido en el HTML; su ejecución se dispara con un **evento**."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "¿Cliente o servidor? Si el usuario puede ver el código en «Ver código fuente» → **cliente**. Si solo recibe HTML resultante → **servidor** (PHP, JSP, ASP)."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué lenguaje se ejecuta en el servidor?",
      "o": [
       "JavaScript",
       "CSS",
       "PHP",
       "Flash"
      ],
      "a": 2,
      "e": "PHP se interpreta en el servidor."
     },
     {
      "q": "¿Qué servidor web suele ser necesario para ejecutar JSP?",
      "o": [
       "IIS",
       "Apache Tomcat",
       "Internet Explorer",
       "Apache sin contenedor"
      ],
      "a": 1,
      "e": "Tomcat es un contenedor de servlets/JSP."
     },
     {
      "q": "¿Qué etiqueta define valores para todo el documento HTML?",
      "o": [
       "<body>",
       "<head>",
       "<p>",
       "<a>"
      ],
      "a": 1,
      "e": "El encabezamiento comienza con <head>."
     },
     {
      "q": "VBScript es compatible solo con…",
      "o": [
       "Firefox",
       "Safari",
       "Internet Explorer",
       "Opera"
      ],
      "a": 2,
      "e": "Solo IE lo soporta."
     }
    ]
   },
   {
    "id": "UD4",
    "title": "Diseño de bases de datos relacionales",
    "hook": "Terminología relacional, claves, restricciones, modelo entidad-relación y su paso a tablas.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Evolución de los modelos"
     },
     {
      "t": "p",
      "x": "**Jerárquico** (niveles entre campos) → **Red** (más de una conexión entre niveles) → **Relacional** (tablas, el más utilizado) → modelos basados en **objetos**. El modelo relacional resuelve la **repetición de datos** entre tablas."
     },
     {
      "t": "h3",
      "x": "2. Terminología relacional"
     },
     {
      "t": "tbl",
      "head": [
       "Teoría",
       "En la práctica",
       "Detalle"
      ],
      "w": [
       2300,
       2300,
       5038
      ],
      "rows": [
       [
        "**Relación**",
        "Tabla",
        "Conjunto de filas con valores **atómicos** (indivisibles)"
       ],
       [
        "**Tupla**",
        "Fila / registro",
        "Cada fila de la tabla"
       ],
       [
        "**Atributo**",
        "Columna",
        "Nombre único dentro de la tabla"
       ],
       [
        "**Grado**",
        "Nº de columnas",
        "Número de atributos de la relación"
       ],
       [
        "**Dominio**",
        "Valores posibles",
        "Valores permitidos de un atributo"
       ],
       [
        "**NULL**",
        "Valor desconocido",
        "Evitarlo en lo posible: provoca errores al manipular datos"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "3. Claves y restricciones"
     },
     {
      "t": "tbl",
      "head": [
       "Concepto",
       "Definición"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**Clave candidata**",
        "Conjunto de atributos que podrían identificar cada tupla"
       ],
       [
        "**Clave primaria (PK)**",
        "La candidata elegida; no se repite y **no admite nulos**"
       ],
       [
        "**Clave foránea / ajena (FK)**",
        "Clave primaria de otra relación, propagada como referencia"
       ],
       [
        "**Integridad de entidad**",
        "Ninguna PK puede tomar valor nulo"
       ],
       [
        "**Integridad referencial**",
        "Una FK debe referirse a una tupla que **exista** en la otra relación"
       ],
       [
        "**Restricción de dominio / clave**",
        "Valores atómicos · no puede haber tuplas repetidas"
       ]
      ]
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**PK = Pasaporte único** (identifica y nunca vacío) · **FK = Fichaje en otra tabla** (apunta a algo que ya existe)."
     },
     {
      "t": "h3",
      "x": "4. Modelo entidad-relación (E-R)"
     },
     {
      "t": "tbl",
      "head": [
       "Elemento",
       "Representación",
       "Notas"
      ],
      "w": [
       2400,
       3000,
       4238
      ],
      "rows": [
       [
        "**Entidad fuerte**",
        "Rectángulo (nombre en MAYÚSCULAS)",
        "Se identifica por sus propios atributos clave"
       ],
       [
        "**Entidad débil**",
        "Rectángulo dentro de otro",
        "Depende de una fuerte; relación N:1; PK = PK de la fuerte + **discriminante**"
       ],
       [
        "**Atributo**",
        "Elipse (minúsculas)",
        "El subrayado marca la clave primaria"
       ],
       [
        "**Relación**",
        "Rombo",
        "**Grado** = nº de entidades que participan"
       ]
      ]
     },
     {
      "t": "fig",
      "f": "f_er.png",
      "w": 6.3,
      "cap": "Cardinalidades y cómo se transforman al modelo relacional."
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Generalización/especialización:** la **superclase** reúne atributos comunes y las **subclases** los heredan (**herencia de propiedades**). Se puede pasar a tablas de dos formas: **(1)** una tabla para la entidad de nivel superior + una por subclase con la clave, o **(2)** una tabla por entidad con todos sus atributos locales."
     },
     {
      "t": "h3",
      "x": "5. Reglas de transformación E-R → relacional"
     },
     {
      "t": "tbl",
      "head": [
       "Elemento E-R",
       "Resultado en tablas"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "Entidad",
        "Una tabla con sus atributos; la PK es el atributo identificador"
       ],
       [
        "Relación **1:N**",
        "No crea tabla: se añade la **clave ajena** en el lado N"
       ],
       [
        "Relación **1:1**",
        "La PK de una entidad pasa como clave ajena a la otra"
       ],
       [
        "Relación **N:M**",
        "Se transforma en **una nueva tabla** con las PK de ambas entidades como clave primaria"
       ],
       [
        "Relación **recursiva / ternaria**",
        "Se trata de forma similar a N:M (la ternaria N:1:1 usa la PK del lado N)"
       ],
       [
        "Atributos compuestos / multivaluados",
        "Se descomponen en atómicos; los multivaluados dan lugar a otra tabla"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "6. Normalización exprés"
     },
     {
      "t": "tbl",
      "head": [
       "Forma normal",
       "Exige"
      ],
      "w": [
       2200,
       7438
      ],
      "rows": [
       [
        "**1FN**",
        "Todos los atributos **atómicos** (sin grupos repetidos)"
       ],
       [
        "**2FN**",
        "1FN + cada atributo no clave depende de **toda** la clave (sin dependencias parciales)"
       ],
       [
        "**3FN**",
        "2FN + ningún atributo no clave depende de **otro no clave** (sin dependencias transitivas)"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ej",
      "x": "**Del objeto a la tabla:** clase → tabla · objeto → fila · atributo → columna · herencia → una de las estrategias del punto 4."
     }
    ],
    "quiz": [
     {
      "q": "Una relación N:M en el modelo E-R se transforma en…",
      "o": [
       "Una clave ajena en una tabla",
       "Una nueva tabla con las dos claves primarias",
       "Un atributo multivaluado",
       "Nada: no se transforma"
      ],
      "a": 1,
      "e": "La relación N:M origina tabla propia."
     },
     {
      "q": "¿Qué restricción impide que una clave primaria sea NULL?",
      "o": [
       "Integridad referencial",
       "Integridad de entidad",
       "Restricción de dominio",
       "Clave candidata"
      ],
      "a": 1,
      "e": "Integridad de entidad."
     },
     {
      "q": "El grado de una relación (tabla) es…",
      "o": [
       "Su número de filas",
       "Su número de atributos",
       "Su número de claves",
       "Su número de tablas relacionadas"
      ],
      "a": 1,
      "e": "Grado = nº de atributos."
     },
     {
      "q": "Una entidad débil se representa con…",
      "o": [
       "Un rombo",
       "Una elipse",
       "Un rectángulo dentro de otro",
       "Un círculo"
      ],
      "a": 2,
      "e": "Doble rectángulo."
     }
    ]
   },
   {
    "id": "UD5",
    "title": "Acceso a bases de datos relacionales: capa de acceso a datos",
    "hook": "APIs y drivers (ODBC, JDBC…), seguridad, sentencias de consulta, procedimientos almacenados y transacciones.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Niveles ANSI/SPARC"
     },
     {
      "t": "fig",
      "f": "f_ansi.png",
      "w": 6,
      "cap": "Tres niveles de descripción de una base de datos."
     },
     {
      "t": "h3",
      "x": "2. APIs, drivers y conectividad"
     },
     {
      "t": "tbl",
      "head": [
       "Tecnología",
       "Qué es"
      ],
      "w": [
       2300,
       7338
      ],
      "rows": [
       [
        "**API**",
        "Conjunto de funciones/procedimientos de una biblioteca, usable por otro software como capa de abstracción"
       ],
       [
        "**CGI**",
        "Interfaz de pasarela común: permite al servidor web comunicarse con programas o scripts externos"
       ],
       [
        "**ISAPI**",
        "Más rápida que CGI; integrada en el servidor (IIS)"
       ],
       [
        "**ODBC**",
        "Open DataBase Connectivity: estándar de acceso a BD"
       ],
       [
        "**JDBC**",
        "Java DataBase Connectivity: conectividad Java ↔ SGBD; **inspirado en ODBC**"
       ],
       [
        "**OLE DB / ADO**",
        "Tecnologías Microsoft para acceder a distintos orígenes de datos"
       ],
       [
        "**Middleware**",
        "Intermediario entre cliente y servidor"
       ]
      ]
     },
     {
      "t": "fig",
      "f": "f_jdbc.png",
      "w": 6.3,
      "cap": "Cadena de conexión JDBC y pasos de código."
     },
     {
      "t": "tbl",
      "head": [
       "Tipo de driver JDBC",
       "Idea"
      ],
      "w": [
       4200,
       5438
      ],
      "rows": [
       [
        "**Puente JDBC-ODBC**",
        "Traduce JDBC a llamadas ODBC"
       ],
       [
        "**Java parcialmente nativo** (Java/binario)",
        "Usa librerías nativas del SGBD"
       ],
       [
        "**Java nativo – red** (middleware)",
        "Se comunica con un servidor intermedio"
       ],
       [
        "**Java nativo JDBC – independiente**",
        "100 % Java, habla directo con la BD"
       ]
      ]
     },
     {
      "t": "p",
      "x": "JDBC admite acceso en **dos capas** (aplicación ↔ BD directamente) y en **tres capas** (aplicación ↔ capa intermedia ↔ BD)."
     },
     {
      "t": "h3",
      "x": "3. Seguridad: usuarios y permisos"
     },
     {
      "t": "code",
      "x": "GRANT SELECT, INSERT ON empleados TO usuario1;   -- concede permisos\nREVOKE INSERT ON empleados FROM usuario1;        -- retira permisos"
     },
     {
      "t": "p",
      "x": "El **administrador de la BD** concede permisos. Se accede con un **inicio de sesión** (de Windows o de SQL con usuario y contraseña) al que se asigna permiso sobre la BD."
     },
     {
      "t": "h3",
      "x": "4. Sentencia SELECT y formas de usar SQL"
     },
     {
      "t": "fig",
      "f": "f_select.png",
      "w": 6.3,
      "cap": "Orden lógico de evaluación de una consulta."
     },
     {
      "t": "b",
      "items": [
       "**ALL** devuelve todas las filas · **DISTINCT** elimina duplicados · `*` = todas las columnas.",
       "**INTO** crea una tabla nueva con el resultado · **GROUP BY** agrupa · **UNION** combina resultados de varias consultas.",
       "**SQL interactivo** (llamada directa) · **SQL embebido** (requiere precompilador) · **SQL/CLI** (llamadas a librerías)."
      ]
     },
     {
      "t": "h3",
      "x": "5. Procedimientos almacenados"
     },
     {
      "t": "p",
      "x": "Conjunto de **instrucciones SQL** guardadas en el servidor que definen un proceso. **Del sistema:** en la base *Master*, prefijo **sp_**. **De usuario:** locales o temporales. Sirven para lógica condicional, cálculos complejos y validación, y se ejecutan con **EXEC**."
     },
     {
      "t": "h3",
      "x": "6. Transacciones"
     },
     {
      "t": "code",
      "x": "BEGIN TRANSACTION;\n  UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;\n  UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;\nCOMMIT TRANSACTION;      -- confirma todo\n-- ROLLBACK TRANSACTION;  -- deshace todo"
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**COMMIT** = guardar definitivamente · **ROLLBACK** = deshacer. En una **transacción distribuida** (varios servidores a la vez) la **atomicidad** exige que **todos** confirmen o **todos** deshagan."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué estándar de conectividad es el de Java y está inspirado en ODBC?",
      "o": [
       "ISAPI",
       "JDBC",
       "CGI",
       "OLE DB"
      ],
      "a": 1,
      "e": "JDBC deriva de ODBC."
     },
     {
      "q": "¿Qué sentencia retira permisos a un usuario?",
      "o": [
       "GRANT",
       "DROP",
       "REVOKE",
       "DENY TABLE"
      ],
      "a": 2,
      "e": "REVOKE revoca o deniega permisos."
     },
     {
      "q": "Los procedimientos almacenados del sistema se identifican con el prefijo…",
      "o": [
       "usr_",
       "sys_",
       "sp_",
       "proc_"
      ],
      "a": 2,
      "e": "sp_, en la base de datos Master."
     },
     {
      "q": "¿Qué sentencia deshace los cambios de una transacción fallida?",
      "o": [
       "COMMIT",
       "ROLLBACK",
       "TRUNCATE",
       "SAVE"
      ],
      "a": 1,
      "e": "ROLLBACK TRANSACTION elimina las modificaciones."
     }
    ]
   },
   {
    "id": "UD6",
    "title": "Lenguajes de definición de datos (DDL)",
    "hook": "CREATE, ALTER, DROP y TRUNCATE sobre bases de datos, tablas, vistas, triggers y procedimientos.",
    "blocks": [
     {
      "t": "p",
      "x": "**SQL** está estandarizado por **ANSI/ISO** (la versión de referencia del manual es **SQL-92**). Se compone de **sentencias, cláusulas, operadores y funciones agregadas**. Sus grandes bloques: **DDL** (define estructura) y **DML** (manipula datos)."
     },
     {
      "t": "tbl",
      "head": [
       "Sentencia",
       "Acción",
       "Aplica a"
      ],
      "w": [
       2100,
       3400,
       4138
      ],
      "hc": true,
      "rows": [
       [
        "**CREATE**",
        "Crea objetos",
        "Bases de datos, tablas, vistas, dominios, procedimientos, triggers"
       ],
       [
        "**ALTER**",
        "Modifica objetos",
        "Los mismos objetos (p. ej. añadir/quitar columnas)"
       ],
       [
        "**DROP**",
        "Elimina el objeto entero",
        "Bases de datos, tablas, vistas, triggers, procedimientos"
       ],
       [
        "**TRUNCATE**",
        "Vacía todas las filas de una tabla",
        "Tablas"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Crear una tabla con restricciones"
     },
     {
      "t": "code",
      "x": "CREATE TABLE empleado (\n  dni        CHARACTER VARYING(9) PRIMARY KEY,\n  nombre     CHARACTER VARYING(40) NOT NULL,\n  sueldo     DECIMAL(8,2) DEFAULT 1000 CHECK (sueldo > 0),\n  email      CHARACTER VARYING(60) UNIQUE,\n  cod_dep    INTEGER,\n  FOREIGN KEY (cod_dep) REFERENCES departamento (cod_dep)\n);"
     },
     {
      "t": "tbl",
      "head": [
       "Restricción",
       "Efecto"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**PRIMARY KEY**",
        "Identifica la fila; única y no nula"
       ],
       [
        "**FOREIGN KEY … REFERENCES**",
        "Integridad referencial con otra tabla"
       ],
       [
        "**UNIQUE**",
        "Evita valores duplicados en columnas que no son la clave primaria"
       ],
       [
        "**NOT NULL**",
        "Prohíbe valores nulos"
       ],
       [
        "**DEFAULT**",
        "Valor por defecto al crear la columna"
       ],
       [
        "**CHECK**",
        "Control de validación del valor introducido"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Vistas, triggers y procedimientos"
     },
     {
      "t": "b",
      "items": [
       "**Vista:** tabla **virtual** derivada de otras (pertenece al esquema externo); una modificación a través de ella solo afecta a **una** de las tablas originales.",
       "**Trigger (disparador):** procedimiento almacenado especial que se ejecuta **automáticamente** ante un evento. Tipos: **DDL** y **DML**. Se define **BEFORE** o **AFTER** del evento; **OLD / NEW** solo en triggers definidos **por filas**.",
       "**Procedimiento almacenado:** bloque de SQL guardado en el servidor."
      ]
     },
     {
      "t": "h3",
      "x": "DROP vs. TRUNCATE vs. DELETE"
     },
     {
      "t": "tbl",
      "head": [
       "",
       "DELETE",
       "TRUNCATE",
       "DROP"
      ],
      "w": [
       2000,
       2546,
       2546,
       2546
      ],
      "hc": true,
      "rows": [
       [
        "**Lenguaje**",
        "DML",
        "DDL (según el manual)",
        "DDL"
       ],
       [
        "**Qué quita**",
        "Filas (con o sin WHERE)",
        "Todas las filas",
        "La tabla entera (estructura incluida)"
       ],
       [
        "**Velocidad**",
        "Registra cada eliminación",
        "Más rápido",
        "—"
       ],
       [
        "**Estructura**",
        "Se mantiene",
        "Se mantiene",
        "Desaparece"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "**TRUNCATE** casi siempre es más rápido que un **DELETE** sin condiciones, porque DELETE registra cada fila eliminada."
     },
     {
      "t": "p",
      "x": "Los **lenguajes de cuarta generación (4GL)** son no procedurales y orientados a un objetivo concreto (generadores de informes, de CRUD, etc.)."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué sentencia DDL elimina por completo una tabla y su estructura?",
      "o": [
       "DELETE",
       "TRUNCATE",
       "DROP",
       "ALTER"
      ],
      "a": 2,
      "e": "DROP borra el objeto."
     },
     {
      "q": "UNIQUE sirve para…",
      "o": [
       "Definir la PK",
       "Evitar duplicados en columnas que no son clave primaria",
       "Validar rangos",
       "Crear una vista"
      ],
      "a": 1,
      "e": "Asegura valores no repetidos."
     },
     {
      "q": "Una vista es…",
      "o": [
       "Una tabla física duplicada",
       "Una tabla virtual derivada de otras",
       "Un índice",
       "Un trigger"
      ],
      "a": 1,
      "e": "No tiene correspondencia física."
     },
     {
      "q": "OLD y NEW solo se pueden usar en triggers definidos…",
      "o": [
       "Por sentencia",
       "Por filas",
       "DDL",
       "Antes de CREATE"
      ],
      "a": 1,
      "e": "Triggers por filas (FOR EACH ROW)."
     }
    ]
   },
   {
    "id": "UD7",
    "title": "Manipulación de los datos (DML)",
    "hook": "SELECT, INSERT, UPDATE, DELETE, JOIN, UNION y subconsultas.",
    "blocks": [
     {
      "t": "code",
      "x": "SELECT e.nombre, d.nombre AS departamento, SUM(e.sueldo) AS total\nFROM   empleado e\nINNER JOIN departamento d ON e.cod_dep = d.cod_dep\nWHERE  e.sueldo > 1000\nGROUP  BY e.nombre, d.nombre\nHAVING SUM(e.sueldo) > 2000\nORDER  BY total DESC;"
     },
     {
      "t": "tbl",
      "head": [
       "Sentencia",
       "Sintaxis básica",
       "Nota clave"
      ],
      "w": [
       1700,
       4500,
       3438
      ],
      "rows": [
       [
        "**SELECT**",
        "SELECT cols FROM tabla [WHERE …]",
        "Consulta; cláusulas WHERE, GROUP BY, HAVING, ORDER BY"
       ],
       [
        "**INSERT**",
        "INSERT INTO t (cols) VALUES (valores);",
        "Individual o múltiple (también con SELECT); columnas omitidas → **NULL**"
       ],
       [
        "**UPDATE**",
        "UPDATE t SET col = valor WHERE …",
        "Solo **una tabla a la vez**; cuidado con la integridad de la PK"
       ],
       [
        "**DELETE**",
        "DELETE FROM t WHERE …",
        "Solo de una tabla; si es una vista, también se borra en la tabla"
       ]
      ]
     },
     {
      "t": "p",
      "x": "**Funciones agregadas:** **SUM, AVG, COUNT, MAX, MIN**. **Operadores** de comparación (=, <>, <, >…), lógicos (AND, OR, NOT) y aritméticos."
     },
     {
      "t": "h3",
      "x": "Combinaciones de tablas"
     },
     {
      "t": "fig",
      "f": "f_joins.png",
      "w": 6.3,
      "cap": "INNER, LEFT, RIGHT y FULL JOIN."
     },
     {
      "t": "b",
      "items": [
       "**INNER JOIN** (combinación interna): solo las filas con coincidencia en **ambas** tablas.",
       "**LEFT / RIGHT JOIN** (combinación externa): todas las filas de la tabla izquierda / derecha; si no hay pareja, las columnas aparecen como **NULL**.",
       "**UNION:** mezcla en un solo conjunto los resultados de dos o más consultas."
      ]
     },
     {
      "t": "h3",
      "x": "Subconsultas"
     },
     {
      "t": "p",
      "x": "Una **subconsulta** es un **SELECT dentro de otro SELECT**. Puede devolver una fila y una columna, varias filas y una columna, o varias filas y columnas. Se usan operadores de comparación simples (=, <>) o de conjunto (**IN, ANY, ALL, EXISTS**)."
     },
     {
      "t": "code",
      "x": "SELECT nombre FROM empleado\nWHERE sueldo > (SELECT AVG(sueldo) FROM empleado);"
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**WHERE** filtra **filas** antes de agrupar · **HAVING** filtra **grupos** después de agrupar."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué función agregada devuelve el número de filas?",
      "o": [
       "SUM",
       "COUNT",
       "MAX",
       "AVG"
      ],
      "a": 1,
      "e": "COUNT cuenta."
     },
     {
      "q": "¿Qué JOIN devuelve solo las filas coincidentes en ambas tablas?",
      "o": [
       "LEFT JOIN",
       "RIGHT JOIN",
       "INNER JOIN",
       "UNION"
      ],
      "a": 2,
      "e": "INNER JOIN = intersección por la condición."
     },
     {
      "q": "¿Qué cláusula filtra los grupos creados con GROUP BY?",
      "o": [
       "WHERE",
       "HAVING",
       "ORDER BY",
       "INTO"
      ],
      "a": 1,
      "e": "HAVING filtra después de agrupar."
     },
     {
      "q": "Una subconsulta es…",
      "o": [
       "Una tabla temporal",
       "Un SELECT dentro de otro SELECT",
       "Un tipo de JOIN",
       "Un procedimiento"
      ],
      "a": 1,
      "e": "Definición literal de subconsulta."
     }
    ]
   }
  ]
 },
 {
  "code": "UF2406",
  "name": "El ciclo de vida del desarrollo de aplicaciones",
  "intro": "Todo el recorrido de un proyecto: modelos de ciclo de vida y metodologías, estimación y planificación, UML, interfaces gráficas, calidad, pruebas, excepciones y documentación.",
  "units": [
   {
    "id": "UD1",
    "title": "Proceso de ingeniería del software",
    "hook": "Fases, modelos de ciclo de vida, requisitos y trazabilidad, metodologías orientadas a objetos y herramientas CASE.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Fases del proceso"
     },
     {
      "t": "p",
      "x": "La **Ingeniería del Software** surgió ante la «crisis del software» (costes y plazos muy superiores a lo previsto). Las fases clásicas son:"
     },
     {
      "t": "tbl",
      "head": [
       "Fase",
       "Qué se hace"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**1. Especificación**",
        "Qué debe hacer el sistema (requisitos)"
       ],
       [
        "**2. Diseño**",
        "Cómo lo hará: arquitectura y diseño detallado"
       ],
       [
        "**3. Construcción + pruebas unitarias**",
        "Programar y probar cada módulo"
       ],
       [
        "**4. Validación**",
        "Comprobar que cumple lo pedido"
       ],
       [
        "**5. Implantación**",
        "Puesta en marcha / entrega al cliente"
       ],
       [
        "**6. Mantenimiento**",
        "Tras la entrega: que siga funcionando y se adapte"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "2. Modelos de ciclo de vida"
     },
     {
      "t": "fig",
      "f": "f_cascada_v.png",
      "w": 6.3,
      "cap": "Cascada y modelo en V."
     },
     {
      "t": "tbl",
      "head": [
       "Modelo",
       "Idea",
       "Ventaja",
       "Inconveniente"
      ],
      "w": [
       1800,
       2800,
       2519,
       2519
      ],
      "hc": true,
      "rows": [
       [
        "**Cascada**",
        "Fases secuenciales; la salida de una es la entrada de la siguiente",
        "Simple, bien documentado",
        "Rígido; el cliente ve el producto al final"
       ],
       [
        "**Cascada con realimentación / sashimi**",
        "Permite **solapar fases**",
        "Menos documentación; vuelta atrás",
        "Control más difícil"
       ],
       [
        "**Incremental / evolutivo (prototipos)**",
        "Entregas parciales; se refina con la reacción del usuario",
        "Resultados tempranos",
        "Arquitectura puede degradarse"
       ],
       [
        "**Espiral**",
        "Iteraciones guiadas por el **análisis de riesgos**",
        "Gestiona riesgos",
        "Complejo, requiere experiencia"
       ]
      ]
     },
     {
      "t": "fig",
      "f": "f_espiral.png",
      "w": 4.8,
      "cap": "Modelo en espiral (Boehm): cuatro cuadrantes por vuelta."
     },
     {
      "t": "h3",
      "x": "3. Requisitos y trazabilidad"
     },
     {
      "t": "b",
      "items": [
       "El cliente rara vez sabe al principio qué quiere → técnicas de captura: **entrevistas**, entrevistas **JAD** (muy estructuradas, con participantes de todos los niveles), **prototipos** y **casos de uso**.",
       "**Casos de uso:** introducidos por **Jacobson en 1992**; describen la interacción del usuario con el sistema.",
       "**Trazabilidad:** conocer en todo momento por qué fases y procesos ha pasado cada elemento, de modo que cualquier problema pueda **rastrearse hasta su origen**. Relación principal entre requisitos: **satisfacción**."
      ]
     },
     {
      "t": "h3",
      "x": "4. Metodologías orientadas a objetos"
     },
     {
      "t": "tbl",
      "head": [
       "Metodología",
       "Rasgo clave"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**Coad y Yourdon**",
        "Considerada de las más sencillas de aprender en análisis OO"
       ],
       [
        "**Proceso Unificado / UML**",
        "De «los tres amigos»: **Jacobson, Booch y Rumbaugh**"
       ],
       [
        "**MÉTRICA v3** (España)",
        "Metodología **oficial de la Administración española**. Procesos: **PSI** (planificación) · desarrollo: **EVS, ASI, DSI, CSI, IAS** · **MSI** (mantenimiento). Interfaces: **GC, GP, CAL, SEG**"
       ],
       [
        "**Merise**",
        "Administración **francesa**; comienza con el *esquema director*"
       ],
       [
        "**SSADM**",
        "Administración del **Reino Unido** (fases llamadas módulos)"
       ]
      ]
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**MÉTRICA v3 — «Pepe Es A Dos Cervezas Ilusionado»:** PSI → **E**VS → **A**SI → **D**SI → **C**SI → **I**AS; **M**SI para mantener."
     },
     {
      "t": "p",
      "x": "Ventajas de lo OO: está **basado en componentes** (más reutilización); su base son **encapsulación, herencia y polimorfismo**. La subclase **hereda** atributos y operaciones de su superclase."
     },
     {
      "t": "h3",
      "x": "5. Herramientas CASE"
     },
     {
      "t": "tbl",
      "head": [
       "Tipo",
       "Apoya…"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**Upper CASE**",
        "Planificación, análisis de requisitos y estrategia"
       ],
       [
        "**Lower CASE**",
        "Diseño detallado, codificación, pruebas y mantenimiento"
       ],
       [
        "**I-CASE (integradas)**",
        "Todo el ciclo, mediante un **repositorio** común (base de datos del proyecto) cuyo **metamodelo** define cómo se guarda la información"
       ]
      ]
     },
     {
      "t": "b",
      "items": [
       "**IDE:** programa único con editor, compilador y depurador. **4GL / programación visual:** baratos y rápidos de usar.",
       "**Pruebas automatizadas:** funciones de grabación/reproducción y *marcos de pruebas*; bajo coste de mantenimiento.",
       "**Gestión de configuración (CVS, 1986, Dick Grune):** varios desarrolladores trabajan en su **copia de trabajo** y envían cambios al **repositorio**; admite **ramas**.",
       "**Documentar** puede costar entre un **20 y un 30 %** del esfuerzo de desarrollo."
      ]
     }
    ],
    "quiz": [
     {
      "q": "¿Qué modelo de ciclo de vida se basa en el análisis de riesgos?",
      "o": [
       "Cascada",
       "Espiral",
       "Sashimi",
       "En V"
      ],
      "a": 1,
      "e": "El espiral de Boehm itera con análisis de riesgos."
     },
     {
      "q": "MÉTRICA v3 es la metodología oficial de…",
      "o": [
       "Francia",
       "Reino Unido",
       "España",
       "EE. UU."
      ],
      "a": 2,
      "e": "Administración española. Merise = Francia; SSADM = Reino Unido."
     },
     {
      "q": "¿Quién introdujo los casos de uso (1992)?",
      "o": [
       "Booch",
       "Rumbaugh",
       "Jacobson",
       "Coad"
      ],
      "a": 2,
      "e": "Ivar Jacobson."
     },
     {
      "q": "La trazabilidad permite…",
      "o": [
       "Compilar más rápido",
       "Rastrear un problema hasta su origen",
       "Estimar costes",
       "Generar código"
      ],
      "a": 1,
      "e": "Conocer por qué fases ha pasado cada elemento."
     }
    ]
   },
   {
    "id": "UD2",
    "title": "Planificación y seguimiento",
    "hook": "Estimar esfuerzo (COCOMO, puntos de función), planificar (WBS, PERT, Gantt) y hacer seguimiento.",
    "blocks": [
     {
      "t": "h3",
      "x": "1. Estimación"
     },
     {
      "t": "tbl",
      "head": [
       "Técnica",
       "Qué es",
       "Dato clave"
      ],
      "w": [
       2000,
       4300,
       3338
      ],
      "rows": [
       [
        "**COCOMO**",
        "Modelo constructivo de costes (**B. W. Boehm**, finales de los 70). Tres submodelos: **básico, intermedio y detallado**",
        "Modos: **orgánico, semiacoplado, empotrado**"
       ],
       [
        "**Puntos de función**",
        "Mide el tamaño funcional desde el punto de vista del usuario",
        "**Allan Albrecht, IBM, 1979**"
       ],
       [
        "**MK II**",
        "Variante de puntos de función",
        "Norma **ISO/IEC 20968**"
       ],
       [
        "**COSMIC**",
        "Cuenta **movimientos de datos** (entradas, salidas, lecturas, escrituras) de los procesos funcionales",
        "Consorcio creado en **1998**"
       ],
       [
        "**SLIM (Putnam)**",
        "Modelo de gestión del ciclo de vida del software",
        "Artículo original de Putnam: **1978**"
       ],
       [
        "**Delphi**",
        "Consenso de **expertos** mediante cuestionarios iterativos y anónimos",
        "Mini-Delphi cara a cara: *Estimation-Talk-Estimation*"
       ]
      ]
     },
     {
      "t": "tbl",
      "head": [
       "Modo COCOMO",
       "Proyecto típico"
      ],
      "w": [
       2600,
       7038
      ],
      "rows": [
       [
        "**Orgánico**",
        "Equipo **pequeño** de programadores **experimentados** en entorno **familiar**"
       ],
       [
        "**Semiacoplado**",
        "Equipo mixto; complejidad y experiencia intermedias"
       ],
       [
        "**Empotrado**",
        "Fuertes restricciones de hardware/entorno; el más rígido"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "Fórmulas COCOMO básico: **Esfuerzo E = a · (KLOC)^b** (persona-mes) y **Duración D = c · E^d**. Coeficientes del orgánico: a = 2,4 · b = 1,05 · c = 2,5 · d = 0,38. Compruébalos contra la tabla de tu manual (semiacoplado: a = 3,0, b = 1,12; empotrado: a = 3,6, b = 1,20)."
     },
     {
      "t": "h3",
      "x": "2. Planificación"
     },
     {
      "t": "fig",
      "f": "f_gantt_pert.png",
      "w": 6.3,
      "cap": "Gantt (calendario) y PERT (dependencias y camino crítico)."
     },
     {
      "t": "tbl",
      "head": [
       "Herramienta",
       "Qué muestra"
      ],
      "w": [
       2600,
       7038
      ],
      "rows": [
       [
        "**WBS / EDT**",
        "Descomposición jerárquica del trabajo; el primer nivel es el objetivo principal del proyecto"
       ],
       [
        "**PBS**",
        "Descomposición del producto; junto con la WBS da las dependencias para PERT"
       ],
       [
        "**PERT**",
        "Red de actividades (años 50); calcula el **camino crítico** y la **holgura total**"
       ],
       [
        "**Gantt**",
        "Barras de tareas sobre una escala temporal"
       ],
       [
        "**Nivelación de recursos**",
        "Evita retrasos por cuellos de botella de recursos"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Camino crítico** = ruta más larga: sus actividades no tienen holgura, cualquier retraso retrasa el proyecto. Puede haber **varias rutas críticas** paralelas."
     },
     {
      "t": "h3",
      "x": "3. Seguimiento"
     },
     {
      "t": "b",
      "items": [
       "Combinar **recopilar información + acciones correctivas + gestión de los cambios**, no solo rellenar formularios.",
       "Reunión **stand-up**: se hace de pie para que sea breve.",
       "**Informes:** deben ser eficaces y centrarse en los aspectos más sobresalientes del proceso de gestión."
      ]
     }
    ],
    "quiz": [
     {
      "q": "COCOMO fue desarrollado por…",
      "o": [
       "Albrecht",
       "Putnam",
       "Boehm",
       "Jacobson"
      ],
      "a": 2,
      "e": "Barry W. Boehm."
     },
     {
      "q": "¿Qué indica el camino crítico?",
      "o": [
       "La ruta más corta",
       "La ruta más larga, sin holgura",
       "El coste total",
       "El nº de recursos"
      ],
      "a": 1,
      "e": "Define la duración mínima del proyecto."
     },
     {
      "q": "Los puntos de función los definió…",
      "o": [
       "Allan Albrecht (IBM)",
       "Barry Boehm",
       "Lawrence Putnam",
       "Grady Booch"
      ],
      "a": 0,
      "e": "1979, IBM."
     },
     {
      "q": "El modo COCOMO ‘orgánico’ corresponde a…",
      "o": [
       "Equipo grande en entorno rígido",
       "Equipo pequeño y experimentado en entorno familiar",
       "Sistemas embebidos",
       "Proyectos sin requisitos"
      ],
      "a": 1,
      "e": "Definición del modo orgánico."
     }
    ]
   },
   {
    "id": "UD3",
    "title": "Diagramado (UML)",
    "hook": "Familias de diagramas UML y cómo se leen: clases, casos de uso, secuencia, componentes y despliegue.",
    "blocks": [
     {
      "t": "p",
      "x": "**UML** nació de «los tres amigos»: **Grady Booch, Ivar Jacobson y James Rumbaugh**. Es un **lenguaje de modelado** (no una metodología). Un diagrama UML no es un documento completo: se complementa con texto."
     },
     {
      "t": "fig",
      "f": "f_uml.png",
      "w": 6,
      "cap": "Los diagramas UML 2.x se agrupan en estructura y comportamiento."
     },
     {
      "t": "call",
      "k": "clave",
      "x": "UML 2.x define **14 diagramas**: **7 de estructura** (clases, objetos, componentes, estructura compuesta, despliegue, paquetes, perfiles) y **7 de comportamiento** (casos de uso, actividad, máquina de estados y 4 de **interacción**: secuencia, comunicación, tiempos y visión global)."
     },
     {
      "t": "h3",
      "x": "Diagrama de clases"
     },
     {
      "t": "p",
      "x": "Una clase se dibuja como caja con **3 compartimentos:** nombre · atributos · operaciones. **Visibilidad:** `+` público · `-` privado · `#` protegido · `~` paquete. **Multiplicidad:** `1`, `0..1`, `*`, `1..*`."
     },
     {
      "t": "fig",
      "f": "f_uml_rel.png",
      "w": 6.3,
      "cap": "Notación de las relaciones."
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "Una **interfaz** solo declara: **no se puede instanciar**; la implementa un clasificador (relación de **realización**). Una clase puede implementar varias interfaces."
     },
     {
      "t": "h3",
      "x": "Diagrama de casos de uso"
     },
     {
      "t": "tbl",
      "head": [
       "Elemento",
       "Detalle"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**Actor**",
        "Rol externo que interactúa; se nombra por el **rol** que asume"
       ],
       [
        "**Caso de uso**",
        "Funcionalidad del sistema vista desde un usuario externo"
       ],
       [
        "**«include»**",
        "Flecha discontinua del caso **base** al **incluido**: comportamiento obligatorio reutilizado"
       ],
       [
        "**«extend»**",
        "Comportamiento **opcional** o condicional que amplía el caso base (con puntos de extensión)"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Diagrama de secuencia"
     },
     {
      "t": "b",
      "items": [
       "Muestra **líneas de vida** de los objetos y el **orden temporal** de los mensajes (el tiempo avanza hacia abajo).",
       "Tipos de mensaje: **síncrono, asíncrono, crear, eliminar, respuesta**.",
       "El mensaje **crear** apunta a la caja del objeto; **eliminar** termina la línea de vida."
      ]
     },
     {
      "t": "h3",
      "x": "Componentes y despliegue"
     },
     {
      "t": "p",
      "x": "**Componente:** unidad con interfaces **provistas y requeridas**; puede estar formado por uno o más **artefactos**. **Diagrama de despliegue:** muestra la configuración física (nodos y artefactos); sirve, p. ej., para comparar despliegues en **desarrollo, preproducción y producción**."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**Estructura = FOTO** (cómo está montado) · **Comportamiento = PELÍCULA** (qué ocurre y en qué orden)."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué diagrama muestra el orden temporal de los mensajes entre objetos?",
      "o": [
       "Clases",
       "Despliegue",
       "Secuencia",
       "Paquetes"
      ],
      "a": 2,
      "e": "El de secuencia."
     },
     {
      "q": "El rombo relleno en UML representa…",
      "o": [
       "Agregación",
       "Composición",
       "Herencia",
       "Dependencia"
      ],
      "a": 1,
      "e": "Composición = rombo relleno; agregación = vacío."
     },
     {
      "q": "¿Cuántos diagramas define UML 2.x?",
      "o": [
       "9",
       "12",
       "14",
       "20"
      ],
      "a": 2,
      "e": "7 de estructura y 7 de comportamiento."
     },
     {
      "q": "¿Qué se puede hacer con una interfaz?",
      "o": [
       "Instanciarla directamente",
       "Implementarla en un clasificador",
       "Convertirla en actor",
       "Dibujarla como caso de uso"
      ],
      "a": 1,
      "e": "Las interfaces no se instancian; se implementan."
     }
    ]
   },
   {
    "id": "UD4",
    "title": "Desarrollo de la GUI",
    "hook": "Componentes gráficos en Java (AWT, Swing), gestión de eventos y principios de usabilidad.",
    "blocks": [
     {
      "t": "tbl",
      "head": [
       "",
       "AWT",
       "Swing"
      ],
      "w": [
       2000,
       3819,
       3819
      ],
      "hc": true,
      "rows": [
       [
        "**Idea**",
        "Primeras bibliotecas gráficas de Java",
        "Evolución: amplía las posibilidades de AWT con una gama muy alta de funciones"
       ],
       [
        "**Apariencia**",
        "Poco flexible",
        "**Apariencia y comportamiento adaptables** (arquitectura de componentes)"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Modelo de eventos"
     },
     {
      "t": "call",
      "k": "clave",
      "x": "En Java, un **evento** es un objeto; el componente (**fuente**) lo envía a un objeto **oyente (listener)** registrado con **addActionListener**, que lo gestiona en su método **actionPerformed**."
     },
     {
      "t": "code",
      "x": "JButton boton = new JButton(\"Aceptar\");\nboton.addActionListener(new ActionListener() {\n  public void actionPerformed(ActionEvent e) {\n    String texto = e.getActionCommand();   // etiqueta del botón\n    Object origen = e.getSource();         // quién generó el evento\n  }\n});\nmarco.add(boton);   // añadir al contenedor (JFrame / JPanel)"
     },
     {
      "t": "b",
      "items": [
       "Se separa el código que **construye** la GUI del código que hace el **trabajo real**.",
       "**Clases internas:** el oyente ve todas las variables de instancia de la clase externa.",
       "El IDE aporta un **diseñador visual** para crear interfaces sin escribir todo el código."
      ]
     },
     {
      "t": "h3",
      "x": "Usabilidad y diseño orientado al usuario"
     },
     {
      "t": "tbl",
      "head": [
       "Aspecto",
       "Qué recordar"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**Percepción**",
        "La interfaz **es** el sistema para el usuario; buen diseño = imagen del sistema y percepción del usuario coinciden"
       ],
       [
        "**Tiempo de respuesta**",
        "Dos valores: **duración** (media) y **variabilidad**"
       ],
       [
        "**Ayuda**",
        "**Integrada** (dentro del software) y **complementaria** (manuales, tutoriales)"
       ],
       [
        "**Mensajes de error**",
        "Deben **describir** el error, **ayudar a resolverlo** y **describir sus consecuencias**"
       ],
       [
        "**Prototipado**",
        "Con lenguajes de cuarta generación para mostrar pronto el sistema"
       ],
       [
        "**Especificación de diseño**",
        "Documento que recoge todas las actividades de la fase de diseño"
       ]
      ]
     }
    ],
    "quiz": [
     {
      "q": "¿Qué método gestiona un clic de botón en un ActionListener?",
      "o": [
       "mouseMoved",
       "actionPerformed",
       "onClick",
       "paint"
      ],
      "a": 1,
      "e": "actionPerformed(ActionEvent)."
     },
     {
      "q": "Ventaja de Swing sobre AWT:",
      "o": [
       "Menos funciones",
       "Apariencia y comportamiento adaptables",
       "Solo funciona en Windows",
       "No usa eventos"
      ],
      "a": 1,
      "e": "Arquitectura de componentes adaptable."
     },
     {
      "q": "Un buen mensaje de error debe…",
      "o": [
       "Ocultar la causa",
       "Describir el error, ayudar a resolverlo y sus consecuencias",
       "Mostrar el código",
       "Ser siempre numérico"
      ],
      "a": 1,
      "e": "Las tres características del manual."
     },
     {
      "q": "¿Qué devuelve getSource() de un ActionEvent?",
      "o": [
       "La etiqueta del botón",
       "El objeto que generó el evento",
       "La hora",
       "El layout"
      ],
      "a": 1,
      "e": "getActionCommand = etiqueta; getSource = origen."
     }
    ]
   },
   {
    "id": "UD5",
    "title": "Calidad en el desarrollo del software",
    "hook": "Criterios y modelos de calidad, métricas, tamaño y madurez de procesos (CMM).",
    "blocks": [
     {
      "t": "call",
      "k": "clave",
      "x": "El **coste de un fallo crece en un orden de magnitud** cada vez que el desarrollo cambia de fase: corregir un error es mucho más barato cuanto antes se detecta. Por eso se hace **SQA** (aseguramiento de la calidad)."
     },
     {
      "t": "fig",
      "f": "f_iso9126.png",
      "w": 6.3,
      "cap": "Modelo ISO/IEC 9126: las seis características."
     },
     {
      "t": "tbl",
      "head": [
       "Modelo",
       "Rasgo"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**McCall**",
        "Modelo inicial por factores de calidad (operación, revisión y transición)"
       ],
       [
        "**Boehm**",
        "Modelo inicial jerárquico"
       ],
       [
        "**ISO 9126**",
        "Seis características y subcaracterísticas; evolucionó hacia la familia ISO/IEC 25000"
       ],
       [
        "**CISQ (Bill Curtis)**",
        "Cinco características: **fiabilidad, eficiencia de rendimiento, seguridad, mantenibilidad y tamaño**"
       ]
      ]
     },
     {
      "t": "b",
      "items": [
       "**Calidad externa:** lo que percibe el usuario. **Calidad interna:** lo que no ve (código, arquitectura); se mide antes y predice la externa.",
       "Muchos defectos graves nacen de **errores básicos de código**; la mayoría de **vulnerabilidades** (inyección SQL, XSS) proviene de mala codificación.",
       "**Mantenibilidad** ↔ **deuda técnica** (coste acumulado por falta de mantenimiento).",
       "**Tamaño del software:** técnico (p. ej. líneas de código) o **funcional** (puntos de función)."
      ]
     },
     {
      "t": "h3",
      "x": "Modelo de madurez CMM"
     },
     {
      "t": "tbl",
      "head": [
       "Nivel",
       "Nombre",
       "Característica"
      ],
      "w": [
       1000,
       2400,
       6238
      ],
      "rows": [
       [
        "**1**",
        "Inicial",
        "Procesos ad hoc, poco predecibles"
       ],
       [
        "**2**",
        "Repetible",
        "Gestión básica de proyectos; se repiten éxitos"
       ],
       [
        "**3**",
        "Definido",
        "Procesos documentados y estándar en la organización"
       ],
       [
        "**4**",
        "Gestionado",
        "Procesos medidos y controlados cuantitativamente"
       ],
       [
        "**5**",
        "Optimizado",
        "Mejora continua"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "Los niveles CMM son **inclusivos**: para alcanzar un nivel hay que haber logrado **y mantener** todos los anteriores."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "**I**nicial → **R**epetible → **D**efinido → **G**estionado → **O**ptimizado: «**I**ngenieros **R**eales **D**ocumentan **G**randes **O**bras»."
     }
    ],
    "quiz": [
     {
      "q": "¿Cuántas características de calidad define ISO/IEC 9126?",
      "o": [
       "3",
       "6",
       "8",
       "11"
      ],
      "a": 1,
      "e": "Funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad."
     },
     {
      "q": "El nivel 3 de CMM se llama…",
      "o": [
       "Repetible",
       "Definido",
       "Gestionado",
       "Optimizado"
      ],
      "a": 1,
      "e": "1 Inicial, 2 Repetible, 3 Definido, 4 Gestionado, 5 Optimizado."
     },
     {
      "q": "El coste de corregir un fallo…",
      "o": [
       "Es constante",
       "Disminuye con las fases",
       "Crece un orden de magnitud al cambiar de fase",
       "Solo depende del lenguaje"
      ],
      "a": 2,
      "e": "Cuanto más tarde se detecta, más caro."
     },
     {
      "q": "La deuda técnica se relaciona con…",
      "o": [
       "Usabilidad",
       "Mantenibilidad",
       "Portabilidad",
       "Seguridad"
      ],
      "a": 1,
      "e": "Costes por falta de mantenimiento."
     }
    ]
   },
   {
    "id": "UD6",
    "title": "Identificación de los tipos de pruebas",
    "hook": "Depuración, pruebas de caja negra y blanca, JUnit, plan de pruebas e informes.",
    "blocks": [
     {
      "t": "fig",
      "f": "f_pruebas.png",
      "w": 5.6,
      "cap": "Niveles de prueba: muchas unitarias en la base, pocas de aceptación arriba."
     },
     {
      "t": "tbl",
      "head": [
       "",
       "Caja NEGRA",
       "Caja BLANCA (cristal)"
      ],
      "w": [
       2000,
       3819,
       3819
      ],
      "hc": true,
      "rows": [
       [
        "**Examina**",
        "Solo entradas y salidas; el software es una caja cerrada",
        "La **estructura de control interna** del programa"
       ],
       [
        "**Técnicas**",
        "**Clases de equivalencia**, valores límite",
        "Cobertura de sentencias, ramas y **caminos** (pruebas de trayectoria)"
       ],
       [
        "**Comprueba**",
        "Que los resultados son correctos para los datos dados",
        "Que se recorren los caminos lógicos del código"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Clases de equivalencia:** se agrupan los datos de entrada que el programa trata igual y se diseña **un caso por clase** (un mismo caso puede cubrir varias clases)."
     },
     {
      "t": "h3",
      "x": "Depuración"
     },
     {
      "t": "p",
      "x": "**Depurar ≠ probar:** probar **detecta** el fallo; depurar **localiza y corrige** su causa. El **depurador** permite **ejecución paso a paso** (línea a línea), **puntos de ruptura** e inspección de variables. Escribir mensajes de salida es una técnica muy usada pero rudimentaria."
     },
     {
      "t": "h3",
      "x": "JUnit"
     },
     {
      "t": "code",
      "x": "public class CalculadoraTest {            // convención: NombreClase + Test\n  @Test\n  public void sumaDosNumeros() {\n    assertEquals(5, new Calculadora().suma(2, 3));\n  }\n}"
     },
     {
      "t": "b",
      "items": [
       "Cada prueba debe ser **independiente**: no asumir orden de ejecución.",
       "Las **pruebas automatizadas** se repiten sin intervención humana, son rápidas y repetibles.",
       "En ejecución se obtiene un objeto **org.junit.runner.Result**."
      ]
     },
     {
      "t": "h3",
      "x": "Plan, casos e informes"
     },
     {
      "t": "tbl",
      "head": [
       "Documento",
       "Contenido"
      ],
      "w": [
       2800,
       6838
      ],
      "rows": [
       [
        "**Plan de pruebas**",
        "Enfoque sistemático para probar un sistema (alcance, recursos, calendario)"
       ],
       [
        "**Caso de prueba**",
        "Preparación + pasos + **resultado esperado** y espacio para el **resultado real**"
       ],
       [
        "**IEEE 829-2008**",
        "Estándar de documentación de pruebas de software"
       ],
       [
        "**Seguimiento de ejecución**",
        "Cuándo se ejecutó, quién, cuánto tardó y resultado"
       ],
       [
        "**Informes de pruebas**",
        "Resumen de los resultados para la organización"
       ]
      ]
     },
     {
      "t": "call",
      "k": "ojo",
      "x": "Ejecución **manual vs. automatizada**: normalmente se combinan. Si el software es nuevo, se recomienda **duplicar** la estimación inicial del calendario de pruebas."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué prueba examina la estructura interna del código?",
      "o": [
       "Caja negra",
       "Caja blanca",
       "Aceptación",
       "Regresión"
      ],
      "a": 1,
      "e": "Caja blanca / de cristal."
     },
     {
      "q": "Convención de nombre JUnit para probar la clase Pedido:",
      "o": [
       "Pedido_Prueba",
       "TestPedido()",
       "PedidoTest",
       "JunitPedido"
      ],
      "a": 2,
      "e": "Nombre de la clase + sufijo Test."
     },
     {
      "q": "Las clases de equivalencia pertenecen a las pruebas de…",
      "o": [
       "Caja negra",
       "Caja blanca",
       "Rendimiento",
       "Carga"
      ],
      "a": 0,
      "e": "Técnica de caja negra."
     },
     {
      "q": "El estándar IEEE 829-2008 trata de…",
      "o": [
       "Estimación de costes",
       "Documentación de pruebas de software",
       "Seguridad",
       "UML"
      ],
      "a": 1,
      "e": "Documentos de pruebas."
     }
    ]
   },
   {
    "id": "UD7",
    "title": "Excepciones",
    "hook": "Cómo gestiona Java los errores: try/catch/finally, jerarquía, comprobadas vs. no comprobadas y buenas prácticas.",
    "blocks": [
     {
      "t": "fig",
      "f": "f_excepciones.png",
      "w": 6.3,
      "cap": "Jerarquía de excepciones en Java."
     },
     {
      "t": "fig",
      "f": "f_trycatch.png",
      "w": 6.3,
      "cap": "Flujo try / catch / finally."
     },
     {
      "t": "code",
      "x": "try {\n  FileReader f = new FileReader(\"datos.txt\");\n} catch (FileNotFoundException e) {   // más específica primero\n  System.err.println(\"No existe: \" + e.getMessage());\n} catch (Exception e) {               // más general al final\n  throw new MiExcepcion(\"Error leyendo\", e);   // excepción encadenada\n} finally {\n  // cerrar archivos/conexiones: se ejecuta siempre\n}"
     },
     {
      "t": "tbl",
      "head": [
       "Concepto",
       "Qué recordar"
      ],
      "w": [
       3000,
       6638
      ],
      "rows": [
       [
        "**Excepción**",
        "Objeto que se genera ante una situación anómala; el sistema busca un manejador recorriendo la **pila de llamadas**"
       ],
       [
        "**try / catch**",
        "El catch debe ir **inmediatamente después** del try; sin código intermedio"
       ],
       [
        "**finally**",
        "Se ejecuta siempre (clave para liberar recursos), **salvo** que la JVM termine o el hilo muera/se interrumpa"
       ],
       [
        "**throw / throws**",
        "`throw` lanza una excepción · `throws` la declara en la firma del método"
       ],
       [
        "**Comprobadas**",
        "El compilador obliga a capturarlas o declararlas (recuperables, p. ej. IOException)"
       ],
       [
        "**RuntimeException / Error**",
        "No obligatorias: errores de programación (Runtime) o fallos graves (Error)"
       ],
       [
        "**Excepciones propias**",
        "Se crean extendiendo `Exception` (o una subclase)"
       ]
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "Si ningún método de la pila trata la excepción, **el programa termina**. Capturar **Exception** a secas es mala práctica: oculta errores específicos y hace el código más propenso a fallos."
     },
     {
      "t": "call",
      "k": "truco",
      "x": "Orden de los **catch**: de lo **específico a lo general** (como un embudo que se va abriendo)."
     }
    ],
    "quiz": [
     {
      "q": "¿Cuándo NO se ejecuta el bloque finally?",
      "o": [
       "Si hay excepción",
       "Si hay return",
       "Si la JVM termina",
       "Nunca falla"
      ],
      "a": 2,
      "e": "Si la JVM sale o el hilo muere, finally no se garantiza."
     },
     {
      "q": "¿Qué palabra declara en la firma que un método puede lanzar una excepción?",
      "o": [
       "throw",
       "throws",
       "catch",
       "try"
      ],
      "a": 1,
      "e": "throws en la firma; throw lanza."
     },
     {
      "q": "RuntimeException es…",
      "o": [
       "Comprobada",
       "No comprobada",
       "Un Error",
       "Solo de E/S"
      ],
      "a": 1,
      "e": "Subclase no comprobada de Exception."
     },
     {
      "q": "Orden correcto de varios catch:",
      "o": [
       "General → específico",
       "Específico → general",
       "Indiferente",
       "Alfabético"
      ],
      "a": 1,
      "e": "El primero que coincide captura la excepción."
     }
    ]
   },
   {
    "id": "UD8",
    "title": "Documentación",
    "hook": "Qué documentos se producen, cómo se estructuran y cómo se genera documentación automática del código.",
    "blocks": [
     {
      "t": "tbl",
      "head": [
       "Documento",
       "Para qué sirve",
       "Rasgo"
      ],
      "w": [
       2400,
       3800,
       3438
      ],
      "rows": [
       [
        "**Requisitos**",
        "Qué debe hacer el sistema",
        "Su necesidad crece con complejidad, impacto y vida útil del software"
       ],
       [
        "**Arquitectura**",
        "Estructura global",
        "**Parco en detalles, detallado en la explicación**"
       ],
       [
        "**Estudio comercial**",
        "Justifica alternativas",
        "Basado en investigación profunda y sin jerga innecesaria"
       ],
       [
        "**Diseño de BD (DDD)**",
        "Diseño **conceptual, lógico y físico**",
        "Parte importante del diseño en software empresarial"
       ],
       [
        "**De código**",
        "Cómo funciona internamente",
        "Estilo de **guía de referencia**; se genera automáticamente"
       ],
       [
        "**De usuario**",
        "Cómo se **usa** el programa",
        "A veces lo escribe quien conoce la API"
       ]
      ]
     },
     {
      "t": "h3",
      "x": "Documentación automática"
     },
     {
      "t": "p",
      "x": "Herramientas como **Javadoc**, **Doxygen**, **NDoc** o **EiffelStudio** extraen los **comentarios y especificaciones del código fuente** y generan manuales de referencia en **texto o HTML**. Así la documentación se mantiene cerca del código."
     },
     {
      "t": "code",
      "x": "/**\n * Calcula el área de un rectángulo.\n * @param base   longitud de la base\n * @param altura longitud de la altura\n * @return el área\n */\npublic double area(double base, double altura) { return base * altura; }"
     },
     {
      "t": "b",
      "items": [
       "**Donald Knuth** defiende la **programación literaria**: escribir código y documentación a la vez y en el mismo sitio.",
       "**Documentar el código** es añadir información suficiente para que **los humanos**, no solo los ordenadores, entiendan qué hace.",
       "Los **estándares de codificación** (nombres, **indentación**, comentarios) mejoran la legibilidad y el mantenimiento.",
       "Se dedica a documentar entre el **20 y el 30 %** del esfuerzo de desarrollo."
      ]
     },
     {
      "t": "call",
      "k": "clave",
      "x": "**Indentación:** escribir las estructuras anidadas con espacios/tabuladores delante para distinguirlas con facilidad."
     }
    ],
    "quiz": [
     {
      "q": "¿Qué herramienta genera documentación a partir de comentarios en Java?",
      "o": [
       "JUnit",
       "Javadoc",
       "CVS",
       "Ant"
      ],
      "a": 1,
      "e": "Javadoc (también Doxygen)."
     },
     {
      "q": "La documentación de arquitectura debe ser…",
      "o": [
       "Exhaustiva en código",
       "Parca en detalles y detallada en la explicación",
       "Solo gráfica",
       "Inexistente"
      ],
      "a": 1,
      "e": "Criterio del manual."
     },
     {
      "q": "¿Quién propuso la programación literaria?",
      "o": [
       "Knuth",
       "Boehm",
       "Booch",
       "Putnam"
      ],
      "a": 0,
      "e": "Donald Knuth."
     },
     {
      "q": "¿Qué parte del esfuerzo puede dedicarse a documentación?",
      "o": [
       "1–2 %",
       "5 %",
       "20–30 %",
       "90 %"
      ],
      "a": 2,
      "e": "Entre un 20 y un 30 %."
     }
    ]
   }
  ]
 }
];
export const CHEAT = {
 "quien": [
  [
   "**Boehm**",
   "Modelo en **espiral** y **COCOMO**"
  ],
  [
   "**Albrecht** (IBM, 1979)",
   "**Puntos de función**"
  ],
  [
   "**Putnam** (1978)",
   "Modelo **SLIM** de estimación"
  ],
  [
   "**Jacobson**",
   "**Casos de uso** (1992); con **Booch** y **Rumbaugh** = «los tres amigos» → **UML / Proceso Unificado**"
  ],
  [
   "**Alan Kay** (1993)",
   "Las **6 características** de un lenguaje orientado a objetos"
  ],
  [
   "**Bertrand Meyer**",
   "Parámetros de calidad OO: **extrínsecos** (fiabilidad) e **intrínsecos** (modularidad)"
  ],
  [
   "**Knuth**",
   "**Programación literaria**"
  ],
  [
   "**Dick Grune**",
   "**CVS** (1986)"
  ],
  [
   "**Takeuchi y Nonaka**",
   "Origen de **Scrum** (analogía del rugby, 1986)"
  ],
  [
   "**Bill Curtis**",
   "**CISQ**: cinco características de calidad"
  ]
 ],
 "siglas": [
  [
   "**HTTP**",
   "Web; sin estado (puerto 80)",
   "**HTTPS**",
   "HTTP seguro (443)"
  ],
  [
   "**FTP**",
   "Archivos: 20 datos · 21 control",
   "**SSH / TELNET**",
   "Acceso remoto: 22 / 23"
  ],
  [
   "**SMTP / POP3**",
   "Correo: enviar (25) / recibir (110)",
   "**DNS**",
   "Nombres ↔ IP (53)"
  ],
  [
   "**ACID**",
   "Atomicidad, Consistencia, Aislamiento, Durabilidad",
   "**MVC**",
   "Modelo-Vista-Controlador"
  ],
  [
   "**PK / FK**",
   "Clave primaria / foránea",
   "**DDL / DML**",
   "Define estructura / manipula datos"
  ],
  [
   "**JDBC / ODBC**",
   "Conectividad BD (Java / abierta)",
   "**CMM**",
   "5 niveles de madurez"
  ],
  [
   "**WBS / PERT**",
   "Descomposición / red de actividades",
   "**JUnit**",
   "Pruebas unitarias en Java"
  ]
 ],
 "parejas": [
  [
   "**TCP vs UDP**",
   "TCP orientado a conexión y fiable · UDP sin conexión"
  ],
  [
   "**DELETE · TRUNCATE · DROP**",
   "Borra filas con condición · vacía la tabla · elimina la tabla entera"
  ],
  [
   "**WHERE vs HAVING**",
   "Filtra filas antes de agrupar · filtra grupos después"
  ],
  [
   "**INNER vs LEFT JOIN**",
   "Solo coincidencias · todas las de la izquierda (NULL si no hay pareja)"
  ],
  [
   "**PK vs FK**",
   "Identifica la fila · apunta a otra tabla"
  ],
  [
   "**Entidad fuerte vs débil**",
   "Se identifica sola · depende de otra (doble rectángulo)"
  ],
  [
   "**Capa vs nivel (tier)**",
   "Separación lógica · separación física"
  ],
  [
   "**Lenguajes de cliente vs servidor**",
   "JS/HTML/CSS en el navegador · PHP/JSP/ASP en el servidor"
  ],
  [
   "**Caja negra vs blanca**",
   "Entradas/salidas · estructura interna del código"
  ],
  [
   "**Agregación vs composición**",
   "Rombo vacío · rombo relleno (parte ligada al todo)"
  ],
  [
   "**include vs extend**",
   "Obligatorio reutilizado · opcional/condicional"
  ],
  [
   "**throw vs throws**",
   "Lanza la excepción · la declara en la firma"
  ],
  [
   "**Comprobada vs no comprobada**",
   "El compilador obliga a tratarla · RuntimeException/Error no"
  ],
  [
   "**Depurar vs probar**",
   "Localizar y corregir la causa · detectar el fallo"
  ]
 ]
};
