---
head:
  meta:
    - name: 'keywords'
      content: 'project, terraform, iac, cloud, infrastructure-as-code, infrastructure as code, packer, immutable'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Infrastructure as Code'
  description: 'I had become very proficient with writing PowerShell scripts and utilizing the Azure CLI for managing our resources in Azure. One of my pain points was the need to reconfigure or redeploy resources when they inevitably stopped working. I knew there had to be a better way to manage infrastructure and eventually discovered Terraform and Packer.'
  image: 'https://unsplash.com/photos/OqtafYT5kTw/download?ixid=MnwxMjA3fDB8MXxjb2xsZWN0aW9ufDV8Wlg2Y1NmbHVBSEF8fHx8fDJ8fDE2NzYzODQ4ODM&force=true&w=1920'
---

## The Project
When a new system or services is deployed, it starts out fully patched and configured specifically to provide the service. Over time, the system becomes outdated and the configuration changes subtlety either due to human intervention or changes in the underlying software.

<br>
While there are many great tools out there for configuration management, I knew that there had to be a better way than deploying a system manually with PowerShell scripts and then relying on something like Ansible to get it to the proper configuration. I needed each system to be ephemeral and support being destroyed and rebuilt at will.

### Terraform
From the first moment that I used Terraform, I was hooked. It was able to do everything that my PowerShell scripts were already doing, but in a stateful manner. I also quickly picked up on HashiCorp's HCL syntax and appreciated the flexibility it offered. 

<br>
I created my own custom modules for resources that I deployed frequently and made them flexible to be used in many different situations. For example, I created a very robust module for deploying a virtual machine to Azure. You can pass it any specific Linux or Windows OS, have it pull the latest version of any OS, add additional disks, network interfaces, join to a domain etc. 

### Persistent Data
After I switched our deployment process to using Terraform, the next problem to solve was how to make the systems more ephemeral. This was not too challenging with Linux, as I could use storage accounts (or storage buckets in AWS) to save persistent data to. The biggest issue was with our Windows VMs, where I needed the ability to destroy a VM and recreate it, but persist user data.

<br>
I ended up using a service called FSLogix to create a roaming profile that could be saved to a storage account. This allowed me to make every user account persistent while the underlying OS could be recreated at will.

### Packer
I was ready to create my images using Packer. Unlike "Golden Images" that were popular a few years ago, images built with Packer require no manual configuration. The software will pull the specified version of the operating system, usually using the latest patch, and will apply any post-installation processes you may require. 

<br>
I was able to do everything that I needed through PowerShell and Bash scripts, but could have used something like Chef or Puppet. This gave me the ability to generate a production-ready image running the latest operating system with no manual work.

## Wrap Up
Terraform and Packer are an incredible combination, and gave me the ability to create immutable systems that could be destroyed and recreated at will. 