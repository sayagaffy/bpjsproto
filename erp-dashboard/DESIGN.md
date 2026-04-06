# Design System Strategy: The Financial Architect

## 1. Overview & Creative North Star
This design system is built upon the **"Architectural Precision"** North Star. In the world of enterprise ERP, we move beyond "standard data entry" to create a "Curated Ledger" experience. We reject the cluttered, line-heavy aesthetic of legacy financial software in favor of **Tonal Structuralism**.

The goal is to provide a high-density environment that feels breathable. We achieve this by breaking the traditional rigid grid with intentional white space, rhythmic typography, and a "No-Line" philosophy that uses color-blocking and depth rather than borders to organize complex financial data. This system transforms cold data into an authoritative, editorial narrative.

## 2. Colors: Tonal Depth & The No-Line Rule
We leverage a sophisticated palette where **Trust Blue (#00539C)** drives the primary action architecture and **Healthcare Green (#006D38)** provides a grounding, secondary stabilizing force.

### The "No-Line" Rule
To achieve a premium, modern feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts.
*   **The Logic:** Use `surface_container_low` for the main workspace background. Place `surface_container_lowest` (pure white) cards on top to create distinction.
*   **The Transition:** Use `surface_container_high` for sidebar or utility panels to create a natural, "carved-in" look without a single stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Level 0 (Foundation):** `surface` (#f8f9fa) - The global backdrop.
*   **Level 1 (Workspaces):** `surface_container_low` (#f3f4f5) - Large layout regions.
*   **Level 2 (Active Modules):** `surface_container_lowest` (#ffffff) - Data tables and primary forms.
*   **Level 3 (Overlays):** Use semi-transparent `surface_bright` with a 12px backdrop-blur for a "Glassmorphism" effect on floating modals or dropdowns.

### Signature Textures
Main CTAs and high-level financial summaries should utilize a subtle linear gradient from `primary` (#003c73) to `primary_container` (#00539c) at a 135-degree angle. This adds "visual soul" and a sense of premium quality that flat fills cannot replicate.

## 3. Typography: The Editorial Ledger
The typography system uses a pairing of **Manrope** for structural headings and **Inter** for data density.

*   **The Display Scale (Manrope):** `display-lg` (3.5rem) to `headline-sm` (1.5rem) are used for high-level financial totals and dashboard summaries. These should have a tight letter-spacing (-0.02em) to look authoritative.
*   **The Data Scale (Inter):** `body-md` (0.875rem) is our workhorse. For dense ERP tables, use `label-md` (0.75rem) to maximize information density without sacrificing legibility.
*   **The Hierarchy:** Use `on_surface_variant` (#424751) for secondary labels. This creates a tonal contrast against the `on_surface` (#191c1d) primary values, guiding the user's eye to the most critical numbers first.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "noisy" for a dense ERP. We use **Tonal Layering** and **Ambient Shadows**.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` card placed on a `surface_container_low` background creates a soft, natural lift.
*   **Ambient Shadows:** For floating elements (like an action menu), use an extra-diffused shadow: `0px 8px 24px rgba(0, 28, 59, 0.06)`. Note the use of a blue-tinted shadow (derived from `on_primary_fixed_variant`) to mimic natural light rather than grey.
*   **The "Ghost Border":** If a separator is required for accessibility in tables, use `outline_variant` at 15% opacity. Never use 100% opaque lines.

## 5. Components: Precision Primitive Styling

### Data Tables (The Core)
*   **The Layout:** Forbid divider lines. Use alternating row fills (`surface_container_lowest` vs `surface_container_low`) or simply ample vertical white space.
*   **Header:** Use `label-sm` in all-caps with 0.05em tracking using `on_surface_variant`.

### Buttons
*   **Primary:** Solid `primary` fill with `on_primary` text. Roundedness: `md` (0.375rem).
*   **Secondary:** `primary_container` background with `on_primary_container` text. No border.
*   **Tertiary:** Text-only using `primary` color. Use for low-emphasis actions like "Cancel" or "Clear Filters."

### Status Chips (The Pill)
*   **Success/Active:** `secondary_container` (#86f7a8) background with `on_secondary_container` (#00723b) text.
*   **Pending:** `tertiary_fixed` (#ffdbc9) background with `on_tertiary_fixed_variant` (#763300) text.
*   **Shape:** Always use `full` roundedness (pill shape) to provide a soft counterpoint to the rectangular data grid.

### Input Fields
*   **Style:** Minimalist. No bottom line or full box. Use a subtle `surface_container_high` background with a `sm` (0.125rem) corner radius. On focus, transition the background to `surface_container_lowest` and add a 2px "Ghost Border" of `primary`.

### Minimal Action Icons
*   Use a consistent 20px bounding box for **Eye (View)**, **Pencil (Edit)**, and **Thumbs-up (Approve)**. Icons should use `outline` (#727782) color, shifting to `primary` only on hover.

## 6. Do's and Don'ts

### Do
*   **Do** use vertical white space (16px, 24px, 32px) to separate groups of data.
*   **Do** use `secondary` (Green) for positive financial growth and `error` (Red) for deficits.
*   **Do** align all numerical data to the right (tabular figures) to allow for easy decimal comparison.

### Don't
*   **Don't** use black (#000000). Use `on_surface` (#191c1d) for all primary text.
*   **Don't** use 1px borders to separate table rows; it creates visual "vibration" in dense views.
*   **Don't** use standard "drop shadows" on cards; stick to background color nesting.
