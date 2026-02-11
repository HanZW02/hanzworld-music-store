import Hero from "../components/sections/Hero";
import ProductList from "../components/sections/ProductList";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen">
        <section>
          <Hero />
        </section>
  
        <section id="products">
          <ProductList/>
        </section>
      </main>

    </>
  );
}
