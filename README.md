# Event Manager Challenge

Test technique suivant l'entrevue chez Kumojin.

## Notes
Le projet EventManager est composé par un système de gestion d’événements, l’architecture est composé par trois applications indépendantes, AuthProvider pour gérer la distribution de Jwt tokens , EventManagerApi pour gérer les opérations de création d’évènements et le portail pour l’interface avec l’usager.

### Backend stack .Net Core
* [.Net Core](https://dotnet.microsoft.com/download) - Application framework
* [Nuget](https://www.nuget.org) - Dependency Management
* [Xunit](https://xunit.net/)  - Test Framework
* [Docker](https://docs.docker.com) - 

### Backend stack Java Spring Boot
* [Spring Boot](https://spring.io/projects/spring-boot) - Application framework
* [Maven](https://maven.apache.org/) - Dependency Management
* [Junit](https://junit.org/junit5/)  - Test Framework
* [H2](https://www.h2database.com/html/main.html) - InMemory DataBase
* [Docker](https://docs.docker.com)  

### Frontend stack
* [Rectjs](https://reactjs.org/) – Frontend framework
* [Material Ui](https://mui.com/) Ui Library
* [Momentjs]( https://momentjs.com/) TimeZone Library
* [Jestjs]( https://jestjs.io/) Test Framework


## Executer le projet avec Docker

### Tout le projet

1. Vouz devez executer à partir de /Kumojin

Pour le backend Spring Boot

2. Executer `docker-compose -f docker-compose.spring.yml up`

Pour le backend .Net Core

2. Executer `docker-compose -f docker-compose.net.yml up`

### Container Frontend 

1. À partir de /Kumojin , executer `cd frontend`

2. executer le commande suivante pour faire le build `docker build -t event-manager-api:dev .`

3. Pour débuter le container, executer `docker container run -p 3000:3000 event-manager-app`

4. Allez sur http://localhost:3000/

### Containers Backend 

AuthProvider - .Net Core

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallenge/AuthProvider`

2. executer le commande suivante pour faire le build `docker build -t authprovider .`

3. Pour débuter le container, executer `docker run -d -p  5000:5000 --name authprovider authprovider`

4. Vous pouvez faire un request de token par postman sur http://localhost:5000/api/auth

AuthProvider - Spring Boot

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallange-Java/AuthProvider`

2. executer le commande pour génerer le .jar `mvn package`

3. executer le commande suivante pour faire le build `docker build -t authprovider-spring .`

4. Pour débuter le container, executer `docker run -d -p  5000:5000 --name authprovider-spring authprovider-spring`

5. Vous pouvez faire un request de token par postman sur http://localhost:5000/api/auth

EventManagerApi - .Net Core

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallenge/EventsManagerApi`

2. executer le commande suivante pour faire le build `docker build -t eventmanagerapi .`

3. Pour débuter le container, executer `docker run -d -p  6001:6001 --name eventmanagerapi eventmanagerapi`

4. Vous pouvez faire des requisitions GET et POST par postman sur http://localhost:6001/api/eventmanager/

EventManagerApi - Spring Boot

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallange-Java/eventmanager-api`

2. executer le commande pour génerer le .jar `mvn package`

3. executer le commande suivante pour faire le build `docker build -t eventmanagerapi-spring .`

4. Pour débuter le container, executer `docker run -d -p  6001:6001 --name eventmanagerapi-spring eventmanagerapi-spring`

5. Vous pouvez faire des requisitions GET et POST par postman sur http://localhost:6001/api/eventmanager/


## Executer le frontend & backend manuellement

### Frontend

1. À partir de /Kumojin, executer `cd frontend`
2. executer `npm install`
3. executer `npm start`

### Backend

.Net Core

EventsManagerApi

1. À partir de /Kumojin, executer `cd backend`
2. executer `dotnet run --project ./EventsManagerChallenge/EventsManagerApi/EventsManagerApi.csproj`

AuthProvider

1. À partir de /Kumojin, executer `cd backend`
2. executer `dotnet run --project ./EventsManagerChallenge/AuthProvider/AuthProvider.csproj`

Spring Boot

EventsManagerApi

1. À partir de /Kumojin, executer `cd backend\EventsManagerChallange-Java\eventmanager-api\`
2. executer `mvn spring-boot:run`

AuthProvider

1. À partir de /Kumojin, executer `cd backend\EventsManagerChallange-Java\AuthProvider\`
2. executer `mvn spring-boot:run`

## Executer les tests

### Frontend

1. À partir de /Kumojin, executer `cd frontend`
2. executer `yarn test` ou `npm test`

### Backend

.Net Core

1. À partir de /Kumojin, executer `cd backend`
2. executer `dotnet test ./EventsManagerChallenge/EventsManager.Test/EventsManager.Test.csproj`

Spring Boot

1. 1. À partir de /Kumojin, executer `cd backend\EventsManagerChallange-Java\eventmanager-api\`
2. executer `mvn test`
