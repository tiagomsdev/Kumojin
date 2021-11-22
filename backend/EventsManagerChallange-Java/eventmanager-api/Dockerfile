FROM openjdk:11
LABEL maintainer="tiagomsdev"
ADD target/eventmanager-api-0.0.1-SNAPSHOT.jar springboot-docker-eventmanager-api.jar
ENTRYPOINT ["java", "-jar", "springboot-docker-eventmanager-api.jar"]