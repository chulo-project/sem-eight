# Introduction to Cloud Computing (ICC) Study Guide

This guide is based on the Tribhuvan University syllabus for CSC467 (Introduction to Cloud Computing).

## Unit 1: Introduction to Cloud Computing (6 Hrs.)

### Key Topics

- **Evolution:** From mainframe to cluster, grid, and utility computing to cloud.
- **Definition:** NIST Definition (5-3-2 Principle: 5 Characteristics, 3 Service Models, 4 Deployment Models).
- **Characteristics:**
  - On-demand self-service.
  - Broad network access.
  - Resource pooling (Multi-tenancy).
  - Rapid elasticity.
  - Measured service.
- **Cloud Service Models:**
  - **SaaS (Software as a Service):** End-user applications (Gmail, Salesforce).
  - **PaaS (Platform as a Service):** Development tools & runtime (Google App Engine, Heroku).
  - **IaaS (Infrastructure as a Service):** Raw computing resources (AWS EC2, Google Compute Engine).
- **Deployment Models:** Public, Private, Community, Hybrid.
- **Benefits & Challenges:**
  - **Benefits:** Cost-saving, Scalability, Flexibility.
  - **Challenges:** Security, Privacy, Vendor Lock-in, Latency.
- **Cloud Storage:** S3, Dropbox concepts.

### Study Questions

1. Define Cloud Computing. Explain its five essential characteristics.
2. Compare SaaS, PaaS, and IaaS with examples.
3. Differentiate between Public and Private Cloud. When would you use a Hybrid Cloud?
4. What are the major challenges associated with cloud adoption?
5. What is cloud? Discuss different types of clouds with their usages? What are the cloud service requirements?
6. Explain evolution of cloud computing.

---

## Unit 2: Cloud Computing Architecture (6 Hrs.)

### Key Topics

- **Detailed Service Models:**
  - **PaaS:** Middleware, Runtime environments.
  - **SaaS:** Application delivery.
  - **IaaS:** Virtualization, Storage, Networking.
- **Cloud Design using SOA (Service Oriented Architecture):**
  - Loose coupling, Interoperability.
  - Services as building blocks.
- **Security, Trust, and Privacy Issues:**
  - Conceptual overview in architecture.

### Study Questions

1. Explain the Cloud Computing Reference Architecture.
2. How does SOA support Cloud Computing?
3. Discuss the architectural differences between IaaS and PaaS.
4. What is SOA? Discuss why adoption of SOA is good while developing cloud applications.

---

## Unit 3: Cloud Virtualization Technology (10 Hrs.)

### Key Topics

- **Introduction:** Definition, History.
- **Types of Virtualization:** (Server, Storage, Network, Desktop, Application).
- **Implementation Levels:**
  - Instruction Set Architecture (ISA) Level.
  - Hardware Abstraction Layer (HAL) Level.
  - OS Level (Containers).
  - Library Level.
  - Application Level.
- **Hypervisors (VMM):**
  - **Type 1 (Bare Metal):** ESXi, Hyper-V, Xen.
  - **Type 2 (Hosted):** VirtualBox, VMware Workstation.
- **Features:** Live Migration, Load Balancing, Fault Tolerance.
- **Infrastructure Requirements:** Hardware support (Intel VT-x, AMD-V).

### Study Questions

1. What is Virtualization? Why is it the backbone of Cloud Computing?
2. Differentiate between Type 1 and Type 2 Hypervisors.
3. Explain the concept of Server Virtualization and its benefits.
4. What is Live Migration?
5. What is the significance of virtualization in cloud computing? Discuss the implementation levels of virtualization structures.
6. Explain different types of hypervisors.

---

## Unit 4: Cloud Programming Models (12 Hrs.)

### Key Topics

- **Programming Models:**
  - **Thread Programming:** Traditional concurrency (pthreads, Java threads).
  - **Task Programming:** Task Parallel Library (TPL), Workers.
  - **MapReduce Programming:** Data-parallel processing.
- **MapReduce Details:**
  - **Map Function:** Key/Value pair processing.
  - **Reduce Function:** Aggregation.
  - **Parallel Efficiency:** Scalability of MapReduce jobs.
- **Comparisons:**
  - Threads vs. Tasks vs. MapReduce.
  - Suitability for different types of problems (CPU bound vs. I/O bound vs. Data intensive).

### Study Questions

1. Explain the MapReduce programming model with a diagram.
2. How does Task Programming differ from Thread Programming?
3. Discuss the suitability of MapReduce for enterprise batch processing.
4. What are the limitations of MapReduce?
5. Differentiate task from thread. How are operations like map, shuffle & sort executed in MapReduce?

---

## Unit 5: Cloud Security (6 Hrs.)

### Key Topics

- **Security Issues & Risks:**
  - Data Breaches, Data Loss, Account Hijacking, Insecure APIs.
- **Securing Service Models:**
  - **SaaS Security:** Identity Management, CASB.
  - **IaaS Security:** VM hardening, Network Security Groups.
- **Data Security:** Encryption (at rest, in transit), Key Management.
- **Virtual Machine Security:** Isolation, Hyperjacking.
- **Legal & Compliance:** GDPR, HIPAA, SLA audits.
- **Multi-tenancy Issues:** Side-channel attacks, resource contention.

### Study Questions

1. What are the top security risks in Cloud Computing according to CSA (Cloud Security Alliance)?
2. Explain the security responsibilities of the customer vs. the provider in IaaS, PaaS, and SaaS (Shared Responsibility Model).
3. What are the specific security challenges introduced by Multi-tenancy?
4. Discuss the importance of SLAs in cloud security.
5. Describe the security architecture design in cloud.
6. Discuss the various security mechanisms that are implemented to secure a cloud.

---

## Unit 6: Cloud Platforms and Applications (12 Hrs.)

### Key Topics

- **Cloud Platforms:**
  - **AWS (Amazon Web Services):** EC2, S3, RDS.
  - **Microsoft Azure:** Azure VMs, Blob Storage.
  - **Google App Engine (GAE):** PaaS concepts.
  - **Aneka:** .NET-based cloud platform for enterprise.
- **Applications:**
  - **Scientific Applications:** High Performance Computing (HPC), Genome Analysis.
  - **Business/Consumer Applications:** CRM (Salesforce), ERP, Social Networks (Facebook), Media Streaming (Netflix).
  - **Open Challenges:** Interoperability, Standards, Sustainability (Green Cloud).

### Study Questions

1. Compare AWS EC2 and Google App Engine.
2. Describe the architecture of Aneka.
3. How is Cloud Computing transforming Scientific Research?
4. What are the open research challenges in Cloud Computing?
5. What is Aneka container? Explain the components of Aneka Framework.
6. What is Azure Shell? Explain about Azure monitoring services.
7. How are cloud platforms used in business and consumer applications?
