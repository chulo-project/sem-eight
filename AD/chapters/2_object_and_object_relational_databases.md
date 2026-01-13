# Chapter 2: Object and Object Relational Databases

**⏰ Teaching Hours: 10 | 📌 Frequently Asked in Exams**

---

## 🎯 Learning Objectives

- Understand object-oriented database concepts
- Learn ODMG object model and ODL
- Master Object Query Language (OQL)
- Understand object-relational extensions to SQL

---

## 2.1 Object Database Concepts ⭐⭐⭐

### Why Object Databases?

**Limitations of Relational Model:**

1. Limited data types (atomic values only)
2. No support for complex objects
3. Impedance mismatch with OOP languages
4. No behavior modeling (methods)
5. Difficulty with multimedia data

**Object Database Advantages:**

1. Natural mapping to object-oriented programming
2. Support for complex data types
3. No impedance mismatch
4. Behavior with data (methods)
5. Reusability through inheritance

### Core Object Concepts

#### 1. Object Identity (OID) ⭐⭐⭐

**Definition:** Unique, system-generated identifier for each object.

**Properties:**

- Immutable (never changes)
- Independent of object value
- Survives updates
- Unique within database

**Comparison:**
| Aspect | OID | Primary Key |
|--------|-----|-------------|
| Generation | System | User-defined |
| Mutability | Immutable | Can change |
| Based On | System-assigned | Data values |
| Type | Hidden | Visible attribute |

#### 2. Complex Objects

Objects can contain other objects or collections.

**Example:**

```
class Employee {
    string name;
    Address home_address;    // Nested object
    Set<Phone> phone_numbers;  // Collection
}
```

#### 3. Encapsulation

Data and methods bundled together in objects.

```
class Employee {
    // Data (attributes)
    string name;
    float salary;

    // Methods (behavior)
    float calculateBonus() { return salary * 0.1; }
    void giveRaise(float percent) { salary *= (1 + percent/100); }
}
```

#### 4. Type Hierarchy and Inheritance

**Single Inheritance:**

```
class Person {
    string name;
    Date dob;
}

class Employee extends Person {
    float salary;
    string department;
}
```

**Multiple Inheritance:**

```
class StudentEmployee extends Student, Employee {
    // Inherits from both
}
```

#### 5. Polymorphism

Same method name, different implementations.

```
class Shape {
    virtual float area();
}

class Circle extends Shape {
    float radius;
    float area() { return 3.14 * radius * radius; }
}

class Rectangle extends Shape {
    float width, height;
    float area() { return width * height; }
}
```

#### 6. Persistence

Objects persist beyond program execution.

**Persistence Types:**

- **Transient:** Exist only during program execution
- **Persistent:** Stored in database, survive program termination

---

## 2.2 Type Constructors ⭐⭐⭐

### Definition

Type constructors build complex types from simpler types.

### Types of Constructors

#### 1. Atom (Basic Types)

Primitive types: integer, float, string, boolean, date

#### 2. Struct (Tuple Constructor)

Creates structured types with named fields.

```
struct Address {
    string street;
    string city;
    string state;
    int zip_code;
}
```

#### 3. Set

Unordered collection with no duplicates.

```
attribute Set<string> skills;
// {"Java", "Python", "SQL"}
```

#### 4. Bag

Unordered collection allowing duplicates.

```
attribute Bag<int> test_scores;
// {85, 90, 85, 92}  -- 85 appears twice
```

#### 5. List

Ordered collection (sequence).

```
attribute List<Employment> job_history;
// First job, second job, third job...
```

#### 6. Array

Fixed-size indexed collection.

```
attribute int[12] monthly_sales;
// Exactly 12 elements, indexed 0-11
```

### Combining Constructors

```
class Employee {
    attribute string name;                    // Atom
    attribute struct Address {                // Struct
        string street;
        string city;
    } home;
    attribute Set<string> skills;             // Set of atoms
    attribute List<struct {                   // List of structs
        string company;
        Date start_date;
        Date end_date;
    }> work_history;
}
```

> 📌 **EXAM TIP:** "Explain type constructors" appeared in 2081 paper!

---

## 2.3 Object Database Extensions to SQL (SQL:1999) ⭐⭐

### User-Defined Types (UDT)

**Distinct Types:**

```sql
CREATE TYPE currency AS DECIMAL(10,2) FINAL;
CREATE TYPE ssn_type AS CHAR(11) FINAL;
```

**Structured Types:**

```sql
CREATE TYPE Address AS (
    street VARCHAR(100),
    city VARCHAR(50),
    zip INT
) NOT FINAL;
```

### Type Inheritance

```sql
CREATE TYPE Person AS (
    name VARCHAR(100),
    dob DATE
) NOT FINAL;

CREATE TYPE Employee UNDER Person AS (
    salary DECIMAL(10,2),
    emp_id INT
) FINAL;
```

### Reference Types

```sql
CREATE TYPE Department AS (
    name VARCHAR(50),
    manager REF(Employee)
);
```

### Collection Types

**Arrays:**

```sql
CREATE TYPE PhoneList AS VARCHAR(15) ARRAY[5];
```

**Multisets (SQL:2003):**

```sql
CREATE TYPE SkillSet AS VARCHAR(50) MULTISET;
```

### Typed Tables

```sql
CREATE TABLE employees OF Employee (
    REF IS oid SYSTEM GENERATED,
    PRIMARY KEY (emp_id)
);
```

### Object Querying

```sql
-- Access nested attributes
SELECT e.name, e.home.city
FROM employees e;

-- Reference dereferencing
SELECT d.name, d.manager->name
FROM departments d;

-- Method invocation
SELECT e.name, e.calculateBonus()
FROM employees e;
```

---

## 2.4 The ODMG Object Model ⭐⭐⭐

### ODMG (Object Data Management Group)

**Standard Components:**

1. **Object Model:** Basic modeling primitives
2. **ODL:** Object Definition Language
3. **OQL:** Object Query Language
4. **Language Bindings:** C++, Java, Smalltalk

### Object Model Concepts

#### Objects and Literals

- **Objects:** Have OID, mutable, can be referenced
- **Literals:** No OID, immutable, embedded in objects

#### Atomic Literals

- long, short, unsigned long, unsigned short
- float, double
- boolean
- char, string
- enum

#### Collection Types

- Set&lt;T&gt;
- Bag&lt;T&gt;
- List&lt;T&gt;
- Array&lt;T&gt;
- Dictionary&lt;K,V&gt;

#### Structured Literals

```
struct Address {
    string street;
    string city;
};
```

### Interface vs Class

**Interface:**

- Only abstract behavior (methods)
- Cannot be instantiated
- Multiple inheritance allowed

**Class:**

- Concrete implementation
- Can be instantiated
- Single inheritance (ODMG)

---

## 2.5 Object Definition Language (ODL) ⭐⭐⭐

### Basic Structure

```
class ClassName (extent extent_name) {
    // Attributes
    attribute type attribute_name;

    // Relationships
    relationship type relationship_name
        inverse related_class::inverse_relationship;

    // Methods
    return_type method_name(parameters);
};
```

### Complete Example: University Database

```
class Student (extent students) {
    // Attributes
    attribute string student_id;
    attribute string name;
    attribute struct Address {
        string street;
        string city;
        string zip;
    } address;
    attribute Set<string> phone_numbers;

    // Relationships
    relationship Set<Course> enrolled_in
        inverse Course::students;
    relationship Department major_dept
        inverse Department::majoring_students;

    // Methods
    float calculateGPA();
    void enroll(Course c);
};

class Course (extent courses) {
    attribute string course_id;
    attribute string title;
    attribute short credits;

    relationship Set<Student> students
        inverse Student::enrolled_in;
    relationship Department offered_by
        inverse Department::courses;
};

class Department (extent departments) {
    attribute string dept_name;
    attribute string location;

    relationship Set<Student> majoring_students
        inverse Student::major_dept;
    relationship Set<Course> courses
        inverse Course::offered_by;
};
```

### Relationship Cardinality in ODL

**1:1 Relationship:**

```
class Department {
    relationship Faculty chair
        inverse Faculty::chairs;
};

class Faculty {
    relationship Department chairs
        inverse Department::chair;
};
```

**1:N Relationship:**

```
class Department {
    relationship Set<Employee> employees
        inverse Employee::works_in;
};

class Employee {
    relationship Department works_in
        inverse Department::employees;
};
```

**M:N Relationship:**

```
class Student {
    relationship Set<Course> enrolled_in
        inverse Course::students;
};

class Course {
    relationship Set<Student> students
        inverse Student::enrolled_in;
};
```

> 📌 **FREQUENTLY ASKED:** "What is ODL?" or "Define ODMG object model" - appears in 2079, 2080, 2081!

---

## 2.6 Object Database Conceptual Design

### Design Process

**Step 1: Requirements Analysis**

- Identify data requirements
- Identify operations on data
- Document constraints

**Step 2: Conceptual Design**

- Create class hierarchy
- Define attributes and relationships
- Specify methods

**Step 3: Logical Design (ODL)**

- Translate to ODL schema
- Define extents
- Specify inverses

**Step 4: Physical Design**

- Define indexes
- Clustering strategies
- Storage structures

### Mapping EER to ODL

| EER Concept            | ODL Mapping                            |
| ---------------------- | -------------------------------------- |
| Entity                 | Class                                  |
| Attribute              | attribute declaration                  |
| Composite Attribute    | struct type                            |
| Multi-valued Attribute | Set&lt;T&gt;                           |
| 1:1 Relationship       | reference attributes                   |
| 1:N Relationship       | Set on "1" side, reference on "N" side |
| M:N Relationship       | Set on both sides                      |
| Specialization         | extends (inheritance)                  |

---

## 2.7 Object Query Language (OQL) ⭐⭐⭐

### Basic Syntax

```sql
SELECT expression
FROM variable IN collection
WHERE condition
```

### Simple Queries

```sql
-- All students
SELECT s FROM students s

-- Student names
SELECT s.name FROM students s

-- With condition
SELECT s.name FROM students s WHERE s.gpa > 3.5
```

### Expressions and Path Expressions

```sql
-- Access nested attributes
SELECT s.name, s.address.city
FROM students s

-- Access through relationships
SELECT s.name, s.major_dept.dept_name
FROM students s
```

### Collection Operations

```sql
-- Count
SELECT COUNT(students)

-- Aggregate
SELECT AVG(s.gpa) FROM students s

-- Grouping
SELECT d.dept_name, AVG(s.gpa)
FROM students s, s.major_dept d
GROUP BY d.dept_name
```

### Quantifiers

```sql
-- EXISTS
SELECT s.name FROM students s
WHERE EXISTS c IN s.enrolled_in: c.credits > 3

-- FOR ALL
SELECT s.name FROM students s
WHERE FOR ALL c IN s.enrolled_in: c.credits >= 3
```

### Method Invocation

```sql
SELECT s.name, s.calculateGPA()
FROM students s
WHERE s.calculateGPA() > 3.0
```

### Comparison: OQL vs SQL

| Feature         | OQL         | SQL         |
| --------------- | ----------- | ----------- |
| Return Type     | Objects     | Tuples      |
| Path Navigation | e.dept.name | JOIN needed |
| Collections     | Native      | Limited     |
| Methods         | Supported   | Limited     |
| Object Identity | Yes         | No          |

---

## 2.8 Language Binding in ODMG Standard

### Purpose

Connect database to programming language seamlessly.

### Supported Languages

- C++ binding
- Java binding (JDO)
- Smalltalk binding

### Java Example (JDO)

```java
// Persistent class
@PersistenceCapable
class Student {
    @PrimaryKey
    String studentId;
    String name;
    float gpa;

    // Relationship
    Set<Course> courses;
}

// Using JDO
PersistenceManager pm = pmf.getPersistenceManager();
Transaction tx = pm.currentTransaction();

tx.begin();
Student s = new Student("S001", "John", 3.5);
pm.makePersistent(s);  // Object saved to database
tx.commit();

// Querying
Query q = pm.newQuery(Student.class, "gpa > 3.0");
Collection results = (Collection) q.execute();
```

### Benefits of Language Binding

1. No impedance mismatch
2. Native data types
3. Transparent persistence
4. Type safety

---

## 📚 Important Questions from Past Papers

1. "What are object database concepts? Type constructors?" (2081)
2. "Compare OODB with ORDB" (2080)
3. "Explain ODMG object model" (2079, 2080, 2081)
4. "What is OQL with example?" (Model, 2079)
5. "Benefits of object-oriented database?" (Model)
6. "What is object identity?" (Model)
7. "Object database features in SQL?" (2080)

---

## 🔗 Additional Resources

**Textbooks:**

- Elmasri & Navathe, Chapter 11-12 (Object Databases)

**Online:**

- GeeksforGeeks: Object Oriented Databases
- TutorialsPoint: OQL tutorial

**YouTube:**

- Object database concepts tutorials
- OQL vs SQL comparisons

> 🖼️ **NOTE:** Be able to write ODL class definitions and OQL queries. Practice with different scenarios.
