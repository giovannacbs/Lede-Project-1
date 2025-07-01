# The Commute Game Plan: "Soletra" Edition

An interactive scrollytelling project built to visualize cellphone theft risk along my daily commute in São Paulo.

---

## 📍 Workflow Summary

1. **Route Mapping**
   - Tracked my daily route using the **Ride with GPS** app.
   - Exported the route and imported it into **Adobe Illustrator**.
   - Manually color-coded the segments based on perceived risk:
     - `#7dbc82` → green = comfortable zones
     - `#ffb54b` → yellow = caution zones
     - `#fb6a63` → red = high-risk zones

2. **Crime Data Collection**
   - Downloaded cellphone robbery data from the [SSP-SP Portal](https://www.ssp.sp.gov.br/Estatistica/Consulta.aspx) for the year 2025.
   - The dataset includes only **reported cases of cellphones subtracted by theft or robbery**.

3. **Data Cleaning and Filtering**
   - Processed the raw dataset using **Python (pandas + geopandas)**.
   - Filtered for relevant incidents and structured the data for mapping.

4. **Spatial Analysis**
   - Imported cleaned data into **QGIS**.
   - Categorized incidents (e.g. thefts inside vehicles).
   - Applied color layers and exported visual result as **SVG**.

5. **Map Composition**
   - Combined route and crime layers in **Adobe Illustrator**.
   - Finalized design elements and annotations.

6. **Interactive Scrollytelling**
   - Built the site using **HTML, CSS, D3.js**, and **Scrollama.js**.
   - Used step-based scroll triggers to update visuals.
   - Layout is responsive and mobile-friendly.

---

## 🖼️ Map Preview

<p align="center">
  <img src="Map-Images/map.jpeg" alt="Commute map" width="600">
</p>

---

## 🛠️ Tools Used

- Ride with GPS  
- Adobe Illustrator  
- Python (pandas, geopandas)  
- QGIS  
- HTML/CSS  
- D3.js  
- Scrollama.js

---

## 📄 Data Source

- [SSP-SP - Secretaria de Segurança Pública de São Paulo](https://www.ssp.sp.gov.br/Estatistica/Consulta.aspx)
- Data reflects only reported cellphone robberies and thefts in 2025.
