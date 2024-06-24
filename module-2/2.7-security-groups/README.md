# Brief

The objective of this assignment is to gain a deeper understanding of AWS security groups

**Instructions:**

- Open AWS Console
- Create a new EC2 instance with a new security group:
- Name: “"yourname"SSHSecurityGroup”
- Description: “Security Group To Allow SSH from my IP range(s)”
- VPC: < Choose Any >
- Inbound Rules: - Type: SSH - Protocol: TCP - Source: My IP
- Recommended: Use Terraform to do the above actions. Remember to clean up any resources you have created after completion.


Below is a more detailed breakdown on how the assignment was done. The first section is to create the EC2 instance with the security group in AWS, while the second section is through the console using Terraform.

# Part 1: Using the AWS Console
**Step 1: Open AWS Console**
- Go to the AWS Management Console: AWS Management Console.
- Log in with your AWS credentials.

**Step 2: Navigate to EC2**
- In the AWS Management Console, type "EC2" in the search bar and select "EC2" from the drop-down list.
- You will be redirected to the EC2 Dashboard.

**Step 3: Create a New Security Group**
1. In the left-hand menu, click on "Security Groups" under "Network & Security".
2. Click on the "Create security group" button.
3. Fill in the following details:
    - **Security group name**: "yourname"SSHSecurityGroup
    - **Description**: Security Group To Allow SSH from my IP range(s)
    - **VPC**: Select any VPC from the drop-down list (usually the default VPC).
4. In the "Inbound rules" section, click "Add rule":
    - **Type**: SSH
    - **Protocol**: TCP
    - **Port** range: 22
    - **Source**: My IP (This will automatically populate your IP address)
5. Click "Create security group".

![](/NTU-CE6/assets/security-group.png)

![](/NTU-CE6/assets/security-group-2.png)

**Step 4: Launch a New EC2 Instance**
1. Go back to the EC2 Dashboard.
2. Click on the "Launch Instance" button.
3. Configure the instance details:
    - **Name and Tags**: Give your instance a name (e.g., "MyEC2Instance").
    - **Application and OS Images (Amazon Machine Image)**: Select an appropriate AMI (e.g., Amazon Linux 2 AMI).
    - **Instance Type**: Choose an instance type (e.g., t2.micro for free tier).
4. Select or create a key pair for SSH access, then click "Launch Instances".
5. Configure the network settings:
    - **VPC**: Select the same VPC you used for the security group.
    - **Subnet**: Select a subnet within your VPC.
    - **Auto-assign Public IP**: Enable if you want a public IP.
6. In the "Configure Security Group" section, select "Select an existing security group" and choose "yourname"SSHSecurityGroup.
7. Review and launch your instance:
    - Click "Launch".

![](/NTU-CE6/assets/ec2-a.png)

![](/NTU-CE6/assets/ec2-b.png)

![](/NTU-CE6/assets/ec2-c.png)

![](/NTU-CE6/assets/ec2-snapshot.png)

# Part 2: Using Terraform
**Step 1: Install Terraform**
- Download and install Terraform from the official website.
- Verify the installation by running `terraform --version` in your terminal.

**Step 2: Create a Terraform Configuration File**
1. Create a new directory for your Terraform project and navigate to it:
sh

    ```sh
    mkdir my-terraform-project
    cd my-terraform-project
    ```

2. Create a file named main.tf and add the following configuration:

```sh
provider "aws" {
  region = "us-east-1"  # Change to your desired region
}

resource "aws_security_group" "ssh_security_group" {
  name        = "${var.yourname}SSHSecurityGroup"
  description = "Security Group To Allow SSH from my IP range(s)"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.my_ip]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "my_instance" {
  ami           = "ami-0c55b159cbfafe1f0"  # Change to your desired AMI
  instance_type = "t2.micro"

  vpc_security_group_ids = [aws_security_group.ssh_security_group.id]

  tags = {
    Name = "MyEC2Instance"
  }
}

variable "yourname" {
  description = "Your name"
}

variable "vpc_id" {
  description = "VPC ID"
}

variable "my_ip" {
  description = "Your IP address"
}
```

**Step 3: Initialize and Apply Terraform Configuration**
1. Initialize Terraform:

    ```sh
    terraform init
    ```
2. Apply the Terraform configuration:

    ```sh
    terraform apply
    ```
3. During the apply process, you will be prompted to enter values for the variables (`yourname`, `vpc_id`, `my_ip`). Provide appropriate values:

    - `yourname`: Your name or a unique identifier.
    - `vpc_id`: The ID of the VPC you want to use.
    - `my_ip`: Your IP address in CIDR notation (e.g., 203.0.113.0/32).

4. Confirm the apply by typing `yes` when prompted.


**Step 4: Clean Up Resources**
1. After you have completed your tasks, destroy the resources to avoid incurring charges:

    ```sh
    terraform destroy
    ```
2. Confirm the destroy by typing `yes` when prompted.

