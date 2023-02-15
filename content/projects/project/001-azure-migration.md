---
head:
  meta:
    - name: 'keywords'
      content: 'project, azure, migration, cloud'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Migrating to Azure'
  description: 'I have done many cloud migration during my career, but this particular migration was the largest by far. I planned and executed the migration of two datacenters, with over 200 virtual machines and zero downtime.'
  image: 'https://unsplash.com/photos/K-Iog-Bqf8E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y2xvdWR8ZW58MHx8fHwxNjc2Mzg0NDUw&force=true&w=1920'
---

## The Project

I needed to move over 200 VMs from ESXi to Azure without any downtime. At the time there weren't any nice migration tools that worked well, so this would be a new build and then a switchover. I started by standardizing how we were going to deploy resources in Azure as there weren't any pre-existing naming convention or run books. We also needed a cloud-native SIEM that could replace our legacy on-premise solution.

### Planning
I inherited a lot of different operating systems and versions, many of them out of date. I simplified our environment by choosing the same linux distro for all linux VMs, and using the latest version of Windows and Windows Server. I then outlined the project plan by labeling every resource in a datacenter with an OS, description of services and applications, criticality and priority. 

<br>
With this information I outlined a timeline for when each VM would be migrated, tested and deployed into production. To minimize downtime, every resource received a DNS record so that the IP of the new resource could be added to that record, and then the old IP could be removed once the migration was complete. New VNETs were set up to offer better segregation between servers.

### VPN
One of the biggest challenges was working around the old Site-to-Site VPN that was critical for the delivery of the service. Since that VPN could not be taken down or migrated, I needed to come up with another plan. I ended up setting up a Site-to-Site VPN from the datacenter to Azure and then slicing out a section of the address space that the new resources could be allocated.

### Office 365
We also needed to migrate our old Exchange server to Office 365. Thankfully I had performed dozens of these migrations in previous roles, and it went smoothly using tools like BitTitan MigrationWiz.

### Migration
The migration took several months but the plan paid off. In the end I was able to migrate each resource one-by-one and turn off the old servers. There was no major downtime and most people in the company didn't even know that anything had changed. I also set up Azure Sentinel as our SIEM in the cloud and configured it to hand over to our SOC.

## Wrap Up
My previous experiences with migrations to Azure helped me pull this large scale migration off smoothly. Now that everything was in Azure, it was time to improve the overall architecture.