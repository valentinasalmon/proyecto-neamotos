// src/features/catalog/data/motos.ts

export type MotoItem = {
  id: string;            // "zanella-zb-110-full"
  marca: "Zanella" | "Motomel" | "Keller" | "Bajaj" | "Corven";
  tipo: string;          // "Urbana" | "Scooter" | "On/Off" | "Street" | ...
  nombre: string;        // "ZB 110 FULL"
  img: string;           // ruta relativa a /public: "/motos/zanella/urbanas/zb-110-full.png"
  cilindrada?: string;   // "110cc"
  potencia?: string;     // "8.2 hp"
  transmision?: string;  // "Manual 5 vel" | "Automática"
  destacada?: boolean;   // para el Home
};

// ========= BASE DE DATOS =========
// Agregá acá TODAS las motos (de todas las marcas)
export const MOTO_DB_RAW: MotoItem[] = [


  // === Zanella urbanas ===
  {
    id: "zanella-zb-110-full",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "ZB 110 FULL",
    img: "/motos/zanella/urbanas/ZB110full.jpg",
    cilindrada: "107 cm3",
    potencia: "6.5 hp",
    transmision: "4 velocidades",
    destacada: true,
  },
  {
    id: "zanella-zb-110-st",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "ZB 110 ST",
    img: "/motos/zanella/urbanas/ZB110st.jpg",
    cilindrada: "110 cm3",
    potencia: "6.5 hp",
    transmision: "4 velocidades",
  },
  {
    id: "zanella-zb-125-sport",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "ZB 125 SPORT",
    img: "/motos/zanella/urbanas/ZB125sport.jpg",
    cilindrada: "120 cm3",
    potencia: "7.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
{
    id: "zanella-due-110-st",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "DUE 110 ST",
    img: "/motos/zanella/urbanas/DUE110st.webp",
    cilindrada: "107 cm3",
    potencia: "6.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
{
    id: "zanella-zb-125-sport",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "HOT 90 SHOT",
    img: "/motos/zanella/urbanas/HOT90shot.jpg",
    cilindrada: "86 cm3",
    potencia: "5.9 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

// === zanella street ===

{
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Street",
    nombre: "RX 150 FULL",
    img: "/motos/zanella/street/RX150full.jpg",
    cilindrada: "149 cm3",
    potencia: "12.7 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
{
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Street",
    nombre: "RX 150 ST",
    img: "/motos/zanella/street/RX150st.jpg",
    cilindrada: "149 cm3",
    potencia: "12.7 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Street",
    nombre: "SAPUCAI 150",
    img: "/motos/zanella/street/SAPUCAI150.jpg",
    cilindrada: "149 cm3",
    potencia: "12 hp",
    transmision: "5 velocidades",
    destacada: true,
  },

// === zanella ceccato ===
 {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Ceccato",
    nombre: "CECCATO 60",
    img: "/motos/zanella/ceccato/60.jpg",
    cilindrada: "150 cm3",
    potencia: "12.2 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Ceccato",
    nombre: "CECCATO R150",
    img: "/motos/zanella/ceccato/150.png",
    cilindrada: "149 cm3",
    potencia: "12 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Ceccato",
    nombre: "CECCATO X 250",
    img: "/motos/zanella/ceccato/250.jpg",
    cilindrada: "250 cm3",
    potencia: "20 hp",
    transmision: "6 velocidades",
    destacada: true,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "Ceccato",
    nombre: "CECCATO X 700",
    img: "/motos/zanella/ceccato/700.png",
    cilindrada: "693 cm3",
    potencia: "73.8 hp",
    transmision: "6 velocidades",
    destacada: false,
  },
  

// === zanella on off ===

  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "on off",
    nombre: "ZR 250 OCH",
    img: "/motos/zanella/on off/ZR250och.jpg",
    cilindrada: "249.9 cm3",
    potencia: "19 hp",
    transmision: "6 velocidades",
    destacada: false,
  },

  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "on off",
    nombre: "ZR 200 OCH",
    img: "/motos/zanella/on off/200.jpg",
    cilindrada: "198 cm3",
    potencia: "14.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
 {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "on off",
    nombre: "ZR 150 OCH",
    img: "/motos/zanella/on off/ZR150och.jpg",
    cilindrada: "149 cm3",
    potencia: "11.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "on off",
    nombre: "ZT 150",
    img: "/motos/zanella/on off/ZT150.jpg",
    cilindrada: "149.9 cm3",
    potencia: "11.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
// === zanella scooter ===
  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "CRUISER X1",
    img: "/motos/zanella/scooter/CRUISERx1.jpg",
    cilindrada: "171 cm3",
    potencia: "11 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
    {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "CRUISER X",
    img: "/motos/zanella/scooter/CRUISERx.jpg",
    cilindrada: "149 cm3",
    potencia: "11 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "EXCLUSIVE EDIZIONE",
    img: "/motos/zanella/scooter/EXCLUSIVEEDIZIONE.webp",
    cilindrada: "149 cm3",
    potencia: "9 hp",
    transmision: "automática",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "EXCLUSIVE LT",
    img: "/motos/zanella/scooter/EXCLUSIVELT.jpg",
    cilindrada: "149 cm3",
    potencia: "9 hp",
    transmision: "automática",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "STYLER RS",
    img: "/motos/zanella/scooter/STYLERRS.webp",
    cilindrada: "123 cm3",
    potencia: "8.4 hp",
    transmision: "automática",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "scooter",
    nombre: "LAMBRETTA",
    img: "/motos/zanella/scooter/LAMBRETTA.png",
    cilindrada: "150 cm3",
    potencia: "9.4 hp",
    transmision: "automática",
    destacada: false,
  },
  
// === zanella custom ===

  {
    id: "zanella-rz-150-full",
    marca: "Zanella",
    tipo: "custom",
    nombre: "PATAGONIA EAGLE 150",
    img: "/motos/zanella/custom/PATAGONIAEAGLE150.png",
    cilindrada: "149 cm3",
    potencia: "13 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

// === zanella atv ===

 // {
  //  id: "zanella-rz-150-full",
  //  marca: "Zanella",
  //  tipo: "atv",
   // nombre: "GFORCE 250 R",
   // img: "/motos/zanella/atv/GFORCE250R.webp",
   // cilindrada: "229 cm3",
   // potencia: "14 hp",
   // transmision: "5 velocidades",
   // destacada: false,
 // },

  // === zanella utility ===

  //{
    //id: "zanella-rz-150-full",
   // marca: "Zanella",
   // tipo: "utility",
   // nombre: "ZMAX 200",
   // img: "/motos/zanella/utility/ZMAX200.webp",
    //cilindrada: "197 cm3",
    //potencia: "13.4 hp",
    //transmision: "5 velocidades",
    //destacada: false,
  //},


  // === Motomel ===

  // === Motomel URBANAS blitz  ===

  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "BLITZ 110 BLACK EDITION",
    img: "/motos/motomel/urbanas/blitz/BLIZTUNNING.png",
    cilindrada: "110 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "BLITZ 110 V8",
    img: "/motos/motomel/urbanas/blitz/BLITZ110.jpg",
    cilindrada: "110 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades/automática",
    destacada: false,
  },
    {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "BLITZ 110 V8 FULL ALEACIÓN",
    img: "/motos/motomel/urbanas/blitz/BLITZ110FULLALELACION.png",
    cilindrada: "110 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
    {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "BLITZ TUNNING 110 V8",
    img: "/motos/motomel/urbanas/blitz/V8.jpg",
    cilindrada: "110 cm3", 
    potencia: "7.1 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "BLITZ PLUS",
    img: "/motos/motomel/urbanas/blitz/BLITZPLUS.jpg",
    cilindrada: "107 cm3", 
    potencia: "7.1 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

// === Motomel URBANAS DLX  ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "DLX DELUXE",
    img: "/motos/motomel/urbanas/dlx/DELUXE.png",
    cilindrada: "108 cm3", 
    potencia: "8 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

// === Motomel URBANAS max 110  ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "MAX 110",
    img: "/motos/motomel/urbanas/max 110/MAX.png",
    cilindrada: "108 cm3", 
    potencia: "7.1 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

  // === Motomel URBANAS s2 ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "S2 150",
    img: "/motos/motomel/urbanas/s2/S2150.jpg",
    cilindrada: "149.5 cm3", 
    potencia: "13.4 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "S2 150 FULL ALEACIÓN",
    img: "/motos/motomel/urbanas/s2/S2150FULL.png",
    cilindrada: "149.5 cm3", 
    potencia: "13.4 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

  // === Motomel URBANAS VICTORY ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "urbanas",
    nombre: "VICTORY 150",
    img: "/motos/motomel/urbanas/victory 150/victory.png",
    cilindrada: "149 cm3", 
    potencia: "12 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

// === Motomel STREET ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "street",
    nombre: "SIRIUS 190",
    img: "/motos/motomel/street/SIRIUS.jpg",
    cilindrada: "149 cm3", 
    potencia: "12 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

  // === Motomel on off ===

   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "on off",
    nombre: "SKUA 125 XTREME",
    img: "/motos/motomel/on-off/SKUA125XTREME.png",
    cilindrada: "124 cm3", 
    potencia: "10.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "on off",
    nombre: "SKUA 150",
    img: "/motos/motomel/on-off/SKUA150.webp",
    cilindrada: "150 cm3", 
    potencia: "11.4 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "on off",
    nombre: "SKUA 250",
    img: "/motos/motomel/on-off/SKUA250.png",
    cilindrada: "223 cm3", 
    potencia: "15.9 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "on off",
    nombre: "SKUA 250 ADVENTURE",
    img: "/motos/motomel/on-off/SKUA250ADVENTURE.jpeg",
    cilindrada: "250 cm3", 
    potencia: "17 hp",
    transmision: "6 velocidades",
    destacada: false,
  },
 {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "on off",
    nombre: "XMM 250",
    img: "/motos/motomel/on-off/XMM250.webp",
    cilindrada: "223.4 cm3", 
    potencia: "16 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

// === Motomel scooter ===
   {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "scooter",
    nombre: "STRATO EURO 150 ",
    img: "/motos/motomel/scooter/STRATO150.jpg",
    cilindrada: "149.6 cm3", 
    potencia: "9.52 hp",
    transmision: "V.A.V",
    destacada: false,
  },

  {
    id: "zanella-rz-150-full",
    marca: "Motomel",
    tipo: "scooter",
    nombre: "STRATO ALPINO 150 ",
    img: "/motos/motomel/scooter/ALPINO150.png",
    cilindrada: "149.6 cm3", 
    potencia: "8.03 hp",
    transmision: "V.A.V",
    destacada: false,
  },


// === Keller ===

// === CRONO 110 ===

  {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "crono 110",
    nombre: "CRONO CLASSIC ECO 110",
    img: "/motos/keller/crono 110/ECO110.png",
    cilindrada: "107 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
{
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "crono 110",
    nombre: "CRONO CLASSIC PLUS 110",
    img: "/motos/keller/crono 110/PLUS110.jpg",
    cilindrada: "107 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "crono 110",
    nombre: "CRONO CLASSIC FULL 110",
    img: "/motos/keller/crono 110/FULL110.jpg",
    cilindrada: "107 cm3", 
    potencia: "7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

// ===  CRONO TUNNING  ===

{
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "crono tunning",
    nombre: "CRONO TUNNING 70",
    img: "/motos/keller/crono tunning/70.webp",
    cilindrada: "70 cm3", 
    potencia: "4.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "crono tunning",
    nombre: "CRONO TUNNING 125",
    img: "/motos/keller/crono tunning/125.jpg",
    cilindrada: "120 cm3", 
    potencia: "8.7 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

// === stratus 150  ===
 {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "stratus 150",
    nombre: "STRATUS 150 ECO",
    img: "/motos/keller/stratus 150/ECO.webp",
    cilindrada: "149 cm3", 
    potencia: "11 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "stratus 150",
    nombre: "STRATUS 150 PLUS",
    img: "/motos/keller/stratus 150/PLUS.webp",
    cilindrada: "149 cm3", 
    potencia: "11 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "stratus 150",
    nombre: "STRATUS 150 FULL",
    img: "/motos/keller/stratus 150/FULL.webp",
    cilindrada: "149 cm3", 
    potencia: "11 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

// === MIRACLE  ===
 {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "miracle",
    nombre: "MIRACLE 150 ",
    img: "/motos/keller/miracle/150.webp",
    cilindrada: "149 cm3", 
    potencia: "11.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
   {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "miracle",
    nombre: "MIRACLE 200 EVO ",
    img: "/motos/keller/miracle/200.png",
    cilindrada: "196 cm3", 
    potencia: "15 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
// === quasar  ===
 {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "quasar",
    nombre: "MIRACLE 250 ",
    img: "/motos/keller/quasar/250.png",
    cilindrada: "250 cm3", 
    potencia: "19 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

  // ===  sygnus  ===
 {
    id: "keller-rz-150-full",
    marca: "Keller" ,
    tipo: "sygnus",
    nombre: "SYGNUS 150 ",
    img: "/motos/keller/sygnus 150/150.png",
    cilindrada: "149.5 cm3", 
    potencia: "9.4 hp",
    transmision: "variador de velocidad",
    destacada: false,
  },
  
  // === Bajaj ===

  // === Bajaj rouser ===

{
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER LS125 ",
    img: "/motos/bajaj/rouser/LS125.webp",
    cilindrada: "125 cm3", 
    potencia: "12 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  
{
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER P150",
    img: "/motos/bajaj/rouser/P150.jpg",
    cilindrada: "150 cm3", 
    potencia: "14.5 hp",
    transmision: "4 velocidades",
    destacada: true,
  },
  {
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER NS160",
    img: "/motos/bajaj/rouser/NS160.jpg",
    cilindrada: "160 cm3", 
    potencia: "15.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER NS200",
    img: "/motos/bajaj/rouser/NS200.webp",
    cilindrada: "200 cm3", 
    potencia: "23.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
   {
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER NS250",
    img: "/motos/bajaj/rouser/NS250.png",
    cilindrada: "250 cm3", 
    potencia: "24.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  {
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "rouser",
    nombre: "ROUSER NS400Z",
    img: "/motos/bajaj/rouser/NS400Z.png",
    cilindrada: "373 cm3", 
    potencia: "40 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  // === Bajaj dominar ===

{
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "dominar",
    nombre: "DOMINAR 250 ",
    img: "/motos/bajaj/dominar/250.jpg",
    cilindrada: "250 cm3", 
    potencia: "27 hp",
    transmision: "4 velocidades",
    destacada: true,
  },
  {
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "dominar",
    nombre: "DOMINAR 400",
    img: "/motos/bajaj/dominar/400.png",
    cilindrada: "400 cm3", 
    potencia: "40 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

  // === Bajaj boxer ===
{
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "boxer",
    nombre: "BOXER",
    img: "/motos/bajaj/boxer/boxer.png",
    cilindrada: "150 cm3", 
    potencia: "12 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
  // === Bajaj avenger ===
{
    id: "keller-rz-150-full",
    marca: "Bajaj" ,
    tipo: "avenger",
    nombre: "AVENGER",
    img: "/motos/bajaj/avenger/avenger.webp",
    cilindrada: "220 cm3", 
    potencia: "19 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

  // === Corven ===

  // === Corven cub ===
  {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "cub",
    nombre: "ENERGY 110",
    img: "/motos/corven/cub/110ENERGY.png",
    cilindrada: "110 cm3", 
    potencia: "8.5 hp",
    transmision: "4 velocidades",
    destacada: true,
  },

    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "cub",
    nombre: "ENERGY TUNNING",
    img: "/motos/corven/cub/ENERGYTUNNING.png",
    cilindrada: "150 cm3", 
    potencia: "6.6 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "cub",
    nombre: "MIRAGE 110 RT",
    img: "/motos/corven/cub/MIRAGE110.png",
    cilindrada: "110 cm3", 
    potencia: "7.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },

    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "cub",
    nombre: "MIRAGE 110 AD",
    img: "/motos/corven/cub/MIRAGEAD.png",
    cilindrada: "110 cm3", 
    potencia: "7.5 hp",
    transmision: "4 velocidades",
    destacada: false,
  },


 // === Corven on off ===


    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "on off",
    nombre: "TRIAX 150",
    img: "/motos/corven/on off/150.jpg",
    cilindrada: "150 cm3", 
    potencia: "12.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "on off",
    nombre: "TRIAX 150 R3",
    img: "/motos/corven/on off/150R3.jpg",
    cilindrada: "149 cm3", 
    potencia: "16 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

{
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "on off",
    nombre: "TRIAX 200 R3",
    img: "/motos/corven/on off/200R3.webp",
    cilindrada: "200 cm3", 
    potencia: "15.5 hp",
    transmision: "5 velocidades",
    destacada: false,
  },

  
{
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "on off",
    nombre: "TRIAX 250 R3",
    img: "/motos/corven/on off/250R3.jpg",
    cilindrada: "230 cm3", 
    potencia: "16.7 hp",
    transmision: "5 velocidades",
    destacada: false,
  },
    
{
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "on off",
    nombre: "TRIAX 250 ADVENTURE",
    img: "/motos/corven/on off/250ADV.png",
    cilindrada: "250 cm3", 
    potencia: "19 hp",
    transmision: "6 velocidades",
    destacada: false,
  },


// === Corven scooter ===

    
{
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "scooter",
    nombre: "EXPERT 80",
    img: "/motos/corven/scooter/80.png",
    cilindrada: "80 cm3", 
    potencia: "5.5 hp",
    transmision: "automática",
    destacada: true,
  },
  {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "scooter",
    nombre: "EXPERT DOT 150",
    img: "/motos/corven/scooter/150.jpg",
    cilindrada: "150 cm3", 
    potencia: "10.5 hp",
    transmision: "automática",
    destacada: false,
  },
    {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "scooter",
    nombre: "EXPERT 150 MILANO",
    img: "/motos/corven/scooter/150MILANO.jpg",
    cilindrada: "150 cm3", 
    potencia: "9.5 hp",
    transmision: "automática CVT",
    destacada: false,
  },

// === Corven street ===

   {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "street",
    nombre: "DX 70",
    img: "/motos/corven/street/DX70.jpg",
    cilindrada: "70 cm3", 
    potencia: "4.8 hp",
    transmision: "4 velocidades",
    destacada: false,
  },
   {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "street",
    nombre: "HUNTER 150 R2",
    img: "/motos/corven/street/HUNTER.jpg",
    cilindrada: "150 cm3", 
    potencia: "11.5 hp",
    transmision: "automática CVT",
    destacada: true,
  },
  {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "street",
    nombre: "HUNTER 150 AD",
    img: "/motos/corven/street/HUNTERAD.webp",
    cilindrada: "150 cm3", 
    potencia: "11.5 hp",
    transmision: "5 marchas",
    destacada: false,
  },

   {
    id: "keller-rz-150-full",
    marca: "Corven" ,
    tipo: "street",
    nombre: "HUNTER 150 RT",
    img: "/motos/corven/street/HUNTERRT.webp",
    cilindrada: "150 cm3", 
    potencia: "12 hp",
    transmision: "5 velocidades",
    destacada: false,
  },












];

// === Generador de IDs y export final ===
const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Exportamos la DB con IDs únicos (marca + nombre + índice)
export const MOTO_DB: MotoItem[] = MOTO_DB_RAW.map((m, i) => ({
  ...m,
  id: `${slug(m.marca)}-${slug(m.nombre)}-${i}`,
}));

// Helpers (usan la DB final)
export const getFeatured = () => MOTO_DB.filter((m) => m.destacada);
export const getByBrand = (brand: MotoItem["marca"]) => MOTO_DB.filter((m) => m.marca === brand);
export const getBrands = () => Array.from(new Set(MOTO_DB.map((m) => m.marca)));
export const getTypesForBrand = (brand: MotoItem["marca"]) =>
Array.from(new Set(MOTO_DB.filter((m) => m.marca === brand).map((m) => m.tipo)));
