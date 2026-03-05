# Dunstan Common — Microsite Strategy & Build Specification

**Prepared for:** Cursor implementation (Next.js + Tailwind)
**Deadline:** Home Show — 13 March 2026
**Status:** Pre-consent (resource consent lodged, progressing toward approval)

---

## 1. INFORMATION SUMMARY

### A. Development Overview

**What it is:** Dunstan Common is a 46-home freehold retirement neighbourhood on Dunstan Road, Alexandra, Central Otago, New Zealand. It targets independent over-60s who want to downsize without surrendering ownership.

**Core positioning:** "Own your home. Share the Common." — This is NOT a retirement village. It's a freehold neighbourhood with collectively owned reserve land and shared facilities, governed by a resident-owned Incorporated Society (not a body corporate, not a licence-to-occupy model, no deferred management fees).

**Vision and feel:** Grounded, practical, premium but not flashy. Central Otago honesty — schist, timber, open sky, flat terrain, sunshine. Anti-cliché (no stock photos of seniors on beaches). Owner-led, independent, confident.

### B. Target Market

**Primary buyer:** Independent retirees aged 60+, currently in Central Otago or planning to relocate there. Likely downsizing from a larger rural property or family home. Values ownership, autonomy, outdoor access (golf, rail trail, campervans). Financially capable ($995k+ entry point).

**Secondary buyer:** Adult children researching for parents. Semi-retired couples from Queenstown/Cromwell looking for a quieter, more affordable base. Returning expats drawn to Central Otago lifestyle.

**Motivations:** Retain ownership and equity. No operator, no licence-to-occupy, no deferred management fees. Practical storage for campervans/boats. Community without institutional feel. Proximity to medical facilities (Dunstan Hospital 5 min). Active lifestyle continuity.

### C. Key Selling Points

**Ownership model (lead with this):**
- Freehold title (fee simple) — you own your home and land outright
- No licence-to-occupy arrangements
- No deferred management fees
- 1/46th undivided share in common areas per owner
- Resident-owned Incorporated Society governance (not body corporate)

**Location:**
- Dunstan Road, Alexandra — opposite Alexandra Golf Course
- Central Otago Rail Trail frontage
- 5 min to Alexandra township
- 5 min to Clyde township
- 5 min to Dunstan Hospital
- Easy access to Cromwell and Queenstown
- 300+ days of sunshine annually, flat terrain

**Lifestyle and community:**
- 2.1 hectares of shared resident-owned reserve land
- 6,900m² secure storage compound with ~1,200m² covered sheds
- Campervan, boat, trailer storage
- Workshop and hobby areas
- Gym space, library, communal facilities
- Community pavilion

**Home design:**
- 2 and 3 bedroom single-level homes
- 120m² to 180m² including garage
- 6 villa types (Type 1–6, mix of entries, duplexes, and standalone)
- Internal access garaging
- Generous storage
- Second WC in every home
- Mobility-considered layouts
- Low-maintenance landscaping
- Practical Central Otago materials

**Scarcity/urgency:**
- Only 46 homes total
- Released in stages
- Register interest for priority access before public release

### D. Practical Details

- **Total lots:** 46 residential lots (numbered 01–46 on masterplan), plus 8 larger reserve/facility lots (47–54)
- **Lot sizes:** Range from 415m² (duplex lots) up to 714m² (standalone), with reserve lots from 1,174m² to 1,886m²
- **Villa types:**
  - Type 1: 3 bed, south entry, double garage
  - Type 2: 3 bed, side entry
  - Type 3: 2 bed, south entry (duplex)
  - Type 4: 2 bed, north entry
  - Type 5: 2 bed, south entry
  - Type 6: 2 bed, north entry (duplex)
- **Pricing:** From $995,000
- **Reserve areas:** 8,502m² central reserve + 4,687m² + 3,087m² + 2,246m² side reserves
- **Storage compound:** 6,900m² (shown on masterplan, red dashed outline = communal facility zone)
- **Existing structures:** Some existing residential buildings on site being retained
- **Compliance note:** Resource consent lodged and progressing toward approval. Must include small-print disclaimer: *"Subject to consent. Resource consent lodged and progressing towards approval."*
- **Release strategy:** Staged release. Register interest for priority access.

### E. Missing Information / Gaps

- **No renders or architectural imagery yet** — masterplan is available, but no house renders, elevations, or lifestyle imagery
- **No confirmed stage plan** — which lots release first is not specified
- **No levy amounts** — described as "modest," details TBD
- **No construction timeline** — when do homes start building? When is completion?
- **No developer entity named** — George is the contact, but no company/developer name provided
- **No site photography** — aerial shots, surrounding landscape, golf course views not provided
- **Pet policy, visitor parking, age verification process** — not addressed
- **No confirmed architect or builder** — would build credibility

---

## 2. MICRO-SITE STRUCTURE

### A. Sitemap

```
/                     → Home (hero + key selling points + CTA)
/homes                → The Homes (villa types, features, masterplan)
/the-common           → The Common (reserves, storage, governance)
/location             → Location (map, proximity, lifestyle context)
/faq                  → FAQ (objection handling, builds trust)
/register             → Register Interest (conversion page)
```

**Why each page:**

| Page | Rationale |
|------|-----------|
| `/` | First impression. Must communicate freehold ownership, price point, and location within 5 seconds. Hero + 3 feature tiles + CTA. |
| `/homes` | Answers "what do I get?" — villa types, sizes, design features, masterplan. Critical for serious buyers. |
| `/the-common` | This is the differentiator. Shared reserve, storage compound, governance model. This page converts curious into convinced. |
| `/location` | Embeds a map, shows proximity stats. Reinforces "5 minutes to everything." Central Otago lifestyle. |
| `/faq` | Handles objections before they become blockers. Freehold vs licence-to-occupy, levies, governance, gated or not, etc. High-converting page for serious enquiries. |
| `/register` | Clean, minimal form. Priority access positioning. This is where conversions happen. |

**Not included (intentionally):**
- `/gallery` — No renders or photography available yet. Once available, add as a section within `/homes` and `/the-common`
- `/about` — Developer credibility info can sit in footer or within `/the-common` governance section
- `/blog` — Per brief: "No blog. No fluff."

### B. Homepage Structure (Section by Section)

---

#### 1. Hero Section

| | |
|---|---|
| **Purpose** | Instant clarity. Who, what, where, price. Register CTA. |
| **Headline** | `DUNSTAN COMMON` |
| **Subheadline** | `Independent Retirement Living in Alexandra, Central Otago` |
| **Supporting line** | `Freehold homes for independent retirees aged 60+ · From $995,000` |
| **Tagline** | `Own your home. Share the Common.` |
| **CTA** | `Register Your Interest` → links to `/register` |
| **Content** | Text overlay on image/colour background. Keep it clean and immediate. |
| **Visual** | Full-bleed hero. Use brand green (#26764F) background with gold (#FFD67A) logo/text if no hero image. When photography is available, use aerial of site or Central Otago landscape. |
| **Component** | `<Hero />` |
| **Layout** | Full viewport height on desktop (100vh or min-h-screen). Centered text. Stacked vertically. |
| **Tailwind complexity** | Simple |
| **Disclaimer** | Small text at bottom: *"Subject to consent. Resource consent lodged and progressing towards approval."* |

---

#### 2. Introduction Section

| | |
|---|---|
| **Purpose** | Expand on what Dunstan Common is. 2–3 sentences max. |
| **Headline** | `Retirement Living — With Real Ownership` |
| **Content** | Short paragraph explaining 46-home neighbourhood, freehold ownership, shared reserves, opposite golf course, alongside rail trail. Emphasise: "This is not a retirement village. It's a neighbourhood built on practical independence." |
| **Visual** | Clean text section. Generous whitespace. Could include a small icon or the "DC" monogram. |
| **Component** | `<Introduction />` |
| **Layout** | Max-w-3xl centered. Generous vertical padding (py-20+). |
| **Tailwind complexity** | Simple |

---

#### 3. Three Feature Tiles

| | |
|---|---|
| **Purpose** | Communicate the three differentiators at a glance. |
| **Headlines** | Tile 1: `Freehold Ownership` · Tile 2: `2.1 Hectares of Shared Reserve` · Tile 3: `Secure Storage & Community Hub` |
| **Content** | One sentence per tile. Tile 1: "You own your home and land outright." Tile 2: "Generous open space owned collectively by residents." Tile 3: "6,900m² compound with covered campervan and boat storage, workshop and shared facilities." |
| **Visual** | Three cards/tiles in a row. Use subtle gold (#FFD67A) accent borders or icons. Green (#26764F) icon accents. |
| **Component** | `<FeatureTiles />` |
| **Layout** | 3-column grid on desktop, stacked on mobile. `grid grid-cols-1 md:grid-cols-3 gap-8` |
| **Tailwind complexity** | Simple |

---

#### 4. Location Snapshot

| | |
|---|---|
| **Purpose** | Prove convenience. Five quick proximity facts. |
| **Headline** | `Central Otago Living` |
| **Content** | Five items: 5 min to Alexandra, 5 min to Clyde, 5 min to Dunstan Hospital, Rail Trail frontage, Golf course opposite. |
| **Visual** | Could be a split layout — text left, embedded map or aerial image right. Or simple icon-stat pairs. |
| **Component** | `<LocationSnapshot />` |
| **Layout** | Split (text + visual) or centered list with icons. `grid grid-cols-1 lg:grid-cols-2` |
| **CTA** | `Explore Location →` links to `/location` |
| **Tailwind complexity** | Simple to moderate |

---

#### 5. Masterplan Preview

| | |
|---|---|
| **Purpose** | Show the layout. Make it feel real and planned. |
| **Headline** | `46 Homes. 2.1 Hectares of Shared Reserve.` |
| **Content** | Embed the masterplan image. Brief caption explaining layout. |
| **Visual** | Full-width or contained masterplan image. Zoomable on tap/click if possible (lightbox). |
| **Component** | `<MasterplanPreview />` |
| **Layout** | Full-bleed image with text overlay or caption below. |
| **CTA** | `View The Homes →` links to `/homes` |
| **Tailwind complexity** | Simple (moderate if adding zoom/lightbox) |

---

#### 6. Homes Summary

| | |
|---|---|
| **Purpose** | Quick reassurance on what buyers get. |
| **Headline** | `Designed for Long-Term Ease` |
| **Content** | 2–3 bed, single level, 120–180m², internal access garaging, mobility-considered layouts, low-maintenance landscaping. From $995,000. |
| **Visual** | Could be a feature list with subtle icons, or a simple text block. When renders are available, add imagery here. |
| **Component** | `<HomesSummary />` |
| **Layout** | Centered or split. Simple text + future image placeholder. |
| **CTA** | `Explore The Homes →` links to `/homes` |
| **Tailwind complexity** | Simple |

---

#### 7. Call to Action / Register Block

| | |
|---|---|
| **Purpose** | Convert. Final push before footer. |
| **Headline** | `Only 46 Homes Available` |
| **Content** | "Dunstan Common will be released in stages. Register your interest now for priority access before public release." |
| **Visual** | Full-width green (#26764F) background with gold (#FFD67A) text/button. High contrast CTA block. |
| **Component** | `<RegisterCTA />` (reusable — appears on multiple pages) |
| **Layout** | Full-bleed background, centered text, prominent button. |
| **CTA** | `Register Your Interest` → links to `/register` |
| **Tailwind complexity** | Simple |

---

#### 8. Footer

| | |
|---|---|
| **Purpose** | Navigation, legal, contact. |
| **Content** | Logo, nav links, disclaimer ("Subject to consent. Resource consent lodged and progressing towards approval."), copyright. Contact email if available. |
| **Component** | `<Footer />` |
| **Layout** | Simple multi-column or stacked. Dark background (near-black or deep green). |
| **Tailwind complexity** | Simple |

---

### C. Page-by-Page Structure

---

#### `/homes` — The Homes

**Purpose:** Detail the home offering. Reassure on design, size, quality.

**Sections:**

1. **Page hero** — Headline: "Designed for Long-Term Ease" / Subline about 2–3 bed single-level homes from $995k
   - Component: `<PageHero />` (reusable across all pages)

2. **Villa types grid** — Show the 6 types with key specs (beds, entry, duplex/standalone)
   - Component: `<VillaTypes />`
   - Layout: 2 or 3-col card grid
   - Data: Type 1 (3 bed, south, double garage), Type 2 (3 bed, side), Type 3 (2 bed, south, duplex), Type 4 (2 bed, north), Type 5 (2 bed, south), Type 6 (2 bed, north, duplex)

3. **Design features** — Internal garaging, generous storage, second WC, mobility layouts, low-maintenance landscaping, Central Otago materials
   - Component: `<DesignFeatures />`
   - Layout: Feature list or icon grid

4. **Masterplan** — Full masterplan image with legend
   - Component: `<Masterplan />`
   - Layout: Full-width with optional zoom

5. **Register CTA block**
   - Component: `<RegisterCTA />`

---

#### `/the-common` — The Common

**Purpose:** The strongest page. Explains reserves, storage, governance — the key differentiator.

**Sections:**

1. **Page hero** — Headline: "Shared Space, Shared Stewardship"
   - Component: `<PageHero />`

2. **Reserve land** — 2.1 hectares of resident-owned landscaped reserve. Not owned by an operator. Owned collectively as undivided shares. Protects space and character long-term.
   - Component: `<ReserveLand />`
   - Layout: Text + masterplan detail/image

3. **Storage & community hub** — 6,900m² compound, ~1,200m² covered sheds. Campervan/boat storage, workshop, hobby, gym, library, communal facilities.
   - Component: `<StorageHub />`
   - Layout: Feature list or cards

4. **Governance** — Resident-owned Incorporated Society. Shared decision-making, transparent governance, collective stewardship, owner-led management. Every homeowner is a member.
   - Component: `<Governance />`
   - Layout: Clean text section, possibly with a simple diagram

5. **Register CTA block**
   - Component: `<RegisterCTA />`

---

#### `/location` — Location

**Purpose:** Prove convenience and lifestyle. Map-forward.

**Sections:**

1. **Page hero** — Headline: "Central Otago Living"
   - Component: `<PageHero />`

2. **Proximity stats** — 5 min Alexandra, 5 min Clyde, 5 min Dunstan Hospital, Rail Trail, Golf course. Access to Cromwell, Queenstown.
   - Component: `<ProximityStats />`
   - Layout: Icon + stat pairs or a visual proximity map

3. **Embedded map** — Google Maps embed or static map showing Dunstan Road location relative to Alexandra, Clyde, golf course, rail trail.
   - Component: `<LocationMap />`
   - Layout: Full-width or contained

4. **Lifestyle context** — 300+ days of sunshine, flat terrain, everyday convenience. A settled retirement destination.
   - Component: `<LifestyleContext />`
   - Layout: Text + future photography placeholder

5. **Register CTA block**
   - Component: `<RegisterCTA />`

---

#### `/faq` — Frequently Asked Questions

**Purpose:** Handle objections. Convert curious into confident.

**Sections:**

1. **Page hero** — Headline: "Frequently Asked Questions"
   - Component: `<PageHero />`

2. **FAQ accordion** — Collapsible Q&A pairs
   - Component: `<FAQAccordion />`
   - Content (all questions from brief):
     - Is Dunstan Common a retirement village?
     - Do I own my home?
     - Is this a licence-to-occupy model?
     - How are the common areas managed?
     - Will there be ongoing levies?
     - Is the community gated?
     - What is included in the storage compound?
     - Where is Dunstan Common located?
     - When will homes be released for sale?

3. **Register CTA block**
   - Component: `<RegisterCTA />`

---

#### `/register` — Register Interest

**Purpose:** Capture leads. Minimal friction. Priority access positioning.

**Sections:**

1. **Page hero** — Headline: "Register for Priority Access" / Subline: "With only 46 homes available, Dunstan Common will be released in stages."
   - Component: `<PageHero />`

2. **Value proposition** — What registering gets you: early access to detailed information, invitation to private site meetings, first opportunity to select available homes.
   - Component: `<RegisterBenefits />`
   - Layout: 3 short bullet points or icon tiles

3. **Registration form**
   - Component: `<RegisterForm />`
   - Fields: Name, Phone, Email, Current Location, Are you local to Central Otago? (Y/N toggle), Preferred home type (2BR / 3BR / Unsure radio), optional Message field
   - Layout: Clean, centered, generous spacing
   - Submit button: "Register Your Interest"
   - Post-submit: Simple thank you message

---

### D. Design & Brand System

---

#### Brand Colours (extracted from logos)

```css
:root {
  /* Primary */
  --green:         #26764F;   /* Deep forest green — backgrounds, headers, CTAs */
  --green-dark:    #1D5C3E;   /* Darker green — hover states, footer */
  --green-light:   #2E8A5E;   /* Lighter green — hover accents */

  /* Secondary */
  --gold:          #FFD67A;   /* Warm gold — accents, highlights, logo text */
  --gold-dark:     #E5B84E;   /* Deeper gold — button hover, links */
  --gold-light:    #FFDFB0;   /* Pale gold — subtle backgrounds, borders */

  /* Neutrals */
  --white:         #FAFAF8;   /* Warm off-white — page background */
  --cream:         #F5F0E8;   /* Cream — section backgrounds, cards */
  --stone:         #E8E0D4;   /* Stone — borders, dividers */
  --charcoal:      #2C2C2C;   /* Near-black — body text */
  --slate:         #6B6B6B;   /* Mid grey — secondary text */
}
```

**Tailwind config extension:**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#26764F',
          dark: '#1D5C3E',
          light: '#2E8A5E',
        },
        gold: {
          DEFAULT: '#FFD67A',
          dark: '#E5B84E',
          light: '#FFDFB0',
        },
        cream: '#F5F0E8',
        stone: '#E8E0D4',
        charcoal: '#2C2C2C',
        slate: '#6B6B6B',
        offwhite: '#FAFAF8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

#### Tone

**Modern rural. Refined but grounded. Practical luxury.**

This is not a glossy Auckland apartment development. It's Central Otago — honest, spacious, warm, durable. Think: premium farming community aesthetic. Schist walls, timber details, golden tussock, wide sky.

Avoid: retirement clichés, stock photos of seniors, overly corporate language, cold minimalism.

---

#### Typography

**Heading font:** `Cormorant Garamond` (Google Fonts) — elegant serif with warmth. Matches the logo's serif wordmark. Use for all headings, hero text, and feature titles.

**Body font:** `DM Sans` (Google Fonts) — clean, modern, highly readable sans-serif. Use for paragraphs, nav, buttons, form labels, metadata.

**Weight hierarchy:**
- Hero heading: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Page heading: `font-serif text-4xl md:text-5xl font-light`
- Section heading: `font-serif text-3xl font-normal`
- Subheading: `font-sans text-lg font-semibold uppercase tracking-widest text-slate`
- Body: `font-sans text-base md:text-lg font-normal leading-relaxed`
- Small/caption: `font-sans text-sm text-slate`

---

#### Layout Philosophy

**Spacious, editorial, image-forward (when available).**

- Generous vertical padding between sections (py-16 md:py-24 or more)
- Max content width: `max-w-5xl` for text, `max-w-7xl` for wider sections
- Lots of whitespace — let the content breathe
- Section backgrounds alternate between off-white and cream to create rhythm
- Full-bleed green sections for CTAs and hero
- Cards have subtle borders (stone colour) or light cream backgrounds, no heavy shadows
- Mobile-first: everything stacks cleanly

---

#### Image Treatment

When photography/renders become available:
- Warm, natural light — golden hour Central Otago tones
- High contrast landscape shots (blue sky, golden hills, schist details)
- Aerial/drone of site showing golf course and rail trail context
- Architectural renders with warm material palette
- NO stock photography of people unless custom commissioned

For now (Home Show launch without photography):
- Use masterplan as primary visual asset
- Use brand colours and typography to carry the design
- Consider subtle background textures (linen, paper grain) for warmth
- Gold on green is the signature visual pairing

---

### E. Conversion Strategy (Home Show Optimised)

---

#### Above the Fold (must appear immediately)

1. **Dunstan Common** brand name + logo
2. **"Independent Retirement Living in Alexandra, Central Otago"**
3. **"From $995,000"** — price anchors immediately
4. **"Own your home. Share the Common."**
5. **[Register Your Interest]** button — primary CTA
6. Consent disclaimer in small text

---

#### Primary CTA

**Wording:** `Register Your Interest`

**Why:** Direct, clear, low-commitment. "Register" implies priority access without purchase pressure. Use this everywhere — hero, end of every page, sticky mobile bar.

**Button style:** Gold (#FFD67A) background, charcoal (#2C2C2C) text, or white text on green (#26764F) background. Test both.

---

#### Secondary CTA

**Wording:** `Explore The Common` or `View The Homes`

**Why:** For visitors not ready to register but wanting to learn more. Directs deeper into the site.

---

#### Registration Form (Minimal)

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Phone | Tel | Yes |
| Email | Email | Yes |
| Current Location | Text | No |
| Local to Central Otago? | Toggle (Yes/No) | No |
| Preferred Home Type | Radio (2BR / 3BR / Unsure) | No |

**No message field.** Keep friction ultra-low. 6 fields max, 3 required.

**Submit button:** `Register Your Interest`

**Success state:** "Thank you. We'll be in touch with priority access details shortly."

---

#### Smart Additions

1. **Sticky mobile CTA bar** — Fixed bottom bar on mobile with "Register Your Interest" button. Appears after scrolling past hero. Component: `<StickyMobileCTA />`

2. **Downloadable info pack** — When a PDF brochure is ready, add a "Download Info Pack" secondary CTA on the register page. Gate it behind email capture for extra lead gen.

3. **QR code landing** — For the Home Show booth, create a simple `/show` redirect page or UTM-tagged URL pointing to `/register`. Track Home Show conversions separately.

4. **Lot availability indicator** — Even a simple "Stage 1: Coming Soon" badge on the homes page builds urgency without needing full lot tracking.

---

#### What Builds Trust Fastest

1. **Freehold ownership** — Say it early, say it clearly, say it often
2. **Masterplan** — Makes it feel real and planned, not speculative
3. **FAQ page** — Handles the "is this a licence-to-occupy?" objection immediately
4. **"Only 46 homes"** — Scarcity + staged release = urgency
5. **Governance explanation** — Incorporated Society vs body corporate builds confidence
6. **Proximity stats** — 5 minutes to everything is immediately reassuring
7. **Consent disclaimer** — Transparency about resource consent status builds trust rather than hiding it

---

## 3. COMPONENT INVENTORY

### Shared / Reusable Components

| Component | Used On | Notes |
|-----------|---------|-------|
| `<Navbar />` | All pages | Logo left, nav links right, "Register" CTA button |
| `<PageHero />` | All inner pages | Reusable hero with title, subtitle, optional background |
| `<RegisterCTA />` | All pages (bottom) | Full-width green block with gold CTA |
| `<StickyMobileCTA />` | All pages | Fixed bottom bar, mobile only |
| `<Footer />` | All pages | Nav, disclaimer, copyright |

### Page-Specific Components

| Component | Page | Notes |
|-----------|------|-------|
| `<Hero />` | Home | Full-height hero with all key info |
| `<Introduction />` | Home | Short text block |
| `<FeatureTiles />` | Home | 3-column grid |
| `<LocationSnapshot />` | Home | Proximity stats |
| `<MasterplanPreview />` | Home | Image with caption |
| `<HomesSummary />` | Home | Quick specs |
| `<VillaTypes />` | /homes | Card grid of 6 types |
| `<DesignFeatures />` | /homes | Feature list |
| `<Masterplan />` | /homes | Full masterplan with legend |
| `<ReserveLand />` | /the-common | Text + visual |
| `<StorageHub />` | /the-common | Feature cards |
| `<Governance />` | /the-common | Text section |
| `<ProximityStats />` | /location | Stats with icons |
| `<LocationMap />` | /location | Google Maps embed |
| `<LifestyleContext />` | /location | Text block |
| `<FAQAccordion />` | /faq | Collapsible Q&A |
| `<RegisterBenefits />` | /register | 3 benefit tiles |
| `<RegisterForm />` | /register | Form with validation |

---

## 4. ASSET CHECKLIST

### Available Now
- [x] Logo — gold/green colour version (use on green backgrounds)
- [x] Logo — black on white (use on light backgrounds)
- [x] Logo — black on transparent
- [x] Wordmark — gold on black
- [x] Wordmark — black
- [x] Masterplan PDF (high-res, with legend)
- [x] Full website copy (all pages drafted in info dump)
- [x] FAQ content (9 questions answered)
- [x] SEO target keywords defined

### Needed (provide when available)
- [ ] Hero photography (aerial/landscape)
- [ ] Architectural renders of homes
- [ ] Floor plans for each villa type
- [ ] Site aerial photograph
- [ ] Developer/company information for footer
- [ ] Contact email/phone for enquiries
- [ ] Google Maps embed coordinates (Dunstan Road, Alexandra)
- [ ] Form submission endpoint (email service, CRM, etc.)
- [ ] Brochure PDF for download
- [ ] Privacy policy text

---

## 5. SEO TARGET KEYWORDS

Naturally integrate these throughout copy (already embedded in provided content):

- Retirement living Alexandra
- Retirement village Alexandra
- Freehold retirement village NZ
- Retirement living Central Otago
- Downsizing Alexandra
- Retirement homes Clyde
- Campervan storage retirement village
- Independent retirement living
- Freehold title homes NZ

**Meta title:** `Dunstan Common — Independent Retirement Living in Alexandra, Central Otago`
**Meta description:** `Freehold homes for independent retirees aged 60+ in Alexandra. 46 homes, 2.1 hectares of shared reserve, secure storage. From $995,000. Register for priority access.`

---

## 6. GOOGLE FONTS TO INCLUDE

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

Or via Next.js `next/font/google`:

```js
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})
```
