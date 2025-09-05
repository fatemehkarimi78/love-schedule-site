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
    time: "۱۹:۰۰",
    title: "شروع مراسم",
    description: "آغاز جشن عشق و زندگی",
    icon: Heart
  },
  {
    time: "۲۰:۰۰", 
    title: "ورود عروس و داماد",
    description: "لحظه جادویی فرا می‌رسد",
    icon: Users
  },
  {
    time: "۲۰:۳۰",
    title: "شام و پذیرایی",
    description: "ضیافت لذیذ با خانواده و دوستان",
    icon: Utensils
  },
  {
    time: "۲۲:۰۰",
    title: "رقص و جشن", 
    description: "رقص و جشن ادامه دارد",
    icon: Music
  },
  {
    time: "۲۳:۰۰",
    title: "عکاسی یادگاری",
    description: "ثبت خاطرات گرانبها",
    icon: Camera
  },
  {
    time: "۰۱:۰۰",
    title: "پایان عالی",
    description: "پایان کامل برای روزی کامل",
    icon: Star
  }
];

const WeddingSchedule = () => {
  return (
    <section className="py-16 px-4 bg-gradient-sunset">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 rtl">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4 animate-fade-in">
            روز ویژه ما
          </h2>
          <p className="text-lg text-muted-foreground font-persian">
            به ما در جشن داستان عشقمان بپیوندید
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
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'} max-w-md rtl`}>
                  <div className="bg-card shadow-soft rounded-2xl p-6 transition-elegant hover:shadow-romantic">
                    <div className="text-primary font-bold text-lg mb-2 font-persian">
                      {item.time}
                    </div>
                    <h3 className="font-script text-2xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-persian">
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