# Brief

- Discuss within your group about what is the project (e.g. banking application, e-commerce application etc.) that you will run.
- Discuss withn your group about what methodology (e.g. Agile or waterfall or a hybrid) that you will use to run that project and why
- When it comes to deployment, what kind of software deployment methodologies (e.g. Blue-Green, Rolling etc.) would you use and why
- Discuss what CI/CD Pipeline tools (AWS or third-party tools) that you will use.

## Report: Methodologies and Tools for Developing a Banking Application

### Project Management Methodology

#### Chosen Methodology: Agile

#### Justification:
1. **Flexibility and Adaptability**: Agile methodology is highly adaptable to changes. Banking applications often need to respond to regulatory changes, customer feedback, and technological advancements promptly.
2. **Incremental Delivery**: Agile allows for incremental delivery of features. This ensures that core functionalities can be deployed early, and additional features can be added iteratively.
3. **Customer Collaboration**: Agile emphasizes close collaboration with stakeholders. In the banking sector, it's crucial to ensure that the application meets the needs of both the business and its customers.
4. **Risk Management**: Frequent iterations and continuous feedback help in identifying and mitigating risks early in the development cycle.
5. **Improved Quality**: Continuous testing and integration are integral parts of Agile, ensuring higher quality of the final product.

### Deployment Methodology

#### Chosen Methodology: Blue-Green Deployment

#### Justification:
1. **Zero Downtime**: Blue-Green deployment minimizes downtime, which is critical for banking applications that need to be available 24/7.
2. **Easy Rollback**: In case of deployment failures or critical bugs, rolling back to the previous version is straightforward, reducing the impact on end-users.
3. **Improved Testing**: It allows testing in a production-like environment (green) before switching traffic from the current environment (blue). This ensures that all features and fixes are thoroughly validated.
4. **Reduced Risk**: The ability to switch back to the previous environment in case of issues significantly reduces the risk associated with deployments.

### CI/CD Pipeline Tools

#### Tools Selection

1. **AWS CodePipeline**
   - **Integration**: Seamlessly integrates with other AWS services such as CodeBuild, CodeDeploy, and CodeCommit.
   - **Scalability**: AWS CodePipeline is highly scalable and can handle large-scale deployments typical in a banking environment.
   - **Security**: AWS provides robust security features, including IAM roles and policies, which are essential for sensitive banking applications.

2. **Jenkins**
   - **Flexibility**: Jenkins supports a wide range of plugins and integrations, making it adaptable to various build, test, and deployment requirements.
   - **Community Support**: Jenkins has a large community and extensive documentation, making it easier to find solutions to potential issues.
   - **Customization**: Jenkins offers high customization, allowing for tailored CI/CD pipelines that meet specific project needs.

3. **Docker**
   - **Containerization**: Docker enables consistent development, testing, and deployment environments, which reduces the "it works on my machine" problem.
   - **Microservices Support**: Docker is ideal for microservices architectures, allowing for the independent deployment and scaling of different application components.
   - **Portability**: Docker containers can run on any environment that supports Docker, ensuring consistency across development, testing, and production environments.

4. **Kubernetes**
   - **Orchestration**: Kubernetes excels in container orchestration, providing automated deployment, scaling, and management of containerized applications.
   - **Self-Healing**: Kubernetes automatically replaces failed containers, ensuring high availability.
   - **Service Discovery and Load Balancing**: Kubernetes offers built-in service discovery and load balancing, essential for distributing traffic across multiple instances.

### CI/CD Pipeline Design

1. **Source Stage**: 
   - **Tool**: AWS CodeCommit or GitHub.
   - **Action**: Source code is committed to the repository.

2. **Build Stage**:
   - **Tool**: AWS CodeBuild or Jenkins.
   - **Action**: Code is built and unit tests are executed. Artifacts are created if the build succeeds.

3. **Test Stage**:
   - **Tool**: Jenkins or AWS CodePipeline.
   - **Action**: Automated tests, including integration and security tests, are run.

4. **Deploy to Staging**:
   - **Tool**: AWS CodeDeploy or Jenkins with Kubernetes.
   - **Action**: Application is deployed to a staging environment using Blue-Green deployment for final testing.

5. **Approval Stage**:
   - **Tool**: AWS CodePipeline.
   - **Action**: Manual approval step to ensure readiness for production deployment.

6. **Deploy to Production**:
   - **Tool**: AWS CodeDeploy with Blue-Green deployment strategy.
   - **Action**: Deploy the application to the production environment, switch traffic to the new environment, and monitor for issues.

### Conclusion

For developing a banking application, using Agile methodology ensures flexibility, continuous feedback, and high-quality delivery. Blue-Green deployment provides zero downtime and easy rollback capabilities, essential for banking applications. A combination of AWS CodePipeline, Jenkins, Docker, and Kubernetes offers a robust, scalable, and secure CI/CD pipeline, ensuring smooth and efficient application delivery.