# Chapter 3: Query Processing and Optimization

**⏰ Teaching Hours: 7 | 📌 Very Frequently Asked in Exams**

---

## 🎯 Learning Objectives

- Understand the query processing pipeline
- Master query trees and their transformations
- Learn heuristic optimization techniques
- Understand cost-based optimization

---

## 3.1 Concept of Query Processing ⭐⭐⭐

### Definition

**Query Processing:** The sequence of activities involved in extracting data from a database in response to a query.

### Query Processing Steps

```
┌─────────────┐
│   SQL Query │
└──────┬──────┘
       ↓
┌──────────────┐
│    Parser    │ → Syntax check, parse tree
└──────┬───────┘
       ↓
┌──────────────┐
│   Validator  │ → Semantic check, type check
└──────┬───────┘
       ↓
┌───────────────────┐
│  Query Optimizer  │ → Generate efficient plan
└──────┬────────────┘
       ↓
┌──────────────────┐
│ Code Generator   │ → Execution code
└──────┬───────────┘
       ↓
┌──────────────────┐
│ Query Executor   │ → Execute and return results
└──────────────────┘
```

### Detailed Steps

**Step 1: Parsing**

- Check SQL syntax
- Create parse tree
- Identify keywords, identifiers

**Step 2: Validation**

- Check table/column existence
- Verify data types
- Check user permissions

**Step 3: Query Tree Generation**

- Convert to internal representation
- Relational algebra expression
- Canonical form

**Step 4: Optimization**

- Generate alternative plans
- Estimate costs
- Select best plan

**Step 5: Code Generation**

- Create executable code
- Access path selection

**Step 6: Execution**

- Run the chosen plan
- Return results

### Query Processing vs Query Optimization

| Query Processing     | Query Optimization     |
| -------------------- | ---------------------- |
| Complete pipeline    | Part of processing     |
| Parsing to execution | Plan selection only    |
| Sequential steps     | May try multiple plans |
| Always happens       | Critical step          |

> 📌 **FREQUENTLY ASKED:** "Explain steps in query processing" (2080) or "Differentiate processing and optimization" (2079)

---

## 3.2 Query Trees and Heuristics ⭐⭐⭐

### Query Tree (Operator Tree)

**Definition:** Tree data structure representing relational algebra expression.

**Structure:**

- **Leaf nodes:** Base relations (tables)
- **Internal nodes:** Relational operations
- **Root:** Final result
- **Edges:** Data flow

### Example Query and Tree

**SQL:**

```sql
SELECT e.name
FROM Employee e, Department d
WHERE e.dept_id = d.dept_id
AND d.location = 'Kathmandu'
AND e.salary > 50000;
```

**Initial Query Tree:**

```
                π name
                   |
         σ salary > 50000
                   |
         σ location = 'Kathmandu'
                   |
         σ e.dept_id = d.dept_id
                   |
                  ×
                /   \
           Employee  Department
```

### Why Query Trees?

1. **Visual representation:** Easy to understand
2. **Transformation:** Apply algebraic rules
3. **Optimization:** Restructure for efficiency
4. **Communication:** Standard representation
5. **Cost estimation:** Calculate at each node

> 📌 **FREQUENTLY ASKED:** "What is query tree? Why do we need it?" (Model, 2081)

---

## 3.3 Heuristic Query Optimization ⭐⭐⭐

### Definition

Optimization using predefined algebraic transformation rules that typically improve performance.

### Heuristic Rules

#### Rule 1: Cascade of Selections

Split conjunctive selections:

```
σ c1 AND c2 AND c3 (R) → σ c1 (σ c2 (σ c3 (R)))
```

#### Rule 2: Commutativity of Selection

Selections can be reordered:

```
σ c1 (σ c2 (R)) ≡ σ c2 (σ c1 (R))
```

#### Rule 3: Cascade of Projections

Eliminate redundant projections:

```
π a1 (π a1, a2 (π a1, a2, a3 (R))) → π a1 (R)
```

#### Rule 4: Commutativity of Selection and Projection

If selection involves only projected attributes:

```
π a1, a2 (σ c (R)) ≡ σ c (π a1, a2 (R))
(where c uses only a1, a2)
```

#### Rule 5: Commutativity of Join/Cartesian Product

```
R × S ≡ S × R
R ⋈ S ≡ S ⋈ R
```

#### Rule 6: Associativity of Join

```
(R ⋈ S) ⋈ T ≡ R ⋈ (S ⋈ T)
```

#### Rule 7: Selection Distribution over Join ⭐⭐⭐

Push selection before join:

```
σ c (R ⋈ S) → σ c1 (R) ⋈ σ c2 (S)
(where c1 involves only R, c2 involves only S)
```

#### Rule 8: Projection Distribution over Join

```
π a1, a2 (R ⋈c S) → π a1 (R) ⋈c π a2 (S)
(include join attributes in both projections)
```

### Heuristic Optimization Algorithm

**Main Heuristics:**

1. **Perform SELECT operations as early as possible**
2. **Perform PROJECT operations as early as possible**
3. **Convert Cartesian products to JOINs**
4. **Reorder joins for efficiency**

### Optimization Example ⭐⭐⭐

**Query:**

```sql
SELECT e.name, d.dept_name
FROM Employee e, Department d, Project p
WHERE e.dept_id = d.dept_id
AND e.project_id = p.project_id
AND d.location = 'Kathmandu'
AND p.budget > 100000;
```

**Before Optimization:**

```
        π name, dept_name
               |
        σ budget > 100000
               |
        σ location = 'Kathmandu'
               |
        σ e.dept_id = d.dept_id
               |
        σ e.project_id = p.project_id
               |
              ×
            /   \
           ×    Project
          / \
    Employee  Department
```

**After Optimization (Push selections down):**

```
            π name, dept_name
                   |
                  ⋈
                /   \
               ⋈    σ budget > 100000 (Project)
              / \
      Employee  σ location = 'Kathmandu' (Department)
```

**Improvement:**

- Cartesian products eliminated
- Selections pushed to base relations
- Reduced intermediate result sizes

> 📌 **EXAM TIP:** Practice drawing before/after query trees. Very common question!

---

## 3.4 Choice of Query Execution Plans

### Multiple Plans Possible

Same query can be executed in many ways:

**Example:** R ⋈ S ⋈ T

**Plan 1:** (R ⋈ S) ⋈ T
**Plan 2:** R ⋈ (S ⋈ T)
**Plan 3:** (R ⋈ T) ⋈ S

Each plan may have very different costs!

### Access Paths

**1. Full Table Scan**

- Read every block
- Cost = Number of blocks

**2. Index Scan**

- Use index to find records
- Cost = Index height + matching records

**3. Index-Only Scan**

- If all needed columns in index
- No table access needed

### Join Algorithms

**1. Nested Loop Join**

```
for each tuple r in R:
    for each tuple s in S:
        if join condition satisfied:
            output (r, s)
```

Cost: O(n × m)

**2. Block Nested Loop**

- Load blocks instead of tuples
- Reduced I/O
  Cost: O(blocks_R × blocks_S)

**3. Index Nested Loop**

- Use index on inner table
- Best when index exists
  Cost: O(n × index_lookup)

**4. Sort-Merge Join**

- Sort both tables on join key
- Merge sorted tables
  Cost: O(n log n + m log m + n + m)

**5. Hash Join**

- Hash smaller table
- Probe with larger table
  Cost: O(n + m)

### Plan Selection Factors

1. Available indexes
2. Table sizes
3. Join selectivity
4. Available memory
5. Sort order requirements

---

## 3.5 Cost-Based Optimization ⭐⭐⭐

### Definition

Select execution plan based on estimated cost using database statistics.

### Cost Components

**1. Disk I/O (Dominant)**

- Number of block transfers
- Seek time

**2. CPU**

- Comparison operations
- Computations

**3. Memory**

- Buffer requirements

**4. Network (Distributed)**

- Data transfer costs

### Database Statistics (Catalog)

| Statistic | Description                         |
| --------- | ----------------------------------- |
| n(R)      | Number of tuples in R               |
| b(R)      | Number of blocks for R              |
| l(R)      | Tuple size in bytes                 |
| f(R)      | Blocking factor (tuples per block)  |
| V(A, R)   | Number of distinct values of A in R |
| Height(I) | Height of index I                   |

### Selectivity Estimation

**Selectivity (sel):** Fraction of tuples satisfying a condition

**Equality: A = value**

```
sel = 1 / V(A, R)
```

**Range: A > value**

```
sel = (max(A) - value) / (max(A) - min(A))
```

**AND conditions:**

```
sel(c1 AND c2) = sel(c1) × sel(c2)  (assuming independence)
```

**OR conditions:**

```
sel(c1 OR c2) = sel(c1) + sel(c2) - sel(c1) × sel(c2)
```

### Cost Formulas

**Full Table Scan:**

```
Cost = b(R)
```

Where b(R) = number of blocks

**Index Scan (B+ Tree):**

```
Cost = Height(I) + sel × b(R)
```

**Selection with Index:**

```
If sel < 0.1: Index scan preferred
If sel > 0.2: Table scan preferred
```

**Join Cost (Nested Loop):**

```
Cost = b(R) + b(R) × b(S)  (block nested loop)
```

**Join Cost (Sort-Merge):**

```
Cost = b(R) × log(b(R)) + b(S) × log(b(S)) + b(R) + b(S)
```

### Example Cost Comparison

**Given:**

- EMPLOYEE: 10,000 tuples, 1000 blocks
- DEPARTMENT: 100 tuples, 10 blocks
- Join: E.dept_id = D.dept_id

**Plan 1: Nested Loop (EMPLOYEE outer)**

```
Cost = 1000 + 1000 × 10 = 11,000 block accesses
```

**Plan 2: Nested Loop (DEPARTMENT outer)**

```
Cost = 10 + 10 × 1000 = 10,010 block accesses
```

**Plan 3: Hash Join**

```
Cost = 1000 + 10 = 1,010 block accesses
```

**Winner:** Hash Join (Plan 3)

> 📌 **EXAM TIP:** Know how to calculate and compare costs. Demonstrate why optimization matters.

---

## 3.6 Comparison: Heuristic vs Cost-Based

| Aspect     | Heuristic              | Cost-Based             |
| ---------- | ---------------------- | ---------------------- |
| Approach   | Transformation rules   | Statistical estimation |
| Speed      | Fast                   | Slower                 |
| Statistics | Not required           | Required               |
| Quality    | Good in most cases     | Usually optimal        |
| Complexity | Simple                 | Complex                |
| When Used  | Initial transformation | Final plan selection   |

### Combined Approach

Most DBMSs use both:

1. **First:** Apply heuristic transformations
2. **Then:** Cost-based selection among remaining alternatives

---

## 📚 Important Questions from Past Papers

1. "What is query tree? Why needed?" (Model, 2081)
2. "Why query optimization? Compare heuristic and cost-based" (Model, 2080)
3. "Explain steps in query processing" (2080)
4. "Explain heuristic optimization with example" (2081)
5. "Illustrate choice of query execution plans" (2079)
6. "Query processing vs optimization" (2079)

---

## 🔗 Additional Resources

**Textbooks:**

- Elmasri & Navathe, Chapter 15 (Query Processing)
- Ramakrishnan & Gehrke, Chapter 12-14

**Online:**

- GeeksforGeeks: Query Optimization
- PostgreSQL EXPLAIN documentation

**YouTube:**

- Gate Smashers: Query Processing series
- Database optimization tutorials

> 🖼️ **NOTE:** Practice drawing query trees and showing transformations. This is a visual topic - diagrams score well in exams!

---

## 🧮 Practice Problems

**Problem 1:** Draw initial and optimized query trees for:

```sql
SELECT s.name FROM Student s, Course c, Enrollment e
WHERE s.id = e.student_id AND c.id = e.course_id
AND c.credits > 3 AND s.gpa > 3.0;
```

**Problem 2:** Calculate costs for:

- Table ORDERS: 50,000 tuples, 5000 blocks
- Table CUSTOMERS: 1000 tuples, 100 blocks
- Join: O.cust_id = C.cust_id
  Compare nested loop (both orders) and sort-merge join.
