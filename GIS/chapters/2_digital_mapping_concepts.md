# Chapter 2: Digital Mapping Concepts and Visualization

**⏰ Teaching Hours: 5 | 📌 Important for Understanding GIS**

---

## 🎯 Learning Objectives

- Understand database and mapping concepts
- Learn map design elements
- Master coordinate and projection systems

---

## 2.1 Database and Mapping Concepts

### Geographic Features and Attributes

**Feature:** Real-world object represented in GIS

- Natural: rivers, mountains, forests
- Man-made: roads, buildings, boundaries

**Attributes:** Properties describing features

- Qualitative: name, type, category
- Quantitative: area, population, length

### Thematic Maps

**Definition:** Maps that focus on specific themes or topics.

**Types:**
| Type | Description | Example |
|------|-------------|---------|
| **Choropleth** | Colors by area values | Population density |
| **Proportional Symbol** | Size varies by value | City population |
| **Dot Density** | Dots represent quantities | Crop distribution |
| **Isopleth** | Contour lines | Temperature, elevation |
| **Flow Map** | Movement patterns | Migration, trade |

### Map Layers

**Concept:** Different geographic themes stored as separate layers.

```
    Layer 5: Labels
    Layer 4: Points of Interest
    Layer 3: Roads
    Layer 2: Buildings
    Layer 1: Parcels
    Base:    Satellite Image
```

**Benefits:**

- Organize complex data
- Selective display
- Independent analysis
- Easy updates

### Map Scales ⭐⭐

**Definition:** Ratio between map distance and ground distance.

**Expression:**

- Representative Fraction: 1:50,000
- Verbal: "1 cm = 500 m"
- Bar Scale: Graphic representation

**Scale Types:**
| Scale | Ratio | Detail | Coverage |
|-------|-------|--------|----------|
| Large | 1:5,000 | High | Small area |
| Medium | 1:50,000 | Medium | Medium |
| Small | 1:1,000,000 | Low | Large area |

### Resolution and Representation

**Spatial Resolution:** Smallest detectable feature

- Raster: Cell/pixel size
- Vector: Vertex density

**Temporal Resolution:** Frequency of data updates

**Spectral Resolution:** Number of wavelength bands (remote sensing)

---

## 2.2 Map Outputs and Elements ⭐⭐

### Essential Map Elements

1. **Title:** What the map shows
2. **Legend:** Symbol explanation
3. **Scale:** Map-to-ground ratio
4. **North Arrow:** Orientation
5. **Date:** When created/data date
6. **Source:** Data origin
7. **Projection:** Coordinate system used

### Optional Elements

- **Neat Line:** Border around map
- **Inset Map:** Overview or detail
- **Grid/Graticule:** Coordinate reference
- **Credits:** Author, organization
- **Disclaimer:** Data limitations

### Map Design Principles

1. **Visual Hierarchy:** Important features prominent
2. **Balance:** Even distribution of elements
3. **Contrast:** Distinguish features
4. **Legibility:** Readable at intended size
5. **Figure-Ground:** Distinguish subject from background

---

## 2.3 Map Projection ⭐⭐⭐

### Why Projections?

**Problem:** Earth is 3D sphere, maps are 2D flat
**Solution:** Mathematical transformation (projection)

### Projection Surfaces

**1. Cylindrical**

- Earth projected onto cylinder
- Unrolled to flat surface
- Good for equatorial regions
- Example: Mercator

**2. Conic**

- Earth projected onto cone
- Unrolled to flat
- Good for mid-latitudes
- Example: Lambert Conformal Conic

**3. Planar/Azimuthal**

- Earth projected onto plane
- Good for polar regions
- Example: Stereographic

### Projection Properties

Every projection distorts some properties:

| Property        | Preserves    | Example                 |
| --------------- | ------------ | ----------------------- |
| **Conformal**   | Shape/angles | Mercator                |
| **Equal-Area**  | Area         | Albers                  |
| **Equidistant** | Distance     | Equidistant Cylindrical |
| **Azimuthal**   | Direction    | Gnomonic                |

**Note:** No projection preserves all properties!

### Coordinate Systems ⭐⭐⭐

**1. Geographic Coordinate System (GCS)**

- Uses latitude and longitude
- Angular units (degrees)
- Based on ellipsoid
- Example: WGS84

```
Latitude: 27.7° N (North/South from equator)
Longitude: 85.3° E (East/West from prime meridian)
```

**2. Projected Coordinate System (PCS)**

- Uses X, Y coordinates
- Linear units (meters, feet)
- Based on map projection
- Example: UTM Zone 45N

### UTM (Universal Transverse Mercator) ⭐⭐⭐

**Features:**

- 60 zones, each 6° wide
- Numbered 1-60 from 180°W
- N/S hemispheres separate
- False easting: 500,000m
- False northing: 0 (N), 10,000,000 (S)

**Nepal:** Zones 44N and 45N

### Coordinate Conversion

**GCS to PCS:**

```
Input: Lat 27.7°N, Long 85.3°E (WGS84)
       ↓ (Projection)
Output: X 317,456m, Y 3,065,789m (UTM 45N)
```

---

## 📚 Important Questions

1. "Map scale and resolution" (2081)
2. "Map elements" (2081)
3. "Types of map projections. Explain UTM" (2081)
4. "What is map projection? How it works?" (2082)
5. "Coordinate systems in GIS" (Model)

---

## 🔗 Additional Resources

**Textbooks:**

- Chang, K.T. Chapter 2

**Online:**

- EPSG.io (coordinate system database)
- Proj4 documentation

> 🖼️ **IMAGE SUGGESTION:** Projection comparison showing Mercator vs Equal-Area
