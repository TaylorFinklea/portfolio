---
head:
  meta:
    - name: 'keywords'
      content: 'project, kubernetes, migration, cloud, aks, eks, gke, helm, rke2, k3s, cluster, nomad, docker, docker-swarm, k8s'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Kubernetes'
  description: 'We finally outgrew the capacity of Docker and started to look for an orchestration platform for our containers. I evaluated Docker Swarm and Nomad but decided that Kubernetes with Helm fit our needs the best.'
  image: 'https://unsplash.com/photos/eUMEWE-7Ewg/download?force=true&w=1920'
---

## The Project
I honestly tried to avoid Kubernetes as long as possible. Most of what I had heard were horror stories of self managed k8s clusters and etcd nightmares. For me that sounded like a lot of drawbacks for the single benefit of orchestration. So I tried all of the alternatives that I could find.

### Docker Swarm and Nomad
Docker swarm was a natural next step since I was using Docker defined with Docker Compose in production. Once I really started to use it though, I found it's documentation, performance and stability vastly lacking. After being fed up with it just not ever working right, I set off for another alternative.<br><br>

I had high hopes for HashiCorp's Nomad. Since I already have extensive experience in their other products, it seemed that Nomad was the perfect answer to my problem. After getting it set up and really using it in a production manner however, I also found it's documentation lacking. I would run into issues without useful error messages and couldn't find the answers online or on their documentation. There just isn't much of a community behind Nomad right now, but we'll see how they do in the future.

### Managed Kubernetes
Instead of trying to set up and manage our own cluster, I looked into managed clusters like AKS, EKS and GKE. Since we already have most of our infrastructure in Azure, AKS was a natural choice. It took some work but I have created a robust Terraform plan for deploying an AKS cluster without needing to do any manual tasks after deployment.<br><br>

The best part is that the control plane is behind Azure Authentication, which makes it convenient yet secure to manage. Azure also has integrated it into their Security Center or Defender for Cloud platform which gives security recommendations and scans for vulnerabilities.<br><br>

I plan to do the same work for EKS and GKE to build using Terraform and deploy our production workload to either or both for redundancy and disaster recovery. The best part about managed kubernetes is you are not locked into the vendor, under the surface it is still just k8s. That makes it portable and flexible to move your applications wherever your infrastructure needs take you.

### RKE2, K3s and Talos
Managed kubernetes was the right answer for this project, but I still wanted to understand what was being managed for me. After a lot of research, I found that RKE2 and K3s from Rancher are great options that run on practically any Unix based OS. I chose to deploy RKE2 on Suse Enterprise Micro OS for an immutable and repeatable solution.<br><br>

I also deployed a full Talos cluster and after figuring out some of the issues on my own, am very happy with it. The documentation is extensive and they have a good community for when you run into trouble. Unlike Micro OS which is immutable but still allows access via SSH and changes using `transactional-update`, Talos is entirely immutable to the point that you cannot even directly access the system. All configuration and management goes through their `talosctl` API and is configured in YAML files.<br><br>

Talos also creates and manages the k8s cluster for you using the API. Once it's set up, it really feels like using a managed Kubernetes such as AKS. The best part is that it installs pretty much everywhere, I've installed it in Docker, VMs, in the cloud and on bare metal. <br><br>

### Helm
I cannot see managing Kubernetes without helm. While you can write and apply manifests directly using `kubectl`, they are static and inflexible. Helm allows you to template your manifests and creating complex and reusable deployments. Helm paired with Terraform makes for robust GitOps and eliminates most of the potential human error.

## Wrap Up
I am currently running both Micro OS with RKE2 and Talos. I feel that both stacks have their place, and when paired with projects like metallb, can be a very powerful alternative to a cloud managed Kubernetes cluster, without the overhead of managing k8s on your own.<br><br>

In the end, I really do love Kubernetes thanks to amazing projects like RKE2, K3s and Talos. If you have a small team or are just getting started with Kubernetes, then a cloud managed cluster like AKS, EKS or GKE are great solutions. When paired with Helm, Kubernetes has the flexibility to become whatever you need it to be and host your applications in a scalable and immutable manner.