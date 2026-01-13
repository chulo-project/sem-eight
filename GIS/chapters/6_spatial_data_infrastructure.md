# Chapter 6: Introduction to Spatial Data Infrastructure

**⏰ Teaching Hours: 3 | 📌 Conceptual Chapter**

---

## 🎯 Learning Objectives

- Understand SDI concepts and components
- Learn about metadata and clearinghouse
- Understand SDI architecture

---

## 6.1 SDI Concepts ⭐⭐

### Definition

**Spatial Data Infrastructure (SDI):** A framework of policies, standards, technologies, and institutional arrangements that facilitate the discovery, access, and use of geospatial data.

### Purpose

1. Avoid duplication of data collection
2. Enable data sharing
3. Provide access to authoritative data
4. Establish standards
5. Facilitate interoperability

### SDI Levels

| Level          | Scope         | Example                    |
| -------------- | ------------- | -------------------------- |
| Corporate      | Organization  | Company GIS                |
| Local          | Municipality  | City SDI                   |
| State/Province | Regional      | State GIS                  |
| National       | Country       | National SDI (Nepal: NSDI) |
| Global         | International | GSDI                       |

---

## 6.2 Components of SDI ⭐⭐⭐

### 1. Data

- Fundamental/framework data
- Thematic datasets
- Reference data (basemaps)

### 2. Metadata

- "Data about data"
- Describes content, quality, source
- Enables discovery

### 3. Standards

- Data formats
- Exchange protocols
- Quality measures
- Symbology

### 4. Access Networks

- Internet infrastructure
- Web services
- Geoportals

### 5. Policies

- Data sharing policies
- Pricing models
- Legal frameworks
- Privacy protection

### 6. Institutional Framework

- Coordinating bodies
- Governance structure
- Stakeholder involvement

---

## 6.3 Metadata and Clearinghouse ⭐⭐⭐

### Metadata

**Definition:** Descriptive information about spatial data.

### Metadata Contents ⭐⭐

1. **Identification**
   - Title, abstract, keywords
   - Purpose, supplemental info

2. **Data Quality**
   - Positional accuracy
   - Attribute accuracy
   - Completeness
   - Logical consistency

3. **Spatial Reference**
   - Coordinate system
   - Projection
   - Datum

4. **Entity and Attribute**
   - Feature descriptions
   - Attribute definitions
   - Domain values

5. **Distribution**
   - Format
   - Access method
   - Contact information

6. **Metadata Reference**
   - Date created
   - Standard used
   - Metadata contact

### Metadata Standards

- **ISO 19115:** International standard
- **FGDC:** US Federal standard
- **Dublin Core:** General metadata standard

### Clearinghouse

**Definition:** A catalog or registry for discovering spatial data.

**Functions:**

- Search for datasets
- View metadata
- Access or download data
- Discovery across organizations

**Examples:**

- USGS National Map
- INSPIRE Geoportal (EU)
- GeoNetwork (Open source)

---

## 6.4 SDI Architecture ⭐⭐

### Client-Server Architecture

```
Users
  ↓
Web Portal (Client)
  ↓
Web Services (WMS, WFS)
  ↓
GIS Servers
  ↓
Spatial Databases
```

### SDI Technologies

**Services:**

- WMS (Web Map Service): View maps
- WFS (Web Feature Service): Access features
- WCS (Web Coverage Service): Raster data
- CSW (Catalog Service): Metadata search

### Interoperability

**Definition:** Ability of systems to exchange and use data.

**Achieved through:**

- Open standards (OGC)
- Common data formats
- Web services
- Shared ontologies

---

## 6.5 Legal Aspects of SDI

### Data Ownership

- Intellectual property rights
- Copyright
- Licensing terms

### Privacy

- Personal data protection
- Location privacy
- Anonymization

### Data Sharing

- Access policies
- Cost recovery
- Open data initiatives

### Liability

- Data accuracy claims
- Fitness for purpose
- Disclaimer requirements

---

## 📚 Important Questions

1. "Describe SDI. Contents of metadata" (Model)
2. "Major components of SDI" (2082)
3. "What is metadata? Contents?" (Model, 2082)

---

## 🔗 Additional Resources

**Online:**

- OGC website
- GSDI Association
- National SDI portals

**Textbooks:**

- Chang, K.T. Chapter 15
