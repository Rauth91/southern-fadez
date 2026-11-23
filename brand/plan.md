# Design plan — the approved original, made real

## Approved brief

- **Stays:** the owner-approved reference composition, deep forest green, warm ivory, antique gold, full-bleed barber photography, squared geometry, and high-contrast condensed headlines.
- **Changes:** make booking the primary site path, move barber choice directly after the hero, treat services as appointment context rather than the opening message, and make individual profiles useful enough to choose and book a chair. The owner rejected the oversized full-bleed profile treatment and approved a calmer split layout with a complete full-length portrait and booking built into the identity panel.
- **Must not be lost:** the homepage must remain recognisably the original idea. It cannot become a minimalist redesign, a mirror installation, or an unrelated creative concept.
- **The page must cause:** immediate confidence, then a fast choice of barber and a clear route to that barber's verified booking page. Walk-in visitors should still know they are welcome when a chair is open.

## Direction

**Engraved**, specialised to the owner-approved editorial barbershop reference. The page uses the reference's low light, full-bleed imagery, ivory service ledger, forest bands, and antique-gold rules. The reference is the primary brief; the direction recipe supplies restraint and accessibility.

## Tokens

Forest is the structural brand ground, ivory is the service ledger, antique gold is reserved for small labels and rules, and a low-chroma charcoal controls photographic shadows. Forest never washes over the photography; skin, wood, steel, and amber shop light keep their natural color. Muted text and rules are derived with `color-mix()`.

## Type

- Display: **Bodoni Moda variable**, set tall, tight, and uppercase to closely reproduce the owner-approved high-contrast headline voice without using the project's banned default Playfair treatment.
- Body/UI: **IBM Plex Sans 400/500**, practical and readable beside the serif.
- No decorative script in the prototype slice. The display face and photography do the identity work.

## Layout

The masthead and opening hero keep the approved reference composition, but the first action now sends visitors to choose a barber. The homepage order becomes hero, barber selector, services and walk-in policy, room, founder story, then the practical shop board. Individual profiles use an owner-approved split opening: a contained full-length portrait that preserves the complete person and chair beside a compact identity and booking panel, followed directly by useful chair notes and a photographic crew rail. Profile names remain distinctive without covering the face or repeating as a second oversized booking headline.

## Signature

The motion system follows the content hierarchy. The forest-green curtain is reserved for the opening hero. The barber preview uses one authored portrait-and-copy transition when a name changes, with a shared gold chair indicator moving between portrait selectors instead of four separate active outlines. Three section-label rules draw once as engraved lines while the surrounding copy enters with a restrained clipped line or short upward fade. Each sequence plays once, keeps all server-rendered content visible before enhancement, and becomes a static finished state when reduced motion is requested.

## Identity asset

The client-supplied lockup remains the exact traced vector with its original black, white, gold, red, blue, and grey paths. The compact masthead uses the simple name treatment visible in the approved reference. The complete exact vector appears as low-contrast ghost sign lettering inside the ivory service field, where its original white ground and dark detail remain coherent.

## Imagery

The confirmed crew roster uses client-supplied portraits of Keenan Louviere, Logan Eubanks, Jaden Guitreau, and Chaz Boudreaux. These portraits remain the truthful center of the booking flow. Because the first round of client-supplied room photographs was portrait-oriented, blown out, and difficult to crop without distortion, three temporary AI-assisted room photographs based on the real green walls, bronze ceiling, mirrors, chairs, and wash stations are in use until better room photography arrives. No synthetic people are used.

## Interaction rule

Booking is now the primary interactive hierarchy. The masthead's first destination is “Book,” the hero sends visitors to choose a barber, and each profile integrates its booking action into the opening identity panel beside the portrait. A verified individual booking URL opens that barber's current prices and schedule. Until the remaining links are supplied, those profiles use the shop phone only as an honest availability fallback rather than sending visitors to Chaz's personal booking page. The compact menu remains below desktop width and the inline navigation remains at desktop width.

The multi-barber roster now reflects the client-confirmed four-person crew and remains visible across every roster surface and profile route. Only verified Chaz specialties and booking information are published; the other profiles stay intentionally factual until the client supplies their bios, specialties, and booking links.

The competitor-informed feature pass adds utility without adding promotional pressure. “Start with the cut” stays hidden until the client supplies enough verified specialties to make those recommendations honest. The name rail uses each barber’s chair-side photograph as the full selector surface, with the name and role overlaid against a dark lower shade. It sits as a vertical chair roster on the right at desktop widths, echoing the approved reference, then returns to a bottom rail on tablet and a two-by-two selector on mobile. A compact shop board at the end of the homepage shows live open/closed state based on regular Central Time hours, today’s schedule, address, and phone. It stays deliberately smaller than the origin spread so the page keeps one hero and one clear visual hierarchy.

## Risk

The reference can become fake luxury if the photos, gold, or display type are overworked. Gold stays thin, the geometry stays square, and unverified social proof never appears.

## Reference calibration

The supplied original concept is the primary visual reference because the owner has approved it. Preserve its headline scale, photographic weight, ivory/green section rhythm, gold accents, and mobile hierarchy. Adapt only where truth, accessibility, or the real logo requires it.

## Build scope

The earlier prototype slice was rejected because its unrelated imagery and altered proportions still read as an interpretation. The approved rebuild keeps the original brand world, then follows a narrative order: masthead, real-shop hero, craft and prices, the barber roster, the room, Chaz's origin story, then the practical shop board and footer. The owner explicitly approved completing this photo-truth refresh without another slice checkpoint. Review the complete homepage at 390 / 768 / 1440 before carrying the photographic system through Crew, Shop, Story, and barber profiles.

## Owner-review polish

The owner-review build carries the approved campaign treatment through every route instead of switching to a brighter, mixed-source photo set after the homepage. Primary navigation opens the complete Cuts, Crew, Shop, and Story pages and marks the current destination; the masthead stays available while scrolling because navigation is the site’s main utility. The homepage composition, palette, typography, and non-promotional tone remain unchanged.

The owner gave autonomous approval to resolve the profile composition on wide screens. Barber openings now sit inside a centered editorial stage instead of stretching indefinitely with the viewport. The full 2:3 portraits grow on desktop without cropping or distortion, while the booking panel keeps a measured line length and balanced outer space. On extra-wide screens the portrait and stage step up together rather than leaving dead margins. The profile column is anchored by the crew return at the top, identity and booking in the middle, and the real Highway 621 address at the bottom; no invented specialties are used to fill space.
