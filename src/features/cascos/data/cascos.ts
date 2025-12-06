// features/cascos/data/cascos.ts
export type CascoItem = {
  id: string;
  nombre: string;
  categoria: string; // "Integrales" | "Abiertos" | "MX / Enduro" | "Modulares"
  marca: string; // "LS2" | "Vertigo"
  img: string;
  peso: string; // ej: "1450 g"
  material: string; // ej: "ABS / Policarbonato"
  certificacion: string; 

};

export const cascos: CascoItem[] = [
  {
    id: "stream solid",
    nombre: "LS2 320 stream solid",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/streamsolid.png",
    peso: " 1550 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.05",

  },
 {
    id: "800 storm nerve",
    nombre: "LS2 800 storm nerve",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/stormnerve.png",
    peso: " 1400 ± 50 g",
    material: "KPA ",
    certificacion: "ECE 22.05",
  },
   {
    id: "352 rookie solid",
    nombre: "LS2 352 rookie solid",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/rookie.webp",
    peso: " 1350 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.05",
  },
{
    id: "352 rookie antars",
    nombre: "LS2 352 rookie antars",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/rookieantars.png",
    peso: " 1350 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.05",
  },
  {
    id: "352 rookie demon",
    nombre: "LS2 352 rookie demon",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/rookieantars.webp",
    peso: " 1350 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.05",
  },
  {
    id: "807 dragon carbono forged",
    nombre: "LS2 807 dragon carbono forged",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/dragon.png",
    peso: " 1450 ± 50 g",
    material: "Carbono",
    certificacion: "ECE 22.06",
  },
    {
    id: "806 fusion solid",
    nombre: "LS2 806 fusion solid",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/fusion.png",
    peso: " 1550 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.06",
  },
  {
    id: "352 rookie WEILER",
    nombre: "LS2 352 rookie weiler",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/rookieweiler.png",
    peso: " 1350 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.05",
  },
   {
    id: "323 arrow r evo ",
    nombre: "LS2 323 arrow r evo",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/arrowr.png",
    peso: " 1390 ± 50 g",
    material: "HPFC ",
    certificacion: "ECE 22.05",
  },
     {
    id: "816 cosmos strike",
    nombre: "LS2 816 cosmos strike",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/cosmos.webp",
    peso: " 1350 ± 50 g",
    material: "HPTT ",
    certificacion: "ECE 22.06",
  },
     {
    id: "807 dragon carbono",
    nombre: "LS2 807 dragon carbono",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/dragoncarbono.png",
    peso: " 1450 ± 50 g",
    material: "Carbono",
    certificacion: "ECE 22.06",
  },
   {
    id: "816 cosmos astom",
    nombre: "LS2 816 cosmos astom",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/cosmosastom.png",
    peso: " 1300 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.06",
  },
    {
    id: "806 fusion nexus",
    nombre: "LS2 806 fusion nexus",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/fusionnexus.png",
    peso: " 1550 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
  {
    id: "808 stream II",
    nombre: "LS2 808 stream II",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/streamii.png",
    peso: " 1550 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
    {
    id: "805 thunder",
    nombre: "LS2 805 thunder",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/thunder.webp",
    peso: " 1280 ± 50 g",
    material: "Carbono",
    certificacion: "ECE 22.05",
  },
  {
    id: "353 rapid",
    nombre: "LS2 353 rapid",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/rapid.png",
    peso: " 1350 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.06",
  },
    {
    id: "800 STORM",
    nombre: "LS2 800 STORM",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/storm.png",
    peso: " 1400 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
   {
    id: "811 vector",
    nombre: "LS2 811 vector",
    categoria: "Integrales",
    marca: "LS2",
    img: "/cascos/vector.png",
    peso: " 1500 ± 50 g",
    material: "HPFC",
    certificacion: "ECE 22.06",
  },

 // ABIERTOS
  
    {
    id: "599 SPITFIRE",
    nombre: "LS2 599 SPITFIRE",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/spitfire.png",
    peso: "",
    material: "",
    certificacion: "",
  },
      {
    id: "562 airflow",
    nombre: "LS2 562 airflow",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/airflow.webp",
    peso: "950 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.05",
  },
    {
    id: "620 CLASSY",
    nombre: "LS2 620 CLASSY",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/classy.png",
    peso: "1200 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
    {
    id: "618 verso II",
    nombre: "LS2 618 verso II",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/versoii.webp",
    peso: "1500 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
     {
    id: "606 drifter",
    nombre: "LS2 606 drifter",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/drifter.webp",
    peso: "1300 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
   {
    id: "600 copter",
    nombre: "LS2 600 copter II",
    categoria: "Abiertos",
    marca: "LS2",
    img: "/cascos/copter.png",
    peso: "1200 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.06",
  },
  
   // MX - ENDURO 
  
    {
    id: "463 pioneer",
    nombre: "LS2 463 pioneer",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/pioneer.webp",
    peso: "1350 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.05",
  },
     {
    id: "463 pioneer adventure",
    nombre: "LS2 463 pioneer adventure",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/pioneeradventure.webp",
    peso: "1350 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.05",
  },
     {
    id: "701 explorer carbono",
    nombre: "LS2 701 explorer carbono",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/explorercarbono.png",
    peso: "1450 ± 50 g",
    material: "Carbono",
    certificacion: "ECE 22.06",
  },
    {
    id: "437 fast crusher",
    nombre: "LS2 437 fast crusher",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/fastcrusher.png",
    peso: "1300 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.05",
  },
   {
    id: "701 explorer solid",
    nombre: "LS2 701 explorer solid",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/explorersolid.webp",
    peso: "1550 ± 50 g",
    material: "HPFC",
    certificacion: "ECE 22.06",
  },
     {
    id: "700 subverter evo",
    nombre: "LS2 700 subverter evo",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/subverter.webp",
    peso: "1300 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.05",
  },
    {
    id: "702 pioneer II",
    nombre: "LS2 702 pioneer II",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/702pioneer.webp",
    peso: "1400 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
   {
    id: "609 virtus",
    nombre: "LS2 609 virtus",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/609virtus.png",
    peso: "1380 ± 50 g",
    material: "ABS",
    certificacion: "ECE 22.05",
  },
   {
    id: "701 explorer",
    nombre: "LS2 701 explorer",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/explorerspire.png",
    peso: "1550 ± 50 g",
    material: "HPFC",
    certificacion: "ECE 22.06",
  },
    {
    id: "701 explorer",
    nombre: "LS2 701 explorer",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/explorerspire.png",
    peso: "1550 ± 50 g",
    material: "HPFC",
    certificacion: "ECE 22.06",
  },
    {
    id: "700 subverter constelation",
    nombre: "LS2 700 subverter constelation",
    categoria: "Mx - Enduro",
    marca: "LS2",
    img: "/cascos/subverterconstelation.webp",
    peso: "1300 ± 50 g",
    material: "HPFC",
    certificacion: "ECE 22.05",
  },
   
   
   // MODULAR
   
  
    {
    id: "370 easy",
    nombre: "LS2 370 easy",
    categoria: "Modular",
    marca: "LS2",
    img: "/cascos/easy.webp",
    peso: "1350 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.05",
  },
    {
    id: "960 advant",
    nombre: "LS2 960 advant",
    categoria: "Modular",
    marca: "LS2",
    img: "/cascos/advant.png",
    peso: "1650 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
   {
    id: "902 scope",
    nombre: "LS2 902 scope",
    categoria: "Modular",
    marca: "LS2",
    img: "/cascos/scope.png",
    peso: "1650 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.05",
  },
  {
    id: "370 easy STRipe",
    nombre: "LS2 370 easy stripe",
    categoria: "Modular",
    marca: "LS2",
    img: "/cascos/easystripe.webp",
    peso: "1550 ± 50 g",
    material: "HPTT",
    certificacion: "ECE 22.05",
  },
     {
    id: "908 strobe",
    nombre: "LS2 908 strobe",
    categoria: "Modular",
    marca: "LS2",
    img: "/cascos/strobe.png",
    peso: "1550 ± 50 g",
    material: "KPA",
    certificacion: "ECE 22.06",
  },
   
   
   
   
   
   
   
   
  

    
  
  
  
  



































  // ...




















];
