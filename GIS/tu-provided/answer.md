# GIS - Model Question Answers

**CSC468 | Eighth Semester | Model 2079**

---

## Section A (10 Marks Each)

### 1. Define geographical object and field. Differentiate between raster and vector data models with illustrations.

#### Geographical Objects

**Discrete, bounded features** that can be precisely located in space.

**Characteristics:**

- Well-defined boundaries
- Can be counted
- Identifiable entities

**Examples:** Buildings, roads, rivers, administrative boundaries

#### Geographical Fields

**Continuous phenomena** that exist at every point in space.

**Characteristics:**

- No distinct boundaries
- Values vary continuously
- Cannot identify distinct features

**Examples:** Temperature, elevation, rainfall, air pollution

#### Raster vs Vector Data Models

| Aspect           | Raster                   | Vector                    |
| ---------------- | ------------------------ | ------------------------- |
| **Structure**    | Grid of cells (pixels)   | Points, lines, polygons   |
| **Data Storage** | Cell values              | Coordinate pairs          |
| **Boundaries**   | Stepped/jagged           | Smooth/precise            |
| **File Size**    | Larger (high resolution) | Smaller (simple shapes)   |
| **Topology**     | Implicit                 | Explicit                  |
| **Best For**     | Continuous data          | Discrete features         |
| **Analysis**     | Cell-by-cell operations  | Network/overlay analysis  |
| **Examples**     | Satellite images, DEM    | Parcels, roads, buildings |

**Raster Representation:**

```
┌─┬─┬─┬─┐
│1│1│2│2│  Each cell has a value
├─┼─┼─┼─┤  representing the feature
│1│2│2│3│  or attribute at that
├─┼─┼─┼─┤  location
│2│2│3│3│
└─┴─┴─┴─┘
```

**Vector Representation:**

```
    Point: (x, y)

    Line: [(x1,y1), (x2,y2), (x3,y3)]

    Polygon: [(x1,y1), (x2,y2)...(x1,y1)]
         ___
        /   \
       /     \
      /       \
     /_________\
```

> 🖼️ **IMAGE NEEDED:** Side-by-side comparison of same feature in raster vs vector

---

### 2. What are different coordinate and projection systems used in GIS mapping. Explain in brief.

#### Coordinate Systems

**1. Geographic Coordinate System (GCS)**

- Uses latitude and longitude
- Angular measurements (degrees)
- Based on spherical/ellipsoidal Earth
- Examples: WGS84, NAD83

**Components:**

- Datum (reference ellipsoid)
- Prime meridian
- Angular unit

**2. Projected Coordinate System (PCS)**

- Flat, 2D representation
- Linear measurements (meters, feet)
- Results from map projection
- Examples: UTM, State Plane

#### Map Projection Systems

**1. Cylindrical Projections**

- Earth projected onto cylinder
- Good for areas near equator
- Examples: Mercator, Transverse Mercator

**Universal Transverse Mercator (UTM):**

- Divides Earth into 60 zones (6° wide)
- Each zone has own projection
- Nepal: Zone 44N and 45N

**2. Conic Projections**

- Earth projected onto cone
- Good for mid-latitudes
- Examples: Lambert Conformal Conic, Albers Equal Area

**3. Planar/Azimuthal Projections**

- Earth projected onto flat plane
- Good for polar regions
- Examples: Stereographic, Orthographic

#### Projection Properties (Distortions)

| Property        | Preserves | Distorts    |
| --------------- | --------- | ----------- |
| **Conformal**   | Shape     | Area        |
| **Equal-Area**  | Area      | Shape       |
| **Equidistant** | Distance  | Shape, Area |
| **Azimuthal**   | Direction | Shape, Area |

> 🖼️ **IMAGE NEEDED:** Visual comparison of projection types and global UTM zones

---

### 3. How Remote Sensing is different from GPS? Explain how Remote Sensing works? Differentiate between active and passive sensor?

#### Remote Sensing vs GPS

| Aspect         | Remote Sensing            | GPS                 |
| -------------- | ------------------------- | ------------------- |
| **Purpose**    | Capture Earth imagery     | Determine location  |
| **Data Type**  | Images/raster             | Coordinates         |
| **Technology** | Electromagnetic radiation | Radio signals       |
| **Satellites** | Landsat, Sentinel         | GPS constellation   |
| **Output**     | Maps, imagery             | Latitude, longitude |
| **Resolution** | Spatial (m to km)         | Position (cm to m)  |

#### How Remote Sensing Works

**1. Energy Source**

- Sun (passive) or sensor itself (active)
- Electromagnetic radiation

**2. Transmission through Atmosphere**

- Radiation travels to Earth
- Atmospheric effects (absorption, scattering)

**3. Interaction with Target**

- Reflection, absorption, transmission
- Depends on surface properties

**4. Detection by Sensor**

- Sensor records reflected/emitted energy
- Converts to electrical signal

**5. Data Processing**

- Radiometric/geometric corrections
- Enhancement and classification

**6. Analysis and Application**

- Interpretation
- GIS integration

#### Active vs Passive Sensors

| Aspect            | Passive Sensor     | Active Sensor        |
| ----------------- | ------------------ | -------------------- |
| **Energy Source** | External (sun)     | Self-generated       |
| **Operation**     | Daytime only       | Day and night        |
| **Weather**       | Affected by clouds | Works through clouds |
| **Examples**      | Landsat, MODIS     | Radar (SAR), LiDAR   |
| **Wavelengths**   | Visible, IR        | Microwave, laser     |
| **Cost**          | Lower              | Higher               |

**Passive Example:** Camera recording sunlight reflected from surface
**Active Example:** Radar transmitting signal and receiving reflection

---

## Section B (5 Marks Each)

### 4. Explain the functions of a GIS. How GIS is different from other DBMS?

#### GIS Functions:

1. **Data Input:** Digitizing, scanning, importing
2. **Data Management:** Storage, organization, retrieval
3. **Data Manipulation:** Transformation, conversion
4. **Data Analysis:** Overlay, buffering, network analysis
5. **Data Output:** Maps, reports, visualization

#### GIS vs DBMS:

| GIS                              | DBMS                     |
| -------------------------------- | ------------------------ |
| Handles spatial + attribute data | Primarily attribute data |
| Spatial queries (within, near)   | SQL queries              |
| Map visualization                | Tabular display          |
| Topology support                 | No topology              |
| Coordinate systems               | No coordinate handling   |

---

### 5. Describe the main ways of acquiring data for input into a GIS.

**1. Primary Data Collection:**

- Field surveys with GPS
- Total station measurements
- Drone/UAV imagery

**2. Secondary Data Sources:**

- Digitizing paper maps
- Scanning and georeferencing
- Purchasing from vendors

**3. Remote Sensing:**

- Satellite imagery
- Aerial photography
- LiDAR data

**4. Existing Digital Data:**

- OpenStreetMap
- Government data portals
- Data sharing platforms

---

### 6. Describe the different types of vector overlay operations with suitable examples.

**1. Union:** Combines all features from both layers

- Example: Combine forest and wetland boundaries

**2. Intersect:** Keeps only overlapping areas

- Example: Find forested areas within protected zones

**3. Clip:** Cuts features using boundary

- Example: Extract roads within district boundary

**4. Erase:** Removes overlapping areas

- Example: Remove built-up areas from forest layer

**5. Identity:** Preserves input features with overlay attributes

- Example: Add soil type to land parcels

---

### 7. What are the different errors in GPS? How they can be corrected?

#### GPS Errors:

1. **Ionospheric delay:** Signal slows through ionosphere
2. **Tropospheric delay:** Signal affected by atmosphere
3. **Multipath:** Signal bounces off surfaces
4. **Satellite clock errors:** Clock drift
5. **Orbital errors:** Imprecise satellite positions
6. **Receiver noise:** Electronic noise

#### Corrections:

- **Differential GPS (DGPS):** Use base station corrections
- **Real-Time Kinematic (RTK):** Carrier phase corrections
- **Dual-frequency receivers:** Compare L1 and L2 signals
- **WAAS/SBAS:** Wide area augmentation
- **Post-processing:** Correct after data collection

---

### 8. Describe the basic elements of the raster data model. Why is a local operation also called a cell-by-cell operation?

#### Raster Elements:

1. **Cell (Pixel):** Basic unit with single value
2. **Resolution:** Cell size (e.g., 30m × 30m)
3. **Rows and Columns:** Grid dimensions
4. **Bands:** Multiple layers (multispectral)
5. **Extent:** Geographic coverage
6. **Origin:** Reference corner coordinate

#### Local Operations = Cell-by-Cell

Local operations process each cell independently:

- Output cell value depends only on corresponding input cell(s)
- No neighboring cells considered
- Example: Raster math (A + B at each cell position)

---

### 9. Vector-based buffering vs raster-based distance. Why vector?

#### Reasons for Vector Buffering:

1. **Precision:** Creates smooth, accurate boundaries
2. **Size:** Smaller file size
3. **Topological integrity:** Maintains relationships
4. **Variable distances:** Distance can vary along feature
5. **Multiple rings:** Easy to create concentric buffers
6. **Attribute preservation:** Links to source features

Raster distance creates stepped boundaries and larger files.

---

### 10. Explain connectivity, adjacency and containment in vector topology.

#### Connectivity

Links between features (sharing nodes).

- **Example:** Road network where roads meet at intersections

#### Adjacency

Features sharing common boundary.

- **Example:** Two adjacent land parcels sharing a boundary line

#### Containment

Feature completely inside another.

- **Example:** Building polygon inside a land parcel polygon

These relationships enable spatial queries: "Which roads connect?" "What parcels are adjacent?" "What's inside this boundary?"

---

### 11. Describe spatial data infrastructure. Mention the contents of Metadata.

#### Spatial Data Infrastructure (SDI)

Framework of policies, standards, and technologies for sharing geospatial data.

**Components:**

- Data, Metadata, Standards, Policies, Access networks

#### Metadata Contents:

1. **Identification:** Title, abstract, keywords
2. **Data Quality:** Accuracy, completeness
3. **Spatial Reference:** Coordinate system, projection
4. **Entity/Attribute:** Feature descriptions
5. **Distribution:** Format, access, contact
6. **Lineage:** Data source, processing history

---

### 12. Write short notes on:

#### a) Geoid and Ellipsoids

**Geoid:** Irregular, gravitational equipotential surface matching mean sea level.

**Ellipsoid:** Mathematical approximation of Earth's shape (flattened sphere).

**Relationship:** Ellipsoid is a smooth reference; geoid shows actual gravity variations.

#### b) Open GIS

**Open GIS** promotes interoperability in geospatial systems.

**OGC Standards:**

- WMS (Web Map Service)
- WFS (Web Feature Service)
- WCS (Web Coverage Service)

**Open Source GIS:** QGIS, GRASS, PostGIS

---

## 📚 Resources

- Chang, K.T. "Introduction to GIS"
- ESRI training materials
- YouTube: GIS tutorials
- QGIS documentation
