#!/bin/sh

echo "********************************************************"
echo "Starting Registration Service "
echo "********************************************************"
java -Djava.security.egd=file:/dev/./urandom -jar /usr/local/regsvc-be/@project.build.finalName@.jar
