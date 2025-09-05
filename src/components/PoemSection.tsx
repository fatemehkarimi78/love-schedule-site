import { Quote, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PoemSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-sunset">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 rtl">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heartbeat" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            کلمات عشق
          </h2>
          <p className="text-lg text-muted-foreground font-persian">
            شعری که جوهره سفر مشترکمان را به تصویر می‌کشد
          </p>
        </div>

        <Card className="shadow-romantic p-8 md:p-12 bg-card/90 backdrop-blur-sm relative overflow-hidden rtl">
          {/* Decorative quotes */}
          <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20 transform rotate-180" />
          <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/20" />
          
          <div className="relative z-10">
            <div className="text-center space-y-6">
              <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '0.2s' }}>
                  دو قلب که امروز یکسان می‌تپند،
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '0.4s' }}>
                  دو روح که راه سرنوشتشان را یافتند.
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '0.6s' }}>
                  در فصل‌های شادی و اشک‌ها،
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '0.8s' }}>
                  در طول سال‌ها در عشق رشد کردیم.
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '1.0s' }}>
                  حال دست در دست، این عهد را می‌بندیم،
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '1.2s' }}>
                  که از امروز تا ابد عشق بورزیم.
                </p>
                <p className="mb-4 animate-fade-in font-persian" style={{ animationDelay: '1.4s' }}>
                  با دوستان و خانواده در کنارمان،
                </p>
                <p className="animate-fade-in font-persian" style={{ animationDelay: '1.6s' }}>
                  این لحظه عزیز را جشن می‌گیریم.
                </p>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <p className="font-script text-2xl text-primary animate-fade-in" style={{ animationDelay: '1.8s' }}>
                  باشد که داستان عشق ما هرگز پایان نیابد،
                </p>
                <p className="font-script text-2xl text-primary animate-fade-in font-persian" style={{ animationDelay: '2.0s' }}>
                  به عنوان عاشق، شریک، و بهترین دوست.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        </Card>

        {/* Author attribution */}
        <div className="text-center mt-8 rtl">
          <p className="text-muted-foreground font-persian italic">
            نوشته شده با عشق برای این روز ویژه
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;