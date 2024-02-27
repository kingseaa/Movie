# Use a base image with Java 11 and Maven pre-installed
FROM maven:3.8.3-openjdk-11 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project file
COPY pom.xml .

# Download dependencies and build the application
RUN mvn dependency:go-offline

# Copy the application source code
COPY src ./src

# Package the application
RUN mvn package -DskipTests

# Use a smaller base image for runtime
FROM adoptopenjdk/openjdk11:alpine-jre

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port that the Spring Boot application will run on
EXPOSE 8080

# Define the command to run the application when the container starts
CMD ["java", "-jar", "app.jar"]
