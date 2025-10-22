import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: "bmw-s1000rr",
      modelo: "S1000 RR",
      marca: "BMW",
      tipo: "Sport",
      anio: 2021,
      cilindradaCc: 999,
      potenciaHp: 205,
      precioUsd: 4500,
      imagen: "https://images.unsplash.com/photo-1606229365485-93a3b8a1fb10?q=80&w=1200&auto=format&fit=crop",
      engineType: "4-Stroke Cylinder",
      boreStroke: "80mm / 49.7mm"
    },
    {
      id: "yamaha-mt09",
      modelo: "MT-09",
      marca: "Yamaha",
      tipo: "Sport",
      anio: 2021,
      cilindradaCc: 1103,
      potenciaHp: 208,
      precioUsd: 4500,
      imagen: "https://images.unsplash.com/photo-1614050556445-53c80f8b00ff?q=80&w=1200&auto=format&fit=crop",
      engineType: "Desmodedici 90 V4",
      boreStroke: "80mm / 49.7mm"
    },
    {
      id: "ktm-rc390",
      modelo: "RC 390",
      marca: "KTM",
      tipo: "Adventure",
      anio: 2021,
      cilindradaCc: 537,
      potenciaHp: 190,
      precioUsd: 6200,
      imagen: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1200&auto=format&fit=crop",
      engineType: "4-Stroke Cylinder",
      boreStroke: "80mm / 49.7mm"
    },
    {
      id: "ducati-hyper-950",
      modelo: "Hypermotard 950",
      marca: "Ducati",
      tipo: "Naked",
      anio: 2021,
      cilindradaCc: 937,
      potenciaHp: 114,
      precioUsd: 6200,
      imagen: "https://images.unsplash.com/photo-1601582585289-8a5b24b0df6a?q=80&w=1200&auto=format&fit=crop",
      engineType: "Testastretta 11°",
      boreStroke: "94mm / 67.5mm"
    },
    {
      id: "kawasaki-z900",
      modelo: "Z900",
      marca: "Kawasaki",
      tipo: "Naked",
      anio: 2021,
      cilindradaCc: 948,
      potenciaHp: 125,
      precioUsd: 5200,
      imagen: "https://images.unsplash.com/photo-1605618315486-2f6a7a5314d0?q=80&w=1200&auto=format&fit=crop",
      engineType: "In-line 4",
      boreStroke: "73.4mm / 56mm"
    },
    {
      id: "honda-cb500x",
      modelo: "CB500X",
      marca: "Honda",
      tipo: "Touring",
      anio: 2020,
      cilindradaCc: 471,
      potenciaHp: 47,
      precioUsd: 4500,
      imagen: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop",
      engineType: "Parallel Twin",
      boreStroke: "67mm / 66.8mm"
    },
    {
      id: "bmw-r1250gs",
      modelo: "R 1250 GS",
      marca: "BMW",
      tipo: "Adventure",
      anio: 2022,
      cilindradaCc: 1254,
      potenciaHp: 136,
      precioUsd: 9800,
      imagen: "https://images.unsplash.com/photo-1595433707802-6b2626f5c9b8?q=80&w=1200&auto=format&fit=crop",
      engineType: "Boxer Twin",
      boreStroke: "102.5mm / 76mm"
    },
    {
      id: "yamaha-r7",
      modelo: "R7",
      marca: "Yamaha",
      tipo: "Sport",
      anio: 2022,
      cilindradaCc: 689,
      potenciaHp: 73,
      precioUsd: 7000,
      imagen: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop",
      engineType: "CP2 Parallel Twin",
      boreStroke: "80mm / 68.6mm"
    },
    {
      id: "suzuki-gsx-s750",
      modelo: "GSX-S750",
      marca: "Suzuki",
      tipo: "Naked",
      anio: 2019,
      cilindradaCc: 749,
      potenciaHp: 114,
      precioUsd: 4300,
      imagen: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=1200&auto=format&fit=crop",
      engineType: "In-line 4",
      boreStroke: "72mm / 46mm"
    }
  ];
  return NextResponse.json(data);
}
