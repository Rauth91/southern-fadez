# Design plan — the approved original, made real

## Approved brief

- **Stays:** the owner-approved reference composition, deep forest green, warm ivory, antique gold, full-bleed barber photography, squared geometry, and high-contrast condensed headlines.
- **Changes:** translate the reference into real responsive code, replace unverified review figures with true shop facts, use the exact traced logo as a supporting brand artifact rather than forcing its wide lockup into every small space, and remove promotional calls to action across the site.
- **Must not be lost:** the homepage must remain recognisably the original idea. It cannot become a minimalist redesign, a mirror installation, or an unrelated creative concept.
- **The page must cause:** immediate confidence in the shop and a clear understanding of its services, people, room, and history without pushing the visitor toward an action.

## Direction

**Engraved**, specialised to the owner-approved editorial barbershop reference. The page uses the reference's low light, full-bleed imagery, ivory service ledger, forest bands, and antique-gold rules. The reference is the primary brief; the direction recipe supplies restraint and accessibility.

## Tokens

Forest is the structural brand ground, ivory is the service ledger, antique gold is reserved for small labels and rules, and a low-chroma charcoal controls photographic shadows. Forest never washes over the photography; skin, wood, steel, and amber shop light keep their natural color. Muted text and rules are derived with `color-mix()`.

## Type

- Display: **Bodoni Moda variable**, set tall, tight, and uppercase to closely reproduce the owner-approved high-contrast headline voice without using the project's banned default Playfair treatment.
- Body/UI: **IBM Plex Sans 400/500**, practical and readable beside the serif.
- No decorative script in the prototype slice. The display face and photography do the identity work.

## Layout

The masthead and opening hero follow the approved reference closely, and the opening is the only full-height section with truly massive type. The rest of the homepage changes material and scale so it stops competing with that hero: craft and three signature prices sit in an ivory editorial spread beside a contained tool still life; the barber selector becomes the secondary feature in a structured portrait-and-copy split; the room compresses into a wide cinematic band with a quiet caption; and the origin closes as an ivory story spread with an offset storefront photograph. Choosing a barber still changes the portrait, name, role, chair note, story, and profile link as one matched preview. Each barber opens into a dedicated profile with the same hero, editorial about section, chair notes, specialties, and crew rail.

## Signature

The motion system follows the content hierarchy. The forest-green curtain is reserved for the opening hero. The barber preview uses one authored portrait-and-copy transition when a name changes, with a shared gold chair indicator moving between portrait selectors instead of four separate active outlines. Three section-label rules draw once as engraved lines while the surrounding copy enters with a restrained clipped line or short upward fade. Each sequence plays once, keeps all server-rendered content visible before enhancement, and becomes a static finished state when reduced motion is requested.

## Identity asset

The client-supplied lockup remains the exact traced vector with its original black, white, gold, red, blue, and grey paths. The compact masthead uses the simple name treatment visible in the approved reference. The complete exact vector appears as low-contrast ghost sign lettering inside the ivory service field, where its original white ground and dark detail remain coherent.

## Imagery

A generated campaign set establishes the approved visual system: one working-barber hero, tool still life, featured-barber portrait, empty shop interior, and blue-hour storefront. Every active frame shares neutral charcoal shadows, natural skin and material color, warm amber practical light, worn leather, dark wood, and restrained gold. Green stays in the interface instead of tinting the photographs. These remain concept images and must be replaced with truthful Southern Fadez photography before public launch unless the owner explicitly approves generated representation.

## Interaction rule

The owner has removed every general promotional call to action from the site. Navigation is the primary interactive hierarchy: the compact menu appears below desktop width, the inline navigation appears at desktop width, and the two patterns are never visible together. The later request for individual barber profiles adds a contextual “Meet [name]” link from the homepage. A newer explicit request adds one practical exception inside each barber profile: when that barber's verified TheCut URL is available, a compact utility link opens their current prices and appointment schedule. It remains subordinate to the portrait and story rather than becoming another hero. Phone numbers remain plain information rather than click-to-call actions.

The multi-barber roster is explicitly a review-mode concept so Chaz can evaluate how future chairs fit the design. One launch switch controls every public roster surface and profile route. It remains on during approval, then changes the site to a truthful Chaz-only experience without deleting the future-ready component system.

The competitor-informed feature pass adds utility without adding promotional pressure. “Start with the cut” lets a visitor select a specialty and immediately updates the existing matched barber portrait and profile. The name rail uses each barber’s chair-side photograph as the full selector surface, with the name and role overlaid against a dark lower shade. It sits as a vertical chair roster on the right at desktop widths, echoing the approved reference, then returns to a bottom rail on tablet and a two-by-two selector on mobile. A compact shop board at the end of the homepage shows live open/closed state based on regular Central Time hours, today’s schedule, address, and phone. It stays deliberately smaller than the origin spread so the page keeps one hero and one clear visual hierarchy.

## Risk

The reference can become fake luxury if the photos, gold, or display type are overworked. Gold stays thin, the geometry stays square, and unverified social proof never appears.

## Reference calibration

The supplied original concept is the primary visual reference because the owner has approved it. Preserve its headline scale, photographic weight, ivory/green section rhythm, gold accents, and mobile hierarchy. Adapt only where truth, accessibility, or the real logo requires it.

## Build scope

The earlier prototype slice was rejected because its unrelated stock photography and altered proportions still read as an interpretation. The approved rebuild keeps the original hero and brand world, then follows a narrative order: masthead, hero, craft with three signature services, Chaz, the room, the origin and storefront, then footer. Review the complete homepage at 390 / 768 / 1440 before carrying the photographic system through Crew, Shop, Story, and barber profiles.
