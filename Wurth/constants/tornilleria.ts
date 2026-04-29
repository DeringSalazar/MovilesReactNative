interface Product {
  id: string;
  name: string;
  subtitle?: string;
  images?: any[];
  features?: string[];
  applications?: string[];
  pdfPage?: string;
}
 
export const tornilleria = [
  {
    name: 'TORNILLERIA',
 
    subcategories: [
 
      {
        code: '03.01 (Arandelas)',
        name: 'Arandelas',
 
        products: [
 
          {
            id: 'arandelas-ala-ancha',
            name: 'ARANDELAS DE ALA ANCHA',
            subtitle: 'Según DIN 522',
 
            images: [
              require('../assets/images/03.00/03.01p1.jpg'),
            ],
 
            features: [
              'Fabricadas en acero.',
              'Superficie lisa, sin baño.',
              'Forma B: galvanizado cincado.',
              'Distribuyen mejor la carga.',
              'Según DIN 522.',
            ],
 
            applications: [
              'Uniones con tornillos.',
              'Montajes mecánicos.',
              'Automoción.',
              'Construcción metálica.',
            ],
 
            pdfPage: '201',
          },
 
          {
            id: 'arandelas-elasticas-dentadas',
            name: 'ARANDELAS ELÁSTICAS DENTADAS',
            subtitle: 'DIN 6798 - Dentado exterior',
 
            images: [
              require('../assets/images/03.00/03.01p2.jpg'),
            ],
 
            features: [
              'DIN 6798.',
              'Fabricadas en acero.',
              'Dentado exterior AZ.',
              'Alta resistencia al aflojamiento.',
              'Disponible bicromatado o cincado.',
            ],
 
            applications: [
              'Bloqueo de tornillos.',
              'Montajes mecánicos.',
              'Automoción.',
              'Maquinaria.',
            ],
 
            pdfPage: '202',
          },
 
          {
            id: 'arandelas-junta-neopreno',
            name: 'ARANDELAS CON JUNTA DE NEOPRENO',
 
            images: [
              require('../assets/images/03.00/03.01p3.jpg'),
            ],
 
            features: [
              'Material: Acero/Neopreno.',
              'Tratamiento superficial cincado.',
              'Proporciona estanqueidad en la unión.',
            ],
 
            applications: [
              'Fijaciones expuestas a la intemperie.',
              'Cubiertas y fachadas.',
              'Construcción metálica.',
            ],
 
            pdfPage: '202',
          },
 
          {
            id: 'anillos-seguridad-seeger-ext',
            name: 'ANILLOS DE SEGURIDAD "SEEGER" PARA EJES',
            subtitle: 'DIN 471',
 
            images: [
              require('../assets/images/03.00/03.01p4.jpg'),
            ],
 
            features: [
              'DIN 471.',
              'Para ejes (exterior).',
              'Material: Acero de resorte fosfatado/aceitado.',
              'También disponible en A2.',
            ],
 
            applications: [
              'Fijación axial en ejes.',
              'Maquinaria.',
              'Automoción.',
            ],
 
            pdfPage: '202',
          },
 
          {
            id: 'anillos-seguridad-seeger-int',
            name: 'ANILLOS DE SEGURIDAD "SEEGER" PARA AGUJEROS',
            subtitle: 'DIN 472',
 
            images: [
              require('../assets/images/03.00/03.01p5.jpg'),
            ],
 
            features: [
              'DIN 472.',
              'Para agujeros (interior).',
              'Material: Acero elástico fosfatado/aceitado.',
              'También disponible en A2.',
            ],
 
            applications: [
              'Fijación axial en alojamientos.',
              'Maquinaria.',
              'Automoción.',
            ],
 
            pdfPage: '202',
          },
 
          {
            id: 'arandelas-grower-din127',
            name: 'ARANDELAS GROWER DIN 127',
 
            images: [
              require('../assets/images/03.00/03.01p6.jpg'),
            ],
 
            features: [
              'Acero elástico.',
              'Forma A: lisa, sin baño.',
              'Forma B: lisa, cincada.',
              'Forma B A2: inoxidable.',
              'Evita el aflojamiento por vibración.',
            ],
 
            applications: [
              'Uniones atornilladas sujetas a vibración.',
              'Maquinaria.',
              'Automoción.',
              'Industria en general.',
            ],
 
            pdfPage: '203',
          },
 
        ],
      },
 
      {
        code: '03.02 (Graseras)',
        name: 'Graseras',
 
        products: [
 
          {
            id: 'engrasadores-conicos-rectos',
            name: 'ENGRASADORES CÓNICOS RECTOS',
            subtitle: 'DIN 71412A (H1)',
 
            images: [
              require('../assets/images/03.00/03.02p1.jpg'),
              require('../assets/images/03.00/03.02p1.1.jpg'),
            ],
 
            features: [
              'DIN 71412A (H1).',
              'Fabricados en acero cincado.',
              'Alta resistencia mecánica.',
              'Compatibles con engrasadoras estándar.',
              'Disponibles en roscas M6, M8, M10, R1/8", R1/4", R3/8".',
            ],
 
            applications: [
              'Lubricación de maquinaria.',
              'Rodamientos.',
              'Automoción.',
            ],
 
            pdfPage: '204',
          },
 
          {
            id: 'engrasadores-conicos-45',
            name: 'ENGRASADORES CÓNICOS A 45°',
            subtitle: 'DIN 71412B (H2)',
 
            images: [
              require('../assets/images/03.00/03.02p2.jpg'),
            ],
 
            features: [
              'DIN 71412B (H2).',
              'Diseño angulado a 45°.',
              'Facilita el acceso en zonas de difícil alcance.',
              'Acero cincado.',
              'Roscas M6, M8, M10, R1/8", R1/4", R3/8".',
            ],
 
            applications: [
              'Lubricación en zonas de difícil acceso.',
              'Maquinaria.',
              'Automoción.',
            ],
 
            pdfPage: '204',
          },
 
          {
            id: 'engrasadores-conicos-90',
            name: 'ENGRASADORES CÓNICOS A 90°',
            subtitle: 'DIN 71412C (H3)',
 
            images: [
              require('../assets/images/03.00/03.02p3.jpg'),
            ],
 
            features: [
              'DIN 71412C (H3).',
              'Diseño angulado a 90°.',
              'Ideal para puntos de engrase paralelos a la superficie.',
              'Acero cincado.',
              'Roscas M6, M8, M10, M10x1.5, R1/8".',
            ],
 
            applications: [
              'Lubricación en posiciones perpendiculares.',
              'Maquinaria industrial.',
              'Automoción.',
            ],
 
            pdfPage: '204',
          },
 
          {
            id: 'conjunto-engrasadores',
            name: 'CONJUNTO DE ENGRASADORES',
 
            images: [
              require('../assets/images/03.00/03.02p4.jpg'),
            ],
 
            features: [
              '9 medidas H1/H2/H3 desde 6x1 hasta 10x1 mm = 450 piezas.',
              '3 medidas de engrasadores de impacto H1 desde 6 hasta 10 mm = 150 piezas.',
              'Art. Nº 964 986.',
            ],
 
            applications: [
              'Mantenimiento industrial.',
              'Talleres.',
              'Servicio técnico.',
            ],
 
            pdfPage: '204',
          },
 
        ],
      },
 
      {
        code: '03.03 (Normalizado DIN)',
        name: 'Normalizado DIN',
 
        products: [
 
          {
            id: 'pasadores-din-913',
            name: 'PASADORES',
            subtitle: 'DIN 913 con filo angular',
 
            images: [
              require('../assets/images/03.00/03.03p1.jpg'),
            ],
 
            features: [
              'DIN 913 con filo angular.',
              'Fabricados en acero.',
              'Rosca métrica.',
              'Alta resistencia al deslizamiento.',
            ],
 
            applications: [
              'Fijación mecánica de posición.',
              'Montajes industriales.',
              'Maquinaria.',
            ],
 
            pdfPage: '205',
          },
 
          {
            id: 'cancamo-hembra-din-582',
            name: 'CÁNCAMO HEMBRA',
            subtitle: 'DIN 582 galvanizado',
 
            images: [
              require('../assets/images/03.00/03.03p2.jpg'),
            ],
 
            features: [
              'DIN 582.',
              'Acero galvanizado.',
              'Alta resistencia a tracción.',
              'Diámetros desde 6 hasta 24 mm.',
            ],
 
            applications: [
              'Elevación de cargas.',
              'Anclaje.',
              'Construcción.',
            ],
 
            pdfPage: '205',
          },
 
          {
            id: 'articulaciones-horquilla',
            name: 'ARTICULACIONES DE HORQUILLA',
            subtitle: 'DIN 71751',
 
            images: [
              require('../assets/images/03.00/03.03p3.jpg'),
            ],
 
            features: [
              'DIN 71751.',
              'Con perno de chaveteado, galvanizado.',
              'También disponible con rosca a la izquierda.',
              'Disponibles en M5 a M14.',
            ],
 
            applications: [
              'Mecanismos articulados.',
              'Automoción.',
              'Maquinaria industrial.',
            ],
 
            pdfPage: '206',
          },
 
          {
            id: 'articulaciones-acodadas',
            name: 'ARTICULACIONES ACODADAS',
            subtitle: 'DIN 71802',
 
            images: [
              require('../assets/images/03.00/03.03p4.jpg'),
            ],
 
            features: [
              'DIN 71802.',
              'Con resorte fiador, galvanizado.',
              'Disponibles en forma A, AS y versión larga.',
              'Disponible con rosca izquierda.',
            ],
 
            applications: [
              'Mecanismos de control.',
              'Automoción.',
              'Maquinaria.',
            ],
 
            pdfPage: '206',
          },
 
          {
            id: 'pasadores-din-94',
            name: 'PASADORES DIN 94',
            subtitle: 'DIN 94',
 
            images: [
              require('../assets/images/03.00/03.03p5.jpg'),
            ],
 
            features: [
              'DIN 94.',
              'Acero brillante, acero cincado y acero inoxidable A2.',
              'Para fijar tuercas almenadas en combinación con tornillos.',
              'Diámetros desde 1 mm hasta 13 mm.',
            ],
 
            applications: [
              'Fijación de tuercas almenadas.',
              'Varillaje de dirección.',
              'Barras de acoplamiento en automoción.',
            ],
 
            pdfPage: '207',
          },
 
          {
            id: 'clavija-elastica',
            name: 'CLAVIJA ELÁSTICA',
 
            images: [
              require('../assets/images/03.00/03.03p6.jpg'),
            ],
 
            features: [
              'Material: Acero galvanizado.',
              'Montaje y desmontaje rápido y sencillo.',
              'Reutilizable.',
              'Extremos cortados sin rebabas.',
              'Diámetros de orificio 2,5 a 9 mm.',
            ],
 
            applications: [
              'Fijar pasadores, tubos y varillas.',
              'Maquinaria.',
              'Agricultura.',
            ],
 
            pdfPage: '208',
          },
 
          {
            id: 'clavija-articulada',
            name: 'CLAVIJA ARTICULADA',
 
            images: [
              require('../assets/images/03.00/03.03p7.jpg'),
            ],
 
            features: [
              'Acero de primera calidad, galvanizado y bicromatado.',
              'Con anillo elástico pretensado.',
              'Montaje y desmontaje fácil y rápido.',
              'Reutilizable.',
              'Diámetros de mango 4,5 a 11 mm.',
            ],
 
            applications: [
              'Fijar pasadores, tubos y varillas.',
              'Maquinaria agrícola.',
              'Equipos industriales.',
            ],
 
            pdfPage: '208',
          },
 
          {
            id: 'set-clavijas',
            name: 'SET CLAVIJAS ELÁSTICAS Y ARTICULADA',
 
            images: [
              require('../assets/images/03.00/03.03p8.jpg'),
            ],
 
            features: [
              '150 unidades de pasadores de acero.',
              '5 medidas de clavijas articuladas (bicromatado).',
              '6 medidas de pasadores de doble R y 5 medidas de clavijas elásticas (cincado).',
              'Incluye piezas para sujeción en pared.',
            ],
 
            applications: [
              'Mantenimiento general.',
              'Talleres.',
              'Maquinaria agrícola.',
            ],
 
            pdfPage: '208',
          },
 
          {
            id: 'pasadores-elasticos-din1481',
            name: 'PASADORES ELÁSTICOS DIN 1481',
            subtitle: 'DIN 1481 versión pesada',
 
            images: [
              require('../assets/images/03.00/03.03p9.jpg'),
            ],
 
            features: [
              'DIN 1481 versión pesada.',
              'Material: Acero elástico.',
              'Sobremedida de 0,2-0,5 mm para asiento seguro.',
              'El extremo cónico facilita la introducción.',
              'Reutilizables sin dañar el material.',
            ],
 
            applications: [
              'Sujeción expuesta a grandes fuerzas de cizallamiento.',
              'Tornillos y pernos.',
              'Maquinaria industrial.',
            ],
 
            pdfPage: '209',
          },
 
          {
            id: 'pasador-acero-elasticos-extended',
            name: 'PASADOR ACERO ELÁSTICOS (GAMA AMPLIADA)',
 
            images: [
              require('../assets/images/03.00/03.03p10.jpg'),
            ],
 
            features: [
              'Acero sin baño.',
              'Amplio rango: diámetros 4,5 a 10 mm, longitudes hasta 95 mm.',
              'Alta precisión dimensional.',
            ],
 
            applications: [
              'Fijación de piezas mecánicas.',
              'Maquinaria.',
              'Industria general.',
            ],
 
            pdfPage: '210',
          },
 
          {
            id: 'tornillos-ecofast',
            name: 'TORNILLOS ECOFAST®',
 
            images: [
              require('../assets/images/03.00/03.03p11.jpg'),
            ],
 
            features: [
              'Agujero en la cabeza ø 2,5 mm.',
              'Tratamiento exterior para facilitar el deslizamiento.',
              'Diámetros 4,5 / 5 / 6 mm.',
              'Punta PZD 2 y PZD 3.',
              'Acero cincado.',
            ],
 
            applications: [
              'Madera.',
              'Tableros derivados.',
              'Construcción de muebles.',
            ],
 
            pdfPage: '211',
          },
 
          {
            id: 'tapones',
            name: 'TAPONES',
 
            images: [
              require('../assets/images/03.00/03.03p12.jpg'),
            ],
 
            features: [
              'Polietileno.',
              'Para tornillos con agujero en la cabeza de ø 2,5 mm y 3 mm.',
              'Diámetros de cabeza: 12, 15 y 18 mm.',
              'Amplia gama de colores RAL.',
            ],
 
            applications: [
              'Acabado estético en carpintería.',
              'Muebles.',
              'Construcción de interiores.',
            ],
 
            pdfPage: '211',
          },
 
          {
            id: 'tapones-aw',
            name: 'TAPONES AW',
 
            images: [
              require('../assets/images/03.00/03.03p13.jpg'),
            ],
 
            features: [
              'Polietileno.',
              'Idóneo para tornillos con cabeza Torx y cabeza Assy.',
              'Disponibles en forma plana y redonda.',
              'Amplia gama de colores RAL.',
              'Compatibles con AW 20, AW 25 y AW 30.',
            ],
 
            applications: [
              'Acabado decorativo en carpintería.',
              'Muebles.',
              'Ventanas y puertas.',
            ],
 
            pdfPage: '212',
          },
 
        ],
      },
 
      {
        code: '03.04 (Pías / tornillería autoperforante)',
        name: 'Pías / tornillería autoperforante',
 
        products: [
 
          {
            id: 'pias-aw-zebra-avellanado',
            name: 'PIAS AW ZEBRA AVELLANADO',
 
            images: [
              require('../assets/images/03.00/03.04p1.jpg'),
            ],
 
            features: [
              'Sistema de accionamiento AW.',
              'Autotaladrante: forma y rosca en una sola operación.',
              'Disponible en acero inoxidable A2, acero cincado ZN y acero negro.',
              'Diámetros 2,9 / 3,5 / 3,9 / 4,2 / 4,8 / 5,5 / 6,3 mm.',
              'Reduce el tiempo de montaje en un 50%.',
            ],
 
            applications: [
              'Estructuras metálicas.',
              'Chapa.',
              'Materiales no férreos y PVC.',
            ],
 
            pdfPage: '213',
          },
 
          {
            id: 'pias-aw-zebra',
            name: 'PIAS AW ZEBRA',
 
            images: [
              require('../assets/images/03.00/03.04p2.jpg'),
            ],
 
            features: [
              'Sistema de accionamiento AW.',
              'Autotaladrante: taladra, rosca y atornilla en una sola operación.',
              'Recubrimiento ZN según Z-14.1-4.',
              'Diámetros 2,9 / 3,5 / 3,9 / 4,2 / 4,8 / 5,5 mm.',
              'AW solo válido para diámetros 4,2 y 4,8 mm.',
            ],
 
            applications: [
              'Montaje metálico.',
              'Construcción.',
              'Industria general.',
            ],
 
            pdfPage: '214',
          },
 
          {
            id: 'febos',
            name: 'FEBOS',
 
            images: [
              require('../assets/images/03.00/03.04p3.jpg'),
            ],
 
            features: [
              'Tornillo autoperforante para ventanas de PVC.',
              'Rosca autocortante de forma especial.',
              'Gama completa: avellanado, avellanado y cilíndrico.',
              'Disponible en versión Febos y Febos plus.',
              'Acero cincado y cromatizado.',
              'Certificación IFT (Nº 509 2010671 del 20.01.1998).',
            ],
 
            applications: [
              'Instalación de ventanas de PVC.',
              'Unión de perfil de PVC con refuerzo metálico.',
              'Fijación de herrajes al perfil reforzado.',
            ],
 
            pdfPage: '215',
          },
 
          {
            id: 'pias-zebra-cilindrico',
            name: 'PIAS ZEBRA CILÍNDRICO',
            subtitle: 'DIN 7504-N Cilíndrico (Art. Nº 211)',
 
            images: [
              require('../assets/images/03.00/03.04p4.jpg'),
            ],
 
            features: [
              'DIN 7504-N Cilíndrico (Art. Nº 211).',
              'El tornillo autoperforante para metal.',
              'Más rápido que cualquier broca.',
              'No es necesario granetear.',
              'Gran fuerza de apriete.',
            ],
 
            applications: [
              'Superficies planas metálicas.',
              'Chapa.',
              'Construcción metálica.',
            ],
 
            pdfPage: '216',
          },
 
          {
            id: 'pias-zebra-avellanado-metal',
            name: 'PIAS ZEBRA AVELLANADO PARA METAL',
            subtitle: 'DIN 7504-P Avellanado (Art. Nº 212)',
 
            images: [
              require('../assets/images/03.00/03.04p5.jpg'),
            ],
 
            features: [
              'DIN 7504-P Avellanado (Art. Nº 212).',
              'Cabeza extraplana, especialmente diseñada para cierre embutido de ventana corredera.',
              'Disponible en acero ZN, lacado blanco, inox A2 y ZN negro.',
              'Gran fuerza de apriete.',
            ],
 
            applications: [
              'Cierre embutido de ventanas correderas.',
              'Montaje de mamparas de baño.',
              'Fijación en acero y aluminio.',
            ],
 
            pdfPage: '216',
          },
 
          {
            id: 'pias-zebra-hexagonal',
            name: 'PIAS ZEBRA CABEZA HEXAGONAL',
            subtitle: 'DIN 7504K',
 
            images: [
              require('../assets/images/03.00/03.04p6.jpg'),
            ],
 
            features: [
              'DIN 7504K con cabeza hexagonal.',
              'Acero galvanizado (A3K).',
              'Taladra, rosca y atornilla en una misma operación.',
              'Certificado ETA 10/0184 para diámetro 4,2 y superior.',
              'Diámetros 3,5 / 4,2 / 4,8 / 5,5 / 6,3 mm.',
            ],
 
            applications: [
              'Fijación de perfiles metálicos.',
              'Estructuras de acero.',
              'Construcción industrial.',
            ],
 
            pdfPage: '217',
          },
 
          {
            id: 'pias-autoroscantes-fachada',
            name: 'PÍAS AUTOROSCANTES Y TORNILLOS DE FACHADA',
 
            images: [
              require('../assets/images/03.00/03.04p7.jpg'),
            ],
 
            features: [
              'Similar a DIN 7504-K con arandela dia. 19.',
              'Versión acero endurecido y galvanizado.',
              'Arandela con sello EPDM vulcanizado y resistente a los elementos.',
              'También disponible en inox A2 con arandela EPDM.',
              'Permiso de construcción general Z-14.1-4 / ETA 10/0184.',
            ],
 
            applications: [
              'Fijación de perfiles de acero en subestructuras.',
              'Fijación de perfiles de aluminio en subestructuras.',
              'Fachadas y cubiertas.',
            ],
 
            pdfPage: '218',
          },
 
          {
            id: 'pias-alados',
            name: 'PIAS ALADOS',
            subtitle: 'Según DIN 7982',
 
            images: [
              require('../assets/images/03.00/03.04p8.jpg'),
            ],
 
            features: [
              'Según DIN 7982.',
              'Tornillo autoperforante para fijación de madera sobre construcciones metálicas.',
              'Tratamiento superficial: bicromatadas.',
              'Las alas evitan el avance obligado del tornillo.',
              'Cabeza avellanada estriada.',
            ],
 
            applications: [
              'Fijación de madera sobre construcciones metálicas.',
              'Estructura de cubierta.',
              'Carpintería metálica.',
            ],
 
            pdfPage: '219',
          },
 
          {
            id: 'pias-alados-ruspert',
            name: 'PIAS ALADOS CON BAÑO RUSPERT',
 
            images: [
              require('../assets/images/03.00/03.04p9.jpg'),
            ],
 
            features: [
              'Baño Ruspert: sistema multicapa anticorrosivo.',
              'Resistencia en cámara salina: 500 horas (DIN 50021).',
              'Resistente al agua salada, sustancias químicas e influencias medioambientales.',
              'No corroe por contacto entre metales.',
              'Cabeza avellanada estriada.',
              'Sistema de accionamiento AW 40.',
            ],
 
            applications: [
              'Fijación de maderas blandas y duras sobre soportes metálicos.',
              'Construcción exterior.',
              'Ambientes marinos y corrosivos.',
            ],
 
            pdfPage: '219',
          },
 
          {
            id: 'zebra-pias-alados',
            name: 'ZEBRA PIAS ALADOS',
 
            images: [
              require('../assets/images/03.00/03.04p10.jpg'),
            ],
 
            features: [
              'Tornillo autoperforante para fijación de madera sobre construcciones metálicas.',
              'Sistema de accionamiento AW.',
              'Cabeza avellanada estriada.',
              'Acero galvanizado amarillo; versión gris con baño Ruspert.',
              'Diámetros 3,9 / 4,2 / 4,8 / 5,5 / 6,3 mm.',
            ],
 
            applications: [
              'Fijación de madera sobre estructuras metálicas.',
              'Cubiertas.',
              'Entarimados.',
            ],
 
            pdfPage: '220',
          },
 
        ],
      },
 
      {
        code: '03.05 (Remaches y tuercas remachables)',
        name: 'Remaches y tuercas remachables',
 
        products: [
 
          {
            id: 'tuerca-remachable-reborde-avellanado',
            name: 'TUERCA REMACHABLE ZEBRA',
            subtitle: 'Reborde avellanado – acero cincado',
 
            images: [
              require('../assets/images/03.00/03.05p1.jpg'),
            ],
 
            features: [
              'Acero cincado (M3 latón bicromatado).',
              'Alta resistencia a la torsión y a la tracción.',
              'Instalación desde un solo lado.',
              'Aplicación sencilla, rápida y prácticamente automática.',
              'Métricas M3 a M10.',
            ],
 
            applications: [
              'Chapas metálicas.',
              'Perfiles cerrados.',
              'Montaje industrial.',
            ],
 
            pdfPage: '221',
          },
 
          {
            id: 'tuerca-remachable-cabeza-plana',
            name: 'TUERCA REMACHABLE ZEBRA',
            subtitle: 'Cabeza plana',
 
            images: [
              require('../assets/images/03.00/03.05p2.jpg'),
            ],
 
            features: [
              'Acero cincado.',
              'Alta resistencia.',
              'Permite crear roscas desde un solo lado.',
              'Instalación rápida.',
              'Métricas M4 a M10.',
            ],
 
            applications: [
              'Industria metalmecánica.',
              'Automoción.',
              'Construcción de chapas.',
            ],
 
            pdfPage: '221',
          },
 
          {
            id: 'tuerca-remachable-vastago-moleteado',
            name: 'TUERCA REMACHABLE ZEBRA',
            subtitle: 'Vástago moleteado',
 
            images: [
              require('../assets/images/03.00/03.05p3.jpg'),
            ],
 
            features: [
              'Acero cincado.',
              'Vástago con moleteado para mayor resistencia al giro.',
              'Alta resistencia.',
              'Instalación desde un solo lado.',
              'Métricas M4 a M10.',
            ],
 
            applications: [
              'Chapas donde se requiere alta resistencia antirrotación.',
              'Industria general.',
              'Automoción.',
            ],
 
            pdfPage: '221',
          },
 
        ],
      },
 
      {
        code: '03.06 (Seguros)',
        name: 'Seguros',
 
        products: [
 
          {
            id: 'anillos-seguridad-din6799',
            name: 'ANILLOS DE SEGURIDAD DIN 6799',
            subtitle: 'DIN 6799',
 
            images: [
              require('../assets/images/03.00/03.06p1.jpg'),
            ],
 
            features: [
              'DIN 6799.',
              'Limita la libertad de acción de una pieza sobre un árbol.',
              'Transmite fuerzas de apriete y tracción.',
              'Diámetros desde 1,2 hasta 24 mm.',
              'Conjunto Art. Nº 964 490: 12 tamaños, 985 unidades.',
            ],
 
            applications: [
              'Fijación axial ligera sobre ejes.',
              'Maquinaria.',
              'Automoción.',
            ],
 
            pdfPage: '222',
          },
 
        ],
      },
 
      {
        code: '03.07 (Tornillería madera)',
        name: 'Tornillería madera',
 
        products: [
 
          {
            id: 'wupo-avellanado-a2',
            name: 'WÜPO AVELLANADO A2',
            subtitle: 'Tornillo avellanado rosca madera en acero inoxidable A2',
 
            images: [
              require('../assets/images/03.00/03.07p1.jpg'),
            ],
 
            features: [
              'Acero INOX A2 / AISI 302.',
              'Tornillo avellanado rosca madera.',
              'Excelente dureza por composición: cromo (Cr), níquel (Ni), azufre (S).',
              'Diámetros de 3 a 6 mm.',
            ],
 
            applications: [
              'Puertas y ventanas exteriores.',
              'Porticones.',
              'Aplicaciones en ambientes húmedos.',
            ],
 
            pdfPage: '223',
          },
 
          {
            id: 'wupofast',
            name: 'WÜPOFAST',
 
            images: [
              require('../assets/images/03.00/03.07p2.jpg'),
              require('../assets/images/03.00/03.07p2.1.jpg'),
              require('../assets/images/03.00/03.07p2.2.jpg'),
              require('../assets/images/03.00/03.07p2.3.jpg'),
              require('../assets/images/03.00/03.07p2.4.jpg'),
              require('../assets/images/03.00/03.07p2.5.jpg'),
            ],
 
            features: [
              'Punta de 20° para aplicación exacta sobre superficies duras.',
              'Revestimiento deslizante de plástico en pasos de rosca.',
              'Disponible en: cincado avellanado, cincado avellanado 1/2 rosca, bicromatado avellanado, bicromatado avellanado 1/2 rosca, latonado avellanado y cincado negro avellanado.',
              'Adecuado para tableros de aglomerado, laminado y MDF.',
              'Par de rotura muy superior al par de enroscado.',
            ],
 
            applications: [
              'Carpintería.',
              'Muebles.',
              'Tableros derivados de madera.',
              'Fibra de densidad mediana (MDF).',
            ],
 
            pdfPage: '224',
          },
 
        ],
      },
 
      {
        code: '03.08 (Tornillería métrica)',
        name: 'Tornillería métrica',
 
        products: [
 
          {
            id: 'torn-metrico-cilindrico-mortaja-plana',
            name: 'TORN. MÉTRICO CILÍNDRICO MORTAJA PLANA',
            subtitle: 'Según DIN 84 (ISO 1207)',
 
            images: [
              require('../assets/images/03.00/03.08p1.jpg'),
            ],
 
            features: [
              'Según DIN 84 (ISO 1207).',
              'Acero cincado, resistencia 4.8.',
              'Cabeza cilíndrica con mortaja plana.',
              'Métricas M2 a M12.',
            ],
 
            applications: [
              'Montajes mecánicos de precisión.',
              'Electrónica.',
              'Industria general.',
            ],
 
            pdfPage: '226',
          },
 
          {
            id: 'torn-metrico-cilindrico-mortaja-philips',
            name: 'TORN. MÉTRICO CILÍNDRICO MORTAJA PHILIPS',
            subtitle: 'Según DIN 7985 (ISO 7045)',
 
            images: [
              require('../assets/images/03.00/03.08p2.jpg'),
            ],
 
            features: [
              'Según DIN 7985 (ISO 7045).',
              'Acero cincado, resistencia 4.8.',
              'Cabeza cilíndrica con mortaja Philips.',
              'Métricas M2 a M10.',
            ],
 
            applications: [
              'Montajes mecánicos.',
              'Electrodomésticos.',
              'Industria general.',
            ],
 
            pdfPage: '226',
          },
 
          {
            id: 'torn-metrico-avellanado-philips',
            name: 'TORN. MÉTRICO AVELLANADO MORTAJA PHILIPS',
            subtitle: 'Según DIN 965 (ISO 7046)',
 
            images: [
              require('../assets/images/03.00/03.08p3.jpg'),
            ],
 
            features: [
              'Según DIN 965 (ISO 7046).',
              'Acero cincado, resistencia 4.8.',
              'Cabeza avellanada con mortaja Philips.',
              'Métricas M2 a M10.',
            ],
 
            applications: [
              'Montajes a ras de superficie.',
              'Carpintería metálica.',
              'Industria general.',
            ],
 
            pdfPage: '226',
          },
 
          {
            id: 'torn-metrico-hexagonal-media-rosca',
            name: 'TORN. MÉTRICO HEXAGONAL MEDIA ROSCA',
            subtitle: 'Según DIN 931 (ISO 4014)',
 
            images: [
              require('../assets/images/03.00/03.08p4.jpg'),
            ],
 
            features: [
              'Según DIN 931 (ISO 4014).',
              'Acero cincado, resistencia 8.8.',
              'Cabeza hexagonal, media rosca.',
              'Métricas M4 a M36.',
            ],
 
            applications: [
              'Estructuras metálicas.',
              'Maquinaria pesada.',
              'Construcción metálica.',
            ],
 
            pdfPage: '227',
          },
 
          {
            id: 'torn-metrico-hexagonal',
            name: 'TORN. MÉTRICO HEXAGONAL',
            subtitle: 'Según DIN 933 (ISO 4017)',
 
            images: [
              require('../assets/images/03.00/03.08p5.jpg'),
            ],
 
            features: [
              'Según DIN 933 (ISO 4017).',
              'Disponible en acero cincado resistencia 8.8 y 6.8, A4 e inox A2.',
              'Rosca completa.',
              'Métricas M3 a M36.',
            ],
 
            applications: [
              'Uniones estructurales.',
              'Maquinaria.',
              'Construcción.',
            ],
 
            pdfPage: '227',
          },
 
          {
            id: 'torn-metrico-tensilock',
            name: 'TORN. MÉTRICO TENSILOCK',
            subtitle: 'Similar a DIN 933 con arandela dentada',
 
            images: [
              require('../assets/images/03.00/03.08p6.jpg'),
            ],
 
            features: [
              'Similar a DIN 933, con arandela dentada integrada.',
              'Acero bicromatado, resistencia 8.8.',
              'Evita el aflojamiento por vibración.',
              'Métricas M5 a M12.',
            ],
 
            applications: [
              'Uniones sometidas a vibración.',
              'Maquinaria.',
              'Automoción.',
            ],
 
            pdfPage: '227',
          },
 
          {
            id: 'torn-metrico-allen-cilindrica',
            name: 'TORN. MÉTRICO ALLEN CABEZA CILÍNDRICA',
            subtitle: 'Según DIN 912 (ISO 4762)',
 
            images: [
              require('../assets/images/03.00/03.08p7.jpg'),
            ],
 
            features: [
              'Según DIN 912 (ISO 4762).',
              'Acero cincado negro o cincado, resistencia 8.8.',
              'También disponible en A2.',
              'Métricas M2 a M42.',
            ],
 
            applications: [
              'Maquinaria de precisión.',
              'Utillajes.',
              'Automoción.',
            ],
 
            pdfPage: '228',
          },
 
          {
            id: 'torn-metrico-allen-avellanada',
            name: 'TORN. MÉTRICO ALLEN CABEZA AVELLANADA',
            subtitle: 'Según DIN 7991',
 
            images: [
              require('../assets/images/03.00/03.08p8.jpg'),
            ],
 
            features: [
              'Según DIN 7991.',
              'Acero cincado, resistencia 10.9.',
              'También disponible en A2.',
              'Métricas M2 a M24.',
            ],
 
            applications: [
              'Montajes a ras en maquinaria.',
              'Utillajes.',
              'Industria general.',
            ],
 
            pdfPage: '228',
          },
 
          {
            id: 'torn-metrico-seguridad-pin',
            name: 'TORN. MÉTRICO DE SEGURIDAD CON PIN',
            subtitle: 'Acero inoxidable A2 - Mortaja Torx seguridad',
 
            images: [
              require('../assets/images/03.00/03.08p9.jpg'),
            ],
 
            features: [
              'Acero inoxidable A2.',
              'Mortaja Torx seguridad (requiere punta especial Art. Nº 614 352 6).',
              'Ideal para instalaciones de placas solares.',
              'Aplicaciones exteriores y antivandálicas.',
              'Métricas M4, M5, M6 y M8.',
            ],
 
            applications: [
              'Aplicaciones exteriores antivandálicas.',
              'Instalaciones solares.',
              'Fijaciones de seguridad.',
            ],
 
            pdfPage: '229',
          },
 
          {
            id: 'pernos-roscados-din939',
            name: 'PERNOS ROSCADOS DIN 939',
            subtitle: 'DIN 939',
 
            images: [
              require('../assets/images/03.00/03.08p10.jpg'),
            ],
 
            features: [
              'DIN 939.',
              'Disponibles en acero 5.8 brillante, 8.8 brillante, A2 y A4.',
              'Espiga roscada en ambos extremos.',
              'Métricas M6 a M20.',
            ],
 
            applications: [
              'Uniones desmontables.',
              'Maquinaria.',
              'Estructuras metálicas.',
            ],
 
            pdfPage: '230',
          },
 
          {
            id: 'torn-rosca-chapa-cabeza-plana-ranura',
            name: 'TORN. ROSCA-CHAPA CABEZA PLANA CON MORTAJA DE RANURA',
            subtitle: 'ISO 1481 / DIN 7971',
 
            images: [
              require('../assets/images/03.00/03.08p11.jpg'),
            ],
 
            features: [
              'ISO 1481 / DIN 7971.',
              'Acero cincado.',
              'También disponible en A2.',
              'Diámetros ST 2,2 a ST 6,3.',
            ],
 
            applications: [
              'Fijación en chapa metálica.',
              'Electrodomésticos.',
              'Industria general.',
            ],
 
            pdfPage: '232',
          },
 
          {
            id: 'torn-rosca-chapa-cabeza-hexagonal',
            name: 'TORN. ROSCA-CHAPA CABEZA HEXAGONAL',
            subtitle: 'ISO 1479 / DIN 7976',
 
            images: [
              require('../assets/images/03.00/03.08p12.jpg'),
            ],
 
            features: [
              'ISO 1479 / DIN 7976.',
              'Acero cincado.',
              'Diámetros ST 3,5 a ST 6,3.',
              'Medidas 3,5x95 a 8x25 mm.',
            ],
 
            applications: [
              'Fijación en chapa metálica.',
              'Construcción metálica.',
              'Industria general.',
            ],
 
            pdfPage: '232',
          },
 
          {
            id: 'torn-rosca-chapa-cilindrico-philips',
            name: 'TORN. ROSCA-CHAPA CILÍNDRICO MORTAJA PHILIPS',
            subtitle: 'ISO 7049 / DIN 7981',
 
            images: [
              require('../assets/images/03.00/03.08p13.jpg'),
            ],
 
            features: [
              'ISO 7049 / DIN 7981.',
              'Disponible en acero cincado, cincado negro, A. Inox A2 y lacado blanco.',
              'Punta PH1 a PH3 según diámetro.',
              'Diámetros ST 2,2 a ST 6,3.',
            ],
 
            applications: [
              'Fijación en chapa metálica.',
              'Electrodomésticos.',
              'Construcción.',
            ],
 
            pdfPage: '232',
          },
 
          {
            id: 'torn-rosca-chapa-avellanado-philips',
            name: 'TORN. ROSCA-CHAPA CABEZA AVELLANADA MORTAJA PHILIPS',
            subtitle: 'ISO 7050 / DIN 7982',
 
            images: [
              require('../assets/images/03.00/03.08p14.jpg'),
            ],
 
            features: [
              'ISO 7050 / DIN 7982.',
              'Acero cincado.',
              'También disponible en A. Inox A2.',
              'Diámetros ST 2,9 a ST 6,3.',
            ],
 
            applications: [
              'Fijación a ras en chapa metálica.',
              'Automoción.',
              'Electrodomésticos.',
            ],
 
            pdfPage: '233',
          },
 
          {
            id: 'torn-rosca-chapa-gota-sebo',
            name: 'TORN. ROSCA-CHAPA CABEZA GOTA DE SEBO MORTAJA PHILIPS',
            subtitle: 'ISO 7051 / DIN 7983',
 
            images: [
              require('../assets/images/03.00/03.08p15.jpg'),
            ],
 
            features: [
              'ISO 7051 / DIN 7983.',
              'Acero cincado negro.',
              'Cabeza con forma especial gota de sebo.',
              'Diámetros ST 2,2 a ST 6,3.',
            ],
 
            applications: [
              'Fijación en chapa.',
              'Automoción.',
              'Electrodomésticos.',
            ],
 
            pdfPage: '233',
          },
 
          {
            id: 'torn-rosca-chapa-ala-ancha-philips',
            name: 'TORN. ROSCA-CHAPA CABEZA ALA ANCHA MORTAJA PHILIPS',
            subtitle: 'ISO 7049 / DIN 7981',
 
            images: [
              require('../assets/images/03.00/03.08p16.jpg'),
            ],
 
            features: [
              'ISO 7049 / DIN 7981.',
              'Acero cincado negro.',
              'Cabeza con ala ancha para mayor superficie de apoyo.',
              'Medidas ø 3,9 x 12 a 4,8 x 95 mm.',
            ],
 
            applications: [
              'Fijación en chapa con superficies blandas.',
              'Plásticos.',
              'Construcción.',
            ],
 
            pdfPage: '233',
          },
 
          {
            id: 'torn-rosca-chapa-universales',
            name: 'TORNILLOS ROSCA-CHAPA UNIVERSALES',
            subtitle: 'Rosca según DIN 7976',
 
            images: [
              require('../assets/images/03.00/03.08p17.jpg'),
            ],
 
            features: [
              'Rosca según DIN 7976.',
              'Material: acero zincado pasivado (A2K) azul o negro.',
              'Cabeza hexagonal con arandela imperdible.',
              'Diámetros 4,8 / 5,5 / 6,3 / 8,0 mm.',
            ],
 
            applications: [
              'Fijación en chapa en general.',
              'Construcción metálica.',
              'Aplicaciones industriales.',
            ],
 
            pdfPage: '234',
          },
 
          {
            id: 'torn-rosca-chapa-torx-ala-ancha',
            name: 'TORNILLOS ROSCA-CHAPA TORX ALA ANCHA CINCADOS NEGROS',
 
            images: [
              require('../assets/images/03.00/03.08p18.jpg'),
            ],
 
            features: [
              'Tornillo rosca chapa con ala ancha y cabeza TORX.',
              'Cincados en negro.',
              'Mejor transmisión del par de apriete gracias a la mortaja TORX.',
              'Diámetros 3,9 / 4,2 / 4,8 mm.',
            ],
 
            applications: [
              'Ensamblaje y montajes en automoción.',
              'Chapa de todo tipo.',
              'Plásticos.',
            ],
 
            pdfPage: '234',
          },
 
        ],
      },
 
      {
        code: '03.09 (Tuercas)',
        name: 'Tuercas',
 
        products: [
 
          {
            id: 'tuercas-hexagonales',
            name: 'TUERCAS HEXAGONALES',
            subtitle: 'DIN 934. Norma métrica y rosca fina',
 
            images: [
              require('../assets/images/03.00/03.09p1.jpg'),
            ],
 
            features: [
              'DIN 934. Norma métrica y rosca fina.',
              'Acero cincado.',
              'También disponibles en A2 y A4.',
              'Métricas M2 a M45.',
            ],
 
            applications: [
              'Uniones atornilladas en general.',
              'Estructuras metálicas.',
              'Maquinaria.',
            ],
 
            pdfPage: '235',
          },
 
          {
            id: 'tuercas-escapes-ranuradas',
            name: 'TUERCAS DE ESCAPES RANURADAS',
            subtitle: 'DIN 14440 / DIN 14441',
 
            images: [
              require('../assets/images/03.00/03.09p2.jpg'),
            ],
 
            features: [
              'DIN 14440 (ancho de llave normal) y DIN 14441 (ancho de llave corto).',
              'Material: Acero cobreado.',
              'Resistencia a la temperatura hasta +400° C.',
              'Roscas M8x125, M10x150 y M8x100.',
            ],
 
            applications: [
              'Sistemas de escape de vehículos.',
              'Aplicaciones de alta temperatura.',
              'Automoción.',
            ],
 
            pdfPage: '236',
          },
 
          {
            id: 'tuercas-autoblocantes',
            name: 'TUERCAS HEXAGONALES AUTOBLOCANTES',
            subtitle: 'DIN 985 (Poly-Stop, forma baja) y DIN 982 (forma alta)',
 
            images: [
              require('../assets/images/03.00/03.09p3.jpg'),
            ],
 
            features: [
              'DIN 985 (Poly-Stop, forma baja) y DIN 982 (forma alta).',
              'Baño: cincada galvanizada según DIN 50 901, A2, bicromatado.',
              'Carcasa de metal con casquillo de materia sintética embutida.',
              'Calidad 8 y 10.',
              'Métricas M3 a M30.',
            ],
 
            applications: [
              'Uniones sometidas a vibración.',
              'Automoción.',
              'Maquinaria industrial.',
            ],
 
            pdfPage: '237',
          },
 
          {
            id: 'tuercas-metrica-ciega',
            name: 'TUERCAS MÉTRICA CIEGA',
            subtitle: 'Forma alta DIN 1587',
 
            images: [
              require('../assets/images/03.00/03.09p4.jpg'),
            ],
 
            features: [
              'Forma alta DIN 1587.',
              'Disponibles en acero cincado, bicromatado, latón, latón niquelado, latón cromado y A4.',
              'Impide el paso del tornillo más allá de la tuerca.',
              'Métricas M3 a M24.',
            ],
 
            applications: [
              'Acabado estético de uniones atornilladas.',
              'Protección del extremo de la rosca.',
              'Automoción y decoración.',
            ],
 
            pdfPage: '238',
          },
 
          {
            id: 'tuercas-dentada-tensilock',
            name: 'TUERCAS DENTADA TENSILOCK',
            subtitle: 'Similar a DIN 6923 con arandela dentada integrada',
 
            images: [
              require('../assets/images/03.00/03.09p5.jpg'),
            ],
 
            features: [
              'Similar a DIN 6923, con arandela dentada integrada.',
              'Acero calidad 8, bicromatado.',
              'Evita el aflojamiento por vibración.',
              'Métricas M4 a M16.',
            ],
 
            applications: [
              'Uniones sometidas a vibración.',
              'Automoción.',
              'Maquinaria.',
            ],
 
            pdfPage: '238',
          },
 
          {
            id: 'tuerca-seguridad-inviolable',
            name: 'TUERCA MÉTRICA SEGURIDAD INVIOLABLE ZN, A2',
 
            images: [
              require('../assets/images/03.00/03.09p6.jpg'),
            ],
 
            features: [
              'Acero inoxidable A2 y acero cincado calidad 8.',
              'Forma cónica que rompe la parte hexagonal por apriete.',
              'Inviolable una vez instalada.',
              'Métricas M6, M8 y M10.',
            ],
 
            applications: [
              'Fijaciones de seguridad antivandálicas.',
              'Instalaciones exteriores.',
              'Equipamiento urbano.',
            ],
 
            pdfPage: '238',
          },
 
        ],
      },
 
    ],
  },
];
 