# Start with a base image containing Java runtime
FROM maven:3.6.3-openjdk-21

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file to the working directory
COPY pom.xml .

# Download dependencies as specified in pom.xml
RUN mvn dependency:go-offline -B

# Copy the rest of the application to the working directory
COPY src src

# Package the application
RUN mvn package

# Run the jar file 
ENTRYPOINT ["java","-jar","target/union_notes-0.0.1-SNAPSHOT.jar"]
