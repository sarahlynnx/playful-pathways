# Playful Pathways

Static multi-page website for a pediatric occupational therapy clinic in Crosby, Minnesota. Provides clinic information, service details, insurance and patient portal access, an FAQ, a blog, and a contact form for new and existing patients.

**Stack:** HTML5, CSS3, JavaScript, Bootstrap 5, jQuery, Owl Carousel, EmailJS, Google Maps API

## What it does

**Pages:**
- Homepage with welcome content, image carousel of therapy activities, practice approach, testimonials carousel, and clinic hours
- Meet Your Therapist page with credentials, experience, and mission statement
- Services page covering 6 therapy areas (fine motor, gross motor, infant development, sensory integration, social-emotional regulation, ADL)
- Patient Information page linking to the external patient portal
- Insurance page listing accepted plans
- FAQ page with 6 common questions about new patient procedures, referrals, and payments
- Blog page that loads a separate React app from a Render-hosted backend
- Contact page with form, address, phone, fax, and an embedded Google Map

**Interactive features:**
- Contact form with name, email, phone (10-digit pattern validation), and message fields
- EmailJS integration sends form submissions directly to the clinic email
- Two Owl Carousel instances for therapy photos and rotating testimonials
- Google Maps Advanced Markers showing the clinic location
- Responsive Bootstrap navbar with mobile dropdown

**External integrations:**
- EmailJS for contact form delivery
- Google Maps API loaded via a Render-hosted config endpoint
- ClientSecure patient portal link for intake forms, scheduling, and payments
- React blog application served from a separate Render deployment
- Facebook profile link in footer

## File structure

```
playful-pathways/
  index.html                    # Homepage
  meet_your_therapist.html      # Therapist bio
  services.html                 # 6 service areas
  patient_information.html      # Portal access
  insurance.html                # Accepted plans
  faq.html                      # 6 Q&A pairs
  blog.html                     # Loads external React blog
  contact_us.html               # Form + map
  401.html                      # Redirect handler
  styles.css                    # Single stylesheet with CSS variables
  script.js                     # Owl Carousel initialization
  contact.js                    # Google Maps loader + EmailJS handler
  images/                       # 14 therapy photos + logo (SVG)
```

## Design

- CSS custom properties for theme colors (light purple, dark purple)
- Mobile-first responsive design with a 768px breakpoint
- Bootstrap 5.3.2 grid and components
- Google Fonts (Open Sans, Poppins, Roboto, BIZ UDPGothic)
- Font Awesome 5 icons

## Development

No build process or dependencies. Open any HTML file directly in a browser, or serve the directory with a static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

For the contact form and map to work locally, the EmailJS and Google Maps configuration endpoints must be reachable.
