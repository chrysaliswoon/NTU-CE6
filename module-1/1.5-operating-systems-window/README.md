![Windows OS](https://www.digitaltrends.com/wp-content/uploads/2018/06/cropped-windows-7-wallpaper.jpg?p=1)

# Introduction

Microsoft Windows, also called Windows and Windows OS, computer operating system (OS) is developed by Microsoft Corporation to run personal computers (PCs).

The first version of Windows, released in 1985, was simply a GUI offered as an extension of Microsoft’s existing disk operating system, or MS-DOS.

<p align="center">
  <img src="https://cdn.ttgtmedia.com/rms/onlineimages/microsoft_windows_timeline_the_38_year_evolution-f_mobile.png" alt="Windows Timeline">
</p>

# Brief
This assignment will be a research assignment.

Choose one topic and discuss with your group the following:

- What is the difference between CMD and Powershell?
- What are the other features in Windows that are available to administrators?
- What is the system registry and how can it be accessed in Windows?
- What is the difference between Windows 10 and 11?

Selected group may be required to share a quick presentation no longer than 10min.

# What is the difference between CMD and Powershell?

Command Prompt (CMD) and PowerShell are both command-line interfaces available in Windows operating systems, but they have significant differences in terms of functionality, syntax, and capabilities.

PowerShell offers a more modern and powerful environment for system administration, scripting, and automation, whereas CMD remains more basic and limited in functionality.

<p align="center">
  <img src="https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2018/04/PowerShell-VERSUS-Command-Prompt.jpg" alt="Difference between CMD & Powershell">
</p>

### Command Prompt (CMD)

Command Prompt, often referred to as CMD, is the traditional command-line interface in Windows. It’s known for executing entered commands and is deeply rooted in the MS-DOS legacy.

![Command Prompt](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1xcfRT1PEItJkUDP3npxrg.png)

### Powershell

PowerShell, on the other hand, is a more advanced command-line shell and scripting language. It extends the capabilities of CMD with more flexibility and control, particularly suited for system administration.

![Powershell](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Jsb_bt1MMgGqgocts92arQ.png)

# What are the other features in Windows that are available to administrators?

1. **Group Policy**: Group Policy allows administrators to manage and enforce computer and user settings across an organization's network. It's a powerful tool for controlling security settings, deploying software, and configuring user preferences.

2. **PowerShell**: PowerShell is a command-line shell and scripting language that enables administrators to automate tasks and manage Windows systems more efficiently. It provides access to a wide range of administrative functions and can be used for tasks ranging from simple to complex automation.

3. **Remote Desktop Services (RDS)**: RDS allows users to access Windows applications and desktops remotely. Administrators can deploy and manage virtual desktop infrastructure (VDI), session-based desktops, and RemoteApp programs to provide centralized access to resources.

# What is the system registry and how can it be accessed in Windows?

The Windows registry is a centralized, hierarchical database that manages resources and stores configuration settings for applications on the Windows operating system. It serves as a central repository for storing information that Windows and installed software use to function properly.

**Accessing the Windows Registry can be done using several methods:**

1. **Registry Editor (regedit)**: The most common tool for accessing and editing the registry is the Registry Editor, also known as regedit. 

    a. Press `Win + R` to open the Run dialog, type `regedit`, and press Enter.

    Alternatively, you can search for "Registry Editor" in the Start menu or Start screen and open it from there.

    ![Registry Editor](https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/what_is_the_windows_registry_academy/img-02.png?width=700&name=img-02.png)

    b. Click **Yes** on the window asking for permission to open the editor. The registry editor will open with the five main registry folders (or hives) listed.

    ![Permission setting](https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/what_is_the_windows_registry_academy/img-03.png?width=2780&name=img-03.png)

2. **Command Prompt (reg command)**: You can use the `reg` command-line tool to perform registry operations from the Command Prompt. Some common commands include:
`reg query`: View registry keys and values.
`reg add`: Add new keys and values to the registry.
`reg delete`: Delete registry keys and values.
`reg import`: Import registry settings from a file.
`reg export`: Export registry settings to a file.

3. **PowerShell**: PowerShell also provides cmdlets for interacting with the registry. Some common cmdlets include:
`Get-Item`: Retrieve registry keys and values.
`New-Item`: Create new registry keys.
`Remove-Item`: Delete registry keys and values.
`Set-ItemProperty`: Set registry values.

# What is the difference between Windows 10 and 11?

Some differences between Windows 10 and 11 are:

- Windows 11 requires a 64-bit processor with 2 cores, 4GB RAM, and 64GB storage, while Windows 10 requires a 64-bit processor with 1 GHz clock speed, 2GB RAM, and 20GB HDD.

- Windows 11 has a redesigned Microsoft Store with support for Android apps, while Windows 10 has a traditional Microsoft Store. 

- The Start Menu in Windows 11 has a new design with pinned and recommended apps, while Windows 10 has a classic Start Menu with limited features.

- Cortana is separated from search in Windows 11 and is no longer integrated into the taskbar, while it is integrated into the taskbar in Windows 10.

<p align="center">
  <img src="https://cdn-dfknk.nitrocdn.com/BMGKLORDabDBCUPuWOjTkLVrPSWteURh/assets/images/optimized/rev-da88bc7/www.stellarinfo.co.in/blog/wp-content/uploads/2022/05/Comparison-Table-Windows-10-vs-Windows-11.jpg" alt="Windows 10 versus Windows 11">
</p>

# References & Resources
- https://www.avast.com/c-windows-registry
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/reg
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/?view=powershell-7.4
- https://www.microsoft.com/en-us/windows/compare-windows-11-home-vs-pro-versions