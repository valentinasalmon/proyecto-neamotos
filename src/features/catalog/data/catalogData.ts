export type CatalogBrand = {
  slug: string; // "motomel"
  displayName: string; // "Motomel"
  categorias: {
    nombreCategoria: string; // "URBANAS", "SCOOTER", "ROUSER"
    modelos: {
      nombre: string;
      cilindrada?: string;
      potencia?: string;
      transmision?: string;
    }[];
  }[];
};

// =====================
// TODAS LAS MARCAS
// =====================

export const CATALOG_DATA: CatalogBrand[] = [
  {
    slug: "zanella",
    displayName: "Zanella",
    categorias: [
      {
        nombreCategoria: "URBANAS",
        modelos: [
          { nombre: "ZB 110 FULL", cilindrada: "110cc" },
          { nombre: "ZB 110 ST", cilindrada: "110cc" },
          { nombre: "ZB 125 SPORT", cilindrada: "125cc" },
          { nombre: "DUE 125 SPORT", cilindrada: "125cc" },
          { nombre: "DUE 110 ST", cilindrada: "110cc" },
          { nombre: "HOT 90 SHOT", cilindrada: "90cc" },
        ],
      },
      {
        nombreCategoria: "STREET",
        modelos: [
          { nombre: "RX 150 FULL", cilindrada: "150cc", transmision: "Manual" },
          { nombre: "RX 150 ST", cilindrada: "150cc" },
          { nombre: "SAPUCAI 150", cilindrada: "150cc", transmision: "Manual" },
        ],
      },
      {
        nombreCategoria: "CECCATO",
        modelos: [
          { nombre: "CECCATO 60" },
          { nombre: "CECCATO R150", cilindrada: "150cc" },
          { nombre: "CECCATO X 250", cilindrada: "250cc" },
          { nombre: "CECCATO X 700", cilindrada: "700cc" },
        ],
      },
      {
        nombreCategoria: "ON / OFF",
        modelos: [
          { nombre: "ZR 250 OHC", cilindrada: "250cc" },
          { nombre: "ZR 200 OHC", cilindrada: "200cc" },
          { nombre: "ZR 150 OHC", cilindrada: "150cc" },
          { nombre: "ZT 150", cilindrada: "150cc" },
        ],
      },
      {
        nombreCategoria: "SCOOTER",
        modelos: [
          { nombre: "CRUISER X1" },
          { nombre: "CRUISER X" },
          { nombre: "EXCLUSIVE EDIZIONE" },
          { nombre: "EXCLUSIVE LT" },
          { nombre: "STYLER RS" },
          { nombre: "LAMBRETTA" },
        ],
      },
      {
        nombreCategoria: "CUSTOM",
        modelos: [
          { nombre: "PATAGONIAN EAGLE 150", cilindrada: "150cc" },
        ],
      },
      {
        nombreCategoria: "ATV",
        modelos: [{ nombre: "GFORCE 250 R", cilindrada: "250cc" }],
      },
      {
        nombreCategoria: "UTILITY",
        modelos: [{ nombre: "ZMAX 200", cilindrada: "200cc" }],
      },
    ],
  },

  {
    slug: "corven",
    displayName: "Corven",
    categorias: [
      {
        nombreCategoria: "CUB",
        modelos: [
          { nombre: "ENERGY 110", cilindrada: "110cc" },
          { nombre: "ENERGY TUNING", cilindrada: "110cc" },
          { nombre: "MIRAGE 110 RT", cilindrada: "110cc" },
          { nombre: "MIRAGE 110 AD", cilindrada: "110cc" },
        ],
      },
      {
        nombreCategoria: "ON / OFF",
        modelos: [
          { nombre: "TRIAX 150", cilindrada: "150cc" },
          { nombre: "TRIAX 150 R3", cilindrada: "150cc" },
          { nombre: "TRIAX 200 R3", cilindrada: "200cc" },
          { nombre: "TRIAX 250 R3", cilindrada: "250cc" },
          {
            nombre: "TRIAX 250 ADVENTURE",
            cilindrada: "250cc",
            transmision: "Manual",
          },
        ],
      },
      {
        nombreCategoria: "SCOOTER",
        modelos: [
          { nombre: "EXPERT 80", cilindrada: "80cc" },
          { nombre: "EXPERT DOT 150", cilindrada: "150cc" },
          { nombre: "EXPERT 150 MILANO", cilindrada: "150cc" },
        ],
      },
      {
        nombreCategoria: "STREET",
        modelos: [
          { nombre: "DX 70", cilindrada: "70cc" },
          { nombre: "HUNTER 150 R2", cilindrada: "150cc" },
          { nombre: "HUNTER 150 AD", cilindrada: "150cc" },
          { nombre: "HUNTER 150 RT", cilindrada: "150cc" },
        ],
      },
    ],
  },

  {
    slug: "keller",
    displayName: "Keller",
    categorias: [
      {
        nombreCategoria: "CRONO 110",
        modelos: [
          { nombre: "Crono Classic ECO 110", cilindrada: "110cc" },
          { nombre: "Crono Classic PLUS 110", cilindrada: "110cc" },
          { nombre: "Crono Classic FULL 110", cilindrada: "110cc" },
        ],
      },
      {
        nombreCategoria: "CRONO TUNNING",
        modelos: [
          { nombre: "Crono Tunning 70", cilindrada: "70cc" },
          { nombre: "Crono Tunning 125", cilindrada: "125cc" },
        ],
      },
      {
        nombreCategoria: "STRATUS 150",
        modelos: [
          { nombre: "Stratus 150 ECO", cilindrada: "150cc" },
          { nombre: "Stratus 150 PLUS", cilindrada: "150cc" },
          { nombre: "Stratus 150 FULL", cilindrada: "150cc" },
        ],
      },
      {
        nombreCategoria: "MIRACLE",
        modelos: [
          { nombre: "Miracle 150 EVO", cilindrada: "150cc" },
          { nombre: "Miracle 200 EVO", cilindrada: "200cc" },
        ],
      },
      {
        nombreCategoria: "QUASAR",
        modelos: [{ nombre: "Quasar 250", cilindrada: "250cc" }],
      },
      {
        nombreCategoria: "SYGNUS 150",
        modelos: [
          { nombre: "Sygnus 150 roja", cilindrada: "150cc" },
          { nombre: "Sygnus 150 blanca", cilindrada: "150cc" },
          { nombre: "Sygnus 150 azul", cilindrada: "150cc" },
        ],
      },
    ],
  },

  {
    slug: "bajaj",
    displayName: "Bajaj",
    categorias: [
      {
        nombreCategoria: "ROUSER",
        modelos: [
          { nombre: "ROUSER LS125", cilindrada: "125cc" },
          { nombre: "ROUSER P150", cilindrada: "150cc" },
          { nombre: "ROUSER NS160", cilindrada: "160cc" },
          { nombre: "ROUSER NS200", cilindrada: "200cc" },
          { nombre: "ROUSER N250", cilindrada: "250cc" },
          { nombre: "ROUSER NS400Z", cilindrada: "400cc" },
        ],
      },
      {
        nombreCategoria: "DOMINAR",
        modelos: [
          { nombre: "DOMINAR 250", cilindrada: "250cc" },
          { nombre: "DOMINAR 400", cilindrada: "400cc" },
        ],
      },
      {
        nombreCategoria: "BOXER",
        modelos: [{ nombre: "BOXER" }],
      },
      {
        nombreCategoria: "AVENGER",
        modelos: [{ nombre: "AVENGER" }],
      },
    ],
  },

  {
    slug: "motomel",
    displayName: "Motomel",
    categorias: [
      {
        nombreCategoria: "STREET",
        modelos: [{ nombre: "Sirius 190 CBS", cilindrada: "190cc" }],
      },
      {
        nombreCategoria: "URBANAS / BLITZ",
        modelos: [
          {
            nombre: "Blitz 110 Black Edition CBS",
            cilindrada: "110cc",
            transmision: "Automática",
          },
          { nombre: "Blitz 110 CBS", cilindrada: "110cc" },
          { nombre: "Blitz 110 CBS Automática", cilindrada: "110cc" },
          { nombre: "Blitz 110 CBS FULL Aleación", cilindrada: "110cc" },
          { nombre: "Blitz Tunning 110 CBS", cilindrada: "110cc" },
          { nombre: "Blitz Plus CBS", cilindrada: "110cc" },
        ],
      },
      {
        nombreCategoria: "DLX DELUXE CBS",
        modelos: [{ nombre: "DLX Deluxe CBS", cilindrada: "110cc" }],
      },
      {
        nombreCategoria: "MAX 110",
        modelos: [{ nombre: "Max 110", cilindrada: "110cc" }],
      },
      {
        nombreCategoria: "S2",
        modelos: [
          { nombre: "S2 150 CBS", cilindrada: "150cc" },
          {
            nombre: "S2 150 CBS FULL Aleación",
            cilindrada: "150cc",
          },
        ],
      },
      {
        nombreCategoria: "VICTORY 150",
        modelos: [{ nombre: "Victory 150", cilindrada: "150cc" }],
      },
      {
        nombreCategoria: "ON-OFF / SKUA",
        modelos: [
          { nombre: "Skua 125 Xtreme", cilindrada: "125cc" },
          { nombre: "Skua 150 Silver Edition", cilindrada: "150cc" },
          { nombre: "Skua 150", cilindrada: "150cc" },
          { nombre: "Skua 250", cilindrada: "250cc" },
          { nombre: "Skua 250 Adventure", cilindrada: "250cc" },
          { nombre: "XMM 250", cilindrada: "250cc" },
        ],
      },
      {
        nombreCategoria: "SCOOTER / STRATO",
        modelos: [
          {
            nombre: "Strato Euro 150 CBS LED",
            cilindrada: "150cc",
            transmision: "Automática",
          },
          {
            nombre: "Strato Alpino 150 CBS",
            cilindrada: "150cc",
            transmision: "Automática",
          },
        ],
      },
    ],
  },
];
