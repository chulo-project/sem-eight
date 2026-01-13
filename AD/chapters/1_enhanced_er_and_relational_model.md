# Chapter 1: Enhanced Entity Relationship Model and Relational Model

**⏰ Teaching Hours: 8 | 📌 Frequently Asked in Exams**

---

## 🎯 Learning Objectives

- Understand EER model concepts and extensions
- Master specialization and generalization
- Learn EER to Relational mapping
- Understand file structures and indexing

---

## 1.1 Entity Relationship Model Revised

### ER Model Basics Recap

**Entity:** Real-world object with independent existence
**Attribute:** Property of an entity
**Relationship:** Association between entities

### Attribute Types:

| Type         | Description         | Example                    |
| ------------ | ------------------- | -------------------------- |
| Simple       | Atomic, indivisible | Age, Salary                |
| Composite    | Can be divided      | Name (First, Middle, Last) |
| Derived      | Computed from other | Age (from DOB)             |
| Multi-valued | Multiple values     | Phone numbers              |
| Key          | Uniquely identifies | Employee_ID                |

### Relationship Cardinalities:

- **1:1** - One to One (Manager manages one Department)
- **1:N** - One to Many (Department has many Employees)
- **M:N** - Many to Many (Employee works on many Projects)

> 📌 **EXAM TIP:** Cardinality and participation constraints are frequently asked!

---

## 1.2 Subclasses, Superclasses and Inheritance

### Superclass

A general entity type that has subclasses defined from it.

**Example:** EMPLOYEE is a superclass

### Subclass

A specialized entity type that inherits from superclass.

**Example:** MANAGER, ENGINEER, SECRETARY are subclasses of EMPLOYEE

### Inheritance

Subclass inherits all attributes and relationships of superclass.

```
EMPLOYEE (superclass)
├── emp_id (PK)
├── name
├── salary
│
├── MANAGER (subclass)
│   └── bonus
│
├── ENGINEER (subclass)
│   └── specialization
│
└── SECRETARY (subclass)
    └── typing_speed
```

**IS-A Relationship:** MANAGER IS-A EMPLOYEE

> 🖼️ **IMAGE SUGGESTION:** EER diagram showing inheritance hierarchy with notation

---

## 1.3 Specialization and Generalization

### Specialization (Top-Down Approach) ⭐⭐⭐

**Definition:** Process of defining subclasses from a superclass based on distinguishing characteristics.

**Process:**

1. Start with general entity (superclass)
2. Identify distinguishing features
3. Create specialized subclasses
4. Add specific attributes to subclasses

**Example:**

```
Step 1: EMPLOYEE exists
Step 2: Identify payment methods differ
Step 3: Create SALARIED_EMPLOYEE, HOURLY_EMPLOYEE
Step 4: Add monthly_salary to salaried, hourly_rate to hourly
```

### Generalization (Bottom-Up Approach) ⭐⭐⭐

**Definition:** Process of abstracting common features from entity types into a superclass.

**Process:**

1. Identify similar entity types
2. Find common attributes
3. Create superclass with common attributes
4. Establish inheritance

**Example:**

```
Step 1: CAR, TRUCK, MOTORCYCLE exist
Step 2: Common: license_no, manufacturer, price
Step 3: Create VEHICLE superclass
Step 4: Move common attributes to VEHICLE
```

### Comparison Table

| Aspect         | Specialization         | Generalization          |
| -------------- | ---------------------- | ----------------------- |
| Direction      | Top-down               | Bottom-up               |
| Starting Point | Superclass exists      | Entities exist          |
| Process        | Divide into subclasses | Combine into superclass |
| Design Phase   | During refinement      | During initial design   |
| Attributes     | Add to subclasses      | Move to superclass      |

> 📌 **FREQUENTLY ASKED:** "Compare specialization with generalization with example" - appears in 2079, 2080, 2081 papers!

---

## 1.4 Constraints of Specialization and Generalization

### Disjointness Constraint

#### Disjoint (d)

- Entity can belong to **at most one** subclass
- Subclasses are mutually exclusive
- Notation: Circle with 'd'

**Example:** A vehicle cannot be both a CAR and a TRUCK

#### Overlapping (o)

- Entity can belong to **multiple** subclasses
- Subclasses can share members
- Notation: Circle with 'o'

**Example:** An employee can be both a MANAGER and an ENGINEER

### Completeness Constraint

#### Total Specialization (Double Line)

- Every superclass entity **must** belong to some subclass
- No superclass-only entities

#### Partial Specialization (Single Line)

- Superclass entity **may not** belong to any subclass
- Some entities exist only in superclass

### Constraint Combinations

| Combination          | Meaning                           | Example        |
| -------------------- | --------------------------------- | -------------- |
| Total, Disjoint      | Must be in exactly one subclass   | Car types      |
| Total, Overlapping   | Must be in at least one subclass  | Job roles      |
| Partial, Disjoint    | May be in at most one subclass    | Employee types |
| Partial, Overlapping | May be in zero or more subclasses | Memberships    |

> 🖼️ **IMAGE SUGGESTION:** EER notation showing d/o circles and single/double lines

---

## 1.5 Union Types (Category)

### Definition

A subclass that is a union of **different** entity types (unlike specialization where all subclasses come from same superclass).

### Notation

- Uses subset symbol (⊂)
- Multiple superclasses of different types

### Example: OWNER Category

```
        PERSON          BANK          COMPANY
           \             |              /
            \            |             /
             \           |            /
              ------> OWNER <-------
                         |
                      (owns)
                         |
                      VEHICLE
```

A vehicle owner can be a PERSON, BANK, or COMPANY - these are different entity types.

### Use Cases:

- When relationship needs to connect to entities of different types
- Modeling "or" relationships

---

## 1.6 Aggregation

### Definition

Aggregation allows a relationship to be treated as a higher-level entity.

### When Needed

When a relationship itself needs to participate in another relationship.

### Example: Project Monitoring

```
Without Aggregation (WRONG):
- MANAGER monitors PROJECT? No, monitors work assignment
- MANAGER monitors EMPLOYEE? No, monitors their work on projects

With Aggregation (CORRECT):
PROJECT ----works_on---- EMPLOYEE
         (aggregated)
              |
          monitors
              |
          MANAGER
```

The MANAGER monitors the "works_on" relationship itself.

### Notation

- Draw a box around the relationship and its participating entities
- This aggregated unit can then participate in other relationships

> 🖼️ **IMAGE SUGGESTION:** Aggregation diagram with the works_on relationship boxed

---

## 1.7 Relational Model Revised

### Relation (Table)

- Set of tuples (rows)
- Schema defines structure
- Degree: number of attributes
- Cardinality: number of tuples

### Keys

| Key Type          | Description                                    |
| ----------------- | ---------------------------------------------- |
| **Super Key**     | Any set of attributes that uniquely identifies |
| **Candidate Key** | Minimal super key                              |
| **Primary Key**   | Chosen candidate key                           |
| **Foreign Key**   | References another table's primary key         |
| **Composite Key** | Key with multiple attributes                   |

### Integrity Constraints

**1. Entity Integrity:** Primary key cannot be NULL

**2. Referential Integrity:** Foreign key must reference existing primary key or be NULL

**3. Domain Constraint:** Values must be from defined domain

---

## 1.8 Converting EER to Relational Model ⭐⭐⭐

### Step 1: Regular Entity Types

- Create table for each entity
- Attributes become columns
- Primary key identified

```sql
EMPLOYEE(emp_id, name, salary, dob)
```

### Step 2: Weak Entity Types

- Create table including owner's primary key
- Primary key = owner key + partial key

```sql
DEPENDENT(emp_id, dependent_name, relationship)
-- emp_id is FK to EMPLOYEE
-- PK is (emp_id, dependent_name)
```

### Step 3: 1:1 Relationships

- Add FK to entity with total participation, OR
- Create separate relationship table

### Step 4: 1:N Relationships

- Add FK to "many" side entity

```sql
EMPLOYEE(emp_id, name, dept_id)
-- dept_id is FK to DEPARTMENT
```

### Step 5: M:N Relationships

- Create new relationship table
- Include PKs from both entities as composite key

```sql
WORKS_ON(emp_id, project_id, hours)
-- PK is (emp_id, project_id)
```

### Step 6: Multi-valued Attributes

- Create separate table

```sql
EMP_PHONES(emp_id, phone_number)
```

### Step 7: Specialization/Generalization

**Option A: Single Table with Discriminator**

```sql
EMPLOYEE(emp_id, name, type, monthly_salary, hourly_rate)
-- type = 'S' for salaried, 'H' for hourly
-- NULL values for non-applicable attributes
```

**Option B: Multiple Tables**

```sql
EMPLOYEE(emp_id, name)
SALARIED_EMP(emp_id, monthly_salary)
HOURLY_EMP(emp_id, hourly_rate)
```

**Option C: Subclass Tables Only (for Total Specialization)**

```sql
SALARIED_EMP(emp_id, name, monthly_salary)
HOURLY_EMP(emp_id, name, hourly_rate)
```

> 📌 **FREQUENTLY ASKED:** EER to relational mapping with specialization handling!

---

## 1.9 SQL and Advanced Features

### SQL Review

```sql
-- Create table
CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);

-- Insert
INSERT INTO Employee VALUES (1, 'John', 50000);

-- Update
UPDATE Employee SET salary = 55000 WHERE emp_id = 1;

-- Delete
DELETE FROM Employee WHERE emp_id = 1;

-- Select
SELECT * FROM Employee WHERE salary > 40000;
```

### Advanced SQL Features

**1. Nested Queries**

```sql
SELECT name FROM Employee
WHERE dept_id IN (SELECT dept_id FROM Department WHERE location = 'NYC');
```

**2. Aggregate Functions**

```sql
SELECT dept_id, AVG(salary), COUNT(*)
FROM Employee
GROUP BY dept_id;
```

**3. Joins**

```sql
SELECT e.name, d.dept_name
FROM Employee e
INNER JOIN Department d ON e.dept_id = d.dept_id;
```

---

## 1.10 File Structures, Hashing, and Indexing

### Primary File Organizations

| Type                   | Description                       | Access       |
| ---------------------- | --------------------------------- | ------------ |
| **Heap/Unordered**     | Records placed anywhere           | O(n)         |
| **Sequential/Ordered** | Records sorted by key             | O(log n)     |
| **Hashed**             | Hash function determines location | O(1) average |

### Hashing ⭐⭐

**Static Hashing:**

- Fixed number of buckets
- h(K) = K mod M
- Overflow chains for collisions

**Dynamic Hashing:**

- Buckets can grow/shrink
- Types: Extendible hashing, Linear hashing

### Indexing ⭐⭐⭐

**Primary Index:**

- On ordering key field
- One entry per block
- Sparse index

**Secondary Index:**

- On non-ordering field
- Dense index (entry per record)

**Multilevel Index:**

- Index on index
- B+ Tree structure
- Reduces search to O(log n)

### B+ Tree Index

**Properties:**

- Balanced tree
- All data in leaves
- Internal nodes for navigation
- Linked leaves for range queries

```
            [50]
           /    \
      [25,40]   [60,75]
       / | \     / | \
     [10,20] [30,40] [50,55] [60,70] [80,90]
```

> 📌 **EXAM TIP:** B+ Tree structure and multilevel indexing are common topics. Know how to search and insert.

---

## 📚 Important Questions from Past Papers

1. "Design EER for library system with specialization/generalization" (2079)
2. "Explain specialization vs generalization" (2080, 2081)
3. "What is aggregation?" (Model, 2079)
4. "Why is indexing important? What is multilevel index?" (2079)
5. "Explain constraints of specialization and generalization" (2081)

---

## 🔗 Additional Resources

**Textbooks:**

- Elmasri & Navathe, Chapter 4 (EER), Chapter 6-7 (Relational), Chapter 14-15 (Indexing)

**Online:**

- GeeksforGeeks: EER Model, Indexing
- TutorialsPoint: Database tutorials

**YouTube:**

- Gate Smashers: ER/EER series
- Knowledge Gate: Database normalization

> 🖼️ **NOTE:** Drawing EER diagrams is essential. Practice with different scenarios like Library, Hospital, University, Banking systems.
