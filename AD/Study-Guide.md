# Advanced Database (AD) Study Guide

This guide is based on the Tribhuvan University syllabus for CSC461 (Advanced Database).

## Unit 1: Enhanced Entity Relationship Model and Relational Model (8 Hrs.)

### Key Topics

- **Enhanced ER (EER) Model:**
  - **Subclasses, Superclasses, and Inheritance:** Understanding the hierarchy of entities.
  - **Specialization and Generalization:**
    - Definitions and differences.
    - **Constraints:** Disjoint vs. Overlapping, Total vs. Partial participation.
  - **Union Types (Categories):** Modeling entities that are a subclass of the union of multiple superclasses.
  - **Aggregation:** Modeling a relationship as an entity.
- **Relational Model Revised:**
  - **Mapping EER to Relational:** Step-by-step algorithms to convert Subclasses/Superclasses, Union Types, and Aggregation to relational tables.
- **SQL and Advanced Features:**
  - Triggers, Assertions, Views, and Recursive Queries (if applicable).
- **Physical Database Design:**
  - **File Structures:** Heap, Sorted, Hashed.
  - **Hashing:** Static vs. Dynamic Hashing.
  - **Indexing:** Primary, Secondary, Clustering, Multilevel Indexes, B-Trees, and B+-Trees.

### Study Questions

1. Differentiate between Specialization and Generalization with examples.
2. Explain the different constraints on specialization/generalization (Disjoint/Overlapping, Total/Partial).
3. How do you map a Union Type (Category) to a relational schema?
4. Compare B-Tree and B+-Tree indexes. When is each preferred?
5. Explain different constraints of specialization and generalization.
6. What is hashing? How does hashing improve database efficiency?

---

## Unit 2: Object and Object Relational Databases (10 Hrs.)

### Key Topics

- **Object Database Concepts:**
  - Object Identity (OID), Type Constructors (Tuple, Set, Bag, List), Encapsulation, Inheritance, Polymorphism.
  - Complex Objects and Object Structure.
- **Object Database Extensions to SQL:**
  - User Defined Types (UDTs), Table Inheritance, Reference Types.
- **ODMG Standard:**
  - **Object Model:** The standard interface for Object Databases.
  - **ODL (Object Definition Language):** Defining schema for ODBMS.
  - **OQL (Object Query Language):** Query syntax similar to SQL but for objects (path expressions).
  - **Language Binding:** C++, Java, Smalltalk bindings.
- **Conceptual Design:** Mapping EER to ODL.

### Study Questions

1. What is an Object Identity (OID)? How does it differ from a Primary Key?
2. Explain the ODMG Object Model.
3. Write an OQL query to traverse a relationship using path expressions.
4. Compare an ODBMS with an RDBMS. What are the advantages of Object-Relational Databases (ORDBMS)?
5. Explain different object database concepts in brief. What are type constructors?
6. Explain ODMG object model.

---

## Unit 3: Query Processing and Optimization (7 Hrs.)

### Key Topics

- **Query Processing Steps:**
  1. Parsing and Translation.
  2. Optimization.
  3. Evaluation.
- **Query Trees and Graphs:** Visualizing query execution plans.
- **Heuristic Query Optimization (Rule-Based):**
  - Moving SELECT/PROJECT operations down the tree (Pushing selections).
  - Reordering Leaf nodes.
  - Use of transformation rules.
- **Cost-Based Optimization:**
  - Estimating cost based on statistics (catalogs).
  - **Choice of Plans:** Deep-left trees vs. Bushy trees.
  - Cost of Join operations (Nested Loop, Merge Join, Hash Join).

### Study Questions

1. Describe the steps of query processing with a diagram.
2. Explain Heuristic Query Optimization. What are the main rules used?
3. Convert a SQL query into a Query Tree and then apply heuristic optimization rules to optimize it.
4. How does a query optimizer estimate the cost of a plan?
5. Why do we need query optimization in databases? Explain heuristic query optimization with examples.
6. What are the uses of query trees in query processing? Explain.

---

## Unit 4: Distributed Databases, NoSQL Systems, and BigData (12 Hrs.)

### Key Topics

- **Distributed Databases:**
  - **Concepts:** Fragmentation (Horizontal, Vertical, Hybrid), Replication (Full, Partial), and Allocation.
  - **Benefits:** Reliability, Availability, Scalability, Autonomy.
  - **Architecture:** Client-Server, Peer-to-Peer, Multi-DBMS.
  - **Transparencies:** Data, Location, Replication, Fragmentation transparency.
- **NoSQL Systems:**
  - **CAP Theorem:** Consistency, Availability, Partition Tolerance (Pick 2).
  - **BASE Properties:** Basically Available, Soft state, Eventual consistency.
  - **Types of NoSQL:**
    - **Document-based:** MongoDB (JSON/BSON based).
    - **Key-value Stores:** Redis, DynamoDB.
    - **Column-based:** Cassandra, HBase.
    - **Graph-based:** Neo4j.
- **Big Data:**
  - **Concept:** 3 Vs (Volume, Velocity, Variety).
  - **MapReduce:** Programming model for processing large datasets (Map phase, Shuffle/Sort, Reduce phase).
  - **Hadoop:** Ecosystem for distributed storage and processing (HDFS, YARN).

### Study Questions

1. What is Data Fragmentation? Explain Horizontal and Vertical Fragmentation with examples.
2. Explain the CAP Theorem. Why can't a distributed system satisfy all three properties simultaneously?
3. Compare SQL vs. NoSQL databases.
4. Explain the MapReduce programming model with a word count example.
5. Explain different distributed database architectures. What is data fragmentation?
6. What is the CAP theorem? Explain.
7. What is Big Data? What are its 3 V’s?

---

## Unit 5: Advanced Database Models, Systems, and Applications (8 Hrs.)

### Key Topics

- **Active Databases:**
  - **ECA Model:** Event-Condition-Action rules (Triggers).
  - Uses: auditing, constraints integrity, alerting.
- **Temporal Databases:**
  - Valid Time vs. Transaction Time.
  - Bitemporal relations.
- **Spatial Databases:**
  - Storing geometric data (Points, Lines, Polygons).
  - Spatial Indexing (R-Trees).
- **Multimedia Databases:**
  - Storing Images, Audio, Video.
  - Content-based retrieval.
- **Deductive Databases:**
  - Logic-based databases (Datalog, Prolog).
  - Inference rules.
- **Information Retrieval & Web Search:**
  - Indexing text (Inverted Index).
  - Ranking (TF-IDF, PageRank).

### Study Questions

1. What is an Active Database? Explain the ECA rule model.
2. Differentiate between Valid Time and Transaction Time in Temporal Databases.
3. What are the applications of Spatial Databases?
4. Explain the concept of an Inverted Index in Information Retrieval.
5. What are triggers? What are the uses of triggers?
6. Why do we need spatial databases? What are common types of analysis for spatial data?
7. Write short notes on: Map Reduce, Multimedia database.
