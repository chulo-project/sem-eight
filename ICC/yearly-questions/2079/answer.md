# ICC 2079 - Answers

---

## Section A (10 Marks Each)

### 1. Define cloud computing. Cloud deployment models.

#### Definition

**Cloud Computing:** Delivery of computing services over the internet, including servers, storage, databases, networking, software, and analytics.

**NIST Definition:** "A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources."

#### Cloud Deployment Models

**1. Public Cloud**

- Owned by third-party provider
- Shared infrastructure
- Pay-per-use model
- Examples: AWS, Azure, GCP

**Advantages:**

- No capital investment
- Scalability
- Maintenance-free

**Disadvantages:**

- Less control
- Security concerns
- Compliance challenges

**2. Private Cloud**

- Owned by single organization
- Dedicated infrastructure
- On-premise or hosted
- Examples: VMware vCloud, OpenStack

**Advantages:**

- Full control
- Better security
- Customizable

**Disadvantages:**

- Higher cost
- Maintenance burden

**3. Community Cloud**

- Shared by organizations with common interests
- Joint ownership or hosted
- Examples: Government cloud, healthcare cloud

**4. Hybrid Cloud**

- Combination of public and private
- Data/applications move between clouds
- Best of both worlds
- Cloud bursting capability

---

### 2. Parallel efficiency of MapReduce. Thread vs Task vs MapReduce.

#### Parallel Efficiency

**Definition:** Measure of how effectively parallelism is utilized.

**Formula:**

```
Efficiency = Speedup / Number of Processors
Speedup = Sequential Time / Parallel Time
```

**Factors Affecting Efficiency:**

1. Communication overhead
2. Load balancing
3. Task granularity
4. Data locality

**MapReduce Efficiency:**

- Data locality: Process where data resides
- Fault tolerance: Re-execute failed tasks
- Scalability: Add nodes linearly

#### Thread vs Task vs MapReduce

| Aspect              | Thread   | Task      | MapReduce      |
| ------------------- | -------- | --------- | -------------- |
| **Granularity**     | Fine     | Medium    | Coarse         |
| **Shared Memory**   | Yes      | Optional  | No             |
| **Synchronization** | Required | Limited   | Implicit       |
| **Scalability**     | Limited  | Medium    | High           |
| **Fault Tolerance** | Manual   | Framework | Built-in       |
| **Data Size**       | Small    | Medium    | Very large     |
| **Programming**     | Complex  | Simpler   | Specific model |

**Thread:** Lightweight, shares process memory
**Task:** Independent unit of work
**MapReduce:** Distributed processing of large datasets

---

### 3. Virtualization definition, importance, and types.

#### Definition

**Virtualization:** Creating virtual versions of computing resources (servers, storage, networks) from physical hardware.

#### Why Perfect for Cloud

1. **Resource Optimization:** Multiple VMs per server
2. **Isolation:** VMs separated from each other
3. **Elasticity:** Quick provisioning/deprovisioning
4. **Cost Efficiency:** Higher hardware utilization
5. **Portability:** Move VMs between hosts
6. **Snapshots:** Easy backup and recovery

#### Types of Virtualization

**1. Server Virtualization**

- Multiple virtual servers on one physical
- Types: Full, para, hardware-assisted
- Examples: VMware, Hyper-V

**2. Desktop Virtualization (VDI)**

- Virtual desktops hosted centrally
- Access from any device
- Examples: Citrix, VMware Horizon

**3. Storage Virtualization**

- Pool storage from multiple devices
- Single logical storage unit
- Examples: SAN, NAS

**4. Network Virtualization**

- Virtual networks on physical infrastructure
- Isolated virtual networks
- Examples: VLAN, SDN

**5. Application Virtualization**

- Applications run in isolated environment
- No installation on host
- Examples: Docker containers

---

## Section B (5 Marks Each)

### 4. Cloud adoption factors

**Definition:** Transitioning to cloud computing.

**Factors:**

1. **Cost Reduction:** Lower capital expenses
2. **Scalability:** Handle growth
3. **Flexibility:** Access anywhere
4. **Disaster Recovery:** Built-in backup
5. **Competitive Advantage:** Faster time-to-market
6. **Focus on Core Business:** Outsource IT

---

### 5. Platform as a Service (PaaS)

**Definition:** Cloud-hosted platform for developing applications.

**Services:**

1. Runtime environment
2. Development frameworks
3. Database management
4. Deployment tools
5. Collaboration features
6. Automatic scaling

**Examples:** Heroku, Google App Engine, Azure App Service

---

### 6. Load balancing

**Definition:** Distributing workload across multiple resources.

**How It Works:**

1. Load balancer receives requests
2. Evaluates server health/capacity
3. Routes to appropriate server
4. Manages session persistence

**Algorithms:**

- Round Robin
- Least Connections
- IP Hash
- Weighted

---

### 7. Security-as-a-Service features

**Definition:** Cloud-delivered security services.

**Features:**

1. Identity and Access Management (IAM)
2. Encryption services
3. Email security
4. Web security (WAF)
5. Intrusion detection
6. Security monitoring
7. Vulnerability scanning

---

### 8. Cloud security architecture design

**Principles:**

1. Defense in depth
2. Least privilege
3. Zero trust
4. Encryption everywhere
5. Monitoring and logging

**Layers:**

- Network security
- Application security
- Data security
- Identity management
- Compliance

---

### 9. Amazon S3 buckets

**Bucket:** Container for storing objects in S3.

**Creation Steps:**

1. Sign in to AWS Console
2. Navigate to S3
3. Click "Create bucket"
4. Enter unique name
5. Select region
6. Configure options
7. Set permissions
8. Create

---

### 10. Google App Engine for developers

**Features:**

1. Multiple language support (Python, Java, Go)
2. Automatic scaling
3. Built-in services (Datastore, Memcache)
4. Version management
5. Traffic splitting

**Usage:**

1. Create application
2. Write code using SDK
3. Test locally
4. Deploy with `gcloud app deploy`
5. Monitor in Console

---

### 11. Azure platform services

**1. Compute:** VMs, App Service, Functions
**2. Storage:** Blob, Queue, Table, Files
**3. Database:** SQL Database, Cosmos DB
**4. Networking:** Virtual Network, Load Balancer
**5. Analytics:** HDInsight, Stream Analytics
**6. AI/ML:** Cognitive Services
**7. DevOps:** Azure DevOps, Pipelines

---

### 12. Cloud in ECG monitoring

**Application:**

1. Sensors collect ECG data
2. Data transmitted to cloud
3. Cloud processing and analysis
4. Machine learning for anomaly detection
5. Real-time alerts to doctors
6. Patient record storage
7. Historical trend analysis

**Benefits:**

- Remote monitoring
- Real-time analysis
- Scalable storage
- Cost-effective

---

## 📚 Resources

- Mastering Cloud Computing by Buyya
- AWS/Azure documentation
- Simplilearn YouTube
