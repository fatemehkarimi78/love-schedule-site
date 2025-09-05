import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Heart, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "تأیید حضور ارسال شد!",
      description: "از پاسخ شما متشکریم. مشتاقانه منتظر جشن با شما هستیم!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      guests: '1',
      attending: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-elegant">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 rtl">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heartbeat" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            لطفاً تأیید حضور کنید
          </h2>
          <p className="text-lg text-muted-foreground font-persian">
            حضور شما روز ما را حتی ویژه‌تر خواهد کرد
          </p>
        </div>

        <Card className="shadow-romantic p-8 bg-card/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6 rtl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium font-persian">
                  نام کامل *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-elegant focus:shadow-soft font-persian"
                  placeholder="نام کامل خود را وارد کنید"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium font-persian">
                  آدرس ایمیل *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-elegant focus:shadow-soft"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="attending" className="text-foreground font-medium font-persian">
                  آیا شرکت خواهید کرد؟ *
                </Label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground transition-elegant focus:shadow-soft focus:ring-2 focus:ring-primary/20 font-persian"
                  dir="rtl"
                >
                  <option value="">لطفاً انتخاب کنید</option>
                  <option value="yes">بله، حتماً خواهم آمد!</option>
                  <option value="no">متأسفانه نمی‌توانم بیایم</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium font-persian">
                  تعداد مهمانان
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={handleChange}
                  className="transition-elegant focus:shadow-soft"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium font-persian">
                پیام ویژه (اختیاری)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="transition-elegant focus:shadow-soft resize-none font-persian"
                placeholder="آرزوهایتان یا درخواست‌های ویژه را با ما به اشتراک بگذارید..."
                dir="rtl"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-elegant group shadow-romantic hover:shadow-elegant"
            >
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              <span className="font-persian">ارسال تأیید حضور</span>
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVPForm;