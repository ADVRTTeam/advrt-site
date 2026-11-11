# Scheduling the weekly run

The skill needs two account connectors: **Windsor.ai** (Search Console) and
**AIBox** (covers). Scheduled tasks created from inside a Claude Code session
cannot carry account connectors on this organisation — the API refuses the
`connectors` parameter — so a task created that way fires into a session with
no `mcp__Windsor_ai__*` and no `mcp__AIBox__*` tools, and the run cannot read
the data or make the images.

**So the routine has to be created from the claude.ai routines UI**, where the
connectors can be attached to it. Set:

- **Schedule:** weekly, Mondays, 07:42 Europe/London. (Not 08:00 — most
  routines run on the hour and get queued behind each other.)
- **Connectors:** Windsor.ai and AIBox. Both are required.
- **New session each run.**
- **Notifications:** push, so the PR link reaches you.

Prompt:

```
Run the weekly content job for advrt.co.uk.

Invoke the `weekly-content` skill from this repository
(.claude/skills/weekly-content/SKILL.md) and follow it in full, in order. It
tells you everything: which Search Console properties to read through the
Windsor.ai connector, how to choose what to write, the house style and
frontmatter schema, the AIBox box id for the covers, the interlinking rules,
the verification steps, and how to ship.

Two things to hold on to as you work:

The skill opens with a section of constraints that do not bend — the
lead-buyer exclusivity that rules out spray foam and insulation removal, and
the rule that no figure measured on an ADVRT property ever appears in
published copy. Read that section before anything else and treat it as
binding.

Publishing nothing is an acceptable outcome. If the week's data is thin or the
only strong idea would cannibalise an existing post, write one piece or none
and say so in your report. Do not pad to hit a number.

The skill is currently in REVIEW mode, so the batch goes to a pull request
rather than to main. End by reporting the PR link, what you chose to write and
why, and what you decided not to write.
```

If the first run reports that it has no Windsor.ai tools, the connectors did
not attach — fix that on the routine rather than working around it in the
skill.
