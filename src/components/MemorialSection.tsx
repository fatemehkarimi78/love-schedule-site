import { Star, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MemorialSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-elegant">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 rtl">
          <Star className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            به یاد عزیزان
          </h2>
          <p className="text-lg text-muted-foreground font-persian">
            گرامی‌داشت کسانی که در روح با ما هستند
          </p>
        </div>

        <Card className="shadow-romantic p-8 md:p-12 bg-card/90 backdrop-blur-sm relative rtl">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-primary/30"></div>
              <Heart className="w-6 h-6 text-primary animate-heartbeat" />
              <div className="w-16 h-0.5 bg-primary/30"></div>
            </div>

            <div className="space-y-4">
              <p className="font-persian text-lg leading-relaxed text-foreground/90">
                اگرچه برخی امروز نمی‌توانند با ما باشند، اما عشق و خاطراتشان برای همیشه در قلب‌هایمان باقی می‌ماند. 
                ما برکات آنها را با خود حمل می‌کنیم در آغاز این فصل جدید زندگی مشترکمان.
              </p>
              
              <div className="py-6">
                <p className="font-script text-2xl text-primary mb-4">
                  برای همیشه در قلب‌هایمان
                </p>
                <div className="space-y-2 text-muted-foreground font-persian">
                  <p>پدربزرگ علی • مادربزرگ زهرا</p>
                  <p>عمو حسن • عمه فاطمه</p>
                </div>
              </div>

              <p className="font-persian text-lg leading-relaxed text-foreground/90 italic">
                "کسانی که دوستشان داریم هرگز از ما دور نمی‌شوند، هر روز در کنار ما قدم برمی‌دارند. 
                نادیده، نشنیده، اما همیشه نزدیک، هنوز دوست‌داشتنی، هنوز دلتنگ‌شده، و بسیار عزیز."
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-16 h-0.5 bg-primary/30"></div>
              <Star className="w-6 h-6 text-primary animate-glow" />
              <div className="w-16 h-0.5 bg-primary/30"></div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-primary/20 rounded-full animate-glow"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-accent/30 rounded-full animate-glow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary/15 rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent/20 rounded-full animate-glow" style={{ animationDelay: '1.5s' }}></div>
        </Card>
      </div>
    </section>
  );
};

export default MemorialSection;