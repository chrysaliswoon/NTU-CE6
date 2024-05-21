# Introduction

## Server

- **Server (Hardware)**: a hardware-based server is a physical device connected to a computer network on which one or more software-based servers run alongside the operating system. 

- **Server (Software)**: a software-based server is a program that offers a specialized service to be used by other programs (known as clients) locally or via a network. 

### How do Servers work?

![How servers work](https://miro.medium.com/v2/resize:fit:768/1*0Uuq5E1j8bn_weo09G5VFw.jpeg)

![Types of Servers](https://www.zenarmor.com/docs/assets/images/types-of-servers-507a1970e9401e3fc59727d0fd7dde95.png)

## Server Virtualization

Virtualization is a process for users to create multiple simulated environments within one piece of hardware. Instead of using multiple pieces of hardware to run more than one operating system, virtualization creates a type of virtual barrier—called a hypervisor—to separate digital functions normally requiring multiple physical units. 

Essentially, virtualization uses software to act as hardware.

![What is virtualization](https://www.dnsstuff.com/wp-content/uploads/2019/10/what-is-server-virtualization-1024x536.png)

## Types of Server Virtualization

### Full Virtualization

- It lets you run multiple virtual machines, each with its own operating system and applications, all on the same physical computer.

**How it works:**

- **Hypervisor**: This is like the boss of the virtual machines. It sits on top of the real computer's operating system and manages all the virtual machines. It makes sure they all get what they need to run properly.

- **Virtual Machine**: This is the pretend computer you're running inside your real computer. It has its own operating system (like Windows or Linux) and acts just like a regular computer. But it's not real—it's all happening inside your real computer thanks to the magic of virtualization.

- **Hardware Emulation**: The hypervisor makes the virtual machine think it's using real hardware, like a real CPU, memory, and storage. But actually, it's all being simulated by the hypervisor.

### Para-Virtualization

Is a virtualization technique that allows multiple operating systems (guests) to run concurrently on a single physical machine (host). 

### Hardware-assisted virtualization

### OS-level virtualization

### Hypervisor virtualization

# Brief
Different companies have different applications and have different architectural needs. As a group, choose among the choices and discuss what kind of servers / server configuration / virtualization will be needed.

- A deposit / withdrawal system for a rural bank located in the province
- A record keeping system for a chain of hospitals
- An inventory management system for a chain of supermarkets
- A learning management system for a university
- A ticketing system for an international IT helpdesk
- A government portal for tax system
- A flight management system by a global airline

# A deposit / withdrawal system for a rural bank located in the province

![Bank](https://www.thestatesman.com/wp-content/uploads/2017/08/1479748402-bank-queue-india-sbi-afp.jpg)

For a deposit/withdrawal system for a rural bank located in the province, the server infrastructure needs to be reliable, secure, and cost-effective.

### Server Hardware:

- **Main Server**: Invest in a reliable, mid-range server with sufficient processing power, memory, and storage capacity to handle the bank's transactions and data storage needs. Consider a server from reputable brands like Dell, HP, or Lenovo.

- **Redundant Power Supply**: To ensure continuous operation, equip the server with redundant power supplies or an uninterruptible power supply (UPS) to protect against power outages.

- **RAID Configuration**: Implement a RAID (Redundant Array of Independent Disks) configuration for data redundancy and fault tolerance to minimize the risk of data loss due to disk failures.

### Server Configuration:

- **Operating System**: Choose a stable and secure operating system such as Linux (e.g., Ubuntu Server, CentOS) or Windows Server, depending on the bank's preference and existing IT infrastructure.

- **Database Server**: Install and configure a robust database server such as MySQL, PostgreSQL, or Microsoft SQL Server to store customer account information, transaction records, and other banking data securely.

- **Application Server**: Deploy banking software or develop custom applications for handling deposit/withdrawal transactions, customer authentication, account management, and reporting.

- **Security Measures**: Implement strict access controls, encryption, and intrusion detection/prevention systems to protect sensitive banking data from unauthorized access and cyber threats.

### Virtualization:

- **Hypervisor**: Choose a reliable hypervisor such as VMware vSphere, Microsoft Hyper-V, or open-source solutions like KVM or Proxmox VE to create and manage virtual machines (VMs).

- **Virtual Machine Configuration**: Set up multiple virtual machines for different server roles, such as database server, application server, and backup server, to improve resource utilization and scalability.

- **High Availability**: Configure VMs for high availability using features like VM migration, failover clustering, or replication to ensure continuity of banking services in case of server failures.

### Backup and Disaster Recovery:

- **Implement regular backups** of critical data and system configurations to prevent data loss and facilitate quick recovery in case of disasters.

- **Store backups securely offsite** or in the cloud to protect against physical damage or theft.

- **Test backup and recovery procedures** periodically to ensure their effectiveness.

## Monitoring and Maintenance:

- **Set up monitoring tools** to track server performance, resource utilization, and security events.

- **Schedule regular maintenance tasks** such as software updates, patches, and system checks to keep the server infrastructure secure and optimized.


# Resources & References

- https://www.dnsstuff.com/what-is-virtualization