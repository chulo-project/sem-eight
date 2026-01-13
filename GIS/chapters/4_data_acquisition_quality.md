# Chapter 4: Data Acquisition, Data Quality and Management

**⏰ Teaching Hours: 9 | 📌 Heavy Chapter - Includes RS and GNSS**

---

## 🎯 Learning Objectives

- Learn data capture methods
- Understand georeferencing and digitization
- Learn about GNSS and Remote Sensing
- Understand data quality concepts

---

## 4.1 Methods of Data Capture ⭐⭐⭐

### 1. Primary Data Collection

**Field Surveys:**

- GPS surveys
- Total station measurements
- Mobile GIS data collection

**Drone/UAV:**

- Aerial photography
- Photogrammetry
- LiDAR scanning

### 2. Digitizing

**Definition:** Converting paper maps to digital format.

**Types:**

- **Manual digitizing:** Tracing with digitizer/mouse
- **Heads-up digitizing:** On-screen tracing
- **Automatic digitizing:** Software extraction

### 3. Scanning

- Convert paper to raster image
- Requires georeferencing
- May need vectorization

### 4. Remote Sensing

- Satellite imagery
- Aerial photography
- Data extraction through classification

### 5. Existing Data Sources

- Government agencies
- OpenStreetMap
- Commercial providers
- Data sharing platforms

---

## 4.2 Georeferencing and Digitization ⭐⭐⭐

### Georeferencing

**Definition:** Assigning real-world coordinates to raster image.

**Process:**

1. Identify Ground Control Points (GCPs)
2. Match image points to known coordinates
3. Apply transformation
4. Resample image

**Transformation Types:**
| Type | GCPs Needed | Description |
|------|-------------|-------------|
| 1st Order (Affine) | 3+ | Scale, rotate, shift |
| 2nd Order (Polynomial) | 6+ | Allows curves |
| 3rd Order | 10+ | Complex distortions |
| Spline | Variable | Exact fit at GCPs |

### Digitization

**Definition:** Creating vector features from source (map, image).

**Steps:**

1. Set up coordinate system
2. Create feature class (point, line, polygon)
3. Define attributes
4. Trace features
5. Edit and clean topology

### Georeferencing vs Digitization ⭐⭐

| Georeferencing                 | Digitization                |
| ------------------------------ | --------------------------- |
| Assigning coordinates to image | Creating vector features    |
| Raster input, raster output    | Raster input, vector output |
| Transformation matrices        | Feature tracing             |
| Uses GCPs                      | Uses georeferenced image    |

---

## 4.3 Data Preparation, Conversion and Integration

### Data Preparation

- Format conversion
- Coordinate transformation
- Attribute cleaning
- Topology building

### Data Integration

- Combining datasets from different sources
- Schema matching
- Conflation (matching features)
- Edge matching

---

## 4.4 Spatial Data Quality and Accuracy ⭐⭐⭐

### Quality Components

**1. Positional Accuracy**

- How close to true location
- Measured as RMSE

**2. Attribute Accuracy**

- Correctness of attributes
- Classification accuracy

**3. Completeness**

- All features captured?
- Missing data

**4. Logical Consistency**

- Topology valid?
- Relationships correct

**5. Temporal Accuracy**

- Data currency
- Update frequency

### Accuracy vs Precision ⭐⭐⭐

**Accuracy:** Closeness to true value
**Precision:** Closeness of repeated measurements

|                    | High Accuracy | Low Accuracy     |
| ------------------ | ------------- | ---------------- |
| **High Precision** | Ideal         | Systematic error |
| **Low Precision**  | Random error  | Worst case       |

> 🖼️ **TARGET DIAGRAM:** Shows accuracy vs precision

---

## 4.5 Global Navigation Satellite Systems (GNSS) ⭐⭐⭐

### Definition

Satellite-based positioning systems providing location anywhere on Earth.

### Systems

| System  | Country | Satellites |
| ------- | ------- | ---------- |
| GPS     | USA     | 31         |
| GLONASS | Russia  | 24         |
| Galileo | EU      | 30         |
| BeiDou  | China   | 35         |

### How GPS Works ⭐⭐⭐

**Components:**

1. **Space Segment:** Satellites
2. **Control Segment:** Ground stations
3. **User Segment:** Receivers

**Principle:**

1. Satellite broadcasts signal with timestamp
2. Receiver calculates travel time
3. Distance = Time × Speed of light
4. Trilateration with 3+ satellites
5. 4th satellite corrects clock error

### GPS Errors ⭐⭐

| Error           | Cause               | Effect   |
| --------------- | ------------------- | -------- |
| Ionospheric     | Signal delay        | ±5m      |
| Tropospheric    | Atmosphere          | ±0.5m    |
| Multipath       | Signal bounce       | ±1m      |
| Satellite Clock | Clock drift         | ±2m      |
| Ephemeris       | Orbital uncertainty | ±2.5m    |
| Receiver Noise  | Electronics         | ±0.3m    |
| GDOP            | Poor geometry       | Variable |

### Error Correction

**DGPS (Differential GPS):**

- Base station at known location
- Calculates correction
- Transmits to rover

**RTK (Real-Time Kinematic):**

- Uses carrier phase
- Centimeter accuracy
- Real-time corrections

---

## 4.6 Remote Sensing (RS) Technology ⭐⭐⭐

### Definition

Acquiring information about Earth's surface without physical contact.

### RS Process

1. **Energy Source:** Sun or sensor
2. **Transmission:** Through atmosphere
3. **Interaction:** With surface
4. **Detection:** By sensor
5. **Processing:** Digital processing
6. **Analysis:** Interpretation

### Active vs Passive Sensors ⭐⭐⭐

| Aspect        | Passive        | Active         |
| ------------- | -------------- | -------------- |
| Energy Source | External (sun) | Self-generated |
| Operation     | Daytime only   | Day and night  |
| Weather       | Cloud affected | Through clouds |
| Examples      | Landsat, MODIS | Radar, LiDAR   |
| Cost          | Lower          | Higher         |

### Common Satellites

| Satellite  | Resolution | Applications          |
| ---------- | ---------- | --------------------- |
| Landsat    | 30m        | Land use, vegetation  |
| Sentinel-2 | 10m        | Agriculture, forestry |
| MODIS      | 250-1000m  | Climate, vegetation   |
| WorldView  | 0.3m       | Urban, mapping        |

---

## 4.7 Integration of RS and GNSS in GIS ⭐⭐

### Integration Methods

1. **Georeferencing RS imagery** using GNSS control points
2. **Ground truthing** RS classification with field GPS data
3. **Combining** GPS tracks with satellite imagery
4. **Updating** GIS databases from RS data

### Practical Implications

1. **Agriculture:** Crop monitoring, precision farming
2. **Disaster Management:** Damage assessment
3. **Urban Planning:** Change detection
4. **Environment:** Deforestation monitoring
5. **Transportation:** Route planning with imagery

---

## 📚 Important Questions

1. "Main ways of acquiring data?" (Model)
2. "Georeferencing vs Digitization" (2082)
3. "Accuracy vs Precision with diagram" (2081)
4. "GPS vs Remote Sensing" (2081)
5. "How GPS works? GPS errors?" (Model, 2081)
6. "Active vs Passive sensors" (Model, 2081)
7. "RS and GNSS integration in GIS" (2082)

---

## 🔗 Additional Resources

**Textbooks:**

- Chang, K.T. Chapter 4, 6

**Online:**

- USGS Earth Explorer (free satellite data)
- GPS.gov

**YouTube:**

- GPS explained
- Remote sensing basics
