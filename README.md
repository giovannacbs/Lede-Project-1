# The Commute Game Plan: "Soletra" Edition

This project is a scrollytelling visualization about my daily commute in São Paulo, Brazil — where I play *Soletra* (a Brazilian version of Spelling Bee) during traffic, while navigating through areas with different levels of cellphone theft risk.

---

## 🚲 Mapping My Route

I used the **Ride with GPS** app to trace my daily commute route. After that, I imported the route into **Adobe Illustrator** to manually color-code different segments based on my personal perception of safety:

- **Red** (`#fb6a63`) zones: high-risk, "no-go" areas for phone use.
- **Yellow** (`#ffb54b`) zones: caution areas — risky, especially when traffic slows down or stops.
- **Green** (`#7dbc82`) zones: relatively safer areas where I feel more comfortable using my phone, even knowing the risk still exists.

<p align="center">
  <img src="Map-Images/map.jpeg" alt="Commute map" width="600">
</p>

---

## 📊 Crime Data Processing

I downloaded official cellphone robbery data for 2025 from **SSP-SP (São Paulo’s Public Safety Secretariat)**.

Then, I followed these steps:

1. **Cleaned and prepared the dataset** using **Python**.
2. Imported it into **QGIS** to filter incidents and categorize them by context (e.g. robberies inside vehicles).
3. Applied color-coded visual layers to different types of events.
4. Exported the result as an **SVG** file and finalized the visuals in **Adobe Illustrator**, adding the design layers and annotations.

> ⚠️ **Important:** The dataset includes only reported cases of **cellphones that were subtracted (robbery or theft)**.  
> 📎 Official source: [SSP-SP Statistics Portal](https://www.ssp.sp.gov.br/Estatistica/Consulta.aspx)

---

## 🖥️ Building the Interactive Story

To build the final scrollytelling site, I:

- Used a modified **Scrollama.js** template for scroll-based interactions.
- Structured the content using **HTML**, **CSS**, and **D3.js** for dynamic image updates.
- Designed a clean, mobile-friendly layout with sticky visuals and smooth transitions.

---

## 🧭 About

This project blends personal narrative, public data, and visual storytelling to reflect on how urban violence shapes daily behavior. It's also an attempt to explore how fear, caution, and habit can manifest spatially — especially in a city as complex as São Paulo.
