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

    Other commands:

    `/proc/meminfo`: Determine memory usage

    `Vmstat`: Lays out the memory usage statistics

    `Top`: Determines the total memory usage as well as monitors the RAM usage

    `Htop`: Displays memory usage along with other details

2. What is the command to use when you want to change to the directory “/opt/app”?
    
    `cd /opt/app`

3. What is the command that you can run to find all the information regarding running processes on your VM with the name **“app”**?

    `ps aux | grep app`

    Other command:

    `ps -aux | grep app`

4. What is the command that you can run to find all the process ID of running processes on your VM with the name **“app”**
    
    `pgrep app`

5. What is the command that you can run to assume or change your current user to **“root”** user?

    `su -`

    You will then be prompted to enter the root user's password. Once authenticated, you will have switched to the root user's environment until you exit by typing `exit`.

    Other commands:

    `sudo su`

    `sudo su root`

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

    Other command:

    `vi /tmp/ntu/module1/5/assignment.txt`

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
1. What is the command that allows you to change the permissions of a folder **“/tmp/app”** with permissions “Owner - Read, Write, Execute, Group - Read, and Public - Read”? 

    Refer to https://chmod-calculator.com/ 

    *Note: To change the permissions of a folder /tmp/app you can use the `chmod` command in either symbolic or numeric (octal) form.*

    **Numeric (Octal) Method**
    The numeric method uses a three-digit number to represent the permissions:

    - Owner (rwx) = 4 (read) + 2 (write) + 1 (execute) = 7
    - Group (r) = 4 (read) = 4
    - Others (r) = 4 (read) = 4

    Therefore the commond would be:

    `chmod 744 /tmp/app`

2. What is the command that allows you to change the permissions of a folder **“/tmp/app”** with permissions “Owner - Read, Write, Execute, Group - Read, Write, and Public - Read”? 

    Refer to https://chmod-calculator.com/ 

    **Numeric (Octal) Method**

    - Owner (rwx) = 4 (read) + 2 (write) + 1 (execute) = 7
    - Group (r) = 4 (read) + 2 (write) = 6
    - Others (r) = 4 (read) = 4

    Therefore the commond would be:

    `chmod 764 /tmp/app`

3. You have a log file from your application located at **“/var/log/output.log”**. In this file, there are plenty of log information such as INFO, WARN, ALERT, ERROR etc. Your team lead requires you to search the logs for the occurrences of the word “ERROR”. What is the command that you can run to get the expected result?

    Grep, short for **“global regular expression print”**, is a command used for searching and matching text patterns in files contained in the regular expressions. 

    - `grep`: The command-line utility used to search for patterns in text.

    - `"ERROR"`: The string pattern you are searching for. Enclosed in quotes to ensure it is treated as a single search term.

    - `/var/log/output.log`: The path to the log file where you want to search for the pattern.

    Therefore, the command would be:

    `grep "ERROR" /var/log/output.log`

4. Your team lead now would like you to use the same file **“/var/log/output.log”**, but this time, you will need to print the number of times the word “ERROR” is found in the file e.g. 50. What is the command that you can run to get the expected result?

    To print a count of matching lines to standard output, use the -c ( or --count) option.

    - `grep`: The command-line utility used to search for patterns in text.
    - `-c`: The option to count the number of matching lines.
    - `"ERROR"`: The string pattern you are searching for.
    - `/var/log/output.log`: The path to the log file where you want to search for the pattern.

    Therefore the command would be:

    `grep -c "ERROR" /var/log/output.log`

5. Your team is no longer using the directory **“/var/log/output/”**, which still contains a list of files. What single command would you run to remove all the files as well as the directory?

    To permanently remove a directory in Linux, use either the `rmdir` or `rm` command. The `rmdir` or `rm -d` command is for removing empty directories, while the `rm -r` command deletes non-empty directories.

    As the statement says that the directory contains a list of files, this indicate that it is not empty and therefore we would use the `rm -r` command.

    Therefore the full command will be:

    `rm -r /var/log/output/`

6. Create a file called “coaching.txt” in the directory “/tmp/ntu/module1/6/” with the 2 line contents:
    a. “This file is for coaching lessons”
    b. “This file is in the /tmp/ntu/module1/6 directory”

    If the directory doesn't exist yet, we can use `mkdir` to create it:

    `mkdir -p /tmp/ntu/module1/6`

    Next, we will create the two files with it's individual contents:

    `echo "This file is for coaching lessons" > /tmp/ntu/module1/6/coaching.txt`

    `echo "This file is in the /tmp/ntu/module1/6 directory" >> /tmp/ntu/module1/6/coaching.txt`

    If you want to read the contents of the file, we can use `cat`

7. You found out that you have placed the file from the previous question in the wrong folder. You are required to move the file to the folder **“/tmp/ntu/module1/coaching”** instead of **“/tmp/ntu/module1/6”**. What command would you run?

    `mv /tmp/ntu/module1/6/coaching.txt /tmp/ntu/module1/coaching/`

8. On top of that, you found out that you have incorrectly named the file. Instead of **“coaching.txt”**, you are required to rename it as **“coaching-1-6.txt”**. What is the command you would run?

    Note: The `mv` command in Linux is a versatile tool used for moving or renaming files and directories

    `mv coaching.txt coaching-1-6.txt`

9. You are asked to find the top 5 running Linux processes on your VM by CPU utilization. What command would you run?

    `ps`: The command used to display information about active processes.

    `-e`: Selects all processes.

    `-o pid,comm,%cpu`: Specifies the output format to include the process ID (pid), the command name (comm), and the CPU usage percentage (%cpu).

    `--sort=-%cpu`: Sorts the output by the CPU usage percentage in descending order (- indicates descending).

    `head -n 6`: Displays the top 6 lines of the output. We use 6 instead of 5 to account for the header line produced by the ps command.

    Therefore the command will be:

    `ps -eo pid,comm,%cpu --sort=-%cpu | head -n 6`

10. You have multiple log files in different sub-directories under **/tmp** that contain the string **“.log”**. You are requested to find all the files in the different sub-directories. What command would you run?

    `find`: The command used to search for files and directories in a directory hierarchy.
    `/tmp`: The starting directory for the search.
    `-type f`: Specifies that you are looking for files.
    `-name "*.log"`: Searches for files with names that match the pattern *.log (files that contain ".log" in their names).

    Therefore the command is:

    `find /tmp -type f -name "*.log"`

11. You are asked to install apache web server on your VM. After successful installation of your web server, how can you find out whether the apache web server is running? 

    `systemctl status apache2`

12. Let’s say you have an apache web server running on your VM. How do you kill the process?

    `sudo systemctl stop apache2`

13. **(BONUS)** Create an S3 bucket from the AWS console with your name in it for easy identification e.g. <NAME>_<DATE>. Create a file on your VM called hello.txt containing “Hello, World!”. Upload the file from your EC2 to S3 bucket.

**Theoretical Questions**
1. What is meant by the “root” account and what is it used for? Who has access to this account?

    - Root user refers to a special user account that has the highest level of privileges and authority within the system, granting unrestricted access to all files, directories, commands, and system resources
    
    **What is it used for:**

    - **System configuration and customization:** It enables administrators to tailor systems to specific requirements such as make modifications to system configurations, install or remove software packages, and customize the operating system.
    
    - **System updates:** It is often needed to apply system updates and security patches.
    
    - **Account management:** It allows users to create, modify, and delete user accounts and manage access controls.
    
    - **Security management:** It is crucial for managing system security such as configuring firewall settings, enabling or disabling services, and applying security policies.

2. You were informed that there is something called Ksh and Csh, on top of Bash. What are the differences between these 3?

    ![Differences](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcpc9Or3JYO8Ya9geHvwEkzk4J97xziuEAIC0QB-nMA&s)

3. What is a cron in Linux and what is it used for? 

    It allows you to schedule jobs for the Linux operating system.

    Say, for example, you've written a simple backup script to back up everything in your Documents folder. Instead of running that backup script manually every day or week, you can use cron to make it automatic.

4. You were informed that there are many applications and software built on UNIX. What is the difference between UNIX and Linux?

    ![Difference between UNIX & LINUX](https://www.theknowledgeacademy.com/_files/images/Unix_vs_Linux_The_differences.png)

5. What are the functions of the Linux Kernel?

    1. **Process Management:** The kernel manages the execution of processes, allocating system resources such as CPU time, memory, and input/output (I/O) devices. It schedules processes, switches between them, and ensures fair and efficient resource utilization.

    2. **Memory Management:** The kernel handles memory management, including allocating and deallocating memory for processes and managing the virtual memory system. It provides mechanisms for memory protection, virtual memory mapping, and swapping data between physical memory and disk storage.

    3. **Device Drivers:** The kernel includes device drivers that enable communication between the operating system and hardware devices such as disk drives, network interfaces, graphics cards, and input devices. These drivers facilitate data transfer, device control, and interaction with the hardware.

    4. **File System Management:** The kernel manages file systems, providing the necessary interfaces and operations for creating, reading, writing, and deleting files. It handles file access permissions, file metadata, and directory structures.

    5. **Networking:** The kernel implements networking protocols, allowing communication over local area networks (LANs) and the internet. It manages network interfaces, routing tables, network protocols (such as TCP/IP), and socket communication.
    
    6. **Security:** The kernel includes security mechanisms to protect the system and user data. It enforces access control policies, handles user authentication, manages permissions, and provides isolation between processes.

    7. **Interprocess Communication:** The kernel facilitates communication and data exchange between processes through mechanisms such as pipes, sockets, shared memory, and signals.

# Additional Notes

### Relative vs Absolute Path

![Relative vs Absolute path](https://www.devopsschool.com/blog/wp-content/uploads/2022/04/linux-tutorial-absolute-relative-2.jpg)


# Resources & References
- https://www.digitalocean.com/community/tutorials/grep-command-in-linux-unix
- https://linuxize.com/post/how-to-use-grep-command-to-search-files-in-linux/
- https://www.hostinger.com/tutorials/how-to-remove-files-and-folders-using-linux-command-line/#:~:text=new%20VPS%20users.-,How%20to%20Remove%20a%20Directory%20in%20Linux,you%20must%20know%20its%20name.
- https://unstop.com/blog/how-to-create-a-file-in-linux
- https://www.freecodecamp.org/news/linux-list-processes-how-to-check-running-processes/
https://phoenixnap.com/kb/rename-file-linux
- https://phoenixnap.com/kb/check-cpu-usage-load-linux
- https://nordvpn.com/cybersecurity/glossary/root-user/
- https://www.zdnet.com/article/what-is-cron-in-linux-and-how-do-you-use-it/
- https://www.alibabacloud.com/blog/what-is-linux-kernel_599980#:~:text=Functions%20of%20Linux%20Kernel&text=Memory%20Management%3A%20The%20kernel%20handles,physical%20memory%20and%20disk%20storage.