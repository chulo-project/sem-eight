# Advanced Database - Extra Questions Answers

---

## 1. List any two OLAP operations with example. How do you compute rule coverage and rule accuracy?

### OLAP Operations

**OLAP (Online Analytical Processing)** operations allow users to analyze multidimensional data interactively.

#### 1. Roll-Up (Drill-Up)

Aggregates data by climbing up a concept hierarchy.

**Example:** Sales data rolled up from City → State:
| City | Sales | → | State | Sales |
|------|-------|---|-------|-------|
| Kathmandu | 50,000 | | Bagmati | 80,000 |
| Lalitpur | 30,000 | | Gandaki | 40,000 |
| Pokhara | 40,000 | | | |

#### 2. Drill-Down

Navigates from less detailed to more detailed data.

**Example:** Yearly → Quarterly sales breakdown.

### Rule Coverage and Accuracy

**Coverage (Support):**  
`Coverage = Transactions containing X / Total transactions`

**Accuracy (Confidence):**  
`Accuracy = Transactions with X and Y / Transactions with X`

> 📌 **EXAM TIP:** Both formulas are frequently asked!

---

## 2. Difference between RDBMS and NoSQL

| Aspect             | RDBMS                         | NoSQL                       |
| ------------------ | ----------------------------- | --------------------------- |
| **Data Model**     | Tables with rows/columns      | Document, Key-Value, Graph  |
| **Schema**         | Fixed, rigid                  | Flexible, dynamic           |
| **Scalability**    | Vertical                      | Horizontal                  |
| **ACID**           | Strictly compliant            | Often BASE                  |
| **Query Language** | SQL                           | Varies (JSON queries)       |
| **JOINs**          | Strong support                | Limited/none                |
| **Best For**       | Complex queries, transactions | Big data, unstructured data |
| **Examples**       | MySQL, PostgreSQL             | MongoDB, Redis              |

> 🖼️ **IMAGE SUGGESTION:** Comparison diagram of table vs document structure

---

## 3. Difference between Heuristic, Semantic and Cost-Based Optimization

| Aspect       | Heuristic              | Semantic                    | Cost-Based                     |
| ------------ | ---------------------- | --------------------------- | ------------------------------ |
| **Approach** | Predefined rules       | Domain knowledge            | Statistical estimation         |
| **Speed**    | Fast                   | Medium                      | Slower                         |
| **Accuracy** | May not be optimal     | Eliminates redundancy       | Usually optimal                |
| **Example**  | "Perform SELECT early" | Skip if constraint violated | Use index if selectivity < 10% |

**Heuristic:** Uses algebraic transformation rules (e.g., push selections down)

**Semantic:** Uses integrity constraints to optimize (e.g., if salary > 0 is always true, skip it)

**Cost-Based:** Evaluates multiple plans using statistics (disk I/O, CPU, etc.)

---

## 4. EER to ODL Schema Mapping

### Steps:

**1. Map Entities to Classes:**

```
class Employee {
    attribute int emp_id;
    attribute string name;
};
```

**2. Map Weak Entities:** Include relationship to owner

**3. Map Specialization/Generalization:** Use inheritance

```
class SalariedEmployee extends Employee {
    attribute float monthly_salary;
};
```

**4. Map Relationships:**

- 1:N → Set in "one" side, reference in "many" side
- M:N → Sets on both sides

```
class Department {
    relationship Set<Employee> employees inverse Employee::works_in;
};
```

---

## 5. Short Notes

### a) Indexing

Technique to quickly locate data without scanning every row.

**Types:**

- **Primary Index:** On primary key, ordered
- **Secondary Index:** On non-key fields
- **Multilevel Index:** Index of indexes (B+ Tree)

**Benefits:** Faster retrieval, reduced I/O
**Drawbacks:** Extra storage, maintenance overhead

### b) MapReduce

Programming model for processing large datasets in parallel.

**Phases:**

1. **Map:** Process input → intermediate key-value pairs
2. **Shuffle/Sort:** Group by key
3. **Reduce:** Aggregate values → final output

**Example (Word Count):**
Input: "hello world hello" → Output: (hello, 2), (world, 1)

---

## 6. Temporal Database

### Need:

- Historical tracking
- Audit compliance
- Trend analysis
- Error recovery

### Time Dimensions:

**1. Transaction Time:** When data was stored in DB (system-managed)

**2. Valid Time:** When fact is true in real world (user-defined)

**3. Bitemporal:** Combination of both

| Emp_ID | Salary | Valid_Start | Trans_Start |
| ------ | ------ | ----------- | ----------- |
| 101    | 50000  | 2024-01-01  | 2024-01-01  |

---

## 7. Multimedia Database

Database storing text, images, audio, video, graphics.

### Characteristics:

- Large data size
- Content-based retrieval
- Complex storage structures

### Applications:

1. Digital Libraries
2. Medical Imaging (X-rays, MRI)
3. GIS (satellite imagery)
4. Entertainment (Netflix, Spotify)
5. E-Commerce (visual search)
6. Surveillance (CCTV, face recognition)
7. Social Media

---

## 8. Document-Based NoSQL

Stores data as JSON/BSON documents.

### Example (MongoDB):

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "address": { "city": "Kathmandu" },
  "hobbies": ["reading", "coding"]
}
```

### CRUD Operations:

```javascript
db.customers.insertOne({ name: "Ram" });
db.customers.find({ age: { $gt: 20 } });
db.customers.updateOne({ name: "Ram" }, { $set: { age: 26 } });
```

### Advantages:

- Flexible schema
- Natural object mapping
- High performance

---

## 9. Distributed Database Design Techniques

### 1. Data Fragmentation

**Horizontal:** Partition by rows (e.g., by location)
**Vertical:** Partition by columns (keep key in all fragments)
**Mixed:** Combination of both

### 2. Data Replication

- **Full:** Copy at all sites
- **No Replication:** Single copy
- **Partial:** Selected fragments replicated

### 3. Data Allocation

Factors: Query patterns, update frequency, storage capacity

### Correctness Rules:

- Completeness, Reconstruction, Disjointness

---

## 10. Query Tree

Tree structure representing relational algebra expression.

- **Leaf nodes:** Base tables
- **Internal nodes:** Operations (σ, π, ⋈)
- **Root:** Final result

### Why Needed:

1. Query parsing/validation
2. Optimization (transform tree)
3. Execution plan generation
4. Parallelization

**Example:** Push selections down the tree for efficiency.

---

## 📚 Resources

- **Textbooks:** Elmasri & Navathe, Korth & Silberschatz
- **YouTube:** Gate Smashers, Knowledge Gate
- **Online:** GeeksforGeeks, TutorialsPoint
