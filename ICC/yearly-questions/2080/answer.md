# ICC 2080 - Answers

---

## Section A (10 Marks Each)

### 1. Cloud computing definition. Cloud service models.

#### Definition

**Cloud Computing:** On-demand delivery of IT resources over the internet with pay-as-you-go pricing.

**Key Characteristics (NIST):**

1. On-demand self-service
2. Broad network access
3. Resource pooling
4. Rapid elasticity
5. Measured service

#### Cloud Service Models

**1. Infrastructure as a Service (IaaS)**

User gets: Virtual machines, storage, networks
User manages: OS, middleware, applications
Provider manages: Hardware, virtualization

Examples: AWS EC2, Azure VMs, Google Compute

Use cases: Development/testing, web hosting

**2. Platform as a Service (PaaS)**

User gets: Development platform, runtime
User manages: Applications, data
Provider manages: OS, middleware, hardware

Examples: Heroku, Google App Engine

Use cases: Application development, APIs

**3. Software as a Service (SaaS)**

User gets: Complete applications
User manages: Nothing (just uses)
Provider manages: Everything

Examples: Gmail, Salesforce, Microsoft 365

Use cases: Email, CRM, collaboration

---

### 2. Thread. Multi-threading. Thread programming in cloud.

#### Thread

**Definition:** Smallest unit of execution within a process.

**Characteristics:**

- Lightweight
- Shares process memory
- Independent execution path
- Has own stack

#### Why Multi-threading

1. **Parallelism:** Execute tasks simultaneously
2. **Responsiveness:** Non-blocking operations
3. **Resource Sharing:** Efficient memory use
4. **Scalability:** Utilize multiple cores
5. **Throughput:** Handle more requests

#### Thread Programming in Cloud

**Java Example:**

```java
// Creating thread
class MyTask extends Thread {
    public void run() {
        System.out.println("Task executing");
    }
}

// Using Runnable
Runnable task = () -> {
    System.out.println("Runnable task");
};
new Thread(task).start();

// Thread Pool (cloud-optimized)
ExecutorService pool = Executors.newFixedThreadPool(10);
for (int i = 0; i < 100; i++) {
    pool.submit(() -> {
        // Process request
    });
}
pool.shutdown();
```

**Cloud Considerations:**

- Use thread pools for efficiency
- Consider serverless functions
- Handle distributed synchronization
- Monitor thread performance

---

### 3. Virtualization implementation levels. Benefits.

#### Implementation Levels

**1. Hardware Level (Bare Metal)**

- Hypervisor runs on hardware
- Full control over resources
- Examples: VMware ESXi, KVM

**2. Operating System Level**

- Containers share OS kernel
- Lightweight isolation
- Examples: Docker, LXC

**3. Programming Language Level**

- Virtual machine for language
- Platform independence
- Examples: JVM, .NET CLR

**4. Application Level**

- Application-specific virtualization
- Sandboxed execution
- Examples: Wine, Cygwin

**5. Library Level**

- Intercept library calls
- Redirect to virtual resources
- API virtualization

#### Benefits of Virtualization

1. **Server Consolidation:** Multiple VMs on one server
2. **Cost Reduction:** Less hardware needed
3. **Improved Utilization:** 60-80% vs 15% utilization
4. **Faster Provisioning:** Minutes vs weeks
5. **Disaster Recovery:** Easy backup/restore
6. **Isolation:** Security boundaries
7. **Testing:** Safe environments
8. **Migration:** Move VMs easily

---

## Section B (5 Marks Each)

### 4. Advantages of cloud computing

1. **Cost Savings:** No upfront investment, pay-per-use
2. **Scalability:** Scale up/down on demand
3. **Accessibility:** Access from anywhere
4. **Reliability:** High availability, redundancy
5. **Speed:** Quick deployment
6. **Automatic Updates:** No manual patching
7. **Collaboration:** Shared resources
8. **Environmental:** Better resource efficiency

---

### 5. SOA in cloud applications

**SOA (Service-Oriented Architecture):** Design approach using modular services.

**Role in Cloud:**

1. **Loose Coupling:** Independent services
2. **Reusability:** Share services
3. **Interoperability:** Standard interfaces
4. **Scalability:** Scale individual services
5. **Flexibility:** Replace/update services easily

**Benefits:** Microservices, API-driven development

---

### 6. Load balancing

**Definition:** Distributing workload across servers.

**How Done:**

1. Hardware load balancers
2. Software load balancers (HAProxy, Nginx)
3. Cloud-native (AWS ELB, Azure LB)

**Algorithms:**

- Round Robin
- Least Connections
- Weighted Round Robin
- IP Hash

---

### 7. Cloud security challenges and risks

**Challenges:**

1. Data breaches
2. Insecure APIs
3. Account hijacking
4. Multi-tenancy risks

**Risks:**

1. Data loss
2. Compliance violations
3. DDoS attacks
4. Insider threats
5. Vendor lock-in

---

### 8. Data and application security

**Data Security:**

1. Encryption at rest and in transit
2. Access control (RBAC)
3. Data masking
4. Backup and recovery
5. Key management

**Application Security:**

1. Secure development lifecycle
2. Input validation
3. Authentication/authorization
4. Web application firewall (WAF)
5. Vulnerability scanning

---

### 9. Amazon EC2 and features

**Definition:** Elastic Compute Cloud - scalable virtual servers.

**Features:**

1. Instance types (compute, memory, storage optimized)
2. Auto Scaling
3. Elastic Load Balancing
4. Multiple pricing (on-demand, reserved, spot)
5. Security groups
6. Elastic IPs
7. AMIs (Amazon Machine Images)

---

### 10. Google App Engine components

**Core Components:**

1. **Runtime:** Python, Java, Go, Node.js
2. **Datastore:** NoSQL database
3. **Memcache:** In-memory caching
4. **Task Queue:** Background processing
5. **Cron:** Scheduled tasks
6. **URL Fetch:** HTTP requests

---

### 11. Azure storage services

1. **Blob Storage:** Unstructured data (images, videos)
2. **Table Storage:** NoSQL key-value store
3. **Queue Storage:** Message queuing
4. **File Storage:** SMB file shares
5. **Disk Storage:** Managed disks for VMs

**Features:**

- Geo-redundancy
- Access tiers (hot, cool, archive)
- Encryption

---

### 12. Business and scientific applications

**Business:**

1. CRM (Salesforce)
2. ERP (SAP Cloud)
3. Collaboration (Microsoft 365)
4. Analytics (Power BI)
5. E-commerce platforms

**Scientific:**

1. Genomics research
2. Climate modeling
3. Drug discovery
4. Particle physics
5. Astronomy data analysis
6. Medical imaging

---

## 📚 Resources

- Cloud Computing Bible
- AWS/Azure documentation
- Edureka tutorials
