# Advanced Database 2081 - Answers

---

## Group A (10 Marks Each)

### 1. Object database concepts. Type constructors.

#### Object Database Concepts:

**1. Object Identity (OID)**

- Unique identifier for each object
- System-generated, immutable
- Different from primary key

**2. Complex Objects**

- Composed of simpler objects
- Nested structures
- Multi-valued attributes

**3. Type Hierarchy**

- Inheritance between types
- Single and multiple inheritance
- Specialization of types

**4. Encapsulation**

- Data + methods together
- Information hiding
- Interface vs implementation

**5. Relationships**

- References between objects
- Inverse relationships
- Collection relationships

**6. Persistence**

- Objects outlive program execution
- Transparent persistence

#### Type Constructors

**Definition:** Build complex types from basic types.

**Types:**

1. **Atom:** Basic types (integer, string, float)
2. **Tuple:** Structured type (record)
3. **Set:** Unordered collection, no duplicates
4. **Bag:** Unordered collection, allows duplicates
5. **List:** Ordered collection
6. **Array:** Fixed-size indexed collection

**Example:**

```
class Employee {
    attribute string name;                    // Atom
    attribute struct {                        // Tuple
        string street;
        string city;
    } address;
    attribute Set<string> skills;             // Set
    attribute List<Employment> history;       // List
}
```

---

### 2. Query optimization necessity. Heuristic query optimization.

#### Necessity for Query Optimization:

1. **Multiple Plans:** Same query, many execution strategies
2. **Cost Variation:** Plans can differ by 1000x in cost
3. **User Burden:** Users shouldn't choose execution strategy
4. **Automatic Selection:** DBMS should find best plan

#### Heuristic Query Optimization

**Approach:** Apply algebraic transformation rules that typically improve performance.

**Rules:**

**1. Cascade of Selections:**

```
σ c1 AND c2 (R) → σ c1 (σ c2 (R))
```

**2. Commutativity of Selection:**

```
σ c1 (σ c2 (R)) → σ c2 (σ c1 (R))
```

**3. Cascade of Projections:**

```
π a1 (π a1,a2 (R)) → π a1 (R)
```

**4. Selection Before Join:**

```
σ c (R ⋈ S) → σ c (R) ⋈ S  (if c involves only R)
```

**5. Projection Before Join:**

```
π a (R ⋈ S) → π a (π a,join_attrs (R) ⋈ π a,join_attrs (S))
```

**Example:**

```
Original:
π name (σ salary>50000 (EMPLOYEE ⋈ DEPARTMENT))

Optimized:
π name (σ salary>50000 (EMPLOYEE) ⋈ DEPARTMENT)
```

Selection pushed before join reduces intermediate result size.

---

### 3. Distributed database architectures. Data fragmentation.

#### Distributed Database Architectures:

**1. Client-Server Architecture**

- Clients request services
- Servers provide data/processing
- Two-tier or three-tier

**2. Collaborative Server Architecture**

- Servers communicate peer-to-peer
- Each server handles part of query
- Results combined

**3. Middleware Architecture**

- Middle layer between clients and servers
- Provides transparency
- Handles distribution details

**4. Federated/Multi-database Architecture**

- Autonomous databases
- Limited integration
- Schema integration challenges

#### Data Fragmentation

**Definition:** Dividing relations into smaller parts for distribution.

**Types:**

**Horizontal:** Divide by rows

```
EMP_KTM = σ location='Kathmandu' (EMPLOYEE)
```

**Vertical:** Divide by columns (keep keys)

```
EMP_PERSONAL = π emp_id, name, address (EMPLOYEE)
EMP_WORK = π emp_id, salary, dept (EMPLOYEE)
```

**Mixed:** Combination of both

---

## Group B (5 Marks Each)

### 4. Specialization and generalization constraints

**Disjoint (d):** Entity belongs to at most one subclass
**Overlapping (o):** Entity can belong to multiple subclasses
**Total:** Every superclass entity must be in some subclass
**Partial:** Superclass entity may not be in any subclass

**Notations:** Circle with 'd' or 'o', single/double line for partial/total

---

### 5. Hashing and database efficiency

**Hashing:** Using hash function to compute storage location.

**Efficiency:**

- O(1) average access time
- Direct record location
- No sequential search needed
- Best for equality queries

**Hash function:** h(key) → bucket address

---

### 6. ODMG Object Model

**Components:**

1. **Object Model:** Object structure, identity, hierarchy
2. **ODL:** Schema definition language
3. **OQL:** Query language
4. **Language Bindings:** C++, Java, Smalltalk

**Key Concepts:**

- Object identity
- Types and classes
- Relationships with inverses
- Operations and exceptions

---

### 7. Query trees in query processing

**Query Tree:** Tree representation of relational algebra.

**Uses:**

1. **Visualization:** Understand query structure
2. **Optimization:** Apply transformation rules
3. **Execution Planning:** Generate execution sequence
4. **Cost Estimation:** Calculate cost at each node

**Nodes:** Operations (σ, π, ⋈)
**Leaves:** Base relations
**Root:** Final result

---

### 8. CAP Theorem

**CAP:** Consistency, Availability, Partition Tolerance

**Theorem:** Distributed system can guarantee only 2 of 3.

**Trade-offs:**

- **CA:** Traditional RDBMS (single node)
- **CP:** Sacrifice availability during partitions
- **AP:** Eventually consistent, always available

**Example:** NoSQL systems often choose AP (availability + partition tolerance)

---

### 9. Big Data and 3 V's

**Big Data:** Extremely large datasets requiring special processing.

**3 V's:**

1. **Volume:** Petabytes to exabytes of data
2. **Velocity:** Real-time data generation and processing
3. **Variety:** Structured, semi-structured, unstructured

**Additional V's:** Veracity (quality), Value (usefulness)

---

### 10. Triggers and their uses

**Triggers:** Automatic procedures executed on events.

**Uses:**

1. **Enforcing integrity:** Complex constraints
2. **Auditing:** Track changes
3. **Cascade operations:** Automatic updates
4. **Derived data:** Maintain computed columns
5. **Replication:** Sync changes

---

### 11. Spatial databases and analysis

**Spatial Database:** Stores and queries geographic data.

**Need:**

- Location-based services
- GIS applications
- Urban planning

**Analysis Types:**

1. **Proximity:** Find nearby features
2. **Overlay:** Combine layers
3. **Buffering:** Areas within distance
4. **Network:** Shortest path

---

### 12. Short notes

**a) MapReduce:**

- Parallel processing model
- Map: Transform to key-value
- Reduce: Aggregate by key
- Hadoop implementation

**b) Multimedia Database:**

- Stores text, images, audio, video
- Content-based retrieval
- Applications: Netflix, medical imaging

---

## 📚 Resources

- Elmasri & Navathe
- GeeksforGeeks
- Gate Smashers YouTube
