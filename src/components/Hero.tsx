import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-eco-light via-white to-eco-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-eco-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-eco-accent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Чистая
                <span className="text-eco-primary"> Москва</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Вместе делаем Серебряный бор чище! Присоединяйтесь к
                экологическому движению за чистую природу.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">2x</div>
                <div className="text-sm text-gray-600">дня в неделю</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">100+</div>
                <div className="text-sm text-gray-600">участников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">1</div>
                <div className="text-sm text-gray-600">большой парк</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-eco-primary hover:bg-eco-accent text-white px-8 py-4 text-lg font-semibold"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться в Telegram
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-eco-primary text-eco-primary hover:bg-eco-light px-8 py-4 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-eco-primary/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-center h-80 bg-gradient-to-br from-eco-light to-eco-primary/20 rounded-xl">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🌳</div>
                    <div className="text-4xl">👧</div>
                    <div className="text-2xl">🌿</div>
                    <p className="text-eco-dark font-medium">
                      Девочка играет в чистом парке
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-eco-primary text-white p-3 rounded-full shadow-lg animate-bounce">
              <Icon name="Leaf" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-eco-accent text-white p-3 rounded-full shadow-lg animate-pulse">
              <Icon name="Recycle" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
