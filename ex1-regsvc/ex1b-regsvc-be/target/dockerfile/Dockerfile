FROM openjdk:8-jdk-alpine
RUN  apk update && apk upgrade && apk add netcat-openbsd
RUN mkdir -p /usr/local/regsvc-be
ADD registration-service-0.0.1-SNAPSHOT.jar /usr/local/regsvc-be/
ADD run.sh run.sh
RUN chmod +x run.sh
#Ensuring the run.sh is in UNIX encoding. Otherwise run.sh will not be executed by Docker
RUN sed -i 's/\r$//' run.sh  &&  chmod +x run.sh
CMD ./run.sh
