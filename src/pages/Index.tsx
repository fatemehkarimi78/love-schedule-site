import HeroSection from '@/components/HeroSection';
import WeddingSchedule from '@/components/WeddingSchedule';
import LocationSection from '@/components/LocationSection';
import PoemSection from '@/components/PoemSection';
import MemorialSection from '@/components/MemorialSection';
import RSVPForm from '@/components/RSVPForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Countdown */}
      <HeroSection />
      
      {/* Wedding Schedule Timeline */}
      <WeddingSchedule />
      
      {/* Beautiful Poem */}
      <PoemSection />
      
      {/* Location and Directions */}
      <LocationSection />
      
      {/* Memorial Section */}
      <MemorialSection />
      
      {/* RSVP Form */}
      <RSVPForm />
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 text-center rtl">
        <div className="max-w-2xl mx-auto">
          <p className="font-script text-3xl text-primary mb-4">
            با عشق و قدردانی
          </p>
          <p className="text-muted-foreground font-persian">
            مشتاقانه منتظر جشن این روز ویژه با همه شما هستیم
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-primary/30"></div>
            <span className="font-script text-primary text-2xl">فاطمه و حسین</span>
            <div className="w-12 h-0.5 bg-primary/30"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;