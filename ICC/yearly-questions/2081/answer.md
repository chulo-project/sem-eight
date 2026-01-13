# ICC 2081 - Answers

---

## Section A (10 Marks Each)

### 1. Cloud computing service. PaaS, SaaS, IaaS.

#### Cloud Computing Service

**Definition:** Computing resources delivered over the internet as services.

**Characteristics:**

- On-demand access
- Scalable resources
- Pay-per-use billing
- Self-service provisioning

#### Infrastructure as a Service (IaaS)

**What It Provides:**

- Virtual machines
- Storage
- Networks
- Load balancers

**User Responsibility:**

- Operating system
- Middleware
- Runtime
- Applications
- Data

**Examples:**

- AWS EC2
- Azure Virtual Machines
- Google Compute Engine
- DigitalOcean

**Use Cases:**

- Development environments
- Web hosting
- Big data analysis
- High-performance computing

#### Platform as a Service (PaaS)

**What It Provides:**

- Runtime environment
- Development frameworks
- Database services
- Deployment tools

**User Responsibility:**

- Applications
- Data

**Examples:**

- Heroku
- Google App Engine
- Azure App Service
- AWS Elastic Beanstalk

**Use Cases:**

- Web application development
- API development
- Microservices
- Mobile backend

#### Software as a Service (SaaS)

**What It Provides:**

- Complete applications
- User interface
- Data management

**User Responsibility:**

- Nothing (just configuration)

**Examples:**

- Gmail
- Salesforce
- Microsoft 365
- Slack
- Zoom

**Use Cases:**

- Email
- CRM
- Collaboration
- Project management

---

### 2. MapReduce. Map, Shuffle/Sort, Reduce with example.

#### MapReduce Definition

**MapReduce:** Programming model for processing large datasets in parallel across distributed clusters.

**Key Concept:** Divide data into chunks, process in parallel, combine results.

#### Phases Explained

**1. Map Phase**

- Input: Key-value pairs from data splits
- Function: User-defined transformation
- Output: Intermediate key-value pairs

**2. Shuffle and Sort Phase**

- Transfers data between Map and Reduce
- Groups values by key
- Sorts keys alphabetically

**3. Reduce Phase**

- Input: Key with list of values
- Function: User-defined aggregation
- Output: Final results

#### Example: Word Count

**Input Text:** "Cloud computing is great. Cloud is the future."

**Map Phase:**

```
Mapper 1: "Cloud computing is great"
Output: (Cloud, 1), (computing, 1), (is, 1), (great, 1)

Mapper 2: "Cloud is the future"
Output: (Cloud, 1), (is, 1), (the, 1), (future, 1)
```

**Shuffle and Sort:**

```
(Cloud, [1, 1])
(computing, [1])
(future, [1])
(great, [1])
(is, [1, 1])
(the, [1])
```

**Reduce Phase:**

```
Reducer receives (Cloud, [1, 1]) → Sum → (Cloud, 2)
Final Output:
(Cloud, 2)
(computing, 1)
(future, 1)
(great, 1)
(is, 2)
(the, 1)
```

---

### 3. Aneka architecture. Services organization.

#### Aneka Overview

**Definition:** Platform for developing distributed applications on Cloud, developed by Manjrasoft.

#### Architecture

```
┌─────────────────────────────────────┐
│         Aneka Container             │
├─────────────────────────────────────┤
│       Application Services          │
│  (Thread, Task, MapReduce)          │
├─────────────────────────────────────┤
│       Foundation Services           │
│  (Membership, Heartbeat, etc.)      │
├─────────────────────────────────────┤
│         Fabric Services             │
│  (Resource, Storage, Network)       │
└─────────────────────────────────────┘
```

#### Application Services

**1. Thread Service**

- Parallel execution of threads
- Shared memory model
- Fine-grained parallelism

**2. Task Service**

- Bag-of-tasks execution
- Independent tasks
- No communication between tasks

**3. MapReduce Service**

- Distributed data processing
- Map and Reduce functions

#### Foundation Services

**1. Membership Service**

- Node registration
- Discovery
- Resource tracking

**2. Heartbeat Service**

- Health monitoring
- Failure detection
- Status updates

**3. Licensing Service**

- License management
- Usage tracking

**4. Accounting Service**

- Resource usage monitoring
- Billing support
- Usage reports

**5. Reporting Service**

- Logs and metrics
- Performance data

#### Fabric Services

**1. Resource Provisioning**

- VM creation/deletion
- Resource allocation
- Dynamic scaling

**2. Storage Service**

- Data storage
- File management
- Persistence

**3. Communication Service**

- Inter-node messaging
- Data transfer

---

## Section B (5 Marks Each)

### 4. Properties of cloud computing

1. **On-demand Self-service:** Provision without provider interaction
2. **Broad Network Access:** Access from any device
3. **Resource Pooling:** Multi-tenant, shared resources
4. **Rapid Elasticity:** Scale up/down quickly
5. **Measured Service:** Pay only for usage
6. **Automation:** Minimal manual intervention
7. **Resilience:** Built-in fault tolerance

---

### 5. Cloud adoption challenges

1. **Security Concerns:** Data protection, compliance
2. **Vendor Lock-in:** Difficult to switch providers
3. **Performance Issues:** Latency, bandwidth
4. **Integration:** With existing systems
5. **Cost Management:** Unpredictable bills
6. **Skill Gap:** Need cloud expertise
7. **Compliance:** Regulatory requirements

---

### 6. Hybrid and Community cloud

**Hybrid Cloud:**

- Combine public and private clouds
- **When to Use:**
  - Variable workloads (burst to public)
  - Sensitive data (keep in private)
  - Gradual migration
  - Regulatory requirements

**Community Cloud:**

- Shared by organizations with common needs
- **When to Use:**
  - Common compliance requirements (healthcare)
  - Shared industry interests
  - Cost sharing
  - Government agencies

---

### 7. Loosely coupled cloud applications

**Definition:** Components with minimal dependencies.

**Why:**

1. **Scalability:** Scale components independently
2. **Resilience:** One failure doesn't break all
3. **Maintainability:** Update parts separately
4. **Flexibility:** Replace components easily

**How:**

- Message queues (SQS, RabbitMQ)
- APIs and web services
- Event-driven architecture
- Microservices pattern

---

### 8. Types of virtualization

1. **Server Virtualization:** Multiple VMs on one server
2. **Desktop Virtualization (VDI):** Virtual desktops
3. **Storage Virtualization:** Pooled storage
4. **Network Virtualization:** Virtual networks (SDN)
5. **Application Virtualization:** Containers
6. **Data Virtualization:** Unified data access

---

### 9. Cloud security threats

1. **Data Breaches:** Unauthorized access
2. **Insecure APIs:** Vulnerable interfaces
3. **Account Hijacking:** Credential theft
4. **Malicious Insiders:** Internal threats
5. **DDoS Attacks:** Service disruption
6. **Shared Technology:** Multi-tenancy risks
7. **Data Loss:** Accidental deletion

---

### 10. Cloud security monitoring

**Methods:**

1. Log aggregation and analysis
2. SIEM (Security Information and Event Management)
3. Intrusion Detection Systems (IDS)
4. Anomaly detection
5. Real-time alerting
6. Compliance monitoring

**Tools:** CloudWatch, Azure Monitor, Splunk

---

### 11. Cloud security mechanisms

1. **Encryption:** Data at rest and in transit
2. **Access Control:** IAM, RBAC
3. **Firewalls:** Network and web application
4. **Multi-factor Authentication (MFA)**
5. **Key Management**
6. **Security Groups/VPCs**
7. **Regular Auditing**

---

### 12. Scientific applications of cloud

1. **Genomics:** DNA sequencing analysis
2. **Climate Modeling:** Weather simulations
3. **Drug Discovery:** Molecular simulations
4. **Physics:** Particle collision analysis
5. **Astronomy:** Image processing
6. **Medical Research:** Imaging, analytics
7. **AI/ML Training:** Large-scale model training

---

## 📚 Resources

- Mastering Cloud Computing
- AWS/Azure documentation
- Cloud tutorials on YouTube
