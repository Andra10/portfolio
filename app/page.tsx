import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {

  return (
    <PageTransition>
      <div className="py-8">
        <h1 className="text-2xl font-normal mb-4">Andra Beje - Portfolio</h1>
        
        <p className="text-muted-foreground mb-8">
        I&apos;m Andra, Product Manager based in Barcelona. I have a tech, design and growth background.
          Passionate about building solutions that impact the world. 
          Analytical, with the ability to see the big picture and break it down to meet development goals. 
          Creative, entrepreneurial, and tech-savvy.
        </p>

        <p className="text-muted-foreground mb-8">
        I started coding at 14, I built a Wi-Fi repeater and never stopped since.
        Moved into web, I built a few websites and then landed my first job as a Frontend Developer and got closer to users.
        Fell in love with the product part and enjoying every challenge ever since. Experienced in both startups and big enterprises,
        worked across different industries.
        Looking forward to working on growing businesses and making an impact.
        </p>

        <div className="flex gap-4 mt-8 text-muted-foreground">
          <Link 
            href="https://github.com/Andra10" 
            className="hover:text-foreground flex items-center gap-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link 
            href="https://linkedin.com/in/andra-beje" 
            className="hover:text-foreground flex items-center gap-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link 
            href="mailto:andrabeje.work@gmail.com" 
            className="hover:text-foreground"
          >
            email
          </Link>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          © 2024 Andra
        </div>
      </div>
    </PageTransition>
  );
}
