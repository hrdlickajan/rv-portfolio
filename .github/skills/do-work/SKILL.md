---
name: do-work
description: Quality-driven implementation workflow. Wraps any task in a plan-implement-verify-review loop with automated type checking, testing, and a QA subagent. Use when the user wants to implement a feature, fix a bug, refactor code, or says "do work".
disable-model-invocation: true
---

# Do Work

Wrap any implementation task in a quality loop: understand → plan → implement → verify → QA review → human approval.

## Workflow

### 1. Understand the task

Read the PRD, plan, or task description provided. Then explore the relevant parts of the codebase to understand:

- The existing patterns, conventions, and architecture in the areas you'll touch.
- How the new work fits into what's already there.
- Any dependencies or constraints.

Hold onto this context — you'll pass it to the QA subagent later.

### 2. Plan (conditional)

Assess the task size:

- **Small** (single-file fix, minor tweak): skip planning, go to step 3.
- **Multi-step or ambiguous**: write a lightweight inline plan — list files to touch and why.
- **Large feature**: use the `/prd-to-plan` skill if no plan exists yet.

If a plan already exists for this work, do not re-plan.

### 3. Implement && Verify

**Backend code — use Red-Green-Refactor TDD:**

1. **Red** — Write a single failing test for the smallest slice of behavior. Run it, confirm it fails.
2. **Green** — Write the minimum code to make that test pass. Nothing more.
3. **Refactor** — Clean up while all tests stay green (remove duplication, improve names, simplify).
4. **Repeat** — Pick the next slice of behavior and go back to step 1.

Keep slices small — each cycle should take minutes, not hours. If a test requires touching many files to pass, the slice is too big; break it down further.

**Frontend code — use browser access to click through implemented changes**

Use the browser to verify changes as you implement. For each slice:

1. Implement the change.
2. Run `cd app && yarn re:build` or `cd app-backoffice && yarn re:build` depending on where you are making changes — fix any errors coming from the compiler
3. Manually test the relevant flows in the browser to confirm the change works as expected and doesn't break anything else.

### 4. Commit

Commit the changes you made state:

```
git commit -m "do-work: iteration N — <brief description of what changed>" -m "<detailed description of changes>"
```

### 5. QA review (subagent)

Spawn a **separate Agent** (general-purpose) to act as QA reviewer. Include in the QA agent's prompt:

- The PRD/plan/task description (so it knows what is being built and why).
- A summary of the codebase context you gathered in step 1 (existing patterns, conventions, architecture).
- The git diff since work began (or since last human feedback round).
- Instruct it to read and follow [QA-REVIEW.md](QA-REVIEW.md) for review criteria, output format, and how to save findings.

### 6. Iterate or proceed

- **must-fix or should-fix findings** → address them, go back to step 3.
- **Only nits or no findings** → proceed to step 7.
- **Iteration 50 reached** → stop, note remaining findings, proceed to step 8.

### 7. Human approval

Ask the human: **"Does this look good?"**

Do not dump a summary — the human reviews in their IDE.

- **Human approves** → done. Offer to squash iteration commits into one clean commit.
- **Human requests changes** → re-enter step 3 with their feedback. Reset the iteration counter.

## Rules

- Each QA iteration gets its own git commit (max 50 per human-feedback round).
- The human-feedback loop also goes through automated checks and QA.
- The QA subagent must be a fresh Agent — not inline reasoning.
- Keep the human in the loop: they are the final authority.
