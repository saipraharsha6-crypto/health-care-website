# MANTRA 2026 Summer School - Assignment 1
## Frontend Website Design, SEO, Responsiveness & Netlify Hosting

### Submission Details
* **Student Name:** [Your Name]
* **Registration / Roll Number:** [Your Roll Number]
* **Selected Website Topic:** Health Care Website (CarePlus Clinic & Wellness Center)
* **Submission Date:** 2nd July 2026

---

## 1. Project Objective
To design, develop, and document a complete, original, and highly responsive static frontend website for **CarePlus Clinic & Wellness Center** using HTML5, CSS3, and modern Javascript. The project focuses on core design standards, mobile responsiveness, search engine optimization (SEO), and deployment preparations.

---

## 2. Directory Structure
```text
health care website/
├── assets/
│   └── images/
│       ├── hero.svg         # Modern medical banner illustration
│       ├── doctor-1.svg     # Male pediatrician profile avatar
│       ├── doctor-2.svg     # Female cardiologist profile avatar
│       ├── clinic-1.svg     # Consult room facility illustration
│       └── clinic-2.svg     # Advanced laboratory room illustration
├── css/
│   └── style.css            # Custom CSS3 styling system & variables
├── js/
│   └── main.js              # JavaScript interactivity & validation
├── index.html               # Home Page
├── about.html               # About Page
├── services.html            # Services / Departments / FAQ Page
├── gallery.html             # Gallery / Clinic Tour Page
├── contact.html             # Contact / Appointment Booking Page
└── README.md                # Submission documentation
```

---

## 3. Core Features Implemented

### A. Responsive Frontend Design & Typography
* **Consistent Theme:** Built with a premium color scheme using CSS variables.
  * Navy Blue (Trust/Professionalism): `hsl(215, 60%, 16%)`
  * Emerald/Teal (Health/Healing): `hsl(165, 70%, 40%)`
  * Soft Backgrounds: `hsl(210, 30%, 98%)`
* **Typography:** Integrates modern fonts—`Outfit` for crisp headings and `Inter` for highly readable body paragraphs.
* **Layouts:** Features clean cards, flexible flexbox headers, and CSS Grid layouts.
* **Responsiveness:** Utilizes flexible layouts and CSS `@media` rules to ensure the website is fully functional on Mobile (up to `768px`), Tablet (`768px` to `1024px`), and Desktop (`1024px` and above) monitors.

### B. Search Engine Optimization (SEO) Checklist
* **Title Tags:** Every page includes a unique, context-specific `<title>` tag.
* **Meta Tags:** Distinct `<meta name="description">` and `<meta name="keywords">` tags are placed in the headers of all pages to optimize search ranking.
* **Heading Hierarchy:** Each page has exactly one `<h1>` tag as the primary heading, and semantic `<h2>` and `<h3>` tags for subsections.
* **Image Alt Text:** All SVG assets and images contain descriptive `alt` tags to support web accessibility.
* **File Naming:** Files are named with simple, human-readable, and indexable structures: `index.html`, `about.html`, `services.html`, `gallery.html`, and `contact.html`.

### C. JavaScript Functionality
* **Mobile Drawer Navigation:** The hamburger menu expands/collapses the navigation panel on mobile screens.
* **Patient Reviews Carousel:** An auto-rotating testimonials slider on the home page with manual dot controls.
* **FAQ Accordion Panel:** Collapsible details panels on the services page with dynamic, height-adjusting transitions.
* **Appointment Form Validation:** Checks input fields (Name, Email, Phone, Date, and Specialty) before submission, shows detailed inline error warnings, and pops open a custom booking summary modal on success.

---

## 4. Local Run Instructions
1. Clone or download this project folder to your local computer.
2. Open any of the HTML pages (such as [index.html](file:///c:/Users/VENNA/OneDrive/Documents/mantra/health%20care%20website/index.html)) directly in your web browser.
3. To view mobile styles, press `F12` in Chrome/Edge, select the **Device Toggle Toolbar**, and choose a phone preview size.

---

## 5. Netlify Deployment Steps
1. Create a public repository on [GitHub](https://github.com/) and upload all the files.
2. Log in to [Netlify](https://www.netlify.com/).
3. Select **Add New Site** > **Import an existing project**.
4. Choose **GitHub** and authorize access.
5. Select this project repository (`health care website`).
6. Leave the build commands and publish directory blank (since this is a static website, the root directory is published directly).
7. Click **Deploy Site** to generate your live public URL!
