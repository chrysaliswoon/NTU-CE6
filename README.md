# NTU-CE6
An overview of all of the assignments for NTU Cloud Engineering Course (Cohort 6)

| Lesson # | Module Topic | Github Repository|
| ------------- | ------------- | ------------- |
| 1  | Introduction to IT Infrastructure | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.1-infra-intro)  |
| 2  | Networking Essentials | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.2-networking-essentials)  |
| 3  | Network Communications Protocol | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.3-networking-communications)  |
| 4  | Basic Network Security | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.4-basic-security)  |
| 5  | Operating Systems (Windows) | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.5-operating-systems-window) |
| 6  | Operating Systems (Linux) | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.6-operating-systems-linux)  |
| 7  | CPU, Threading & Processing | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.7-cpu-threading-process)  |
| 8  | Disk, Memory and other storage technologies | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.8-disk-memory-storage) |
| 9  | Servers & Virtualization | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.9-servers-virtualization) |
| 10  | Servers & Networking | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.10-servers-networking) |
| 11  | High Availability | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.11-high-availability) |
| 12  | Disaster Recovery | [Link](https://github.com/chrysaliswoon/NTU-CE6/tree/main/module-1/1.12-disaster-recovery) |
| 13  | What is Cloud Computing | [Link]() |
| 14  | Introduction to Cloud Platform | [Link]() |
| 15  | Developers Tool Setup | [Link]() |
| 16  | IaaS, PaaS, and SaaS | [Link]() |
| 17  | Database as a Service | [Link]() |
| 18  | Permission & Policies | [Link]() |
| 19  | Security Groups | [Link]() |
| 20  | Software Deployment Requirements | [Link]() |
| 21  | Deployment as a Service | [Link]() |
| 22  | CDN & Availability Zones | [Link]() |
| 23  | Principles in Cloud Arch. Design - Security | [Link]() |
| 24  | Principles in Cloud Arch. Design - Reliability | [Link]() |
| 25  | Principles in Cloud Arch. Design - Performance | [Link]() |
| 26  | Principles in Cloud Arch. Design - Cost Optimization | [Link]() |
| 27  | Principles in Cloud Arch. Design - Operational Excellence | [Link]() |
| 28  | Infrastructure as Code | [Link]() |
| 29  | Introduction to GIT I | [Link]() |
| 30  | Introduction to GIT II  | [Link]() |
| 31  | Deploying Cloud Native App | [Link]() |
| 32  | Cloud Native Application - Containerization I | [Link]() |
| 33  | Cloud Native Application - Containerization II | [Link]() |
| 34  | Cloud Native Application - Serverless I | [Link]() |
| 35  | Cloud Native Application - Serverless II | [Link]() |
| 36  | Cloud Migration and Microservices | [Link]() |
| 37  | Introduction to DevOps | [Link]() |
| 38  | Continuous Integration | [Link]() |
| 39  | Continuous Deployment - Container | [Link]() |
| 40  | Continuous Deployment - Serverless | [Link]() |
| 41  | Secret Management | [Link]() |
| 42  | Package Vulnerability Scan | [Link]() |
| 43  | Application Logging - CloudWatch | [Link]() |


# Additional Notes

## Set-up Git using SSH

### Step 1: Generate SSH token

- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

    - ssh-keygen -t ed25519 -C "your_email@example.com" (Replace the email used in the example with your GitHub email address) 
        - ssh-keygen = Generates a SSH key
        - -t ed25519 = Algorithim to generate the key

    - Paste the above in your terminal and hit "Enter" till you see the key's randomart image

    - To check if you have your ssh key, in your terminal type `cd ~/.ssh`
    - Start the ssh-agent in the background.
        `eval "$(ssh-agent -s)"`
    - Add your SSH private key to the ssh-agent.
        `ssh-add ~/.ssh/(SSH ID)`

### Step 2: Add public key in GitHub

- Click on your profile in top-right
- Go to "SSH and GPG keys" located on the left-hand side
- Type `cat (SSH ID).pub`
- Copy the public SSH key and name it before adding it to GitHub

### Step 3: Check if SSH key is added

- To check if it's added to Github, in your terminal type `ssh -T git@github.com`


This is a new change