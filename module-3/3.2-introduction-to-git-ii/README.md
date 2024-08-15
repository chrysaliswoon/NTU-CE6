# Brief

- You have learned on how to create new repository and create the changes on it. For the assignment, create new repository named with professional naming that you want.

- On the readme file, explain what is GitHub Authentication and how what methods available to be implemented?

- Update the Readme file to contain least 15 github commands and what are the usage of them?

- What are the 4 Github commands that you think you will use the most in the real project and why? 
Explain it on the readme file.

- Create your ReadMe.md file as professional and beautifull as possible. (https://dillinger.io/)

- Push the changes you made to your repository. with different commit.

![Link to Class Live Demo & Branch](https://github.com/del-skillsunion/ce6-git-1/tree/chrysalis)

# GitHub Authentication

GitHub Authentication refers to the process of verifying the identity of users and services interacting with GitHub, ensuring secure access to repositories, APIs, and other resources. There are several methods available for GitHub Authentication, each serving different use cases. Below are some of the main methods available:

### 1. **Username and Password (Basic Authentication)**
This method uses the user's GitHub username and password for authentication. It's the most straightforward but least secure method and is generally not recommended due to security risks, especially because it doesn't support two-factor authentication (2FA).

**Usage:**
```sh
git clone https://username:password@github.com/user/repository.git
```

**Drawbacks:**
- Exposes credentials in URLs.
- Not secure for automated processes.
- GitHub has deprecated password authentication for API and Git operations.

### 2. **Personal Access Tokens (PATs)**
Personal Access Tokens are an alternative to using passwords for Git over HTTPS and for accessing the GitHub API. They provide more security and flexibility, and support scopes, which limit the access permissions.

**Creation:**
- Go to GitHub Settings -> Developer settings -> Personal access tokens -> Generate new token.
- Select scopes based on the permissions needed.

**Usage:**
```sh
git clone https://username:token@github.com/user/repository.git
```

**Advantages:**
- More secure than passwords.
- Allows scoped access.
- Supports 2FA.

### 3. **SSH Keys**
SSH keys are a pair of cryptographic keys used to authenticate with GitHub repositories over SSH. This method is secure and commonly used for both personal and automated access.

**Setup:**
- Generate SSH keys using `ssh-keygen`.
- Add the public key to GitHub under Settings -> SSH and GPG keys.

**Usage:**
```sh
git clone git@github.com:user/repository.git
```

**Advantages:**
- Secure and widely used.
- Doesn't require passwords.
- Can be used for automation.

### 4. **OAuth Apps**
OAuth Apps allow users to authorize third-party applications to access their GitHub resources on their behalf. This method is commonly used for integrating GitHub with other services and applications.

**Setup:**
- Register a new OAuth App in GitHub Settings -> Developer settings -> OAuth Apps.
- Users authenticate through a web flow, providing authorization for the app to access their data.

**Usage:**
- Redirect users to GitHub’s authorization URL.
- Exchange the authorization code for an access token.
- Use the token to make API requests.

**Advantages:**
- Fine-grained permissions.
- Suitable for third-party integrations.
- Users can revoke access at any time.

### 5. **GitHub Apps**
GitHub Apps are a more advanced method for integrating with GitHub. They provide more control and are designed to perform automated tasks, such as CI/CD pipelines, issue management, and more.

**Setup:**
- Create a GitHub App in GitHub Settings -> Developer settings -> GitHub Apps.
- Install the app on repositories or organizations.
- Authenticate using a private key and generate JWT tokens for API access.

**Usage:**
- Generate a JSON Web Token (JWT) for the app.
- Exchange the JWT for an installation access token.
- Use the installation token to make API requests.

**Advantages:**
- Fine-grained permissions and scoped access.
- Can act on behalf of a user or organization.
- Ideal for automation and integrations.

### Summary
- **Username and Password**: Basic and deprecated for security reasons.
- **Personal Access Tokens**: More secure, supports 2FA and scoped permissions.
- **SSH Keys**: Secure, widely used for personal and automated access.
- **OAuth Apps**: For third-party integrations, supports fine-grained permissions.
- **GitHub Apps**: Advanced, ideal for automation with fine-grained permissions and scoped access.

Each method has its use cases and security implications. For most secure and automated workflows, SSH keys, Personal Access Tokens, and GitHub Apps are the recommended methods.

# GitHub Commands List
Those indicated with a 🌟 are usually the commonly used commands in a project.

Here are 15 common GitHub commands along with their usages:

### 1. **git clone 🌟**
   **Usage:** Clone a repository from GitHub to your local machine.
   ```sh
   git clone https://github.com/user/repository.git
   ```

### 2. **git init**
   **Usage:** Initialize a new Git repository in the current directory.
   ```sh
   git init
   ```

### 3. **git add 🌟**
   **Usage:** Add files to the staging area.
   ```sh
   git add file.txt
   ```

### 4. **git commit 🌟**
   **Usage:** Commit changes in the staging area with a descriptive message.
   ```sh
   git commit -m "Commit message"
   ```

### 5. **git status**
   **Usage:** Show the status of the working directory and the staging area.
   ```sh
   git status
   ```

### 6. **git push 🌟**
   **Usage:** Push local commits to the remote repository.
   ```sh
   git push origin main
   ```

### 7. **git pull**
   **Usage:** Fetch and merge changes from the remote repository to the local repository.
   ```sh
   git pull origin main
   ```

### 8. **git fetch**
   **Usage:** Fetch updates from the remote repository without merging.
   ```sh
   git fetch origin
   ```

### 9. **git merge**
   **Usage:** Merge changes from one branch into another.
   ```sh
   git merge feature-branch
   ```

### 10. **git branch**
   **Usage:** List, create, or delete branches.
   ```sh
   git branch               # List branches
   git branch new-branch    # Create new branch
   git branch -d old-branch # Delete branch
   ```

### 11. **git checkout**
   **Usage:** Switch between branches or restore working tree files.
   ```sh
   git checkout main                # Switch to main branch
   git checkout -b new-branch       # Create and switch to new branch
   git checkout -- file.txt         # Discard changes in file.txt
   ```

### 12. **git log**
   **Usage:** Show the commit history for the current branch.
   ```sh
   git log
   ```

### 13. **git diff**
   **Usage:** Show changes between commits, branches, or the working directory and the staging area.
   ```sh
   git diff                         # Changes in working directory
   git diff --staged                # Changes in staging area
   git diff main feature-branch     # Changes between branches
   ```

### 14. **git reset**
   **Usage:** Reset the current HEAD to a specified state.
   ```sh
   git reset HEAD~1                 # Unstage last commit but keep changes
   git reset --hard HEAD~1          # Unstage and discard changes
   ```

### 15. **git remote**
   **Usage:** Manage set of tracked repositories.
   ```sh
   git remote                       # List remotes
   git remote add origin URL        # Add new remote
   git remote remove origin         # Remove remote
   git remote -v                    # List remote URLs
   ```

### Summary
- **Clone and Initialize Repositories:** `git clone`, `git init`
- **Stage and Commit Changes:** `git add`, `git commit`
- **View Repository Status:** `git status`, `git log`, `git diff`
- **Synchronize with Remote Repositories:** `git push`, `git pull`, `git fetch`
- **Branching and Merging:** `git branch`, `git checkout`, `git merge`
- **Reset and Discard Changes:** `git reset`
- **Manage Remotes:** `git remote`