# Web Final Project

To setup backend run the following commands:

```bash
composer install
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

Then run the server:

```bash
php -S localhost:8000
```

To setup frontend:

```bash
cd front
npm install
npm run start
```