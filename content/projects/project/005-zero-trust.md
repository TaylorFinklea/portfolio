---
head:
  meta:
    - name: 'keywords'
      content: 'project, zero trust, zero-trust, cloud, cloudflare, firewall'
    - name: 'author'
      content: 'Taylor Finklea'
navigation:
  title: 'Zero Trust'
  description: 'To reduce attack surface and increase visibility, I needed to implement a zero-trust architecture. This was one of the most complex problems I have been presented with, and it took many iterations to land on the final production-ready solution.'
  image: 'https://unsplash.com/photos/M5tzZtFCOfs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8bmV0d29ya2luZ3xlbnwwfHx8fDE2NzY0NjQzMDg&force=true&w=1920'
---

## The Project
The goal was to reduce our attack surface in the event of a breach, and gain added visibility into the traffic moving through our environment. I needed a solution that would be cost effective while providing the added security benefits

### Type One
There are essentially two different ways that a zero trust architecture is implemented. First you eliminate the need for a point-to-site VPN within the organization. For accessing internal websites, there are many tools such as Cloudflare Zero Trust that handles the routing for you, while putting authentication in front of your ingress. This is the easiest solution and usually takes care of a majority of your users. 

<br>
For those who need direct access to internal resources, or need to access services other than HTTP/HTTPS, you can utilize a bastion or jump host to get into the environment you need to work in. In my case, I chose to use a combination of Cloudflare Zero Trust and Bastion. This allows most users the access they need to internal websites, while allowing greater access to technical staff who need direct access to resources. All access to these bastion hosts are logged and conditional access is applied to detect anomalies.

### Type Two
The second form of zero trust is to design your network so that other networks don't trust each other explicitly. This can be achieved using a logical hub and spoke network design, where the hub is a cloud-native firewall and the spokes are your networks. You make your spoke networks just big enough for the service they run and leave a little room for scaling. All traffic to other services needs to pass through the firewall where you specify allowed access. 

<br>
I decided to utilize the Azure Virtual WAN as the hub with an Azure Firewall, and to manage the firewall rules with GitOps and Terraform. The Azure Firewall sends all traffic logs to the SIEM, and implements Intrusion Prevention policies. 

### Tailscale
An even better way to implement the second type of zero trust network is using Access Control Lists. This is where solutions like Tailscale, Teleport, ZeroTier, Netmaker, etc. Rather than hard-coding allowed IPs and ports, you grant access based on the service or user accessing the port or service on the other end. You still utilize a hub and spoke network, but there are no trust rules between them. Any communication outside of the local network will need to go through the ACLs. 

<br>
The benefit to this approach is you can set up logical access groups, and don't have to worry about tracking down IP addresses. If a service is decommissioned, you just remove those ACLs from your configuration. I am in the process of planning out this solution to replace the need for Azure Firewall Rules.

## Wrap Up
With the onset of cloud computing, this is much more secure than traditional networking. Though there are several good options to choose from, there is surprisingly little documentation on how to properly implement a modern zero trust network. With a lot of trial and error, I ended up with a good solution that we can continually improve upon.