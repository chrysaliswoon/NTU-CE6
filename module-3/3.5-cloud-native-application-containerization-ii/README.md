# Brief

- Create a new repository
- Add sample code to your repository including the dockerfile on it
- Update your repository Readme.md file to have step-by-step how to create an image until it will be deployed to AWS ECR


## Getting Started

A simple Node.js application using Express, containerized with Docker and deployed to AWS ECR.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Docker](https://www.docker.com/products/docker-desktop) installed
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) installed and configured
- [AWS Account](https://aws.amazon.com/)

### 1. Prepare Your Node.js Application

First, ensure you have a simple Node.js application ready. If you don’t have one, follow these steps to create one:

**Create the application files:**

1. **Create a project directory:**

   ```sh
   mkdir my-node-app
   cd my-node-app
   ```

2. **Initialize a new Node.js project:**

   ```sh
   npm init -y
   ```

3. **Install Express:**

   ```sh
   npm install express
   ```

4. **Create `index.js`:**

   ```js
   // index.js
    'use strict';

    const express = require('express');

    // Constants
    const PORT = 8080;
    const HOST = '0.0.0.0';
    const OS = require('os');
    const ENV = 'DEV';


    // App
    const app = express();
    app.get('/', (req, res) => {
    res.statusCode = 200;
    const msg = 'Hello from Node!';
    res.send(msg);
    });

    app.get('/test', (req, res) => {
    res.statusCode = 200;
    const msg = 'Hello from /test Node!';
    res.send(msg);
    });

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
   ```

### 2. Create the Dockerfile

In your project directory, create a file named `Dockerfile` with the following content:

```Dockerfile
# Use the official Node.js image as a base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /my-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
```

### 3. Build the Docker Image

1. **Open a terminal and navigate to your project directory:**

   ```sh
   cd path/to/my-node-app
   ```

2. **Build the Docker image:**

   ```sh
   docker build -t hello-app .
   ```

   This command will build the Docker image with the tag `hello-app`.

3. **Verify the image creation:**

   ```sh
   docker images
   ```

   You should see `hello-app` listed among your Docker images.

### 4. Set Up AWS ECR

1. **Install and configure the AWS CLI:**

   If you haven't installed the AWS CLI, follow the instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html). Configure it with your credentials:

   ```sh
   aws configure
   ```

2. **Create an ECR repository:**

   ```sh
   aws ecr create-repository --repository-name my-node-app
   ```

   Note the `repositoryUri` from the output, which will look something like `123456789012.dkr.ecr.us-west-1.amazonaws.com/my-node-app`.

### 5. Authenticate Docker to Your ECR Registry

1. **Authenticate Docker with your ECR registry:**

   ```sh
   aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com
   ```

   Replace `your-region` with your AWS region (e.g., `us-west-1`), and `your-account-id` with your AWS account ID.

### 6. Tag and Push the Docker Image to ECR

1. **Tag the Docker image:**

   ```sh
   docker tag my-node-app:latest your-account-id.dkr.ecr.your-region.amazonaws.com/my-node-app:latest
   ```

   Replace `your-account-id` and `your-region` with your actual AWS account ID and region.

2. **Push the Docker image to ECR:**

   ```sh
   docker push your-account-id.dkr.ecr.your-region.amazonaws.com/my-node-app:latest
   ```

### 7. Verify the Image is in ECR

1. **Log in to the AWS Management Console.**

2. **Navigate to ECR:**

   Go to the ECR service and select your repository (`my-node-app`). You should see your image listed there.

### 8. Deploy the Docker Image

You can deploy your Docker image using various AWS services like ECS (Elastic Container Service) or EKS (Elastic Kubernetes Service). Here’s a brief overview of deploying to ECS:

1. **Create an ECS Cluster:**

   - Go to the ECS service in the AWS Management Console.
   - Create a new cluster (e.g., an EC2 Linux + Networking cluster).

2. **Create a Task Definition:**

   - Define a new task using the image from ECR.
   - Configure container settings, including port mappings.

3. **Run the Task:**

   - Launch your task definition in your ECS cluster.

4. **Access the Application:**

   - Ensure your ECS service is running in a public subnet and has an associated security group allowing inbound traffic on port 3000.
   - Access your application via the public IP of your ECS instances or through an Application Load Balancer if set up.
