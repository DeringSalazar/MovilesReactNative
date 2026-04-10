interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  images?: any[];
  features?: string[];
  applications?: string[];
  measuresImages?: any[];
}
 
export const categories = [
  {
    name: 'MÁQUINAS',
    subcategories: [
 
      // ── 08.01 Herramientas Neumáticas ────────────────────────────────
      {
        code: '08.01 (Herramientas neumáticas)',
        name: 'Herramientas neumáticas',
        products: [
 
          // ── Producto 1 ── Pistola de Impacto Neumática DSS ¾" H ──────
          {
            id: 'pistola-dss-34h',
            name: 'Pistola de Impacto Neumática DSS ¾" H',
            subtitle: 'Art. Nº 0703 773 0',
            description: 'Pistola de impacto compacta y ligera para trabajos generales. Ideal para cambio de ruedas en vehículos comerciales.',
            features: [
              'Mecánica robusta y equilibrada con carcasa de aluminio.',
              'Empuñadura ergonómica revestida de goma, cambio de sentido izquierda y derecha, y gatillo regulable.',
              'Sistema de impacto de alta calidad en baño de aceite, con motor accionado por seis paletas.',
              'Muy ligera y fácil de manejar. Evita el efecto "manos frías".',
              '1 año de garantía contra fallos de fabricación.',
            ],
            applications: [
              'Pistola de alta potencia y rapidez de trabajo, hasta M27.',
              'Ideal para el cambio de ruedas en vehículos comerciales.',
              'Par de trabajo: 350 – 1.440 Nm | Par máx. destornillado: 1.500 Nm',
              'Presión óptima: 6,3 bar | Consumo de aire: 215 l/min',
              'Dimensiones: 261 × 87 × 227 mm | Peso: 4,73 kg',
            ],
            images: [
              require('../assets/images/8.00/08.01p1.png'),
              require('../assets/images/8.00/08.01p1.2.png'),
              require('../assets/images/8.00/08.01p1.3.png'),
              require('../assets/images/8.00/08.01p1.4.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p1m1.png'),
              require('../assets/images/8.00/08.01p1m2.png'),
              require('../assets/images/8.00/08.01p1m3.png'),
            ],
          },
 
          // ── Producto 2 ── Pistola de Impacto Neumática DSS 1" P ──────
          {
            id: 'pistola-dss-1p',
            name: 'Pistola de Impacto Neumática DSS 1" P',
            subtitle: 'Art. Nº 0703 775 0',
            description: 'Pistola robusta de mayor potencia para cambio de ruedas en camiones y mantenimiento industrial de alto rendimiento.',
            features: [
              'Mecánica robusta y equilibrada con carcasa de aluminio.',
              'Empuñadura ergonómica revestida de goma con mano adicional ajustable 360°.',
              'Sistema de impacto de alta calidad en baño de aceite, con motor de seis paletas.',
              'Muy ligera y fácil de manejar. Se adapta a todas las posiciones de trabajo.',
              '1 año de garantía contra fallos de fabricación.',
            ],
            applications: [
              'Robusta pistola para el cambio de ruedas en camiones, autobuses y maquinaria agrícola.',
              'También perfecta para mantenimiento industrial y trabajos de reparación.',
              'Par de trabajo: 895 – 1.694 Nm | Par máx. destornillado: 2.440 Nm',
              'Presión óptima: 6,3 bar | Consumo de aire: 310 l/min',
              'Dimensiones: 305 × 104 × 276 mm | Peso: 9,97 kg',
            ],
            images: [
              require('../assets/images/8.00/08.01p2.png'),
              require('../assets/images/8.00/08.01p2.2.png'),
              require('../assets/images/8.00/08.01p2.3.png'),
              require('../assets/images/8.00/08.01p2.4.png'),
              require('../assets/images/8.00/08.01p2.5.png'),
              require('../assets/images/8.00/08.01p2.6.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p2m1.png'),
              require('../assets/images/8.00/08.01p2m2.png'),
              require('../assets/images/8.00/08.01p2m3.png'),
            ],
          },
 
          // ── Producto 3 ── Pistola de Impacto Neumática DSS 1" L ──────
          {
            id: 'pistola-dss-1l',
            name: 'Pistola de Impacto Neumática DSS 1" L',
            subtitle: 'Art. Nº 0703 780 0',
            description: 'Pistola de eje largo con alcance extendido para aplicaciones en camiones, autobuses y maquinaria agrícola.',
            features: [
              'Mecánica robusta y equilibrada con carcasa de aluminio, eje largo.',
              'Mango adicional con posición ajustable de 360°, cambio de sentido con regulador de velocidad.',
              'Mecanismo de alta calidad con martillo doble.',
              'Mayor duración y excelente relación consumo–potencia.',
              '1 año de garantía contra fallos de fabricación.',
            ],
            applications: [
              'Pistola de eje largo para el cambio de ruedas en camiones, autobuses y maquinaria de construcción.',
              'Par de trabajo: 996 – 1.870 Nm | Par máx. destornillado: 2.440 Nm',
              'Presión óptima: 6,3 bar | Consumo de aire: 370 l/min',
              'Dimensiones: 512 × 109 × 188 mm | Peso: 10,93 kg',
            ],
            images: [
              require('../assets/images/8.00/08.01p3.png'),
              require('../assets/images/8.00/08.01p3.2.png'),
              require('../assets/images/8.00/08.01p3.3.png'),
              require('../assets/images/8.00/08.01p3.4.png'),
              require('../assets/images/8.00/08.01p3.5.png'),
              require('../assets/images/8.00/08.01p3.6.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p3m1.png'),
              require('../assets/images/8.00/08.01p3m2.png'),
              require('../assets/images/8.00/08.01p3m3.png'),
            ],
          },
 
          // ── Producto 4 ── Engrasadora Neumática Würth 50 Kg ──────────
          {
            id: 'engrasadora-50kg',
            name: 'Engrasadora Neumática Würth 50 Kg',
            subtitle: 'Art. Nº 1986 600',
            description: 'Equipo móvil de engrase neumático para bidones de 50 kg con presión y caudal máximo optimizado.',
            features: [
              'Bomba neumática que aumenta la presión de entrada hasta 55 veces.',
              'Tapa para bidones de 50 kg de Ø 405 mm con fijación mediante tornillos.',
              'Pistola ergonómica de acero y aluminio para engrase a presión.',
              'Provisto de 3 ruedas (2 con banda de caucho y 1 direccionable).',
              'Soporte tubular Ø 22 mm con revestimiento en polvo epoxy sinterizado.',
              'Se suministra sin plato seguidor. 1 año de garantía.',
            ],
            applications: [
              'Equipo neumático de engrase móvil para bidones de 45 a 50 kg.',
              'Presión de aire: 3 – 10 bar | Consumo de aire: 150 l/min',
              'Caudal máximo: 650 cc/min | Presión máx. salida grasa: 550 bar',
              'Rosca entrada/salida: R 1/4" (Gas) | Presión acústica: 80 dB',
            ],
            images: [
              require('../assets/images/8.00/08.01p4.png'),
              require('../assets/images/8.00/08.01p4.2.png'),
              require('../assets/images/8.00/08.01p4.3.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p4m1.png'),
              require('../assets/images/8.00/08.01p4m2.png'),
            ],
          },
 
          // ── Producto 5 ── Llave de Impacto Neumática DSS ½" H ────────
          {
            id: 'llave-dss-12h',
            name: 'Llave de Impacto Neumática DSS ½" H',
            subtitle: 'Art. No. 90703 736 0',
            description: 'Atornilladora de impacto compacta y potente con torque regulable en 4 niveles para precisión en trabajos.',
            features: [
              'Robusta y bien balanceada, con carcasa de aleación de aluminio.',
              'Mango recubierto en goma, ergonómico, con fácil acceso a cambios de dirección y velocidad.',
              'Mecanismo de martillos de alta calidad en baño de aceite, motor de seis compartimientos.',
              'El pistón de reversa y los 4 niveles de torque se operan con una sola mano.',
            ],
            applications: [
              'Confiable y potente atornilladora con sistema de torque rápido.',
              'Recomendable para bulones y tuercas hasta roscas M15. Ideal para cambio de neumáticos.',
              'Torque de trabajo: 70 – 470 Nm | Torque máx. reversa: 569 Nm',
              'Presión de operación: 6,3 bar | Peso: 2,3 kg',
              'Dimensiones: 195 × 64 × 202 mm | Consumo: 102 l/min',
            ],
            images: [
              require('../assets/images/8.00/08.01p5.png'),
              require('../assets/images/8.00/08.01p5.2.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p5m1.png'),
              require('../assets/images/8.00/08.01p5m2.png'),
            ],
          },
 
          // ── Producto 6 ── Manguera Híbrida con Carrete Retráctil ─────
          {
            id: 'manguera-carrete',
            name: 'Manguera Híbrida con Carrete Retráctil',
            subtitle: 'Para línea de aire comprimido',
            description: 'Manguera de polímero híbrido flexible con carrete retráctil automático para aire comprimido de 15 metros.',
            features: [
              'Fabricada en polímero híbrido Premium. Combina las mejores características del PVC y del caucho.',
              'Gran flexibilidad, incluso a bajas temperaturas. Liviana y fácil de manejar.',
              'Memoria CERO: al dejarla en el suelo mantiene esa posición.',
              'Soporte pivotante para amurar en pared o techo.',
              'Rodillos guía que evitan el desgaste prematuro.',
              'Carrete retráctil automático con sistema de traba para fijar la longitud deseada.',
            ],
            applications: [
              'Material manguera: Polímero híbrido | Presión máxima: 300 psi',
              'Largo: 15 metros | Diámetro interior: 3/8"',
              'Rosca entrada/salida: 1/4" (macho) | Temperatura: -40°C a 60°C',
              'Diámetro carretel: 340 mm | Ancho carretel: 150 mm',
            ],
            images: [
              require('../assets/images/8.00/08.01p6.png'),
              require('../assets/images/8.00/08.01p6.2.png'),
              require('../assets/images/8.00/08.01p6.3.png'),
              require('../assets/images/8.00/08.01p6.4.png'),
              require('../assets/images/8.00/08.01p6.5.png'),
              require('../assets/images/8.00/08.01p6.6.png'),
            ],
          },
 
          // ── Producto 7 ── Amoladora Neumática Plus A 4 1/2" ──────────
          {
            id: 'amoladora-plus-412',
            name: 'Amoladora Neumática Plus A 4 1/2"',
            subtitle: 'Código 20703 000 840',
            description: 'Amoladora de alta velocidad (22.000 RPM) ideal para corte, desbaste y acabado de superficies metálicas.',
            features: [
              'RPM: 22.000',
              'Largo: 177 mm | Peso: 1,5 lbs',
              'Consumo de aire promedio: 3,3 cfm',
              'Entrada de aire NPT: 1/4"',
              'Medida mínima de la manguera ID: 3/8"',
            ],
            images: [
              require('../assets/images/8.00/08.01p7.png'),
            ],
          },
 
          // ── Producto 8 ── Fresadora Neumática Plus de 1/4" ───────────
          {
            id: 'fresadora-plus-14',
            name: 'Fresadora Neumática Plus de 1/4"',
            subtitle: 'Código 20703 237 0',
            description: 'Fresadora versátil de 1/4" para desbastar, pulir y rebabar con manejo ligero y agarre seguro.',
            features: [
              'Adecuada para desbastar, pulir y rebabar.',
              'Construida sobre rulemanes que otorgan larga vida a la herramienta.',
              'Porta fresas de 1/4" (6,35 mm). Palanca de seguridad.',
              'Manejo cómodo y ligero. Agarre seguro.',
            ],
            applications: [
              'RPM: 22.000 | Largo: 177 mm | Peso: 680 g',
              'Consumo de aire: 93 l/min | Entrada de aire: 1/4"',
              'Medida mínima de la manguera ID: 3/8"',
            ],
            images: [
              require('../assets/images/8.00/08.01p8.png'),
            ],
            measuresImages: [
              require('../assets/images/8.00/08.01p8m1.png'),
            ],
          },
 
          // ── Producto 9 ── Ratchet Neumático Plus 1/2" ────────────────
          {
            id: 'ratchet-plus-12',
            name: 'Ratchet Neumático Plus 1/2"',
            subtitle: 'Código 20703 812 002',
            description: 'Ratchet de impacto compacto de 1/2" con 160 RPM y torque máximo de 50 ft-lb para ensamble rápido.',
            features: [
              'RPM: 160 | Torque máximo: 50 ft-lb',
              'Presión de aire: 6,2 kg/cm³ (90 PSI)',
              'Largo: 254 mm | Peso: 1,4 kg',
              'Consumo de aire promedio: 4,0 cfm',
              'Entrada de aire NPT: 1/4"',
            ],
            images: [
              require('../assets/images/8.00/08.01p9.png'),
            ],
          },
 
        ],
      },
 
    ],
  },
];