# Brief
- Create your own AWS S3 Bucket
- Submit your AWS S3 Bucket URL/ Name

# How to Create an AWS Bucket

## Step 1: Sign in to AWS Console
- **Sign in:** Go to the AWS Management Console (https://aws.amazon.com/console/) and sign in with your credentials.

## Step 2: Navigate to S3 Service
- **Navigate to S3:** Once logged in, find and select the S3 service from the list of AWS services. It's typically found under "Storage" or can be searched for in the AWS Management Console.

## Step 3: Create a Bucket
**Create Bucket:**
- Click on the "Create bucket" button.
- Choose a unique name for your bucket. Bucket names must be globally unique across all AWS accounts.
- Select the AWS region where you want to create the bucket. Consider choosing a region close to your intended users for lower latency.
- Click "Create" to create the bucket.

## Step 4: Configure Bucket Properties
**Configure Properties (Optional):**
- You can configure properties such as versioning, logging, encryption, tags, and object-level permissions for your bucket. These settings can be adjusted later as needed.

## Step 5: Set Permissions
**Set Permissions (Optional):**
- Configure permissions for the bucket to control who can access it and how. This includes setting bucket policies and access control lists (ACLs).

## Step 6: Review and Create
**Review Settings:**
- Review the configuration settings you've chosen for the bucket.
- Click "Create bucket" to finalize and create the bucket.

## Step 7: Access and Manage Your Bucket
**Access and Manage:**
- Once created, your bucket will appear in the S3 dashboard.
- You can upload objects (files) to your bucket, create folders (prefixes) to organize objects, set permissions for objects and buckets, configure lifecycle policies, enable logging and monitoring, and perform other management tasks.

## Step 8: Clean Up (if necessary)
**Clean Up:**
- If you no longer need the bucket, you can delete it. Be aware that deleting a bucket is irreversible and will delete all objects (files) stored in it.

**Additional Tips:**
- **Naming:** Follow AWS guidelines for bucket naming (e.g., lowercase letters, numbers, hyphens, must be between 3 and 63 characters long).
- **Security:** Always apply least privilege principles when setting permissions for your buckets and objects.
- **Monitoring:** Consider enabling logging and monitoring to track access and usage of your bucket.