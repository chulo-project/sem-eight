# Chapter 5: Advanced Database Models, Systems, and Applications

**⏰ Teaching Hours: 8 | 📌 Frequently Asked in Exams**

---

## 🎯 Learning Objectives

- Understand active databases and triggers
- Learn temporal database concepts
- Explore spatial and multimedia databases
- Understand deductive databases
- Introduction to information retrieval

---

## 5.1 Active Database Concepts and Triggers ⭐⭐⭐

### Active Database

**Definition:** A database that can automatically react to events by evaluating conditions and executing actions.

**Difference from Passive:**

- Passive: Only responds to explicit queries
- Active: Monitors and reacts to events

### ECA Rule Model

**Event-Condition-Action (ECA):**

```
ON <event>
IF <condition>
THEN <action>
```

**Event:** What triggers the rule (INSERT, UPDATE, DELETE)
**Condition:** When to execute (optional boolean check)
**Action:** What to do (SQL statements, procedure calls)

### Triggers ⭐⭐⭐

**Definition:** Database objects that automatically execute in response to specified events.

### Trigger Syntax (SQL)

```sql
CREATE TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF}
{INSERT | UPDATE | DELETE}
ON table_name
[FOR EACH ROW | FOR EACH STATEMENT]
[WHEN (condition)]
BEGIN
    -- Action statements
END;
```

### Trigger Examples

**1. Audit Trail:**

```sql
CREATE TRIGGER log_salary_change
AFTER UPDATE ON Employee
FOR EACH ROW
WHEN (OLD.salary != NEW.salary)
BEGIN
    INSERT INTO Salary_Log
    VALUES (OLD.emp_id, OLD.salary, NEW.salary, SYSDATE);
END;
```

**2. Enforce Business Rule:**

```sql
CREATE TRIGGER check_salary
BEFORE UPDATE ON Employee
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary THEN
        RAISE_APPLICATION_ERROR(-20001, 'Cannot reduce salary');
    END IF;
END;
```

**3. Derived Attribute:**

```sql
CREATE TRIGGER update_order_total
AFTER INSERT ON Order_Items
FOR EACH ROW
BEGIN
    UPDATE Orders
    SET total = total + NEW.quantity * NEW.price
    WHERE order_id = NEW.order_id;
END;
```

**4. Cascade Delete:**

```sql
CREATE TRIGGER delete_dependents
AFTER DELETE ON Employee
FOR EACH ROW
BEGIN
    DELETE FROM Dependent WHERE emp_id = OLD.emp_id;
END;
```

### Trigger Uses

1. **Integrity enforcement:** Complex constraints
2. **Auditing:** Track data changes
3. **Security:** Access control
4. **Derived data:** Maintain computed columns
5. **Replication:** Sync changes
6. **Notification:** Alert on events

### Row-Level vs Statement-Level

| Row-Level             | Statement-Level          |
| --------------------- | ------------------------ |
| Fires for each row    | Fires once per statement |
| Access OLD/NEW values | No row access            |
| More overhead         | Less overhead            |

> 📌 **FREQUENTLY ASKED:** "What is active database? Explain triggers with example" (2079, 2080, 2081)

---

## 5.2 Temporal Database Concepts ⭐⭐⭐

### Why Temporal Databases?

**Problem with Traditional DB:**

- Only stores current state
- No history of changes
- Cannot query past states

**Solution:** Temporal databases maintain time-varying data.

### Time Dimensions ⭐⭐⭐

#### 1. Transaction Time (System Time)

**Definition:** Time when data is stored in the database.

**Characteristics:**

- System-managed (automatic)
- Cannot be changed retroactively
- Records insert/delete times
- Used for auditing

**Example:**

```
| emp_id | salary | trans_start | trans_end |
|--------|--------|-------------|-----------|
| 101    | 50000  | 2024-01-01  | 2024-06-30|
| 101    | 55000  | 2024-07-01  | 9999-12-31|
```

#### 2. Valid Time (Application Time)

**Definition:** Time when a fact is true in the real world.

**Characteristics:**

- User-defined (application manages)
- Can be past, present, or future
- Represents real-world events
- Can be modified

**Example:**

```
| emp_id | dept  | valid_from | valid_to   |
|--------|-------|------------|------------|
| 101    | Sales | 2020-01-01 | 2023-12-31 |
| 101    | IT    | 2024-01-01 | 9999-12-31 |
```

#### 3. Bitemporal Time

**Definition:** Combines both transaction time and valid time.

**Usage:** When you need to track:

- When facts were true (valid time)
- When database knew about them (transaction time)

**Example:**

```
| emp_id | salary | valid_start | valid_end | trans_start | trans_end |
|--------|--------|-------------|-----------|-------------|-----------|
| 101    | 50000  | 2024-01-01  | 9999-12-31| 2024-01-01  | 2024-03-15|
| 101    | 55000  | 2024-01-01  | 9999-12-31| 2024-03-15  | 9999-12-31|
```

(Salary was corrected on 2024-03-15, but was effective from 2024-01-01)

### Temporal Queries

```sql
-- Current salary
SELECT * FROM Employee_History
WHERE emp_id = 101
AND CURRENT_DATE BETWEEN valid_start AND valid_end;

-- Salary on specific date
SELECT * FROM Employee_History
WHERE emp_id = 101
AND '2024-02-15' BETWEEN valid_start AND valid_end;

-- What database believed on a past date
SELECT * FROM Employee_History
WHERE emp_id = 101
AND '2024-02-01' BETWEEN trans_start AND trans_end;
```

### SQL:2011 Temporal Tables

```sql
CREATE TABLE Employee (
    emp_id INT,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    valid_from DATE,
    valid_to DATE,
    PERIOD FOR valid_period (valid_from, valid_to)
);
```

> 📌 **FREQUENTLY ASKED:** "Why temporal database? Explain time dimensions" (Model, 2081)

---

## 5.3 Spatial Database Concepts ⭐⭐

### Definition

Databases optimized for storing and querying spatial (geographic) data.

### Spatial Data Types

**1. Point:** Single location (x, y)
**2. Line:** Sequence of connected points
**3. Polygon:** Closed area bounded by lines
**4. Multi-Point/Line/Polygon:** Collections

### Spatial Operations

**1. Topological:**

- Contains, Within, Overlaps
- Touches, Crosses, Disjoint
- Equals, Intersects

**2. Distance:**

- Distance between objects
- Within distance (buffering)

**3. Overlay:**

- Union, Intersection
- Difference, Symmetric Difference

### Spatial Indexing

**R-Tree:**

- Hierarchical structure
- Bounding rectangles
- Efficient for spatial queries

```
                    Root
                   /    \
              MBR1      MBR2
             /    \    /    \
           obj1  obj2 obj3  obj4
```

### Spatial SQL Examples

```sql
-- Find restaurants within 1km
SELECT name FROM Restaurants
WHERE ST_Distance(location, ST_Point(85.3, 27.7)) < 1000;

-- Find polygons containing a point
SELECT name FROM Districts
WHERE ST_Contains(boundary, ST_Point(85.3, 27.7));

-- Calculate area
SELECT name, ST_Area(boundary) FROM Districts;
```

### Spatial Database Examples

- PostGIS (PostgreSQL extension)
- Oracle Spatial
- SQL Server Spatial
- MongoDB GeoJSON

> 📌 **EXAM TIP:** "What is spatial database?" often asked as short note (2079, 2081)

---

## 5.4 Multimedia Database Concepts ⭐⭐⭐

### Definition

Databases that store and manage multimedia data: text, images, audio, video, and graphics.

### Characteristics

1. **Large Data Size:** Media files are big
2. **Diverse Types:** Different formats
3. **Content-Based Retrieval:** Query by content
4. **Temporal/Spatial Nature:** Time-based data
5. **Complex Storage:** Specialized structures

### Multimedia Data Types

| Type     | Format Examples | Challenges          |
| -------- | --------------- | ------------------- |
| Text     | TXT, PDF, DOC   | Full-text search    |
| Image    | JPEG, PNG, GIF  | Content recognition |
| Audio    | MP3, WAV, AAC   | Speech recognition  |
| Video    | MP4, AVI, MKV   | Size, streaming     |
| Graphics | SVG, DXF        | Vector operations   |

### Content-Based Retrieval

**For Images:**

- Color histograms
- Texture analysis
- Shape detection
- Object recognition
- Face detection

**For Audio:**

- Frequency analysis
- Speech-to-text
- Audio fingerprinting
- Genre classification

**For Video:**

- Keyframe extraction
- Scene detection
- Motion analysis
- Object tracking

### Applications of Multimedia Database ⭐⭐⭐

1. **Digital Libraries:** Books, journals, manuscripts
2. **Medical Imaging:** X-rays, MRI, CT scans
3. **Entertainment:** Netflix, Spotify, gaming
4. **GIS:** Satellite imagery, maps
5. **E-Commerce:** Product images, visual search
6. **Surveillance:** CCTV, face recognition
7. **Education:** E-learning content
8. **Social Media:** Photo/video sharing

### Multimedia Database Architecture

```
┌─────────────────────────────────┐
│        User Interface           │
├─────────────────────────────────┤
│      Query Processor            │
├─────────────────────────────────┤
│  Multimedia Object Manager      │
├───────────┬──────────┬──────────┤
│ Text Mgr  │ Image Mgr│ Video Mgr│
├───────────┴──────────┴──────────┤
│       Storage Manager           │
└─────────────────────────────────┘
```

> 📌 **FREQUENTLY ASKED:** "Explain multimedia database. Applications?" (Model, 2081)

---

## 5.5 Deductive Database Concepts ⭐⭐

### Definition

Database that can derive new facts from stored facts using logical rules.

### Components

**1. Extensional Database (EDB):**

- Base facts explicitly stored
- Traditional relations

**2. Intensional Database (IDB):**

- Derived facts from rules
- Virtual relations

**3. Deductive Rules:**

- Logic programming rules
- Derive new facts

### Datalog Language

**Basic Format:**

```
head :- body
```

**Example Rules:**

```prolog
% Base facts (EDB)
parent(john, mary).
parent(mary, peter).
parent(mary, jane).

% Derived rules (IDB)
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).
```

**Query:**

```prolog
?- grandparent(john, Who).
Who = peter.
Who = jane.
```

### Recursive Queries

Deductive DBs handle recursion naturally:

```prolog
% Transitive closure
reachable(X, Y) :- edge(X, Y).
reachable(X, Y) :- edge(X, Z), reachable(Z, Y).
```

### Applications

1. **Expert Systems:** Rule-based reasoning
2. **Data Analysis:** Pattern discovery
3. **Semantic Web:** Ontology reasoning
4. **Access Control:** Policy reasoning

> 📌 **EXAM TIP:** "Write short note on deductive database" (2079)

---

## 5.6 Information Retrieval and Web Search ⭐⭐

### Information Retrieval (IR)

**Definition:** Finding relevant documents from a large collection based on user query.

**Difference from Database Query:**
| Database Query | Information Retrieval |
|----------------|---------------------|
| Exact match | Relevance-based |
| Structured data | Unstructured text |
| SQL | Natural language |
| Always finds or not | Ranked results |

### IR Models

**1. Boolean Model:**

- Query as boolean expression
- AND, OR, NOT operators
- Exact match only

**2. Vector Space Model:**

- Documents as vectors
- Terms as dimensions
- Similarity = cosine of angle

**3. Probabilistic Model:**

- Probability of relevance
- Bayesian approach

### Key Concepts

**TF-IDF (Term Frequency - Inverse Document Frequency):**

```
TF(t, d) = (count of t in d) / (total terms in d)
IDF(t) = log(N / df(t))
TF-IDF = TF × IDF
```

**Precision and Recall:**

```
Precision = Relevant Retrieved / Total Retrieved
Recall = Relevant Retrieved / Total Relevant
```

### Web Search

**Components:**

1. **Crawler:** Collect web pages
2. **Indexer:** Build searchable index
3. **Ranker:** Order by relevance (PageRank)
4. **Query Processor:** Handle user queries

**PageRank Algorithm:**

- Importance based on links
- Popular pages have more inbound links
- Democratized voting system

> 📌 **EXAM TIP:** "Write short note on Information Retrieval" (2080)

---

## 📚 Important Questions from Past Papers

1. "What is active database? Explain triggers" (2079, 2080, 2081)
2. "Why temporal database? Time dimensions?" (Model, 2081)
3. "What is spatial database?" (2079, 2081)
4. "Explain multimedia database. Applications?" (Model, 2081)
5. "Write short note on deductive database" (2079)
6. "Write short note on information retrieval" (2080)

---

## 🔗 Additional Resources

**Textbooks:**

- Elmasri & Navathe, Chapter 25-26 (Advanced topics)

**Online:**

- PostgreSQL temporal tables
- PostGIS documentation
- Elasticsearch tutorials

**YouTube:**

- Trigger examples in SQL
- GIS database tutorials
- Information retrieval basics

> 🖼️ **NOTE:** Trigger syntax varies by DBMS (Oracle, PostgreSQL, MySQL). Know at least one well for exam.
