import Hero from "@/components/Hero";
import Events from "@/components/events/Events";
import Player from "@/components/Player";

export default function Home() {
  return (
   <main>
    <Hero />
    <Player />
    <Events /> 
    <div className="h-[4000px]"></div>  
   </main>
  );
}
