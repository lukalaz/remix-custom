import SkillCard from "./SkillCard";

const TechStack: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="pt-[120px]" id="tech-stack">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="max-w-[600px] mx-auto text-center mb-[70px]">
                <span className="font-semibold text-lg text-primary block mb-2">
                  What I love to work with the most
                </span>
                <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">
                  My Tech Stack
                </h2>
                <p className="font-medium text-lg text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-16px]">
            <SkillCard title={"React"} content={"Nije los React"} />
            <SkillCard title={"React"} content={"Nije los React"} />
            <SkillCard title={"React"} content={"Nije los React"} />
            <SkillCard title={"React"} content={"Nije los React"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
