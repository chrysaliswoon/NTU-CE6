# Brief
- You have learned on how to create new repository and create the changes on it. For the assignment, create new repository named "github-3.1-your-name" or other professional naming that you want.

- Update the Readme file to contain all github command you have learned and explain what are the usage of them.

- Create your ReadMe.md file as professional and beautiful as possible. (https://dillinger.io/)
Push the changes you made to your repository.

- Add your new repository link to blackboard. Dont forget to createc the repository as public so that we can access it.

# Overview of Github Commands & How Git Works

## How Git Works

![How Git Works](https://miro.medium.com/v2/resize:fit:1386/format:webp/1*pEduJdPky05DeojVGVtPpQ.jpeg)

![Overview of Git Workflow](https://razorops.com/images/blog//git-work-flow.gif)

# How to use Git with multiple developers

![Developer Git](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd47de46b-2c7b-43d2-8a9a-a2ebb7600347_1324x2004.jpeg)

## Start a new project

**Create a local repo to initialise the current directory as a git repo**

```
git init <directory>
```

**Download a remote repo and clone the forked repository to your local machine**

```
git clone <url>
```

## Make & Commit a new change

**Add a specific file to staging**

```
git add <file>
```

**Add all files to staging**

```
git add .
```

**Commit all staged files to git**

```
git commit -m "commit message"
```

Add all changes made to tracked files & commit 

```
git commit -am "commit message"
```

## Git Branches

**List all local branches**

```
git branch
```

**Create a new branch**

```
git branch <new-branch>
```

**Switch to a branch & update the working directory by checking out your branch locally**

```
git checkout <branch>
```

**Create a new branch and switch to it**

```
git checkout -b <new-branch>
```

**Delete a merged branch**

```
git branch -d <branch>
```

**Delete a branch whether merged or not**

```
git branch -D <branch>
```

**Add a tag to current commit**

```
git tag <tag-name>
```



# References & Resources
- https://medium.com/@sujanaddy98/how-git-works-a-visual-guide-with-code-b4edf2694298
- https://blog.bytebytego.com/p/ep-40-git-workflow
- https://razorops.com/blog/5-types-of-git-workflow-&-explanation-of-each-flow