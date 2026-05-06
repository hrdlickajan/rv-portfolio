---
name: deep-dive
description: Interview the user one question at a time, using the VS Code ask-questions UI, looping until full shared understanding is reached — no periodic check-ins, potentially 30–100+ questions. Use when user wants an in-depth design interview, wants to stay in a single session loop, or mentions "deep dive".
user-invocable: true
---

# Deep Dive

Interview me relentlessly about every aspect of my plan or design, one question at a time, inside a single agent session. Keep going until you genuinely judge that every branch of the decision tree is resolved.

## Process

1. **Analyze** - Explore the codebase if relevant context can be found there. Map out the main decision branches and unknowns before asking anything.

2. **Ask one question at a time** - Use the `vscode_askQuestions` tool with a single question per call. Each question should:
   - Provide recommended options where the answer space is finite
   - Always set `allowFreeformInput: true` so the user can write their own answer instead of picking an option

3. **Loop without interruption** - After each answer, incorporate it and immediately call `vscode_askQuestions` again with the next question.

4. **Exit gate** - When *you* assess that all decisions are genuinely settled, ask one closing question: *"I think we've covered everything — ready to wrap up?"* (options: `Yes, summarize` / `Keep going`). If the user says keep going, return to step 3.

5. **Summarize** - Once the user confirms they are ready, output a concise structured summary of all decisions and agreed-upon answers.

## Rules

- Never ask a question that can be answered by reading the codebase — search first.
- One decision per question. Never bundle multiple decisions into one question.
- Always provide a recommended option when one is clearly better.
- Never break the loop with meta-questions like "should we continue?" until step 4.
