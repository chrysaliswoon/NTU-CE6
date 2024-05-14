![Linux](https://cyberhoot.com/wp-content/uploads/2020/11/2-1024x565.jpg)

# Introduction
Just like Windows, iOS, and Mac OS, Linux is an operating system. The Linux operating system comprises several different pieces:

- Bootloader
- Kernel
    - Memory Managment
    - Process Management
    - Device Drivers
    - System calls and security
- Init system
- Daemons
- Graphical server
- Desktop environment
- Applications

### Linux History & Timeline

![Timeline](https://www.tcpipacademy.com/images/linux_timeline.png)

# Brief
This assignment will be a research assignment.

Choose one topic and discuss with your group the following:

- Compare and contrast the Windows and Linux environments
- Compare and contrast at least two of the different Linux distributions
- What is the difference between Powershell and Bash?
- How is that everything in Linux is considered a file?
- Explain some use cases of Linux and Windows Server in an organization's day-to-day use.

# Compare and contrast the Windows and Linux environments

Windows environments are characterized by a graphical user interface, proprietary software availability, and a user-centric security model, while Linux environments often feature a diverse range of command-line tools, open-source software options, and a permission-based security model, catering to both desktop and server use cases with greater flexibility and customization.

<p align="center">
  <img src="https://www.theknowledgeacademy.com/_files/images/Comparison_between_Windows_and_Linux.png" alt="Linux versus Windows">
</p>

# Compare and contrast at least two of the different Linux distributions

<p align="center">
  <img src="https://cdn.educba.com/academy/wp-content/uploads/2018/09/CentOS-vs-Ubuntu.jpg" alt="CentOS vs Ubuntu">
</p>

# What is the difference between Powershell and Bash?

<p align="center">
  <img src="https://cdn.educba.com/academy/wp-content/uploads/2018/11/Powershell-vs-Bash.jpg.webp" alt="Powershell versus Bash">
</p>

# How is that everything in Linux is considered a file?

The concept that everything in Linux is considered a file is a fundamental aspect of the Unix philosophy upon which Linux is built. 

This philosophy states that "everything is a file" means that all input and output operations in Unix-like operating systems are treated as if they were interactions with files.

For example:

- **Regular Files**: These are your typical files containing data, such as text files, images, executables, etc.
- **Directories**: Directories are essentially files that contain lists of other files.

# Explain some use cases of Linux and Windows Server in an organization's day-to-day use

### Linux Server

1. **Web Hosting**: Linux servers are extremely popular for hosting websites and web applications. Technologies like Apache, NGINX, and Lighttpd are commonly used on Linux servers to serve web content.
2. **Database Servers**: Many organizations use Linux servers to host database management systems like MySQL, PostgreSQL, and MongoDB. Linux's stability, security, and performance make it a preferred choice for database servers.
3. **File and Print Servers**: Linux servers can be configured to act as file servers using protocols like NFS (Network File System) and Samba, allowing users to share files across a network. They can also function as print servers to manage printing resources.
4. **Email Servers**: Linux servers are often used to host email servers such as Postfix, Sendmail, and Exim. These servers handle email communication within the organization and with external entities.
5. **Development Environments**: Linux servers are popular for hosting development environments due to their support for a wide range of programming languages, development tools, and version control systems like Git.

### Windows Server

1. **Active Directory**: Windows Server is commonly used to deploy and manage Active Directory (AD) services, which centralize network management and provide authentication and authorization services to users and computers within the organization.
2. **Microsoft Exchange**: Windows Server is often used to host Microsoft Exchange Server, which provides email, calendar, and contact management services to users within the organization.
3. **Remote Desktop Services**: Windows Server can be configured to provide Remote Desktop Services (formerly Terminal Services), allowing users to access their desktops and applications remotely.
4. **File and Print Servers**: Similar to Linux, Windows Server can also function as a file server using the Server Message Block (SMB) protocol, allowing users to share files and printers across the network.
5. **Application Servers**: Windows Server is commonly used to host various enterprise applications built on Microsoft technologies such as .NET Framework, ASP.NET, and Microsoft SQL Server.

# Linux Activity - Practice Questions

1. What is the command that can output the total memory used by LINUX?
    
    `free`

    If you want a more concise output showing only the total memory used, you can use the -h option to display sizes in human-readable format:

    `free -h`

2. What is the command to use when you want to change to the directory “/opt/app”?
    
    `cd /opt/app`

3. What is the command that you can run to find all the information regarding running processes on your VM with the name **“app”**?

    `ps aux | grep '[a]pp'`

4. What is the command that you can run to find all the process ID of running processes on your VM with the name **“app”**
    
    `pgrep app`

5. What is the command that you can run to assume or change your current user to **“root”** user?

    `su -`

    You will then be prompted to enter the root user's password. Once authenticated, you will have switched to the root user's environment until you exit by typing `exit`.

6. What is the command that can show all the files in the directory **“/opt/app”**?

    `ls /opt/app`

7. What is the command that can show all the files in the directory **“/opt/app”** including hidden files?

    `ls -a /opt/app`

8. What is the command that can show all the files in the directory **“/opt/app”** sorted by date and time?

    `ls -lt /opt/app`

9. What is the command that you can run to create a folder called **“/tmp/ntu/module1/5”**? 

    `mkdir -p /tmp/ntu/module1/5`

10. What is the command that you can run to create a file in folder /tmp/ntu/module1/5 called **“assignment.txt”**?

    `touch /tmp/ntu/module1/5/assignment.txt`

11. What is the command that you can run to change the owner of the file **“/tmp/ntu/module1/5/assignment.txt”** to **“root”**?

    `sudo chown root /tmp/ntu/module1/5/assignment.txt`

12. What is the command that allows you to view or read the contents of file **“/tmp/ntu/module1/5/assignment.txt”**?

    `cat /tmp/ntu/module1/5/assignment.txt`

13. What is the command that allows you to edit and update file **“/tmp/ntu/module1/5/assignment.txt”** with the string **“Hello, I am learning linux commands!”**?

    `nano /tmp/ntu/module1/5/assignment.txt`

    This command will open the file in the nano text editor. You can then navigate to the location where you want to insert the text, delete existing text, and type in the new string "Hello, I am learning Linux commands!". 
    
    After making your changes, you can save the file by pressing Ctrl + O, then confirm the filename by pressing Enter, and exit the editor by pressing Ctrl + X.

14. What is the command that allows you to copy the file **“/tmp/ntu/module1/5/assignment.txt”** to a new folder **“/tmp/ntu/module1/6”**? Assume you have already created the folder /tmp/ntu/module1/6, if not, please create this folder.

    First, ensure that the destination folder **"/tmp/ntu/module1/6"** exists. If it doesn't, create it using the mkdir command:

    `mkdir -p /tmp/ntu/module1/6`

    Next, copy the file "assignment.txt" to the new folder using the cp command:

    `cp -i /tmp/ntu/module1/5/assignment.txt /tmp/ntu/module1/6`

    The `-i` in the command will prompt you to confirm before overwriting the destination file if it already exists

15. What is the command that allows you to move the file **“/tmp/ntu/module1/5/assignment.txt”** to **“/tmp/ntu/module1/6”**? This means that the folder **/tmp/ntu/module1/5** should be empty.

    `mv /tmp/ntu/module1/5/assignment.txt /tmp/ntu/module1/6`

16. What is the command that allows you to remove or delete the file **“/tmp/ntu/module1/6/assignment.txt”**?

    `rm /tmp/ntu/module1/6/assignment.txt`

17. What is the command that shows whether the website **www.netflix.com** is reachable?

    `ping www.netflix.com`

18. What is the command you can run to install two packages - Docker and Ansible - on your VM?

    `sudo apt update`
    `sudo apt install docker.io ansible`

**Additional Questions**
1. What is the command that allows you to change the permissions of a folder “/tmp/app” with permissions “Owner - Read, Write, Execute, Group - Read, and Public - Read”? Refer to https://chmod-calculator.com/ 

2. What is the command that allows you to change the permissions of a folder “/tmp/app” with permissions “Owner - Read, Write, Execute, Group - Read, Write, and Public - Read”? Refer to https://chmod-calculator.com/ 

3. You have a log file from your application located at “/var/log/output.log”. In this file, there are plenty of log information such as INFO, WARN, ALERT, ERROR etc. Your team lead requires you to search the logs for the occurrences of the word “ERROR”. What is the command that you can run to get the expected result?

4. Your team lead now would like you to use the same file “/var/log/output.log”, but this time, you will need to print the number of times the word “ERROR” is found in the file e.g. 50. What is the command that you can run to get the expected result?

5. Your team is no longer using the directory “/var/log/output/”, which still contains a list of files. What single command would you run to remove all the files as well as the directory?

6. Create a file called “coaching.txt” in the directory “/tmp/ntu/module1/6/” with the 2 line contents:
    a. “This file is for coaching lessons”
    b. “This file is in the /tmp/ntu/module1/6 directory”

7. You found out that you have placed the file from the previous question in the wrong folder. You are required to move the file to the folder “/tmp/ntu/module1/coaching” instead of “/tmp/ntu/module1/6”. What command would you run?

8. On top of that, you found out that you have incorrectly named the file. Instead of “coaching.txt”, you are required to rename it as “coaching-1-6.txt”. What is the command you would run?

9. You are asked to find the top 5 running Linux processes on your VM by CPU utilization. What command would you run?

10. You have multiple log files in different sub-directories under /tmp that contain the string “.log”. You are requested to find all the files in the different sub-directories. What command would you run?

11. You are asked to install apache web server on your VM. The link to do this can be found here - (LINK). After successful installation of your web server, how can you find out whether the apache web server is running? 

12. Let’s say you have an apache web server running on your VM. How do you kill the process?

13. **(BONUS)** Create an S3 bucket from the AWS console with your name in it for easy identification e.g. <NAME>_<DATE>. Create a file on your VM called hello.txt containing “Hello, World!”. Upload the file from your EC2 to S3 bucket.

**Theoretical Questions**
1. What is meant by the “root” account and what is it used for? Who has access to this account?

2. You were informed that there is something called Ksh and Csh, on top of Bash. What are the differences between these 3?

3. What is a cron in Linux and what is it used for? 

4. You were informed that there are many applications and software built on UNIX. What is the difference between UNIX and Linux?

5. What are the functions of the Linux Kernel?
