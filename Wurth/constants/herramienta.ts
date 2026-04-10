export const categories = [
{
    name: 'HERRAMIENTAS',
    subcategories: [

      {
        code: '07.01',
        name: 'Destornilladores',
        products: [
          {
            id: 'destornillador-plano-mini',
            name: 'DESTORNILLADOR PLANO - MINI',
            subtitle: 'Varilla cilíndrica, cromado mate',
            description: 'Destornillador de modelo corto ideal para trabajos en espacios reducidos con máxima ergonomía.',
            features: [
              'Modelo corto para áreas de difícil acceso.',
              'Punta: DIN 5264-A, ISO 2380.',
              'Norma: DIN 5265.',
              'Mango ergonómico con excelente transmisión de fuerza.',
            ],
            applications: [
              'Ajustes mecánicos en espacios estrechos.',
              'Mantenimiento de equipos compactos.',
            ],
            images: [require('../assets/herramientas/07.01p1.jpeg')],
            measuresImages: [require('../assets/herramientas/07.01p1m1.png')],
          },
        ],
      },

      {
        code: '07.02',
        name: 'Alicates',
        products: [
          {
            id: 'alicate-fuerza-lateral',
            name: 'ALICATE DE FUERZA LATERAL',
            subtitle: 'Zebra Quality - DIN ISO 5749',
            description: 'Alicate de alto rendimiento diseñado para trabajos de gran demanda y cargas continuas con baja aplicación de fuerza.',
            features: [
              'Norma: DIN ISO 5749.',
              'Mangos: Zebra de 2 componentes.',
              'Filo cortante: Endurecidos por inducción.',
              'Uniones: Centradas con eje forjado.',
            ],
            applications: [
              'Corte de alambre blando, medio, duro y cementado.',
              'Uso industrial intensivo.',
            ],
            images: [require('../assets/herramientas/07.02p1.jpeg')],
            measuresImages: [require('../assets/herramientas/07.02p1m1.png')],
          },
          {
            id: 'alicates-multiregulables',
            name: 'ALICATES MULTIREGULABLES',
            subtitle: 'Ajuste mediante botón - 11 posiciones',
            description: 'Alicates de alta precisión con sistema de articulación incorporada y ajuste rápido para diversos tamaños de piezas.',
            features: [
              'Articulación incorporada para mayor estabilidad.',
              'Material: Acero-electro, Cromo-Vanadio, endurecido.',
              '11 posiciones exactas con solo apretar un botón.',
              'Mango con funda de PVC para un agarre seguro.',
              'Versión: Pulido con acabado profesional.',
            ],
            applications: [
              'Aplicación en tubos y tuercas.',
              'Trabajos de fontanería y mantenimiento mecánico.',
              'Sujeción de piezas de diferentes diámetros.',
            ],
            images: [
              require('../assets/herramientas/07.02p2.jpeg')
            ],
            measuresImages: [
              require('../assets/herramientas/07.02p2m1.png'),
            ],
          },
          {
            id: 'pinzas-para-segmentos',
            name: 'PINZAS PARA SEGMENTOS',
            subtitle: 'Versión niquelado brillante',
            description: 'Herramienta especializada para el manejo seguro de segmentos de pistón sin riesgo de rotura o deformación.',
            features: [
              'Diseñada específicamente para montar y desmontar segmentos de pistones.',
              'Versión con acabado niquelado brillante para resistencia a la corrosión.',
              'Mecanismo de apertura uniforme para evitar daños en los anillos.',
              'Tamaño 2 con longitud de 240 mm (9 1/2").',
              'Mangos ergonómicos recubiertos para mejor control.',
            ],
            applications: [
              'Reparación de motores de combustión.',
              'Instalación de anillos de pistón en diámetros de 90 - 140 mm.',
              'Mantenimiento automotriz profesional.',
            ],
            images: [
              require('../assets/herramientas/07.02p3.jpeg')
            ],
            measuresImages: [
              require('../assets/herramientas/07.02p3m1.png'),
            ],
          },

        ],
      },
      {
        code: '07.03',
        name: 'Llaves',
        products: [
          {
            id: 'llave-inglesa-ajustable',
            name: 'LLAVES INGLESA',
            subtitle: 'Cabezal ajustable para métrico y pulgada',
            description: 'Llave ajustable de alta calidad con escala métrica integrada para un ajuste rápido y preciso en diversos tamaños de pernos.',
            features: [
              'Norma: DIN 3117 / ISO 6787.',
              'Versión: Cromo vanadio pulido.',
              'Geometría: Cabeza desviada a 22,5° para mejor acceso.',
              'Boca ajustable con escala métrica grabada para facilitar el ajuste.',
              'Disponible en medidas desde 4" hasta 18".',
            ],
            applications: [
              'Lugares de difícil acceso gracias a su geometría.',
              'Ajuste de tuercas y pernos en métrico y pulgadas.',
              'Mantenimiento general y fontanería.',
            ],
            images: [
              require('../assets/herramientas/07.03p1.jpeg')
            ],
            measuresImages: [
              require('../assets/herramientas/07.03p1m1.png'),
            ],
          },
        ],
      },
      {
        code: '07.04',
        name: 'Carracas',
        products: [
          // Producto 1: 72 Dientes
          {
            id: 'carraca-wurth-1-2-72-dientes',
            name: 'CARRACA WÜRTH 1/2" - 72 DIENTES',
            subtitle: 'Paso fino para trabajos de precisión',
            description: 'Carraca con cabeza delgada y compacta, ideal para espacios reducidos donde se requiere un ángulo de giro mínimo.',
            features: [
              'Dentado fino con 72 dientes (5° de ángulo de giro).',
              'Disco selector de giro rápido y fácil.',
              'Accionador más grande que la cabeza para uso con una sola mano.',
              'Maneral cromado y ergonómico con inclinación ajustada.',
              'Norma: DIN 3122, ISO 3315.',
            ],
            applications: [
              'Trabajos de precisión en espacios estrechos.',
              'Mantenimiento automotriz e industrial.',
            ],
            images: [require('../assets/herramientas/07.04p1.jpeg')],
            measuresImages: [require('../assets/herramientas/07.04p1m1.png')],
          },
        ],
      },
    ],
  },
];