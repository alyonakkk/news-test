###Версии проекта:
```
node - v18.12.1
yarn - v1.22.19
```

###Технологии:
```
- react
- redux toolkit
- webpack v5
- react router dom v6
- typescript
- tailwind
- daisyUI
- react-hook-form, react-input-mask, yup
- eslint 
- prettier
```

###Команды проекта:
```
yarn run start - запуск проекта

yarn run build:dev - билд проекта в дев версии

yarn run build:prod - билд проекта в прод версии

yarn run lint - запуск eslint
```

###Запуск проекта:
1. Установить зависимости
```
yarn install
```
2. Запустить приложение
```
yarn run start
```

###Авторизация:
Логин - user

Пароль - 12345

###Архитектура проекта:

В проекте используется архитектура [Feature-Sliced Design](https://feature-sliced.design/ru/docs)

```
└── src/
    ├── app/                    # Инициализирующая логика приложения
    |    ├── providers          # Провайдеры приложения (тема, роутинг и тд)
    |    ├── styles             # Глобальные стили приложения
    |        ├── main.css      
    |    ├── types              # Глобальный d.ts
    |        ├── react.d.ts           
    |    └── index.tsx          # Энтрипоинт для подключения приложения
    ├── pages/                  # Страницы
    ├── widgets/                # Виджеты
    ├── features/               # Фичи
    ├── entities/               # Сущности
    ├── shared/                 # Переиспользуемые 
        ├── api/                # Моки, типизация апи
        ├── assets/             # Иконки/изображения
        ├── config/              # Конфиги
        ├── lib/                # Глобальные хелперы/константы
        ├── ui/                 # Переиспользуемые компоненты
    └── index.tsx               # Подключение и рендеринг приложения
```