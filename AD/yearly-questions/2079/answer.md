# Advanced Database 2079 - Answers

---

## Section A (10 Marks Each)

### 1. Design an EER model for library management system...

#### EER Diagram Design

**Entities:**

**PERSON (Superclass)**

- person_id (PK), name, address, phone, email

**Specialization (Disjoint, Total):**

- **MEMBER:** membership_id, join_date, membership_type
- **STAFF:** staff_id, position, salary, hire_date

**MEMBER further specializes (Overlapping, Partial):**

- **STUDENT:** student_id, course, year
- **FACULTY:** faculty_id, department, designation

**Other Entities:**

- **BOOK:** book_id, title, author, ISBN, publisher, year
- **COPY:** copy_id, book_id (FK), status, location
- **LOAN:** loan_id, copy_id, member_id, borrow_date, due_date, return_date

**Relationships:**

- MEMBER borrows COPY (M:N through LOAN)
- BOOK has COPY (1:N) - Total participation of COPY
- STAFF manages LOAN (1:N)

**Conversion to Relational Model:**

```sql
PERSON(person_id, name, address, phone, email)

MEMBER(person_id, membership_id, join_date, membership_type)
  FK: person_id REFERENCES PERSON

STAFF(person_id, staff_id, position, salary, hire_date)
  FK: person_id REFERENCES PERSON

STUDENT(person_id, student_id, course, year)
  FK: person_id REFERENCES MEMBER

FACULTY(person_id, faculty_id, department, designation)
  FK: person_id REFERENCES MEMBER

BOOK(book_id, title, author, ISBN, publisher, year)

COPY(copy_id, book_id, status, location)
  FK: book_id REFERENCES BOOK

LOAN(loan_id, copy_id, member_id, staff_id, borrow_date, due_date, return_date)
  FK: copy_id REFERENCES COPY
  FK: member_id REFERENCES MEMBER
  FK: staff_id REFERENCES STAFF
```

---

### 2. Object oriented database concepts and features. Object relational model.

#### OODB Concepts and Features:

**1. Object Identity (OID)**

- Unique, immutable identifier for each object
- Independent of object's value

**2. Complex Objects**

- Objects composed of other objects
- Nested structures supported

**3. Encapsulation**

- Data and methods bundled together
- Information hiding

**4. Inheritance**

- Single and multiple inheritance
- Code reuse through class hierarchies

**5. Polymorphism**

- Same method, different behaviors
- Operator overloading

**6. Persistence**

- Objects survive program execution
- Transparent persistence

**7. Extensibility**

- User-defined types
- Type constructors (set, list, bag)

#### Object-Relational Model

**Definition:** Extends relational model with object-oriented features.

**Features:**

1. **User-defined types (UDT):** CREATE TYPE
2. **Type inheritance:** UNDER keyword
3. **Reference types:** REF type
4. **Collection types:** ARRAY, MULTISET
5. **Object tables:** Table of objects

**Example:**

```sql
CREATE TYPE address_type AS (
    street VARCHAR(100),
    city VARCHAR(50),
    zip VARCHAR(10)
);

CREATE TYPE person_type AS (
    name VARCHAR(100),
    addr address_type
);

CREATE TABLE persons OF person_type;
```

---

### 3. Distributed database definition, benefits, and features.

#### Definition

A collection of logically interrelated databases distributed over a computer network.

#### Benefits over Centralized:

1. **Improved Reliability:** No single point of failure
2. **Better Availability:** Local access even if other sites fail
3. **Faster Access:** Data stored near users
4. **Scalability:** Add new sites incrementally
5. **Autonomy:** Local control of data

#### Availability

- System accessible despite partial failures
- Replicated data ensures access
- Measured as uptime percentage

#### Reliability

- System functions correctly
- Data consistency maintained
- Reduced impact of component failure

#### Scalability

- Handle increased load by adding nodes
- Horizontal scaling capability
- Performance maintained as system grows

---

## Section B (5 Marks Each)

### 4. Multilevel index importance

**Indexing:** Speeds up data retrieval by maintaining ordered pointers to data.

**Multilevel Index:**

- First-level index on data file
- Second-level index on first-level index
- Reduces search from O(n) to O(log n)
- B+ Tree is common implementation

---

### 5. Aggregation

**Definition:** Abstraction that treats a relationship as a higher-level entity.

**Example:** MANAGER monitors the "works_on" relationship between EMPLOYEE and PROJECT.

Used when a relationship participates in another relationship.

---

### 6. ODMG Object Model and OQL

**ODMG Object Model:**

- Standard for object databases
- Defines object types, relationships, operations
- Includes ODL (Object Definition Language)

**OQL:**

- Query language for ODMG
- Similar to SQL but returns objects
- Example: `SELECT e.name FROM Employee e WHERE e.salary > 50000`

---

### 7. Query Processing vs Query Optimization

**Query Processing:**

- Steps to execute a query
- Parsing → Optimization → Execution

**Query Optimization:**

- Selecting most efficient execution plan
- Part of query processing
- Uses heuristics or cost estimation

---

### 8. Query Optimization necessity and execution plans

**Necessity:**

- Same query can have many execution plans
- Costs vary dramatically
- Wrong plan = poor performance

**Execution Plans:**

- Different join orders
- Different access methods (scan vs index)
- Different join algorithms

---

### 9. Fragmentation purpose and types

**Purpose:**

- Store data near users
- Improve performance
- Enable parallel processing

**Horizontal:** Divide by rows (e.g., by location)
**Vertical:** Divide by columns (include key in all)

---

### 10. NoSQL essentials and characteristics

**Why NoSQL:**

- Handle big data
- Flexible schema
- Horizontal scalability

**Characteristics:**

- Schema-less
- Distributed
- Eventually consistent
- High availability

---

### 11. Spatial database and triggers

**Spatial Database:**

- Stores geographic/geometric data
- Supports spatial queries
- Examples: PostGIS, Oracle Spatial

**Triggers:**

- Automatic actions on events
- `CREATE TRIGGER ... AFTER INSERT ON ...`
- Used for auditing, validation

---

### 12. Short notes

**a) CAP Theorem:**

- Consistency, Availability, Partition tolerance
- Can only guarantee 2 of 3
- Distributed systems trade-off

**b) Deductive Database:**

- Combines database with logic programming
- Uses inference rules
- Datalog language

---

## 📚 Resources

- Elmasri & Navathe textbook
- GeeksforGeeks
- Gate Smashers YouTube
