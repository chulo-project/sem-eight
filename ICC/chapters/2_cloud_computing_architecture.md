# Chapter 2: Cloud Computing Architecture

**⏰ Teaching Hours: 6 | 📌 Core Concepts**

---

## 🎯 Learning Objectives

- Understand cloud service models (IaaS, PaaS, SaaS)
- Learn deployment models (public, private, hybrid)
- Understand SOA-based design
- Learn about cloud security and trust

---

## 2.1 Cloud Service Models ⭐⭐⭐

### Infrastructure as a Service (IaaS)

**Definition:** Provides virtualized computing resources over internet.

**What Provider Manages:**

- Hardware (servers, storage, networking)
- Virtualization layer

**What User Manages:**

- Operating system
- Middleware
- Runtime
- Applications
- Data

**Examples:**

- AWS EC2
- Microsoft Azure VMs
- Google Compute Engine
- DigitalOcean

**Use Cases:**

- Development and testing
- Web hosting
- Big data analysis
- High-performance computing
- Backup and recovery

### Platform as a Service (PaaS) ⭐⭐

**Definition:** Provides platform for developing and deploying applications.

**What Provider Manages:**

- Hardware
- Virtualization
- Operating system
- Middleware
- Runtime

**What User Manages:**

- Applications
- Data

**Examples:**

- Google App Engine
- Heroku
- Azure App Service
- AWS Elastic Beanstalk

**Use Cases:**

- Web application development
- API development
- Microservices
- Mobile backend

### Software as a Service (SaaS)

**Definition:** Complete applications delivered over internet.

**What Provider Manages:**

- Everything

**What User Manages:**

- Nothing (just uses the software)

**Examples:**

- Gmail, Outlook
- Salesforce CRM
- Microsoft 365
- Dropbox

**Use Cases:**

- Email and collaboration
- CRM
- Project management
- Accounting

### Service Model Comparison ⭐⭐⭐

```
┌─────────────────────────────────────────────┐
│              SaaS                           │
│  ┌───────────────────────────────────────┐  │
│  │           PaaS                        │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │         IaaS                    │  │  │
│  │  │ ┌─────────────────────────────┐ │  │  │
│  │  │ │    On-Premises              │ │  │  │
```

| Layer          | On-Prem | IaaS     | PaaS     | SaaS     |
| -------------- | ------- | -------- | -------- | -------- |
| Applications   | You     | You      | You      | Provider |
| Data           | You     | You      | You      | Provider |
| Runtime        | You     | You      | Provider | Provider |
| Middleware     | You     | You      | Provider | Provider |
| OS             | You     | You      | Provider | Provider |
| Virtualization | You     | Provider | Provider | Provider |
| Servers        | You     | Provider | Provider | Provider |
| Storage        | You     | Provider | Provider | Provider |
| Networking     | You     | Provider | Provider | Provider |

---

## 2.2 Cloud Deployment Models ⭐⭐⭐

### Public Cloud

**Definition:** Services offered over public internet, available to anyone.

**Characteristics:**

- Third-party provider owned
- Shared infrastructure
- Pay-per-use
- No capital investment

**Providers:** AWS, Azure, GCP, Alibaba Cloud

**Best For:**

- Variable workloads
- Non-sensitive data
- Startups and SMBs
- Development/testing

### Private Cloud ⭐⭐

**Definition:** Cloud infrastructure for single organization only.

**Characteristics:**

- Organization owned or hosted
- Dedicated resources
- Greater control
- Higher security

**Options:**

- On-premises private cloud
- Hosted private cloud (at provider)

**Best For:**

- Sensitive data (healthcare, finance)
- Regulatory compliance
- Large enterprises
- Mission-critical applications

### Hybrid Cloud ⭐⭐

**Definition:** Combination of public and private clouds.

**Characteristics:**

- Mixed deployment
- Data/apps can move between clouds
- Unified management
- Best of both worlds

**Use Cases:**

- Cloud bursting (overflow to public)
- Gradual migration
- Tiered data storage
- Disaster recovery

### Community Cloud

**Definition:** Shared by organizations with common interests.

**Characteristics:**

- Joint ownership possible
- Shared costs
- Common security/compliance

**Examples:**

- Government cloud
- Healthcare cloud
- Research community cloud

### Public vs Private Cloud ⭐⭐⭐

| Aspect        | Public                | Private      |
| ------------- | --------------------- | ------------ |
| Ownership     | Provider              | Organization |
| Access        | Open                  | Restricted   |
| Cost Model    | OpEx                  | CapEx + OpEx |
| Scalability   | Unlimited             | Limited      |
| Control       | Limited               | Full         |
| Security      | Shared responsibility | Full control |
| Customization | Limited               | High         |

---

## 2.3 SOA-Based Architecture Design ⭐⭐

### Service-Oriented Architecture (SOA)

**Definition:** Architectural style using modular, loosely coupled services.

### SOA Principles

1. **Loose Coupling:** Services independent
2. **Reusability:** Share services across apps
3. **Interoperability:** Standard interfaces
4. **Abstraction:** Hide implementation
5. **Composability:** Build complex from simple

### SOA in Cloud Applications ⭐⭐

**Why SOA for Cloud:**

1. **Modularity:** Update services independently
2. **Scalability:** Scale specific services
3. **Resilience:** Failure isolation
4. **Flexibility:** Replace components
5. **API-first:** Easy integration

**Web Services:**

- SOAP (XML-based)
- REST (HTTP-based)

### Microservices vs Monolithic

| Monolithic             | Microservices           |
| ---------------------- | ----------------------- |
| Single deployable unit | Many small services     |
| Tight coupling         | Loose coupling          |
| One technology stack   | Mix of technologies     |
| Scale entire app       | Scale specific services |
| Simple deployment      | Complex deployment      |

---

## 2.4 Cloud Security, Trust, and Privacy

### Security Concepts

**Shared Responsibility Model:**

- Provider secures infrastructure
- User secures applications and data
- Varies by service model

### Security Concerns

1. **Data Breaches:** Unauthorized access
2. **Data Loss:** Deletion, corruption
3. **Account Hijacking:** Credential theft
4. **Insecure APIs:** Vulnerable interfaces
5. **Insider Threats:** Malicious employees

### Trust Issues

1. Trusting provider with data
2. Vendor reliability
3. Service continuity
4. Exit strategy

### Privacy Considerations

1. Data location/jurisdiction
2. Regulatory compliance (GDPR)
3. Data encryption
4. Access controls

---

## 📚 Important Questions

1. "Cloud service models (IaaS, PaaS, SaaS)" (2080, 2081)
2. "Public vs Private cloud" (Model, 2081)
3. "Hybrid and community cloud - when to use?" (2081)
4. "SOA in cloud applications" (2080, 2082)
5. "IaaS vs PaaS comparison" (2082)

---

## 🔗 Additional Resources

**Textbooks:**

- Mastering Cloud Computing, Chapter 2-3

**Online:**

- AWS Well-Architected Framework
- Azure Architecture Center
- Google Cloud Architecture

**Practice:**

- Free tier accounts (AWS, Azure, GCP)
