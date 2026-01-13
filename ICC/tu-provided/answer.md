# Introduction to Cloud Computing - Model Question Answers

**CSC467 | Eighth Semester | Model Set**

---

## Section A (10 Marks Each)

### 1. Define cloud. Describe the evolution of cloud. Mention the advantages of using cloud computing.

#### Definition of Cloud

**Cloud Computing** is the delivery of computing services (servers, storage, databases, networking, software, analytics) over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.

**NIST Definition:** "A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction."

#### Evolution of Cloud Computing

| Era                   | Period | Description                         |
| --------------------- | ------ | ----------------------------------- |
| **Mainframe**         | 1960s  | Centralized computing, time-sharing |
| **Client-Server**     | 1980s  | Distributed processing, LANs        |
| **Internet**          | 1990s  | Web applications, e-commerce        |
| **Grid Computing**    | 2000s  | Distributed resource sharing        |
| **Utility Computing** | 2000s  | Pay-per-use model                   |
| **Cloud Computing**   | 2006+  | Virtualized, on-demand services     |

**Key Milestones:**

- **1969:** ARPANET (precursor to Internet)
- **1999:** Salesforce launches SaaS
- **2002:** Amazon Web Services
- **2006:** AWS EC2 and S3 launched
- **2008:** Google App Engine
- **2010:** Microsoft Azure

#### Advantages of Cloud Computing

1. **Cost Efficiency**
   - No upfront hardware investment
   - Pay only for resources used
   - Reduced IT staff requirements

2. **Scalability**
   - Scale up/down based on demand
   - Handle traffic spikes easily
   - Elastic resources

3. **Accessibility**
   - Access from anywhere with internet
   - Support for mobile workforce
   - Cross-device compatibility

4. **Reliability**
   - Built-in redundancy
   - Data backup and recovery
   - High availability (99.9%+ SLA)

5. **Speed and Agility**
   - Quick deployment
   - Faster time-to-market
   - Easy experimentation

6. **Automatic Updates**
   - Provider handles maintenance
   - Always latest features
   - Security patches applied automatically

---

### 2. Describe the services provided under cloud computing. What are the benefits of virtualization?

#### Cloud Service Models

**1. Infrastructure as a Service (IaaS)**

Provides virtualized computing resources over the internet.

**User Gets:** Virtual machines, storage, networks
**User Manages:** OS, middleware, applications, data
**Provider Manages:** Hardware, virtualization

**Examples:** AWS EC2, Azure VMs, Google Compute Engine

**Use Cases:** Development/testing, web hosting, storage

**2. Platform as a Service (PaaS)**

Provides platform for developing and deploying applications.

**User Gets:** Runtime environment, development tools
**User Manages:** Applications, data only
**Provider Manages:** OS, middleware, runtime, infrastructure

**Examples:** Google App Engine, Heroku, Azure App Service

**Use Cases:** Web app development, API development, microservices

**3. Software as a Service (SaaS)**

Provides complete applications over the internet.

**User Gets:** Ready-to-use software
**User Manages:** Nothing (just uses it)
**Provider Manages:** Everything

**Examples:** Gmail, Salesforce, Microsoft 365, Dropbox

**Use Cases:** Email, CRM, collaboration, productivity

#### Benefits of Virtualization

1. **Resource Optimization**
   - Multiple VMs on single physical server
   - Higher hardware utilization (60-80%)
   - Reduced hardware costs

2. **Isolation**
   - VMs isolated from each other
   - Failure in one doesn't affect others
   - Security boundaries

3. **Flexibility**
   - Easy creation/deletion of VMs
   - Quick provisioning
   - Easy migration

4. **Cost Savings**
   - Fewer physical servers needed
   - Reduced power and cooling
   - Less data center space

5. **Disaster Recovery**
   - Easy backup and restore
   - Snapshots for point-in-time recovery
   - VM replication across sites

6. **Testing and Development**
   - Create test environments quickly
   - Multiple OS configurations
   - Easy rollback

---

### 3. What is Map-Reduce Programming? Describe how enterprise batch processing is done using map-reduce.

#### Map-Reduce Programming

**Definition:** A programming model for processing large datasets in parallel across a distributed cluster.

**Key Concept:** Divide data into chunks, process in parallel (Map), then combine results (Reduce).

#### MapReduce Phases

**1. Map Phase**

- Input: Key-value pairs from input splits
- Processing: User-defined map function
- Output: Intermediate key-value pairs

**2. Shuffle and Sort Phase**

- Groups all values with same key
- Sorts keys
- Transfers data to reducers

**3. Reduce Phase**

- Input: Key with list of values
- Processing: User-defined reduce function
- Output: Final aggregated results

#### Example: Word Count

**Input:** "Hello World Hello Cloud World"

**Map Output:**

```
(Hello, 1), (World, 1), (Hello, 1), (Cloud, 1), (World, 1)
```

**After Shuffle & Sort:**

```
(Cloud, [1])
(Hello, [1, 1])
(World, [1, 1])
```

**Reduce Output:**

```
(Cloud, 1)
(Hello, 2)
(World, 2)
```

#### Enterprise Batch Processing with MapReduce

**1. Log Analysis**

```
Map: Extract (IP, 1) from each log line
Reduce: Sum visits per IP
Use: Identify suspicious activity
```

**2. ETL (Extract, Transform, Load)**

```
Map: Extract and transform records
Reduce: Aggregate and load to warehouse
Use: Data warehouse population
```

**3. Report Generation**

```
Map: Parse transactions, emit (category, amount)
Reduce: Sum by category
Use: Daily/monthly sales reports
```

**4. Data Cleansing**

```
Map: Validate and standardize records
Reduce: Deduplicate and merge
Use: Master data management
```

**Hadoop Framework:**

- **HDFS:** Distributed file storage
- **YARN:** Resource management
- **MapReduce:** Processing engine

---

## Section B (5 Marks Each)

### 4. Describe cloud service requirements.

**1. On-demand Self-service**

- Users provision resources without human interaction
- Automatic service provisioning

**2. Broad Network Access**

- Available over network from any device
- Standard protocols and mechanisms

**3. Resource Pooling**

- Multi-tenant model
- Resources dynamically assigned
- Location independence

**4. Rapid Elasticity**

- Scale out/in quickly
- Appears unlimited to users
- Automatic scaling

**5. Measured Service**

- Resource usage monitored
- Pay-per-use billing
- Transparency for both parties

---

### 5. Differentiate public cloud from private cloud.

| Aspect            | Public Cloud          | Private Cloud       |
| ----------------- | --------------------- | ------------------- |
| **Ownership**     | Third-party provider  | Organization        |
| **Access**        | Open to public        | Single organization |
| **Location**      | Provider data center  | On-premise/hosted   |
| **Cost**          | Pay-per-use (OpEx)    | Capital investment  |
| **Scalability**   | Virtually unlimited   | Limited by hardware |
| **Security**      | Shared responsibility | Full control        |
| **Customization** | Limited               | High                |
| **Examples**      | AWS, Azure, GCP       | VMware, OpenStack   |

---

### 6. Discuss the different types of hypervisors.

**Type 1 (Bare Metal)**

- Runs directly on hardware
- No host OS needed
- Better performance and security
- Examples: VMware ESXi, Hyper-V, KVM

**Type 2 (Hosted)**

- Runs on host operating system
- Easier to install and use
- Lower performance
- Examples: VirtualBox, VMware Workstation

| Feature     | Type 1     | Type 2      |
| ----------- | ---------- | ----------- |
| Performance | High       | Lower       |
| Security    | Better     | Less        |
| Use Case    | Production | Development |

---

### 7. How is a thread different from a task? How is thread programming done?

#### Thread vs Task

| Thread                   | Task                  |
| ------------------------ | --------------------- |
| Lightweight process      | Unit of work          |
| Shares memory            | May be isolated       |
| OS-scheduled             | Application-scheduled |
| Lower overhead           | Higher overhead       |
| Requires synchronization | Often implicit        |

#### Thread Programming (Java)

```java
// Method 1: Extend Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
new MyThread().start();

// Method 2: Implement Runnable
Thread t = new Thread(() -> {
    System.out.println("Task");
});
t.start();

// Method 3: Thread Pool
ExecutorService pool = Executors.newFixedThreadPool(5);
pool.submit(() -> { /* task */ });
```

---

### 8. Discuss the cloud security issues.

1. **Data Breaches:** Unauthorized access to sensitive data
2. **Insecure APIs:** Vulnerable interfaces exposed
3. **Account Hijacking:** Credential theft, phishing
4. **Insider Threats:** Malicious or negligent employees
5. **DDoS Attacks:** Service disruption
6. **Shared Technology Risks:** Multi-tenancy vulnerabilities
7. **Data Loss:** Accidental deletion, disasters
8. **Compliance Issues:** Regulatory requirements

---

### 9. What is a bucket in Amazon S3? How is addressing of a bucket done?

**Bucket:** Container for storing objects (files) in Amazon S3.

**Characteristics:**

- Globally unique name
- Region-specific
- Unlimited objects
- Access control policies

**Addressing:**

**Virtual-hosted style:**

```
https://bucket-name.s3.region.amazonaws.com/object-key
```

**Path style:**

```
https://s3.region.amazonaws.com/bucket-name/object-key
```

---

### 10. Describe how cloud computing is used in business and consumer applications.

**Business Applications:**

- **Data storage:** Backup, disaster recovery
- **Collaboration:** Microsoft 365, Google Workspace
- **CRM:** Salesforce, HubSpot
- **ERP:** SAP Cloud, Oracle Cloud
- **Development:** CI/CD, testing environments

**Consumer Applications:**

- **Entertainment:** Netflix, Spotify, gaming
- **Social Media:** Facebook, Instagram
- **Storage:** Google Drive, iCloud, Dropbox
- **Email:** Gmail, Outlook
- **Photos:** Google Photos, iCloud Photos

---

### 11. Describe the types of services hosted in Aneka container.

**Aneka** is a cloud application development platform.

**1. Application Services:**

- Thread Service
- Task Service
- MapReduce Service

**2. Foundation Services:**

- Membership Service (node management)
- Heartbeat Service (health monitoring)
- Accounting Service (resource tracking)

**3. Fabric Services:**

- Resource Provisioning
- Storage Service
- Communication Service

---

### 12. How is virtual machine security enforced?

**1. Isolation:** Hypervisor ensures VM separation

**2. Access Control:** Role-based access to VMs

**3. Encryption:**

- VM disk encryption
- Network traffic encryption

**4. Monitoring:** Intrusion detection, logging

**5. Secure Boot:** UEFI Secure Boot, integrity checking

**6. Patching:** Regular hypervisor and OS updates

**7. Network Security:** Virtual firewalls, segmentation

---

## 📚 Resources

- Mastering Cloud Computing by Buyya
- Cloud Computing Bible by Sosinsky
- AWS/Azure/GCP Documentation
- YouTube: Simplilearn, Edureka
