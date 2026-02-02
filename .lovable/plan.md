

# Website Content Update Plan for DUDHANI OVERSEAS INDIA PRIVATE LIMITED

Based on your PDF document and uploaded logo, I'll update the entire website with your company's real information.

---

## Summary of Changes

I will update the website with:
- **Company Logo** (from your uploaded file)
- **Phone Number**: +91-6287585752
- **Email**: rabindrasharmarks@gmail.com
- **Company Name**: Dudhani Overseas India Private Limited
- **Company Details**: CIN, GSTIN, Address from PDF
- **Products**: Color Masterbatches, Polymer Compounds (as per PDF)
- **Team**: Rabindra Kumar Sharma (Managing Director), Sapna Verma (Director), Khushboo Kumari (Director), Vijay Singh (GM), Gauri Shankar Sharma (CEO)
- **About Content**: Vision, Mission, Core Values from PDF
- **Certifications**: ISO 9001, ISO 14001, ISO 45001, UL (as per PDF)

---

## Detailed Changes

### 1. Add Company Logo

- Copy uploaded logo to project assets folder
- Update Header component to display logo image instead of text "DO"
- Update Footer component to display logo
- Update favicon

### 2. Update Contact Information (All Pages)

**Phone Number:** +91-6287585752
**Email:** rabindrasharmarks@gmail.com
**Address:** Sarai Road Gandhi Maidan, near Reliance Mall, Dumka, Jharkhand 814101

Files to update:
- `src/components/layout/Header.tsx` - Email in top bar
- `src/components/layout/Footer.tsx` - All contact details
- `src/pages/Contact.tsx` - Phone, email, WhatsApp

### 3. Update Company Information

**Company Name:** Dudhani Overseas India Private Limited
**Established:** 2018
**CIN:** U24304JH2018PTC011591
**GSTIN:** 07AAGCD7615P1Z5

### 4. Update About Page Content

**Vision (from PDF):**
To be a dominant multi-location production company in Engineered Thermoplastic Compounds, Color & Specialty Additive Master Batches, establishing itself as a top-performing compounder with multiple product range.

**Mission (from PDF):**
- Provide highest quality materials based on advanced technology
- Respect strength and capability of employees, customers, and associates
- Honor all commitments undertaken
- Provide the Plastic Processing Industry with quality Masterbatches & Compounds

**Core Values (from PDF):**
1. Integrity
2. Excellence
3. Customer Focus
4. Technology Edge
5. Responsibility
6. Team Work
7. Valuing People

**Management Team:**
- Rabindra Kumar Sharma - Managing Director
- Sapna Verma - Director
- Khushboo Kumari - Director
- Vijay Singh - General Manager
- Gauri Shankar Sharma - CEO

### 5. Update Products Page

Replace current products with masterbatch/polymer products:

| Product | Category | Description |
|---------|----------|-------------|
| White Masterbatch | Color Masterbatch | High quality titanium dioxide based white masterbatch |
| Black Masterbatch | Color Masterbatch | Carbon black based black masterbatch for various polymers |
| Color Masterbatch | Color Masterbatch | Custom color masterbatches in wide range of colors |
| PE Masterbatch | Polymer Compounds | HDPE/LLDPE/LDPE based masterbatches |
| PP Masterbatch | Polymer Compounds | Polypropylene based masterbatches |
| ABS/SAN/ASA Compounds | Engineering Polymers | High-performance polymer compounds |
| PC Compounds | Engineering Polymers | Polycarbonate based compounds |
| PET Compounds | Engineering Polymers | Polyethylene terephthalate compounds |
| EVA Masterbatch | Specialty | Ethylene vinyl acetate masterbatches |
| TPU Compounds | Specialty | Thermoplastic polyurethane compounds |
| PA Compounds | Specialty | Polyamide (Nylon) compounds |
| Additive Masterbatch | Specialty | UV stabilizers, antioxidants, flame retardants |

### 6. Update Certifications Page

Replace with actual certifications from PDF:
- ISO 9001:2015 - Quality Management
- ISO 14001 - Environmental Management
- ISO 45001 - Occupational Health & Safety
- UL Certification - International Safety Standards
- NABL Accredited Testing (Autodynamics Technologies)

### 7. Update Home Page

- Update hero section tagline
- Update About section with company story (established 2018)
- Update statistics with relevant numbers
- Update product categories to show masterbatch products
- Remove irrelevant testimonials or update with industry-relevant ones

### 8. Update Database (CMS)

Update site_settings table with new contact information so the CMS reflects the correct data.

---

## Technical Details

### Files to Modify

1. **Logo Integration:**
   - Copy `user-uploads://logo-removebg-preview_1.png` to `src/assets/logo.png`
   - Update `src/components/layout/Header.tsx`
   - Update `src/components/layout/Footer.tsx`
   - Update `index.html` for favicon

2. **Content Updates:**
   - `src/pages/Index.tsx` - Hero, stats, product categories
   - `src/pages/About.tsx` - Mission, vision, values, team
   - `src/pages/Products.tsx` - Product list and categories
   - `src/pages/Contact.tsx` - Contact details
   - `src/pages/Certifications.tsx` - Certification list
   - `src/components/layout/Header.tsx` - Logo, contact
   - `src/components/layout/Footer.tsx` - Logo, contact, links

3. **Database Migration:**
   - Update `site_settings` table with new contact/general info

---

## What You'll See After Implementation

- Your company logo displayed in header and footer
- Correct phone number (+91-6287585752) on all pages
- Updated email (rabindrasharmarks@gmail.com)
- Masterbatch and polymer compound products displayed
- Your management team listed with correct names/titles
- Company certifications (ISO, UL, NABL) shown
- Vision and mission from your PDF document

