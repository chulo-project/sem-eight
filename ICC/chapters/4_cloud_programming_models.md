# Chapter 4: Cloud Programming Models

**⏰ Teaching Hours: 12 | 📌 Heavy Technical Chapter**

---

## 🎯 Learning Objectives

- Understand thread and task programming
- Master MapReduce programming model
- Learn about parallel efficiency
- Understand enterprise batch processing

---

## 4.1 Thread Programming ⭐⭐⭐

### Definition

**Thread:** Smallest unit of execution within a process, sharing process resources.

### Thread Characteristics

- Lightweight
- Shares memory with process
- Independent execution path
- Own stack and program counter
- Shares heap with other threads

### Thread vs Process

| Thread             | Process         |
| ------------------ | --------------- |
| Lightweight        | Heavyweight     |
| Shares memory      | Separate memory |
| Fast creation      | Slower creation |
| Less isolation     | More isolation  |
| Communication easy | IPC required    |

### Why Multi-threading

1. **Parallelism:** Utilize multiple cores
2. **Responsiveness:** Non-blocking operations
3. **Resource Sharing:** Efficient memory use
4. **Scalability:** Handle more requests

### Thread Programming (Java) ⭐⭐

**Method 1: Extending Thread**

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + getName());
    }
}

// Usage
MyThread t = new MyThread();
t.start();
```

**Method 2: Implementing Runnable**

```java
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task running");
    }
}

// Usage
Thread t = new Thread(new MyTask());
t.start();
```

**Method 3: Lambda (Java 8+)**

```java
Runnable task = () -> {
    System.out.println("Lambda task");
};
new Thread(task).start();
```

### Thread Synchronization

**Problem:** Race conditions when threads access shared data.

**Solution:** Synchronization mechanisms.

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }
}
```

---

## 4.2 Task Programming

### Definition

**Task:** Independent unit of work that can be scheduled for execution.

### Thread vs Task ⭐⭐⭐

| Aspect        | Thread            | Task                |
| ------------- | ----------------- | ------------------- |
| Definition    | Execution context | Unit of work        |
| Scheduling    | OS-level          | Application/runtime |
| Overhead      | Lower             | Higher              |
| Independence  | Limited           | High                |
| Communication | Shared memory     | Message passing     |
| Isolation     | Low               | Better              |

### Task-Based Programming

```java
// Java ExecutorService
ExecutorService executor = Executors.newFixedThreadPool(10);

// Submit tasks
for (int i = 0; i < 100; i++) {
    final int taskId = i;
    executor.submit(() -> {
        System.out.println("Task " + taskId);
        return "Result " + taskId;
    });
}

executor.shutdown();
```

---

## 4.3 MapReduce Programming ⭐⭐⭐

### Definition

**MapReduce:** Programming model for processing large datasets in parallel across distributed clusters.

### MapReduce Philosophy

1. Move computation to data (not data to computation)
2. Scale horizontally
3. Handle failures automatically
4. Simple programming model

### MapReduce Phases

**1. Input Splitting**

- Large input split into chunks
- Each chunk assigned to mapper

**2. Map Phase**

```
map(key, value) → list of (intermediate_key, intermediate_value)
```

- Process input records
- Emit key-value pairs

**3. Shuffle and Sort**

- Group by intermediate key
- Sort keys
- Transfer to reducers

**4. Reduce Phase**

```
reduce(key, list of values) → list of output values
```

- Aggregate values for each key
- Produce final output

### MapReduce Example: Word Count ⭐⭐⭐

**Input:**

```
Document 1: "Cloud computing is great"
Document 2: "Cloud is the future"
```

**Map Phase:**

```
Mapper 1: ("Cloud",1), ("computing",1), ("is",1), ("great",1)
Mapper 2: ("Cloud",1), ("is",1), ("the",1), ("future",1)
```

**Shuffle & Sort:**

```
"Cloud" → [1, 1]
"computing" → [1]
"future" → [1]
"great" → [1]
"is" → [1, 1]
"the" → [1]
```

**Reduce Phase:**

```
Reducer:
("Cloud", 2)
("computing", 1)
("future", 1)
("great", 1)
("is", 2)
("the", 1)
```

### MapReduce Code (Java/Hadoop)

```java
// Mapper
public class WordMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();

    public void map(LongWritable key, Text value, Context context) {
        String[] words = value.toString().split("\\s+");
        for (String w : words) {
            word.set(w);
            context.write(word, one);
        }
    }
}

// Reducer
public class WordReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
    public void reduce(Text key, Iterable<IntWritable> values, Context context) {
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        context.write(key, new IntWritable(sum));
    }
}
```

---

## 4.4 Parallel Efficiency ⭐⭐

### Definitions

**Speedup:**

```
Speedup(n) = T(1) / T(n)
```

Where T(1) is sequential time, T(n) is parallel time with n processors.

**Efficiency:**

```
Efficiency(n) = Speedup(n) / n
```

### Ideal vs Real

**Ideal:** Speedup = n (linear speedup)
**Real:** Speedup < n (due to overhead)

### Amdahl's Law

```
Speedup = 1 / (S + P/n)
```

Where:

- S = serial fraction
- P = parallel fraction (P = 1 - S)
- n = number of processors

**Implication:** Serial portion limits maximum speedup.

### Factors Affecting Efficiency

1. **Communication overhead**
2. **Load balancing**
3. **Synchronization**
4. **Serial portions**
5. **Data transfer**

---

## 4.5 Enterprise Batch Processing ⭐⭐

### Definition

Processing large volumes of data in batches, typically non-interactive.

### Batch Processing with MapReduce

**Use Cases:**

**1. Log Analysis**

```
Map: Extract metrics from log lines
Reduce: Aggregate by category
```

**2. ETL (Extract, Transform, Load)**

```
Map: Parse and transform records
Reduce: Load into warehouse
```

**3. Report Generation**

```
Map: Calculate per-record metrics
Reduce: Aggregate into reports
```

**4. Data Cleaning**

```
Map: Validate and standardize
Reduce: Deduplicate
```

### Enterprise Considerations

1. **Scheduling:** Cron jobs, workflow schedulers
2. **Monitoring:** Track job progress
3. **Recovery:** Handle failures
4. **Auditing:** Track data lineage

---

## 4.6 Thread vs Task vs MapReduce Comparison ⭐⭐⭐

| Aspect              | Thread          | Task               | MapReduce   |
| ------------------- | --------------- | ------------------ | ----------- |
| **Granularity**     | Fine            | Medium             | Coarse      |
| **Data Size**       | Small           | Medium             | Very large  |
| **Memory Model**    | Shared          | Shared/Distributed | Distributed |
| **Scalability**     | Limited         | Medium             | Very high   |
| **Fault Tolerance** | Manual          | Framework          | Built-in    |
| **Complexity**      | High            | Medium             | Lower       |
| **Use Case**        | CPU-bound tasks | Concurrent tasks   | Big data    |

---

## 📚 Important Questions

1. "Thread vs Task. Thread programming" (Model, 2082)
2. "MapReduce with example" (2081, 2082)
3. "Parallel efficiency of MapReduce" (2079)
4. "Compare thread, task, MapReduce" (2079)
5. "How Map, Shuffle, Reduce work?" (Model, 2082)
6. "Enterprise batch processing with MapReduce" (Model)

---

## 🔗 Additional Resources

**Textbooks:**

- Mastering Cloud Computing, Chapter 5

**Practice:**

- Hadoop tutorials
- Spark examples

**Online:**

- Apache Hadoop documentation
- Google's MapReduce paper
