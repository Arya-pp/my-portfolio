export default function Navbar()
{
    return (
        <nav className="fixed top-0 w-full z-50 glass-card">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text">Arya</div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-purple-accent transition-colors">Home</a>
                <a href="#about" className="hover:text-purple-accent transition-colors">About</a>
                <a href="#projects" className="hover:text-purple-accent transition-colors">Projects</a>
                <a href="#skills" className="hover:text-purple-accent transition-colors">Skills</a>
                <a href="#contact" className="hover:text-purple-accent transition-colors">Contact</a>
              </div>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
    );
}