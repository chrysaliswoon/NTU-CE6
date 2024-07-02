# Brief

## Theoretical Assignment

### Explore the difference between AWS CloudFront and a commercial 3rd party tool like Cloudflare. In what situation would you use CloudFront over Cloudflare and vice versa?

AWS CloudFront and Cloudflare are both content delivery networks (CDNs) that help to deliver content to users more quickly and reliably. However, they have some key differences in terms of features, pricing, and ideal use cases. Here is a comparison of the two:

### AWS CloudFront
**Overview:**
- **Provider:** Amazon Web Services (AWS)
- **Integration:** Deeply integrated with other AWS services like S3, EC2, Lambda@Edge, and more.
- **Global Network:** Uses Amazon's global infrastructure with edge locations around the world.
- **Security:** Offers features like AWS Shield for DDoS protection, AWS WAF (Web Application Firewall), and SSL/TLS encryption.
- **Pricing:** Pay-as-you-go model, which can be cost-effective for varying levels of usage, but may become expensive for high traffic volumes.

**Strengths:**
- **Integration with AWS Ecosystem:** Seamlessly works with other AWS services, which is ideal for users heavily invested in the AWS ecosystem.
- **Customizable:** Supports Lambda@Edge, allowing you to run code closer to users for personalization and low latency.
- **Security:** Advanced security features that can be tailored to specific needs, especially for enterprise-level security requirements.

**Ideal Use Cases:**
- When you are already using other AWS services and need a CDN that integrates seamlessly.
- When you need to customize content delivery through edge computing (using Lambda@Edge).
- When advanced security configurations are required, leveraging AWS’s security suite.

### Cloudflare
**Overview:**
- **Provider:** Cloudflare, Inc.
- **Integration:** Works with any web server, regardless of the underlying cloud or hosting provider.
- **Global Network:** Extensive network with data centers in many locations worldwide.
- **Security:** Includes built-in DDoS protection, a Web Application Firewall (WAF), SSL/TLS, and other security features.
- **Pricing:** Offers a free tier with limited features and various paid plans, which can be more cost-effective for certain use cases, especially for small to medium-sized businesses.

**Strengths:**
- **Ease of Use:** User-friendly interface and easy setup process, even for users without extensive technical expertise.
- **Performance:** Strong performance with a focus on reducing latency and improving load times.
- **Comprehensive Security:** Robust security features available even on the free tier, making it accessible for smaller projects and businesses.
- **Additional Services:** Provides a range of additional services such as DNS management, content optimization, and analytics.

**Ideal Use Cases:**
- When you need a quick and easy CDN setup with minimal integration effort.
- When cost is a concern, especially for smaller businesses or projects that can leverage the free tier.
- When you need comprehensive security features without deep technical configuration.
- When you require additional services like DNS management, content optimization, or analytics.

### Situations to Use CloudFront Over Cloudflare:
1. **AWS Integration:** If your infrastructure is heavily based on AWS, CloudFront’s seamless integration with other AWS services can be a significant advantage.
2. **Advanced Customization:** If you need to run custom code at the edge, CloudFront’s Lambda@Edge capabilities are highly beneficial.
3. **Enterprise Security:** For enterprises requiring extensive and customizable security configurations, CloudFront combined with AWS’s security tools can offer a more tailored solution.

### Situations to Use Cloudflare Over CloudFront:
1. **Simplicity and Speed:** If you need a CDN that is quick and easy to set up, Cloudflare’s user-friendly interface is ideal.
2. **Cost-Effectiveness:** For smaller projects or businesses, Cloudflare’s free tier and lower-cost plans can be more economical.
3. **Non-AWS Infrastructure:** If your infrastructure is not based on AWS, Cloudflare’s independent nature makes it a better fit.
4. **Comprehensive Security and Additional Services:** If you need a wide range of services beyond just CDN and security, such as DNS management and performance optimization, Cloudflare’s offerings are more extensive.

In summary, the choice between AWS CloudFront and Cloudflare largely depends on your specific needs, existing infrastructure, and budget. CloudFront is ideal for those deeply embedded in the AWS ecosystem and requiring advanced customization and security. Cloudflare is better for those needing a quick, cost-effective, and comprehensive solution with a broad range of additional services.

### Explore the difference between AWS CloudFront and a caching tool like AWS Elasticache. What are the differences between the two? When would you use CloudFront and when would you use Elasticache?

AWS CloudFront and AWS ElastiCache are both services that can improve the performance and scalability of your applications, but they serve different purposes and work in different ways. Here’s a detailed comparison of the two:

### AWS CloudFront
**Overview:**
- **Type:** Content Delivery Network (CDN)
- **Purpose:** Accelerates the delivery of static and dynamic web content to users by caching copies of content at edge locations around the world.
- **Functionality:**
  - Distributes content from a central location to edge locations closer to the user.
  - Reduces latency by serving content from edge locations.
  - Caches static content (e.g., images, videos, stylesheets) and dynamic content (e.g., API responses).
  - Provides features like SSL/TLS encryption, DDoS protection, and custom domain support.

**Use Cases:**
- **Static Content Delivery:** Serving static assets such as images, videos, and other media files.
- **Dynamic Content Delivery:** Accelerating API responses and dynamic web pages.
- **Global Reach:** Delivering content to a global audience with low latency.
- **Security:** Enhancing security with features like HTTPS, DDoS protection, and AWS WAF integration.

### AWS ElastiCache
**Overview:**
- **Type:** In-memory caching service
- **Purpose:** Accelerates application performance by caching frequently accessed data in memory, reducing the need to repeatedly query databases.
- **Functionality:**
  - Provides managed Redis and Memcached services.
  - Caches data and objects in memory for real-time applications.
  - Reduces database load by storing frequently accessed data in-memory.
  - Supports advanced data structures (in Redis) like sorted sets, lists, and more.

**Use Cases:**
- **Database Query Caching:** Caching results of frequent database queries to reduce latency and database load.
- **Session Management:** Storing user session data for quick access and reduced latency.
- **Real-time Analytics:** Accelerating analytics and real-time data processing.
- **Leaderboard and Counting:** Managing real-time counters, leaderboards, and other data that require quick read/write operations.

### Key Differences

**1. Primary Use Case:**
- **CloudFront:** Optimized for distributing web content and APIs to users around the world with low latency.
- **ElastiCache:** Optimized for reducing latency in data access and improving database performance by caching data in memory.

**2. Type of Content:**
- **CloudFront:** Caches and serves web content (static and dynamic) to end-users.
- **ElastiCache:** Caches data from databases or applications for faster retrieval.

**3. Location of Cache:**
- **CloudFront:** Caches content at edge locations globally.
- **ElastiCache:** Caches data in-memory within the AWS region where the ElastiCache instance is running.

**4. Integration:**
- **CloudFront:** Often used in conjunction with other AWS services like S3, EC2, and API Gateway for content delivery.
- **ElastiCache:** Used in conjunction with databases like RDS or DynamoDB, and applications hosted on EC2 or other compute services.

### When to Use CloudFront:
1. **Content Delivery:** When you need to deliver web content (e.g., HTML, CSS, images, videos) to users around the world with low latency.
2. **Global Audience:** When your application serves a global user base and needs to reduce latency by caching content close to users.
3. **API Acceleration:** When you need to accelerate the delivery of dynamic content and APIs to users.

### When to Use ElastiCache:
1. **Database Caching:** When you need to reduce the load on your database by caching frequent queries.
2. **Session Management:** When you need to store session data for quick access.
3. **Real-time Data Processing:** When you need to handle real-time data processing and analytics that require low-latency access to data.
4. **Quick Read/Write Operations:** When you have use cases like leaderboards, counting, and other real-time data structures that benefit from in-memory caching.

In summary, AWS CloudFront and AWS ElastiCache serve different purposes and are complementary rather than interchangeable. CloudFront is best suited for content delivery to a global audience, reducing latency for web assets and APIs. ElastiCache, on the other hand, is ideal for reducing latency in data access within an application, improving database performance, and handling real-time data processing tasks.

### Is AWS CloudFront a secure CDN? How does security in CloudFront work? Is CloudFront sufficient without alternative security tools like AWS DDoS Protection, WAF and Shield?

AWS CloudFront is designed with security as a core feature, providing a secure way to deliver content globally. It incorporates several security measures to protect data and ensure safe delivery. Here's an overview of how security in CloudFront works and whether it's sufficient without additional tools like AWS DDoS Protection, WAF, and Shield:

### Security Features in AWS CloudFront

1. **SSL/TLS Encryption:**
   - **Secure Content Delivery:** CloudFront supports HTTPS to encrypt data in transit between the edge locations and end-users.
   - **Custom SSL Certificates:** You can use custom SSL certificates to secure your content delivery.

2. **Access Control:**
   - **Signed URLs and Signed Cookies:** These features allow you to control who can access your content. You can restrict access to content based on criteria such as date ranges, IP addresses, or query string values.
   - **Geo-Restriction:** You can restrict access to your content based on the geographic location of your users.

3. **Field-Level Encryption:**
   - **Sensitive Data Protection:** Field-level encryption allows you to protect specific data fields, like credit card numbers or personal information, ensuring they are encrypted and only decrypted by the intended applications.

4. **Origin Access Identity (OAI):**
   - **Secure Origin Access:** When using Amazon S3 as the origin for your CloudFront distribution, OAI ensures that your S3 bucket content is only accessible through CloudFront, preventing direct access from the internet.

5. **HTTP/2 and IPv6 Support:**
   - **Performance and Security:** HTTP/2 and IPv6 support enhance performance and security. HTTP/2 offers improved security features compared to HTTP/1.1.

### Additional Security Tools: AWS Shield, AWS WAF, and AWS DDoS Protection

While CloudFront includes several built-in security features, combining it with additional AWS security tools enhances protection against various types of attacks:

1. **AWS Shield:**
   - **DDoS Protection:** AWS Shield provides protection against Distributed Denial of Service (DDoS) attacks. There are two levels: AWS Shield Standard, which is included at no additional cost, and AWS Shield Advanced, which offers enhanced DDoS protection and real-time attack visibility.

2. **AWS WAF (Web Application Firewall):**
   - **Application Layer Protection:** AWS WAF helps protect your web applications from common web exploits and vulnerabilities. You can define rules to allow, block, or monitor (count) web requests based on conditions such as IP addresses, HTTP headers, or body content.

3. **AWS DDoS Protection:**
   - **Managed Protection:** AWS Shield Advanced offers managed DDoS protection that includes additional safeguards against large and sophisticated attacks, combined with 24/7 access to the AWS DDoS Response Team (DRT).

### Is CloudFront Sufficient Without Additional Security Tools?

**Sufficiency:**
- **Basic Use Cases:** For basic content delivery needs, CloudFront's built-in security features may be sufficient. This includes secure transmission with HTTPS, access control with signed URLs and cookies, and origin access identity for S3.
- **Low Risk:** If your application has a low risk of targeted attacks and requires basic security, CloudFront alone might meet your needs.

**Additional Protection:**
- **High Risk or Sensitive Data:** For applications handling sensitive data, high traffic, or subject to frequent attacks, combining CloudFront with AWS Shield, AWS WAF, and AWS DDoS Protection provides comprehensive security.
- **Regulatory Requirements:** If you need to comply with specific regulatory requirements or industry standards, additional security tools can help meet those requirements.

**Scenarios Requiring Enhanced Security:**
- **Financial Services:** Applications in financial services, where data integrity and protection against fraud are critical.
- **E-commerce:** High-traffic e-commerce sites that are frequent targets for DDoS attacks and need to protect customer data.
- **Healthcare:** Applications handling protected health information (PHI) requiring strict security controls.

### Conclusion

AWS CloudFront is a secure CDN with robust built-in security features. However, the level of security needed depends on your specific use case and risk profile. For high-risk applications, sensitive data, or compliance requirements, integrating CloudFront with additional AWS security tools like AWS Shield, AWS WAF, and AWS DDoS Protection is recommended to provide comprehensive protection against a wide range of threats.

### Is AWS CloudFront better than other cloud providers' CDN tools? Do a quick research to illustrate the similarities and differences between the AWS, GCP and Azure CDNs.

When comparing AWS CloudFront, Google Cloud CDN, and Azure CDN, there are several factors to consider, including performance, security, integration, and pricing.

### Performance
- **AWS CloudFront**: With over 410 Points of Presence (PoPs) globally, CloudFront offers extensive coverage, enabling low latency and high-speed content delivery. It supports HTTP/2 and has integrated SSL/TLS encryption for secure connections.
- **Google Cloud CDN**: Google Cloud CDN has fewer PoPs (about 100+ in 33 cities) but benefits from strong integration with Google Cloud services, allowing efficient routing and automatic content delivery optimization. It also supports HTTP/2 and SSL/TLS.
- **Azure CDN**: Azure CDN has 118 PoPs across 100 metro cities and offers robust integration with Azure services, including Dynamic Site Acceleration (DSA) for enhanced web performance. It supports both HTTP/2 and HTTPS.

### Security
- **AWS CloudFront**: Includes built-in security features like AWS Shield for DDoS protection and AWS Web Application Firewall (WAF) for application-layer security. It offers geo-restriction and access logging.
- **Google Cloud CDN**: Provides SSL/TLS without additional charges and integrates with Google’s security tools, although it lacks some of the comprehensive security services bundled with AWS.
- **Azure CDN**: Also supports HTTPS and offers DDoS protection via Azure DDoS Protection services. It allows for detailed analytics and real-time insights, enhancing security monitoring.

### Integration
- **AWS CloudFront**: Strong integration with other AWS services, making it a suitable choice for users already invested in the AWS ecosystem.
- **Google Cloud CDN**: Seamless integration with Google Cloud Platform services, which can optimize performance and simplify the deployment process.
- **Azure CDN**: Deeply integrated with Azure services, providing a cohesive experience for users of the Microsoft ecosystem. It also supports Azure Front Door for enhanced security and performance.

### Pricing
- **AWS CloudFront**: Offers a straightforward pricing model based on data transfer and HTTP/HTTPS requests, with a free tier available for the first 12 months. Pricing starts at $0.085 per GB for the first 10 TB.
- **Google Cloud CDN**: Pricing varies by region, with costs starting at $0.08 per GB for the first 10 TB in the US. It’s slightly cheaper in some regions but can be more complex due to geographical pricing differences.
- **Azure CDN**: Operates on a pay-as-you-go model similar to the others, with no upfront costs. Pricing details are similar to AWS and Google but vary slightly depending on specific use cases and service configurations.

### Conclusion
Choosing between AWS CloudFront, Google Cloud CDN, and Azure CDN depends largely on your specific needs and existing infrastructure:
- **AWS CloudFront** is ideal for users needing extensive global coverage, robust security features, and tight integration with other AWS services.
- **Google Cloud CDN** is well-suited for those leveraging Google Cloud Platform, benefiting from easy integration and automatic optimization.
- **Azure CDN** is best for users within the Azure ecosystem, offering strong performance, scalability, and comprehensive security options.

Each CDN has unique strengths, so the best choice will depend on your specific requirements and which cloud services you are already using.

Sources:
- [ZNetLive](https://www.znetlive.com/blog/cloud-cdn-comparison/)
- [Whizlabs](https://www.whizlabs.com/blog/amazon-cloudfront-vs-azure-cdn/)
- [Flare Compare](https://flarecompare.com/Cloud%20APIs/Cloud%20CDN%20Comparison%20%20AWS%20CloudFront%20vs.%20Google%20Cloud%20CDN/)

# Hands-on group assignment:
- As a group, choose a region in AWS console and create a new VPC with at least 2 subnets. (Think of how you can configure a public and private subnet differently.)
- Create an EC2 with AWS Apache Web Server installed in your newly created VPC.
