# Chapter 7: Open GIS

**⏰ Teaching Hours: 7 | 📌 Modern GIS Concepts**

---

## 🎯 Learning Objectives

- Understand open concepts in GIS
- Learn about open source GIS software
- Understand web-based GIS systems
- Explore GIS applications

---

## 7.1 Open Concept in GIS ⭐⭐

### Three Pillars of Open GIS

**1. Open Standards**

- Publicly available specifications
- Interoperability between systems
- OGC standards

**2. Open Data**

- Freely available datasets
- Open licensing (Creative Commons)
- No restrictions on use

**3. Open Source Software**

- Source code available
- Free to use and modify
- Community development

### Benefits of Open Approach

1. **Interoperability:** Systems work together
2. **Cost:** Reduced licensing costs
3. **Flexibility:** Customize to needs
4. **Transparency:** No vendor lock-in
5. **Innovation:** Community contributions

---

## 7.2 Open Standards (OGC) ⭐⭐

### Open Geospatial Consortium (OGC)

**Mission:** Develop open standards for geospatial content and services.

### Key OGC Standards

| Standard | Purpose                                |
| -------- | -------------------------------------- |
| WMS      | Web Map Service - viewing maps         |
| WFS      | Web Feature Service - vector access    |
| WCS      | Web Coverage Service - raster access   |
| WPS      | Web Processing Service - geoprocessing |
| CSW      | Catalog Service - metadata search      |
| GML      | Geography Markup Language              |
| KML      | Keyhole Markup Language                |
| GeoJSON  | JSON for geospatial                    |

### Example WMS Request

```
http://server.com/wms?
  SERVICE=WMS&
  VERSION=1.3.0&
  REQUEST=GetMap&
  LAYERS=roads&
  STYLES=&
  CRS=EPSG:4326&
  BBOX=-180,-90,180,90&
  WIDTH=800&
  HEIGHT=400&
  FORMAT=image/png
```

---

## 7.3 Open Source Software for Spatial Data Analysis ⭐⭐⭐

### Desktop GIS

**QGIS**

- Most popular open source GIS
- Cross-platform (Windows, Mac, Linux)
- Plugin extensibility
- Python (PyQGIS) support

**GRASS GIS**

- Powerful analysis tools
- Command-line and GUI
- Strong raster processing

**gvSIG**

- Java-based
- CAD integration
- Mobile version available

### Server GIS

**GeoServer**

- Java-based
- WMS, WFS, WCS support
- Styles with SLD

**MapServer**

- Lightweight
- High performance
- CGI-based

### Spatial Databases

**PostGIS**

- PostgreSQL extension
- Full spatial SQL support
- OGC compliance

**SpatiaLite**

- SQLite extension
- Lightweight, file-based

### Web Mapping Libraries

**Leaflet**

- Lightweight JavaScript
- Mobile-friendly
- Plugin ecosystem

**OpenLayers**

- Full-featured
- Complex mapping apps

---

## 7.4 Web-Based GIS System ⭐⭐⭐

### Definition

**Web GIS:** Geographic information systems accessed through web browsers over the internet.

### Architecture

```
Client (Browser)
      ↓
   Internet
      ↓
Web Server (Apache, Nginx)
      ↓
GIS Server (GeoServer)
      ↓
Spatial Database (PostGIS)
```

### Types

**1. Thin Client**

- Processing on server
- Simple browser display
- Example: Google Maps

**2. Thick Client**

- Processing in browser
- JavaScript-heavy
- Example: Leaflet applications

**3. Hybrid**

- Balance of both
- Server for data, client for interaction

### Technologies

**Front-end:**

- HTML5, CSS3, JavaScript
- Leaflet, OpenLayers
- React, Vue (frameworks)

**Back-end:**

- GeoServer, MapServer
- Node.js, Python (Flask/Django)
- PostGIS

### Benefits of Web GIS ⭐⭐

1. **Accessibility:** Access from anywhere
2. **No Installation:** Browser-based
3. **Real-time:** Live data updates
4. **Collaboration:** Multiple users
5. **Cost Effective:** Centralized maintenance
6. **Scalable:** Cloud deployment

### Uses of Web GIS

1. Public information portals
2. Emergency response mapping
3. Business intelligence dashboards
4. Tourism and navigation
5. Citizen participation (crowdsourcing)
6. Environmental monitoring

---

## 7.5 Open Source GIS Data ⭐⭐

### OpenStreetMap (OSM)

**Description:** Collaborative world map created by volunteers.

**Features:**

- Global coverage
- Constantly updated
- Free to use and download
- Various formats available

### Other Open Data Sources

| Source             | Type             | Coverage    |
| ------------------ | ---------------- | ----------- |
| Natural Earth      | Basemaps         | Global      |
| USGS EarthExplorer | Satellite        | Global      |
| SRTM               | Elevation        | Near-global |
| WorldClim          | Climate          | Global      |
| GADM               | Admin boundaries | Global      |

### Open Data Benefits

1. **Cost:** Free access
2. **Coverage:** Often global
3. **Community:** Continuous improvement
4. **Transparency:** Known limitations
5. **Compatibility:** Standard formats

---

## 7.6 GIS Application Case Studies

### Urban Planning

- Land use mapping
- Zoning analysis
- Infrastructure planning

### Agriculture

- Crop monitoring (NDVI)
- Precision farming
- Irrigation planning

### Disaster Management

- Flood mapping
- Evacuation routes
- Damage assessment

### Health

- Disease outbreak mapping
- Healthcare facility location
- Epidemiological analysis

### Environment

- Deforestation monitoring
- Wildlife corridor analysis
- Pollution mapping

---

## 📚 Important Questions

1. "What is open concept in GIS?" (2082)
2. "Web-based GIS. Benefits" (2081, 2082)
3. "Open source GIS role in analysis" (2082)
4. "Different functions of GIS" (2082)

---

## 🔗 Additional Resources

**Software:**

- QGIS.org
- GeoServer.org
- Leafletjs.com

**Data:**

- OpenStreetMap.org
- EarthExplorer.usgs.gov
- NaturalEarthData.com

**Tutorials:**

- QGIS tutorials
- Leaflet quickstart
- PostGIS documentation
