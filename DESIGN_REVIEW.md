# Design review — Southern Fadez

Reviewed September 20, 2026 after the Mercer-reference structural pass. This review covers the homepage, Cuts, Crew, Shop, Story, and barber profile routes at 390 and 1440 px, with an additional homepage check at 768 px.

## Verdict

**The implementation now reads as a complete shop website rather than a single landing page. It passes Alignment and Beauty. Identity is strong in the structure and writing, but final photography remains the launch gate.**

The homepage is now the front desk: one atmospheric opening, one plain statement of the shop, and a directory into four substantial destinations. Cuts is a working price ledger. Crew is a roster with individual chair notes and profile pages. Shop consolidates location, hours, phone, and room photography. Story gives the brand a point of view beyond services.

The reference influence is appropriately indirect. The site borrows Mercer Supply’s clear information architecture, written confidence, and willingness to give services and staff their own pages. It does not copy Mercer’s layouts, uppercase treatment, booking hierarchy, or gentleman-and-whiskey language.

## What is working

- The masthead now behaves like real site navigation. Cuts, Crew, Shop, and Story all lead to dedicated routes.
- The homepage is shorter and more useful. It introduces the place, then gets out of the way.
- Each route has a different content shape: price ledger, crew roster, location record, long-form story, and individual barber profile.
- The room-and-craft image collision remains the single hero signature. Decorative gold lines and promotional controls are absent.
- Contact information is kept out of the hero and consolidated in the Shop page and footer.
- The writing is direct and specific to a working barbershop without imitating Mercer’s tone.
- Mobile preserves the same hierarchy and page depth. No route collapses into a stack of generic cards.

## Remaining launch priorities

### 1. Replace prototype photography with one truthful Southern Fadez set

The current files come from visibly different rooms, crews, and lighting conditions. The layouts are ready for final assets, but the site cannot fully pass the Identity gate until every person and interior is verifiably Southern Fadez.

**Action:** Produce one wide room image, one exterior/location image, one recognizable working portrait per barber, and four close craft details. Match warmth, saturation, and black point across the set. Preserve the current image roles and crops.

**Acceptance:** With the wordmark hidden, every image still appears to belong to one shop and one crew.

### 2. Verify every operational fact

Prices, durations, hours, barber names, address, establishment year, and profile copy are currently presented as fact.

**Action:** Have the owner approve one content sheet containing every operational detail. Make corrections in `lib/site.ts` so every route shares the same source of truth.

**Acceptance:** The owner has approved every displayed fact and no route contradicts another.

### 3. Tune the final photographs on real phones

The current dark grade supports the lounge feeling, but final files may carry different exposure and color. The room must stay recognizable without becoming bright or glossy.

**Action:** Check the homepage and Story opening on a physical phone at low brightness. Preserve visible brick, mirrors, lamps, and chairs while keeping the room subdued.

**Acceptance:** A visitor identifies a barbershop interior before reading the headline at both mobile and desktop sizes.

## Restraint notes

- Do not add booking buttons, review counters, badges, or a promotional footer band.
- Keep contact details informational and outside the homepage hero.
- Do not add more typefaces or decorative rules.
- Replace weak photography rather than expanding the gallery.
- Keep the homepage directory uneven and text-led; it must not become four equal cards.

## Validation record

- ESLint passes.
- The production build passes with Next.js 16.3.4 using webpack.
- All twelve static/SSG routes generate successfully.
- No browser errors or horizontal overflow appeared on the reviewed routes.
- Axe reports zero violations on the homepage, Cuts, Crew, Shop, Story, and Chaz profile at both 390 and 1440 px.
