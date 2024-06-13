# Brief
The objective of this assignment is to familiarize yourself with the features and services of Amazon Web Services (AWS), and understand how it can be used as a cloud platform to support the deployment and management of various types of applications and services.

**Instructions**:

1. Research and familiarize yourself with the various services offered by AWS, including but not limited to:

- EC2 (Elastic Compute Cloud)
- S3 (Simple Storage Service)
- RDS (Relational Database Service)
- Lambda
- CloudFront
- SNS (Simple Notification Service)
- SQS (Simple Queue Service)
- Elasticache
- EMR (Elastic MapReduce)

2. Create a simple EC2 application in AWS that you can connect to via SSH.

- Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/ or go to EC2 by going to Services > Compute > EC2

- In the navigation bar at the top of the screen, the current AWS Region is displayed (for example, US East (Ohio)).

- Select the Region (ap-southeast1) Singapore to launch your EC2 instance. This choice is important because some Amazon EC2 resources can be shared between Regions, while others can't. For more information, see Resource locations.

- From the Amazon EC2 console dashboard, click Launch instance, which is the orange button.

- Under Name and tags, for Name, enter a descriptive name for your instance that includes your name e.g. DannySimpleServer.

- Under Application and OS Images (Amazon Machine Image), under Quick Start, choose the operating system (OS) for your instance. This can be either Amazon Linux, Redhat or Ubuntu, but be sure to choose an AMI version that is Free-Tier Eligible.

- Under Instance Type, choose the common instance type t2.micro. This is also a good time for you to view the different Instance Types available and the costs associated with it.

- Under Key pair (login), for Key pair name, click create new key pair. - Enter a key pair name of your choice e.g. DannyKeyPair - Choose Key pair type as RSA - Choose Private key file format as .pem - Once done, click Create key pair and download the .pem file.

- Under Key pair (login), select the key pair you have created earlier.

- Under Network Settings for Firewall, select Create security group. For now, enable all 3 options for Allow SSH from Anywhere, Allow HTTPS traffic from the internet and Allow HTTP traffic from the internet (Although not recommended in real life)

- You're set! Now click Launch Instance and wait for your EC2 instance to be created.

- Go back to your EC2 page by clicking View All Instances or following step 1 again.

- Select your Running instance by clicking the row, then click Connect.

- Follow the step under SSH client tab, look for the final line where the suggested command is provided e.g. ssh -i "DannyKeyPair.pem" ec2-user@ec2-54-255-148-9.ap-southeast-1.compute.amazonaws.com. Run this command from your local machine terminal/ powershell and be sure that you are in the file directory with your .pem file.

- You should be able to access your created EC2 instance! Feel free to run any actions e.g. curl, netstat, install other packages etc.

# Creating an EC2

![](https://github.com/chrysaliswoon/NTU-CE6/blob/main/assets/ec2-1.png)

![](https://github.com/chrysaliswoon/NTU-CE6/blob/main/assets/ec2-2.png)

![](https://github.com/chrysaliswoon/NTU-CE6/blob/main/assets/ec2-3.png)