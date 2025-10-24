export const buildWhatsAppLink = (phone: string, model: string) => {
  const msg = encodeURIComponent(`Hola! Quiero consultar por la ${model}. ¿Está disponible?`);
  return `https://wa.me/${phone}?text=${msg}`;
};
