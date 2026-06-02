# Implementation Plan - UI Optimization & Data Propagation

Optimize the layout, typography, and styles of the PopX application to perfectly match the provided mockups on desktop and mobile. Ensure user details are dynamically propagated to the profile screen.

## User Review Required

> [!IMPORTANT]
> - Responsive layout wraps the interface in a mock mobile container on desktop (for design consistency) and expands to full screen on actual mobile devices.
> - Dynamic state styling added to the Login button (grey when fields are empty, turning purple when fields are filled).
> - Added custom display area on the profile page below the dashed separator to display the user's phone number, company name, and agency status.

## Open Questions

None.

## Proposed Changes

### Styles & Design System

#### [MODIFY] [App.css](file:///d:/recat/educase/myapp/src/App.css)
- Implement mobile-first responsive layout (mobile full screen, desktop centered card simulator).
- Polish typography using modern styling.
- Style `fieldset` and `legend` inputs to look exactly like the images (56px tall, specific borders, margins, padding, and label positions).
- Style radio buttons and align them horizontally.
- Style profile picture with camera overlay.
- Style the dashed separator line and the user details key-value grid.

---

### Component Logic & Layout

#### [MODIFY] [signIn.jsx](file:///d:/recat/educase/myapp/src/comp/signIn.jsx)
- Update label of Email input to "Email Address".
- Bind button background dynamically to validation state (purple when credentials entered, grey otherwise).

#### [MODIFY] [signUp.jsx](file:///d:/recat/educase/myapp/src/comp/signUp.jsx)
- Fix radio button name attribute and change handler logic to properly toggle `isAgency` boolean.
- Add asterisks to required input labels matching the screenshot layout.

#### [MODIFY] [profile.jsx](file:///d:/recat/educase/myapp/src/comp/profile.jsx)
- Retrieve `phoneNo`, `companyName`, and `isAgency` from `UserContext`.
- Render the custom details section below the dashed line using a premium key-value design.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the project builds correctly without lint or type errors.

### Manual Verification
- Test registration flow by filling out all fields.
- Verify that details display correctly on the final profile page.
- Check mobile responsive scaling and layout widths in standard browsers.
