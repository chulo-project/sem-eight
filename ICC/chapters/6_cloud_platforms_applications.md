# Chapter 6: Cloud Platforms and Applications

**⏰ Teaching Hours: 12 | 📌 Practical Applications**

---

## 🎯 Learning Objectives

- Learn about major cloud platforms (AWS, Azure, Aneka)
- Understand web services in cloud
- Explore cloud applications (scientific, business, consumer)

---

## 6.1 Web Services in Cloud

### Definition

**Web Service:** Software system designed to support interoperable machine-to-machine interaction over a network.

### Types

**SOAP (Simple Object Access Protocol)**

- XML-based messaging
- Strict standards
- Enterprise applications

**REST (Representational State Transfer)**

- HTTP-based
- Lightweight
- Most common today

### RESTful Web Services

```
GET    /users        - List users
GET    /users/{id}   - Get user
POST   /users        - Create user
PUT    /users/{id}   - Update user
DELETE /users/{id}   - Delete user
```

---

## 6.2 Google App Engine ⭐⭐

### Overview

**App Engine:** PaaS for developing and hosting web applications.

### Features

1. **Auto-scaling:** Scale based on traffic
2. **Multiple Languages:** Python, Java, Go, Node.js
3. **Built-in Services:**
   - Datastore (NoSQL)
   - Memcache
   - Task queues
   - Cron jobs
4. **Version Management:** A/B testing
5. **Traffic Splitting:** Gradual rollouts

### App Engine Components ⭐⭐

1. **Runtime Environment:** Language support
2. **Datastore:** NoSQL database
3. **Memcache:** In-memory caching
4. **Blobstore:** Large file storage
5. **Task Queue:** Background processing
6. **URL Fetch:** HTTP requests
7. **Users API:** Authentication

### Deployment Example

```yaml
# app.yaml
runtime: python39
handlers:
  - url: /.*
    script: auto
```

```python
# main.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from App Engine!'
```

```bash
gcloud app deploy
```

---

## 6.3 Microsoft Azure ⭐⭐

### Overview

**Azure:** Microsoft's comprehensive cloud platform.

### Azure Services

**Compute:**

- Azure VMs
- App Service
- Azure Functions (Serverless)
- Azure Kubernetes Service (AKS)

**Storage:**

- Blob Storage (unstructured)
- Table Storage (NoSQL)
- Queue Storage (messaging)
- File Storage (SMB shares)
- Disk Storage (VMs)

**Database:**

- Azure SQL Database
- Cosmos DB (NoSQL)
- Azure Database for MySQL/PostgreSQL

**Networking:**

- Virtual Network
- Load Balancer
- Azure CDN
- Azure DNS

**AI/ML:**

- Azure Machine Learning
- Cognitive Services

### Azure Shell ⭐⭐

**Definition:** Browser-based command-line for Azure.

**Features:**

- PowerShell and Bash
- Pre-installed tools
- Persistent storage
- Access from anywhere

### Azure Monitoring Services ⭐⭐

1. **Azure Monitor:** Metrics and logs
2. **Application Insights:** App performance
3. **Log Analytics:** Query and analyze
4. **Alerts:** Notifications
5. **Dashboards:** Visualization
6. **Service Health:** Azure status

---

## 6.4 Amazon Web Services (AWS)

### AWS S3 (Simple Storage Service) ⭐⭐⭐

**Definition:** Object storage service.

**Concepts:**

- **Bucket:** Container for objects
- **Object:** File + metadata
- **Key:** Unique identifier for object

**Bucket Addressing ⭐⭐**

Virtual-hosted style:

```
https://bucket-name.s3.region.amazonaws.com/object-key
https://my-bucket.s3.us-east-1.amazonaws.com/images/photo.jpg
```

Path style:

```
https://s3.region.amazonaws.com/bucket-name/object-key
```

**Bucket Features:**

- Globally unique names
- Versioning
- Access control
- Lifecycle policies
- Cross-region replication

### AWS EC2 ⭐⭐

**Definition:** Elastic Compute Cloud - scalable VMs.

**Features:**

- Instance types (compute, memory, GPU)
- Auto Scaling
- Elastic Load Balancing
- Multiple pricing (on-demand, reserved, spot)
- AMIs (Amazon Machine Images)

---

## 6.5 Aneka Platform ⭐⭐⭐

### Overview

**Aneka:** Cloud application development platform by Manjrasoft.

### Aneka Architecture

```
┌─────────────────────────────────────┐
│         Aneka Master Node           │
├─────────────────────────────────────┤
│         Aneka Container             │
│  ┌─────────────────────────────────┐│
│  │    Application Services         ││
│  │  (Thread, Task, MapReduce)      ││
│  ├─────────────────────────────────┤│
│  │    Foundation Services          ││
│  │  (Membership, Heartbeat, etc.)  ││
│  ├─────────────────────────────────┤│
│  │    Fabric Services              ││
│  │  (Provisioning, Storage)        ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Aneka Container ⭐⭐⭐

**Definition:** Runtime environment that hosts Aneka services.

### Services in Aneka Container ⭐⭐⭐

**1. Application Services**

- **Thread Service:** Multi-threaded applications
- **Task Service:** Independent task execution
- **MapReduce Service:** Big data processing

**2. Foundation Services**

- **Membership Service:** Node registration
- **Heartbeat Service:** Health monitoring
- **Licensing Service:** License management
- **Accounting Service:** Usage tracking
- **Reporting Service:** Logs and metrics

**3. Fabric Services**

- **Resource Provisioning:** VM management
- **Storage Service:** Data persistence
- **Communication Service:** Messaging

### Aneka Framework Components ⭐⭐

1. **Aneka Runtime:** Core execution environment
2. **Development SDKs:** .NET, Java APIs
3. **Management Tools:** Console, CLI
4. **Scheduling:** Task distribution
5. **Monitoring:** Performance tracking

---

## 6.6 Cloud Applications

### Scientific Applications ⭐⭐

1. **Genomics Research**
   - DNA sequencing analysis
   - Large dataset processing
   - Example: AWS for genomics

2. **Climate Modeling**
   - Weather simulations
   - Climate prediction
   - High-performance computing

3. **Drug Discovery**
   - Molecular simulations
   - Compound screening
   - Machine learning for drug design

4. **Particle Physics**
   - CERN data analysis
   - Collision data processing
   - Distributed computing

5. **Astronomy**
   - Telescope data processing
   - Image analysis
   - Sky surveys

6. **Healthcare/Medical**
   - Medical imaging analysis
   - ECG monitoring ⭐⭐
   - Telemedicine

### Business Applications ⭐⭐

1. **CRM (Customer Relationship Management)**
   - Salesforce, HubSpot
   - Customer data management

2. **ERP (Enterprise Resource Planning)**
   - SAP Cloud, Oracle Cloud
   - Business process integration

3. **Collaboration**
   - Microsoft 365, Google Workspace
   - Email, documents, meetings

4. **Analytics**
   - Business intelligence
   - Data visualization
   - Predictive analytics

5. **E-commerce**
   - Online stores
   - Payment processing
   - Inventory management

### Consumer Applications ⭐⭐

1. **Entertainment**
   - Netflix (streaming)
   - Spotify (music)
   - Cloud gaming (Xbox Cloud)

2. **Social Media**
   - Facebook, Instagram
   - Twitter, LinkedIn

3. **Storage**
   - Google Drive, Dropbox
   - iCloud, OneDrive

4. **Email**
   - Gmail, Outlook.com

5. **Productivity**
   - Google Docs
   - Microsoft Office Online

---

## 6.7 Open Challenges

1. **Interoperability:** Standards between providers
2. **Portability:** Moving between clouds
3. **Performance:** Consistent performance
4. **Security:** Continuous threats
5. **Cost Management:** Optimization
6. **Edge Computing:** Extending to edge
7. **Sustainability:** Energy efficiency

---

## 📚 Important Questions

1. "Aneka architecture and services" (2081)
2. "What is S3 bucket? Addressing?" (Model, 2079)
3. "Google App Engine components" (2080)
4. "Azure services/monitoring" (2080, 2082)
5. "Cloud in business and consumer apps" (Model, 2082)
6. "Scientific applications of cloud" (2081)
7. "Aneka container and framework" (2082)

---

## 🔗 Additional Resources

**Platforms:**

- AWS Free Tier
- Azure Free Account
- Google Cloud Free Tier

**Documentation:**

- AWS Documentation
- Azure Docs
- Google Cloud Docs

**Certifications:**

- AWS Solutions Architect
- Azure Administrator
- Google Cloud Engineer
