# GIS 2081 - Answers

---

## Section A (10 Marks Each)

### 1. Functions of GIS. Raster vs Vector data models.

#### GIS Functions:

**1. Data Input**

- Digitizing maps
- Importing digital data
- GPS data capture
- Scanning and georeferencing

**2. Data Management**

- Database storage
- Data organization
- Metadata management
- Version control

**3. Data Manipulation**

- Coordinate transformation
- Format conversion
- Data editing
- Attribute management

**4. Data Analysis**

- Overlay operations
- Buffering
- Network analysis
- Spatial statistics

**5. Data Output**

- Map production
- Report generation
- Data export
- Web mapping

#### Raster vs Vector

| Aspect         | Raster           | Vector                  |
| -------------- | ---------------- | ----------------------- |
| **Structure**  | Grid of cells    | Points, lines, polygons |
| **Storage**    | Cell values      | Coordinates             |
| **File Size**  | Large (high res) | Smaller                 |
| **Boundaries** | Stepped          | Smooth                  |
| **Analysis**   | Cell-by-cell     | Network/overlay         |
| **Best For**   | Continuous data  | Discrete features       |
| **Sources**    | Satellite, DEM   | Digitizing, GPS         |

**Illustrations:**

- Raster: Grid showing elevation values
- Vector: Road network with nodes and lines

---

### 2. Overlay operation. Point/Line/Polygon in polygon.

#### Overlay Operation

**Definition:** Combining two or more spatial layers to create new layer with combined attributes.

**Applications:**

1. Suitability analysis
2. Change detection
3. Impact assessment
4. Resource allocation

#### Types of Overlay

**Point in Polygon:**

- Determine which polygon contains each point
- Example: Which district does each school belong to?
- Result: Points get polygon attributes

**Line in Polygon:**

- Lines split at polygon boundaries
- Line segments assigned polygon attributes
- Example: Roads within each administrative unit

**Polygon on Polygon:**

- Combine two polygon layers
- New polygons at intersections
- Example: Land use × soil type map
- Most complex, creates slivers

| Operation          | Result                              | Example              |
| ------------------ | ----------------------------------- | -------------------- |
| Point in Polygon   | Points with polygon attributes      | Schools in districts |
| Line in Polygon    | Split lines with polygon attributes | Roads by land use    |
| Polygon on Polygon | New polygons from intersection      | Soil × vegetation    |

---

### 3. GPS vs Remote Sensing. How GPS works. GPS errors.

#### GPS vs Remote Sensing

| Aspect         | GPS                    | Remote Sensing     |
| -------------- | ---------------------- | ------------------ |
| **Purpose**    | Position determination | Earth observation  |
| **Output**     | Coordinates            | Images             |
| **Technology** | Radio signals          | EM radiation       |
| **Accuracy**   | cm to m                | m to km            |
| **Real-time**  | Yes                    | Often delayed      |
| **Weather**    | Less affected          | Cloud interference |

#### How GPS Works

**Components:**

1. **Space Segment:** 24+ satellites in 6 orbital planes
2. **Control Segment:** Ground stations monitoring satellites
3. **User Segment:** GPS receivers

**Working Principle:**

1. Satellite broadcasts signal with timestamp
2. Receiver records arrival time
3. Distance = (travel time) × (speed of light)
4. Trilateration with 3+ satellites
5. 4th satellite for timing correction

**Triangulation:**

- Each satellite defines a sphere
- Intersection of 3 spheres = position
- 4th satellite eliminates clock error

#### GPS Errors

1. **Ionospheric delay:** Signal slows in ionosphere (±5m)
2. **Tropospheric delay:** Atmospheric effects (±0.5m)
3. **Multipath:** Signal bounces off surfaces (±1m)
4. **Satellite clock error:** (±2m)
5. **Ephemeris error:** Orbital position uncertainty (±2.5m)
6. **Receiver noise:** Electronic interference (±0.3m)
7. **GDOP:** Poor satellite geometry

---

## Section B (5 Marks Each)

### 4. Spatial vs attribute data. Joining them.

**Spatial Data:**

- Location information
- Geometry (coordinates)
- Geographic features
- Example: Building polygon

**Attribute Data:**

- Descriptive information
- Non-spatial properties
- Example: Building name, floors, area

**Joining:**

- Common key between tables
- Spatial table has geometry + key
- Attribute table has key + properties
- Join on key to link attributes to features

---

### 5. Accuracy vs Precision with diagrams

**Accuracy:** Closeness to true value
**Precision:** Closeness of repeated measurements

|                    | High Accuracy  | Low Accuracy     |
| ------------------ | -------------- | ---------------- |
| **High Precision** | Best case      | Systematic error |
| **Low Precision**  | Variable error | Worst case       |

**Diagram (Target analogy):**

- Accurate + Precise: All shots at bullseye
- Accurate + Imprecise: Scattered around bullseye
- Inaccurate + Precise: Clustered away from bullseye
- Inaccurate + Imprecise: Scattered away from bullseye

---

### 6. Local vs Focal operations

**Local Operations:**

- Output cell = function of corresponding input cell(s)
- Cell-by-cell processing
- No neighbors considered
- Example: A + B, raster reclassify

**Focal Operations:**

- Output cell = function of neighborhood
- Moving window analysis
- Consider surrounding cells
- Example: Slope, aspect, smoothing

---

### 7. Map projection methods. UTM.

**Projection Methods:**

1. **Cylindrical:** Earth onto cylinder (Mercator)
2. **Conic:** Earth onto cone (Lambert)
3. **Planar/Azimuthal:** Earth onto plane (Stereographic)

**UTM (Universal Transverse Mercator):**

- 60 zones, each 6° wide
- Each zone has central meridian
- False easting: 500,000m
- Uses Transverse Mercator projection
- Nepal: Zones 44N and 45N

---

### 8. Spaghetti vs Topological vector models

**Spaghetti:**

- No topology
- Independent features
- Duplicate boundaries stored
- Simpler structure
- No adjacency information

**Topological:**

- Explicit relationships
- Shared boundaries stored once
- Connectivity, adjacency, containment
- More complex structure
- Supports spatial queries

---

### 9. Interpolation techniques

**Definition:** Estimate values at unsampled locations.

**Types:**

1. **IDW (Inverse Distance Weighting):** Weight by distance
2. **Kriging:** Statistical method, considers spatial correlation
3. **Spline:** Smooth surface through points
4. **Natural Neighbor:** Voronoi-based
5. **TIN:** Triangulated Irregular Network

---

### 10. Active vs Passive sensors

**Passive Sensors:**

- Use external energy (sun)
- Daytime only
- Affected by clouds
- Examples: Landsat, MODIS
- Cheaper

**Active Sensors:**

- Generate own energy
- Day/night operation
- Penetrate clouds
- Examples: Radar (SAR), LiDAR
- More expensive

---

### 11. Web-based GIS. Benefits.

**Definition:** GIS accessed through web browsers.

**Benefits:**

1. No software installation
2. Accessible from anywhere
3. Real-time data sharing
4. Collaborative mapping
5. Cost-effective
6. Automatic updates

**Examples:** Google Maps, ArcGIS Online, Leaflet

---

### 12. Short notes

**a) Map Elements:**

- Title, legend, north arrow
- Scale bar, grid/graticule
- Data source, date
- Neat line, inset map

**b) Map Scale and Resolution:**

- Scale: Ratio of map to ground distance (1:50000)
- Resolution: Smallest detectable feature
- Large scale = high detail
- Small scale = overview

---

## 📚 Resources

- Chang "Introduction to GIS"
- ESRI tutorials
- QGIS documentation
