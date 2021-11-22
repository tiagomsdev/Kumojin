FROM openjdk:11
LABEL maintainer="tiagomsdev"
ADD target/AuthProvider-0.0.1-SNAPSHOT.jar springboot-docker-authprovider.jar
ENTRYPOINT ["java", "-jar", "springboot-docker-authprovider.jar"]