# ICC 2082 - Answers

---

## Section A (10 Marks Each)

### 1. Cloud definition. Types and usages. Service requirements.

#### Cloud Definition

**Cloud Computing:** Delivery of computing services (compute, storage, networking, databases) over the internet with flexible pricing and on-demand access.

**Key Characteristics:**

- On-demand, self-service
- Accessible over network
- Pooled resources
- Rapid elasticity
- Measured service

#### Types of Clouds

**1. Public Cloud**

- Third-party provider owned
- Shared infrastructure
- **Usage:** Startups, variable workloads, cost-sensitive apps
- Examples: AWS, Azure, GCP

**2. Private Cloud**

- Single organization owned
- Dedicated infrastructure
- **Usage:** Compliance, sensitive data, legacy apps
- Examples: VMware, OpenStack

**3. Hybrid Cloud**

- Public + Private combination
- Data/apps span both
- **Usage:** Cloud bursting, gradual migration, mixed workloads

**4. Community Cloud**

- Shared by related organizations
- Common interests/requirements
- **Usage:** Government, healthcare, research

#### Cloud Service Requirements

1. **On-demand Self-service**
2. **Broad Network Access**
3. **Resource Pooling**
4. **Rapid Elasticity**
5. **Measured Service**
6. **Multi-tenancy Support**
7. **Service Level Agreements (SLAs)**
8. **Security and Compliance**

---

### 2. Virtualization significance. Implementation levels. Infrastructure requirements.

#### Significance of Virtualization

**Why Essential for Cloud:**

1. **Resource Consolidation:** Multiple VMs per server
2. **Isolation:** Secure separation of tenants
3. **Flexibility:** Quick provisioning
4. **Efficiency:** 60-80% utilization vs 15%
5. **Cost Reduction:** Less hardware needed
6. **Portability:** Move VMs between hosts
7. **Disaster Recovery:** Easy backup/restore

#### Implementation Levels

**1. Hardware/Machine Level**

- Hypervisor on bare metal
- Full hardware virtualization
- Examples: VMware ESXi, KVM

**2. Operating System Level**

- Containers share OS kernel
- Lightweight isolation
- Examples: Docker, LXC

**3. Library Level**

- Intercept library/API calls
- Redirect to virtual resources
- Examples: Wine, vCUDA

**4. Programming Language Level**

- Virtual machine for language
- Platform independence
- Examples: JVM, .NET CLR

#### Infrastructure Requirements

1. **Hardware:**
   - Servers with virtualization extensions (VT-x, AMD-V)
   - Sufficient RAM and storage
   - High-speed networking

2. **Software:**
   - Hypervisor
   - Management console
   - Monitoring tools

3. **Network:**
   - Virtual switches
   - VLANs
   - Load balancers

4. **Storage:**
   - SAN/NAS
   - Shared storage for live migration

---

### 3. Task vs Thread. Map, Shuffle & Sort, Reduce with example.

#### Task vs Thread

| Aspect            | Task                  | Thread                |
| ----------------- | --------------------- | --------------------- |
| **Definition**    | Unit of work          | Execution context     |
| **Independence**  | Independent           | Shares process memory |
| **Scheduling**    | Application/runtime   | OS                    |
| **Overhead**      | Higher                | Lower                 |
| **Communication** | Message passing       | Shared memory         |
| **Isolation**     | Better                | Limited               |
| **Use Case**      | Distributed computing | Multi-core processing |

#### MapReduce Operations

**Map Function:**

- Processes input key-value pairs
- Produces intermediate key-value pairs
- Runs in parallel across nodes

**Shuffle:**

- Transfers intermediate data to reducers
- Partitions data by key
- Network data movement

**Sort:**

- Orders intermediate data by key
- Groups same keys together
- Prepares for reduction

**Reduce Function:**

- Processes grouped values
- Produces final output
- Aggregation operation

#### Example: Sales by Category

**Input:**

```
(order1, {product: "Laptop", category: "Electronics", amount: 50000})
(order2, {product: "T-shirt", category: "Clothing", amount: 1000})
(order3, {product: "Phone", category: "Electronics", amount: 30000})
```

**Map Output:**

```
(Electronics, 50000)
(Clothing, 1000)
(Electronics, 30000)
```

**After Shuffle & Sort:**

```
(Clothing, [1000])
(Electronics, [50000, 30000])
```

**Reduce Output:**

```
(Clothing, 1000)
(Electronics, 80000)
```

---

## Section B (5 Marks Each)

### 4. Evolution of cloud computing

| Era            | Period | Description               |
| -------------- | ------ | ------------------------- |
| Mainframe      | 1960s  | Time-sharing, centralized |
| Client-Server  | 1980s  | Distributed processing    |
| Web            | 1990s  | Internet applications     |
| Grid Computing | 2000s  | Distributed resources     |
| Cloud          | 2006+  | On-demand, virtualized    |

**Key Milestones:**

- 1999: Salesforce (SaaS pioneer)
- 2002: AWS launches
- 2006: EC2 and S3
- 2008: Google App Engine
- 2010: Microsoft Azure

---

### 5. SOA in cloud applications

**SOA (Service-Oriented Architecture):** Design using modular services.

**Why Good for Cloud:**

1. **Loose Coupling:** Independent services
2. **Reusability:** Share across applications
3. **Interoperability:** Standard protocols
4. **Scalability:** Scale services independently
5. **Flexibility:** Replace/update parts
6. **API-first:** Easy integration

---

### 6. Types of hypervisors

**Type 1 (Bare Metal):**

- Runs directly on hardware
- Better performance
- Examples: VMware ESXi, KVM, Hyper-V

**Type 2 (Hosted):**

- Runs on host OS
- Easier setup
- Examples: VirtualBox, VMware Workstation

| Feature     | Type 1     | Type 2      |
| ----------- | ---------- | ----------- |
| Performance | High       | Lower       |
| Security    | Better     | Less        |
| Use Case    | Production | Development |

---

### 7. Cloud security architecture design

**Principles:**

1. Defense in depth
2. Least privilege
3. Zero trust
4. Encryption everywhere
5. Continuous monitoring

**Layers:**

- Perimeter security
- Network security
- Host security
- Application security
- Data security

---

### 8. Cloud security mechanisms

1. **Encryption:** AES, TLS
2. **Identity Management:** IAM, SSO
3. **Access Control:** RBAC, MFA
4. **Network Security:** VPC, firewalls
5. **Key Management:** HSM, KMS
6. **Monitoring:** SIEM, logging
7. **Compliance:** Auditing, certifications

---

### 9. IaaS vs PaaS

| Aspect           | IaaS                  | PaaS                 |
| ---------------- | --------------------- | -------------------- |
| **User Gets**    | VMs, storage, network | Development platform |
| **User Manages** | OS, apps, data        | Apps, data only      |
| **Target**       | IT admins             | Developers           |
| **Flexibility**  | High                  | Medium               |
| **Examples**     | AWS EC2               | Heroku, App Engine   |

---

### 10. Aneka container and framework

**Aneka Container:**

- Runtime environment for services
- Hosts application workloads

**Framework Components:**

1. **Application Services:** Thread, Task, MapReduce
2. **Foundation Services:** Membership, Heartbeat, Accounting
3. **Fabric Services:** Provisioning, Storage, Communication
4. **Management Tools:** Console, APIs

---

### 11. Azure Shell and monitoring

**Azure Shell:**

- Browser-based command-line
- Access Azure resources
- PowerShell and Bash support
- Pre-installed tools

**Azure Monitoring:**

1. **Azure Monitor:** Metrics and logs
2. **Application Insights:** App performance
3. **Log Analytics:** Query and analyze
4. **Alerts:** Notifications
5. **Dashboards:** Visualization

---

### 12. Cloud in business and consumer apps

**Business:**

1. CRM (Salesforce)
2. ERP (SAP)
3. Collaboration (Teams, Slack)
4. Storage (OneDrive, Box)
5. Analytics (Power BI)
6. DevOps (GitHub Actions)

**Consumer:**

1. Email (Gmail)
2. Entertainment (Netflix, Spotify)
3. Social Media (Instagram)
4. Storage (Google Drive, iCloud)
5. Gaming (Xbox Cloud)

---

## 📚 Resources

- Cloud Computing textbooks
- AWS/Azure documentation
- Certification courses
