<p align="center">
  <img width="100%" height="100%" src="https://www.influentialsoftware.com/wp-content/uploads/2022/07/Cloud-migration-influentialsoftware.png">
</p>

# Introduction

![Introduction](/module-1/image_resources/introduction(1).png)

![Introduction](/module-1/image_resources/introduction(2).png)

# Brief
Migration to cloud is not a trivial work. It involves detailed analysis in migrating large set of data, complex softwares, and sophisticated IT processes from one place to another. In this assignment, we were grouped in 3 to research on the given challenges and provide the best solutions they could garner.

# Thought Questions & Responses

### 1. What is Application Modernization?

![Application Modernization](https://www.veritis.com/wp-content/uploads/2020/09/application-modernization-process-strategy-veritis.jpg)

It is the process of updating and upgrading legacy software applications to align with modern computing technologies and business needs. This is driven by the need to keep pace with everchanging technological advancements, meet changing business requirements, and stay competitive in the digital age. 

Some aspects of application modernization include architecture modernization, cloud migration, containerization and orchestration, legacy code refactoring, UX enhancement, integration with APIs and services, security and compliance and continuous integration and delivery (CI/CD).

When we modernize an application, we could add additional features such as APIs. We can also employ some DevOps practises such as implementing an automating pipeline which will automate the running and testing of the code before proceeding with the automated deployment of the service. 

### 2. What is cloud native application?

![Cloud Native Application](https://www.oracle.com/a/ocom/img/rc24-cloud-native-evolution.jpg)

The term cloud native refers to the concept of building and running applications to take advantage of the distributed computing offered by the cloud delivery model. Cloud native apps are designed and built to exploit the scale, elasticity, resiliency, and flexibility the cloud provides.

It is a type of software application that is specifically designed and built to leverage the advantages of cloud computing such as moving from a monolithic application architecture to using microservices.

These features enable loosely coupled systems that are resilient, manageable, and observable. They allow engineers to make high-impact changes frequently and with minimal effort.

### 3. Does moving to cloud automatically grant a company the benefits of cloud(e.g. cost savings)?

![Cloud Cost Savings](https://www.cloudfuze.com/wp-content/uploads/2022/05/Cloud-Cost-optimization-strategies-1024x616.png)

Although cloud computing offers potential cost-saving benefits such as pay-as-you-go pricing models and reduced capital expenditure, it is still essential for companies to assess their specific requirements to evaluate the cost implications against the benefits and services offered in order to implement strategies to optimize cost effectively.

There are a few (but not limited to) these various factors:

1. **Data Transfer and Storage Costs**: Cloud providers often charge for data transfer and storage, and when companies design their architecture and implement data storage strategies to minimize costs, such as using object storage or tiered storage solutions.

2. **Vendor Lock-In**: Locking into a single cloud provider may limit flexibility and negotiation power, potentially leading to higher costs in the long-term. With this in mind, companies might want to consider and opt for multi-cloud or hybrid cloud strategies to avoid vendor lock-in.

3. **License Management**: Some software licenses may incur additional costs when deployed in the cloud, therefore companies should carefully manage software licenses and explore options for cost-effective licensing models.


# Scenario Challenges

| Challenge #  | Describe the challenge | Assumptions | Proposed Solution(s) |
| ------------- | ------------- | ------------- | ------------- |
| **Challenge 1** - Compatibility Issue  | **Scenario:** Your superior wants to leverage on serverless technology as it eliminates operational overheads but the software is not serverless ready. | The assumption is that within the existing architecture, there are a few which can be easily migrated to a serverless environment | Before implementing anything, the first step would be to evaluate the existing software architecture to identify any limitation or dependencies that may prevent it from being deployed or implemented in a serverless environment. Afterwards, identify components within the software which are stateless and can be easily decoupled from the existing infrastructure as stateless components can be migrated to a serverless architecture. Instead of attempting a full-scale migration at once, it would be better to do it in phases where the company can incrementally migrate various components of the software to a serverless architecture. |
| **Challenge 2** - Vendor Lock-in  | **Scenario:** You have picked Cloud X as the destination of your migration only to find out that you'll better with Cloud Y as your technology scale.  | The assumption is that the company had already signed a contract with Cloud X thereby incurring some costs before finding out about the benefits of Cloud Y |Before proceeding with any further changes or committments, evaluate your current and future requirements, including scalability, performance, cost and feature sets. Conduct a comparative analysis between both vendors while considering factors such as pricing models, service offerings, etc. Review the migration plan to see if it is feasible to migrate to Cloud Y instead of Cloud X and the potential risks associated with it. If the company has already committed to Cloud X, explore options for renegotiating contracts or agreeements and look at the possibility of a hybrid option using both services before fulling migrating to one. As this involves a huge cost to the company, relevant stakeholders will need to be informed of this and necessary adjustments to the migration plan and timeline will need to be done and eventually executed. |
| **Challenge 3** - Processes & Policies  | **Scenario:** Locally (in data center) configured security policies is not identical to the policies architecture in the Cloud. The deployment process of the current IT Operations Team may not fit well with the Cloud's.  | The assumption is that the company is willing to hire experts from the cloud provider on a contract basis to work with their existing team to resolve this discrepancy | To resolve the mismatch between locally configured security policies and cloud architecture, the company will first need to assess the current security policies and document it before then moving to understand the cloud security model which the company is transitioning to. From there, the company is able to identify the specific gaps and differences, and based on the assessment, define cloud-specific security policies and controls that align with best practices before proceeding with their plan to implement it.|

## Keywords & Terminologies

- **Serverless Technology**: Also known as serverless computing. It is a cloud computing model where cloud providers manage the infrastructure required to run applications, allowing developers to focus solely on writing and deploying code. 

- **Stateless**: Refers to modules or elements within an application that do not maintain any internal state or data between invocations. 

- **Decoupled**: It refers to the degree to which components or modules within a system are independent of each other and can function without relying on the details or implementation of other components.

### References & Resources

- https://www.influentialsoftware.com/wp-content/uploads/2022/07/Cloud-migration-influentialsoftware.png