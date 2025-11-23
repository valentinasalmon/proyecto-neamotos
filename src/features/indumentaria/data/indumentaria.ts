// ================= TIPOS =================

export type IndumentariaItem = {
  id: string;
  nombre: string;
  categoria: "Guantes" | "Pantalones" | "Camperas";
  genero: "Hombre" | "Mujer" | "Unisex";
  img: string;
};

// ================= DB =================

export const INDUMENTARIA_DB: IndumentariaItem[] = [


// ================= guantes =================

  {
    id: "Guante LS2 Cool",
    nombre: "Guante LS2 Cool ",
    categoria: "Guantes",
    genero: "Unisex",
    img: "/indumentaria/guantes/cool.png",
  },
  {
    id: "Guante LS2 Dart 2",
    nombre: "Guante LS2 Dart 2 ",
    categoria: "Guantes",
    genero: "Unisex",
    img: "/indumentaria/guantes/dart2.webp",
  },
  
   {
    id: "Guante LS2 All Terrain",
    nombre: "Guante LS2 All Terrain",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/allterrain.jpg",
  },

  {
    id: "Guante LS2 Jet",
    nombre: "Guante LS2 Jet ",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/jet.webp",
  },
    {
    id: "Guante LS2 Jet 2",
    nombre: "Guante LS2 Jet 2 ",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/jet2.webp",
  },
    {
    id: "Guante LS2 Ray",
    nombre: "Guante LS2 Ray ",
    categoria: "Guantes",
    genero: "Unisex",
    img: "/indumentaria/guantes/ls2.webp",
  },
    {
    id: "Guante LS2 Spark",
    nombre: "Guante LS2 Spark",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/spark.webp",
  },
    {
    id: "Guante LS2 Air Raptor",
    nombre: "Guante LS2 Air Raptor",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/air.png",
  },
   {
    id: "Guante LS2 Silva",
    nombre: "Guante LS2 Silva",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/silva.webp",
  },
   {
    id: "Guante LS2 Vega",
    nombre: "Guante LS2 Silva",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/vega.webp",
  },

   {
    id: "Guante LS2 Bend",
    nombre: "Guante LS2 Bend",
    categoria: "Guantes",
    genero: "Hombre",
    img: "/indumentaria/guantes/bend.webp",
  },

// ================= camperass =================

{
    id: "campera-ultra-1",
    nombre: "Campera Ultra",
    categoria: "Camperas",
    genero: "Mujer",
    img: "/indumentaria/camperas/campera1.png",
  },





// ================= pantalones =================














  {
    id: "pantalon-rider-1",
    nombre: "Pantalón Rider",
    categoria: "Pantalones",
    genero: "Hombre",
    img: "/indumentaria/pantalones/pantalon1.png",
  },
  
];

// ================= HELPERS =================

export const getCategorias = () =>
  Array.from(new Set(INDUMENTARIA_DB.map((i) => i.categoria)));

export const getGeneros = () =>
  Array.from(new Set(INDUMENTARIA_DB.map((i) => i.genero)));
