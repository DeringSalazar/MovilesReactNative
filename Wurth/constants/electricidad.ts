export const categories = [
  {
    name: 'ELECTRICIDAD',
    subcategories: [

      // ── 06.01 Terminales ──────────────────────────────────────
      {
        code: '06.01 (Terminales)',
        name: 'Terminales',
        products: [

          {
            id: 'term-puntera-cuello',
            name: 'TERM. DE PUNTERA CON CUELLO DE PLÁSTICO',
            subtitle: 'DIN 46228 Apart. 4',
            description: 'Terminal de puntera con cuello de plástico para protección de cables.',
            features: [
              'Norma: DIN 46228 Apart. 4.',
              'Diámetros disponibles: 0,25 mm² a 50,00 mm².',
              'Colores según sección para fácil identificación.',
              'Art. N° desde 557 300 253 hasta 557 300 502.',
              'Unidad de empaque: 50 a 500 unidades según modelo.',
            ],
            applications: [
              'Conexión de cables en tableros eléctricos.',
              'Terminación de conductores en bornes.',
              'Instalaciones de baja tensión.',
            ],
            images: [
              require('../assets/electricidad/06.01p1.png')
            ],
            measuresImages: [
              require('../assets/electricidad/06.01p1m1.png'),
            ],
          },

          {
            id: 'term-puntera-doble',
            name: 'PUNTERAS DOBLES',
            subtitle: 'Para dos cables de 0,5 a 16 mm²',
            description: 'Permiten una unión compacta de dos cables en un mismo terminal.',
            features: [
              'Para dos cables de 0,5 a 16 mm².',
              'Unión compacta de dos cables simultáneamente.',
              'Secciones disponibles: 2x0,50/8 hasta 2x16,00/14.',
              'Art. N° desde 557 402 hasta 557 409.',
              'Unidad de empaque: 50 a 500 unidades según modelo.',
            ],
            applications: [
              'Conexión doble en bornes de tableros.',
              'Instalaciones donde se requiere unir dos conductores.',
              'Ahorro de espacio en cajas de conexión.',
            ],
            images: [
              require('../assets/electricidad/06.01p1b.png'),
            ],
            measuresImages: [
              require('../assets/electricidad/06.01p1bm1.png'),
            ],
          },

          {
            id: 'term-ojillo',
            name: 'TERMINAL DE OJILLO',
            subtitle: 'DIN 46211 — Material: latón estañado',
            description: 'Terminal de ojillo para fijación mecánica con tornillo.',
            features: [
              'Norma: DIN 46211.',
              'Material: latón estañado.',
              'Sección transversal: 6,0 a 120 mm².',
              'Agujero de brida: M6 a M12.',
              'Art. N° desde 0557 921 9 hasta 0557 924 4.',
              'Unidad de empaque: 5/25/100 según modelo.',
            ],
            applications: [
              'Fijación de cables a bornes roscados.',
              'Conexiones en tableros de distribución.',
              'Instalaciones industriales y residenciales.',
            ],
            images: [
              require('../assets/electricidad/06.01p2.png'),
            ],
            measuresImages: [
              require('../assets/electricidad/06.01p2m1.png'),
            ],
          },

          {
            id: 'term-aislados',
            name: 'TERMINALES AISLADOS',
            subtitle: 'Empalme · Anular · Faston hembra · Horquilla',
            description: 'Terminales reforzados con casquillo de cobre. Latón estañado, temperatura hasta 75°C.',
            features: [
              'Longitud del cañón y estrías internas para mejor retención del cable.',
              'Fabricación en latón estañado.',
              'Temperatura de trabajo: hasta 75°C.',
              'Secciones: 0,5-1,5 / 1,5-2,5 / 4,0-6,0 mm².',
              'Para crimpar usar herramienta Art. N° 558 110 o 714 107 300.',
              'Tipos: Empalme, Anular, Faston hembra, Faston hembra totalmente aislado, Horquilla.',
              'Art. N° desde 558 901 hasta 558 955.',
            ],
            applications: [
              'Conexiones en instalaciones eléctricas domésticas e industriales.',
              'Empalme y derivación de conductores.',
              'Conexión a bornes anulares y tipo faston.',
            ],
            images: [
              require('../assets/electricidad/06.01p3.jpeg'),
              require('../assets/electricidad/06.01p4.jpeg'),
              require('../assets/electricidad/06.01p5.jpeg'),
              require('../assets/electricidad/06.01p6.jpeg'),
              require('../assets/electricidad/06.01p7.jpeg'),
            ],
            measuresImages: [
              require('../assets/electricidad/06.01p4m1.png'),
            ],
          },
        ],
      },

      // ── Subcategorías pendientes ──────────────────────────────
      {
        code: '06.02 (Pendiente)',
        name: 'Subcategoría 2',
        products: [],
      },
      {
        code: '06.03 (Pendiente)',
        name: 'Subcategoría 3',
        products: [],
      },
      {
        code: '06.04 (Pendiente)',
        name: 'Subcategoría 4',
        products: [],
      },
      {
        code: '06.05 (Pendiente)',
        name: 'Subcategoría 5',
        products: [],
      },
    ],
  },
];