import PageTransition from "@/components/ui/PageTransition";

const workExperience = [
  {
    date: "2023 - Present",
    title: "Product Manager",
    company: "Lefevbre",
    description: "Led the development of core platform features, mentored junior developers, and implemented best practices for code quality and testing. Reduced deployment time by 40% through CI/CD pipeline optimization.",
    href: "#"
  },
  {
    date: "2018 - 2021",
    title: "Product Manager",
    company: "Previous Company",
    description: "Developed and maintained client-facing applications using React and Node.js. Collaborated with design team to implement responsive interfaces and improve user experience.",
    href: "#"
  },
  {
    date: "2018 - 2021",
    title: "Product Manager",
    company: "Previous Company",
    description: "Developed and maintained client-facing applications using React and Node.js. Collaborated with design team to implement responsive interfaces and improve user experience.",
    href: "#"
  },
  {
    date: "2018 - 2021",
    title: "Product Manager",
    company: "Previous Company",
    description: "Developed and maintained client-facing applications using React and Node.js. Collaborated with design team to implement responsive interfaces and improve user experience.",
    href: "#"
  }
];

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="py-8">
        <h1 className="text-2xl font-normal mb-8">Work Experience</h1>
        
        <div className="space-y-12">
          {workExperience.map((work) => (
            <div key={work.title} className="flex gap-16">
              <span className="text-muted-foreground w-32 flex-shrink-0">{work.date}</span>
              <div>
                <div className="text-xl">{work.title}</div>
                <div className="text-muted-foreground mb-2">{work.company}</div>
                <p className="text-muted-foreground text-sm max-w-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 