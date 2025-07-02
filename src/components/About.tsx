import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function About() {
  const activities = [
    {
      icon: "Calendar",
      title: "Каждые два дня в неделю",
      description: "Регулярная уборка мусора в парке Серебряный бор",
    },
    {
      icon: "Gift",
      title: "Эко-щётка из бамбука",
      description: "Каждый участник получает экологичный инструмент",
    },
    {
      icon: "Trash2",
      title: "Сортировка мусора",
      description: "Раз в две недели в субботу сортируем мусор",
    },
    {
      icon: "Recycle",
      title: "Переработка пластика",
      description: "В воскресенье работаем с пластиковыми отходами",
    },
    {
      icon: "Users",
      title: "Для всех возрастов",
      description: "Участвовать могут люди любого возраста",
    },
    {
      icon: "MessageSquare",
      title: "Telegram чат",
      description: 'Все новости и сборы обсуждаем в "Чистая Москва"',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
            О проекте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наша миссия — сделать Серебряный бор чище и красивее. За один месяц
            мы можем очистить достаточно огромный парк, работая вместе и
            организованно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="border-eco-primary/20 hover:border-eco-primary/40 transition-colors duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-eco-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={activity.icon as any}
                    size={32}
                    className="text-eco-primary"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location highlight */}
        <div className="bg-gradient-to-r from-eco-light to-eco-primary/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-eco-primary/20 rounded-full p-4">
              <Icon name="MapPin" size={40} className="text-eco-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Парк Серебряный бор
              </h3>
              <p className="text-gray-600 text-lg">
                Один из самых красивых природных уголков Москвы. Наша цель —
                сохранить его красоту для будущих поколений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
