export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  images?: any[];
  features?: string[];
  applications?: string[];
  measuresImages?: any[];
  categoryCode: string;
  subcategoryName: string;
  price?: string;
  stock?: string;
}

export const corteTaladroDesbaste = [
  {
    name: "CORTE, TALADRO Y DESBASTE",
    subcategories: [
      {
        code: "01.01",
        name: "Brocas",
        products: [
          {
            id: "broca-helicoidal",
            name: "BROCA HELICOIDAL",
            subtitle: "01.01 Brocas",
            description: "Perforación de acero",
            categoryCode: "01.01",
            subcategoryName: "Brocas",
            price: "₡4500",
            stock: "30",
            images: [
              require("../assets/Corte/BrocaHelicoidal.jpg"),
            ],
            features: [
              "Código: 00618 000 116",
              "Material: Acero M35",
              "Uso: Para perforar acero inoxidable",
            ],
            applications: [
              "Perforación de acero",
            ],
            measuresImages: [
              require("../assets/Corte/BrocaHelicoidal.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.02",
        name: "Avellanadoras y fresas",
        products: [
          {
            id: "avellanadora-industrial",
            name: "AVELLANADORA INDUSTRIAL",
            subtitle: "01.02 Avellanadoras y fresas",
            description: "Acabado preciso en perforaciones",
            categoryCode: "01.02",
            subcategoryName: "Avellanadoras y fresas",
            price: "₡6900",
            stock: "18",
            images: [
              require("../assets/Corte/FresaAvellanadora.png"),
            ],
            features: [
              "Código: 77410",
              "Material: Acero endurecido",
              "Uso: Avellanado y fresado en metal",
            ],
            applications: [
              "Acabado preciso en perforaciones",
            ],
            measuresImages: [
              require("../assets/Corte/FresaAvellanadora.png"),
            ],
          },
        ],
      },
      {
        code: "01.03",
        name: "Machos y terrajas",
        products: [
          {
            id: "juego-de-machos",
            name: "JUEGO DE MACHOS",
            subtitle: "01.03 Machos y terrajas",
            description: "Roscas internas profesionales",
            categoryCode: "01.03",
            subcategoryName: "Machos y terrajas",
            price: "₡9800",
            stock: "14",
            images: [
              require("../assets/Corte/juego-de-machos.png"),
            ],
            features: [
              "Código: 88921",
              "Material: Acero rápido",
              "Uso: Roscado de precisión",
            ],
            applications: [
              "Roscas internas profesionales",
            ],
            measuresImages: [
              require("../assets/Corte/juego-de-machos.png"),
            ],
          },
        ],
      },
      {
        code: "01.04",
        name: "Coronas",
        products: [
          {
            id: "corona-bimetalica",
            name: "CORONA BIMETÁLICA",
            subtitle: "01.04 Coronas",
            description: "Cortes circulares limpios",
            categoryCode: "01.04",
            subcategoryName: "Coronas",
            price: "₡7600",
            stock: "22",
            images: [
              require("../assets/Corte/corona-bimetalica.jpg"),
            ],
            features: [
              "Código: 55489",
              "Material: Bimetal",
              "Uso: Perforación en metal y madera",
            ],
            applications: [
              "Cortes circulares limpios",
            ],
            measuresImages: [
              require("../assets/Corte/corona-bimetalica.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.05",
        name: "Discos de corte y desbaste",
        products: [
          {
            id: "disco-de-corte",
            name: "DISCO DE CORTE",
            subtitle: "01.05 Discos de corte y desbaste",
            description: "Corte profesional de metal",
            categoryCode: "01.05",
            subcategoryName: "Discos de corte y desbaste",
            price: "₡3200",
            stock: "50",
            images: [
              require("../assets/Corte/DiscoCorte.jpg"),
            ],
            features: [
              "Código: 55412",
              "Material: Abrasivo",
              "Uso: Corte de acero y metal",
            ],
            applications: [
              "Corte profesional de metal",
            ],
            measuresImages: [
              require("../assets/Corte/DiscoCorte.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.06",
        name: "Sierras",
        products: [
          {
            id: "sierra-circular",
            name: "SIERRA CIRCULAR",
            subtitle: "01.06 Sierras",
            description: "Corte de precisión",
            categoryCode: "01.06",
            subcategoryName: "Sierras",
            price: "₡8500",
            stock: "10",
            images: [
              require("../assets/Corte/Sierra.jpg"),
            ],
            features: [
              "Código: 66221",
              "Material: Acero",
              "Uso: Corte de madera y metal",
            ],
            applications: [
              "Corte de precisión",
            ],
            measuresImages: [
              require("../assets/Corte/Sierra.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.07",
        name: "Discos de lija",
        products: [
          {
            id: "disco-de-lija-premium",
            name: "DISCO DE LIJA PREMIUM",
            subtitle: "01.07 Discos de lija",
            description: "Desbaste fino y uniforme",
            categoryCode: "01.07",
            subcategoryName: "Discos de lija",
            price: "₡2700",
            stock: "40",
            images: [
              require("../assets/Corte/disco-de-lija-premium.jpg"),
            ],
            features: [
              "Código: 33120",
              "Material: Óxido de aluminio",
              "Uso: Lijado de superficies metálicas",
            ],
            applications: [
              "Desbaste fino y uniforme",
            ],
            measuresImages: [
              require("../assets/Corte/disco-de-lija-premium.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.08",
        name: "Lijas",
        products: [
          {
            id: "lija-de-banda",
            name: "LIJA DE BANDA",
            subtitle: "01.08 Lijas",
            description: "Acabado y pulido de superficies",
            categoryCode: "01.08",
            subcategoryName: "Lijas",
            price: "₡1900",
            stock: "60",
            images: [
              require("../assets/Corte/lija-de-banda.jpg"),
            ],
            features: [
              "Código: 44117",
              "Material: Abrasivo flexible",
              "Uso: Lijado manual e industrial",
            ],
            applications: [
              "Acabado y pulido de superficies",
            ],
            measuresImages: [
              require("../assets/Corte/lija-de-banda.jpg"),
            ],
          },
        ],
      },
      {
        code: "01.09",
        name: "Muelas abrasivas",
        products: [
          {
            id: "muela-abrasiva",
            name: "MUELA ABRASIVA",
            subtitle: "01.09 Muelas abrasivas",
            description: "Rectificado y acabado de precisión",
            categoryCode: "01.09",
            subcategoryName: "Muelas abrasivas",
            price: "₡8300",
            stock: "12",
            images: [
              require("../assets/Corte/muela-abrasiva.png"),
            ],
            features: [
              "Código: 99802",
              "Material: Abrasivo vitrificado",
              "Uso: Desbaste y rectificado",
            ],
            applications: [
              "Rectificado y acabado de precisión",
            ],
            measuresImages: [
              require("../assets/Corte/muela-abrasiva.png"),
            ],
          },
        ],
      },
    ],
  },
];