# Introduction to Cloud Computing - Extra Questions Answers

---

## 1. How do you select a good hypervisor?

### Selection Criteria for Hypervisors

**1. Performance Metrics**

- CPU overhead and efficiency
- Memory management capabilities
- I/O performance and throughput
- Virtualization overhead percentage

**2. Hardware Compatibility**

- Supported hardware platforms
- Driver availability
- Hardware virtualization support (Intel VT-x, AMD-V)

**3. Scalability**

- Maximum VMs per host
- Maximum vCPUs and RAM per VM
- Cluster size support

**4. Management Features**

- Web-based management console
- Remote management capabilities
- API availability for automation
- Integration with existing tools

**5. Security Features**

- VM isolation
- Encryption support
- Access control mechanisms
- Compliance certifications

**6. Cost Considerations**

- Licensing model (per CPU, per VM, per user)
- Total cost of ownership
- Open source vs commercial options

**7. Vendor Support**

- Documentation quality
- Technical support availability
- Community support (for open source)

### Common Hypervisors Comparison:

| Feature    | VMware ESXi | Microsoft Hyper-V | KVM         |
| ---------- | ----------- | ----------------- | ----------- |
| Type       | Type 1      | Type 1            | Type 1      |
| License    | Commercial  | Commercial/Free   | Open Source |
| Management | vSphere     | System Center     | Various     |

> 📌 **EXAM TIP:** Type 1 (bare metal) vs Type 2 (hosted) comparison is frequently asked.

---

## 2. How does PaaS differ from other models?

### Platform as a Service (PaaS) vs Other Models

| Aspect               | IaaS                                      | PaaS                                      | SaaS              |
| -------------------- | ----------------------------------------- | ----------------------------------------- | ----------------- |
| **User Manages**     | Apps, Data, Runtime, Middleware, OS       | Apps, Data only                           | Nothing           |
| **Provider Manages** | Virtualization, Servers, Storage, Network | Everything else + Runtime, Middleware, OS | Everything        |
| **Target User**      | IT Admins                                 | Developers                                | End Users         |
| **Examples**         | AWS EC2, Azure VMs                        | Heroku, Google App Engine                 | Gmail, Salesforce |
| **Flexibility**      | Highest                                   | Medium                                    | Lowest            |
| **Complexity**       | Highest                                   | Medium                                    | Lowest            |

### Key PaaS Characteristics:

- Development frameworks provided
- Database management included
- Automatic scaling
- Built-in security features
- No infrastructure management needed

### When to Use PaaS:

- Rapid application development
- When developers want to focus on code, not infrastructure
- Multi-developer collaboration
- Applications requiring frequent updates

---

## 3. Describe the types of services hosted in Aneka container.

### Aneka Container Services

**Aneka** is a platform for developing distributed applications on Cloud.

#### 1. Application Services

- **Thread Service:** Execute multi-threaded applications
- **Task Service:** Execute bag-of-tasks applications
- **MapReduce Service:** Process large datasets in parallel

#### 2. Foundation Services

- **Membership Service:** Node registration and discovery
- **Heartbeat Service:** Health monitoring
- **Licensing Service:** License management
- **Accounting Service:** Resource usage tracking
- **Reporting Service:** Logs and metrics

#### 3. Fabric Services

- **Resource Provisioning:** VM creation and management
- **Storage Service:** Data storage and retrieval
- **Communication Service:** Inter-node messaging

### Aneka Architecture:

```
┌─────────────────────────────┐
│    Application Services     │
├─────────────────────────────┤
│    Foundation Services      │
├─────────────────────────────┤
│      Fabric Services        │
└─────────────────────────────┘
```

---

## 4. How is virtual machine security enforced?

### VM Security Mechanisms

**1. Isolation**

- Hypervisor ensures complete VM isolation
- Each VM has separate virtual resources
- Memory isolation prevents cross-VM access

**2. Access Control**

- Role-based access control (RBAC)
- Authentication for VM management
- Authorization policies

**3. Encryption**

- VM disk encryption
- Network traffic encryption (TLS/SSL)
- Memory encryption (AMD SEV, Intel TDX)

**4. Monitoring**

- Intrusion Detection Systems (IDS)
- Log monitoring and analysis
- Anomaly detection

**5. Network Security**

- Virtual firewalls
- Network segmentation
- Micro-segmentation

**6. Patch Management**

- Regular hypervisor updates
- Guest OS patching
- Vulnerability scanning

**7. Secure Boot**

- UEFI Secure Boot
- Verified boot process
- Integrity checking

---

## 5. Cloud computing in business and consumer applications.

### Business Applications

**1. Data Storage and Backup**

- Google Drive, Dropbox, OneDrive
- Disaster recovery solutions
- Automated backup services

**2. Business Analytics**

- Big data processing
- Real-time analytics dashboards
- Business intelligence tools

**3. Enterprise Applications**

- CRM (Salesforce)
- ERP systems (SAP Cloud)
- HR Management (Workday)

**4. Collaboration Tools**

- Microsoft 365
- Google Workspace
- Slack, Teams

**5. Development and Testing**

- CI/CD pipelines
- Testing environments
- DevOps platforms

### Consumer Applications

**1. Entertainment**

- Video streaming (Netflix, YouTube)
- Music streaming (Spotify)
- Gaming (Xbox Cloud)

**2. Social Media**

- Facebook, Instagram, Twitter
- Content sharing
- Real-time messaging

**3. Personal Storage**

- iCloud, Google Photos
- File synchronization
- Photo backup

**4. Email Services**

- Gmail, Outlook
- Calendar integration
- Contact management

---

## 6. What is a bucket in Amazon S3? How is addressing done?

### Amazon S3 Bucket

**Definition:** A bucket is a container for storing objects (files) in Amazon S3.

**Characteristics:**

- Globally unique name required
- Created in specific AWS region
- Can store unlimited objects
- Each object up to 5TB

### Bucket Addressing

**1. Virtual-Hosted Style (Recommended):**

```
https://bucket-name.s3.region.amazonaws.com/object-key
https://my-bucket.s3.us-east-1.amazonaws.com/images/photo.jpg
```

**2. Path Style:**

```
https://s3.region.amazonaws.com/bucket-name/object-key
https://s3.us-east-1.amazonaws.com/my-bucket/images/photo.jpg
```

### Bucket Naming Rules:

- 3-63 characters long
- Lowercase letters, numbers, hyphens only
- Must start with letter or number
- No periods adjacent to hyphens

---

## 7. Cloud security issues.

### Major Cloud Security Issues

**1. Data Breaches**

- Unauthorized access to sensitive data
- Insider threats
- Misconfigured access controls

**2. Insecure APIs**

- Vulnerable API endpoints
- Inadequate authentication
- Improper error handling

**3. Account Hijacking**

- Credential theft
- Phishing attacks
- Session hijacking

**4. Shared Technology Vulnerabilities**

- Hypervisor vulnerabilities
- Multi-tenancy risks
- Shared resource attacks

**5. Data Loss**

- Accidental deletion
- Natural disasters
- Provider bankruptcy

**6. Compliance Issues**

- Data sovereignty concerns
- Regulatory compliance
- Audit requirements

**7. DDoS Attacks**

- Service disruption
- Resource exhaustion
- Network layer attacks

### Mitigation Strategies:

- Encryption at rest and in transit
- Strong access controls
- Regular security audits
- Incident response planning

---

## 8. Thread vs Task. Thread programming.

### Thread vs Task Comparison

| Aspect               | Thread                     | Task                        |
| -------------------- | -------------------------- | --------------------------- |
| **Definition**       | Smallest unit of execution | Independent unit of work    |
| **Resource Sharing** | Shares memory with process | May or may not share memory |
| **Overhead**         | Lower creation overhead    | Higher overhead             |
| **Synchronization**  | Required (locks, mutexes)  | Often implicit              |
| **Scheduling**       | OS-level                   | Application/runtime level   |
| **Communication**    | Shared memory              | Message passing             |

### Thread Programming (Java Example)

**1. Extending Thread Class:**

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

MyThread t = new MyThread();
t.start();
```

**2. Implementing Runnable:**

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

Thread t = new Thread(new MyRunnable());
t.start();
```

**3. Thread Pool (Cloud context):**

```java
ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> { /* task */ });
```

---

## 9. Types of hypervisors.

### Type 1 Hypervisor (Bare Metal)

Runs directly on hardware without host OS.

**Characteristics:**

- Better performance
- More secure
- Used in enterprise environments

**Examples:**

- VMware ESXi
- Microsoft Hyper-V
- Citrix XenServer
- KVM

### Type 2 Hypervisor (Hosted)

Runs on top of host operating system.

**Characteristics:**

- Easier installation
- Lower performance
- Used for development/testing

**Examples:**

- VMware Workstation
- Oracle VirtualBox
- Parallels Desktop

### Comparison:

| Feature     | Type 1     | Type 2      |
| ----------- | ---------- | ----------- |
| Performance | High       | Lower       |
| Security    | Better     | Less        |
| Use Case    | Production | Development |
| Cost        | Higher     | Lower/Free  |

---

## 10. Public cloud vs Private cloud.

### Comparison Table

| Aspect            | Public Cloud           | Private Cloud        |
| ----------------- | ---------------------- | -------------------- |
| **Ownership**     | Third-party provider   | Organization         |
| **Access**        | Open to all customers  | Single organization  |
| **Location**      | Provider's data center | On-premise or hosted |
| **Cost Model**    | Pay-per-use            | Capital expenditure  |
| **Scalability**   | Virtually unlimited    | Limited by capacity  |
| **Customization** | Limited                | Highly customizable  |
| **Security**      | Shared responsibility  | Full control         |
| **Compliance**    | Provider managed       | Self-managed         |
| **Examples**      | AWS, Azure, GCP        | VMware, OpenStack    |

### When to Use:

**Public Cloud:**

- Variable workloads
- Cost-sensitive projects
- Rapid scaling needs
- Non-sensitive data

**Private Cloud:**

- Strict compliance requirements
- Sensitive data
- Predictable workloads
- Legacy application support

---

## 📚 Resources

- **Textbooks:** Mastering Cloud Computing (Buyya), Cloud Computing Bible (Sosinsky)
- **YouTube:** Cloud Computing tutorials on Simplilearn, Edureka
- **Online:** AWS Documentation, Azure Learn, Google Cloud Training
