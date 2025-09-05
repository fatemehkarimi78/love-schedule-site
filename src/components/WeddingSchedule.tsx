import { 
  Heart,
  Clock,
  Users,
  Utensils,
  Music,
  Camera,
  Star
} from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: "4:00 PM",
    title: "Wedding Ceremony Begins",
    description: "The celebration of love starts",
    icon: Heart
  },
  {
    time: "4:30 PM", 
    title: "Bride & Groom Entrance",
    description: "The magical moment arrives",
    icon: Users
  },
  {
    time: "6:00 PM",
    title: "Dinner Reception",
    description: "Delicious feast with family and friends",
    icon: Utensils
  },
  {
    time: "8:00 PM",
    title: "After Party",
    description: "Dancing and celebration continues",
    icon: Music
  },
  {
    time: "9:00 PM",
    title: "Photography Session",
    description: "Capture precious memories",
    icon: Camera
  },
  {
    time: "11:00 PM",
    title: "Grand Finale",
    description: "A perfect end to a perfect day",
    icon: Star
  }
];

const WeddingSchedule = () => {
  return (
    <section className="py-16 px-4 bg-gradient-sunset">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4 animate-fade-in">
            Our Special Day
          </h2>
          <p className="text-lg text-muted-foreground font-serif">
            Join us as we celebrate our love story
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary opacity-30"></div>
          
          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'} max-w-md`}>
                  <div className="bg-card shadow-soft rounded-2xl p-6 transition-elegant hover:shadow-romantic">
                    <div className="text-primary font-bold text-lg mb-2 font-serif">
                      {item.time}
                    </div>
                    <h3 className="font-script text-2xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="bg-primary rounded-full p-4 shadow-elegant animate-glow">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 max-w-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingSchedule;