import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2088",
      price: "₽1,999",
      originalPrice: "₽2,499",
      discount: "-20%",
      rating: "95%",
      tags: ["Action", "RPG", "Sci-Fi"],
      image: "/img/7e0102ee-ec9a-4412-8311-e65374e348f2.jpg",
    },
    {
      id: 2,
      title: "Space Explorer VR",
      price: "₽899",
      originalPrice: null,
      discount: null,
      rating: "87%",
      tags: ["VR", "Adventure", "Space"],
      image: "/img/83ad5fd2-382a-48b1-9fc9-4fd37fa4cb53.jpg",
    },
    {
      id: 3,
      title: "Medieval Legends",
      price: "₽649",
      originalPrice: "₽1,299",
      discount: "-50%",
      rating: "92%",
      tags: ["Strategy", "Medieval", "Multiplayer"],
      image: "/img/db575584-2741-4a45-a987-240b7434bc1e.jpg",
    },
  ];

  const categories = [
    { name: "Главная", icon: "Home" },
    { name: "Магазин", icon: "Store" },
    { name: "Библиотека", icon: "Library" },
    { name: "Сообщество", icon: "Users" },
    { name: "Друзья", icon: "UserPlus" },
    { name: "Поддержка", icon: "HelpCircle" },
  ];

  return (
    <div className="min-h-screen bg-steam-darkblue">
      {/* Header */}
      <header className="bg-steam-dark border-b border-steam-navy">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-steam-blue">GAMESTORE</h1>
              <nav className="hidden md:flex space-x-6">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="text-steam-lightgray hover:text-steam-blue hover:bg-steam-navy"
                  >
                    <Icon name={category.icon} size={16} className="mr-2" />
                    {category.name}
                  </Button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск игр..."
                  className="w-64 bg-steam-navy border-steam-gray text-steam-lightgray placeholder:text-steam-gray"
                />
                <Icon
                  name="Search"
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-steam-gray"
                />
              </div>
              <Button className="bg-steam-blue hover:bg-steam-blue/80 text-white">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steam-dark to-steam-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Добро пожаловать в мир игр
          </h2>
          <p className="text-xl text-steam-lightgray mb-8 max-w-2xl mx-auto">
            Покупайте, скачивайте и играйте в лучшие игры. Находите новых друзей
            и создавайте незабываемые моменты.
          </p>
          <Button
            size="lg"
            className="bg-steam-blue hover:bg-steam-blue/80 text-white px-8 py-3 text-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать клиент
          </Button>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-white">Рекомендуемые игры</h3>
          <Button
            variant="outline"
            className="border-steam-blue text-steam-blue hover:bg-steam-blue hover:text-white"
          >
            Посмотреть все
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="bg-steam-navy border-steam-gray hover:border-steam-blue transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {game.discount && (
                    <Badge className="absolute top-3 left-3 bg-steam-blue text-white">
                      {game.discount}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-steam-dark/80 px-2 py-1 rounded flex items-center">
                    <Icon
                      name="ThumbsUp"
                      size={14}
                      className="mr-1 text-steam-blue"
                    />
                    <span className="text-steam-lightgray text-sm">
                      {game.rating}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white mb-2">{game.title}</CardTitle>
                <CardDescription className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-steam-dark text-steam-lightgray"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {game.originalPrice && (
                    <span className="text-steam-gray line-through text-sm">
                      {game.originalPrice}
                    </span>
                  )}
                  <span className="text-steam-blue font-bold text-lg">
                    {game.price}
                  </span>
                </div>
                <Button className="bg-steam-blue hover:bg-steam-blue/80 text-white">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-steam-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Быстрый доступ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-steam-navy border-steam-gray hover:border-steam-blue transition-all duration-300 cursor-pointer text-center p-6">
              <Icon
                name="Library"
                size={48}
                className="mx-auto mb-4 text-steam-blue"
              />
              <h4 className="text-white font-semibold mb-2">Моя библиотека</h4>
              <p className="text-steam-gray text-sm">156 игр</p>
            </Card>
            <Card className="bg-steam-navy border-steam-gray hover:border-steam-blue transition-all duration-300 cursor-pointer text-center p-6">
              <Icon
                name="Users"
                size={48}
                className="mx-auto mb-4 text-steam-blue"
              />
              <h4 className="text-white font-semibold mb-2">Друзья</h4>
              <p className="text-steam-gray text-sm">23 онлайн</p>
            </Card>
            <Card className="bg-steam-navy border-steam-gray hover:border-steam-blue transition-all duration-300 cursor-pointer text-center p-6">
              <Icon
                name="Download"
                size={48}
                className="mx-auto mb-4 text-steam-blue"
              />
              <h4 className="text-white font-semibold mb-2">Загрузки</h4>
              <p className="text-steam-gray text-sm">2 активных</p>
            </Card>
            <Card className="bg-steam-navy border-steam-gray hover:border-steam-blue transition-all duration-300 cursor-pointer text-center p-6">
              <Icon
                name="MessageSquare"
                size={48}
                className="mx-auto mb-4 text-steam-blue"
              />
              <h4 className="text-white font-semibold mb-2">Чат</h4>
              <p className="text-steam-gray text-sm">5 сообщений</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steam-dark border-t border-steam-navy py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-white font-bold mb-4">GAMESTORE</h5>
              <p className="text-steam-gray text-sm">
                Ваша главная платформа для покупки и игры в лучшие игры.
              </p>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Игры</h6>
              <ul className="space-y-2 text-steam-gray text-sm">
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Популярное
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Скидки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Сообщество</h6>
              <ul className="space-y-2 text-steam-gray text-sm">
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Группы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    События
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-3">Поддержка</h6>
              <ul className="space-y-2 text-steam-gray text-sm">
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-steam-blue">
                    Возврат
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-steam-navy mt-8 pt-8 text-center">
            <p className="text-steam-gray text-sm">
              © 2024 GameStore. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
