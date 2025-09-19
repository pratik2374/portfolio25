import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "Glassmorphism Hackathon Registration",
    description: "A modern hackathon registration page featuring glassmorphism design principles. The design combines frosted glass effects with vibrant gradients and smooth animations.",
    tags: ["HTML/CSS", "Glassmorphism", "Responsive"],
    iframeContent: `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><title>Hackathon Registration</title><link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap' rel='stylesheet'><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Poppins',sans-serif;background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);min-height:100vh;display:flex;justify-content:center;align-items:center;padding:20px}.ad-container{max-width:900px;width:100%;background:rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.3);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);display:flex;flex-direction:row}.ad-left{flex:1;background:linear-gradient(135deg,#00c6ff 0%,#0072ff 100%);color:white;padding:60px 40px;display:flex;flex-direction:column;justify-content:center}.ad-left h1{font-size:3em;font-weight:700;margin-bottom:20px}.ad-left p{font-size:1.2em;margin-bottom:10px;font-weight:300}.highlight{background:rgba(255,255,255,0.15);padding:5px 10px;border-radius:5px;font-weight:600}.ad-right{flex:1;padding:60px 40px;display:flex;flex-direction:column;justify-content:center;color:white}.ad-right h2{font-size:2em;margin-bottom:20px;color:#ffffff;font-weight:600}.features{list-style:none;margin-bottom:30px}.features li{font-size:1.1em;margin-bottom:15px;display:flex;align-items:center}.features li::before{content:'✔';color:#00c6ff;font-weight:bold;margin-right:15px;font-size:1.3em}.register-btn{background:linear-gradient(135deg,#00c6ff 0%,#0072ff 100%);color:white;border:none;padding:18px 40px;font-size:1.2em;font-weight:600;border-radius:50px;cursor:pointer}.date-location{margin-top:30px;font-size:1em;color:#a0d2ff;font-weight:300}.date-location span{display:block;margin-bottom:5px}@media (max-width:768px){.ad-container{flex-direction:column}.ad-left,.ad-right{padding:40px 30px}.ad-left h1{font-size:2.2em}.ad-right h2{font-size:1.6em}}</style></head><body><div class='ad-container'><div class='ad-left'><h1>Code the Future</h1><p>Join the ultimate <span class='highlight'>48-hour hackathon</span></p><p>Innovate. Create. Win.</p></div><div class='ad-right'><h2>Why Participate?</h2><ul class='features'><li>Build real-world projects</li><li>Network with tech enthusiasts</li><li>Win exciting prizes</li><li>Get mentorship from experts</li></ul><button class='register-btn'>Register Now</button><div class='date-location'><span>📅 October 20-22, 2025</span><span>📍 Virtual & On-site</span></div></div></div></body></html>`
  },
  {
    id: 2,
    title: "Generative AI Bootcamp",
    description: "A modern and engaging landing page for a Generative AI Bootcamp featuring animated gradients, clean typography, and professional design. Includes interactive elements and call-to-action buttons.",
    tags: ["AI/ML", "Modern Design", "Animation"],
    iframeContent: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Generative AI Bootcamp</title><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"><style>body{font-family:'Inter',sans-serif;background-color:#f0f2f5}@keyframes background-pan{0%{background-position:0% center}100%{background-position:-200% center}}.animated-gradient{background-image:linear-gradient(to right,#6366f1,#a855f7,#ec4899,#6366f1);background-size:200%;-webkit-background-clip:text;background-clip:text;animation:background-pan 3s linear infinite}.button-gradient{background-image:linear-gradient(to right,#818cf8,#c084fc,#f472b6,#818cf8);background-size:200%;animation:background-pan 4s linear infinite}.card-glow{box-shadow:0 0 15px rgba(168,85,247,0.2),0 0 40px rgba(99,102,241,0.3);transition:box-shadow 0.3s ease-in-out}.card-glow:hover{box-shadow:0 0 25px rgba(168,85,247,0.4),0 0 60px rgba(99,102,241,0.4)}</style></head><body class="flex items-center justify-center min-h-screen p-4"><div class="w-full max-w-md bg-white rounded-2xl overflow-hidden card-glow"><div class="p-8 md:p-10"><div class="text-center mb-6"><h1 class="text-4xl md:text-5xl font-black text-transparent animated-gradient">Unlock the Future</h1><p class="text-lg text-gray-600 mt-2 font-semibold">Join Our Generative AI Bootcamp</p></div><div class="flex justify-center my-8"><div class="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg></div></div><div class="space-y-4 text-gray-700 mb-8"><div class="flex items-center"><svg class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"></path><circle cx="12" cy="12" r="4"></circle></svg><span>Master cutting-edge AI models and techniques.</span></div><div class="flex items-center"><svg class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21v-2.5M17 14l-2 1m2-1l-2-1m2 1v2.5M7 14l2 1m-2-1l2-1m-2 1v2.5"></path></svg><span>Build real-world projects with hands-on labs.</span></div><div class="flex items-center"><svg class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span>Learn from industry experts and pioneers.</span></div></div><a href="#" class="block w-full text-center py-4 px-6 rounded-xl text-white font-bold text-lg button-gradient shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">Join the AI Revolution!</a><div class="text-center mt-6"><p class="text-sm text-gray-500">Limited Spots Available – Enroll Today!</p></div></div></div></body></html>`
  },
  {
    id: 3,
    title: "BRUTE[HACK] Retro Terminal",
    description: "A retro-inspired hackathon landing page that mimics old-school computer terminals. Features monospace typography, CRT-style scanlines, and bold yellow-on-black aesthetics.",
    tags: ["Retro Design", "Typography", "Animation"],
    iframeContent: `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>BRUTE[HACK] Registration</title><style>@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');body{background-color:#e0e0e0;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;font-family:'Roboto Mono','Courier New',Courier,monospace;color:#f0f0f0}.ad-container{width:90%;max-width:600px;background-color:#1a1a1a;border:4px solid #1a1a1a;padding:2rem;text-align:center;position:relative;box-shadow:12px 12px 0px #000000;overflow:hidden}.ad-container:hover{box-shadow:15px 15px 0px #ffff00}.scanlines{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4) 1px,transparent 1px,transparent 4px)}.header{border:3px solid #f0f0f0;padding:1rem;margin-bottom:2rem}.header h1{font-size:clamp(2.5rem,10vw,5rem);margin:0;font-weight:700;color:#ffff00;text-transform:uppercase;letter-spacing:2px}.tagline{font-size:1.2rem;text-transform:uppercase;letter-spacing:4px;margin-bottom:2.5rem}.details{list-style:none;padding:0;margin:0 0 3rem 0;display:flex;flex-wrap:wrap;justify-content:center;gap:1rem}.details li{border:2px dashed #555;padding:0.75rem 1.5rem;font-weight:700}.cta-button{display:inline-block;background-color:#ffff00;color:#000000;text-decoration:none;font-size:1.5rem;font-weight:700;text-transform:uppercase;padding:1rem 3rem;border:3px solid #000000;box-shadow:6px 6px 0px #000000}.cta-button:hover{background-color:#f0f0f0;box-shadow:none;transform:translate(6px,6px)}</style></head><body><div class='ad-container'><div class='scanlines'></div><header class='header'><h1>BRUTE[HACK]</h1></header><p class='tagline'>No Frills. Just Code.</p><ul class='details'><li>OCT 25-26, 2025</li><li>// GLOBAL_ONLINE</li><li>$10,000 PRIZE POOL</li></ul><a href='#' class='cta-button'>REGISTER_NOW</a></div></body></html>`
  },
  {
    id: 4,
    title: "Cyberpunk Glitch Design",
    description: "An experimental cyberpunk-inspired hackathon page featuring glitch effects, vibrant neon colors, and animated elements. Pushes the boundaries of web design with bold visual choices.",
    tags: ["Experimental", "Animation", "Cyberpunk"],
    iframeContent: `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>HACKATHON REGISTRATION</title><style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Space Mono',monospace;background:#ff0000;color:#00ff00;overflow-x:hidden;cursor:crosshair}.ad-container{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;position:relative;background:repeating-linear-gradient(0deg,#ff0000 0px,#ff0000 2px,#cc0000 2px,#cc0000 4px)}.ad-content{background:#000;border:8px solid #00ff00;padding:60px;max-width:800px;position:relative;box-shadow:0 0 0 4px #ff00ff,0 0 0 8px #00ffff,0 0 0 12px #ffff00,20px 20px 0 0 #ff00ff,-20px -20px 0 0 #00ffff;transform:rotate(-2deg)}h1{font-size:4rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:20px;color:#00ff00;text-shadow:3px 3px 0 #ff00ff,6px 6px 0 #00ffff}.subtitle{font-size:1.5rem;color:#ffff00;margin-bottom:30px;text-transform:uppercase;letter-spacing:0.2em;border-bottom:4px solid #ff00ff;padding-bottom:10px;display:inline-block}.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:40px}.info-box{background:#ff00ff;color:#000;padding:20px;border:4px solid #00ff00;transform:rotate(1deg)}.info-box:nth-child(even){transform:rotate(-1deg);background:#00ffff}.info-box h3{font-size:1.2rem;margin-bottom:10px;text-transform:uppercase}.cta-button{background:#ffff00;color:#ff0000;font-size:2rem;font-weight:700;padding:20px 40px;border:6px solid #000;cursor:pointer;text-transform:uppercase;letter-spacing:0.1em;transform:rotate(-1deg);display:inline-block;text-decoration:none;box-shadow:5px 5px 0 0 #ff00ff,10px 10px 0 0 #00ffff}@media (max-width:768px){.ad-content{padding:30px;margin:20px}h1{font-size:2.5rem}.info-grid{grid-template-columns:1fr}.cta-button{font-size:1.5rem;padding:15px 30px}}</style></head><body><div class='ad-container'><div class='ad-content'><h1>HACKATHON<br>2024</h1><p class='subtitle'>Code. Create. Conquer.</p><div class='info-grid'><div class='info-box'><h3>📅 48 Hours</h3><p>Non-stop coding madness</p></div><div class='info-box'><h3>💰 $50K Prizes</h3><p>Cash & gadgets to win</p></div><div class='info-box'><h3>🍕 Free Food</h3><p>Pizza & energy drinks</p></div><div class='info-box'><h3>🚀 Build Anything</h3><p>No limits, just code</p></div></div><center><a href='#' class='cta-button'>REGISTER NOW →</a></center></div></div></body></html>`
  }
];

export default function PortfolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItem = portfolioItems[currentSlide];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" data-testid="portfolio-title">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="portfolio-subtitle">
            A selection of projects that showcase my design and development skills
          </p>
        </div>

        <div className="relative">
          {/* Slide Indicators */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex space-x-2" data-testid="carousel-indicators">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-border'
                  }`}
                  data-testid={`indicator-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Portfolio Slide */}
          <Card className="shadow-xl" data-testid={`portfolio-slide-${currentItem.id}`}>
            <CardContent className="p-0">
              {/* Full-width Portfolio Content with Navigation */}
              <div className="relative w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                {/* Navigation Arrows */}
                <Button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0 p-3 rounded-full shadow-lg backdrop-blur-sm"
                  size="icon"
                  data-testid="button-prev-slide"
                >
                  <ChevronLeft className="text-xl" />
                </Button>
                
                <Button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0 p-3 rounded-full shadow-lg backdrop-blur-sm"
                  size="icon"
                  data-testid="button-next-slide"
                >
                  <ChevronRight className="text-xl" />
                </Button>
                
                <iframe 
                  srcDoc={currentItem.iframeContent}
                  className="portfolio-iframe w-full h-80 md:h-96 lg:h-[60rem] border-0"
                  loading="lazy"
                  data-testid={`project-iframe-${currentItem.id}`}
                />
              </div>
              
              {/* Text Content Below */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4" data-testid={`project-title-${currentItem.id}`}>
                  {currentItem.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`project-description-${currentItem.id}`}>
                  {currentItem.description}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`project-tags-${currentItem.id}`}>
                  {currentItem.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
