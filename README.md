# Asteroids API
 Microservices for Asteroid application build with Nest.js 

# 🚀 Microservices App Documentation

## Asteroids Module

### 🛰️ `asteroids.controller.ts`

#### Endpoints:

- `GET /asteroids/update`: Update all asteroids in the database.
- `GET /asteroids/all`: Retrieve all asteroids.
- `GET /asteroids/feed`: Retrieve asteroids based on date query.
- `GET /asteroids/:id`: Retrieve information about a specific asteroid.

### 🚀 `asteroids.service.ts`

#### Methods:

- `updateDb(asteroids: AsteroidDto[]): Promise<number>`: Update database with provided asteroids.
- `getBy(searchParams: GetByQueryType): Promise<Asteroids[]>`: Retrieve asteroids based on query.
- `findAll(): Promise<Asteroids[]>`: Retrieve all asteroids.
- `findOne(id: number): Promise<Asteroids | null>`: Retrieve information about a specific asteroid.

## Auth Module

### 👤 `users.controller.ts`

#### Endpoints:

- `POST /auth/signup`: Create a new user.
- `POST /auth/login`: User login.
- `GET /auth/user`: Retrieve user information (requires authentication).

### 🔐 `users.service.ts`

#### Methods:

- `signup(userObject: CreateUserDto): Promise<any>`: Create a new user.
- `login(userLoginObject: LoginUserDto): Promise<any>`: User login.
- `findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<any>`: Retrieve user information.
- `findAll(params: Prisma.UserWhereInput): Promise<User[]>`: Retrieve a list of users.

## Users Module

### ⭐ `favorites.controller.ts`

#### Endpoints:

- `POST /favorites/add`: Add an asteroid to user favorites (requires authentication).
- `GET /favorites`: Retrieve user favorite asteroids.
- `DELETE /favorites/:id`: Remove an asteroid from user favorites (requires authentication).

### 💔 `favorites.service.ts`

#### Methods:

- `add(favoriteDto: FavoriteDto): Promise<any>`: Add an asteroid to user favorites.
- `findAll(): Promise<any>`: Retrieve user favorite asteroids.
- `remove(favoriteDto: FavoriteDto): Promise<any>`: Remove an asteroid from user favorites.

## Prisma

### 🛠️ `schema.prisma`

#### Models:

- `User`: User model with `id`, `name`, `email`, `password`, and `created_at`.
- `Asteroids`: Asteroids model with `id`, `name`, `diameter`, `discovered`, and `comment`.
- `Favorites`: Favorites model with `id`, `user_id`, and `asteroid_id`.

## 📝 Instalation

### Commands
- `yarn` or `npm install`
- create `.env` and copy `.env.example` content
- Init prisma db  `npx prisma init`
- Generate prisma files  `npx prisma generate`

### Running services
localhost 
- Auth API Serivce : `yarn start-auth`  (port 3001)
- Users API Serivce : `yarn start-users` (port 3002)
- Asteroids API Serivce : `yarn start-ast`   (port 3003)


Note:

For more information please contact at kenneth.solidity@gmail.com


