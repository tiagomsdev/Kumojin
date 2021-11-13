# Event Manager Challenge

Test technique suivant l'entrevue chez Kumojin.

## Notes
Le projet EventManager est composé par un système de gestion d’événements, l’architecture est composé par trois applications indépendantes, AuthProvider pour gérer la distribution de Jwt tokens , EventManagerApi pour gérer les opérations de création d’évènements et le portail pour l’interface avec l’usager.

### Backend stack
* [.Net Core](https://dotnet.microsoft.com/download) - Application framework
* [Nuget](https://www.nuget.org) - Dependency Management
* [Xunit](https://xunit.net/)  - Test Framework
* [Docker](https://docs.docker.com)

### Frontend stack
* [Rectjs](https://reactjs.org/) – Frontend framework
* [Material Ui](https://mui.com/) Ui Library
* [Momentjs]( https://momentjs.com/) TimeZone Library
* [Jestjs]( https://jestjs.io/) Test Framework


## Executer le projet avec Docker

### Tout le projet

1. Vouz devez executer à partir de /Kumojin

2. Run `docker-compose up`

### Container Frontend 

1. à partir de /Kumojin , executer `cd frontend`

2. executer le commande suivante pour faire le build `docker build -t frontend-kumojin-thomas:dev .`

3. Pour débuter le container, executer `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:80 frontend-kumojin-thomas:dev`

4. Allez sur localhost:8080

### Containers Backend 

AuthProvider

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallenge/AuthProvider`

2. executer le commande suivante pour faire le build `docker build -t authprovider .`

3. Pour débuter le container, executer `docker run -d -p  5000:5000 --name authprovider authprovider`

4. Vous pouvez faire un request de token par postman sur http://localhost:5000/api/auth

EventManagerApi

1. À partir de /Kumojin, executer `cd backend/EventsManagerChallenge/EventManagerApi`

2. executer le commande suivante pour faire le build `docker build -t eventmanagerapi .`

3. Pour débuter le container, executer `docker run -d -p  6001:6001 --name eventmanagerapi eventmanagerapi`

4. Vous pouvez faire des requisitions GET et POST par postman sur http://localhost:6001/api/eventmanager/


## Executer le frontend & backend manuellement

### Frontend

1. À partir de /Kumojin, executer `cd frontend`
2. executer `npm install`
3. executer `npm start`

### Backend

1. At the root of the project, run `cd backend`
2. Run `yarn` or `npm install`
3. Run `yarn start` or `npm start`

## How to run the tests

### Frontend

1. At the root of the project, run `cd frontend`
2. Run `yarn test` or `npm test`

### Backend

1. At the root of the project, run `cd backend`
2. Run `yarn test` or `npm test`