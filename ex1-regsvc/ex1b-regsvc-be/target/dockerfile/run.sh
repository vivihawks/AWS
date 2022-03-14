#!/bin/sh

echo "********************************************************"
echo "Starting Registration Service "
echo "********************************************************"
java -Djava.security.egd=file:/dev/./urandom -jar /usr/local/regsvc-be/registration-service-0.0.1-SNAPSHOT.jar
