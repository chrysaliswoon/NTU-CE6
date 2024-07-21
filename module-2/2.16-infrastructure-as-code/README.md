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

# Part 2: AWS CDK Installation
Ensure you have AWS CDK installed. If not, you can install it using npm:

```sh
npm install -g aws-cdk
```

To check if you have AWS CDK installed: 

```sh
cdk --version
```

# Part 3: Terraform Installation

Ensure you have terraform installed in your machine (Run `terraform --version` in your terminal to confirm). If you have not done this:

- You can download it from the [official Terraform website](https://www.terraform.io/downloads.html) and follow the installation instructions for your operating system.

# Create S3 Bucket using AWS CDK

To create an S3 bucket using AWS CDK (Cloud Development Kit), you'll need to follow these steps. I'll provide an example using TypeScript, but the same principles apply to other supported languages like Python, Java, and C#.

### 1. Create a New CDK Project

Create a new CDK project by running the following commands:

```sh
mkdir chrysalis-cdk-app
cd chrysalis-cdk-app
cdk init app --language typescript
```

### 2. Add S3 Dependency

Ensure that the `aws-s3` module is included in your dependencies. In the `package.json` file, you should have something like this:

```json
"dependencies": {
  "@aws-cdk/aws-s3": "^2.3.0",
  "aws-cdk-lib": "2.3.0",
  "constructs": "^10.0.0"
}
```

Then run:

```sh
npm install
```

### 3. Create an S3 Bucket

Edit the `lib/my-cdk-app-stack.ts` file to create an S3 bucket:

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class MyCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define an S3 bucket
    new s3.Bucket(this, 'Chrysalis_S3_Bucket', {
      versioned: true,  // Enable versioning
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Specify what should happen to the bucket when the stack is deleted
      autoDeleteObjects: true, // Enable auto deletion of objects
    });
  }
}
```

### 4. Deploy the Stack

Finally, deploy your stack to AWS:

```sh
cdk deploy
```

This will create an S3 bucket with versioning enabled and auto-deletion configured. The `removalPolicy: cdk.RemovalPolicy.DESTROY` and `autoDeleteObjects: true` options ensure that the bucket and its contents are deleted when the stack is destroyed.

### Full Example: `lib/my-cdk-app-stack.ts`

Here's the complete code for reference:

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class MyCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define an S3 bucket
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,  // Enable versioning
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Specify what should happen to the bucket when the stack is deleted
      autoDeleteObjects: true, // Enable auto deletion of objects
    });
  }
}
```

### Additional Resources

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [CDK API Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)

This should give you a solid starting point for creating and deploying an S3 bucket using AWS CDK.


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


### Questions & Queries

- Can I create a folder within a folder and create github actions in the subfolder? Will the Github Actions work?