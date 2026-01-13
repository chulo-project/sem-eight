# Chapter 4: Distributed Databases, NOSQL Systems, and BigData

**⏰ Teaching Hours: 12 | 📌 Very Frequently Asked in Exams**

---

## 🎯 Learning Objectives

- Understand distributed database concepts
- Master data fragmentation and replication
- Learn NoSQL system types and CAP theorem
- Understand BigData and MapReduce/Hadoop

---

## 4.1 Distributed Database Concepts and Advantages ⭐⭐⭐

### Definition

**Distributed Database (DDB):** A collection of logically interrelated databases distributed over a computer network that appears to users as a single unified database.

### Key Characteristics

1. **Data Distribution:** Data physically stored at multiple sites
2. **Logical Integration:** Appears as single database to users
3. **Network Connected:** Sites connected via network
4. **Transparent Access:** Location transparent to users

### Centralized vs Distributed

| Aspect                  | Centralized      | Distributed        |
| ----------------------- | ---------------- | ------------------ |
| Data Location           | Single site      | Multiple sites     |
| Single Point of Failure | Yes              | No                 |
| Scalability             | Limited          | High               |
| Performance             | Bottleneck       | Parallel access    |
| Cost                    | Expensive server | Commodity hardware |
| Complexity              | Lower            | Higher             |

### Advantages of Distributed Databases ⭐⭐⭐

**1. Improved Reliability and Availability**

- No single point of failure
- System continues if one site fails
- Replicated data ensures access

**2. Improved Performance**

- Data localized near users
- Parallel query processing
- Reduced network traffic

**3. Scalability**

- Add new sites as needed
- Incremental growth
- No major restructuring

**4. Autonomy**

- Local control of data
- Independent operations
- Local optimization

**5. Cost Effectiveness**

- Use commodity hardware
- Reduce communication costs
- Share resources

### Transparency in Distributed Databases

| Transparency      | Description                    |
| ----------------- | ------------------------------ |
| **Location**      | Users unaware of data location |
| **Fragmentation** | Users unaware of partitioning  |
| **Replication**   | Users unaware of copies        |
| **Transaction**   | ACID properties maintained     |
| **Performance**   | Query optimization hidden      |

> 📌 **FREQUENTLY ASKED:** "Define distributed database. What are its benefits?" (2079, 2080)

---

## 4.2 Data Fragmentation ⭐⭐⭐

### Definition

Dividing a relation into smaller fragments for distribution across sites.

### Types of Fragmentation

#### 1. Horizontal Fragmentation

**Definition:** Partition a table into subsets of rows based on selection conditions.

**Example:**

```sql
EMPLOYEE(emp_id, name, salary, location)

-- Fragment by location
EMPLOYEE_KTM = σ location='Kathmandu' (EMPLOYEE)
EMPLOYEE_PKR = σ location='Pokhara' (EMPLOYEE)
EMPLOYEE_BRT = σ location='Biratnagar' (EMPLOYEE)
```

**Advantages:**

- Query only needed fragments
- Local data access
- Parallel processing

**Reconstruction:**

```sql
EMPLOYEE = EMPLOYEE_KTM ∪ EMPLOYEE_PKR ∪ EMPLOYEE_BRT
```

#### 2. Vertical Fragmentation

**Definition:** Partition a table into subsets of columns.

**Example:**

```sql
EMPLOYEE(emp_id, name, salary, address, phone, photo)

-- Fragment by usage
EMP_PERSONAL = π emp_id, name, address, phone (EMPLOYEE)
EMP_PAYROLL = π emp_id, salary (EMPLOYEE)
EMP_MEDIA = π emp_id, photo (EMPLOYEE)
```

**Important:** Primary key must be included in ALL fragments!

**Reconstruction:**

```sql
EMPLOYEE = EMP_PERSONAL ⋈ EMP_PAYROLL ⋈ EMP_MEDIA
```

#### 3. Mixed (Hybrid) Fragmentation

**Definition:** Combination of horizontal and vertical fragmentation.

**Approach 1: Horizontal then Vertical**

```
Step 1: EMPLOYEE → EMP_KTM, EMP_PKR (horizontal)
Step 2: EMP_KTM → EMP_KTM_PERSONAL, EMP_KTM_PAYROLL (vertical)
```

**Approach 2: Vertical then Horizontal**

```
Step 1: EMPLOYEE → EMP_PERSONAL, EMP_PAYROLL (vertical)
Step 2: EMP_PERSONAL → EMP_PERSONAL_KTM, EMP_PERSONAL_PKR (horizontal)
```

### Fragmentation Correctness Rules

1. **Completeness:** All data must appear in at least one fragment
2. **Reconstruction:** Original relation must be recoverable
3. **Disjointness:** No overlapping data (except keys in vertical)

> 📌 **FREQUENTLY ASKED:** "Explain horizontal and vertical fragmentation with example" (2079, 2080)

---

## 4.3 Replication and Allocation Techniques

### Data Replication

#### Full Replication

- Entire database at every site
- **Pros:** High availability, fast reads
- **Cons:** High storage cost, complex updates

#### No Replication

- Each fragment at exactly one site
- **Pros:** No redundancy, simple updates
- **Cons:** Single point of failure

#### Partial Replication

- Some fragments replicated at selected sites
- **Pros:** Balance of availability and cost
- **Cons:** Replication management

### Allocation Strategies

**Factors to Consider:**

1. Query patterns (who accesses what)
2. Update frequency
3. Storage capacity at each site
4. Communication costs
5. Reliability requirements

**Allocation Decision:**

- Place data near frequent users
- Replicate frequently read data
- Keep single copy for frequently updated data

---

## 4.4 Types and Architectures of Distributed Systems ⭐⭐

### Types by Distribution

**1. Homogeneous DDS**

- Same DBMS at all sites
- Unified schema
- Easier coordination

**2. Heterogeneous DDS (Federated)**

- Different DBMS at sites
- Schema integration needed
- Middleware for translation

### Distributed Database Architectures

**1. Client-Server Architecture**

```
     Client ←→ Server
     Client ←→ Server
               ↓
           Database
```

**2. Peer-to-Peer Architecture**

```
    Site 1 ←→ Site 2
       ↕        ↕
    Site 3 ←→ Site 4
```

All sites equal, can process queries

**3. Multi-tier Architecture**

```
Clients → Application Servers → Database Servers
```

**4. Federated Architecture**

- Autonomous databases
- Limited integration via middleware
- Each maintains local control

> 📌 **FREQUENTLY ASKED:** "Explain distributed database architectures" (2081)

---

## 4.5 Introduction to NOSQL Systems ⭐⭐⭐

### Why NoSQL?

**Limitations of RDBMS for modern apps:**

1. Fixed schema inflexible
2. Difficult horizontal scaling
3. Poor performance with big data
4. Complex for simple operations

### NoSQL Characteristics

1. **Schema-less/Flexible Schema**
2. **Horizontally Scalable**
3. **Distributed by Design**
4. **Eventually Consistent (often)**
5. **Various Data Models**

### Comparison: SQL vs NoSQL

| Aspect       | SQL/RDBMS       | NoSQL                |
| ------------ | --------------- | -------------------- |
| Schema       | Fixed           | Flexible             |
| Scaling      | Vertical        | Horizontal           |
| Consistency  | Strong (ACID)   | Often eventual       |
| Joins        | Native support  | Limited/None         |
| Transactions | Full support    | Limited              |
| Best For     | Complex queries | Simple, scalable ops |

> 📌 **FREQUENTLY ASKED:** "What are characteristics of NoSQL?" (2079, 2080, 2081)

---

## 4.6 The CAP Theorem ⭐⭐⭐

### Definition

In a distributed system, it is impossible to simultaneously provide all three guarantees: **Consistency, Availability, and Partition Tolerance**.

### The Three Properties

**Consistency (C)**

- All nodes see same data at same time
- After write, all reads return that value
- Linearizability

**Availability (A)**

- Every request receives a response
- System always operational
- No request fails (even if not latest data)

**Partition Tolerance (P)**

- System continues despite network partitions
- Handles network failures
- Essential for distributed systems

### CAP Trade-offs

**You can only have 2 of 3:**

| Type   | Characteristics                 | Examples                            |
| ------ | ------------------------------- | ----------------------------------- |
| **CP** | Consistent + Partition Tolerant | MongoDB, HBase, Redis               |
| **AP** | Available + Partition Tolerant  | Cassandra, CouchDB, DynamoDB        |
| **CA** | Consistent + Available          | Single-node RDBMS (not distributed) |

### In Practice

Since network partitions WILL happen, we must accept P.

**Real choice:** Consistency OR Availability

- **Banking:** Choose Consistency (CP)
- **Social Media:** Choose Availability (AP)

> 📌 **FREQUENTLY ASKED:** "Explain CAP theorem" (2079, 2081)

---

## 4.7 NoSQL Database Types ⭐⭐⭐

### 1. Document-Based Systems

**Structure:** JSON/BSON documents

**Characteristics:**

- Flexible schema
- Nested data
- Rich queries

**Example (MongoDB):**

```json
{
  "_id": "1001",
  "name": "John Doe",
  "address": {
    "city": "Kathmandu",
    "zip": "44600"
  },
  "orders": [
    { "product": "Laptop", "price": 50000 },
    { "product": "Mouse", "price": 500 }
  ]
}
```

**Examples:** MongoDB, CouchDB, Firebase

### 2. Key-Value Stores

**Structure:** Simple key-value pairs

**Characteristics:**

- Fastest access (O(1))
- Simple model
- Limited query capability

**Example:**

```
key: user:1001
value: {"name": "John", "email": "john@example.com"}
```

**Examples:** Redis, Amazon DynamoDB, Memcached

### 3. Column-Based (Wide Column) Systems

**Structure:** Columns grouped into column families

**Characteristics:**

- Efficient for column-based queries
- Good for sparse data
- Great for analytics

**Example:**

```
Row Key: user1001
Column Family: personal
    name: "John"
    email: "john@example.com"
Column Family: orders
    order1: "Laptop"
    order2: "Phone"
```

**Examples:** Apache Cassandra, HBase, Google Bigtable

### 4. Graph-Based Systems

**Structure:** Nodes and edges (relationships)

**Characteristics:**

- Optimized for relationship queries
- Traversal operations
- Social networks, recommendations

**Example:**

```
(Person:John) -[:FRIENDS_WITH]-> (Person:Jane)
(Person:John) -[:WORKS_AT]-> (Company:TechCorp)
```

**Examples:** Neo4j, Amazon Neptune, ArangoDB

> 📌 **FREQUENTLY ASKED:** "Explain document-based NoSQL with example" (Model, 2080)

---

## 4.8 BigData ⭐⭐⭐

### Definition

Datasets too large and complex for traditional data processing tools.

### The 3 V's (or 5 V's)

| V            | Description           | Example                  |
| ------------ | --------------------- | ------------------------ |
| **Volume**   | Massive quantity      | Petabytes, Exabytes      |
| **Velocity** | Speed of generation   | Real-time streams        |
| **Variety**  | Different formats     | Structured, unstructured |
| **Veracity** | Data quality/accuracy | Noisy, inconsistent      |
| **Value**    | Business worth        | Insights, decisions      |

### Big Data Challenges

1. Storage and management
2. Processing at scale
3. Real-time analysis
4. Data quality
5. Security and privacy

### Big Data Technologies

- **Storage:** HDFS, S3
- **Processing:** MapReduce, Spark
- **Streaming:** Kafka, Storm
- **Analytics:** Hive, Pig
- **ML:** Mahout, MLlib

> 📌 **FREQUENTLY ASKED:** "What is Big Data? What are its 3 V's?" (2080, 2081)

---

## 4.9 MapReduce ⭐⭐⭐

### Definition

Programming model for processing large datasets in parallel across distributed clusters.

### MapReduce Phases

**1. Map Phase**

- Input: Key-value pairs
- Process: Apply map function
- Output: Intermediate key-value pairs

**2. Shuffle and Sort Phase**

- Group by key
- Sort keys
- Prepare for reducers

**3. Reduce Phase**

- Input: Key + list of values
- Process: Apply reduce function
- Output: Final results

### Word Count Example ⭐⭐⭐

**Input:** "Hello World Hello Cloud World"

**Map Phase:**

```
Map("Hello World Hello Cloud World")
Output: [(Hello,1), (World,1), (Hello,1), (Cloud,1), (World,1)]
```

**Shuffle & Sort:**

```
(Cloud, [1])
(Hello, [1, 1])
(World, [1, 1])
```

**Reduce Phase:**

```
Reduce(Cloud, [1]) → (Cloud, 1)
Reduce(Hello, [1,1]) → (Hello, 2)
Reduce(World, [1,1]) → (World, 2)
```

**Final Output:**

```
Cloud: 1
Hello: 2
World: 2
```

### MapReduce Pseudocode

```python
# Map function
def map(key, value):
    for word in value.split():
        emit(word, 1)

# Reduce function
def reduce(key, values):
    total = sum(values)
    emit(key, total)
```

### MapReduce Advantages

1. **Parallel Processing:** Distributed across nodes
2. **Scalability:** Add more nodes
3. **Fault Tolerance:** Automatic retry on failure
4. **Data Locality:** Process where data resides

> 📌 **FREQUENTLY ASKED:** "Explain MapReduce with example" (2081 ICC, Model)

---

## 4.10 Hadoop ⭐⭐

### Definition

Open-source framework for distributed storage and processing of big data.

### Hadoop Core Components

**1. HDFS (Hadoop Distributed File System)**

- Distributed storage
- Files split into blocks (128MB default)
- Replicated across nodes (3 copies)

**2. YARN (Yet Another Resource Negotiator)**

- Resource management
- Job scheduling
- Cluster management

**3. MapReduce**

- Processing engine
- Parallel computation
- Batch processing

### HDFS Architecture

```
        NameNode (Master)
           /    \
     DataNode  DataNode  DataNode
        |         |         |
      Blocks   Blocks    Blocks
```

**NameNode:** Manages metadata, namespace
**DataNode:** Stores actual data blocks

### Hadoop Ecosystem

| Tool  | Purpose                   |
| ----- | ------------------------- |
| Hive  | SQL-like queries          |
| Pig   | High-level scripting      |
| HBase | NoSQL database            |
| Spark | Fast in-memory processing |
| Kafka | Stream processing         |
| Sqoop | Data import/export        |

---

## 📚 Important Questions from Past Papers

1. "Define distributed database. Benefits over centralized?" (2079)
2. "Explain data fragmentation techniques with example" (Model, 2079, 2080)
3. "Explain distributed database architectures" (2081)
4. "What are characteristics of NoSQL?" (2079, 2080)
5. "Explain CAP theorem" (2079, 2081)
6. "Explain document-based NoSQL with example" (Model, 2079)
7. "What is Big Data? 3 V's?" (2080, 2081)
8. "Write short note on MapReduce" (Model, 2081)

---

## 🔗 Additional Resources

**Textbooks:**

- Elmasri & Navathe, Chapter 23-24 (Distributed DB)
- "NoSQL Distilled" by Pramod Sadalage

**Online:**

- MongoDB University (free courses)
- Cassandra tutorials
- Hadoop documentation

**YouTube:**

- Big Data tutorials
- MapReduce explained
- NoSQL database comparisons

> 🖼️ **NOTE:** Be able to compare NoSQL types and explain when to use each. CAP theorem visualization helps understanding.
