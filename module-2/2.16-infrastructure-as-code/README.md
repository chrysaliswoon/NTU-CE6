## Assignment

### Brief

Choose one of these:

**Option 1**
- Create S3 Bucket using AWS CDK
- Submit the Github repo to Blackboard

**Option 2**
- Create S3 Bucket using Terraform
- Submit the Github repo to Blackboard

### References

_Example of Referencing Classmate_

Referenced the code block below from Terence.
```js
    function printMe(){
        console.log("I am a reference example");
    }
```

_Example of Referencing Online Resources_

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/html/
- https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github


**Note: As an additional form of practice, I will also be implementing Github Actions into these two activities**

# Pre-requisite Set-up (if not done yet)

**Part 1: Set up AWS Credentials for Github Repo**

This purpose of this step is for your Github workflow to authenticate with the AWS account on your behalf to perform actions (such as creating resources)

- Go to your Github repository page and go to Settings
- Go to Secrets and Variables -> Actions
- Click “New Repository Secret”
- You will have to create 2 secrets with the following name:
    - **Name**: AWS_ACCESS_KEY_ID
    - **Value**: Key in your Access Key ID value
    - **Name**: AWS_SECRET_ACCESS_KEY
    - **Value**: Key in your Secret Access Key ID value

# Part 2: Terraform Installation

Ensure you have terraform installed in your machine (Run `terraform --version` in your terminal to confirm). If you have not done this:

- You can download it from the [official Terraform website](https://www.terraform.io/downloads.html) and follow the installation instructions for your operating system.

# Create S3 Bucket using AWS CDK




# Create S3 Bucket using Terraform

In the following activity today, we would be creating our S3 bucket. The activity is broken down into smaller parts below.

Creating an S3 bucket using Terraform involves writing a configuration file that describes the desired state of your infrastructure. Here’s a step-by-step guide to accomplish this.

### 1. Create a New Directory for Your Terraform Project

Create a new directory for your Terraform configuration files:

```sh
mkdir s3-terraform-project
cd s3-terraform-project
```

### 2. Write the Terraform Configuration

Create the following files: `main.tf`, `output.tf`, `provider.tf` in your project directory and add the following configuration to define an S3 bucket:

#### provider.tf File

```hcl
provider "aws" {
  region = "ap-southeast-1"  # Specify your desired AWS region
}
```

#### main.tf File

```hcl
resource "aws_s3_bucket" "chrysalis_bucket" {
  bucket = "chrysalis-s3-bucket"  # Ensure this name is globally unique
  acl    = "private"

  tags = {
    Name        = "Chrysalis bucket"
    Environment = "Dev"
  }
}
```

### 3. Initialize the Terraform Project

Run the following command to initialize your Terraform project. This will download the necessary provider plugins.

```sh
terraform init
```

### 4. Plan the Terraform Execution

Run the following command to see what actions Terraform will take to create your resources:

```sh
terraform plan
```

### 5. Apply the Terraform Configuration

If the plan looks good, run the following command to apply the configuration and create the S3 bucket:

```sh
terraform apply
```

Terraform will ask for confirmation before applying the changes. Type `yes` to confirm.

### 6. Verify the S3 Bucket

You can verify the creation of your S3 bucket in the AWS Management Console under the S3 section.

### Additional Resources

- [Terraform AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform S3 Bucket Resource](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)