import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

export const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <ContactMe />
    </>
  );
};
