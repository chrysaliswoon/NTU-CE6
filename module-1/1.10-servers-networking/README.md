# Brief
Within groups, you will be tasked to choose one of the scenarios below and discuss how would you design the server architecture for the selected scenario based on the methods we've discussed in class today.

**Case:**

- eCommerce e.g. Shopee/ Lazada
- Financial Institution e.g. DBS Mobile Banking app
- Government e.g. IRAS Tax System
- Personal Static Website e.g. Wordpress blog
- eMail Application e.g. Gmail
- Ride-Hailing application e.g. Grab/ Gojek
- Mobile Gaming application e.g. PUBG

**Method:**

- Clustering
- Load Balancing
- Containerization or Virtualization
- Whitelisting
- Blacklisting

You may combine more than 1 method and give details what and why you do it.

# Financial Institution Server Architecture (i.e. DBS)

## Clustering 

In clustering, you could set up multiple database servers that work together to share the workload and provide high availability and fault tolerance. You can configure them to replicate data between nodes to ensure data redundancy and resilience against server failures.

## Load Balancing
With load balancing, you could deploy multiple database servers and use a load balancer to distribute incoming database requests across these servers evenly. This helps distribute the workload and prevents any single server from becoming a bottleneck.

## Containerization or Virtualization
You can use containerization (e.g., Docker) or virtualization (e.g., VMware, VirtualBox) to create isolated environments for running database instances. This allows for easy scalability, resource optimization, and deployment flexibility.

## Whitelisting
Whitelisting involves specifying which IP addresses or domains are allowed to access the database servers. You can configure firewall rules or security groups to only allow traffic from trusted sources, thus enhancing security by reducing the attack surface.

## Blacklisting
Blacklisting involves specifying which IP addresses or domains are not allowed to access the database servers. You can configure firewall rules or security groups to block traffic from known malicious sources, thus protecting the servers from unauthorized access and potential attacks.