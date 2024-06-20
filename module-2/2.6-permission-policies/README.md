# Brief

The objective of this assignment is to gain a deeper understanding of AWS permissions and policies and how they can be used to secure access to AWS resources.

**Instructions:**

**Option 1: Research**

- Research and investigate the concepts of AWS IAM (Identity and Access Management) and the different types of permissions and policies available.
- Write a report summarizing your experience with IAM, including an overview of the permissions and policies used, any challenges encountered, and any benefits or limitations observed.
- Provide examples of how these permissions and policies can be used in a real-world scenario.

**Option 2: Hands On**

- Create a new IAM user with the syntax YOUR NAME + "-temp-user" suffix e.g. luqman-temp-user.
- Grant this new user you have created access to (i) create, view and delete EC2 instances, (ii) create and view S3 buckets only and (iii) view RDS instances only.
- Test out the permissions of your new user to verify that the user can only perform the above actions.
- Share the IAM user with us in NTU blackboard for us to verify.

# Report on AWS Identity and Access Management (IAM)

## Introduction

![IAM](https://d1.awsstatic.com/howitworks_IAM_110321.8b2290727bb2022d54416e099c87ad9dc64be5d5.jpg)

AWS Identity and Access Management (IAM) is a service that helps you securely control access to AWS resources. IAM enables you to manage access to AWS services and resources securely. This report provides an overview of IAM concepts, permissions, and policies, as well as real-world examples and an analysis of the benefits and limitations observed.

## Overview of AWS IAM

![How IAM Works](https://docs.aws.amazon.com/images/IAM/latest/UserGuide/images/intro-diagram%20_policies_800.png)

**Key Concepts**

1. **Users:**

- An individual user or service account that needs access to AWS resources.
- Each user can have individual security credentials (passwords, access keys, etc.).

2. **Groups:**

- A collection of users.
- Policies can be attached to groups, and all users in the group inherit those policies.

3. **Roles:**

- A set of permissions that define what actions are allowed and denied.
- Roles are not associated with specific users or groups. Instead, AWS services can assume roles to gain temporary access to resources.

4. **Policies:**

- Documents that define permissions.
- Policies are attached to users, groups, or roles to grant permissions.

5. **Permissions:**

- Define what actions are allowed or denied for a specific resource.
- Permissions are determined by policies.

**Types of Policies**

1. **Managed Policies:**

- **AWS-Managed Policies**: Predefined by AWS, these policies are designed to provide permissions for common use cases.
- **Customer-Managed Policies**: Custom policies created by the user to meet specific needs.

2. **Inline Policies:**

- Embedded directly within a user, group, or role.
- Inline policies maintain a strict one-to-one relationship with the entity they are embedded in.

3. **Resource-Based Policies:**

- Attached directly to resources such as S3 buckets, and define which users or roles can access them.

4. **Permission Boundaries:**

- Define the maximum permissions an IAM entity can have.
- Useful for setting guardrails around what permissions users or roles can have.

## Real-World Examples of Permissions and Policies

**Scenario 1: Granting S3 Bucket Access to a Specific User**
**Objective:** Allow a user to have full access to a specific S3 bucket.
**Implementation:** 
- Attach this policy to the specific IAM user who needs access to the S3 bucket.

**Policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::example-bucket/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::example-bucket"
    }
  ]
}
```

**Scenario 2: Creating a Read-Only Role for EC2 Instances**
**Objective:** Allow EC2 instances to read from S3 buckets but not write.
**Implementation:**
- Create an IAM role with this policy attached.
- Assign this role to the EC2 instances that need read-only access to the S3 bucket.

**Policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::example-bucket",
        "arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}

```

**Scenario 3: Restricting Access Based on Tags**
**Objective:** Allow users to start or stop EC2 instances only if they have a specific tag.
**Implementation:**
- Attach this policy to the users or groups needing conditional access.
- Ensure the EC2 instances are tagged appropriately with the key "Environment" and value "Production".

**Policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:StartInstances",
        "ec2:StopInstances"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "ec2:ResourceTag/Environment": "Production"
        }
      }
    }
  ]
}
```

## Challenges Encountered
**Complexity of Policies:**
- Crafting policies that are both secure and functional can be complex, especially as the number of resources and users grows.
- Fine-tuning permissions to balance security and usability can be challenging.

**Testing Policies:**
- Ensuring that policies work as intended requires rigorous testing.
- AWS IAM policy simulator is useful but can be time-consuming to set up and verify.

**Managing Permissions at Scale:**
- Managing a large number of users, roles, and policies can become cumbersome.
- Requires a well-structured approach to organizing IAM entities and policies.

## Benefits
**Granular Control:**
- IAM provides fine-grained control over access to AWS resources.
- Allows precise permissions to be set, enhancing security.

**Scalability:**

- IAM scales with the organization’s needs, supporting complex permission structures.
- Easily integrates with other AWS services.

**Security:**

- Strong security features, including MFA, encryption, and resource-based policies.
- Supports compliance with regulatory requirements.

## Limitations
**Complexity:**
- Can be overwhelming for new users due to the extensive number of options and settings.
- Requires careful planning and understanding to implement effectively.

**Policy Size Limits:**

- Managed policies have size limits (up to 6,144 characters), which can be restrictive for complex policies.
- Requires breaking down large policies into multiple smaller ones.

**Error Prone:**

- Misconfigured policies can lead to security vulnerabilities.
- Requires thorough testing and validation.

## Conclusion

AWS IAM is a powerful and flexible tool for managing access to AWS resources. While it offers extensive capabilities for securing and managing permissions, it also comes with challenges, particularly around complexity and policy management. With proper planning and careful implementation, IAM can significantly enhance the security and efficiency of managing AWS environments.

By utilizing different types of policies, such as managed policies, inline policies, and resource-based policies, organizations can tailor access controls to meet their specific needs. However, it is crucial to regularly review and update IAM policies to adapt to changing requirements and ensure ongoing security.