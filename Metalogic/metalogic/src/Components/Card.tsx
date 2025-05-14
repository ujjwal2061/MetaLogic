import {  Lightbulb, Pen,   Rocket,Scaling,Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react"; 
const Card = () => {
  interface FeatureCard {
    title: string;
    description: string;
    icon: LucideIcon; // ✅ use the type for the component
  }

  const featureCards: FeatureCard[] = [
    {
      title: "Ideate",
      description: "Let's brainstorm together and explore creative ideas to solve your unique challenges.",
      icon: Lightbulb,
    },
    {
      title: "Design",
      description: "Let's brainstorm together and explore creative ideas to solve your unique challenges.",
      icon: Pen,
    },
    {
      title: "Develop",
      description: "Let's brainstrome together and explore creative ideas to solve your unique challanges.",
      icon: Wrench,
    },
    {
       title: "Scale",
      description: "Let's brainstorm together and explore creative ideas to solve your unique challenges.",
      icon: Scaling, 
    },
       {
       title: "Lauch",
      description: "Let's brainstorm together and explore creative ideas to solve your unique challenges.",
      icon: Rocket,}
  ];

  return (
    <section className="bg-white flex flex-col py-6 justify-center items-center flex-grow">
      <div className="w-full   max-w-2xl text-center mb-8">
        <h1 className="font-semibold sm:text-3xl md:text-5xl">
          Design, Build and Scale your Vision with us
        </h1>
      </div>

      <div className="grid  w-full  px-3 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 ">
        {featureCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-lg border w-full  shadow-sm flex hover:shadow-lg transition-all ease-in-out duration-300 delay-100 cursor-pointer hover:bg-slate-300  md:flex-row  flex-col gap-4 items-start bg-white"
            >
              <div className="  bg-gray-200 p-4 rounded-md">
                <Icon className="text-blue-600 w-6 h-6 rounded-md" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
