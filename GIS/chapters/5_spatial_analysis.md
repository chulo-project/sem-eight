# Chapter 5: Spatial Analysis

**⏰ Teaching Hours: 10 | 📌 Core GIS Chapter - Very Important**

---

## 🎯 Learning Objectives

- Master vector data analysis operations
- Understand raster analysis operations
- Learn spatial interpolation techniques
- Introduction to GIS programming

---

## 5.1 Vector Data Analysis ⭐⭐⭐

### Geoprocessing Operations

**1. Buffer ⭐⭐⭐**

**Definition:** Creates zones around features at specified distance.

**Applications:**

- Protected areas around rivers (100m buffer)
- Serviceradius around facilities
- Noise zones around airports

**Types:**

- Single buffer
- Multiple ring buffer
- Dissolve buffer (merge overlapping)

**Why Vector Buffering? ⭐⭐**

- Smooth, precise boundaries
- Smaller file size
- Maintains topology
- Variable distance possible
- Attribute preservation

### 2. Overlay Analysis ⭐⭐⭐

**Definition:** Combining two or more layers to create new output.

**Types:**

| Operation     | Description           | Output                  |
| ------------- | --------------------- | ----------------------- |
| **Intersect** | Common area only      | Features in both layers |
| **Union**     | All features combined | All from both layers    |
| **Clip**      | Cut using boundary    | Input inside clip       |
| **Erase**     | Remove overlapping    | Input minus overlap     |
| **Identity**  | Preserve input shape  | Add overlay attributes  |

### Point/Line/Polygon Overlay ⭐⭐⭐

**Point in Polygon:**

- Points get polygon attributes
- Example: Schools get district name

**Line in Polygon:**

- Lines split at boundaries
- Segments get polygon attributes
- Example: Roads by land use zone

**Polygon on Polygon:**

- Creates new polygons at intersections
- Most complex operation
- Example: Soil type × Land use

### 3. Network Analysis

**Shortest Path:** Find optimal route
**Service Area:** Reachable area from point
**Closest Facility:** Nearest service point
**Route Optimization:** Visit multiple stops efficiently

---

## 5.2 Raster Analysis ⭐⭐⭐

### Types of Raster Operations

### 1. Local Operations ⭐⭐⭐

**Definition:** Output cell depends ONLY on corresponding input cell(s).

**Also Called:** Cell-by-cell operations

**Examples:**

- Raster math: A + B, A × B
- Reclassification
- Conditional: IF-THEN-ELSE

```
Local: Output[i,j] = f(Input[i,j])
```

### 2. Focal Operations ⭐⭐⭐

**Definition:** Output cell depends on neighborhood/window.

**Also Called:** Neighborhood operations

**Examples:**

- Mean filter (smoothing)
- Slope and aspect
- Edge detection

```
Focal: Output[i,j] = f(Input[i-1..i+1, j-1..j+1])
```

**Moving Window:**

```
┌─┬─┬─┐
│ │ │ │
├─┼─┼─┤
│ │●│ │ ← Output at center cell
├─┼─┼─┤
│ │ │ │
└─┴─┴─┘
```

### Local vs Focal ⭐⭐⭐

| Local                        | Focal               |
| ---------------------------- | ------------------- |
| Uses only corresponding cell | Uses neighborhood   |
| Position independent         | Position dependent  |
| Math operations              | Statistical/filters |
| Fast processing              | Slower              |
| Example: Reclassify          | Example: Slope      |

### 3. Zonal Operations

**Definition:** Calculate statistics for zones/regions.

**Examples:**

- Average elevation per district
- Sum of population per region
- Maximum temperature per zone

```
Zonal: Output = f(all cells in zone)
```

### 4. Global Operations

**Definition:** Uses all cells in raster.

**Examples:**

- Viewshed analysis
- Flow direction/accumulation
- Cost distance
- Optimal path

### 5. Distance Operations

- **Euclidean Distance:** Straight-line distance
- **Cost Distance:** Weighted by friction
- **Allocation:** Nearest source

### 6. Resampling

**Definition:** Change cell size or alignment.

**Methods:**
| Method | Best For |
|--------|----------|
| Nearest Neighbor | Categorical data |
| Bilinear | Continuous data (smooth) |
| Cubic | Continuous (smoothest) |

### 7. Mosaic and Clip

**Mosaic:** Combine adjacent rasters
**Clip:** Extract subset using boundary

---

## 5.3 Spatial Interpolation Techniques ⭐⭐⭐

### Definition

Estimate values at unsampled locations from known sample points.

### Interpolation Methods

**1. IDW (Inverse Distance Weighting) ⭐⭐**

**Principle:** Closer points have more influence.

**Formula:**

```
Z(s₀) = Σ(wᵢ × Z(sᵢ)) / Σwᵢ
where wᵢ = 1/dᵢᵖ
```

**Characteristics:**

- Simple, fast
- Exact at sample points
- Power parameter (p) controls influence

**2. Kriging ⭐⭐**

**Principle:** Statistical method using spatial correlation.

**Steps:**

1. Analyze spatial autocorrelation (variogram)
2. Fit variogram model
3. Predict using kriging equations

**Advantages:**

- Provides error estimates
- Uses spatial structure
- Optimal interpolation

**3. Spline**

**Principle:** Mathematical function passing through points.

**Types:**

- Regularized: Smooth surface
- Tension: Controls stiffness

**4. Natural Neighbor**

**Principle:** Uses Voronoi/Thiessen polygons.

**5. TIN (Triangulated Irregular Network)**

**Principle:** Triangles connecting points.

**Use:** Terrain modeling with breaklines.

### Choosing Interpolation Method

| Situation                   | Recommended |
| --------------------------- | ----------- |
| Evenly distributed points   | IDW         |
| Statistical analysis needed | Kriging     |
| Smooth surface desired      | Spline      |
| Terrain with breaklines     | TIN         |

---

## 5.4 GIS Programming and Customization ⭐⭐

### Model Builder

**Definition:** Visual programming environment in ArcGIS.

**Benefits:**

- No coding required
- Document workflows
- Reusable models
- Batch processing

### Python Scripting ⭐⭐

**Why Python in GIS:**

- Automation
- Custom tools
- Batch processing
- Integration

**ArcPy Example:**

```python
import arcpy

# Set workspace
arcpy.env.workspace = "C:/data"

# Buffer
arcpy.Buffer_analysis("roads.shp", "buffer.shp", "100 Meters")

# Clip
arcpy.Clip_analysis("landuse.shp", "boundary.shp", "output.shp")

# Select by attribute
arcpy.SelectLayerByAttribute_management(
    "parcels", "NEW_SELECTION", "AREA > 1000")

# Loop through features
with arcpy.da.SearchCursor("parcels", ["FID", "AREA"]) as cursor:
    for row in cursor:
        print(f"ID: {row[0]}, Area: {row[1]}")
```

**PyQGIS Example:**

```python
from qgis.core import *

# Load layer
layer = QgsVectorLayer("path/to/file.shp", "layer_name", "ogr")

# Buffer
buffer = processing.run("native:buffer", {
    'INPUT': layer,
    'DISTANCE': 100,
    'OUTPUT': 'memory:'
})['OUTPUT']

# Count features
print(f"Feature count: {layer.featureCount()}")
```

---

## 📚 Important Questions

1. "Types of vector overlay operations" (Model)
2. "Point/Line/Polygon in polygon differences" (2081)
3. "Local vs Focal operations" (2081)
4. "Raster analysis operations" (2082)
5. "Spatial interpolation techniques" (2081, 2082)
6. "Why vector-based buffering?" (Model)
7. "Python in GIS with example" (2082)

---

## 🔗 Additional Resources

**Textbooks:**

- Chang, K.T. Chapter 9-12 (Analysis)

**Online:**

- ArcPy documentation
- QGIS Python cookbook
- GIS StackExchange

**YouTube:**

- Spatial analysis tutorials
- Python for GIS
