# Brief

- Create an Elastic Beanstalk application
- Follow this guide - https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html
- Update the HTML page with your name in it and take a screenshot. This will be your submission for this week.

# Step-by-step Guide

## Pre-requisites

Ensure you have terraform installed in your machine (Run terraform --version in your terminal to confirm)
Ensure you have aws cli setup and configured with your credentials (Access key and secret access key)

## Activity
**Step 1: Create a public Github repository**

- Login to your Github account
- Go to Repositories -> New (Green button)
- In the repository creation page, choose the following settings(Refer to image below):
    - Owner: Choose yourself
    - Repository name: terraform-eb-infra (This is just a example name, but you can give it any meaningful name)
    - Public
    - Check “Add a README file”
    - Add .gitignore (Choose Terraform from the list)
- Click “Create Repository”

**Step 2: Set up AWS Credentials for Github Repo**

This purpose of this step is for your Github workflow to authenticate with the AWS account on your behalf to perform actions (such as creating resources)

- Go to your Github repository page and go to Settings
- Go to Secrets and Variables -> Actions
- Click “New Repository Secret”
- You will have to create 2 secrets with the following name:
    - **Name**: AWS_ACCESS_KEY_ID
    - **Value**: Key in your Access Key ID value
    - **Name**: AWS_SECRET_ACCESS_KEY
    - **Value**: Key in your Secret Access Key ID value

**Step 3: Setting up your local working directory**

- Upon creating your Github repo, you should be able to see the following files in your repository:
    - .gitignore
    - README.md
- Clone the Github repo to your local computer (Using “git clone” command). In the image shown below, I’m cloning my repository to my Desktop.
- Then change directory to your Github repository’s directory (Using cd)
- Then type `code .` which would open VS Code in that directory.

**Step 4: Creating your Terraform files**

Create the following 4 files:

- **backend.tf** - This file would be used to contain information about where to store the state file of your terraform resources.

```json
terraform {
  backend "s3" {
    bucket = "sctp-ce6-tfstate"
    key    = "jaz-eb.tfstate" #Remember to change this
    region = "ap-southeast-1"      #The region of your backend bucket
  }
}
```

- **provider.tf** - This file would be used to contain information about which region to create your resources in.

```json
provider "aws" {
  region = "ap-southeast-1"
}
```

- **main.tf** - This file would be used to contain all of the IaC to create your resources (Ec2 + Security group resources) 

```json
resource "aws_elastic_beanstalk_application" "eb_app" {
  name        = "jaz-eb-app"   #Change this to your name
}

resource "aws_elastic_beanstalk_environment" "eb_env" {
  name                = "jaz-eb-app-env"   #Change this to your name
  application         = aws_elastic_beanstalk_application.eb_app.name
  solution_stack_name = "64bit Amazon Linux 2023 v6.1.6 running Node.js 20"

  setting {
      namespace = "aws:autoscaling:launchconfiguration"
      name = "IamInstanceProfile"
      value = "aws-elasticbeanstalk-ec2-role"
  }
  setting {
      namespace = "aws:elasticbeanstalk:environment"
      name = "EnvironmentType"
      value = "SingleInstance"
  }
  setting {
      namespace = "aws:elasticbeanstalk:environment"
      name = "ServiceRole"
      value = "arn:aws:iam::255945442255:role/service-role/aws-elasticbeanstalk-service-role"
  }
  setting {
      namespace = "aws:ec2:instances"
      name = "InstanceTypes"
      value = "t2.micro"
  }
}
```

- **output.tf**

```json
output "app_name" {
  value = aws_elastic_beanstalk_application.eb_app.name
}

output "env_name" {
  value = aws_elastic_beanstalk_environment.eb_env.name
}

output "cname" {
  value = aws_elastic_beanstalk_environment.eb_env.cname
}
```

## Step 5: Plan your terraform resources (Don't apply)

Proceed to run the following commands:
- `terraform init`
- `terraform plan`

## Step 6: Get your Source Code
- Go to Tutorials and samples - AWS Elastic Beanstalk (amazon.com) and Download **“NodeJs.zip”**.
- Unzip the file and move the contents into your repository

## Step 7: Update your Source Code
- Go into the nodejs folder and open **“index.html”**
- Look for the line that says <h1>Congratulations</h1>
- Update it to display your name instead of “Congratulations”.
- Save the file

## Step 8: Add your workflow file + Commit all files

- Create a folder called “.github”
- Then create another folder called “workflows” inside the “.github” folder.
- Then inside “.github/workflows” directory, create a file called “workflow.yaml”
- Copy the content for “workflow.yaml” from the next page in this document (Also try to look through the workflow file and try to understand whats happening)
- Also compare your “git status” output with my image below
- Then commit your files to Github (add, commit, push)

```yaml
name: EB Deployment for Infra and App

on:
  push:
    branches: [ "main" ]

env:            
  AWS_REGION: ap-southeast-1  

jobs:
  EB-Deployment:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3
   
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}

    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v2
      with:
        terraform_wrapper: false

    - name: Terraform fmt
      run: terraform fmt --recursive
   
    - name: Terraform Init
      run: terraform init
   
    - name: Terraform Validate
      run: terraform validate

    - name: Terraform Plan
      run: terraform plan
   
    - name: Terraform Apply
      run: terraform apply --auto-approve

    
    - name: Export terraform outputs
      id: tfout
      run: |
        echo "EB_APP=$(terraform output -raw app_name)" >> $GITHUB_OUTPUT
        echo "EB_ENV=$(terraform output -raw env_name)" >> $GITHUB_OUTPUT

    - name: Generate deployment package
      working-directory: ./nodejs
      run: zip -r ../deploy.zip .

    - name: Deploy to EB
      uses: einaregilsson/beanstalk-deploy@v22
      with:
        aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        application_name: ${{ steps.tfout.outputs.EB_APP }}
        environment_name: ${{ steps.tfout.outputs.EB_ENV }}
        version_label: ${{ github.sha }}
        region: ${{ env.AWS_REGION }}
        deployment_package: deploy.zip
```

## Documentations Used

General options for all environments - AWS Elastic Beanstalk (amazon.com)
aws_elastic_beanstalk_environment | Resources | hashicorp/aws | Terraform | Terraform Registry
Contexts - GitHub Docs
Beanstalk Deploy · Actions · GitHub Marketplace

## Acknowledgements

- This guide was created by Jazeel, our DevOps Instructor to guide us through the process of creating an Elastic Beanstalk Application via Terraform