# Advanced Database 2080 - Answers

---

## Section A (10 Marks Each)

### 1. EER features. Specialization vs Generalization.

#### EER Model Features:

**1. Subclasses and Superclasses**

- Superclass: General entity (EMPLOYEE)
- Subclass: Specialized entity (MANAGER)
- IS-A relationship

**2. Specialization**

- Top-down approach
- Define subclasses from superclass
- Add distinguishing attributes

**3. Generalization**

- Bottom-up approach
- Abstract common features
- Create superclass from subclasses

**4. Constraints**

- Disjoint (d): Entity in only one subclass
- Overlapping (o): Entity in multiple subclasses
- Total: Must be in some subclass
- Partial: May not be in any subclass

**5. Category (Union Type)**

- Subclass of multiple superclasses
- Different entity types combined

**6. Aggregation**

- Relationship as entity
- Model relationship participation

#### Specialization vs Generalization

| Aspect         | Specialization          | Generalization          |
| -------------- | ----------------------- | ----------------------- |
| Direction      | Top-down                | Bottom-up               |
| Process        | Divide into subclasses  | Combine into superclass |
| Starting Point | Superclass exists       | Subclasses exist        |
| Design Phase   | Often during refinement | Often initial design    |
| Example        | EMPLOYEE → MANAGER      | CAR, TRUCK → VEHICLE    |

---

### 2. OODB vs ORDB. Object features in SQL.

#### OODB vs ORDB

| Aspect         | Object-Oriented DB     | Object-Relational DB |
| -------------- | ---------------------- | -------------------- |
| Foundation     | Pure object model      | Extended relational  |
| Query Language | OQL                    | Extended SQL         |
| Compatibility  | Breaks from relational | SQL compatible       |
| Standards      | ODMG                   | SQL:1999, SQL:2003   |
| Examples       | ObjectDB, db4o         | PostgreSQL, Oracle   |

#### Object Features in SQL

**1. User-Defined Types (UDT)**

```sql
CREATE TYPE address_type AS (
    street VARCHAR(100),
    city VARCHAR(50)
);
```

**2. Type Inheritance**

```sql
CREATE TYPE employee_type UNDER person_type AS (
    salary DECIMAL
);
```

**3. Reference Types**

```sql
CREATE TYPE dept_type AS (
    name VARCHAR(50),
    manager REF(employee_type)
);
```

**4. Collection Types**

```sql
CREATE TYPE phones AS VARCHAR(15) ARRAY[5];
```

**5. Object Tables**

```sql
CREATE TABLE employees OF employee_type;
```

---

### 3. Distributed database importance. Transparency types.

#### Importance of Distributed DB:

1. **Local Autonomy:** Each site manages local data
2. **Improved Performance:** Data near users
3. **Reliability:** No single point of failure
4. **Scalability:** Add sites as needed
5. **Cost Effectiveness:** Commodity hardware

#### Types of Transparency

**1. Location Transparency**

- Users don't need to know data location
- Query same whether data local or remote

**2. Fragmentation Transparency**

- Users unaware of data fragmentation
- Query sees complete relation

**3. Replication Transparency**

- Users unaware of data copies
- System handles consistency

**4. Transaction Transparency**

- Transactions work across sites
- ACID properties maintained

**5. Performance Transparency**

- Query optimization distributed
- Performance maintained regardless of location

---

## Section B (5 Marks Each)

### 4. Hashing importance. Primary file organization.

**Hashing Importance:**

- O(1) average access time
- Direct record access
- Efficient for equality searches

**Primary File Organization:**

- **Heap/Unordered:** Records inserted anywhere
- **Sequential/Ordered:** Records sorted by key
- **Hashed:** Records placed by hash function

---

### 5. Aggregation with example

**Aggregation:** Models relationship between relationship and entity.

**Example:**

```
PROJECT ----works_on---- EMPLOYEE
         (aggregated)
              |
          sponsors
              |
          COMPANY
```

COMPANY sponsors the "works_on" relationship, not just PROJECT or EMPLOYEE.

---

### 6. ODMG Object Model. ODL.

**ODMG Object Model:**

- Object identity
- Object structure (attributes, relationships)
- Object behavior (methods)
- Type hierarchy

**ODL (Object Definition Language):**

```
class Employee {
    attribute string name;
    attribute float salary;
    relationship Department works_for;
};
```

---

### 7. Steps in query processing

1. **Parsing:** Check syntax, convert to internal form
2. **Validation:** Check semantics, table/column existence
3. **Query Tree Generation:** Create relational algebra tree
4. **Optimization:** Transform to efficient execution plan
5. **Code Generation:** Generate executable code
6. **Execution:** Run query, return results

---

### 8. Query optimization necessity. Heuristic optimization.

**Necessity:**

- Multiple execution plans exist
- Cost differences can be orders of magnitude
- Automatic selection needed

**Heuristic Optimization:**

- Uses algebraic transformation rules
- Perform SELECT early (reduce tuples)
- Perform PROJECT early (reduce columns)
- Convert Cartesian products to JOINs

---

### 9. Fragmentation. Horizontal fragmentation.

**Fragmentation:** Dividing relation for distribution.

**Horizontal Fragmentation:**

- Divide by rows
- Based on selection condition
- Each fragment stored at different site

**Example:**

```sql
-- Fragment by region
EMP_NORTH = σ region='North' (EMPLOYEE)
EMP_SOUTH = σ region='South' (EMPLOYEE)
```

---

### 10. NoSQL characteristics

1. **Schema-less:** Flexible data structure
2. **Horizontally Scalable:** Add nodes easily
3. **Eventually Consistent:** Sacrifice strict consistency
4. **High Availability:** Always accessible
5. **Distributed:** Data across multiple nodes
6. **Various Models:** Document, key-value, graph, column

---

### 11. Active database concept. Triggers.

**Active Database:**

- Monitors events
- Evaluates conditions
- Executes actions automatically
- ECA (Event-Condition-Action) rules

**Triggers:**

- Database objects
- Fire on INSERT/UPDATE/DELETE
- Implement business rules
- Maintain audit trails

```sql
CREATE TRIGGER salary_check
BEFORE UPDATE ON employee
FOR EACH ROW
WHEN (NEW.salary < OLD.salary)
BEGIN
    RAISE ERROR 'Cannot reduce salary';
END;
```

---

### 12. Short notes

**a) Big Data:**

- Volume: Large amounts (PB, EB)
- Velocity: Fast generation/processing
- Variety: Structured, semi, unstructured
- Technologies: Hadoop, Spark

**b) Information Retrieval:**

- Finding relevant documents
- Unstructured text search
- Ranking algorithms
- Web search engines

---

## 📚 Resources

- Elmasri & Navathe textbook
- GeeksforGeeks
- TutorialsPoint
