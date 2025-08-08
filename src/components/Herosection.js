export default function Herosection()
{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-2xl md:text-xl font-bold mb-6 gradient-text">
                Hi, I'm
              </h1>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 gradient-text animate-slide-up">
                ARYA P P
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Frontend Developer
              </p>
            <p className="text-sm mb-12 text-gray-500 max-w-2xl mx-auto">
              Passionate Frontend developer focused on clean, responsive design and impactful projects.
            </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="bg-purple-accent hover:bg-purple-light px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
                  View Projects
                </a>
                <a
                  href="/RESUME_ARYA_PP(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-accent hover:bg-purple-accent px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>
    );
}