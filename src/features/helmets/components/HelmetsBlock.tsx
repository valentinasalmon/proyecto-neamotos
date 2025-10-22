export function HelmetsBlock() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <img
        className="w-full max-w-md lg:max-w-full lg:w-3/4 mx-auto"
        src="https://images.unsplash.com/photo-1627483295458-8f6b9ebf2b2a?q=80&w=1200&auto=format&fit=crop"
        alt="Casco integral negro"
      />
      <div>
        <p className="text-sm font-bold tracking-widest text-brand">SEGURIDAD ANTE TODO</p>
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
          ¿Por qué todos hablan de nuestros cascos?
        </h3>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Homologaciones internacionales, calotas livianas, visores anti-scratch y ventilación inteligente.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
          <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand rounded-full" /> Certificación ECE/DOT</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand rounded-full" /> Visor con protección UV</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand rounded-full" /> Forro hipoalergénico desmontable</li>
          <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand rounded-full" /> Preparado para intercom</li>
        </ul>
      </div>
    </div>
  );
}
