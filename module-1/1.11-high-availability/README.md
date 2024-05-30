# Brief
Choose one of the domains below:

- eCommerce (e.g. Shopee, Lazada)
- Financial Institution (e.g. DBS Banking App)
- Government (e.g. IRAS Tax portal, CPF portal)
- Personal Static Website (e.g. Wordpress site)
- Ride Hailing Application (e.g. Grab, Gojek)
- Mobile Gaming Application (e.g. PUBG, MLBB)
- Data Service Provider (e.g. Snowflake, Databricks)
- Video Streaming Provider (e.g. Netflix)

Design the architecture of your chosen application based on the high-availability principles learnt as well as include the types of servers needed for your application.

*** Bonus *** Use diagramming tools such as draw.io should you have the time.


# Architecture of a Personal Static Website

Below is an actual architecture of my personal static website created using Angular and AWS services in the free tier: https://www.chrysaliswoon.com/ 

## Architectural Components

**Angular Application** 

The Angular application code, which is compiled into static files (HTML, CSS, JavaScript).

**AWS S3 (Simple Storage Service)**

**Purpose:** Host the static files.
**Free Tier:** 5 GB of standard storage, 20,000 GET requests, and 2,000 PUT, COPY, POST, or LIST requests per month.
**Features:** Highly durable, scalable, and cost-effective storage.
**Configuration:** Enable static website hosting on the S3 bucket.

**Amazon CloudFront (CDN)**

**Purpose:** Distribute static files globally, reduce latency, and improve load times.
**Free Tier:** 50 GB data transfer out and 2,000,000 HTTP and HTTPS requests each month for one year.
**Features:** Caching, SSL/TLS encryption, DDoS protection via AWS Shield.
**Configuration:** Set up an S3 bucket as the origin for the CloudFront distribution.

**Amazon Route 53 (DNS):**

**Purpose:** Provide domain name registration and routing traffic to the CloudFront distribution.
**Free Tier:** Not included in the free tier, but the cost is minimal for low-traffic sites like a personal website.
**Features:** Highly available and scalable DNS web service.
**Configuration:** Configure DNS records to point to the CloudFront distribution.

**AWS Certificate Manager (ACM)**

**Purpose:** Manage SSL/TLS certificates for the website.
**Free Tier:** Free SSL/TLS certificates.
**Features:** Free SSL/TLS certificates, automatic renewal.
**Configuration:** Use ACM certificates with CloudFront to enable HTTPS.

**AWS Lambda (Optional for Dynamic Content)**

**Purpose:** Handle serverless backend functions if needed.
**Features:** Auto-scaling, no server management.
**Configuration:** Use AWS API Gateway to expose Lambda functions as APIs.

**Amazon RDS or DynamoDB (for Backend Database if applicable)**

**Purpose:** Manage relational or NoSQL databases if the site requires dynamic content.
**Features:** Managed database services with high availability.
**Configuration:** Connect backend services to the database.

**Amazon CloudWatch:**

**Purpose:** Monitor the health and performance of the application.
**Free Tier:** 10 custom metrics, 5 GB of logs, and 3 dashboards with up to 50 metrics per dashboard per month.
**Features:** Metrics, logs, alarms.
**Configuration:** Set up monitoring for S3, CloudFront, and other services.

## Architectural Diagram

<p align="center">
  <img width="100%" height="100%" src="https://github.com/chrysaliswoon/NTU-CE6/blob/main/assets/Personal_Website.png?raw=true">
</p>

## Considerations

1. **Redundancy:** Use multiple AWS availability (AZs) and regions to ensure redundancy and disaster recovery (This is more important for services that has high customer usage and reliance such as Banking services. In the case of a personal website, this might not be as important as we prioritise having a lower cost)

2. **Monitoring & Alerts:** By implementing CloudWatch alarms we can be proactive in monitoring and creating automated responses

3. **Automated Backups:** Enable versioning and lifecycle policies in S3 for backup and data management

4. **Disaster Recovery Plan:** Plan for failover scenarios and regularly test recovery procedures




## Implementation Steps

**Angular Application Build**

- Develop your Angular application.
- Run `ng build `to compile the application into static files.

**S3 Setup**

- Create an S3 bucket.
- Enable static website hosting.
- Upload the compiled Angular application files to the S3 bucket.

**CloudFront Distribution**

- Create a CloudFront distribution.
- Set the S3 bucket as the origin.
- Configure caching, SSL/TLS settings using ACM certificates.

**Route 53 Configuration**

- Register your domain or use an existing one.
- Create DNS records pointing to the CloudFront distribution.

**AWS Certificate Manager (ACM) Setup**

- Request a free SSL/TLS certificate from AWS Certificate Manager.
- Validate the certificate request using DNS validation through Route 53.
- Attach the certificate to your CloudFront distribution to enable HTTPS.

**CloudWatch Monitoring**

- Configure CloudWatch to monitor key metrics from S3 and CloudFront.
- Set up alarms for any critical metrics (e.g., high error rates, latency issues).
- Enable logging in CloudFront and configure CloudWatch to collect and analyze these logs.