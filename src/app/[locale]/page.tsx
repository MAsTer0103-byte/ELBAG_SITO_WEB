import { About } from "@/components/sections/About";
import { Contacts } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Products } from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
