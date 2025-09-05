import { MapPin, Navigation, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LocationSection = () => {
  const address = "تالار شاهکار، خیابان ولیعصر، تهران";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 px-4 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 rtl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            جایی که عروسی می‌کنیم
          </h2>
          <p className="text-lg text-muted-foreground font-persian">
            به ما در این مکان زیبا برای جشن ویژه‌مان بپیوندید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Location Details */}
          <Card className="p-8 shadow-romantic bg-card/90 backdrop-blur-sm">
            <div className="space-y-6 rtl">
              <div>
                <h3 className="font-script text-3xl text-primary mb-2">
                  تالار شاهکار
                </h3>
                <p className="text-muted-foreground font-persian">
                  مکانی شیک و مناسب برای جشن عشق
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <p className="font-medium text-foreground font-persian">آدرس</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-persian">
                      {address}
                    </p>
                  </div>
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <p className="font-medium text-foreground font-persian">تاریخ و زمان</p>
                    <p className="text-muted-foreground text-sm font-persian">
                      شنبه، ۲۵ شهریور ۱۴۰۴ ساعت ۱۹:۰۰
                    </p>
                  </div>
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-elegant shadow-romantic hover:shadow-elegant group"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-persian">مسیریابی</span>
                </a>
              </Button>
            </div>
          </Card>

          {/* Map Placeholder */}
          <Card className="h-80 lg:h-96 shadow-romantic overflow-hidden bg-card/90 backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-sage-soft to-primary-soft flex items-center justify-center">
              <div className="text-center space-y-4 rtl">
                <MapPin className="w-16 h-16 text-primary mx-auto animate-float" />
                <div>
                  <h4 className="font-script text-2xl text-primary mb-2">
                    تالار شاهکار
                  </h4>
                  <p className="text-muted-foreground font-persian">
                    برای مشاهده در نقشه "مسیریابی" را کلیک کنید
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 shadow-soft bg-card/80 backdrop-blur-sm inline-block rtl">
            <p className="text-muted-foreground font-persian">
              <strong className="text-foreground">پارکینگ:</strong> پارکینگ رایگان با خدمات والت در دسترس است
            </p>
            <p className="text-muted-foreground font-persian mt-2">
              <strong className="text-foreground">لباس مناسب:</strong> لباس مجلسی پیشنهاد می‌شود
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;