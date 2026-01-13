# Geographical Information System (GIS) Study Guide

This guide is based on the Tribhuvan University syllabus for CSC468 (Geographical Information System).

## Unit 1: Introduction to Geographic Information System (GIS) (5 Hrs.)

### Key Topics

- **Overview:**
  - Definition of GIS.
  - Components: Hardware, Software, Data, People, Methods.
- **History:** Origin of GIS, evolution of geospatial technology.
- **Functions & Benefits:**
  - Capture, Store, Query, Analyze, Display.
  - Benefits for decision making, resource management, etc.
- **Scope & Applications:** Urban planning, Agriculture, Disaster Management, etc.
- **DBMS & Data:**
  - Role of DBMS in GIS.
  - Spatial Data (Where) vs. Attribute Data (What).

### Study Questions

1. Define GIS. What are its five components?
2. Explain the difference between spatial and attribute data with examples.
3. Discuss the application areas of GIS.

---

## Unit 2: Digital Mapping Concepts and Visualization (5 Hrs.)

### Key Topics

- **Database & Mapping:**
  - Geographic objects (Features) and their attributes.
  - **Thematic Maps:** Choropleth, Isopleth, Dot density.
  - **Map Layers:** Overlaying different datasets.
  - **Map Scale:** Large scale vs. Small scale.
  - **Resolution:** Spatial, Spectral, Temporal, Radiometric.
- **Map Outputs:** Elements of a map (Title, Legend, Scale bar, North arrow, etc.), Layout design.
- **Map Projections:**
  - **Coordinate Systems:** GCS (Lat/Long) vs. PCS (Projected).
  - **Projections:** Cylindrical, Conical, Planar.
  - **Conversions:** Reprojecting data.

### Study Questions

1. Brief about map projections and coordinate systems. What are the common map projections used in GIS?
2. What are the essential elements of a map layout?
3. Explain the concept of map resolution and scale.

---

## Unit 3: Spatial Data Structure and Database Design (6 Hrs.)

### Key Topics

- **Data Modeling:**
  - **Objects (Discrete):** Houses, Roads.
  - **Fields (Continuous):** Elevation, Temperature.
- **Data Models:**
  - **Vector:** Points, Lines, Polygons. Good for discrete data.
  - **Raster:** Grid cells/pixels. Good for continuous data.
- **Topology:**
  - Spatial relationships (Adjacency, Containment, Connectivity).
  - Importance for data integrity (e.g., no gaps/overlaps).
- **Formats & Conversion:** Shapefiles, GeoJSON, GeoTIFF; Raster to Vector (and vice-versa) conversions.
- **Spatial Database Design:** Geo-database concepts (PostGIS, ESRI Geodatabase).

### Study Questions

1. Compare Vector and Raster data models. When would you use one over the other?
2. What is topology? Why is it important in GIS?
3. Explain the concept of a Geodatabase.
4. Explain the concept of geographic phenomena and data modeling.

---

## Unit 4: Data Acquisition, Data Quality and Management (9 Hrs.)

### Key Topics

- **Data Capture:**
  - Primary (Surveying, GPS, Remote Sensing).
  - Secondary (Scanning, Digitizing existing maps).
- **Digitization:** On-screen (heads-up) digitizing, Georeferencing scanned maps.
- **Data Prep:** Cleaning, format conversion, integration of multiple sources.
- **Data Quality:**
  - Accuracy (Positional, Attribute) vs. Precision.
  - Sources of error.
- **GNSS:** Basics of GPS/GLONASS/Galileo.
- **Remote Sensing (RS):** Basics, integration with GIS.

### Study Questions

1. What is Georeferencing? Describe the steps involved.
2. Differentiate between Accuracy and Precision in the context of spatial data.
3. How are Remote Sensing and GNSS data integrated into GIS?
4. How is GPS different from Remote Sensing? Explain how GPS works with illustrations.
5. Describe RS and GNSS. How RS and GNSS data can be integrated in GIS? What are its practical implications?
6. How is geo-referencing carried out? How is it different from digitization?

---

## Unit 5: Spatial Analysis (10 Hrs.)

### Key Topics

- **Vector Analysis:**
  - **Geoprocessing:** Buffer, Clip, Union, Intersect, Merge, Dissolve.
  - **Network Analysis:** Shortest path, Service area (Route optimization).
- **Raster Analysis:**
  - **Local Operations:** Arithmetic on single cells.
  - **Focal Operations:** Neighborhood functions (Smoothing).
  - **Zonal Operations:** Summarizing data within zones.
  - **Resampling:** Changing cell size/resolution.
  - **Mosaic & Clip:** Combining or cutting raster images.
- **Advanced Analysis:**
  - **Spatial Interpolation:** IDW, Kriging (Estimate unknown values from known points).
  - **GIS Modeling:** Suitability analysis (e.g., finding the best site for a hospital).
- **Customization:**
  - Python scripting (ArcPy, PyQGIS).
  - Model Builder (Visual programming).

### Study Questions

1. Explain Vector Overlay Analysis (Union vs. Intersect).
2. What is Spatial Interpolation? Explain IDW (Inverse Distance Weighted).
3. Describe how Network Analysis helps in transportation planning.
4. Differentiate between local and focal operations in raster data with suitable examples.
5. Explain different operations that can be used to perform raster analysis.
6. Explain spatial interpolation techniques.
7. How can Python script tools be used in GIS? Explain with an example.

---

## Unit 6: Introduction to Spatial Data Infrastructure (3 Hrs.)

### Key Topics

- **SDI:** Concept of sharing geospatial data across organizations/countries.
- **Components:** Policy, People, Standards, Technology, Data.
- **Examples:** NSDI, GSDI.
- **Metadata:** "Data about data" (Source, date, projection, quality).
- **Clearinghouse:** Portal to find/access data.
- **Architecture:** Client-Server, Interoperability (OGC standards like WMS, WFS).
- **Legal Aspects:** Copyright, privacy, data licensing.

### Study Questions

1. What is SDI? What are its core components?
2. Why is Metadata important in SDI?
3. Discuss the role of OGC standards in system interoperability.

---

## Unit 7: Open GIS (7 Hrs.)

### Key Topics

- **Open Concept:** Open Data, Open Standards, Open Source Software.
- **Open Source Software:** QGIS, GRASS GIS, GeoServer, PostGIS.
- **Web GIS:** Delivering GIS maps over the web (Google Maps, OpenStreetMap).
- **Open Source Data:** OpenStreetMap (OSM), USGS EarthExplorer.
- **Case Studies:** Uses in public health, municipal governance, etc.

### Study Questions

1. What is Open GIS? How does it differ from proprietary GIS?
2. List some popular Open Source GIS software and their uses.
3. Explain the concept of Web GIS.
4. Define Web-based GIS. Explain the benefits of Web-based GIS.
5. What is the open concept in GIS? Explain Web-based GIS system.
6. How do open source GIS data and open source software play a significant role?
