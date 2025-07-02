import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Stats() {
  const weeklySchedule = [
    { day: "Понедельник", activity: "Уборка мусора", completed: true },
    { day: "Вторник", activity: "Отдых", completed: false },
    { day: "Среда", activity: "Уборка мусора", completed: true },
    { day: "Четверг", activity: "Отдых", completed: false },
    { day: "Пятница", activity: "Отдых", completed: false },
    { day: "Суббота", activity: "Сортировка мусора", completed: false },
    { day: "Воскресенье", activity: "Сортировка пластика", completed: false },
  ];

  const monthlyProgress = 75; // 75% месяца прошло
  const cleanedArea = 12; // 12 га очищено
  const totalArea = 16; // всего 16 га

  return (
    <section className="py-20 bg-eco-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
            Наша активность
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за нашим прогрессом в очистке Серебряного бора
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={24} className="text-eco-primary" />
                Расписание на неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      item.activity === "Отдых"
                        ? "bg-gray-50"
                        : item.completed
                          ? "bg-eco-primary/10 border-l-4 border-eco-primary"
                          : "bg-eco-accent/10 border-l-4 border-eco-accent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.activity === "Отдых"
                            ? "bg-gray-300"
                            : item.completed
                              ? "bg-eco-primary"
                              : "bg-eco-accent"
                        }`}
                      ></div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {item.day}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.activity}
                        </div>
                      </div>
                    </div>
                    {item.completed && item.activity !== "Отдых" && (
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-eco-primary"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    className="text-eco-primary"
                  />
                  Прогресс месяца
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Выполнено</span>
                      <span className="font-semibold">{monthlyProgress}%</span>
                    </div>
                    <Progress value={monthlyProgress} className="h-3" />
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-2xl font-bold text-eco-primary">
                      {Math.round(monthlyProgress * 0.3)}
                    </div>
                    <div className="text-sm text-gray-600">дней активности</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-eco-primary" />
                  Очищенная площадь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>из {totalArea} га</span>
                      <span className="font-semibold">{cleanedArea} га</span>
                    </div>
                    <Progress
                      value={(cleanedArea / totalArea) * 100}
                      className="h-3"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-eco-primary">
                        {cleanedArea}
                      </div>
                      <div className="text-xs text-gray-600">га очищено</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-eco-accent">
                        {totalArea - cleanedArea}
                      </div>
                      <div className="text-xs text-gray-600">га осталось</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
