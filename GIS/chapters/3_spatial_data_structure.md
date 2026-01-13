# Chapter 3: Spatial Data Structure and Database Design

**⏰ Teaching Hours: 6 | 📌 Very Important for Understanding GIS**

---

## 🎯 Learning Objectives

- Understand geographic phenomena and data modeling
- Differentiate raster and vector data models
- Learn spatial relationships and topology
- Understand GIS data formats

---

## 3.1 Geographic Phenomena and Data Modeling ⭐⭐

### Geographic Phenomena

**Discrete Objects:**

- Well-defined boundaries
- Countable entities
- Examples: buildings, roads, parcels

**Continuous Fields:**

- Values at every location
- No distinct boundaries
- Examples: temperature, elevation, rainfall

### Data Modeling Approaches

**Object View:**

- World as collection of objects
- Focus on features
- Vector representation

**Field View:**

- World as continuous surface
- Focus on phenomena
- Raster representation

---

## 3.2 Geographic Objects and Fields ⭐⭐

### Object-Based Model

**Point Objects:**

- Zero-dimensional
- Location only (x, y)
- Examples: wells, GPS points, trees

**Line Objects:**

- One-dimensional
- Length, no area
- Examples: roads, rivers, pipelines

**Polygon Objects:**

- Two-dimensional
- Enclosed area
- Examples: parcels, districts, lakes

### Field-Based Model

**Types of Fields:**
| Type | Description | Example |
|------|-------------|---------|
| Nominal | Categories | Land use types |
| Ordinal | Ranked values | Soil quality (1-5) |
| Interval | Equal intervals | Temperature °C |
| Ratio | True zero | Rainfall mm |

---

## 3.3 Vector Data Model ⭐⭐⭐

### Structure

**Point:** Coordinate pair (x, y)
**Line/Polyline:** Ordered series of points
**Polygon:** Closed series of points

### Vector Representation

```
Point: (x, y)

Line: [(x1,y1), (x2,y2), (x3,y3)]

Polygon: [(x1,y1), (x2,y2), (x3,y3), (x1,y1)]
```

### Vector Data Models

**1. Spaghetti Model (Simple)**

- Each feature independent
- No topology
- Duplicate boundaries stored

**2. Topological Model**

- Explicit relationships
- Shared boundaries
- Connectivity, adjacency, containment

### Spaghetti vs Topological ⭐⭐⭐

| Aspect          | Spaghetti | Topological  |
| --------------- | --------- | ------------ |
| Structure       | Simple    | Complex      |
| Redundancy      | High      | Low          |
| Spatial Queries | Limited   | Full support |
| Editing         | Easy      | Complex      |
| Storage         | More      | Less         |
| Error Detection | Difficult | Easy         |

---

## 3.4 Raster Data Model ⭐⭐⭐

### Structure

**Grid of cells (pixels)** with values representing features or phenomena.

```
┌─┬─┬─┬─┬─┐
│1│1│2│2│3│
├─┼─┼─┼─┼─┤
│1│2│2│3│3│
├─┼─┼─┼─┼─┤
│2│2│3│3│3│
└─┴─┴─┴─┴─┘
```

### Raster Elements

1. **Cell/Pixel:** Basic unit
2. **Resolution:** Cell size (e.g., 30m × 30m)
3. **Extent:** Geographic coverage
4. **Bands:** Number of layers (multispectral)
5. **Value:** Attribute stored in each cell

### Raster for Different Data

| Data Type   | Cell Value  | Example                      |
| ----------- | ----------- | ---------------------------- |
| Categorical | Class code  | Land use (1=forest, 2=water) |
| Continuous  | Measurement | Elevation (meters)           |
| Binary      | 0 or 1      | Flood zone (yes/no)          |

### Raster vs Vector ⭐⭐⭐

| Aspect     | Raster                | Vector                  |
| ---------- | --------------------- | ----------------------- |
| Structure  | Grid cells            | Points, lines, polygons |
| Best for   | Continuous data       | Discrete features       |
| Storage    | Large files           | Smaller files           |
| Boundaries | Stepped               | Smooth                  |
| Analysis   | Cell operations       | Network, overlay        |
| Sources    | Satellite, DEM        | Digitizing, GPS         |
| Accuracy   | Limited by resolution | High precision          |

---

## 3.5 Spatial Relationships and Topology ⭐⭐⭐

### Topology Definition

**Topology:** Mathematical relationships defining how features share geometry.

### Topological Relationships

**1. Connectivity**

- How lines connect at nodes
- Network continuity
- Example: Roads meeting at intersection

**2. Adjacency**

- Features sharing boundaries
- Neighbor relationships
- Example: Adjacent land parcels

**3. Containment**

- Feature inside another
- Boundary relationships
- Example: Building inside parcel

### Topology Rules

| Rule                    | Description                      |
| ----------------------- | -------------------------------- |
| Must Not Overlap        | Polygons cannot share area       |
| Must Not Have Gaps      | No empty spaces between polygons |
| Must Be Covered By      | Features inside another          |
| Must Not Self-Intersect | Lines cannot cross themselves    |
| Must Connect To         | Lines must connect at endpoints  |

### Benefits of Topology

1. Data integrity enforcement
2. Efficient spatial queries
3. Reduced data redundancy
4. Network analysis support
5. Error detection

---

## 3.6 GIS Data Formats and Conversion

### Vector Formats

| Format     | Extension        | Organization |
| ---------- | ---------------- | ------------ |
| Shapefile  | .shp, .dbf, .shx | ESRI         |
| GeoJSON    | .geojson         | Open         |
| GML        | .gml             | OGC          |
| KML/KMZ    | .kml, .kmz       | Google       |
| GeoPackage | .gpkg            | OGC          |

### Raster Formats

| Format     | Extension | Type        |
| ---------- | --------- | ----------- |
| GeoTIFF    | .tif      | Most common |
| JPEG2000   | .jp2      | Compressed  |
| IMG        | .img      | ERDAS       |
| ASCII Grid | .asc      | Text-based  |
| NetCDF     | .nc       | Scientific  |

### Data Conversion

**Vectorization:** Raster → Vector
**Rasterization:** Vector → Raster

---

## 3.7 Spatial Database Design

### Geodatabase Concepts

**Geodatabase:** Container for GIS data in RDBMS.

**Types:**

- Personal Geodatabase (Access)
- File Geodatabase (.gdb folder)
- Enterprise Geodatabase (Oracle, PostgreSQL)

### Design Steps

1. Requirements analysis
2. Conceptual design (ER diagram)
3. Logical design (tables, relationships)
4. Physical design (implementation)

---

## 📚 Important Questions

1. "Geographic objects and fields" (2082)
2. "Raster vs Vector data models" (Model, 2081)
3. "Spaghetti vs Topological models" (2081)
4. "Connectivity, adjacency, containment" (Model)
5. "Basic elements of raster model. Local operation?" (Model)

---

## 🔗 Additional Resources

**Textbooks:**

- Chang, K.T. Chapter 3, 5

**Online:**

- ESRI Geodatabase documentation
- PostGIS topology

> 🖼️ **IMAGE SUGGESTION:** Side-by-side raster vs vector representation of same features
