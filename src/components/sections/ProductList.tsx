// Tipe data (Optional, tapi bagus biar autocomplete jalan di VS Code)
type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew: boolean;
  description: string;
  images: string[];
  specifications: { name: string; value: string }[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Yamaha Pacifica 112V Electric Guitar",
    slug: "yamaha-pacifica-112v-sonic-blue",
    category: "Electric Guitar",
    brand: "Yamaha",
    price: 3550000,
    originalPrice: 3900000,
    rating: 4.8,
    reviewCount: 124,
    stock: 5,
    isNew: false,
    description:
      "Salah satu gitar elektrik entry-level terbaik di pasar. Menawarkan konfigurasi pickup HSS yang serbaguna untuk berbagai genre musik, dari blues hingga rock.",
    images: [
      "https://nafiriguitar.com/cdn/shop/products/240213180630_IMG_6079_ori.jpg?v=1709282653&width=990", // Tampak Depan
      "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&auto=format&fit=crop&q=80", // Detail Body
    ],
    specifications: [
      { name: "Body Material", value: "Alder" },
      { name: "Neck Material", value: "Maple" },
      { name: "Fretboard", value: "Rosewood" },
      { name: "Pickup Config", value: "H-S-S (Alnico V)" },
      { name: "Bridge", value: "Vintage Tremolo with Block Saddle" },
    ],
  },
  {
    id: 2,
    name: "Roland FP-10 Digital Piano",
    slug: "roland-fp-10-black",
    category: "Digital Piano",
    brand: "Roland",
    price: 7200000,
    rating: 4.9,
    reviewCount: 89,
    stock: 2,
    isNew: true,
    description:
      "Piano digital compact dengan touch 88-key PHA-4 Standard yang memberikan sensasi piano akustik autentik. Cocok untuk latihan di rumah atau panggung kecil.",
    images: [
      "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&auto=format&fit=crop&q=80",
      "https://plus.unsplash.com/premium_photo-1681400668407-7e04c3268800?w=800&auto=format&fit=crop&q=80",
    ],
    specifications: [
      { name: "Number of Keys", value: "88 Keys (PHA-4 Standard)" },
      { name: "Sound Engine", value: "SuperNATURAL Piano Sound" },
      { name: "Polyphony", value: "96 Notes" },
      { name: "Speakers", value: "2 x 6W" },
      { name: "Connectivity", value: "USB MIDI, Bluetooth" },
    ],
  },
  {
    id: 3,
    name: "Fender Player Stratocaster",
    slug: "fender-player-stratocaster-sunburst",
    category: "Electric Guitar",
    brand: "Fender",
    price: 12500000,
    rating: 5.0,
    reviewCount: 45,
    stock: 0,
    isNew: false,
    description:
      'The sound of Fender. Stratocaster seri Player ini menghadirkan tone klasik yang "bell-like" dengan playability modern.',
    images: [
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=80",
    ],
    specifications: [
      { name: "Body Material", value: "Alder" },
      { name: "Neck Profile", value: 'Modern "C"' },
      { name: "Fretboard", value: "Maple" },
      { name: "Pickups", value: "3x Player Series Alnico 5 Strat Single-Coil" },
    ],
  },
  {
    id: 4,
    name: "Pearl Export EXX Drum Kit",
    slug: "pearl-export-exx-jet-black",
    category: "Drum Kit",
    brand: "Pearl",
    price: 11500000,
    rating: 4.7,
    reviewCount: 32,
    stock: 1,
    isNew: false,
    description:
      "Drum kit terlaris di dunia. Pearl Export EXX dilengkapi dengan hardware 830 series yang kokoh dan pedal P-930 Demonator.",
    images: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb4747?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&auto=format&fit=crop&q=80",
    ],
    specifications: [
      { name: "Shell Material", value: "Poplar/Asian Mahogany" },
      { name: "Configuration", value: "5-Piece Kit" },
      { name: "Hardware", value: "Included (830 Series)" },
      { name: "Snare", value: '14" x 5.5"' },
    ],
  },
  {
    id: 5,
    name: "Focusrite Scarlett 2i2 4th Gen",
    slug: "focusrite-scarlett-2i2-4th-gen",
    category: "Audio Interface",
    brand: "Focusrite",
    price: 3100000,
    originalPrice: 3300000,
    rating: 4.9,
    reviewCount: 210,
    stock: 15,
    isNew: true,
    description:
      "Audio interface paling populer untuk musisi rumahan. Preamp mic yang jernih dan fitur Air mode untuk vokal yang lebih detail.",
    images: [
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=80",
    ],
    specifications: [
      { name: "Inputs", value: "2 (XLR/Instrument)" },
      { name: "Outputs", value: "2 (Balanced Jack)" },
      { name: "Resolution", value: "24-bit/192kHz" },
      { name: "Connection", value: "USB-C" },
    ],
  },
];

// Helper untuk format Rupiah
const formatRupiah = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};

export default function ProductList() {
  return (
    <div className="py-16 bg-base-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 font-display text-primary">
          FEATURED INSTRUMENTS
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group ${
                product.stock === 0 ? "opacity-60 grayscale" : ""
              }`}
            >
              <figure className="aspect-[4/5] relative overflow-hidden bg-white">
                <img
                  alt={product.name}
                  src={product.images[0]}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {product.stock === 0 && (
                    <div className="badge badge-error text-white font-bold shadow-md">
                      SOLD OUT
                    </div>
                  )}
                  {product.isNew && product.stock > 0 && (
                    <div className="badge badge-secondary text-white shadow-md">
                      NEW
                    </div>
                  )}
                  {product.originalPrice &&
                    product.originalPrice > product.price &&
                    product.stock > 0 && (
                      <div className="badge badge-accent text-white shadow-md">
                        SALE
                      </div>
                    )}
                </div>
              </figure>

              <div className="card-body p-4">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                  <span>{product.category}</span>
                  <span className="font-bold uppercase tracking-wide">
                    {product.brand}
                  </span>
                </div>

                {/* Judul Produk */}
                <h3 className="card-title text-lg leading-tight min-h-[3rem]">
                  <a
                    href={`/product/${product.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>

                <div className="flex items-center gap-1 text-yellow-500 text-xs my-2">
                  <span>⭐ {product.rating}</span>
                  <span className="text-gray-400">({product.reviewCount})</span>
                </div>

                {/* Harga */}
                <div className="card-actions justify-between items-end mt-auto pt-2 border-t border-base-200">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through decoration-red-500">
                        {formatRupiah(product.originalPrice)}
                      </span>
                    )}
                    <p className="text-lg font-bold text-primary">
                      {formatRupiah(product.price)}
                    </p>
                  </div>

                  {/* Badge Brand */}
                  <div className="badge badge-outline text-xs font-semibold">
                    {product.stock > 0 ? "Ready" : "Empty"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
