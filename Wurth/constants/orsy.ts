interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  images?: any[];
  features?: string[];
  applications?: string[];
  measuresImages?: any[];
}

export const categories = [
  {
    name: 'ORSY',
    subcategories: [
      {
        code: '10.01 (ORSY 100)',
        name: 'ORSY 100',
        products: [
          {
            id: 'pasadores-elasticos-pequenos',
            name: 'PASADORES ELÁSTICOS DIN 1481 (pequeños)',
            subtitle: 'Conjunto surtido 2x20 - 6x60 mm',
            description:
              'Conjunto surtido de pasadores elásticos DIN 1481 en maletín ORSY 100. Contiene 12 medidas de 2x20 a 6x60 mm, 1100 piezas en total.',
            features: [
              'Norma: DIN 1481.',
              '12 medidas de 2x20 - 6x60 mm.',
              'Contenido: 1100 piezas.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Fijación y retención mediante pasadores elásticos en aplicaciones mecánicas generales.',
            ],
            images: [
               require('../assets/images/10.00/10.01.png'),
            ],
          },
          {
            id: 'pasadores-elasticos-grandes',
            name: 'PASADORES ELÁSTICOS DIN 1481 (grandes)',
            subtitle: 'Conjunto surtido 7x40 - 12x60 mm',
            description:
              'Conjunto surtido de pasadores elásticos DIN 1481 en maletín ORSY 100. Contiene 12 medidas de 7x40 a 12x60 mm, 240 piezas en total.',
            features: [
              'Norma: DIN 1481.',
              '12 medidas de 7x40 - 12x60 mm.',
              'Contenido: 240 piezas.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Fijación y retención mediante pasadores elásticos en aplicaciones mecánicas generales.',
            ],
            images: [
              
            ],
          },
          {
            id: 'pasadores-din94',
            name: 'PASADORES DIN 94 CINCADO',
            subtitle: 'Conjunto surtido 1,6x20 - 6,3x63 mm',
            description:
              'Conjunto surtido de pasadores DIN 94 cincados en maletín ORSY 100. Contiene 12 medidas de 1,6x20 a 6,3x63 mm, 1525 piezas en total.',
            features: [
              'Norma: DIN 94.',
              'Acabado: Cincado.',
              '12 medidas de 1,6x20 - 6,3x63 mm.',
              'Contenido: 1525 piezas.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Fijación de elementos con pasadores partidos en aplicaciones mecánicas y de automoción.',
            ],
            images: [
               require('../assets/images/10.00/10.03.png'),
            ],
          },
          {
            id: 'arandelas-estanqueidad-aluminio',
            name: 'ARANDELAS DE ESTANQUEIDAD DE ALUMINIO',
            subtitle: 'DIN 7603 Forma A',
            description:
              'Conjunto surtido de arandelas de estanqueidad de aluminio DIN 7603 Forma A en maletín ORSY 100. Contiene 18 medidas de 6x10 a 30x36 mm, 525 piezas.',
            features: [
              'Norma: DIN 7603, Forma A.',
              'Material: Aluminio.',
              '18 medidas de 6x10 - 30x36 mm.',
              'Contenido: 525 piezas.',
              'Almacenadas en maletín ORSY 100.',
            ],
            applications: [
              'Sellado de juntas en conexiones hidráulicas, tapones y racores.',
            ],
            images: [
               require('../assets/images/10.00/10.04.png'),
            ],
          },
          {
            id: 'arandelas-estanqueidad-cobre',
            name: 'ARANDELAS DE ESTANQUEIDAD DE COBRE',
            subtitle: 'DIN 7603 Forma A',
            description:
              'Conjunto surtido de arandelas de estanqueidad de cobre DIN 7603 Forma A en maletín ORSY 100. Contiene 18 medidas de 6x10 a 32x38 mm, 1140 piezas.',
            features: [
              'Norma: DIN 7603, Forma A.',
              'Material: Cobre.',
              '18 medidas de 6x10 - 32x38 mm.',
              'Contenido: 1140 piezas.',
              'Almacenadas en maletín ORSY 100.',
            ],
            applications: [
              'Sellado de juntas en conexiones hidráulicas, tapones y racores.',
            ],
            images: [
               require('../assets/images/10.00/10.05.png'),
            ],
          },
          {
            id: 'arandelas-estanqueidad-tapones-aceite',
            name: 'ARANDELAS DE ESTANQUEIDAD PARA TAPONES DE ACEITE',
            subtitle: 'Conjunto surtido diversas versiones',
            description:
              'Conjunto surtido de arandelas de estanqueidad para tapones de aceite en maletín ORSY 100. Contiene 12 medidas de 6x10 a 26x32 mm, 575 piezas. Adecuadas para la mayoría de vehículos.',
            features: [
              'Diversas versiones para tapones de aceite.',
              '12 medidas de 6x10 - 26x32 mm.',
              'Contenido: 575 piezas.',
              'Adecuadas para la mayoría de vehículos.',
              'Almacenadas en maletín ORSY 100.',
            ],
            applications: [
              'Sellado de tapones de aceite en vehículos de automoción y maquinaria.',
            ],
            images: [
               require('../assets/images/10.00/10.06.png'),
            ],
          },
          {
            id: 'cjto-oring-pulgadas',
            name: 'CJTO. ORING PULGADAS',
            subtitle: 'Conjuntos disponibles en pulgadas y métricas',
            description:
              'Conjunto surtido de juntas tóricas O-Ring disponible en medidas en pulgadas y métricas, almacenado en maletín ORSY 100.',
            features: [
              'Conjuntos en pulgadas: Art. Nº 964 468 - 440 piezas de ø 5,28 a 36,1 mm.',
              'Conjuntos en métricas: Art. Nº 964 468 1 - 1050 piezas de ø 3,0 a 24,0 mm.',
              'Conjuntos en métricas: Art. Nº 964 468 2 - 330 piezas de ø 25,0 a 35,0 mm.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Talleres de reparación de automóviles, maquinaria agrícola, empresas transportistas, de autocares, parques de automóviles, maquinaria para la construcción, talleres de mantenimiento, construcción mecánica, etc.',
            ],
            images: [
               require('../assets/images/10.00/10.07.png'),
            ],
          },
          {
            id: 'cjto-juntas-toricas',
            name: 'CONJUNTO JUNTAS TÓRICAS UNIVERSAL',
            subtitle: 'Maletín ORSY 100 con pegamento, plantilla y cordón tórico',
            description:
              'Conjunto universal de juntas tóricas en maletín ORSY 100. Incluye pegamento super rápido, plantilla de corte y cordones tóricos en múltiples diámetros.',
            features: [
              'Art. Nº 0964 468 3.',
              'Incluye pegamento super rápido Cúter (Art. Nº 0893 09).',
              'Incluye plantilla de cortar (Art. Nº 0715 66 06).',
              'Cordones tóricos en diámetros: ø 1,6 / ø 2,4 / ø 3,0 / ø 5,7 / ø 8,4.',
              'Total: 8 artículos incluidos.',
              'Almacenado en maletín ORSY 100.',
            ],
            applications: [
              'Fabricación y reparación de juntas tóricas a medida en talleres mecánicos, hidráulicos y neumáticos.',
            ],
            images: [
               require('../assets/images/10.00/10.08.png'),
            ],
            measuresImages: [
              require('../assets/images/10.00/10.08m1.png'),
            ]
          },
          {
            id: 'cjto-engrasadores',
            name: 'CJTO. ENGRASADORES',
            subtitle: 'Engrasadores ZN DIN 71412 A, B, C',
            description:
              'Conjunto de engrasadores cincados DIN 71412 en sus formas A, B y C, almacenados en maletín ORSY 100. 600 piezas en total con 12 referencias.',
            features: [
              'Art. Nº 0964 986.',
              'Norma: DIN 71412. Tipos A, B y C.',
              'Acabado: Zinc (ZN).',
              'Medidas disponibles: M6x1, M8x1, M10x1 y Ø6, Ø8, Ø10 en alturas H1, H2 y H3.',
              'Total: 600 piezas en 12 referencias distintas.',
              'U/E de cada referencia: 50 piezas.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Engrase de rodamientos, articulaciones y puntos de lubricación en maquinaria industrial y de automoción.',
            ],
            images: [
               require('../assets/images/10.00/10.09.png'),
            ],
            measuresImages: [
              require('../assets/images/10.00/10.09m1.png'),
            ]
          },
          {
            id: 'cjto-brocas-sds-plus',
            name: 'CJTO. BROCAS SDS PLUS',
            subtitle: 'Surtido de brocas SDS Plus en maletín ORSY 100',
            description:
              'Conjunto surtido de brocas SDS Plus en varios tamaños, almacenadas en maletín ORSY 100.',
            features: [
              'Art. No. 00964-648.',
              'Tamaños disponibles: 5x110, 6x110, 6x160, 8x160, 10x210, 12x210 mm.',
              'Almacenadas en maletín ORSY 100.',
            ],
            applications: [
              'Perforación en hormigón y mampostería con martillos perforadores con sistema SDS Plus.',
            ],
            images: [
               require('../assets/images/10.00/10.10.png'),
            ],
          },
          {
            id: 'fusibles-ato',
            name: 'CONJUNTO DE FUSIBLES ATO',
            subtitle: 'Surtido 160 piezas',
            description:
              'Conjunto surtido de fusibles ATO en maletín ORSY 100. 160 piezas en amperajes de 3 a 30 A.',
            features: [
              'Art. Nº 964 731.',
              'Contenido: 160 piezas.',
              '20 unidades por cada valor: 3 / 5 / 7,5 / 10 / 15 / 20 / 25 / 30 amperes.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Protección de circuitos eléctricos en vehículos de automoción.',
            ],
            images: [
               require('../assets/images/10.00/10.11.png'),
            ],
          },
          {
            id: 'fusibles-mini-max',
            name: 'CONJUNTO DE FUSIBLES MINI / MAX',
            subtitle: 'Surtido 170 piezas Mini y Maxi',
            description:
              'Conjunto surtido de fusibles Mini y Maxi en maletín ORSY 100. 170 piezas con amplio rango de amperajes.',
            features: [
              'Art. Nº 964 731 0.',
              'Contenido: 170 piezas.',
              'Fusibles Mini: 10 uds x 2/3/4/5/7,5/10/15/20/25/30 amperes.',
              'Fusibles Maxi: 10 uds x 20/30/40/50/60/70/80 amperes.',
              'Almacenados en maletín ORSY 100.',
            ],
            applications: [
              'Protección de circuitos eléctricos en vehículos de automoción, incluyendo circuitos de alta intensidad.',
            ],
            images: [
               require('../assets/images/10.00/10.12.png'),
            ],
          },
          {
            id: 'punteras-aisladas',
            name: 'PUNTERAS AISLADAS',
            subtitle: 'Surtido 525 piezas, 9 tamaños',
            description:
              'Conjunto surtido de punteras aisladas en maletín ORSY 100. 525 piezas en 9 tamaños, incluye alicate especial.',
            features: [
              'Art. Nº 964 557 0.',
              'Contenido: 525 piezas en 9 tamaños.',
              'Rango de tamaños: 0,5 mm² x 14,2 mm a 16 mm² x 22,7 mm.',
              'Incluye alicate especial.',
              'Almacenadas en maletín ORSY 100.',
            ],
            applications: [
              'Terminación de conductores eléctricos para conexión a bornes y regletas en instalaciones eléctricas.',
            ],
            images: [
               require('../assets/images/10.00/10.13.png'),
            ],
          },
        ],
      },
    ],
  },
];