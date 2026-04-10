/*interface Product {
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
  name: 'QUIMICOS',
  subcategories: [
    {
      code: '02.01 (Selladores y juntas químicas)',
      name: 'Selladores y juntas químicas',
      products: [
        {
          id: 'pega-sella-kd',

          name: 'PEGA Y SELLA K + D',
          subtitle: 'Adhesivo + sellante elástico base poliuretano (PU)',

          description:
            'Adhesivo sellante monocomponente de alto rendimiento mecánico que permite pegar y sellar materiales de distinta naturaleza con gran resistencia y elasticidad.',

          images: [
            require('../assets/images/02.00/02.01p1.png'),
            require('../assets/images/02.00/02.01p1.2.png'),
            require('../assets/images/02.00/02.01p1.3.png'),
          ],

          features: [
            'Adhesivo sellante monocomponente de alto rendimiento mecánico.',
            'Pega y sella simultáneamente con uniones flexibles capaces de absorber vibraciones y dilataciones.',
            'Permite unir materiales de diferente naturaleza con gran efectividad.',
            'Puede pintarse una vez seco con la mayoría de pinturas, incluso pinturas al agua.',
            'Una vez curado puede lijarse manualmente o a máquina.',
            'Certificado para contacto con alimentos según EN 1186 y ENV 13130.',
            'Excelente adhesión sobre acero, acero inoxidable, galvanizado y aluminio.',
            'Compatible con madera, vidrio, cemento armado y numerosos materiales plásticos (excepto PE, PP y PTFE).',
          ],

          applications: [
            'Reparación y construcción de turismos y vehículos industriales.',
            'Carrocerías de vehículos industriales y transformación de frigoríficos.',
            'Aplicaciones en cisternas y sistemas de climatización.',
            'Sellado general en industria naval.',
            'Aplicaciones en construcción, metalurgia, carpintería e industria general.',
          ],

          measuresImages: [
            require('../assets/images/02.00/02.01p1m1.png'),
          ]
        },

        {
          id: 'cola-spray-alta-resistencia',

          name: 'COLA EN SPRAY ALTA RESISTENCIA',
          subtitle: 'Adhesivo de contacto en spray',

          images: [
            require('../assets/images/02.00/02.01p2.png'),
          ],

          features: [
            'Adhesivo de contacto en spray con adherencia inmediata.',
            'Especialmente eficaz para superficies porosas.',
            'Secado rápido con tiempo de ventilación aproximado de 10 a 20 minutos.',
            'Alta resistencia a la humedad.',
            'Resistente a temperaturas entre -40 °C y 80 °C.',
            'Boquilla ajustable para aplicación vertical u horizontal.',
            'Libre de siliconas.',
          ],

          applications: [
            'Pegado de plásticos.',
            'Fijación de tejidos.',
            'Pegado de espumas y corcho.',
            'Aplicación en láminas, papel y moquetas.',
            'Instalación de techos y espumas insonorizantes de capó.',
          ],

          measuresImages: [
            require('../assets/images/02.00/02.01p2m1.png'),
          ]
        }
      ],
    },
  {
  code: '02.02 (Adhesivos y pegamento)',
  name: 'Adhesivos y pegamento',
  products: [
    {
      id: 'silicona-especial-250',

      name: 'SILICONA ESPECIAL 250',
      subtitle: 'Pasta de estanqueidad resistente a altas temperaturas',

      images: [
        require('../assets/images/02.00/02.02p1.png'),
      ],

      features: [
        'Pasta de estanqueidad y plasticidad permanente resistente a elevadas temperaturas y vibraciones.',
        'Especial para motores y carcasas.',
        'Resistente a los carburantes.',
        'Elevada capacidad adhesiva.',
        'No forma hilos durante la aplicación.',
        'No escurre en aplicaciones verticales o hacia abajo.',
        'Temperatura de trabajo hasta 270°C (300°C en periodos cortos).',
      ],

      applications: [
        'Tapas de culata.',
        'Cárter.',
        'Bombas de agua.',
        'Tapas de termostato.',
        'Bombas inyectoras.',
        'Cajas de cambio.',
        'Diferenciales.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.02p1m1.png'),
      ]
    },

    {
      id: 'silicon-rtv-presurizado',

      name: 'SILICÓN RTV PRESURIZADO',

      images: [
        require('../assets/images/02.00/02.02p2.png'),
      ],

      features: [
        'Silicón no corrosivo que evita la oxidación de las partes donde se aplica.',
        'No daña sensores.',
        'Resistente a temperaturas desde -60°C hasta 230°C.',
        'Soporta hasta 260°C por periodos cortos.',
        'Bajo olor durante su aplicación.',
        'Cumple regulaciones de baja volatilidad para equipos con sensores de oxígeno.',
      ],

      applications: [
        'Bombas de agua.',
        'Bombas de aceite.',
        'Termostatos.',
        'Juntas.',
        'Tapas de válvulas.',
        'Aplicaciones en motores y componentes mecánicos.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.02p2m1.png'),
      ]
    }
  ]
},
{
  code: '02.03 (Limpiadores y disolventes)',
  name: 'Limpiadores y disolventes',
  products: [
    {
      id: 'eliminador-manchas-1l',

      name: 'ELIMINADOR DE MANCHAS',
      subtitle: 'Con base de disolvente',

      images: [
        require('../assets/images/02.00/02.03p1.png'),
      ],

      features: [
        'Producto con base de disolvente.',
        'No deja bordes sucios después de la limpieza.',
        'Neutral al metal.',
        'Elimina fácilmente alquitrán, aceite, grasa y lubricantes.',
      ],

      applications: [
        'Tapizados.',
        'Revestimientos de techos.',
        'Alfombras.',
        'Textiles.',
        'Superficies con manchas de grasa, aceite o alquitrán.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.03p1m1.png'),
      ]
    },

    {
      id: 'limpiacristales-activo',

      name: 'LIMPIACRISTALES ACTIVO',

      images: [
        require('../assets/images/02.00/02.03p2.png'),
      ],

      features: [
        'Alta concentración activa.',
        'Gran poder de limpieza.',
        'Disuelve fácilmente la suciedad.',
        'Mejora la visualización durante la conducción evitando deslumbramientos.',
        'Reduce el tiempo y esfuerzo de limpieza.',
        'Fórmula no agresiva.',
        'Apto para superficies pintadas, goma y plástico.',
        'Espuma activa que no descuelga en superficies verticales.',
        'Libre de AOX y siliconas.',
      ],

      applications: [
        'Limpieza de cristales.',
        'Limpieza de espejos.',
        'Superficies pintadas.',
        'Elimina insectos incrustados.',
        'Elimina excrementos de aves.',
        'Elimina hollín, barro, nicotina, resina y silicona.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.03p2m1.png'),
      ]
    }
  ]
},
{
  code: '02.04 (Lubricantes y penetrantes)',
  name: 'Lubricantes y penetrantes',

  products: [
    {
      id: 'rost-off-plus',

      name: 'ROST OFF PLUS',
      subtitle: 'Desoxidante de alta efectividad con partículas de molibdeno',

      images: [
        require('../assets/images/02.00/02.04p1.png'),
      ],

      features: [
        'Potente efecto capilar que permite penetrar profundamente en las roscas.',
        'Partículas de molibdeno que facilitan el desenroscado y roscado.',
        'Protección antioxidación gracias a aditivos anticorrosivos.',
        'Tecnología OMC2 que permite un fácil aflojado de tornillos.',
        'Protege las roscas contra el arranque de virutas metálicas.',
        'Válvula especial que permite aplicar el producto en cualquier posición, incluso invertido.',
        'Utilizable en zonas plásticas y de caucho.',
        'No contiene resinas, ácidos ni siliconas.',
        'Estabilidad química del 100% para mantener la mezcla homogénea.',
      ],

      applications: [
        'Aflojar tornillos y tuercas oxidadas.',
        'Automoción.',
        'Maquinaria industrial.',
        'Construcción.',
        'Mantenimiento mecánico general.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.04p1m1.png'),
      ]
    },

    {
      id: 'grasa-litio-wc195',

      name: 'GRASA DE LITIO W-C 195',
      subtitle: 'Grasa lítica de excelente estabilidad mecánica',

      images: [
        require('../assets/images/02.00/02.04p2.png'),
      ],

      features: [
        'Excelente estabilidad mecánica.',
        'Mantiene sus propiedades y comportamiento con el tiempo.',
        'Tenaz al escurrido.',
        'Alta adherencia que prolonga el tiempo de permanencia en las piezas lubricadas.',
        'Mayor protección contra polvo y suciedad.',
        'Insoluble al agua.',
        'Gran resistencia al desgaste y a la fricción.',
        'Protección contra óxido, corrosión y deterioro.',
        'Capaz de trabajar en un amplio rango de temperaturas.',
      ],

      applications: [
        'Lubricación de rodamientos (bolas, agujas, rodillos, cónicos).',
        'Cojinetes y ejes.',
        'Bisagras.',
        'Engrasadores.',
        'Brazos de maquinaria.',
        'Pivotes y mecanismos industriales.',
        'Equipos que trabajan entre -20°C y +130°C.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.04p2m1.png'),
      ]
    }
  ]
},
{
  code: '02.05 (Imprimaciones y lacas)',
  name: 'Imprimaciones y lacas',

  products: [
    {
      id: 'spray-soldadura-ecologico',

      name: 'SPRAY DE SOLDADURA ECOLÓGICO',
      subtitle: 'Spray protector para procesos de soldadura',

      images: [
        require('../assets/images/02.00/02.05p1.png'),
      ],

      features: [
        'Evita que las perlas de soldadura se adhieran a las piezas de trabajo y a la boquilla del soldador.',
        'Libre de silicona, compatible con procesos posteriores como esmaltado, galvanizado, cromado o pavonado.',
        'Efecto refrigerante que reduce la decoloración por calor durante la soldadura.',
        'Forma una fina película que actúa como protector anticorrosivo.',
        'Libre de hidrocarburos clorados y otros disolventes agresivos.',
        'Protege tanto el material a soldar como el canal del soldador.',
      ],

      applications: [
        'Trabajos de soldadura en metales.',
        'Soldadura de aceros.',
        'Protección de boquillas de soldadores.',
        'Protección de piezas durante procesos de soldadura.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.05p1m1.png'),
      ]
    },

    {
      id: 'convertidor-oxido',

      name: 'CONVERTIDOR DE ÓXIDO',
      subtitle: 'Convertidor ecológico para neutralizar la corrosión',

      images: [
        require('../assets/images/02.00/02.05p2.png'),
      ],

      features: [
        'Neutraliza eficazmente el proceso de corrosión.',
        'Reacciona con el óxido de hierro convirtiéndolo en un compuesto órgano-metálico estable.',
        'Gran efecto aislante y sellador.',
        'Protege contra la formación futura de óxido.',
        'Producto ecológico respetuoso con el medio ambiente.',
        'Uso sencillo y seguro.',
        'Libre de pictogramas de peligro.',
        'Puede repintarse con pinturas comunes.',
      ],

      applications: [
        'Tratamiento de superficies metálicas oxidadas.',
        'Preparación de piezas antes de pintar.',
        'Mantenimiento de estructuras metálicas.',
        'Protección anticorrosiva en maquinaria y herramientas.',
      ],

      measuresImages: [
        require('../assets/images/02.00/02.05p2m1.png'),
      ]
    }
  ]
}
],
}
];*/