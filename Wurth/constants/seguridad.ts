export const categories = [
  {
    name: 'SEGURIDAD E HIGIENE',
    subcategories: [

      // ── 09.01 Gafas ──────────────────────────────────────
      {
        code: '09.01 (Gafas)',
        name: 'Gafas de Protección',
        products: [

          {
            id: 'gafas-impex',
            name: 'LENTES DE PROTECCIÓN IMPEX',
            subtitle: 'Protección UV · Alto impacto',
            description: 'Lentes de uso general para aplicaciones que requieren protección contra impactos y exceso de luz.',
            features: [
              'Protección contra impactos.',
              '90% de protección contra rayos UV-A y UV-B.',
              'Ligero y económico.',
              'Patas ventiladas.',
              'Compatible con lentes graduados.',
              'Norma ANSI Z87.1-2003.',
              'Certificaciones CE EN166 y CAN/CSA Z94.3-07.',
              'Código: 899 103 125.',
              'Unidad de empaque: 1.',
            ],
            applications: [
              'Trabajos generales.',
              'Protección en talleres.',
              'Ambientes con partículas.',
            ],
            images: [
              require('../assets/seguridad/09.01-impex.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/09.01-impex-medidas.png'),
            ],
          },

          {
            id: 'gafas-profilo',
            name: 'LENTES DE PROTECCIÓN PROFILO',
            subtitle: 'Policarbonato · Alto impacto',
            description: 'Lentes de protección con diseño ergonómico envolvente y alta resistencia.',
            features: [
              '100% policarbonato resistente (150 pies/seg).',
              'Antirayaduras y antiempañante.',
              'Protección lateral +10 mm.',
              'Peso: 22 g.',
              '99.9% protección UV.',
              'Colores: transparente / gris.',
              'Normas: ANSI Z87.1-2003 y CAN/CSA Z94.3-07.',
              'Códigos: 899 103 126 / 899 103 127.',
              'Unidad de empaque: 1.',
            ],
            applications: [
              'Industria.',
              'Trabajos de precisión.',
              'Ambientes de alto impacto.',
            ],
            images: [
              require('../assets/seguridad/profilo.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/profilo-medidas.png')
            ],
          },

          {
            id: 'gafas-trendus',
            name: 'LENTES DE PROTECCIÓN TRENDUS',
            subtitle: 'Panorámicos · UV 99.9%',
            description: 'Lentes de seguridad con visión panorámica y alta resistencia.',
            features: [
              'Policarbonato resistente a impactos.',
              '99.9% protección UV.',
              'Resistente a rayones.',
              'Vista panorámica.',
              'Puntas de goma antideslizante.',
              'Norma ANSI Z87.1-2003.',
              'Código: 899 103 132.',
              'Unidad de empaque: 1.',
            ],
            applications: [
              'Uso industrial.',
              'Protección contra impactos.',
              'Ambientes con alta iluminación.',
            ],
            images: [
              require('../assets/seguridad/trendus.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/trendus-medidas.png'),
            ],
          },
        ],
      },

      // ── 09.02 Guantes ──────────────────────────────────────
      {
        code: '09.02 (Guantes)',
        name: 'Guantes de Seguridad',
        products: [

          {
            id: 'guantes-pu-negro',
            name: 'GUANTES PU MICROPOROSO NEGRO',
            subtitle: 'Nylon + Poliuretano',
            description: 'Guante de nylon con recubrimiento de poliuretano, ideal para manipulación precisa.',
            features: [
              'Soporte de nylon negro.',
              'Recubrimiento de poliuretano.',
              'Transpirable.',
              'Sin costuras y libre de silicona.',
              'Empuñadura elástica.',
              'Alta resistencia a abrasión y desgarro.',
              'Normas EN 420:2003 y EN 388:2003.',
              'Categoría II (riesgos mecánicos).',
              'Resistencia EN 388: 4-1-3-1.',
              'Tallas: P, M, L, XL, XXL.',
              'Códigos: 899 400 729 → 733.',
            ],
            applications: [
              'Manipulación general.',
              'Industria.',
              'Montaje.',
            ],
            images: [
              require('../assets/seguridad/09.02p7.jpg'),
            ],
            measuresImages: [
              require('../assets/seguridad/09.02p7.jpg'),
            ],
          },

          {
            id: 'guantes-nitrilo-desechables',
            name: 'GUANTES DESECHABLES DE NITRILO NEGRO',
            subtitle: 'Alta sensibilidad',
            description: 'Guante desechable de nitrilo para trabajos de precisión.',
            features: [
              'Alta elasticidad.',
              'Gran sensibilidad táctil.',
              'Antiestático.',
              'Libre de látex.',
              'Resistente a abrasión.',
              'Espesor: 0.10 mm.',
              'Longitud: 240 mm.',
              'Color: negro.',
              'Código: 899 470 329.',
              'Caja de 100 unidades.',
            ],
            applications: [
              'Electrónica.',
              'Mecánica.',
              'Inspección.',
            ],
            images: [
              require('../assets/seguridad/09.02p2.jpg'),
            ],
            measuresImages: [
              require('../assets/seguridad/09.02p2.jpg'),
            ],
          },

          {
            id: 'guantes-nitrilo-gris',
            name: 'GUANTES NITRILO GRIS',
            subtitle: 'Alta resistencia',
            description: 'Guante de poliamida con recubrimiento de nitrilo para trabajos exigentes.',
            features: [
              'Fabricado en poliamida.',
              'Recubrimiento de nitrilo gris.',
              'Transpirable.',
              'Sin costuras.',
              'Libre de silicona.',
              'Alta resistencia mecánica.',
              'Norma EN 388.',
              'Categoría II.',
              'Resistencia: abrasión, corte, desgarro, perforación.',
              'Código: 899 444 10.',
            ],
            applications: [
              'Automotriz.',
              'Montaje.',
              'Manipulación de piezas.',
            ],
            images: [
              require('../assets/seguridad/09.02p6.jpg'),
            ],
            measuresImages: [
              require('../assets/seguridad/09.02p6.jpg'),
            ],
          },
        ],
      },

      // ── 09.05 Cintas ──────────────────────────────────────
      {
        code: '09.05 (Cintas)',
        name: 'Cintas de Seguridad',
        products: [

          {
            id: 'cinta-aqua',
            name: 'CINTA ANTIDESLIZANTE TRANSPARENTE AQUA',
            subtitle: 'Para zonas húmedas',
            description: 'Cinta antideslizante para evitar resbalones en superficies húmedas.',
            features: [
              'Soporte PVC con relieve.',
              'Adhesivo acrílico.',
              'Espesor: 0.78 mm.',
              'Resistencia temperatura: -5°C a +65°C.',
              'No deja residuos.',
              'Alta durabilidad.',
              'Color: transparente.',
              'Ancho: 25 / 50 mm.',
              'Longitud: 18 m.',
              'Código: 0894 125 018 / 0894 150 018.',
            ],
            applications: [
              'Piscinas.',
              'Duchas.',
              'Spas.',
            ],
            images: [
              require('../assets/seguridad/aqua.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/aqua-medidas1.png'),
              require('../assets/seguridad/aqua-medidas2.png'),
            ],
          },

          {
            id: 'cinta-senalizacion',
            name: 'CINTA ANTIDESLIZANTE SEÑALIZACIÓN',
            subtitle: 'Amarillo / Negro',
            description: 'Cinta antideslizante con señalización visual de seguridad.',
            features: [
              'Alta visibilidad.',
              'Granulado antideslizante.',
              'Adhesivo acrílico.',
              'Espesor: 0.78 mm.',
              'Alta resistencia.',
              'Color: amarillo/negro.',
              'Ancho: 25 / 50 mm.',
              'Longitud: 18 m.',
              'Código: 894 625 018 / 894 650 018.',
            ],
            applications: [
              'Escaleras.',
              'Rampas.',
              'Almacenes.',
            ],
            images: [
              require('../assets/seguridad/senalizacion.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/senalizacion-medidas1.png'),
              require('../assets/seguridad/senalizacion-medidas2.png'),
            ],
          },

          {
            id: 'cinta-antideslizante',
            name: 'CINTA ANTIDESLIZANTE ADHESIVA',
            subtitle: 'Uso general',
            description: 'Cinta para prevenir resbalones en zonas de tránsito.',
            features: [
              'Soporte PVC.',
              'Adhesivo acrílico.',
              'Alta resistencia al agua.',
              'Duración prolongada.',
              'Resistencia temperatura: -5°C a +50°C.',
              'Ancho: 25 / 50 mm.',
              'Longitud: 18 m.',
              'Código: 0894 325 180 / 0894 325 190.',
            ],
            applications: [
              'Escaleras.',
              'Rampas.',
              'Suelos industriales.',
            ],
            images: [
              require('../assets/seguridad/ahdesiva.png'),
            ],
            measuresImages: [
              require('../assets/seguridad/ahdesiva-medidas.png'),
            ],
          },
        ],
      },

    ],
  },
];