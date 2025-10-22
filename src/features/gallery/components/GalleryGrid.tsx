export function GalleryGrid() {
  const ids = [
    "photo-1542367597-8849ebf6c9a4",
    "photo-1542296332-2e4473faf563",
    "photo-1558981806-ec527fa84c39",
    "photo-1503376780353-7e6692767b70",
    "photo-1504215680853-026ed2a45def",
    "photo-1484176141566-3674cda218f7"
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {ids.map((id) => (
          <img
            key={id}
            className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
            src={`https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
