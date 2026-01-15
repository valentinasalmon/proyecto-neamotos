export type CatalogModel = {
  nombre: string;
  cilindrada?: string;
  potencia?: string;
  transmision?: string;
};

export type CatalogCategory = {
  nombreCategoria: string;
  modelos: CatalogModel[];
};

export type CatalogBrand = {
  slug: string;
  displayName: string;
  categorias: CatalogCategory[];
};
