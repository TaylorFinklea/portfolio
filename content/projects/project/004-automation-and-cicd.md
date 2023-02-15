---
head:
  meta:
    - name: 'keywords'
      content: 'project, azure-devops, github-actions, github, cicd, pipeline, automation'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Automation and CI/CD'
  description: 'If I have to do something manually more than two times, I find a way to automate it. This was happening frequently after we implemented Infrastructure as Code and containerized all of our applications, so I set off to learn CI/CD pipelines to automate it.'
  image: 'https://unsplash.com/photos/Q1p7bh3SHj8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fHx8MTY3NjM4NDU4NQ&force=true&w=1920'
---

## The Project
I created a lot of new systems and procedures using modern best practices, but was still manually deploying many of them from my local machine. I needed to find a platform that could run my pipelines and integrate easily with Terraform. I also needed a way to project secrets injected at build and deploy time.

<br>
Additionally I wanted to automate tasks such as patching and scripting without needing to rebuild every time. 

### Azure DevOps
At the time I was using Azure DevOps Boards for Agile planning, as well as Repos hosting my git repos. Naturally I developed our CI/CD using Azure DevOps Pipelines. I was then able to deploy Terraform automatically on pull request or manually from the UI. 

<br>
Rather than saving the secrets directly to Azure DevOps, I set them up in an Azure KeyVault so that they could be used elsewhere and to centralize our secrets management. I also configured Terraform to use an Azure storage account for the backend, so that the state was persistent.

### Azure Automation Accounts
To solve the patching and scripting issue, I utilized Azure Automation Accounts to automatically deploy patches on a regular schedule. Using the same system, I was also able to deploy PowerShell, Bash or Python scripts to any systems in Azure. This greatly simplified auto-remediation for issues found in the environment, before a rebuild could take place.

### Migration to Github
After a little over two years in Azure DevOps, I decided to switch to Github and Github Actions. This platform feels better thought out and integrates nicely with other tools and performs security scanning using Dependabot. I also migrated our service principals to using OIDC tokens, to add better security to our pipelines and further segregate our development, qa and production environments.

<br>
Using a base workflow, I was able to create reusable workflows in GitHub Actions. This ensures that the base tasks like deploying with Terraform are managed in a single file, and any additional tasks or customization can be added to a child workflow.

## Wrap Up
I thoroughly enjoy automating processes in our CI/CD pipelines and using platforms like Azure Automation Accounts. While I do prefer GitHub, Azure DevOps does offer a great all-in-one platform for managing your DevOps solution. I am continually finding ways to further automate and and simplify our build and deployment.