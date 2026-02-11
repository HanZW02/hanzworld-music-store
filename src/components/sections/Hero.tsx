const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh]" 
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop)", // Gambar studio musik
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Find Your Sound</h1>
          <p className="mb-5">
            Temukan alat musik impianmu di HanZWorld. Dari gitar elektrik yang gahar hingga piano klasik yang elegan. Mulai perjalanan musikmu hari ini.
          </p>
          <button className="btn btn-primary">Explore Catalog</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;