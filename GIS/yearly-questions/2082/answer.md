# GIS 2082 - Answers

---

## Section A (10 Marks Each)

### 1. Raster analysis operations.

#### Raster Analysis Operations

**1. Local Operations (Cell-by-Cell)**

- Output depends only on input cell
- Map algebra: Add, subtract, multiply
- Reclassification
- Example: NDVI = (NIR - Red) / (NIR + Red)

**2. Focal Operations (Neighborhood)**

- Moving window analysis
- Statistics of surrounding cells
- Examples:
  - Slope and aspect
  - Smoothing filters
  - Edge detection

**3. Zonal Operations**

- Statistics within zones
- Zone defined by another layer
- Examples:
  - Average elevation per district
  - Total area per land use type

**4. Global Operations**

- Consider entire raster
- Complex processing
- Examples:
  - Viewshed analysis
  - Flow direction
  - Cost distance

**5. Distance Operations**

- Calculate distance to features
- Euclidean distance
- Cost-weighted distance
- Proximity analysis

**6. Overlay Operations**

- Combine multiple rasters
- Weighted overlay
- Suitability modeling

**7. Resampling**

- Change cell size/resolution
- Methods: Nearest neighbor, bilinear, cubic
- Needed for layer alignment

**8. Mosaic and Clip**

- Mosaic: Combine adjacent rasters
- Clip: Extract subset by boundary

---

### 2. RS and GNSS. Integration in GIS. Practical implications.

#### Remote Sensing (RS)

**Definition:** Acquiring information about Earth without physical contact.

**Components:**

- Energy source
- Sensors (passive/active)
- Platforms (satellite, aircraft, drone)

**Data:** Raster imagery (multispectral, hyperspectral)

#### GNSS (Global Navigation Satellite Systems)

**Definition:** Satellite-based positioning systems.

**Systems:**

- GPS (USA)
- GLONASS (Russia)
- Galileo (EU)
- BeiDou (China)

**Data:** Point coordinates (latitude, longitude, elevation)

#### Integration in GIS

**1. Georeferencing RS Data**

- Use GNSS control points
- Correct geometric distortions
- Improve positional accuracy

**2. Ground Truthing**

- Collect field data with GNSS
- Validate RS classification
- Assess accuracy

**3. Image Interpretation**

- Navigate to RS anomalies
- Verify features on ground
- Update databases

#### Practical Implications

1. **Agricultural Monitoring:** Crop health, yield prediction
2. **Disaster Management:** Damage assessment, relief planning
3. **Urban Planning:** Land use mapping, infrastructure
4. **Environmental Monitoring:** Deforestation, pollution
5. **Transportation:** Route planning, traffic analysis
6. **Utilities:** Asset tracking, network planning

---

### 3. Open concept in GIS. Web-based GIS. Uses.

#### Open Concept in GIS

**Definition:** Promoting interoperability and accessibility through open standards, data, and software.

**Components:**

1. **Open Standards:** OGC standards (WMS, WFS, WCS)
2. **Open Data:** Freely available datasets
3. **Open Source Software:** Free GIS tools

#### Web-Based GIS System

**Definition:** GIS accessed through web browsers over internet.

**Architecture:**

```
Client (Browser) ←→ Web Server ←→ GIS Server ←→ Database
```

**Types:**

1. **Thin Client:** Processing on server
2. **Thick Client:** Processing on browser
3. **Hybrid:** Both

**Technologies:**

- Server: GeoServer, MapServer, ArcGIS Server
- Client: Leaflet, OpenLayers, ArcGIS JavaScript API
- Standards: WMS, WFS, GeoJSON

#### Uses

1. **Public Information:** Citizens access government maps
2. **Emergency Services:** Real-time disaster mapping
3. **Business Intelligence:** Location analytics
4. **Tourism:** Interactive maps
5. **Education:** Learning resources
6. **Participatory Mapping:** Citizen contributions
7. **Asset Management:** Track resources online

---

## Section B (5 Marks Each)

### 4. Open source GIS significance

**Open Source GIS:**

- QGIS, GRASS, PostGIS, GeoServer

**Open Data:**

- OpenStreetMap, USGS, government portals

**Significance:**

1. **Cost:** No licensing fees
2. **Accessibility:** Available to all
3. **Customization:** Modify source code
4. **Community:** Active support, plugins
5. **Standards:** OGC compliance
6. **Transparency:** Reproducible research

---

### 5. SDI components

**Spatial Data Infrastructure Components:**

1. **Data:** Geographic datasets
2. **Metadata:** Data documentation
3. **Standards:** Interoperability rules
4. **Access Networks:** Internet, portals
5. **Policies:** Legal framework, governance
6. **Institutional Framework:** Coordinating bodies
7. **Clearinghouse:** Catalog for discovery

---

### 6. Spatial interpolation techniques

**1. IDW (Inverse Distance Weighting)**

- Closer points = more influence
- Simple, fast

**2. Kriging**

- Statistical method
- Uses variogram
- Provides error estimates

**3. Spline**

- Smooth mathematical surface
- Good for gentle variations

**4. TIN (Triangulated Irregular Network)**

- Triangle-based surface
- Preserves break lines

**5. Natural Neighbor**

- Voronoi-based
- Local method

---

### 7. Georeferencing vs Digitization

**Georeferencing:**

- Assign coordinates to raster
- Use control points (GCPs)
- Match image to real world
- Process: Identify points → Transform

**Digitization:**

- Create vector from raster/paper
- Manual or automated
- Process: Trace features → Save geometry

| Aspect  | Georeferencing    | Digitization       |
| ------- | ----------------- | ------------------ |
| Input   | Raster/image      | Georeferenced map  |
| Output  | Positioned raster | Vector features    |
| Process | Transformation    | Feature extraction |

---

### 8. Geographic phenomena and data modeling

**Geographic Phenomena:**

- Features and events on Earth's surface
- Spatial relationships
- Temporal changes

**Data Modeling:**

- Abstract representation of reality
- Entity-based (objects)
- Field-based (continuous)

**Process:**

1. Identify real-world features
2. Classify features
3. Define attributes
4. Choose data model (raster/vector)
5. Create database schema

---

### 9. Map projection. How it works.

**Definition:** Transforming 3D Earth to 2D map.

**How It Works:**

1. Define reference ellipsoid
2. Choose projection surface (cylinder/cone/plane)
3. Define projection center and orientation
4. Apply mathematical transformation
5. Result: Flat map with some distortion

**Distortions:**

- Shape (conformality)
- Area (equivalence)
- Distance
- Direction

---

### 10. Functions of GIS

1. **Data Capture:** Input geographic data
2. **Data Storage:** Organize in database
3. **Data Retrieval:** Query and search
4. **Data Manipulation:** Edit and transform
5. **Data Analysis:** Spatial operations
6. **Data Display:** Visualization and mapping
7. **Data Output:** Print, export, share

---

### 11. Python in GIS with example

**Uses:**

- Automate repetitive tasks
- Custom geoprocessing
- Data analysis
- Tool development

**Example (ArcPy):**

```python
import arcpy

# Set workspace
arcpy.env.workspace = "C:/data"

# Buffer analysis
arcpy.Buffer_analysis("roads.shp", "buffer.shp", "100 Meters")

# Select by attribute
arcpy.SelectLayerByAttribute_management("parcels", "NEW_SELECTION", "AREA > 1000")

# Clip
arcpy.Clip_analysis("landuse.shp", "boundary.shp", "output.shp")
```

---

### 12. Short notes

**a) Metadata:**

- "Data about data"
- Contents: Title, source, date, accuracy
- Enables discovery and evaluation
- Standards: ISO 19115

**b) Thematic Map:**

- Shows specific theme/topic
- Examples: Population density, land use
- Uses symbols, colors
- Types: Choropleth, proportional symbol

---

## 📚 Resources

- Chang "Introduction to GIS"
- QGIS and ArcGIS tutorials
- Python scripting guides
