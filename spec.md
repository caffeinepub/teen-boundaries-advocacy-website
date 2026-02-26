# Specification

## Summary
**Goal:** Add a "Play the Game" section to the BoundaryStrong site that embeds or links to the externally hosted Boundary Setting Game for Teens.

**Planned changes:**
- Add a dedicated "Play the Game" section/page that embeds the Figma-hosted game via an `<iframe>` with fullscreen support (`allow="fullscreen"`)
- If iframe embedding is blocked, display a prominent styled "Play Now" button that opens the game URL in a new tab
- Add a "Play the Game" navigation item to the sticky header that smooth-scrolls to the game section, styled consistently with existing nav items

**User-visible outcome:** Users can navigate directly to the game section from the header and either play the game inline via an embedded iframe or launch it in a new tab via a call-to-action button.
