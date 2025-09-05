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
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
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
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-heartbeat" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Please RSVP
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Your presence would make our day even more special
          </p>
        </div>

        <Card className="shadow-romantic p-8 bg-card/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-elegant focus:shadow-soft"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-elegant focus:shadow-soft"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="attending" className="text-foreground font-medium">
                  Will you be attending? *
                </Label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground transition-elegant focus:shadow-soft focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium">
                  Number of Guests
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
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Special Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="transition-elegant focus:shadow-soft resize-none"
                placeholder="Share your wishes or any special requests..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-elegant group shadow-romantic hover:shadow-elegant"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Send RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVPForm;