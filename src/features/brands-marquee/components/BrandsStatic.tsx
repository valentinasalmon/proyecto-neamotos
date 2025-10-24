

export default function BrandsStatic() {
  const items = ["Honda","Yamaha","Kawasaki","KTM","Ducati","BMW","Suzuki","Benelli"];
  return (
    <div className="marquee py-4" role="region" aria-label="Logos de marcas">
      <div className="marquee__inner" aria-hidden="true">
        {[0,1].map(n => (
          <div key={n} className="flex items-center gap-12 px-6">
            {items.map(i => (
              <div key={`${i}-${n}`} className="logo-tile">{i}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}