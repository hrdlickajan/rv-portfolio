# Plan: Homepage Content & Structure Rewrite

> Source PRD: [plans/homepage-rewrite-spec.md](plans/homepage-rewrite-spec.md)

## Architectural decisions

Durable decisions that apply across all phases:

- **Component structure**: one new file per section under `src/components/` — `Manifesto`, `StuckInCircle`, `Foundations`, `WhyStrength`, `YourJourney`, `HowICanHelp`, `ChooseYourPath`, `WhyIDoThis`, `MovementShared`, `FAQ`, `ClosingBanner`. Section numbering (per spec): 1 Hero, 2 Manifesto, 3 StuckInCircle, 4 Foundations, 5 WhyStrength, 6 YourJourney, 7 HowICanHelp, 8 ChooseYourPath, 9 WhyIDoThis, **10 reserved/skipped** (testimonials, story 21/37, not built), 11 MovementShared, 12 FAQ, 13 ClosingBanner, 14 Contact.
- **Composition**: `App.tsx` composes sections in numeric order. New sections are appended to the live composition as each phase completes, so every phase is viewable in the running app immediately. `About.tsx`/`Services.tsx` stay mounted (old nav/content untouched) until Phase 7, which deletes them and finalizes ordering.
- **Anchor ids**: `#home` (Hero, unchanged) and `#contact` (Contact, unchanged) stay as-is. New semantic ids introduced as their sections are built: `#manifesto`, `#stuck-in-circle`, `#foundations`, `#why-strength`, `#your-journey`, `#how-i-can-help`, `#choose-your-path`, `#why-i-do-this`, `#movement-shared`, `#faq`. `ClosingBanner` needs no anchor (not a nav target). Header nav (Phase 7) targets: `#your-journey`, `#choose-your-path`, `#why-i-do-this`, `#contact`.
- **`translations.ts`**: one new top-level key namespace per new section (`manifesto`, `stuckInCircle`, `foundations`, `whyStrength`, `yourJourney`, `howICanHelp`, `chooseYourPath`, `whyIDoThis`, `movementShared`, `faq`, `closingBanner`), added to both `cs` and `en` in the phase that builds that section. `en` mirrors `cs` verbatim as a placeholder (follow-up to write real English copy). The `about`/`services` namespaces are only deleted in Phase 7, once nothing references them.
- **Shared CSS patterns** (added to `index.css` incrementally, first-used-wins): **editorial text-block** (eyebrow label + large mixed-weight/italic `font-display` heading, generous spacing between thought blocks; dark-background modifier for `StuckInCircle`/`WhyStrength`, light/cream variant for `WhyIDoThis`) introduced in Phase 2; **closing-statement** (centered italic, orange accent, no attribution) introduced in Phase 2, reused in Phase 3; **Quote** (large italic + accent border + attribution) and **horizontal timeline** (numbered nodes + connecting line, stacks vertically on narrow viewports) introduced in Phase 3; **accordion** (single-open-at-a-time, local component state, no new library) introduced in Phase 6; **color-band banner** introduced in Phase 6. All existing patterns (`flat-card`, `btn-pill`, `font-display`/`font-body`) are reused as-is, not redefined.
- **Animation convention**: every newly revealed element in every new section gets the existing `animate-on-scroll` class + `data-delay` attribute, matching `About.tsx`/`Services.tsx` precedent, so the existing `IntersectionObserver` wiring in `App.tsx` continues to work unchanged.
- **No new dependencies**: built with existing stack only (Tailwind, `lucide-react` icons, React state for the accordion). No test framework is introduced (none exists today).
- **Contact.tsx / api/send-email.ts**: no functional changes in any phase; only touched (if at all) for copy/heading tone in Phase 7.
- **Verification per phase**: `npm run typecheck`, `npm run lint`, `npm run build` all pass with no new errors; manual visual QA (desktop + mobile) of the phase's new section(s), including contrast check for dark editorial sections and `animate-on-scroll` firing correctly.

---

## Phase 1: Hero rewrite + Manifesto

**User stories**: 1, 2, 3, 4, 5

### What to build

Rewrite `Hero.tsx` copy in place (remove the "Romana Vítková / Women's Fitness Coach" heading, new headline and supporting paragraph, `Rezervovat úvodní konzultaci` → `#contact`, `Zjistit více` → scrolls to `#stuck-in-circle`) without touching the photo/layout scaffolding. Build `Manifesto.tsx`: plain white background, no heading/image/card, the three belief sentences in large centered type with generous vertical padding. Add both to `translations.ts` (`hero` updated in place, new `manifesto` namespace) for `cs` and `en`. Mount `Manifesto` in `App.tsx` directly after `Hero`, before the (still present) `About`/`Services`.

### Acceptance criteria

- [ ] Hero shows new headline/paragraph/CTAs; photo and layout unchanged
- [ ] Hero secondary CTA scrolls to `#stuck-in-circle` even though that section doesn't exist yet (link present, target added in Phase 2)
- [ ] `Manifesto` renders the three sentences with no heading/card/image, large centered type
- [ ] `cs`/`en` translations present for both sections, no missing-key console errors
- [ ] `animate-on-scroll` applied to Manifesto's content block
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 2: StuckInCircle + Foundations

**User stories**: 6, 7, 8, 9, 10

### What to build

Build `StuckInCircle.tsx` (section 3): first use of the dark editorial-block pattern — big multi-line heading, the 5 "thought" statements each with their own spacing (no bullets), then the two closing paragraphs. Build `Foundations.tsx` (section 4): intro paragraph, 2×2 `flat-card` grid (Pohyb, Výživa, Regenerace, Návyky) with number badge + icon + short text each, ending in the new shared closing-statement pattern. Add `stuckInCircle` and `foundations` translation namespaces. Mount both in `App.tsx` after `Manifesto`.

### Acceptance criteria

- [ ] `#stuck-in-circle` anchor exists and Hero's "Zjistit více" CTA now scrolls to it correctly
- [ ] Dark editorial-block CSS pattern added to `index.css` and used by `StuckInCircle`; passes a contrast check
- [ ] `Foundations` renders 2×2 card grid + closing-statement pattern (also added to `index.css` this phase)
- [ ] Both sections reflow sensibly on mobile
- [ ] `cs`/`en` translations complete, `animate-on-scroll` wired
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 3: WhyStrength + YourJourney

**User stories**: 11, 12, 13, 14, 15

### What to build

Build `WhyStrength.tsx` (section 5): reuses the dark editorial-block pattern; six "Protože…" statements stacked vertically as a building progression (not a grid); ends, after a large gap, in a new Quote pattern (large italic, accent border/mark, centered, "— Romana Vítková" attribution in small caps). Build `YourJourney.tsx` (section 6): new horizontal-timeline pattern for the 5 steps (numbered nodes + connecting line, horizontal on wide viewports, stacked on narrow), ending in the shared closing-statement pattern from Phase 2. Add `whyStrength` and `yourJourney` translation namespaces. Mount both after `Foundations`.

### Acceptance criteria

- [ ] `WhyStrength` statements read as a vertical progression, not a grid; ends in the new Quote treatment with attribution
- [ ] `YourJourney` timeline is horizontal on desktop, stacks vertically on mobile; ends in closing-statement pattern
- [ ] Quote and horizontal-timeline CSS patterns added to `index.css`
- [ ] `cs`/`en` translations complete, `animate-on-scroll` wired, dark-section contrast check passes
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 4: HowICanHelp + ChooseYourPath

**User stories**: 16, 17, 18

### What to build

Build `HowICanHelp.tsx` (section 7): 3×2 icon `flat-card` grid for the six help topics, matching existing `Services`/`About` card language. Build `ChooseYourPath.tsx` (section 8): intro paragraph + 3-column `flat-card` grid (Hybrid, Online, Personal coaching, per `CONTEXT.md` glossary), each with description + "ideal for" line; Hybrid gets a "Nejoblíbenější" badge and orange border/highlight, the other two stay visually plain. Add `howICanHelp` and `chooseYourPath` translation namespaces. Mount both after `YourJourney`.

### Acceptance criteria

- [ ] `HowICanHelp` shows all six topics in a 3×2 icon grid, reflows on mobile
- [ ] `ChooseYourPath` shows exactly 3 cards (Hybrid/Online/Personal); Hybrid visually marked as most popular
- [ ] `#choose-your-path` anchor present (future Header nav target)
- [ ] `cs`/`en` translations complete, `animate-on-scroll` wired
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 5: WhyIDoThis + MovementShared

**User stories**: 19, 22

### What to build

Build `WhyIDoThis.tsx` (section 9): editorial text-block pattern on a light/cream background (new variant of the Phase 2 pattern, no dark treatment) — personal essay (longevity, family, freedom in the body), ending inline with the short poetic closing lines as the section's natural close (no boxed closing-statement here, per spec). Build `MovementShared.tsx` (section 11, numbering gap at 10 intentionally left with no file): 3-card info grid (Run club, Community, Instagram), informational only, no links/hrefs. Add `whyIDoThis` and `movementShared` translation namespaces. Mount both after `ChooseYourPath`.

### Acceptance criteria

- [ ] `WhyIDoThis` uses the light editorial variant, ends inline with poetic closing lines (not a separate closing-statement box)
- [ ] `#why-i-do-this` anchor present (future Header nav target)
- [ ] `MovementShared` shows 3 cards, no hrefs/links anywhere in the section
- [ ] No `WhyIDoThis`-adjacent file or stub created for section 10
- [ ] `cs`/`en` translations complete, `animate-on-scroll` wired
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 6: FAQ + ClosingBanner

**User stories**: 23, 24, 25, 26

### What to build

Build `FAQ.tsx` (section 12): first accordion component in the codebase — single-open-at-a-time expand/collapse over the 6 Q&A pairs from `notes.txt` (carrying forward the two duplicated-answer pairs verbatim, as explicitly instructed), local component state (no new library), ending with the "Každá z nás někdy začínala…" line + "Rezervovat úvodní konzultaci" CTA → `#contact`. Build `ClosingBanner.tsx` (section 13): full-width color-band pattern, centered heading "Každá žena si zaslouží cítit se silná." + smaller secondary line, positioned directly above `Contact`. Add `faq` and `closingBanner` translation namespaces. Mount both after `MovementShared`, before `Contact`.

### Acceptance criteria

- [ ] FAQ accordion expands one answer at a time; keyboard-accessible (button-triggered, `aria-expanded`)
- [ ] The two duplicated-answer Q&A pairs are present verbatim (not silently deduplicated)
- [ ] FAQ ends with reassurance line + CTA linking to `#contact`
- [ ] `ClosingBanner` renders as a full-width color band directly above `Contact`
- [ ] `cs`/`en` translations complete, `animate-on-scroll` wired
- [ ] `npm run typecheck` / `lint` / `build` pass

---

## Phase 7: Header nav rewrite + old content cleanup

**User stories**: 27, 28, 29, 30, 34, 35

### What to build

Rewrite `Header.tsx` nav (desktop + mobile menu) to exactly 4 links in order: `Tvoje cesta` → `#your-journey`, `Formy spolupráce` → `#choose-your-path`, `O mně` → `#why-i-do-this`, `Kontakt` → `#contact`; remove the `Domů` link entirely. Delete `About.tsx` and `Services.tsx` and remove their imports/mounts from `App.tsx`, leaving the final composition order: Hero → Manifesto → StuckInCircle → Foundations → WhyStrength → YourJourney → HowICanHelp → ChooseYourPath → WhyIDoThis → MovementShared → FAQ → ClosingBanner → Contact. Remove the `about` and `services` namespaces from `translations.ts` (`cs`/`en`) and the now-unused `header.home`/`header.about`/`header.services` keys, replacing with the 4 new nav labels. Confirm `Contact.tsx` needs no functional changes. Run the full verification pass from the spec's Testing Decisions.

### Acceptance criteria

- [ ] Header shows exactly 4 nav links (no "Domů"), scrolling to the correct sections on both desktop and mobile menu
- [ ] `About.tsx`/`Services.tsx` deleted; no references remain in `App.tsx` or elsewhere
- [ ] `translations.ts` has no leftover `about`/`services` keys; no missing-key errors in either language
- [ ] Full page order matches the 14-part spec (with gap at 10)
- [ ] Language switcher still works end-to-end (cs/en) with no console errors
- [ ] Contact form still submits successfully end-to-end (unchanged mechanics)
- [ ] `npm run typecheck` / `npm run lint` / `npm run build` all pass with no new errors
- [ ] Manual visual QA pass complete: all sections at mobile + desktop widths, dark editorial sections (contrast), horizontal timeline (mobile reflow), FAQ accordion (single-open behavior), nav anchors scroll correctly
