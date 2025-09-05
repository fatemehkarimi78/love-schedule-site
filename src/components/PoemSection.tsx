import { Quote, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PoemSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-sunset">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heartbeat" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Words of Love
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            A poem that captures the essence of our journey together
          </p>
        </div>

        <Card className="shadow-romantic p-8 md:p-12 bg-card/90 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative quotes */}
          <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20 transform rotate-180" />
          <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/20" />
          
          <div className="relative z-10">
            <div className="text-center space-y-6">
              <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Two hearts that beat as one today,
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Two souls that found their destined way.
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  Through seasons of both joy and tears,
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  We've grown in love throughout the years.
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '1.0s' }}>
                  Now hand in hand, we take this vow,
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  To love forever, starting now.
                </p>
                <p className="mb-4 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                  With friends and family gathered near,
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
                  We celebrate this moment dear.
                </p>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <p className="font-script text-2xl text-primary animate-fade-in" style={{ animationDelay: '1.8s' }}>
                  May our love story never end,
                </p>
                <p className="font-script text-2xl text-primary animate-fade-in" style={{ animationDelay: '2.0s' }}>
                  As lovers, partners, and best friends.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        </Card>

        {/* Author attribution */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground font-serif italic">
            Written with love for this special day
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;