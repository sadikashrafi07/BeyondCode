function Skills() {
    return (
      <section id="skills" className="w-full flex flex-col items-center justify-center my-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
        {/* Introductory Text */}
        <p className="text-base font-semibold text-gray-300 uppercase mb-2" style={{ letterSpacing: "0.2em", fontFamily: "Avenir Next" }}>
          Skills
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
        <p className="text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Always ready to try hands-on new and emerging technologies
        </p>
  
        {/* Skills content here */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Your skill components or items go here */}
        </div>
      </section>
    );
  }
  
  export default Skills;
  