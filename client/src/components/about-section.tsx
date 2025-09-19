import { Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text" data-testid="about-title">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p data-testid="about-intro">
                Hi! I'm <span className="text-foreground font-semibold">Neha Roy</span>, a passionate designer and developer 
                currently pursuing my B.Tech in Information Technology at NIT Kurukshetra.
              </p>
              <p data-testid="about-passion">
                I have a deep love for creating beautiful, functional digital experiences. My interests span 
                across UI/UX design, front-end development, and social media design. I believe in the power 
                of thoughtful design to solve real-world problems and create meaningful connections.
              </p>
              <p data-testid="about-interests">
                When I'm not coding or designing, you can find me exploring the latest design trends, 
                experimenting with new technologies, or creating content for social media platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6" data-testid="about-stats">
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-experience">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-projects">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="lg:text-center">
            <div className="relative inline-block">
              {/* Stylized developer illustration */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 relative overflow-hidden" data-testid="about-illustration">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 transform rotate-6 rounded-3xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Code className="text-3xl text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold" data-testid="illustration-name">Neha Roy</div>
                      <div className="text-muted-foreground" data-testid="illustration-role">Designer & Developer</div>
                      <div className="text-sm text-accent" data-testid="illustration-college">NIT Kurukshetra</div>
                    </div>
                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
