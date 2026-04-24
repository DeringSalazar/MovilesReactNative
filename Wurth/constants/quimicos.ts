interface Product {
  id: string;
  name: string;
  images?: any[];
  features?: string[];
  applications?: string[];
  pdfPage?: string;
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
            id: 'pega-sella-k-d',
            name: 'PEGA Y SELLA K + D',
            images: [
              require('../assets/images/02.00/02.01p1.jpeg'),
            ],
            features: [
              'Adhesivo + sellante elástico en base de poliuretano (PU).',
              'Colores: blanco, gris, negro, marrón, sapelly, beige.',
              'Presentaciones: cartucho 300 ml y bolsa 600 ml.',
              'Art. N° desde 0890 100 1 hasta 0890 100 185.',
            ],
            applications: [
              'Sellado elástico de uniones en construcción y automoción.',
              'Pegado y sellado simultáneo en interiores y exteriores.',
            ],
            pdfPage: '43',
          },

          {
            id: 'cola-spray-alta-resistencia',
            name: 'COLA EN SPRAY ALTA RESISTENCIA',
            images: [
              require('../assets/images/02.00/02.01p2.jpeg'),
            ],
            features: [
              'Adhesivo de contacto en spray con adherencia inmediata.',
              'Para superficies porosas.',
              'Tiempo de ventilación de 10 a 20 min.',
              'Rápido secado y elevada resistencia.',
            ],
            applications: [
              'Pegar plásticos, tejidos, espumas, corcho, láminas, papel, moquetas.',
              'Techos y espumas insonorizantes de capó.',
            ],
            pdfPage: '45',
          },

          {
            id: 'pegamento-cianocrilato',
            name: 'PEGAMENTO DE CIANOCRILATO',
            images: [
              require('../assets/images/02.00/02.01p3.jpg'),
            ],
            features: [
              'Pegamento de cianocrilato superrápido.',
              'Contenido: 20 g.',
              'Art. N° 893 1 020.',
            ],
            applications: [
              'Uniones de goma, plástico y metal.',
            ],
            pdfPage: '46',
          },

          {
            id: 'pegamento-super-schnell',
            name: 'PEGAMENTO SUPER SCHNELL',
            images: [
              require('../assets/images/02.00/02.01p4.jpg'),
            ],
            features: [
              'Adhesivo de cianocrilato de 1 componente, transparente.',
              'Con dosificador (Art. 893-09).',
              'Posibilidad de manejar el envase con una sola mano.',
              'En segundos los materiales quedan adheridos entre sí.',
            ],
            applications: [
              'Adherir piezas de metal, caucho y plástico.',
              'Permite mecanizar inmediatamente tras la adherencia.',
            ],
            pdfPage: '47',
          },

          {
            id: 'multi-kraft-adhesivo-pu',
            name: 'MULTI-KRAFT ADHESIVO PU',
            images: [
              require('../assets/images/02.00/02.01p5.jpg'),
              require('../assets/images/02.00/02.01p5.1.jpg'),
              require('../assets/images/02.00/02.01p5.2.jpg'),
              require('../assets/images/02.00/02.01p5.3.jpg'),
              require('../assets/images/02.00/02.01p5.4.jpg'),
            ],
            features: [
              'Muy rápido y de alto poder adhesivo con homologación D4.',
              'Probada resistencia al agua por norma EN 204 por IFT.',
              'Seco y manipulable en aprox. 15 min.',
              'Gran fuerza de unión y elástico.',
            ],
            applications: [
              'Todo trabajo en exterior por su resistencia al agua.',
              'Carpintería y estructuras de madera.',
            ],
            pdfPage: '48',
          },

          {
            id: 'sellador-tornillos-media-resistencia',
            name: 'SELLADOR DE TORNILLOS DE MEDIA RESISTENCIA',
            images: [
              require('../assets/images/02.00/02.01p6.jpg'),
            ],
            features: [
              'Fijador y sellador de tornillos, fácilmente desmontable.',
              'Puede desmontarse utilizando herramientas normales.',
              'Se garantiza el endurecimiento también en piezas no tratadas previamente.',
              'No se requieren aceleradores o activadores.',
            ],
            applications: [
              'Uniones roscadas de solidez media.',
              'Piezas de recambio original.',
            ],
            pdfPage: '49',
          },

          {
            id: 'sellador-tornillos-alta-resistencia',
            name: 'SELLADOR DE TORNILLOS DE ALTA RESISTENCIA',
            images: [
              require('../assets/images/02.00/02.01p7.jpg'),
            ],
            features: [
              'Especialmente apropiado para uniones roscadas sujetas a solicitaciones elevadas.',
              'Solo desmontable tras calentamiento a 300°C.',
              'En condiciones normales, solo desmontable con herramientas especiales.',
            ],
            applications: [
              'Uniones roscadas de alta solicitación mecánica.',
            ],
            pdfPage: '50',
          },

          {
            id: 'metal-liquido-fe1',
            name: 'METAL LÍQUIDO FE1',
            images: [
              require('../assets/images/02.00/02.01p8.jpg'),
            ],
            features: [
              'Soldadura en frío bicomponente para reparaciones rápidas.',
              'No escurre, ideal para aplicar en posición vertical o invertida.',
              'Permite reparar sin perder excesivo tiempo.',
            ],
            applications: [
              'Reparación rápida de piezas metálicas.',
              'Posiciones verticales e invertidas.',
            ],
            pdfPage: '51',
          },

          {
            id: 'sellador-bujes-cojinetes-rodamientos',
            name: 'SELLADOR DE BUJES, COJINETES Y RODAMIENTOS',
            images: [
              require('../assets/images/02.00/02.01p9.jpg'),
            ],
            features: [
              'Elevada solidez para fijar casquillos, ruedas dentadas, bulones.',
              'Para uniones de ejes, bujes y cojinetes sujetos a elevadas cargas.',
              'Contenido: 25 g. Art. N° 893 603 25.',
            ],
            applications: [
              'Fijación de bujes, cojinetes y rodamientos.',
              'Uniones de ejes bajo altas cargas.',
            ],
            pdfPage: '52',
          },

          {
            id: 'sellador-acrilico',
            name: 'SELLADOR ACRÍLICO',
            images: [
              require('../assets/images/02.00/02.01p10.jpg'),
            ],
            features: [
              'Para sellar uniones interiores con baja absorción de movimiento.',
              'Puede ser pintado / enyesado.',
              'Libre de siliconas.',
              'Resistente al envejecimiento, al clima y a los rayos UV.',
            ],
            applications: [
              'Uniones interiores con baja expansión.',
              'Sellos y juntas repintables.',
            ],
            pdfPage: '57',
          },

        ],
      },

      {
        code: '02.02 (Adhesivos y pegamentos)',
        name: 'Adhesivos y pegamentos',

        products: [

          {
            id: 'silicona-especial-250',
            name: 'SILICONA ESPECIAL 250',
            images: [
              require('../assets/images/02.00/02.02p1.jpeg'),
            ],
            features: [
              'Silicona de curado acético.',
              'Elasticidad permanente.',
              'Cubre las irregularidades de la superficie.',
            ],
            applications: [
              'Sellado de superficies con irregularidades.',
              'Aplicaciones que requieren elasticidad permanente.',
            ],
            pdfPage: '53',
          },

          {
            id: 'dp-300',
            name: 'DP 300',
            images: [
              require('../assets/images/02.00/02.02p2.jpeg'),
            ],
            features: [
              'Pasta de estanqueidad y plasticidad permanente resistente a elevadas temperaturas y vibraciones para motores y carcasas.',
              'Resistente a los carburantes.',
              'Elevada capacidad adhesiva.',
              'No se forman hilos en la aplicación.',
              'No escurre en aplicación vertical ni orientada hacia abajo.',
              'Base: Poliuretano. Disolvente: Acetona/etil acetato.',
              'Termorresistencia: 270°C (300°C durante cortos periodos de tiempo).',
              'Relleno máximo: 0,20 mm.',
              'Color: Rojo. Contenido: 80 ml. Art. N° 0890 100 048. U/E: 12.',
            ],
            applications: [
              'Tapas de culata, cárter, bombas de agua.',
              'Tapas de termostato, bombas inyectoras.',
              'Cajas de cambio, diferenciales.',
            ],
            pdfPage: '53',
          },

          {
            id: 'silicon-rtv-presurizado',
            name: 'SILICÓN RTV PRESURIZADO',
            images: [
              require('../assets/images/02.00/02.02p3.jpg'),
            ],
            features: [
              'No corrosivo, no oxida las partes en que se aplica.',
              'No daña los sensores.',
              'Resiste temperaturas de -60°C hasta 230°C (por corto plazo hasta 260°C).',
            ],
            applications: [
              'Bombas de agua y aceite, termostatos, juntas, tapas de válvulas.',
              'Uso ideal en motores automotrices.',
            ],
            pdfPage: '54',
          },

          {
            id: 'espuma-1-componente-pistola',
            name: 'ESPUMA DE 1 COMPONENTE DE APLICACIÓN A PISTOLA CON ROSCA DE ACOPLE',
            images: [
              require('../assets/images/02.00/02.02p4.jpg'),
            ],
            features: [
              'Espuma de montaje y relleno de poliuretano de un componente.',
              'Cumple DIN 4102-B3, una vez endurecida deja de ser tóxica.',
              'No contiene formaldehído ni gases propelentes que dañen la capa de ozono.',
              'Insonoriza, fija, aísla, rellena y protege el medio ambiente.',
            ],
            applications: [
              'Montaje, aislamiento y relleno en construcción.',
              'Aplicación con pistola de rosca de acople.',
            ],
            pdfPage: '55',
          },

          {
            id: 'espuma-montaje-1-componente',
            name: 'ESPUMA DE MONTAJE DE 1 COMPONENTE',
            images: [
              require('../assets/images/02.00/02.02p5.jpg'),
            ],
            features: [
              'Espuma de fácil aplicación para instalación, aislamiento y relleno.',
              'Estructura homogénea de células cerradas.',
              'Muy buena adherencia a la mayoría de las superficies.',
              'Buena resistencia a ácidos.',
            ],
            applications: [
              'Instalación, aislamiento y relleno en construcción.',
              'Sellado de huecos y fisuras.',
            ],
            pdfPage: '56',
          },

          {
            id: 'sellador-ms-polimero-transparente',
            name: 'SELLADOR MS POLIMERO TRANSPARENTE',
            images: [
              require('../assets/images/02.00/02.02p6.jpg'),
            ],
            features: [
              'Adhesivo y sellador elástico multipropósito para la construcción, claro como el cristal.',
              'Transparencia similar al vidrio, especialmente apto para sellos y juntas visibles.',
              'Amplio rango adhesivo, sin necesidad de imprimar.',
              'Libre de siliconas.',
              'Resistente al envejecimiento, al clima y a los rayos UV.',
            ],
            applications: [
              'Sellos y juntas visibles en construcción.',
              'Uso universal en amplio rango de superficies.',
            ],
            pdfPage: '58',
          },

          {
            id: 'sellador-ms-polimero',
            name: 'SELLADOR MS POLÍMERO',
            images: [
              require('../assets/images/02.00/02.02p7.jpg'),
            ],
            features: [
              'Para pegar y sellar, húmedo sobre húmedo. Repintable.',
              'Adhesivo sellante monocomponente de alto rendimiento mecánico.',
              'Pega y estanqueiza a la vez, absorbe dilataciones y vibraciones.',
              'No necesita imprimación sobre la mayoría de los metales.',
              'Colores: gris, blanco, negro.',
              'Dureza Shore A: 42 DIN 53505. Alargamiento de rotura: 500% DIN 53504.',
            ],
            applications: [
              'Zonas húmedas o mojadas.',
              'Uniones en zonas de difícil acceso.',
              'Repintable en las primeras 4 horas tras aplicación.',
            ],
            pdfPage: '59',
          },

          {
            id: 'masilla-sellador-altas-temp',
            name: 'MASILLA SELLADOR PARA ALTAS TEMP. +100°C',
            images: [
              require('../assets/images/02.00/02.02p8.jpg'),
            ],
            features: [
              'Masilla selladora para juntas de 1 componente sin disolventes.',
              'Gran resistencia al calor, gran dureza.',
              'Muy buena adherencia a superficies.',
            ],
            applications: [
              'Sellado de juntas sometidas a altas temperaturas.',
              'Aplicaciones industriales con calor intenso.',
            ],
            pdfPage: '61',
          },

          {
            id: 'silicona-altas-temperaturas',
            name: 'SILICONA ALTAS TEMPERATURAS',
            images: [
              require('../assets/images/02.00/02.02p9.jpg'),
            ],
            features: [
              'Silicona formadora de juntas resistentes a altas temperaturas.',
              'Permite prescindir del uso de juntas convencionales.',
              'Producto neutro, no oxida sensores y partes internas.',
              'Resiste de -62°C a 315°C.',
            ],
            applications: [
              'Formación de juntas resistentes al calor extremo.',
              'Motores y sistemas de escape.',
            ],
            pdfPage: '62',
          },

        ],
      },

      {
        code: '02.03 (Limpiadores y disolventes)',
        name: 'Limpiadores y disolventes',

        products: [

          {
            id: 'eliminador-manchas-1l',
            name: 'ELIMINADOR DE MANCHAS 1L',
            images: [
              require('../assets/images/02.00/02.03p1.jpeg'),
            ],
            features: [
              'Con base de disolvente.',
              'No deja bordes sucios.',
              'Neutral al metal.',
              'Lata 1.000 mL. Art. N° 0890 21 100.',
            ],
            applications: [
              'Elimina alquitrán, aceite, manchas de grasa y lubricantes.',
              'Tapizados, revestimientos de techos, alfombras y textiles.',
            ],
            pdfPage: '63',
          },

          {
            id: 'limpiacristales-activo',
            name: 'LIMPIACRISTALES ACTIVO',
            images: [
              require('../assets/images/02.00/02.03p2.jpg'),
            ],
            features: [
              'Contenido: 500 ml (Art. N° 890 25) y 20 L (Art. N° 890 252 0).',
            ],
            applications: [
              'Limpieza de cristales y superficies de vidrio.',
            ],
            pdfPage: '65',
          },

          {
            id: 'eliminador-alquitran',
            name: 'ELIMINADOR DE ALQUITRÁN',
            images: [
              require('../assets/images/02.00/02.03p3.jpg'),
            ],
            features: [
              'Gran poder de limpieza.',
              'Elimina restos incrustados de alquitrán, asfalto y gravilla.',
              'Efecto emulsionante, la superficie se aclara fácilmente tras la limpieza.',
            ],
            applications: [
              'Superficies pintadas, cromadas y cristales.',
              'Eliminación de alquitrán y asfalto.',
            ],
            pdfPage: '66',
          },

          {
            id: 'limpiador-inyectores-presurizados',
            name: 'LIMPIADOR DE INYECTORES PRESURIZADOS',
            images: [
              require('../assets/images/02.00/02.03p4.jpg'),
            ],
            features: [
              'Limpia el inyector automotriz.',
              'Elimina residuos de carbonilla, corrosión y barnices.',
              'Reduce la emisión de contaminantes.',
              'Elimina rápidamente los residuos de carbonización.',
            ],
            applications: [
              'Inyectores de vehículos automotrices.',
              'Mantenimiento del sistema de inyección.',
            ],
            pdfPage: '67',
          },

          {
            id: 'limpiador-industrial',
            name: 'LIMPIADOR INDUSTRIAL',
            images: [
              require('../assets/images/02.00/02.03p5.jpg'),
            ],
            features: [
              'Desengrasante industrial en frío que no emulsiona.',
              'Elimina suciedad oleosa, ligeramente resinosa o de hollín.',
              'Limpia con rapidez y una vez evaporado no deja residuos.',
              'No ataca gomas, o-rings, poliamidas ni pinturas. No produce corrosión.',
            ],
            applications: [
              'Carcasas de motores y engranajes.',
              'Piezas de vehículos, máquinas y acoplamientos.',
            ],
            pdfPage: '68',
          },

          {
            id: 'limpiador-frenos',
            name: 'LIMPIADOR DE FRENOS',
            images: [
              require('../assets/images/02.00/02.03p6.jpg'),
              require('../assets/images/02.00/02.03p6.1.jpg'),
              require('../assets/images/02.00/02.03p6.2.jpg'),
            ],
            features: [
              'Spray de alta presión para limpieza rápida de frenos.',
              'Elimina el polvo adherido del elemento de fricción en mordazas y pastillas.',
              'Rápido secado, reduce tiempos de espera.',
              'No contiene HCFC. Ecológico.',
            ],
            applications: [
              'Frenos de disco y tambor.',
              'Mordazas y pastillas de frenos.',
            ],
            pdfPage: '69',
          },

          {
            id: 'protector-gomas-plasticos',
            name: 'PROTECTOR DE GOMAS Y PLÁSTICOS',
            images: [
              require('../assets/images/02.00/02.03p7.jpg'),
              require('../assets/images/02.00/02.03p7.1.jpg'),
              require('../assets/images/02.00/02.03p7.2.jpg'),
            ],
            features: [
              'Protege los elementos de caucho, goma y plástico.',
              'Mantiene la elasticidad en piezas de goma.',
              'Apto para piezas exteriores.',
              'Protege del envejecimiento, evita el agrietamiento y revive los colores.',
              'No ataca piezas pintadas y cromadas.',
            ],
            applications: [
              'Protección de gomas y plásticos en exteriores.',
              'Mantenimiento de elasticidad en piezas de caucho.',
            ],
            pdfPage: '70',
          },

          {
            id: 'limpiador-pu',
            name: 'LIMPIADOR DE PU',
            images: [
              require('../assets/images/02.00/02.03p8.jpg'),
            ],
            features: [
              'Para eliminar salpicaduras recientes de espuma de poliuretano en ropa y otras superficies.',
              'Para limpieza regular de pistolas de aplicación (Art. N° 891 152).',
              'Con cabezal pulverizador.',
            ],
            applications: [
              'Eliminación de salpicaduras de poliuretano fresco.',
              'Limpieza de pistolas de aplicación de espuma PU.',
            ],
            pdfPage: '71',
          },

          {
            id: 'super-limpiador-parabrisas-concentrado',
            name: 'SUPER LIMPIADOR DE PARABRISAS CONCENTRADO',
            images: [
              require('../assets/images/02.00/02.03p9.jpg'),
            ],
            features: [
              'Para depósitos de parabrisas concentrado 1:100.',
              'Contiene compuestos químicos especiales.',
            ],
            applications: [
              'Limpieza de parabrisas de vehículos.',
              'Depósitos de agua del limpiaparabrisas.',
            ],
            pdfPage: '72',
          },

          {
            id: 'super-champu-cera-boxes',
            name: 'SUPER CHAMPÚ CON CERA BOXES',
            images: [
              require('../assets/images/02.00/02.03p10.jpg'),
            ],
            features: [
              'Champú con cera para el lavado de vehículos.',
              'Lava, encera y facilita el secado en una sola aplicación.',
            ],
            applications: [
              'Lavado de vehículos en boxes.',
              'Aplicación en una sola pasada.',
            ],
            pdfPage: '73',
          },

          {
            id: 'removedor-concreto',
            name: 'REMOVEDOR DE CONCRETO',
            images: [
              require('../assets/images/02.00/02.03p11.jpg'),
            ],
            features: [
              'Para la eliminación de suciedades pesadas como cemento y concreto.',
              'Alto poder de eliminación.',
              'No deja manchas en las superficies.',
              'Alto inhibidor de corrosión.',
              'Rendimiento de 10 m² a 20 m² por litro.',
            ],
            applications: [
              'Eliminación de cemento y concreto endurecido.',
              'Superficies con incrustaciones pesadas.',
            ],
            pdfPage: '74',
          },

          {
            id: 'limpiador-cuero',
            name: 'LIMPIADOR DE CUERO',
            images: [
              require('../assets/images/02.00/02.03p12.jpg'),
            ],
            features: [
              'Limpia, protege y conserva la calidad de la superficie.',
              'Cuidado a largo plazo preservando el acabado final.',
              'No contiene silicona.',
              'Contenido: 500 ml. Art. N° 893 012 500.',
            ],
            applications: [
              'Interiores de cuero de coches, muebles de cuero, chaquetas.',
              'Todo tipo de cuero liso.',
            ],
            pdfPage: '75',
          },

          {
            id: 'limpiador-interior-espuma',
            name: 'LIMPIADOR DE INTERIOR EN ESPUMA',
            images: [
              require('../assets/images/02.00/02.03p13.jpg'),
              require('../assets/images/02.00/02.03p13.1.jpg'),
              require('../assets/images/02.00/02.03p13.2.jpg'),
              require('../assets/images/02.00/02.03p13.3.jpg'),
              require('../assets/images/02.00/02.03p13.4.jpg'),
            ],
            features: [
              'Espuma especial de limpieza para todo el habitáculo de vehículos.',
            ],
            applications: [
              'Vehículos industriales, autocares y turismos.',
            ],
            pdfPage: '76',
          },

          {
            id: 'limpiador-biodegradable-camiones',
            name: 'LIMPIADOR BIODEGRADABLE PARA CAMIONES',
            images: [
              require('../assets/images/02.00/02.03p14.jpg'),
            ],
            features: [
              'Limpiador alcalino universal biodegradable.',
            ],
            applications: [
              'Lonas, cuerpo y chasis de vehículos pesados, autobuses y máquinas para la construcción.',
            ],
            pdfPage: '77',
          },

          {
            id: 'decapante-juntas-pintura',
            name: 'DECAPANTE DE JUNTAS Y PINTURA',
            images: [
              require('../assets/images/02.00/02.03p15.jpg'),
            ],
            features: [
              'Elimina restos de juntas, pegamentos, pinturas y lacas endurecidas.',
              'Rápido y sencillo de usar.',
              'Apto para metal, madera, vidrio, cerámica, polietileno y polipropileno.',
              'Con aditivo protector contra la corrosión.',
            ],
            applications: [
              'Eliminación de restos de juntas y pegamentos endurecidos.',
              'Gran ahorro de tiempo en preparación de superficies.',
            ],
            pdfPage: '78',
          },

          {
            id: 'desinfectante-amonio-cuaternario',
            name: 'DESINFECTANTE AMONIO CUATERNARIO 1L',
            images: [
              require('../assets/images/02.00/02.03p16.jpg'),
            ],
            features: [
              'Desinfectante de acción bactericida y fungicida.',
              'Actúa sobre amplia gama de microorganismos: virus, bacterias, hongos, esporas.',
              'Combate E. coli, estafilococos, estreptococos, salmonella.',
            ],
            applications: [
              'Desinfección universal en entornos industriales y domésticos.',
              'Superficies en contacto con microorganismos.',
            ],
            pdfPage: '79',
          },

          {
            id: 'desengrasante-cocinas',
            name: 'DESENGRASANTE DE COCINAS 1L',
            images: [
              require('../assets/images/02.00/02.03p17.jpg'),
            ],
            features: [
              'Poderoso removedor de grasa y proteína para actividades de catering.',
              'Suaviza manchas de grasa, proteínas incrustadas y hollín.',
              'Altamente concentrado.',
              'Apropiado para limpieza básica y limpieza diaria de mantenimiento.',
            ],
            applications: [
              'Catering y procesamiento de alimentos.',
              'Cocinas industriales.',
            ],
            pdfPage: '80',
          },

          {
            id: 'desengrasante-motores',
            name: 'DESENGRASANTE PARA MOTORES',
            images: [
              require('../assets/images/02.00/02.03p18.jpg'),
            ],
            features: [
              'Fórmula a base de aceites vegetales, disolventes y limpiadores.',
              'Remueve hasta las grasas más adheridas.',
              'Fórmula concentrada, puede diluirse en proporción 1:9 con agua.',
            ],
            applications: [
              'Eliminación de suciedades pesadas en motores.',
              'Limpieza de motores con grasa adherida.',
            ],
            pdfPage: '81',
          },

          {
            id: 'limpiador-bmf',
            name: 'LIMPIADOR BMF',
            images: [
              require('../assets/images/02.00/02.03p19.jpg'),
            ],
            features: [
              'Limpiador desengrasante industrial biodegradable.',
              'Desprende toda suciedad acumulada en partes de maquinaria.',
              'Capaz de desprender aceites, sarro, escoria y lodo.',
              'No contiene fosfato. Apto para metales.',
            ],
            applications: [
              'Maquinaria industrial.',
              'Limpieza general de piezas metálicas.',
            ],
            pdfPage: '82',
          },

          {
            id: 'spray-mantenimiento-acero-inox',
            name: 'SPRAY DE MANTENIMIENTO PARA ACERO INOX.',
            images: [
              require('../assets/images/02.00/02.03p20.jpg'),
            ],
            features: [
              'Emulsión para el cuidado y limpieza de superficies metálicas.',
              'Elimina polvo y suciedad.',
            ],
            applications: [
              'Cuidado y limpieza de superficies de acero inoxidable.',
            ],
            pdfPage: '83',
          },

          {
            id: 'restaurador-acero-inoxidable',
            name: 'RESTAURADOR PARA ACERO INOXIDABLE',
            images: [
              require('../assets/images/02.00/02.03p21.jpg'),
            ],
            features: [
              'Restaurador abrasivo para superficies metálicas diversas.',
              'Alto poder de abrasividad.',
              'Restaura el color natural del material a través del pulido.',
              'Elevada viscosidad para óptima adherencia en superficies verticales.',
            ],
            applications: [
              'Restauración de superficies de acero inoxidable.',
              'Pulido de superficies metálicas.',
            ],
            pdfPage: '84',
          },

          {
            id: 'polish-aluminio',
            name: 'POLISH PARA ALUMINIO',
            images: [
              require('../assets/images/02.00/02.03p22.jpg'),
            ],
            features: [
              'Lustrador tipo pasta para limpiar y pulir.',
              'No gotea en superficies verticales.',
              'Contiene aditivos lustradores con propiedades restauradoras de grasas.',
              'Deja la superficie lisa y repelente al agua.',
            ],
            applications: [
              'Limpieza y pulido de superficies de aluminio.',
              'Evita la adherencia posterior de suciedad.',
            ],
            pdfPage: '85',
          },

          {
            id: 'limpiador-universal-r1',
            name: 'LIMPIADOR UNIVERSAL R1',
            images: [
              require('../assets/images/02.00/02.03p23.jpg'),
            ],
            features: [
              'Limpiador ecológico de uso universal.',
              'Alto rendimiento de limpieza, elimina suciedad persistente.',
              'No ataca pinturas, cauchos o plásticos.',
              'Biodegradable, amigable para el ambiente.',
              'Olor agradable.',
            ],
            applications: [
              'Vehículos, oficinas, interiores, alfombras, tapicerías.',
              'Todo tipo de superficies resistentes al agua.',
            ],
            pdfPage: '86',
          },

          {
            id: 'limpiador-universal',
            name: 'LIMPIADOR UNIVERSAL',
            images: [
              require('../assets/images/02.00/02.03p24.jpg'),
            ],
            features: [
              'Limpiador polivalente de alta calidad para industria y artesanado.',
              'Elimina restos de cintas adhesivas, etiquetas, grasa, aceite, cera, alquitrán, goma, silicona húmeda.',
              'No es corrosivo, pH neutro. No irrita la piel.',
            ],
            applications: [
              'Limpieza y desengrasado en industria y artesanado.',
              'Eliminación de adhesivos y etiquetas.',
            ],
            pdfPage: '87',
          },

          {
            id: 'polish-plus-p30-anti-hologramas',
            name: 'POLISH PLUS P30 ANTI-HOLOGRAMAS 1L',
            images: [
              require('../assets/images/02.00/02.03p25.jpg'),
            ],
            features: [
              'Pasta de acabado de alto brillo para eliminación permanente de rayas y hologramas.',
              'Para pintura de vehículos oscuros.',
              'Excelente eliminación de rayas con brillo de espejo.',
              'Remueve rayas de lijado de grano P3000.',
              'Consumo eficiente, creación mínima de residuos.',
            ],
            applications: [
              'Corrección de rayas y hologramas en pintura oscura.',
              'Acabado de alto brillo en carrocería.',
            ],
            pdfPage: '88',
          },

          {
            id: 'polish-plus-p55',
            name: 'POLISH PLUS P55',
            images: [
              require('../assets/images/02.00/02.03p26.jpg'),
            ],
            features: [
              'Lustrador de un solo paso (2 en 1): preparación y sellado de la pintura.',
              'Desarrollado para pintura vieja y nueva.',
              'Excelente remoción y brillo profundo e intenso.',
              'Contenido 1 kg. Art. N° 0893150 955.',
            ],
            applications: [
              'Acabado en vehículos usados.',
              'Preparación y sellado de pintura automotriz.',
            ],
            pdfPage: '89',
          },

          {
            id: 'polish-sellador',
            name: 'POLISH SELLADOR 1L',
            images: [
              require('../assets/images/02.00/02.03p27.jpg'),
            ],
            features: [
              'Sellador sintético de pintura con nano-partículas de cera y protección UV.',
              'Suaviza el texturizado de la pintura.',
              'Protección duradera contra influencias del clima y arañazos de lavado.',
              'Resistente a los rayos UV.',
              'Permite pulir sobre superficies calientes sin dejar residuos.',
            ],
            applications: [
              'Sellado y protección de pintura automotriz.',
              'Brillo profundo y superficie lisa.',
            ],
            pdfPage: '90',
          },

          {
            id: 'limpiador-sistema-admision',
            name: 'LIMPIADOR DEL SISTEMA DE ADMISIÓN',
            images: [
              require('../assets/images/02.00/02.03p28.jpg'),
            ],
            features: [
              'Agente limpiador para motores con carburador y con sistema de inyección de gasolina.',
              'Limpia el área completa de aspiración, cámaras de combustión y válvulas.',
              'Reduce el consumo elevado de carburante.',
              'Limpia conducciones del motor y el encendido.',
            ],
            applications: [
              'Limpieza del sistema de admisión en motores de gasolina.',
              'Carburadores y sistemas de inyección.',
            ],
            pdfPage: '91',
          },

          {
            id: 'degramat-liquido',
            name: 'DEGRAMAT LÍQUIDO',
            images: [
              require('../assets/images/02.00/02.03p29.jpg'),
            ],
            features: [
              'Compuesto biológico para limpieza en desagües y tratamiento de aguas residuales.',
              'Control de olores: destruye la fuente de los malos olores.',
              'Eliminación de acumulaciones en sumideros mediante acción microbiana.',
              'Art. N° 893 763 002.',
            ],
            applications: [
              'Mantenimiento de fosas sépticas.',
              'Arquetas de retención de grasas y sistemas de drenaje.',
              'Degradación de desechos orgánicos.',
            ],
            pdfPage: '92',
          },

          {
            id: 'spray-desinfectante-aire-acondicionado',
            name: 'SPRAY DESINFECTANTE DE AIRE ACONDICIONADO',
            images: [
              require('../assets/images/02.00/02.03p30.jpg'),
            ],
            features: [
              'Formulado para limpiar y desinfectar el sistema de aire acondicionado de vehículos.',
              'Remueve gérmenes, bacterias y hongos.',
              'Efecto preventivo contra problemas respiratorios y alérgicos.',
            ],
            applications: [
              'Sistema de aire acondicionado automotriz.',
              'Desinfección de conductos de climatización.',
            ],
            pdfPage: '94',
          },

          {
            id: 'quick-fresh-silver',
            name: 'QUICK FRESH SILVER',
            images: [
              require('../assets/images/02.00/02.03p31.jpg'),
            ],
            features: [
              'Para la eliminación eficaz de olores en espacios interiores y vehículos con aire acondicionado.',
              'Contenido: 100 ml. Art. N° 893 764 65.',
              'Sin AOX ni silicona. A base de agua.',
            ],
            applications: [
              'Eliminación de olores en vehículos e interiores.',
              'Espacios con aire acondicionado.',
            ],
            pdfPage: '95',
          },

          {
            id: 'gel-decapante-acero-inoxidable',
            name: 'GEL DECAPANTE PARA ACERO INOXIDABLE',
            images: [
              require('../assets/images/02.00/02.03p32.jpg'),
            ],
            features: [
              'Elimina las manchas de óxido producidas por las soldaduras inoxidables.',
            ],
            applications: [
              'Tratamiento post-soldadura de acero inoxidable.',
              'Eliminación de óxido en superficies inoxidables.',
            ],
            pdfPage: '96',
          },

          {
            id: 'shw2-shampoo-cera',
            name: 'SHW2 SHAMPOO CON CERA',
            images: [
              require('../assets/images/02.00/02.03p33.jpg'),
            ],
            features: [
              'Limpia, protege y da brillo de una sola vez.',
              'Una utilización continua evita totalmente la necesidad del pulimiento.',
              'Alto rendimiento: 1 frasco puede diluirse hasta en 50 litros de agua.',
            ],
            applications: [
              'Limpieza de pintura de vehículos.',
            ],
            pdfPage: '97',
          },

          {
            id: 'shampoo-wurth-shw',
            name: 'SHAMPOO WÜRTH SHW',
            images: [
              require('../assets/images/02.00/02.03p34.jpg'),
            ],
            features: [
              'Limpiador de pinturas de vehículos.',
              'Limpia efectivamente las superficies pintadas.',
              'Contenido: 20 L. Art. N° 3890 150.',
              'Para lavados manuales, puede diluir 1 litro hasta en 50 de agua.',
            ],
            applications: [
              'Vehículos en general.',
              'Lavado manual con esponja o franela.',
            ],
            pdfPage: '98',
          },

          {
            id: 'limpiador-lluvia-acida-vidrios',
            name: 'LIMPIADOR DE LLUVIA ÁCIDA EN VIDRIOS',
            images: [
              require('../assets/images/02.00/02.03p35.jpg'),
            ],
            features: [
              'Restaurador de transparencia en vidrios.',
              'Pulidor químico para eliminación de incrustaciones indisolubles en vidrios.',
              'Elimina manchas e incrustaciones silícicas causadas por lluvia ácida.',
              'Contenido: 1 L. Art. N° 3890 152.',
            ],
            applications: [
              'Vidrios con incrustaciones por lluvia ácida.',
              'Restauración de transparencia en cristales.',
            ],
            pdfPage: '99',
          },

          {
            id: 'cera-limpiadora',
            name: 'CERA LIMPIADORA',
            images: [
              require('../assets/images/02.00/02.03p36.jpg'),
            ],
            features: [
              'Protector de superficies que limpia y da brillo.',
              'Contiene cera carnauba y polímeros de alta tecnología.',
              'Da brillo y protege contra rayos ultravioleta e intemperie.',
              'Contenido: 200 g. Art. N° 3890 200 1.',
            ],
            applications: [
              'Automóviles, camiones, barcos, jet skies y electrodomésticos en general.',
            ],
            pdfPage: '100',
          },

          {
            id: 'rpw-revitalizador-piezas-plasticas',
            name: 'RPW REVITALIZADOR DE PIEZAS PLÁSTICAS',
            images: [
              require('../assets/images/02.00/02.03p37.jpg'),
            ],
            features: [
              'Protege contra los rayos ultravioleta.',
              'Evita la resecación.',
              'Rescata el color y el brillo original.',
              'Conserva la aplicación por más tiempo.',
              'Contenido: 680 g. Art. N° 3890 680.',
            ],
            applications: [
              'Parachoques, paneles, pisos y gomas de puertas.',
              'Naillas y piezas plásticas exteriores.',
            ],
            pdfPage: '101',
          },

        ],
      },

      {
        code: '02.04 (Lubricantes y penetrantes)',
        name: 'Lubricantes y penetrantes',

        products: [

          {
            id: 'solvente-limpia-todo',
            name: 'SOLVENTE LIMPIA TODO',
            images: [
              require('../assets/images/02.00/02.04p1.jpeg'),
            ],
            features: [
              'Líquido limpiador con características desmanchantes.',
              'Quita salpicaduras de pinturas, adhesivos, chicles, grasas, aceites, siliconas y ceras.',
              'Se puede usar sobre aluminio, vinil, fibra de vidrio y alfombras.',
              'No daña materiales ni decolora bases pintadas.',
            ],
            applications: [
              'Limpieza universal en superficies diversas.',
              'Remoción de manchas difíciles.',
            ],
            pdfPage: '64',
          },

          {
            id: 'rost-off-plus',
            name: 'ROST OFF PLUS',
            images: [
              require('../assets/images/02.00/02.04p2.jpeg'),
            ],
            features: [
              'Desoxidante de alta efectividad con partículas de molibdeno.',
              'Potente efecto capilar, escala la rosca rápida y profundamente.',
              'Indicador óptico de temperatura.',
              'Protección antioxidación con aditivos anticorrosivos.',
            ],
            applications: [
              'Desbloqueo de roscas oxidadas.',
              'Protección anticorrosión en piezas metálicas.',
            ],
            pdfPage: '102',
          },

          {
            id: 'grasa-litio-wc-195',
            name: 'GRASA DE LITIO W-C 195',
            images: [
              require('../assets/images/02.00/02.04p3.jpeg'),
            ],
            features: [
              'Grasa lítica de excelente estabilidad mecánica.',
            ],
            applications: [
              'Lubricación de piezas con altas exigencias mecánicas.',
            ],
            pdfPage: '103',
          },

          {
            id: 'grasa-engrase-centralizado-wep-185',
            name: 'GRASA DE ENGRASE CENTRALIZADO W-EP 185',
            images: [
              require('../assets/images/02.00/02.04p4.jpg'),
            ],
            features: [
              'Grasa lítica especial para sistemas de engrase centralizado.',
            ],
            applications: [
              'Sistemas de engrase centralizado.',
            ],
            pdfPage: '104',
          },

          {
            id: 'grasa-litio-wc-200',
            name: 'GRASA DE LITIO W-C 200',
            images: [
              require('../assets/images/02.00/02.04p5.jpg'),
            ],
            features: [
              'Grasa lítica especial para motores eléctricos y zonas de alta exigencia.',
            ],
            applications: [
              'Motores eléctricos.',
              'Zonas de alta exigencia mecánica.',
            ],
            pdfPage: '105',
          },

          {
            id: 'grasa-litio-wdimolib-190',
            name: 'GRASA DE LITIO W-DIMOLIB-190',
            images: [
              require('../assets/images/02.00/02.04p6.jpg'),
            ],
            features: [
              'Grasa lítica multiusos negra con bisulfuro de molibdeno.',
            ],
            applications: [
              'Lubricación multipropósito bajo altas presiones.',
            ],
            pdfPage: '106',
          },

          {
            id: 'super-grasa-alto-impacto-sig-3000',
            name: 'SUPER GRASA DE ALTO IMPACTO SIG 3000',
            images: [
              require('../assets/images/02.00/02.04p7.jpg'),
            ],
            features: [
              'Grasa de usos múltiples reforzada con aditivos para resistencia a altos impactos.',
              'Cartucho universal para inyector de grasa.',
              'Resistencia a presiones extremas de 65,000 PSI.',
            ],
            applications: [
              'Equipo de trabajo pesado.',
              'Piezas sometidas a altos impactos y presiones extremas.',
            ],
            pdfPage: '107',
          },

          {
            id: 'cut-cool-aceite-corte-taladro',
            name: 'CUT + COOL ACEITE DE CORTE Y TALADRO',
            images: [
              require('../assets/images/02.00/02.04p8.jpg'),
            ],
            features: [
              'Aceite multicorte para trabajos ligeros, medios y pesados.',
              'Uso universal, puede aplicarse sin detener el proceso de trabajo.',
              'Protege las herramientas y previene la adhesión de partículas al filo.',
              'Excelente protección contra la corrosión.',
            ],
            applications: [
              'Operaciones de corte y taladro.',
              'Trabajos de mecanizado en general.',
            ],
            pdfPage: '108',
          },

          {
            id: 'wurth-pneumatic-s10',
            name: 'WÜRTH PNEUMÁTIC S10',
            images: [
              require('../assets/images/02.00/02.04p9.jpg'),
            ],
            features: [
              'Aditivo especialmente formulado para lubricación y protección de sistemas neumáticos.',
              'Preserva la vida útil de juntas, sellos, mangueras y engranajes.',
              'Producto a base de óleo parafínico, aditivos antioxidante, anticorrosivo y antiespumante.',
              'Clasificación ISO VG 10. Compatible con metales, tintas y sellos de goma.',
            ],
            applications: [
              'Lubricación y protección de sistemas neumáticos.',
              'Partes móviles con exposición a presión.',
            ],
            pdfPage: '109',
          },

          {
            id: 'spray-cerraduras',
            name: 'SPRAY PARA CERRADURAS',
            images: [
              require('../assets/images/02.00/02.04p10.jpg'),
            ],
            features: [
              'Excelentes propiedades capilares y desplazamiento de la humedad.',
              'Evita que en invierno se congelen las cerraduras.',
              'Contiene aditivos que protegen contra la corrosión.',
              'Libre de resinas y ácidos.',
            ],
            applications: [
              'Funcionamiento óptimo de cerraduras.',
              'Prevención de congelamiento en invierno.',
            ],
            pdfPage: '110',
          },

          {
            id: 'lubricante-spray-multilube',
            name: 'LUBRICANTE SPRAY MULTILUBE',
            images: [
              require('../assets/images/02.00/02.04p11.jpg'),
            ],
            features: [
              'Aceite lubricante en spray de uso universal.',
              '5 en 1: limpieza, lubricación, penetración, protección y desplazamiento de humedad.',
              'Reduce la fricción y el desgaste.',
              'Remedia crujidos y chirridos.',
            ],
            applications: [
              'Cinco áreas de uso universal.',
              'Piezas oxidadas, lubricación general y protección anticorrosión.',
            ],
            pdfPage: '111',
          },

          {
            id: 'grasa-blanca-litio-heavy-duty',
            name: 'GRASA BLANCA DE LITIO HEAVY DUTY',
            images: [
              require('../assets/images/02.00/02.04p12.jpg'),
            ],
            features: [
              'Contiene PTFE. Altamente lubricante y reductora de la fricción.',
              'No gotea, apta para lugares verticales.',
              'Alto poder de adherencia.',
              'Protege contra el óxido y la corrosión.',
              'Apropiada para industria alimentaria, automotriz, náutica y aeronáutica.',
            ],
            applications: [
              'Ejes, guías, cadenas y rodamientos.',
              'Empresas empacadoras e industria alimentaria.',
            ],
            pdfPage: '112',
          },

          {
            id: 'grasa-consistente-spray',
            name: 'GRASA CONSISTENTE EN SPRAY',
            images: [
              require('../assets/images/02.00/02.04p13.jpg'),
            ],
            features: [
              'Grasa protectora con tecnología OMC2.',
              'Base de cera con oxidación sintética.',
              'Resistencia al agua (DIN 51807). Rango de temperatura: -40°C hasta +120°C.',
              'Contenido: 500 ml. Art. N° 893 105 8.',
            ],
            applications: [
              'Lubricación y conservación de elementos metálicos.',
            ],
            pdfPage: '113',
          },

          {
            id: 'hhs-2000',
            name: 'HHS 2000',
            images: [
              require('../assets/images/02.00/02.04p14.jpg'),
            ],
            features: [
              'Lubricante adhesivo resistente a altas presiones.',
              'Color transparente. Lubricante sintético altamente polimerizado.',
              'Para piezas expuestas a altas presiones, golpes u oscilaciones.',
              'Pulverización en forma líquida para penetración en lugares estrechos.',
            ],
            applications: [
              'Piezas con altas presiones y oscilaciones.',
              'Lubricación en lugares de difícil acceso.',
            ],
            pdfPage: '114',
          },

          {
            id: 'grasa-hhs-fine',
            name: 'GRASA HHS FINE',
            images: [
              require('../assets/images/02.00/02.04p15.jpg'),
            ],
            features: [
              'Lubricante líquido extra fino.',
              'Lubrica componentes mecánicos de precisión.',
              'Resistente al agua, ácidos y soluciones alcalinas. Hidrorepelente.',
              'Protege contra la corrosión. Alta resistencia al goteo.',
              'Resiste temperaturas entre -35°C y superiores.',
            ],
            applications: [
              'Componentes mecánicos de precisión.',
              'Piezas expuestas a agua salada y ambientes agresivos.',
            ],
            pdfPage: '115',
          },

          {
            id: 'hhs-lube',
            name: 'HHS LUBE',
            images: [
              require('../assets/images/02.00/02.04p16.jpg'),
            ],
            features: [
              'Grasa consistente en spray de larga duración con tecnología OMC2.',
              'Baja adhesión de polvo y suciedad.',
              'Excelente protección aislante.',
              'Resistente a salpicaduras, agua salada, ácidos débiles y soluciones alcalinas.',
            ],
            applications: [
              'Lubricación de piezas a la intemperie.',
              'Ampliación de los intervalos de lubricación.',
            ],
            pdfPage: '116',
          },

          {
            id: 'grasa-hhs-drylube',
            name: 'GRASA HHS DRYLUBE',
            images: [
              require('../assets/images/02.00/02.04p17.jpg'),
            ],
            features: [
              'Grasa seca sintética con PTFE, altamente resistente a la fuerza centrífuga.',
              'No salpica en partes de giro rápido y rotativas.',
              'Baja adhesión de polvo.',
              'Excelente capacidad de fluidez y penetración.',
            ],
            applications: [
              'Piezas de rotación rápida.',
              'Lubricación de lugares de difícil acceso.',
            ],
            pdfPage: '117',
          },

          {
            id: 'grasa-hhs-larga-duracion',
            name: 'GRASA HHS LARGA DURACIÓN',
            images: [
              require('../assets/images/02.00/02.04p18.jpg'),
            ],
            features: [
              'Grasa blanca con PTFE de alta calidad.',
              'Efecto largo y duradero.',
            ],
            applications: [
              'Lubricación de larga duración en piezas diversas.',
            ],
            pdfPage: '118',
          },

          {
            id: 'al-1100',
            name: 'AL 1100',
            images: [
              require('../assets/images/02.00/02.04p19.jpg'),
            ],
            features: [
              'Lubricante Anti-Seize de altas prestaciones.',
            ],
            applications: [
              'Prevención de agarrotamiento en piezas metálicas.',
              'Lubricación en ensambles de alta temperatura.',
            ],
            pdfPage: '119',
          },

          {
            id: 'lubricante-profesional-construccion',
            name: 'LUBRICANTE PROFESIONAL CONSTRUCCIÓN',
            images: [
              require('../assets/images/02.00/02.04p20.jpg'),
            ],
            features: [
              'Lubricante de altas prestaciones para piezas mecánicas de grúa, hormigoneras, engranajes, cables y cadenas.',
              'Con eficacia a largo plazo y protección anticorrosiva.',
              'Resistente al agua, agua salada, sosas y ácidos débiles.',
              'Termoestable desde -35°C hasta +200°C.',
              'Contenido: 500 ml. Art. N° 893 150.',
            ],
            applications: [
              'Piezas de grúa, hormigoneras y engranajes en construcción.',
              'Cables y cadenas de transmisión.',
            ],
            pdfPage: '120',
          },

          {
            id: 'aceite-universal-anticorrosion',
            name: 'ACEITE UNIVERSAL ANTICORROSIÓN',
            images: [
              require('../assets/images/02.00/02.04p21.jpg'),
            ],
            features: [
              'Aceite protector para superficies metálicas, secas o húmedas.',
              'Crea una capa aceitada con propiedades repelentes al agua.',
              'Excelente efecto residual progresivo.',
            ],
            applications: [
              'Protección de partes metálicas para almacenamiento y transporte.',
              'Piezas torneadas y fresadas.',
            ],
            pdfPage: '121',
          },

          {
            id: 'cosmetico-bandas',
            name: 'COSMÉTICO PARA BANDAS',
            images: [
              require('../assets/images/02.00/02.04p22.jpg'),
            ],
            features: [
              'Evita ruidos molestos, agrega más poder y reduce el desgaste.',
              'Ideal para todo tipo de bandas de cuero, lona, hule o goma.',
              'Forma una película viscoplástica que no seca.',
              'Evita el sobrecalentamiento.',
            ],
            applications: [
              'Bandas de transmisión de cuero, lona, hule y goma.',
              'Eliminación de ruidos y aumento de durabilidad.',
            ],
            pdfPage: '122',
          },

          {
            id: 'rost-off-ice',
            name: 'ROST OFF ICE',
            images: [
              require('../assets/images/02.00/02.04p23.jpg'),
            ],
            features: [
              'Eliminador de óxido de alta calidad con efecto de rotura por baja temperatura.',
              'Al contactar superficies metálicas baja la temperatura a -40°C.',
              'Provoca roturas microscópicas del óxido anclado en el interior de las roscas.',
              'Potente efecto capilar.',
            ],
            applications: [
              'Roscas bloqueadas por óxido.',
              'Desmontaje de piezas oxidadas.',
            ],
            pdfPage: '123',
          },

          {
            id: 'rost-off-blue-ice',
            name: 'ROST OFF BLUE ICE',
            images: [
              require('../assets/images/02.00/02.04p24.jpg'),
            ],
            features: [
              'Removedor de óxido con efecto de rotura e indicador óptico de frío.',
              'Baja la temperatura a -45°C al contactar superficies metálicas.',
              'Micro-roturas permiten excelente penetración del producto.',
            ],
            applications: [
              'Roscas y piezas con óxido severo.',
              'Desmontaje con indicación visual de temperatura.',
            ],
            pdfPage: '124',
          },

          {
            id: 'lubricante-spray-ptfe-seco',
            name: 'LUBRICANTE EN SPRAY CON PTFE SECO',
            images: [
              require('../assets/images/02.00/02.04p25.jpg'),
            ],
            features: [
              'Película deslizante transparente. No provoca suciedad.',
              'Lubricante seco: no atrae la suciedad ni el polvo.',
              'Protección duradera contra el desgaste.',
              'Espesor de la película de 10 µm.',
            ],
            applications: [
              'Mecanismos como puertas y cerraduras.',
              'Aplicaciones donde no se desea acumulación de polvo.',
            ],
            pdfPage: '125',
          },

          {
            id: 'cu-800-grasa-cobre',
            name: 'CU 800 GRASA DE COBRE',
            images: [
              require('../assets/images/02.00/02.04p26.jpg'),
            ],
            features: [
              'Pasta de cobre adhesiva resistente a altas temperaturas y presiones.',
              'Impide el agarrotamiento, gripado, soldadura en frío y corrosión.',
              'Resistente a temperaturas hasta 800°C.',
              'Resistente a lejías y ácidos. Extremadamente adhesivo.',
            ],
            applications: [
              'Frenos: dorso de la zapata.',
              'Uniones con alta temperatura y presión.',
            ],
            pdfPage: '126',
          },

          {
            id: 'grasas-multiusos',
            name: 'GRASAS MULTIUSOS I y II',
            images: [
              require('../assets/images/02.00/02.04p27.jpg'),
              require('../assets/images/02.00/02.04p27.1.jpg'),
            ],
            features: [
              'Grasa Multiuso I: base de litio, aceite mineral. Muy resistente al calor y frío.',
              'Grasa Multiuso I: adherente e insoluble al agua, protege contra corrosión y desgaste.',
              'Grasa Multiuso II: base de litio con MbS² y aditivos EP. Resistente a altas presiones.',
              'Contenido: 400 g. Art. N° 0893 870 1 (I) y 0893 871 1 (II).',
            ],
            applications: [
              'Lubricación multipropósito en industria y automotriz.',
              'Disponible en práctico cartucho.',
            ],
            pdfPage: '127',
          },

          {
            id: 'rost-off',
            name: 'ROST OFF',
            images: [
              require('../assets/images/02.00/02.04p28.jpg'),
            ],
            features: [
              'Desoxidante y lubricante universal sintético de alta efectividad.',
              'El producto actúa por capas con potente efecto capilar.',
              'Se esparce por todos los poros incluso en posición vertical a 45°.',
              'No gotea, evita desperdicio del producto.',
            ],
            applications: [
              'Desoxidación y lubricación universal.',
              'Piezas en posición vertical o inclinada.',
            ],
            pdfPage: '128',
          },

          {
            id: 'rost-off-eco',
            name: 'ROST OFF ECO',
            images: [
              require('../assets/images/02.00/02.04p29.jpg'),
            ],
            features: [
              'Desoxidante biodegradable no inflamable.',
              'No ataca al medio ambiente. Libre de solventes, resinas, ácidos, silicona y AOX.',
              'Baja toxicidad, no afecta la salud del operario. No contiene CFC.',
            ],
            applications: [
              'Desoxidación en entornos ecológicamente sensibles.',
              'Industrias con requisitos medioambientales.',
            ],
            pdfPage: '129',
          },

          {
            id: 'lubricante-grafito',
            name: 'LUBRICANTE DE GRAFITO',
            images: [
              require('../assets/images/02.00/02.04p30.jpg'),
            ],
            features: [
              'Lubricante seco para piezas deslizantes en general.',
              'Soporta elevados esfuerzos mecánicos. Evita bloqueos.',
              'Alto poder de penetración en spray.',
              'No contiene CFC (no daña la Capa de Ozono).',
              'Contenido: 200 ml. Art. N° 3890 10.',
            ],
            applications: [
              'Puertas correderas y piezas deslizantes.',
              'Lubricación en seco general.',
            ],
            pdfPage: '130',
          },

        ],
      },

      {
        code: '02.05 (Imprimaciones y lacas)',
        name: 'Imprimaciones y lacas',

        products: [

          {
            id: 'removedor-oxido-superficies',
            name: 'REMOVEDOR DE ÓXIDO DE SUPERFICIES',
            images: [
              require('../assets/images/02.00/02.05p1.jpg'),
            ],
            features: [
              'Contiene ácidos eficaces, agentes humectantes y tensioactivos.',
              'Remueve fácilmente el óxido de carrocerías de vehículos, chapas y piezas de acero.',
              'Valor pH (10%): 1.3. Sin AOX. Sin siliconas. Transparente.',
              'Contenido: 5 L. Art. N° 0890 130.',
            ],
            applications: [
              'Carrocerías de vehículos y chapas de acero.',
              'Piezas de hierro y piezas fundidas.',
            ],
            pdfPage: '131',
          },

          {
            id: 'spray-soldadura-ecologico',
            name: 'SPRAY DE SOLDADURA ECOLÓGICO',
            images: [
              require('../assets/images/02.00/02.05p2.jpeg'),
            ],
            features: [
              'Evita que las perlas de soldadura se adhieran sobre las piezas y la boquilla.',
              'Libre de silicona para fases siguientes: esmaltar, pavonar, galvanizar, cromar.',
              'Efecto refrigerante que reduce la decoloración por calentamiento.',
              'Para soldadura de metales y aceros.',
            ],
            applications: [
              'Protección de piezas durante soldadura.',
              'Soldar metales y aceros.',
            ],
            pdfPage: '132',
          },

          {
            id: 'convertidor-oxido',
            name: 'CONVERTIDOR DE ÓXIDO',
            images: [
              require('../assets/images/02.00/02.05p3.jpeg'),
            ],
            features: [
              'Convertidor de óxido ecológico.',
              'Repintable.',
            ],
            applications: [
              'Conversión y estabilización de superficies oxidadas.',
              'Preparación de superficie para pintura.',
            ],
            pdfPage: '133',
          },

          {
            id: 'spray-superficies-metalicas-perfect',
            name: 'SPRAY PARA SUPERFICIES METÁLICAS PERFECT',
            images: [
              require('../assets/images/02.00/02.05p4.jpg'),
            ],
            features: [
              'Excelente protección duradera y aspecto óptimo de la superficie metálica.',
            ],
            applications: [
              'Protección y acabado de superficies metálicas.',
            ],
            pdfPage: '134',
          },

          {
            id: 'silicon-en-spray',
            name: 'SILICÓN EN SPRAY',
            images: [
              require('../assets/images/02.00/02.05p5.jpg'),
            ],
            features: [
              'Protege, cuida, embellece, lubrica y aísla plásticos, caucho y superficies pintadas.',
            ],
            applications: [
              'Plásticos, caucho y superficies pintadas.',
              'Protección y lubricación multipropósito.',
            ],
            pdfPage: '135',
          },

          {
            id: 'removedor-oxido-wurth',
            name: 'REMOVEDOR DE ÓXIDO WÜRTH',
            images: [
              require('../assets/images/02.00/02.05p6.jpg'),
            ],
            features: [
              'Producto 3 en 1: decapa, desengrasay fosfatiza superficies metálicas oxidadas.',
              'Acción decapante: remueve todos los residuos de oxidación y corrosión.',
              'Acción fosfatizante: forma una capa de fosfato que impide la oxidación.',
              'Superficie queda químicamente desoxidada.',
            ],
            applications: [
              'Superficies de acero carbono y hierro oxidadas.',
              'Preparación para pintura o recubrimiento.',
            ],
            pdfPage: '136',
          },

        ],
      },

      {
        code: '02.06 (Aditivos)',
        name: 'Aditivos',

        products: [

          {
            id: 'sellante-biodegradable-radiador',
            name: 'SELLANTE BIODEGRADABLE PARA RADIADOR',
            images: [
              require('../assets/images/02.00/02.06p1.jpg'),
            ],
            features: [
              'Sellante y lubricante del sistema de refrigeración.',
              'Sella agujeros del sistema de refrigeración.',
              'Posee agentes inhibidores de la corrosión.',
              'No daña la bomba de agua ni los conductos del sistema.',
              'Lubrica inmediatamente el sistema.',
            ],
            applications: [
              'Reparaciones rápidas del sistema de refrigeración.',
              'Sellado de fugas en radiadores.',
            ],
            pdfPage: '137',
          },

          {
            id: 'aditivo-transmision',
            name: 'ADITIVO PARA LA TRANSMISIÓN',
            images: [
              require('../assets/images/02.00/02.06p2.jpg'),
            ],
            features: [
              'Protección permanente para cajas de transmisión.',
            ],
            applications: [
              'Sistemas de transmisión automotriz.',
            ],
            pdfPage: '138',
          },

          {
            id: 'estabilizador-diesel',
            name: 'ESTABILIZADOR DIESEL',
            images: [
              require('../assets/images/02.00/02.06p3.jpg'),
            ],
            features: [
              'Protege contra y destruye bacterias, levadura y mohos en sistemas de combustible.',
              'Previene el crecimiento de bacterias.',
              'Asegura la funcionalidad del sistema.',
              'Mantiene la integridad del combustible.',
            ],
            applications: [
              'Sistemas de combustible diesel.',
              'Prevención de proliferación bacteriana en depósitos.',
            ],
            pdfPage: '139',
          },

          {
            id: 'aditivo-limpiador-inyectores-diesel',
            name: 'ADITIVO LIMP. DE INYECTORES DIESEL 300mL',
            images: [
              require('../assets/images/02.00/02.06p4.jpg'),
            ],
            features: [
              'Para la limpieza de vehículos y camiones con motores diesel.',
              'Limpia la bomba de inyección y el injector bomba.',
              'Neutraliza y retiene el agua ácida condensada.',
              'Protege el sistema de combustible de la corrosión.',
              'Contenido: 300 mL.',
            ],
            applications: [
              'Motores diesel en general.',
              'Limpieza del sistema de inyección diesel.',
            ],
            pdfPage: '140',
          },

          {
            id: 'aditivo-gasolina',
            name: 'ADITIVO DE GASOLINA',
            images: [
              require('../assets/images/02.00/02.06p5.jpg'),
            ],
            features: [
              'Para motores a gasolina con o sin convertidor catalítico.',
              'Contiene agentes detergentes y agentes de red termoestables y alcalinos.',
              'Impide la formación de sedimentaciones en toberas, válvulas y asientos de válvula.',
              'Conduce a una dispersión del agua condensada.',
            ],
            applications: [
              'Motores a gasolina con y sin catalizador.',
              'Limpieza preventiva del sistema de combustible.',
            ],
            pdfPage: '141',
          },

          {
            id: 'limpiador-cuerpo-aceleracion',
            name: 'LIMPIADOR DE CUERPO DE ACELERACION',
            images: [
              require('../assets/images/02.00/02.06p6.jpg'),
            ],
            features: [
              'Sistema de limpieza especial de óptima efectividad para motores de 2 y 4 tiempos.',
              'Alcanza lugares de difícil acceso.',
              'Óptimo desempeño del carburador.',
              'Funcionamiento más suave del motor.',
            ],
            applications: [
              'Carburador y cuerpo de aceleración.',
              'Motores de 2 y 4 tiempos (OHV).',
            ],
            pdfPage: '142',
          },

          {
            id: 'aditivo-aceite-motor',
            name: 'ADITIVO DE ACEITE PARA MOTOR',
            images: [
              require('../assets/images/02.00/02.06p7.jpg'),
            ],
            features: [
              'Protección para todos los motores de gasolina y diesel.',
              'Protege contra el quemado a través de las válvulas.',
              'Extiende la vida útil del motor.',
              'Ideal para el adelgazamiento del aceite empleando biocombustibles.',
              'Cumple con estándares modernos API para aceites de motor.',
              'Contenido: 300 mL. Art. N° 5861 300 300.',
            ],
            applications: [
              'Motores de gasolina y diesel.',
              'Motores con uso de biocombustibles.',
            ],
            pdfPage: '143',
          },

          {
            id: 'aditivo-transmision-manual',
            name: 'ADITIVO PARA LA TRANSMISIÓN MANUAL',
            images: [
              require('../assets/images/02.00/02.06p8.jpg'),
            ],
            features: [
              'Protección permanente para cajas de cambio manuales.',
              'Lubricante de alto rendimiento con compuesto molibdenoso orgánico OMC2.',
              'Nivelación óptima de superficies, reduce y minimiza el desgaste.',
              'Estabiliza la viscosidad del aceite para engranajes.',
            ],
            applications: [
              'Cajas de cambio manuales.',
              'Reducción de ruidos y desgaste en transmisión.',
            ],
            pdfPage: '144',
          },

          {
            id: 'flushing-transmision-automatica',
            name: 'FLUSHING PARA LA TRANSMISIÓN AUTOMÁTICA',
            images: [
              require('../assets/images/02.00/02.06p9.jpg'),
            ],
            features: [
              'Limpieza eficaz de transmisiones automáticas.',
              'Limpieza total del circuito completo de la transmisión.',
              'Compatible con todo tipo de lubricantes de transmisión automáticos.',
              'Contenido: 150 mL. Art. N° 5861 401 150.',
            ],
            applications: [
              'Transmisiones automáticas.',
              'Eliminación de depósitos y residuos en el circuito.',
            ],
            pdfPage: '145',
          },

        ],
      },

      {
        code: '02.07 (Impermeabilizantes)',
        name: 'Impermeabilizantes',

        products: [

          {
            id: 'hidroblock',
            name: 'HIDROBLOCK',
            images: [
              require('../assets/images/02.00/02.07p1.jpg'),
            ],
            features: [
              'Impermeabilizante para uso en contacto continuo con agua potable.',
              'Argamasa impermeabilizante semiflexible a base de cemento modificado con polímeros.',
              'Evita la absorción de humedad en las paredes.',
              'Resistente a presión de agua positiva y negativa.',
              'Excelente adherencia sobre sustratos porosos.',
              'Art. N° 890 353 002.',
            ],
            applications: [
              'Impermeabilización de paredes en contacto con agua potable.',
              'Subsuelos con manto freático.',
            ],
            pdfPage: '146',
          },

          {
            id: 'elastbit',
            name: 'ELASTBIT',
            images: [
              require('../assets/images/02.00/02.07p2.jpg'),
            ],
            features: [
              'Emulsión elástica impermeabilizante a base de caucho y asfalto.',
              'Actúa como barrera de vapor.',
              'Excelente adherencia al soporte con absorción.',
              'Resistente al envejecimiento y a la intemperie.',
              'Excelente elasticidad incluso a temperaturas bajo cero (-10°C).',
              'Contenido: 25 Kg. Art. N° 893 199 401.',
            ],
            applications: [
              'Impermeabilización con caucho y asfalto.',
              'Superficies expuestas a intemperie.',
            ],
            pdfPage: '148',
          },

          {
            id: 'reculastic',
            name: 'RECULASTIC',
            images: [
              require('../assets/images/02.00/02.07p3.jpg'),
            ],
            features: [
              'Recubrimiento impermeable transitable.',
              'Excelente resistencia mecánica y a la abrasión.',
              'Total resistencia a la intemperie y a la degeneración solar.',
              'Resistente a gasolinas y aceites minerales, fuel y gasoil.',
              'Autoimprimable sobre hormigón, madera, galvanizado y plástico.',
            ],
            applications: [
              'Superficies transitables impermeables.',
              'Cubiertas y terrazas transitables.',
            ],
            pdfPage: '149',
          },

          {
            id: 'recufiber',
            name: 'RECUFIBER',
            images: [
              require('../assets/images/02.00/02.07p4.jpg'),
            ],
            features: [
              'Revestimiento fibrado, transpirable y flexible para impermeabilización.',
              'Impermeable y transpirable.',
              'Excelente adherencia al soporte.',
              'Comportamiento frente al fuego: no inflamable.',
              'Absorbe las dilataciones y movimientos de obra.',
            ],
            applications: [
              'Impermeabilización transpirable flexible.',
              'Fachadas y superficies con movimiento.',
            ],
            pdfPage: '150',
          },

        ],
      },

      {
        code: '02.08 (Químicos de construcción)',
        name: 'Químicos de construcción',

        products: [

          {
            id: 'cemento-fijador',
            name: 'CEMENTO FIJADOR',
            images: [
              require('../assets/images/02.00/02.08p1.jpg'),
            ],
            features: [
              'Cemento rápido de montaje.',
              'Elevada resistencia a la tracción-flexión y presión.',
              'No contiene cloruro.',
              'Para montaje de puertas de hierro, barandillas, depósitos de agua caliente, paneles de mando.',
            ],
            applications: [
              'Montaje rápido en construcción.',
              'Hidrofugado de mampostería y tubos de hormigón.',
            ],
            pdfPage: '151',
          },

          {
            id: 'asfalto-reparacion-premium',
            name: 'ASFALTO DE REPARACIÓN PREMIUM',
            images: [
              require('../assets/images/02.00/02.08p2.jpg'),
            ],
            features: [
              'Para reparaciones permanentes en baches y áreas dañadas en carreteras.',
              'Puede utilizarse durante todo el año.',
              'Resistente a las condiciones climáticas, incluyendo nieve y lluvia.',
              'Rápida aplicación.',
            ],
            applications: [
              'Reparación de baches en carreteras.',
              'Superficies expuestas a todo tipo de cargas.',
            ],
            pdfPage: '152',
          },

          {
            id: 'desencofrante-emulsionable',
            name: 'DESENCOFRANTE EMULSIONABLE DE 120',
            images: [
              require('../assets/images/02.00/02.08p3.jpg'),
            ],
            features: [
              'A base de aceites sintéticos y emulsionantes especiales para diluir con agua.',
              'Evita la adherencia del hormigón en moldes y encofrados.',
              'Apto para encofrados de madera y metálicos.',
              'Una vez diluido forma emulsión blanca con elevadas características de untuosidad.',
              'No altera la superficie del hormigón. No contiene disolventes.',
            ],
            applications: [
              'Moldes y encofrados de madera y metal.',
              'Obras de hormigón.',
            ],
            pdfPage: '153',
          },

          {
            id: 'hidrofix',
            name: 'HIDROFIX',
            images: [
              require('../assets/images/02.00/02.08p4.jpg'),
            ],
            features: [
              'Mortero súper rápido para el sellado de fugas de agua.',
              'Impermeabilizante de base mineral de alta adherencia al hormigón.',
              'Utilizable en condiciones de inmersión permanente en agua.',
              'Permite sellado de fugas de agua a presión.',
            ],
            applications: [
              'Sellado de fugas de agua en hormigón.',
              'Estructuras de contención de agua.',
            ],
            pdfPage: '154',
          },

          {
            id: 'risan-r',
            name: 'RISAN R',
            images: [
              require('../assets/images/02.00/02.08p5.jpg'),
            ],
            features: [
              'Mortero tixotrópico sin retracción para trabajos de reparación.',
              'Excelentes resistencias mecánicas iniciales y finales.',
              'Elevada impermeabilidad y adherencia.',
              'Resistencia a los sulfatos. Excelente durabilidad.',
              'Solo precisa agua de amasado.',
            ],
            applications: [
              'Reparación de hormigón en ambientes agresivos.',
              'Estructuras con alta exposición a sulfatos.',
            ],
            pdfPage: '155',
          },

          {
            id: 'rebofix',
            name: 'REBOFIX',
            images: [
              require('../assets/images/02.00/02.08p6.jpg'),
            ],
            features: [
              'A base de aceites sintéticos y emulsionantes. Puede diluirse hasta en dos partes de agua.',
              'Excelente adhesión de morteros en paredes, inclusive en poliéster no expandido (EPS).',
              'Para uso en áreas internas y externas.',
              'Adhesivo para nivelación de pisos de concreto.',
              'Resina sintética de alto desempeño.',
            ],
            applications: [
              'Adhesión de morteros en paredes.',
              'Nivelación de pisos de concreto.',
            ],
            pdfPage: '156',
          },

          {
            id: 'uniresin',
            name: 'UNIRESIN',
            images: [
              require('../assets/images/02.00/02.08p7.jpg'),
            ],
            features: [
              'Resina en dispersión acuosa.',
              'Película transparente, no ensucia las superficies.',
              'Reticulación retardada que permite trabajar con comodidad.',
            ],
            applications: [
              'Puente de unión entre mortero y hormigón.',
              'Imprimación y mejora de adherencia.',
            ],
            pdfPage: '157',
          },

          {
            id: 'ortolan-sep-711-desencofrante',
            name: 'ORTOLAN SEP 711 DESENCOFRANTE DE METAL Y MADERA',
            images: [
              require('../assets/images/02.00/02.08p8.jpg'),
            ],
            features: [
              'Agente desmoldeante soluble con base de aceite mineral.',
              'Biodegradable. Listo para usar. Libre de solventes. Fácil de rociar.',
              'Propiedades de separación excepcionales.',
              'Protege y conserva los moldes de acero.',
              'Retarda la corrosión si la película está intacta.',
            ],
            applications: [
              'Todo tipo de encofrados comunes de metal y madera.',
              'Moldes de acero en construcción.',
            ],
            pdfPage: '159',
          },

        ],
      },

      {
        code: '02.09 (Químicos electricidad)',
        name: 'Químicos electricidad',

        products: [

          {
            id: 'antihumedad-spray',
            name: 'ANTIHUMEDAD EN SPRAY',
            images: [
              require('../assets/images/02.00/02.09p1.jpg'),
            ],
            features: [
              'Elimina humedades en las conexiones eléctricas.',
              'Remedia problemas de ignición con rapidez y confiabilidad.',
              'Limpia los cables de encendido, tapas de distribuidor y enchufes.',
              'Contenido: 300 ml. Art. N° 890 100.',
            ],
            applications: [
              'Conexiones eléctricas con problemas de humedad.',
              'Sistema de ignición de vehículos.',
            ],
            pdfPage: '160',
          },

          {
            id: 'contacto-sl',
            name: 'CONTACTO SL',
            images: [
              require('../assets/images/02.00/02.09p2.jpg'),
            ],
            features: [
              'Barniz protector transparente, previene cortocircuitos en bobinas y transformadores.',
              'Produce una película protectora brillante en rangos de alta y baja tensión.',
            ],
            applications: [
              'Protección de bobinas, transformadores y contactos eléctricos.',
              'Lavado de componentes electrónicos.',
            ],
            pdfPage: '160',
          },

          {
            id: 'contacto-sw',
            name: 'CONTACTO SW',
            images: [
              require('../assets/images/02.00/02.09p3.jpg'),
            ],
            features: [
              'Aerosol especial de lavado para contactos y componentes eléctricos.',
              'No ataca plásticos y otros materiales comunes.',
              'Debe estar completamente seco antes de encender el sistema eléctrico.',
            ],
            applications: [
              'Limpieza de contactos eléctricos.',
              'Mantenimiento de componentes electrónicos.',
            ],
            pdfPage: '160',
          },

          {
            id: 'contacto-ol',
            name: 'CONTACTO OL',
            images: [
              require('../assets/images/02.00/02.09p4.jpg'),
            ],
            features: [
              'Eliminador de óxido, aceite y suciedad.',
              'Disuelve el óxido y limpia contactos.',
              'Elimina sulfuro, resina, aceite y suciedad.',
              'No ataca materiales estructurales.',
              'Libre de halógenos.',
              'Los vapores deben disiparse antes de encender el sistema eléctrico.',
            ],
            applications: [
              'Limpieza de contactos eléctricos.',
              'Eliminación de óxido en componentes.',
              'Mantenimiento general eléctrico.',
            ],
            pdfPage: '160',
          },

          {
            id: 'contacto-os',
            name: 'CONTACTO OS',
            images: [
              require('../assets/images/02.00/02.09p5.jpg'),
            ],
            features: [
              'Agente anticorrosión.',
              'Protección a largo plazo para contactos, interruptores y unidades electromecánicas.',
              'Excelente lubricante para engranajes delicados.',
              'Elimina suciedad, resina, aceite y metal desgastado.',
              'Libre de ácido.',
            ],
            applications: [
              'Protección de contactos eléctricos.',
              'Lubricación de mecanismos y engranajes.',
              'Mantenimiento de sistemas electromecánicos.',
            ],
            pdfPage: '160',
          },

          {
            id: 'protector-polos-bateria',
            name: 'PROTECTOR DE POLOS DE BATERÍA',
            images: [
              require('../assets/images/02.00/02.09p6.jpg'),
            ],
            features: [
              'Protección duradera y resistente al calor para polos de batería.',
              'Película azul, duradera y resistente al calor.',
              'Protección contra corrosión, inclemencias meteorológicas y ácido de la batería.',
              'Evita la resistencia del paso de la corriente y bajadas de tensión.',
            ],
            applications: [
              'Polos de batería de vehículos.',
              'Uniones eléctricas con exposición a ácido.',
            ],
            pdfPage: '161',
          },

          {
            id: 'desoxidante-dielectrico',
            name: 'DESOXIDANTE DIELÉCTRICO',
            images: [
              require('../assets/images/02.00/02.09p7.jpg'),
            ],
            features: [
              'Para limpieza y desengrasado de contactos eléctricos, aparatos telefónicos y electrónicos.',
              'Elimina residuos carbónicos, principal causa de falsos contactos y dispersión de corrientes.',
              'No afecta materiales plásticos.',
            ],
            applications: [
              'Contactos eléctricos, aparatos electrónicos.',
              'Micromecanismos de precisión.',
            ],
            pdfPage: '162',
          },

          {
            id: 'grasa-dielectrica',
            name: 'GRASA DIELÉCTRICA',
            images: [
              require('../assets/images/02.00/02.09p8.jpg'),
            ],
            features: [
              'Grasa dieléctrica siliconizada para mejor funcionamiento eléctrico.',
              'Evita la incrustación de humedad y formación de arcos eléctricos.',
              'Sella y lubrica sistemas de frenos (pistón).',
              'Excelente para lubricación de metales delicados como latón. No es tóxica.',
            ],
            applications: [
              'Sellado y lubricación de pistones hidráulicos y neumáticos.',
              'Contactos eléctricos con requisito dieléctrico.',
            ],
            pdfPage: '163',
          },

          {
            id: 'gel-pasacables-lf',
            name: 'GEL PASACABLES LF',
            images: [
              require('../assets/images/02.00/02.09p9.jpg'),
            ],
            features: [
              'Lubricante para el tendido de instalaciones eléctricas y telefonía.',
              'Elimina hasta el 80% del roce producido durante el tendido.',
              'Alta densidad evita derrames indeseados.',
              'El agua se evapora rápidamente, facilitando la introducción de otros cables.',
            ],
            applications: [
              'Instalaciones eléctricas domésticas e industriales.',
              'Tendido de cables en tubos y canalizaciones.',
            ],
            pdfPage: '164',
          },

          {
            id: 'limpiador-contacto-circuito',
            name: 'LIMPIADOR DE CONTACTO Y CIRCUITO',
            images: [
              require('../assets/images/02.00/02.09p10.jpg'),
            ],
            features: [
              'Limpia flujo, suciedad y contaminantes de contactos, interruptores y motores.',
              'Secado rápido, no deja residuos.',
              'No conductivo a 25,000 voltios. Libre de hexano. No daña el ozono.',
              'Seguro para plásticos, caucho y metal.',
              'Contenido: 500 ml. Art. N° 893 961.',
            ],
            applications: [
              'Contactos e interruptores eléctricos.',
              'Instrumentos de precisión y componentes electrónicos.',
            ],
            pdfPage: '165',
          },

          {
            id: 'desengrasante-dielectrico',
            name: 'DESENGRASANTE DIELÉCTRICO',
            images: [
              require('../assets/images/02.00/02.09p11.jpg'),
            ],
            features: [
              'Desengrasante y lubricante que repele la humedad e impermeabiliza motores eléctricos.',
              'Sustituye solventes derivados del petróleo, eliminando riesgos de incendios.',
              'Libre de metales pesados. Alta rigidez dieléctrica (32,000 V).',
              'No es conductor. Aumenta la baja aislación térmica provocada por la humedad.',
            ],
            applications: [
              'Motores eléctricos y electrónicos.',
              'Desengrasado de componentes eléctricos sensibles.',
            ],
            pdfPage: '166',
          },

        ],
      },

      {
        code: '02.10 (Protección de bajos)',
        name: 'Protección de bajos',

        products: [

          {
            id: 'high-build-underseal',
            name: 'HIGH BUILD UNDERSEAL',
            images: [
              require('../assets/images/02.00/02.10p1.jpg'),
            ],
            features: [
              'Spray protector contra golpes de piedras y la corrosión.',
              'Protege contra golpes de piedra y previene la corrosión por agua y sal.',
              'Estanqueiza e insonoriza. Elasticidad permanente.',
              'Combinación de caucho y materia artificial para bajos, guardabarros y faldones.',
            ],
            applications: [
              'Protección de bajos de vehículos.',
              'Guardabarros, faldones, alerones, capó y maletero.',
            ],
            pdfPage: '167',
          },

        ],
      },

      {
        code: '02.11 (Químicos mecánica)',
        name: 'Químicos mecánica',

        products: [

          {
            id: 'detector-fugas',
            name: 'DETECTOR DE FUGAS',
            images: [
              require('../assets/images/02.00/02.11p1.jpg'),
            ],
            features: [
              'Detecta fugas en circuitos de aire comprimido y gas.',
              'Rociar sobre el lugar sospechoso, aparece espuma blanca en el punto de fuga.',
              'Aplicable en frenos con aire comprimido, neumáticos, mangueras, válvulas.',
              'Producto no inflamable.',
            ],
            applications: [
              'Tuberías presurizadas con aire comprimido.',
              'Compresores, válvulas y recipientes de aire comprimido.',
            ],
            pdfPage: '168',
          },

          {
            id: 'spray-congelante',
            name: 'SPRAY CONGELANTE',
            images: [
              require('../assets/images/02.00/02.11p2.jpg'),
            ],
            features: [
              'Gran poder de enfriamiento.',
              'Para reparaciones y desmontajes.',
            ],
            applications: [
              'Reparaciones y desmontajes que requieren enfriamiento rápido.',
            ],
            pdfPage: '169',
          },

          {
            id: 'pasta-montaje-escapes',
            name: 'PASTA DE MONTAJE DE ESCAPES',
            images: [
              require('../assets/images/02.00/02.11p3.jpg'),
            ],
            features: [
              'Pasta blanda para montaje rápido, fácil y hermético de uniones de escape.',
              'Sin soldaduras. Endurece como el metal con el calor del escape.',
              'Resistente a temperaturas hasta aprox. +700°C.',
              'Resistente a golpes y vibraciones. Sella permanentemente.',
              'Contenido: 140 g. Art. N° 890 100 0 45.',
            ],
            applications: [
              'Uniones de tubos de escape.',
              'Sellado hermético en sistemas de escape.',
            ],
            pdfPage: '170',
          },

          {
            id: 'spray-antirechinidos-frenos',
            name: 'SPRAY ANTIRECHINIDOS DE FRENOS',
            images: [
              require('../assets/images/02.00/02.11p4.jpg'),
            ],
            features: [
              'Resina acrílica de color rojo diluida en solvente.',
              'Gran poder de adherencia.',
              'Resistente a temperaturas de hasta 300°C.',
              'Elimina completamente el contacto metal/metal (cilindro/pastilla).',
              'Adhiere bien en metal, protegiendo contra la oxidación.',
            ],
            applications: [
              'Pastillas de frenos.',
              'Eliminación de ruido de frenos en vehículos.',
            ],
            pdfPage: '171',
          },

          {
            id: 'liquido-frenos-dot4',
            name: 'LÍQUIDO DE FRENOS DOT 4',
            images: [
              require('../assets/images/02.00/02.11p5.jpg'),
            ],
            features: [
              'Líquido 100% sintético para el llenado de circuitos de frenos y embragues.',
              'Buena protección de elementos metálicos ante oxidación y corrosión.',
              'Buena estabilidad térmica. Compatible con elementos de goma.',
              'Alto punto de ebullición en seco y húmedo.',
            ],
            applications: [
              'Automóviles y vehículos industriales.',
              'Circuitos de frenos y embragues.',
            ],
            pdfPage: '172',
          },

          {
            id: 'husky-refrigerante-anticongelante-30',
            name: 'HUSKY - REFRIGERANTE ANTICONGELANTE 30%',
            images: [
              require('../assets/images/02.00/02.11p6.jpg'),
            ],
            features: [
              'Multimetal, especialmente indicado para radiadores de aluminio.',
              'Compatible con acero, fundición, aluminio, cobre, latón, tubos de goma y soldaduras.',
              'No contiene nitratos ni aminas (impide la formación de Nitrosaminas).',
              'Contiene monoetilenglicol, agua desionizada y agentes antioxidantes.',
            ],
            applications: [
              'Sistemas de refrigeración de motores.',
              'Radiadores de aluminio y multimetal.',
            ],
            pdfPage: '173',
          },

          {
            id: 'husky-refrigerante-anticongelante-puro',
            name: 'HUSKY - REFRIGERANTE ANTICONGELANTE PURO',
            images: [
              require('../assets/images/02.00/02.11p7.jpg'),
            ],
            features: [
              'Multimetal, especialmente indicado para radiadores de aluminio.',
              'Compatible con acero, fundición, aluminio, cobre, latón, tubos de goma y soldaduras.',
              'No contiene nitratos ni aminas.',
              'Contiene monoetilenglicol, agua desionizada y agentes antioxidantes.',
            ],
            applications: [
              'Sistemas de refrigeración de motores.',
              'Uso puro o dilución según requerimiento.',
            ],
            pdfPage: '174',
          },

          {
            id: 'limpiador-filtro-particulas',
            name: 'LIMPIADOR DE FILTRO DE PARTÍCULAS',
            images: [
              require('../assets/images/02.00/02.11p8.jpg'),
            ],
            features: [
              'Agente de limpieza para eliminación de depósitos de carbón y cenizas en filtros DPF.',
              'No es necesario remover el DPF para la limpieza.',
              'Ahorra dinero al evitar la instalación de un nuevo filtro.',
              'No es inflamable. Fórmula neutral. Se evapora sin dejar residuos.',
            ],
            applications: [
              'Filtros de partículas diesel (DPF).',
              'Mantenimiento de sistemas de escape en vehículos diesel.',
            ],
            pdfPage: '175',
          },

          {
            id: 'anticristalizante-pastillas-frenos-sbs',
            name: 'ANTICRISTALIZANTE PARA PASTILLAS DE FRENOS SBS',
            images: [
              require('../assets/images/02.00/02.11p9.jpg'),
            ],
            features: [
              'Quita el rechinido de los frenos causado por exceso de cristalización.',
              'Se aplica directamente sobre la superficie de discos, tambores y pastillas.',
              'Fórmula con resistencia a altas temperaturas.',
            ],
            applications: [
              'Discos, tambores y pastillas de frenos.',
              'Prevención y tratamiento de cristalización en frenos.',
            ],
            pdfPage: '176',
          },

        ],
      },

      {
        code: '02.12 (Cintas)',
        name: 'Cintas',

        products: [

          {
            id: 'cinta-adhesiva-velcro',
            name: 'CINTA ADHESIVA VELCRO GANCHO Y BUCLE',
            images: [
              require('../assets/images/02.00/02.12p1.jpg'),
            ],
            features: [
              'Compuesta por dos cintas de Poliamida 6.6 (Nylon).',
              'Una cara con diminutos ganchos que se agarran a la cara de suaves bucles.',
              'Sistema de cierre por presión de gancho y bucle.',
              'Permite realizar uniones ajustables ligeras de manera rápida y sencilla.',
              'Gran adherencia en superficies lisas.',
            ],
            applications: [
              'Uniones ajustables ligeras.',
              'Cierre y sujeción en diversas aplicaciones.',
            ],
            pdfPage: '177',
          },

        ],
      },

      {
        code: '02.13 (Químicos para la industria alimenticia)',
        name: 'Químicos para la industria alimenticia',

        products: [

          {
            id: 'multiclean',
            name: 'MULTICLEAN',
            images: [
              require('../assets/images/02.00/02.13p1.jpg'),
            ],
            features: [
              'Limpiador especial para limpieza y engrase temporal.',
              'Para entornos sensibles fisiológica y ecológicamente.',
            ],
            applications: [
              'Limpieza y engrase temporal en la industria alimentaria.',
            ],
            pdfPage: '178',
          },

          {
            id: 'lms-fluid',
            name: 'LMS - FLUID',
            images: [
              require('../assets/images/02.00/02.13p2.jpg'),
            ],
            features: [
              'Grasa líquida alimentaria con base de aceite de parafina.',
              'Puede utilizarse en el sector alimentario.',
            ],
            applications: [
              'Lubricación en la industria alimentaria.',
              'Zonas en contacto con alimentos.',
            ],
            pdfPage: '179',
          },

          {
            id: 'lubricante-industria-alimentaria',
            name: 'LUBRICANTE PARA LA INDUSTRIA ALIMENTARIA',
            images: [
              require('../assets/images/02.00/02.13p3.jpg'),
            ],
            features: [
              'Para zonas de engrase en contacto con alimentos.',
              'Excelentes propiedades lubricantes en puntos de difícil acceso por su baja viscosidad.',
              'Efecto limpiador con máxima protección en zonas expuestas a esfuerzos hidráulicos.',
              'Consumo reducido. Olor y sabor neutrales.',
            ],
            applications: [
              'Engrase de maquinaria en contacto directo con alimentos.',
              'Zonas de transporte y procesamiento de alimentos.',
            ],
            pdfPage: '180',
          },

          {
            id: 'grasa-multiusos-iii-iv',
            name: 'GRASA MULTIUSOS III / IV',
            images: [
              require('../assets/images/02.00/02.13p4.jpg'),
            ],
            features: [
              'Registro NSF H1 N° 135924.',
              'Cumple norma USDA H1, 1998.',
              'Contenido: 400 g. Art. N° 893 107 002.',
            ],
            applications: [
              'Lubricación grado alimenticio.',
              'Zonas de engrase en la industria alimentaria.',
            ],
            pdfPage: '181',
          },

          {
            id: 'grasa-alimentaria-wa-278',
            name: 'GRASA ALIMENTARIA W-A 278',
            images: [
              require('../assets/images/02.00/02.13p5.jpg'),
            ],
            features: [
              'Puede utilizarse en el sector alimentario.',
              'NSF H1.',
            ],
            applications: [
              'Lubricación en procesos alimentarios.',
              'Maquinaria en contacto indirecto con alimentos.',
            ],
            pdfPage: '182',
          },

          {
            id: 'lubricante-grado-alimenticio-lm',
            name: 'LUBRICANTE GRADO ALIMENTICIO LM (LM-HHS)',
            images: [
              require('../assets/images/02.00/02.13p6.jpg'),
            ],
            features: [
              'Puede ser utilizada en áreas donde se almacenen o procesen alimentos.',
              'Registrado NSF H1.',
              'En este contexto, puede entrar en contacto con alimentos por razones técnicas.',
            ],
            applications: [
              'Áreas de almacenamiento y procesamiento de alimentos.',
              'Lubricación de maquinaria grado alimenticio.',
            ],
            pdfPage: '183',
          },

          {
            id: 'limpiador-acero-inoxidable-alimentario',
            name: 'LIMPIADOR PARA ACERO INOXIDABLE',
            images: [
              require('../assets/images/02.00/02.13p7.jpg'),
            ],
            features: [
              'Líquido especial de limpieza para tratamiento previo de superficies metálicas en industria alimentaria.',
              'Elimina suciedades como taladrina, aceite de corte, polvo.',
              'Muy económico en el consumo.',
              'Homologación NSF A1.',
            ],
            applications: [
              'Preparación de superficies metálicas en industria alimentaria.',
              'Tratamiento previo a operaciones de limpieza y cuidado.',
            ],
            pdfPage: '184',
          },

          {
            id: 'rost-off-crafty',
            name: 'ROST OFF CRAFTY',
            images: [
              require('../assets/images/02.00/02.13p8.jpg'),
            ],
            features: [
              'Desoxidante sintético biodegradable de alto rendimiento.',
              'Homologación para uso alimentario (NSF-H2).',
              'Aplicación en áreas cercanas a zonas de uso alimentario (sin contacto directo con alimentos).',
              'Contiene aceite sintético. Efecto óptimo de lubricación. Biodegradable.',
            ],
            applications: [
              'Zonas cercanas a la industria alimentaria.',
              'Desoxidación con homologación alimentaria.',
            ],
            pdfPage: '185',
          },

          {
            id: 'silicon-fluid-alimentario',
            name: 'SILICÓN - FLUID',
            images: [
              require('../assets/images/02.00/02.13p9.jpg'),
            ],
            features: [
              'Spray de silicona alimentario con aceites de alta calidad altamente concentrados.',
              'Buenas propiedades como lubricante y antiadherente.',
              'Evita la adherencia y los chirridos.',
              'Resistencia a la temperatura desde -50°C hasta +250°C.',
              'Contenido: 300 ml. Art. N° 0893 221 000.',
            ],
            applications: [
              'Lubricación y desmolde en la industria alimentaria.',
              'Aplicaciones a altas temperaturas.',
            ],
            pdfPage: '186',
          },

        ],
      },

      {
        code: '02.14 (Químicos grado ecológico)',
        name: 'Químicos grado ecológico',

        products: [

          {
            id: 'eco-limpiador-llantas-aluminio',
            name: 'ECO LIMPIADOR DE LLANTAS DE ALUMINIO',
            images: [
              require('../assets/images/02.00/02.14p1.jpg'),
            ],
            features: [
              'Elimina incrustaciones de agua, manchas de óxido, depósitos de cal, grasa y moho.',
              'No produce vapores corrosivos. No cáustico, no ácido, no corrosivo.',
              'Sin COV. Biodegradable. Completamente soluble en agua.',
              'Acción de la espuma permite más tiempo de fijación.',
            ],
            applications: [
              'Ruedas de aluminio.',
              'Eliminación de incrustaciones sin dañar el acabado.',
            ],
            pdfPage: '187',
          },

          {
            id: 'eco-limpiador-vidrios-ventanas',
            name: 'ECO LIMPIADOR DE VIDRIOS Y VENTANAS',
            images: [
              require('../assets/images/02.00/02.14p2.jpg'),
            ],
            features: [
              'Limpiador biodegradable para bruma, vetas y capas en vidrios.',
              'Certificación Eco-Logo.',
              'Completamente biodegradable. Hecho de recursos 100% renovables.',
              'Sin COV. Sin fosfatos. Completamente soluble en agua.',
            ],
            applications: [
              'Vidrios y ventanas en general.',
              'Limpieza ecológica de superficies de cristal.',
            ],
            pdfPage: '188',
          },

          {
            id: 'eco-desengrasante-limpiador-multiusos',
            name: 'ECO DESENGRASANTE Y LIMPIADOR MULTIUSOS INDUSTRIAL',
            images: [
              require('../assets/images/02.00/02.14p3.jpg'),
            ],
            features: [
              'Limpiador y desengrasante multipropósito ecológico.',
              'Certificación Eco-Logo.',
              'Completamente biodegradable. Hecho de recursos 100% renovables.',
              'Sin COV. Sin fosfatos. Completamente soluble en agua.',
            ],
            applications: [
              'Limpieza y desengrasado industrial multipropósito.',
              'Alternativa ecológica a desengrasantes convencionales.',
            ],
            pdfPage: '189',
          },

          {
            id: 'limpiador-sanitarios-eco',
            name: 'LIMPIADOR PARA SANITARIOS 1L',
            images: [
              require('../assets/images/02.00/02.14p4.jpg'),
            ],
            features: [
              'Base de ácido cítrico natural, línea ECO.',
              'Limpia accesorios de saneamiento sin dañar el material.',
              'Etiqueta Ecológica Europea (EU Eco Label).',
              'Biodegradabilidad incrementada.',
              'El ácido cítrico elimina la cal y manchas.',
              'Contenido: 1000 ml. Art. N° 0893117 117.',
            ],
            applications: [
              'Accesorios de saneamiento.',
              'Baños y áreas sanitarias.',
            ],
            pdfPage: '190',
          },

          {
            id: 'eco-limpiador-alfombras-tapicerias',
            name: 'ECO LIMPIADOR DE ALFOMBRAS Y TAPICERÍAS',
            images: [
              require('../assets/images/02.00/02.14p5.jpg'),
            ],
            features: [
              'Limpiador oxigenado activo.',
              'Elimina manchas de asientos de tela de carros y camiones, alfombras y ropa.',
              'Elimina olores fuertes y resistentes en tejidos y tapicería.',
              'Excelente producto para escuelas, hospitales, casinos, restaurantes y hoteles.',
            ],
            applications: [
              'Alfombras y tapicerías de vehículos.',
              'Tejidos y superficies textiles en general.',
            ],
            pdfPage: '191',
          },

          {
            id: 'limpiador-pisos-biologico',
            name: 'LIMPIADOR DE PISOS BIOLÓGICO CONCENTRADO',
            images: [
              require('../assets/images/02.00/02.14p6.jpg'),
            ],
            features: [
              'Limpiador de pisos biológicamente activo con propiedades de degradación de suciedad.',
              'Certificación Eco-Logo.',
              'Completamente biodegradable. Hecho de recursos 100% renovables.',
              'Sin COV. Sin fosfatos. Completamente soluble en agua.',
            ],
            applications: [
              'Limpieza de pisos en entornos ecológicamente sensibles.',
              'Uso industrial y doméstico.',
            ],
            pdfPage: '192',
          },

          {
            id: 'eco-removedor-sarro-universal',
            name: 'ECO REMOVEDOR DE SARRO UNIVERSAL',
            images: [
              require('../assets/images/02.00/02.14p7.jpg'),
            ],
            features: [
              'Reemplazo de ácido todo-propósito biodegradable.',
              'Certificación EcoLogo.',
              'Completamente biodegradable. Sin COV. Sin fosfatos.',
              'Alternativa segura a los ácidos, sin abrasivos.',
              'Limpia sarro de agua, depósitos de limo, manchas de óxido y moho.',
            ],
            applications: [
              'Eliminación de sarro y depósitos minerales.',
              'Superficies donde no se pueden usar ácidos convencionales.',
            ],
            pdfPage: '193',
          },

          {
            id: 'eliminador-olores-biologico',
            name: 'ELIMINADOR DE OLORES BIOLÓGICO',
            images: [
              require('../assets/images/02.00/02.14p8.jpg'),
            ],
            features: [
              'Eliminador de olores biológico activo y limpiador profundo.',
              'Elimina incluso los olores más difíciles y rancios.',
              'Descompone rápidamente las moléculas generadoras del mal olor.',
              'Control de olores rápido, efectivo y duradero.',
              'Funciona en superficies duras y suaves. Certificación EcoLogo.',
            ],
            applications: [
              'Eliminación de olores en diversas superficies.',
              'Múltiples aplicaciones industriales y domésticas.',
            ],
            pdfPage: '194',
          },

          {
            id: 'eco-lustre-pulidor-metales',
            name: 'ECO LUSTRE PULIDOR DE METALES',
            images: [
              require('../assets/images/02.00/02.14p9.jpg'),
            ],
            features: [
              'Restaura el lustre original a una variedad de superficies metálicas.',
              'Deja una capa protectora seca.',
              'Contiene silicona.',
            ],
            applications: [
              'Defensas cromadas, llantas de aluminio, partes de latón y acero inoxidable.',
              'Electrodomésticos de acero inoxidable, aluminio y bronce.',
            ],
            pdfPage: '195',
          },

          {
            id: 'eco-desengrasante-multiusos',
            name: 'ECO DESENGRASANTE Y LIMPIADOR MULTIUSOS INDUSTRIAL',
            images: [
              require('../assets/images/02.00/02.14p10.jpg'),
            ],
            features: [
              'Limpiador y desengrasante multipropósito ecológico.',
              'Completamente biodegradable.',
              'Hecho de recursos 100% renovables.',
              'Sin COV. Sin fosfatos.',
              'Potente poder de limpieza.',
              'Desengrasante a base de agua de alto rendimiento.',
              'No requiere enjuagar.',
              'No es corrosivo.',
              'No es inflamable.',
              'pH: 11.5.',
              'Aroma agradable.',
              'Certificación Eco-Logo.',
            ],
            applications: [
              'Limpieza de pisos, paredes y superficies lavables.',
              'Uso en talleres de mantenimiento y limpieza de motores.',
              'Limpieza de porcelana, superficies plásticas y acero inoxidable.',
              'Limpieza de instalaciones eléctricas, persianas, escritorios y gabinetes.',
              'Uso en carros, camiones, asfalto y hormigón.',
            ],
            pdfPage: '196',
          },

        ],
      },

    ],
  },
];