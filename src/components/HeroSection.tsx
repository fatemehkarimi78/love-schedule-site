import CountdownTimer from './CountdownTimer';
import couplePortrait from '@/assets/couple-portrait.jpg';
import { Heart, Calendar } from 'lucide-react';

const HeroSection = () => {
  const weddingDate = "2024-09-15T19:00:00";

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-romantic flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={couplePortrait}
          alt="Beautiful couple portrait"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto rtl">
        {/* Main Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-primary/50"></div>
            <Heart className="w-8 h-8 text-primary animate-heartbeat" />
            <div className="w-16 h-0.5 bg-primary/50"></div>
          </div>
          
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary mb-6 animate-glow">
            فاطمه و حسین
          </h1>
          
          <p className="font-persian text-xl md:text-2xl text-muted-foreground mb-8">
            با خانواده‌هایمان، شما را به جشن عروسی‌مان دعوت می‌کنیم
          </p>
          
          <div className="flex items-center justify-center gap-3 text-lg font-medium text-foreground/80">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-persian">شنبه، ۲۵ شهریور ۱۴۰۴</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CountdownTimer targetDate={weddingDate} />
        </div>

        {/* Couple Photo */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-romantic mx-auto animate-float">
              <img
                src={couplePortrait}
                alt="فاطمه و حسین - زوج عاشق"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative ring around photo */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-glow"></div>
            <div className="absolute -inset-8 rounded-full border border-accent/10"></div>
          </div>
        </div>

        {/* Save the Date */}
        <div className="mt-12 animate-fade-in rtl" style={{ animationDelay: '1.5s' }}>
          <p className="font-script text-3xl md:text-4xl text-primary/80">
            تاریخ را یادداشت کنید
          </p>
          <p className="font-persian text-muted-foreground mt-2">
            منتظر حضور گرم شما هستیم
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;