# 🚀 TodoFlow - Collaborative TODO Platform (Microservices)

## 👥 Équipe

Projet réalisé dans le cadre du module :

**Web Avancé & Microservices**

---

# 📌 Objectif

Développer une plateforme collaborative de gestion de tâches basée sur une architecture Microservices.

Chaque service possède :

- sa propre logique métier
- sa propre base de données
- son propre Dockerfile
- son propre NGINX
- une communication via l'API Gateway

---

# 🏗️ Architecture globale

```
                         Frontend (React)

                               │

                               ▼

                    API Gateway (NGINX)

                               │

──────────────────────────────────────────────────────────

      │            │            │            │

      ▼            ▼            ▼            ▼

 Auth-Service   User-Service   TODO-Service  Category-Service

      │            │            │            │

 PostgreSQL    PostgreSQL     MongoDB      MongoDB

──────────────────────────────────────────────────────────

      │                        │

      ▼                        ▼

 Comment-Service        Statistics-Service

      │                        │

 MongoDB               PostgreSQL

──────────────────────────────────────────────────────────

                    (Bonus)

             Notification-Service

                     MongoDB
```

---

# 📂 Structure du projet

```
TodoFlow/

│

├── auth-service/

├── user-service/

├── todo-service/

├── category-service/

├── comment-service/

├── statistics-service/

├── notification-service/

├── gateway/

├── frontend/

├── docs/

├── docker-compose.yml

├── .gitignore

└── README.md
```

---

# 🛠️ Technologies

## Backend

- Node.js
- TypeScript

### Frameworks

- NestJS
- Express.js

### Base de données

- PostgreSQL
- MongoDB

### ORM

- Prisma
- Mongoose

### Authentification

- JWT
- Passport

### Conteneurisation

- Docker
- Docker Compose

### Reverse Proxy

- NGINX

### Frontend

- React

---





---


---

# 📌 Règles de développement

Chaque microservice doit contenir :

```
src/

prisma/

Dockerfile

package.json

README.md

test/
```

Chaque service doit disposer :

- de sa propre base de données
- de son Dockerfile
- de ses routes REST
- de sa documentation

---

# 🌿 Workflow Git

Avant de commencer :

```
git pull origin main
```

Créer une branche :

```
git checkout -b feature/auth-service
```

Après modification :

```
git add .

git commit -m "Description"

git push origin feature/auth-service
```

Puis créer une Pull Request vers **main**.

Ne jamais développer directement sur **main**.

---

# 📋 Ordre de développement

1. Auth-Service
2. User-Service
3. Category-Service
4. TODO-Service
5. Comment-Service
6. Statistics-Service
7. Notification-Service
8. API Gateway
9. Frontend
10. Docker Compose
11. Tests
12. Déploiement

---

# ⚙️ Installation

Cloner le projet

```
git clone https://github.com/Dalalmachehoul1/TodoFlow-Microservices.git
```

Entrer dans le projet

```
cd TodoFlow-Microservices
```

Installer les dépendances

Exemple :

```
cd auth-service
npm install

cd ../user-service
npm install
```

Puis lancer Docker

```
docker compose up --build
```

---

# 📌 État actuel

✅ Architecture créée

✅ Auth-Service en cours

🟡 User-Service en cours

⚪ TODO-Service

⚪ Category-Service

⚪ Comment-Service

⚪ Statistics-Service

⚪ Notification-Service

⚪ Gateway

⚪ Frontend

---

Bon développement à toute l'équipe 🚀
