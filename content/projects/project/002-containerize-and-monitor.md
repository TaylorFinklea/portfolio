---
head:
  meta:
    - name: 'keywords'
      content: 'project, prometheus, grafana, cloud, monitoring, docker, container, containerize, ci, continuous integration, ansible, bash'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Containerize and Monitor'
  description: 'Containerization brought our infrastructure to the next level. Before this project, all of the microservices were manually built and deployed directly on the host. I used my previous knowledge of Docker to get a CI process developed and standardize our images. Finally, after being woken up many times in the night for something being broken, it was time to do some monitoring. '
  image: 'https://unsplash.com/photos/jOqJbvo1P9g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8c2hpcHBpbmclMjBjb250YWluZXJ8ZW58MHx8fHwxNjc2Mzg0NTIz&force=true&w=1920'
---

## The Project
The scope of this project was two-fold, I needed to modernize our Continuous Integration process and monitor the health of our systems. 

### Containerize
I had many years of experience with Docker before this project started, so I didn't need to spend a lot of time on research and discovery. I started very similar to the Azure Migration I had just completed by identifying the priority and criticality of the service, which microservices could be built with a Dockerfile, and which were going to use an image from Docker Hub. 

<br>
I created an outline for the order in which services would be containerized and tested to ensure they would work alongside the services still in the legacy environment. After that came the actual migration, which went smoothly. 

### Continuous Integration
To better automate the process for building, I set up a custom CI process using ansible and bash to build the new images and push them to production. This laid the foundation for later when I implemented a proper CI Pipeline. 

### Monitor
Once I had migrated our services to Docker, it was simple to add in monitoring. I decided to use Prometheus which integrated nicely with containers, and of course the entire system ran in Docker. Using a combination of Prometheus, Grafana, Alert Manager and Blackbox Exporter, I created a robust monitoring system that is still used today. 

## Wrap Up
With the ability to easily deploy any service on any VM, the environment was resistant to critical system failures. Pairing that with Prometheus I was able to catch most problems before they went critical, and stopped getting calls in the middle of the night.