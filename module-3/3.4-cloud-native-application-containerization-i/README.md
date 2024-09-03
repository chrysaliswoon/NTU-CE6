# Brief

- Research the basics of containerization and Docker.
- Create a code repository for the application on a version control system such as Git.
- Create a simple "Hello World" application in a programming language of your choice.
- Use Docker to create a container image of the "Hello World" application. Or you can use the sample app that available.
- Use the command line to run the container and verify that the application works as expected.
- Submit the repository link on BlackBoard.

# Basics of Containerization and Docker
Containerization is a technology that allows you to package and run applications in isolated environments called containers. These containers include everything needed to run the application: the code, runtime, libraries, and system tools. This ensures that the application runs consistently regardless of where it is deployed.

Docker is a popular platform that simplifies the process of containerization. Docker allows you to create, deploy, and run containers using Docker images.

## Docker Build & Run

To build the docker image:

```sh
docker build -t hello-world-app .
```

To run the docker image:

```sh
docker run hello-world-app
```