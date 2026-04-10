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
    name: 'AGRO',
    subcategories: [
      
      {
        code: '11.01 (Alimentación y complementos)',
        name: 'Alimentación y complementos',
        products: [
          {
            id: 'bloque-sal',
            name: 'BLOQUE DE SAL',
            subtitle: 'Pienso complementario mineral para animales',
            description:
              'Bloque de sal para alimentación animal. Pienso complementario para corregir/compensar deficiencias en el contenido de sal de piensos y forrajes.',
            features: [
              'Pienso complementario animal para corregir/compensar deficiencias en el contenido de sal de piensos y forrajes.',
              'La sal forma parte de los órganos del cuerpo.',
              'Resulta imprescindible para la realización de numerosas reacciones/procesos fisiológicos en los animales.',
              'Reduce el stress del ganado: jugando y lamiendo los animales se relajan y distraen.',
              'Mejora la producción y se obtienen animales más sanos.',
              'Son una fuente de nutrientes disponibles de forma continua.',
              'Formato en bloque compacto. Tecnología especial de fabricación y compactación permite gran durabilidad sin fragmentarse.',
              'No incluye aditivos aglutinantes del bloque.',
              'Se desgasta gradualmente por el lamido de los animales.',
              'Resistente a la lluvia, la humedad y el viento sin sufrir alteraciones.',
              'Cada bloque se suministra retractilado con film transparente plástico.',
              'Lleva un asa para su fácil transporte.',
              'Tiene forma cónica con un eje central hueco que permite pasar una cuerda, barra o colocarlo en un soporte.',
              'Bloques realizados con sal procedente de mina, con menos impurezas que los realizados con sal marina.',
            ],
            applications: [
              'Recomendado para todos los animales, especialmente rumiantes, en cualquier estado productivo, sin restricción de edad, peso o aptitud productiva.',
              'Bovino/Equino adulto: 40-80 g/animal y día aprox. En pastoreo: 1 bloque/5 animales. En establo: 1 bloque/2 animales.',
              'Ovino/Caprino adulto: 10-20 g/animal y día aprox. 1 bloque/25 animales.',
              'Cerdos: 10-20 g/animal y día aprox.',
            ],
            images: [
               require('../assets/images/11.00/11.01p1.png'),
            ],

             measuresImages: [
              require('../assets/images/11.00/11.01m1.png')
            ],
          },
          {
            id: 'bloque-mineral-universal',
            name: 'BLOQUE MINERAL UNIVERSAL',
            subtitle: 'Bloque universal de sal y minerales para lamer',
            description:
              'Bloque de sal enriquecido con minerales para alimentación animal. Corrige/compensa deficiencias en el contenido de sal y minerales de piensos y forrajes.',
            features: [
              'Corrige/compensa deficiencias en el contenido de sal y minerales de piensos y forrajes.',
              'La sal y los minerales forman parte de los órganos del cuerpo.',
              'Sales y minerales son imprescindibles para numerosos procesos fisiológicos en los animales.',
              'Reduce el stress del ganado: jugando y lamiendo los animales se relajan y distraen.',
              'Mejora la producción y se obtienen animales más sanos.',
              'Fuente de nutrientes disponibles de forma continua.',
              'Formato en bloque compacto con alta durabilidad sin fragmentarse.',
              'Resistente a la lluvia, la humedad y el viento sin sufrir alteraciones.',
              'Cada bloque se suministra retractilado con film transparente plástico.',
              'Lleva un asa para su fácil transporte. Forma cónica con eje central hueco.',
              'Bloques realizados con sal procedente de mina.',
            ],
            applications: [
              'Recomendado para todos los animales, especialmente rumiantes, en cualquier estado productivo, sin restricción de edad, peso o aptitud productiva.',
              'Bovino/Equino adulto: 40-80 g/animal y día aprox.',
              'Ovino/Caprino adulto: 10-20 g/animal y día aprox.',
              'Cerdos: 10-20 g/animal y día aprox.',
            ],
            images: [
               require('../assets/images/11.00/11.01p2.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.01m2.png')
            ],
          },
          {
            id: 'bloque-mineral-vacuno',
            name: 'BLOQUE MINERAL VACUNO',
            subtitle: 'Bloque de sal y minerales específico para vacuno',
            description:
              'Bloque de sal enriquecido con minerales para alimentación animal (especial bovinos).',
            features: [
              'Corrige/compensa deficiencias en el contenido de sal y minerales de piensos y forrajes.',
              'La sal y los minerales forman parte de los órganos del cuerpo (p.e. producción de carne).',
              'Reduce el stress del ganado (sobre todo en terneros): el Magnesio reduce la ansiedad.',
              'Mejora la producción de leche y ayuda a prevenir el parto seco en vacas (contiene Calcio y Magnesio).',
              'Elevado contenido en Zinc: mejora la cicatrización de la piel, la dermatitis interpodal, etc.',
              'Formato en bloque compacto con alta durabilidad sin fragmentarse.',
              'Resistente a la lluvia, la humedad y el viento sin sufrir alteraciones.',
              'Cada bloque se suministra retractilado con film transparente plástico.',
              'Lleva un asa para su fácil transporte. Forma cónica con eje central hueco.',
              'Bloques realizados con sal procedente de mina.',
            ],
            applications: [
              'Especialmente recomendado para animales de la especie vacuna en cualquier estado productivo. También es posible utilizarlo en otras especies (Equino, Caprino adulto y rumiantes salvajes).',
              'Bovino/Equino adulto: 40-80 g/animal y día aprox.',
              'Ovino/Caprino adulto: 10-20 g/animal y día aprox. 1 bloque/25 animales.',
            ],
            images: [
               require('../assets/images/11.00/11.01p3.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.01m3.png')
            ],
          },
          {
            id: 'chupete-agua-lechones',
            name: 'CHUPETE DE AGUA PARA LECHONES',
            subtitle: 'Chupete con teja para lechones inox regulable',
            description:
              'Válvula/chupete de agua realizado en acero inoxidable de una sola pieza, indicado para lechones en fase de lactación.',
            features: [
              'Indicado para lechones en fase de lactación.',
              'Realizado en acero inoxidable y de una sola pieza.',
              'Diseño antigoteo.',
              'Posición ideal de utilización horizontal. Utilizable en posición vertical.',
              'Provisto de regulador plástico de caudal.',
              'Cuerpo del chupete de 3/8".',
              'Resistente a la corrosión.',
              'Fácilmente desmontable (tuerca de montaje hexagonal SW22).',
              'Muelle interior en acero inoxidable.',
            ],
            applications: [
              'Suministro de agua para lechones en fase de lactación.',
            ],
            images: [
               require('../assets/images/11.00/11.01p4.png'),
            ],

            measuresImages: [
              require('../assets/images/11.00/11.01m4.png')
            ],
          },
          {
            id: 'chupete-agua-porcino',
            name: 'CHUPETE DE AGUA PARA PORCINO',
            subtitle: 'Válvula/chupete para porcino inox regulable',
            description:
              'Válvula y chupete de agua en acero inoxidable de una sola pieza, indicado para cerdos en fase de transición y engorde.',
            features: [
              'Indicado para cerdos en fase de transición y engorde.',
              'Realizado en acero inoxidable y de una sola pieza.',
              'Posición de utilización vertical.',
              'Cuerpo del chupete de 1/2".',
              'Resistente a la corrosión.',
              'Fácilmente desmontable (tuerca de montaje hexagonal).',
              'Muelle interior en acero inoxidable.',
            ],
            applications: [
              'Suministro de agua para cerdos en fase de transición y engorde.',
            ],
            images: [
               require('../assets/images/11.00/11.01p5.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.01m5.png')
            ],
          },
        ],
      },

      // 11.02 Ordeño
      {
        code: '11.02 (Ordeño)',
        name: 'Ordeño',
        products: [
          {
            id: 'pezonera-hdl',
            name: 'PEZONERA DE ORDEÑO HDL',
            subtitle: 'Adaptables a equipos Alfa-Laval',
            description:
              'Pezoneras para el ordeño de ganado vacuno, realizadas en goma de alta calidad.',
            features: [
              'Pezoneras para el ordeño de ganado vacuno.',
              'Realizadas en goma de alta calidad.',
              'Cumple con la regulación BGA apta para contacto alimentario y habilitada para llevar la marca RAL D-2.',
              'Fabricadas para tener una vida útil de 850 horas o 2.500 ordeños.',
              'Presión normal de trabajo: 40-49 KPa.',
              'Goma blanda y suave para ordeños menos agresivos con los pezones.',
            ],
            applications: [
              'Colector de leche modelo Harmony.',
            ],
            images: [
               require('../assets/images/11.00/11.02p1.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.02m1.png')
            ],
          },
          {
            id: 'mangueras-leche-goma',
            name: 'MANGUERAS DE LECHE DE GOMA',
            subtitle: 'Mangueras de conducción de leche desde las unidades de ordeño',
            description:
              'Mangueras en goma de alta calidad que transportan la leche desde las unidades de ordeño hasta las conducciones generales de leche.',
            features: [
              'Transportan la leche desde las unidades de ordeño hasta las conducciones generales de leche, que llenan los tanques de refrigeración.',
              'Mangueras realizadas en goma de alta calidad.',
              'Cumplen con la regulación BGA para materiales que directa o indirectamente puedan tener contacto alimentario.',
              'Presentan líneas de color anaranjado.',
              'Disponibles en diámetros 14,5x25,7 mm (líneas medias y altas) y 16x27 mm (líneas bajas).',
            ],
            applications: [
              'Conducción de leche en líneas bajas: 40-44 KPa (0,40-0,44 bares).',
              'Conducción de leche en líneas medias: 43-46 KPa (0,43-0,46 bares).',
              'Conducción de leche en líneas altas: 45-49 KPa (0,45-0,49 bares).',
            ],
            images: [
               require('../assets/images/11.00/11.02p2.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.02m2.png')
            ],
          },
          {
            id: 'filtros-leche',
            name: 'FILTROS DE LECHE',
            subtitle: 'Filtros para retención de residuos sólidos de la leche de ordeño',
            description:
              'Filtros sellados mediante costuras (cosidos) utilizados para evitar que restos sólidos de la leche pasen a los tanques de refrigeración.',
            features: [
              'Evitan que restos sólidos (suciedad, tejidos de ubres, callos de pezones, grumos de mamitis, etc.) pasen a los tanques de refrigeración.',
              'Filtros sellados mediante costuras (cosidos) que ofrecen mayor resistencia que los encolados.',
              'Se colocan en cartuchos o espirales en el interior de casquillos de acero inox.',
              'Se coloca uno previo a cada ordeño y se desecha tras el ordeño.',
              'Composición: Textil no tejido. Gramaje: 60 g/m2.',
              'Disponibles en longitudes: 620x57 mm, 455x57 mm y 320x57 mm.',
            ],
            applications: [
              'Filtrado de leche en conducciones generales antes de la entrada al tanque de refrigeración.',
            ],
            images: [
               require('../assets/images/11.00/11.02p3.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.02m3.png')
            ],
          },
        ],
      },

      // 11.03 Higiene
      {
        code: '11.03 (Higiene)',
        name: 'Higiene',
        products: [
          {
            id: 'sellador-pezones-yodo',
            name: 'SELLADOR DE PEZONES WÜRTH-YODO',
            subtitle: 'Sellador de pezones yodado',
            description:
              'Líquido aséptico para ser aplicado puro sobre los pezones de vacas, cabras y ovejas. Se emplea después de cada ordeño para prevenir infecciones de las glándulas mamarias.',
            features: [
              'Líquido aséptico para aplicar puro sobre los pezones de vacas, cabras y ovejas.',
              'Se emplea después de cada ordeño para prevenir mamitis o mastitis.',
              'Produce un film protector y el sellado del poro del pezón contra suciedad y microorganismos.',
              'Contiene suavizantes que acondicionan la piel, evitando irritaciones.',
              'Se emplea como alternativa a otros selladores (base clorhexidina, ácido láctico, etc.).',
              'Producto biodegradable.',
              'Contenido en yodo (I2): 0,25%. Caducidad: 1 año.',
            ],
            applications: [
              'Aplicar el producto puro por inmersión de los pezones en un dipper o aplicador de selladores tras el ordeño.',
              'Dejar el producto sobre los pezones hasta el siguiente ordeño. Lavar bien antes de ordeñar.',
            ],
            images: [
               require('../assets/images/11.00/11.03p1.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.03m1.png')
            ],
          },
          {
            id: 'glumoncat',
            name: 'GLUMONCAT',
            subtitle: 'Desinfectante, bactericida, fungicida de uso ganadero',
            description:
              'Desinfectante ganadero compuesto en Glutaraldehido al 15% y Cloruro de alquildimetilbencilamonio. Acción desinfectante, bactericida y fungicida.',
            features: [
              'Acción desinfectante, bactericida, fungicida.',
              'Amplio espectro de acción frente a gran cantidad de microorganismos.',
              'Cumple la norma UNE-EN 1276 (bactericida) a la dosis de 0\'2%.',
              'Cumple la norma UNE-EN 1650 (fungicida) a la concentración del 1\'5%.',
              'Registro para uso ganadero o zoosanitario.',
              'Acción rápida: actúa de forma efectiva en breve tiempo.',
              'Fácil de eliminar: se elimina con enjuague de agua.',
              'Presenta acción remanente desinfectante durante un período elevado de tiempo.',
              'Gran poder de penetración: penetra en los espacios o hendiduras más pequeñas.',
              'No es corrosivo a la dosis habitual.',
              'Producto puro muy estable: puede conservarse hasta 5 años.',
            ],
            applications: [
              'Superficies (suelos, paredes, techos, etc.), maquinaria, equipos, comederos, bebederos, depósitos, recipientes, utensilios y pequeño material.',
              'Jaulas y vehículos de transporte, pediluvios y vados sanitarios.',
              'Desinfección de mantenimiento: 0\'2% (20 ml en 10 L de agua).',
              'Desinfección de choque: 0\'4% (40 ml en 10 L de agua).',
              'Vacío sanitario: 0\'8% (80 ml en 10 L de agua).',
            ],
            images: [
               require('../assets/images/11.00/11.03p2.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.03m2.png')
            ],
          },
          {
            id: 'degramat-solido',
            name: 'DEGRAMAT SÓLIDO',
            subtitle: 'Acelerador de la degradación de materia orgánica',
            description:
              'Compuesto acelerador de la degradación de materia orgánica y recuperación de fosas de purines de granjas, fosas sépticas y conducciones.',
            features: [
              'Producto totalmente inocuo en su aplicación.',
              'Acelera la degradación de la materia orgánica, acelera el proceso natural.',
              'Actúa tanto en la capa superior como en la base de la fosa.',
              'Mantiene los purines líquidos.',
              'Reduce los malos olores.',
              'Disminución de moscas.',
              'Mantiene los niveles de nitrógeno.',
              'Desaparecen los gases nocivos (p. ej. amoníaco).',
              'Disminuye los costos de vaciado y mantenimiento.',
              'Facilita su transporte y posterior aplicación en el campo.',
              'Producto biodegradable.',
              'Contiene mínimo 60 millones de colonias/gramo.',
            ],
            applications: [
              'Fosas de purines en granjas. Atarjeas con restos de materia orgánica.',
              'Dosis: 1 Kg DEGRAMAT SÓLIDO por 50 m3 de purín.',
              'Los efectos serán perceptibles a partir de 25 días.',
              'Las recargas se efectuarán cada 25 días con la misma proporción.',
            ],
            images: [
               require('../assets/images/11.00/11.03p3.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.03m3.png')
            ],
          },
          {
            id: 'contral',
            name: 'CONTRAL',
            subtitle: 'Tratamiento biológico para el control y mantenimiento de aguas',
            description:
              'Producto biológico y respetuoso con el medioambiente para colonizar de forma dirigida embalses de riego, lagos, balsas y charcas.',
            features: [
              'Producto totalmente inocuo. No usa agentes químicos.',
              'Efecto a partir de bacterias gram negativas y facultativas.',
              'Producto apto para aguas destinadas al cultivo ecológico.',
              'Compatible con presencia de peces en el agua tratada.',
              'Evita la presencia y crecimiento de las algas y sus efectos molestos.',
              'Previene la obturación de los sistemas de riego, filtros y desagües.',
              'Mantiene los embalses de agua libres de agentes que alimentan las algas.',
              'Mantiene la estética de agua limpia en estanques, lagos, charcas y fuentes.',
              'Presentación en contenedores con bolsas hidrosolubles (40 bolsas de 250 g).',
              'Las bacterias compiten con las algas por el alimento, evitando su desarrollo.',
              'Mantienen el agua limpia y evitan la proliferación de olores por agua podrida.',
            ],
            applications: [
              'Embalses de riego, lagos, balsas, charcas, jardines ornamentales (hoteles, campos de golf).',
              'Dosis uso general: 250 g o 1 bolsita / 100 m2 de superficie de balsa.',
              'Dosis con presencia de lodos: 250 g o 1 bolsita / 500 m2 de sup. de balsa.',
              'Aplicar la dosificación al menos 3 veces repartidas en 1 año.',
            ],
            images: [
               require('../assets/images/11.00/11.03p4.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.03m4.png')
            ],
          },
          {
            id: 'rumisec-granulado',
            name: 'RUMISEC GRANULADO 25 KG',
            subtitle: 'Producto secante de la cama del ganado',
            description:
              'Complejo mineral para secar todo tipo de camas de animales. Gran capacidad de absorción de hasta 5-6 veces su volumen en agua.',
            features: [
              'Reduce la humedad en la cama obteniendo un lecho más compacto.',
              'Mejora el confort de los animales.',
              'Previene infecciones y enfermedades respiratorias causadas por enfriamiento y humedad.',
              'Reduce las emisiones de amoniaco (NH3) al ambiente por absorción de orines del ganado.',
              'Gran capacidad de absorción de hasta 5-6 veces su volumen en agua.',
              'A mayor temperatura, mayor absorción.',
              'Incrementa el rendimiento en comparación con otros productos.',
              'Se presenta en polvo granulado: facilidad de repartir y aplicar, no levanta polvo.',
              'Agente saneante con acción bactericida y fungicida.',
              'Previene y reduce la incidencia de mamitis ambientales causadas por bacterias.',
              'Aroma a eucaliptus. Caducidad: 36 meses.',
            ],
            applications: [
              'Todo tipo de camas (paja, serrín, viruta, papel o alfombras) en cubículos o parques, tanto de cemento como de plástico, y en suelo continuo o enrejillado.',
              'Vacas lecheras en parques con paja: 600 g/semana en 2 ó 3 veces.',
              'Terneras: 500 g/semana en 2 veces.',
              'Novillos: 600 g/semana en 2 veces.',
              'Vacas en cubículos individuales: 300 g/semana en 3 ó 4 veces.',
              'Caballos: 600 g/semana en 2 veces.',
              'Ovino y caprino: 150 g/semana en 2 ó 3 veces.',
              'Cerdas gestantes o verracos: 75 g/semana en 2 veces.',
              'Cerdas en maternidad: 90 g/semana en 2 veces.',
              'Lechones destetados: 30 g/semana en 2 veces.',
              'Cerdos de engorde: 60 g/semana en 2 veces.',
            ],
            images: [
               require('../assets/images/11.00/11.03p5.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.03m5.png')
            ],
          },
        ],
      },

      // 11.04 Manejo ganadero
      {
        code: '11.04 (Manejo ganadero)',
        name: 'Manejo ganadero',
        products: [
          {
            id: 'lazo-morro-porcino',
            name: 'LAZO MORRO PORCINO CON FRENO',
            subtitle: 'Herramienta para la inmovilización de cerdos',
            description:
              'Herramienta para inmovilizar cerdos mediante el agarre del morro del animal. Fabricada en acero galvanizado.',
            features: [
              'Indicado para inmovilizar cerdos mediante el agarre del morro del animal.',
              'De uso en las operaciones de: extracción de sangre, vacunación, inyección de medicamentos, marcación, etc.',
              'Mecanismo de empuñadura que se desliza dentro de un brazo rígido y permite ajustar el cable al morro del animal.',
              'Al acercar el lazo, el cerdo introduce el morro y muerde el cable.',
              'Provisto de freno autoblocante para retener el cable y reducir el esfuerzo de sujeción.',
              'Dispone de mangos antideslizantes de goma en los dos extremos del brazo.',
              'Cable realizado en acero galvanizado de 50 cm de longitud y 5 mm Ø.',
              'Empuñadura y brazo del lazo fabricados en acero galvanizado.',
              'Longitud: 24 cm. Peso: 1250 g.',
            ],
            applications: [
              'Extracción de sangre, vacunación, inyección de medicamentos y marcación de cerdos.',
            ],
            images: [
               require('../assets/images/11.00/11.04p1.png'),
            ],
            measuresImages: [
              require('../assets/images/11.00/11.04m1.png')
            ],
          },
        ],
      },
    ],
  },
];
