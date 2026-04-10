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
            require('../assets/images/03.00/03.01p1.png'),
          ],

          features: [
            'Fabricadas en acero.',
            'Superficie lisa.',
            'Forma B.',
            'Disponibles sin baño o galvanizadas cincadas.',
            'Distribuyen mejor la carga sobre la superficie de contacto.',
          ],

          applications: [
            'Uniones con tornillos métricos.',
            'Montajes mecánicos.',
            'Distribución de carga sobre superficies blandas.',
            'Automoción.',
            'Construcción metálica.',
          ],

          measuresImages: [
            require('../assets/images/03.00/03.01p1m1.png'),
          ]
        },

        {
          id: 'arandelas-elasticas-dentadas',

          name: 'ARANDELAS ELÁSTICAS DENTADAS',
          subtitle: 'DIN 6798 - Dentado exterior',

          images: [
            require('../assets/images/03.00/03.01p2.png'),
          ],

          features: [
            'Fabricadas en acero.',
            'Dentado exterior.',
            'Tratamiento superficial cincado o bicromatado.',
            'Alta resistencia al aflojamiento.',
          ],

          applications: [
            'Bloqueo de tornillos y tuercas.',
            'Montajes mecánicos.',
            'Automoción.',
            'Maquinaria industrial.',
          ],

          measuresImages: [
            require('../assets/images/03.00/03.01p2m1.png'),
          ]
        }

      ]
    },

  {
  code: '03.02 (Graseras)',
  name: 'Graseras',

  products: [

    {
      id: 'engrasadores-conicos-rectos',

      name: 'ENGRASADORES CÓNICOS RECTOS',
      subtitle: 'DIN 71412C / DIN 71412B',

      images: [
        require('../assets/images/03.00/03.02p1.png'),
      ],

      features: [
        'Fabricados en acero.',
        'Tipo cónico recto.',
        'Alta resistencia mecánica.',
        'Diseñados para sistemas de lubricación mediante grasa.',
        'Compatibles con pistolas engrasadoras estándar.',
      ],

      applications: [
        'Sistemas de lubricación en maquinaria.',
        'Rodamientos.',
        'Articulaciones mecánicas.',
        'Automoción.',
        'Equipos industriales.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.02p1m1.png'),
      ]
    },

    {
      id: 'engrasadores-conicos-45',

      name: 'ENGRASADORES CÓNICOS A 45°',
      subtitle: 'DIN 71412A',

      images: [
        require('../assets/images/03.00/03.02p2.png'),
      ],

      features: [
        'Fabricados en acero.',
        'Diseño en ángulo de 45°.',
        'Facilitan el acceso a puntos de lubricación difíciles.',
        'Alta resistencia al desgaste.',
        'Compatibles con pistolas engrasadoras estándar.',
      ],

      applications: [
        'Lubricación de maquinaria.',
        'Automoción.',
        'Equipos industriales.',
        'Rodamientos y articulaciones.',
        'Puntos de engrase de difícil acceso.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.02p2m1.png'),
      ]
    }

  ]
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
        require('../assets/images/03.00/03.03p1.png'),
      ],

      features: [
        'Fabricados en acero.',
        'Rosca métrica.',
        'Filo angular para mejor fijación.',
        'Alta resistencia mecánica.',
        'Disponibles en múltiples combinaciones de métrica y longitud.',
      ],

      applications: [
        'Fijación de componentes mecánicos.',
        'Montajes industriales.',
        'Maquinaria.',
        'Automoción.',
        'Aplicaciones de posicionamiento y bloqueo.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.03p1m1.png'),
      ]
    },

    {
      id: 'cancamo-hembra-din-582',

      name: 'CÁNCAMO HEMBRA',
      subtitle: 'DIN 582 galvanizado',

      images: [
        require('../assets/images/03.00/03.03p2.png'),
      ],

      features: [
        'Fabricado en acero galvanizado.',
        'Alta resistencia para aplicaciones de elevación.',
        'Diseñado para rosca métrica.',
        'Cumple con norma DIN 582.',
      ],

      applications: [
        'Elevación de cargas.',
        'Puntos de anclaje.',
        'Maquinaria industrial.',
        'Manipulación de equipos.',
        'Construcción y montaje.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.03p2m1.png'),
      ]
    }

  ]
},
{
  code: '03.04 (Pías / tornillería autoperforante)',
  name: 'Pías / tornillería autoperforante',

  products: [

    {
      id: 'pias-aw-zebra-avellanado',

      name: 'PIAS AW ZEBRA AVELLANADO',

      images: [
        require('../assets/images/03.00/03.04p1.png'),
      ],

      features: [
        'Tornillo autotaladrante.',
        'Cabeza avellanada.',
        'Sistema de accionamiento AW.',
        'Perfora, rosca y fija en una sola operación.',
        'Gran transmisión de par de apriete.',
        'Reduce el tiempo de montaje hasta un 50%.',
        'Disponible en acero cincado y acero inoxidable A2.',
      ],

      applications: [
        'Montaje de estructuras metálicas.',
        'Fijación en chapa metálica.',
        'Construcción metálica.',
        'Instalaciones industriales.',
        'Aplicaciones en PVC y materiales no férricos (inox A2).',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.04p1m1.png'),
      ]
    },

    {
      id: 'pias-aw-zebra',

      name: 'PIAS AW ZEBRA',

      images: [
        require('../assets/images/03.00/03.04p2.png'),
      ],

      features: [
        'Tornillo autotaladrante de alto rendimiento.',
        'Sistema de accionamiento AW.',
        'Perfora más rápido que una broca convencional.',
        'Gran transmisión del par de apriete.',
        'Alta duración del sistema de accionamiento.',
        'Disponible en recubrimiento zincado Zebra ZN.',
      ],

      applications: [
        'Montaje de estructuras metálicas.',
        'Fijación de chapa.',
        'Construcción industrial.',
        'Instalaciones metálicas.',
        'Montaje de componentes metálicos.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.04p2m1.png'),
      ]
    }

  ]
},{
  code: '03.05 (Remaches y tuercas remachables)',
  name: 'Remaches y tuercas remachables',

  products: [

    {
      id: 'tuerca-remachable-reborde-avellanado',

      name: 'TUERCA REMACHABLE ZEBRA',
      subtitle: 'Reborde avellanado – acero cincado',

      images: [
        require('../assets/images/03.00/03.05p1.png'),
      ],

      features: [
        'Tuerca remachable con reborde avellanado.',
        'Fabricada en acero cincado.',
        'M3 fabricada en latón bicromatado.',
        'Permite unir piezas mediante remachado y posteriormente atornillar.',
        'Alta resistencia a la torsión.',
        'Instalación desde un solo lado de la pieza.',
      ],

      applications: [
        'Uniones en chapas metálicas.',
        'Perfiles cerrados.',
        'Estructuras de paredes delgadas.',
        'Montajes industriales.',
        'Fijaciones donde no se puede acceder por ambos lados.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.05p1m1.png'),
      ]
    },

    {
      id: 'tuerca-remachable-cabeza-plana',

      name: 'TUERCA REMACHABLE ZEBRA',
      subtitle: 'Cabeza plana',

      images: [
        require('../assets/images/03.00/03.05p2.png'),
      ],

      features: [
        'Tuerca remachable con cabeza plana.',
        'Fabricada en acero de alta resistencia.',
        'Permite crear roscas en materiales delgados.',
        'Alta capacidad de carga en la rosca.',
        'Instalación rápida mediante remachadora.',
      ],

      applications: [
        'Montaje en chapa metálica.',
        'Industria metalmecánica.',
        'Construcción de estructuras ligeras.',
        'Automoción.',
        'Equipos industriales.',
      ],

      measuresImages: [
        require('../assets/images/03.00/03.05p2m1.png'),
      ]
    }

  ]
}]
}
]