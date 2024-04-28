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