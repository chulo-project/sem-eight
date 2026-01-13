# Advanced Database - Model Question Answers

**CSC461 | Eighth Semester**

---

## Section A (10 Marks Each)

### 1. Explain enhanced entity relationship model in detail. What is aggregation?

#### Enhanced Entity Relationship (EER) Model

EER extends the basic ER model with additional concepts for complex data modeling.

##### Key EER Concepts:

**1. Subclasses and Superclasses**

- **Superclass:** General entity type (e.g., EMPLOYEE)
- **Subclass:** Specialized entity type (e.g., MANAGER, ENGINEER)
- Subclass inherits all attributes of superclass

**2. Specialization**
Process of defining subclasses from a superclass based on distinguishing features.

- Top-down approach
- Example: EMPLOYEE → SALARIED_EMP, HOURLY_EMP

**3. Generalization**
Process of abstracting common features from multiple entity types into a superclass.

- Bottom-up approach
- Example: CAR, TRUCK → VEHICLE

**4. Constraints:**

| Constraint          | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Disjoint (d)**    | Entity can belong to only one subclass           |
| **Overlapping (o)** | Entity can belong to multiple subclasses         |
| **Total**           | Every superclass entity must be in some subclass |
| **Partial**         | Superclass entity may not belong to any subclass |

**5. Category (Union Type)**

- Subclass with multiple superclasses of different types
- Uses subset symbol (⊂)
- Example: OWNER = CAR_OWNER ∪ TRUCK_OWNER

#### Aggregation

**Definition:** Aggregation is an abstraction that treats a relationship as a higher-level entity.

**Purpose:** When we need to model a relationship between a relationship and an entity.

**Example:**

```
PROJECT ----works_on---- EMPLOYEE
              |
         (aggregation)
              |
          MONITORS
              |
          MANAGER
```

Here, MANAGER monitors the "works_on" relationship itself, not individual entities.

**Representation:** Draw a box around the relationship and its participating entities.

> 🖼️ **IMAGE NEEDED:** EER diagram showing specialization, generalization, and aggregation

---

### 2. What is distributed database? Explain data fragmentation techniques in detail with suitable example.

#### Distributed Database

**Definition:** A collection of logically interrelated databases distributed over a computer network, appearing as a single database to users.

**Characteristics:**

- Data physically distributed across sites
- Logically integrated
- Common DBMS manages all sites
- Transparent to users

**Advantages:**

- Improved reliability and availability
- Faster data access (local data)
- Incremental growth
- Reduced communication cost

#### Data Fragmentation Techniques

**1. Horizontal Fragmentation**

Divides a relation into subsets of tuples (rows) based on selection conditions.

**Example:** EMPLOYEE table with 1000 employees across 3 departments:

```sql
-- Original table
EMPLOYEE(emp_id, name, salary, dept_location)

-- Fragment 1: Kathmandu employees
EMP_KTM = σ dept_location='Kathmandu' (EMPLOYEE)
-- Contains 400 tuples

-- Fragment 2: Pokhara employees
EMP_PKR = σ dept_location='Pokhara' (EMPLOYEE)
-- Contains 350 tuples

-- Fragment 3: Biratnagar employees
EMP_BRT = σ dept_location='Biratnagar' (EMPLOYEE)
-- Contains 250 tuples
```

**Reconstruction:** EMPLOYEE = EMP_KTM ∪ EMP_PKR ∪ EMP_BRT

**2. Vertical Fragmentation**

Divides a relation into subsets of columns (attributes).

**Example:**

```sql
-- Original table
EMPLOYEE(emp_id, name, salary, address, skills, photo)

-- Fragment 1: Personal Info (HR site)
EMP_PERSONAL = π emp_id, name, address (EMPLOYEE)

-- Fragment 2: Professional Info (Admin site)
EMP_PROFESSIONAL = π emp_id, salary, skills (EMPLOYEE)

-- Fragment 3: Media (Storage site)
EMP_MEDIA = π emp_id, photo (EMPLOYEE)
```

**Note:** Primary key (emp_id) must be included in all fragments.

**Reconstruction:** EMPLOYEE = EMP_PERSONAL ⋈ EMP_PROFESSIONAL ⋈ EMP_MEDIA

**3. Mixed/Hybrid Fragmentation**

Combination of horizontal and vertical fragmentation.

**Example:** First horizontal, then vertical:

```sql
-- Step 1: Horizontal fragmentation by location
EMP_KTM = σ dept_location='Kathmandu' (EMPLOYEE)
EMP_PKR = σ dept_location='Pokhara' (EMPLOYEE)

-- Step 2: Vertical fragmentation of each
EMP_KTM_PERSONAL = π emp_id, name, address (EMP_KTM)
EMP_KTM_PROFESSIONAL = π emp_id, salary, skills (EMP_KTM)
```

#### Fragmentation Rules:

1. **Completeness:** All data must appear in at least one fragment
2. **Reconstruction:** Original relation must be recoverable
3. **Disjointness:** No overlapping data (except keys in vertical)

---

### 3. Why do we need query optimization in databases? Compare heuristic query optimization with cost-based query optimization.

#### Need for Query Optimization

**Performance:** A query can have multiple equivalent execution plans with vastly different costs.

**Example:** A simple query may have:

- Plan A: 0.1 seconds
- Plan B: 10 seconds
- Plan C: 100 seconds

**Reasons for optimization:**

1. Reduce disk I/O operations
2. Minimize CPU usage
3. Decrease memory requirements
4. Improve response time
5. Increase throughput

#### Heuristic vs Cost-Based Optimization

| Aspect           | Heuristic Optimization         | Cost-Based Optimization          |
| ---------------- | ------------------------------ | -------------------------------- |
| **Approach**     | Uses predefined rules          | Uses statistical cost estimation |
| **Basis**        | Algebraic transformation rules | Database statistics              |
| **Speed**        | Fast (no calculations)         | Slower (requires calculations)   |
| **Accuracy**     | May not produce optimal plan   | Usually produces optimal plan    |
| **Complexity**   | Simple implementation          | Complex implementation           |
| **Statistics**   | Not required                   | Requires catalog statistics      |
| **Adaptability** | Same rules always              | Adapts to data distribution      |

##### Heuristic Optimization

**Common Rules:**

1. Perform SELECT operations as early as possible
2. Perform PROJECT operations early
3. Convert Cartesian products to JOINs
4. Combine cascaded SELECT operations
5. Reorder operations to reduce intermediate results

**Example:**

```
Original: π name (σ salary>50000 (Employee ⋈ Department))
Optimized: π name (σ salary>50000 (Employee) ⋈ Department)
```

##### Cost-Based Optimization

**Cost Components:**

- Disk I/O (dominant factor)
- CPU processing time
- Memory usage
- Network transfer (distributed)

**Process:**

1. Generate candidate plans
2. Estimate cost of each plan using formulas:
   - Scan cost = Number of blocks
   - Index scan cost = Height + selectivity × blocks
3. Select minimum cost plan

**Statistics Used:**

- Table cardinality (n)
- Number of blocks (b)
- Attribute selectivity
- Index information

> 📌 **EXAM TIP:** Be prepared to draw query trees showing before/after heuristic optimization.

---

## Section B (5 Marks Each)

### 4. Explain specialization and generalization with example.

#### Specialization (Top-Down)

Process of defining subclasses from a superclass based on distinguishing characteristics.

**Example:**

```
         EMPLOYEE
        /    |    \
   MANAGER  ENGINEER  SECRETARY
```

EMPLOYEE (attributes: emp_id, name, salary)

- MANAGER (additional: bonus, car_allowance)
- ENGINEER (additional: specialization, certifications)
- SECRETARY (additional: typing_speed)

#### Generalization (Bottom-Up)

Process of abstracting common features into a superclass.

**Example:**

```
   CAR    TRUCK    BUS
     \      |      /
        VEHICLE
```

Common attributes (license_no, manufacturer, price) moved to VEHICLE.

---

### 5. What are the benefits of object-oriented database? What is object identity?

#### Benefits of OODB:

1. **Complex data support:** Handles multimedia, nested structures
2. **Code reusability:** Inheritance and polymorphism
3. **Natural modeling:** Objects match real-world entities
4. **No impedance mismatch:** Direct mapping to OOP languages
5. **Extensibility:** User-defined types

#### Object Identity (OID)

- Unique, system-generated identifier for each object
- Immutable (never changes)
- Independent of object's state/value
- Survives updates to object
- Example: OID = 1001 for Employee object

---

### 6. Explain Object Query Language (OQL) with suitable example.

**OQL** is a query language for object databases (ODMG standard).

**Syntax:** Similar to SQL but returns objects.

**Examples:**

```sql
-- Find all employees
SELECT e FROM Employee e

-- Find employees with salary > 50000
SELECT e.name FROM Employee e WHERE e.salary > 50000

-- Nested objects
SELECT e.name, e.department.dept_name
FROM Employee e WHERE e.department.location = 'Kathmandu'

-- Collection operations
SELECT e.name, COUNT(e.dependents)
FROM Employee e

-- Method call
SELECT e.name, e.calculateBonus() FROM Employee e
```

---

### 7. What is query tree? Why do we need this tree in query processing?

#### Query Tree

A tree data structure representing relational algebra expression.

- **Leaves:** Base relations
- **Internal nodes:** Operations (σ, π, ⋈)
- **Root:** Final result

#### Purpose:

1. **Query representation:** Standard internal format
2. **Optimization:** Apply transformation rules
3. **Execution plan generation:** Convert to execution steps
4. **Parallelization:** Identify parallel operations
5. **Cost estimation:** Estimate cost at each node

---

### 8. Explain different techniques for distributed database design.

**1. Fragmentation:**

- Horizontal: Divide rows
- Vertical: Divide columns
- Mixed: Combination

**2. Replication:**

- Full: All data at all sites
- Partial: Selected data replicated
- No replication: Single copy

**3. Allocation:**

- Choose fragment locations
- Based on access patterns
- Balance load across sites

**Design Goals:** Locality, reliability, performance, load balancing

---

### 9. Explain document-based NOSQL system with example.

**Document DB:** Stores JSON/BSON documents with flexible schema.

**Example (MongoDB):**

```json
{
  "_id": "1001",
  "name": "John",
  "address": { "city": "Kathmandu" },
  "skills": ["Java", "Python"]
}
```

**Operations:**

```javascript
db.users.find({ "address.city": "Kathmandu" });
db.users.insertOne({ name: "Ram" });
```

**Examples:** MongoDB, CouchDB, Firebase

---

### 10. Explain multimedia database in brief. What are the different applications?

**Multimedia DB:** Stores text, images, audio, video, graphics.

**Features:**

- Content-based retrieval
- Large data handling
- Temporal/spatial data support

**Applications:**

1. Digital libraries
2. Medical imaging (X-rays, MRI)
3. Entertainment (Netflix, Spotify)
4. GIS (satellite imagery)
5. E-commerce (product images)
6. Surveillance systems

---

### 11. Why do we need temporal database? Explain different time dimensions.

**Need:** Track data changes over time, audit trails, historical analysis.

**Time Dimensions:**

1. **Transaction Time:** When data stored in DB (system-managed)
2. **Valid Time:** When fact true in real world (user-defined)
3. **Bitemporal:** Both transaction and valid time

---

### 12. Write short notes on:

#### a) Indexing

Data structure for fast data access. Types: Primary, Secondary, Multilevel (B+ Tree). Benefits: Faster queries. Drawbacks: Storage overhead.

#### b) MapReduce

Parallel processing model:

1. Map: Transform input to key-value pairs
2. Shuffle/Sort: Group by key
3. Reduce: Aggregate to final output

Example: Word count in large documents.

---

## 📚 Resources

- Elmasri & Navathe textbook
- GeeksforGeeks, TutorialsPoint
- YouTube: Gate Smashers
