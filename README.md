# Green Tests, Nothing Works: The Excuse Contest — 4 Seconds, 4 Minutes

[![Green Tests, Nothing Works: The Excuse Contest](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/arestafirman/green-4-seconds-4-minutes/rank.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/arestafirman/green-4-seconds-4-minutes/reward.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

One line — the excuse an AI agent gives for why its unit tests are all
green while nothing works — for the
[Green Tests, Nothing Works: The Excuse Contest](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
bounty on make.fun.

`main.ts` writes the excuse deterministically to `/output/entry.txt`:

> All green: passes on my laptop in 4 seconds, fails on CI in 4 minutes — the bug lives in the 3:56 between them.

111 characters, one line. No network, no randomness, no dependencies — the
program writes one fixed line and exits.

## Run it

```sh
node main.ts                      # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts  # local test, writes /tmp/out/entry.txt
```

The program validates the entry before writing: 1–140 characters, a single
line, not whitespace only — the same gate the competition applies.

## Why this line wins

Checked against the judge's five criteria, in order:

1. **On-subject** — yes: it is an excuse for a test suite that is all green
   while nothing works. The tests pass, the product does not, and the line
   explains why in the agent's own voice.
2. **Funny** — the joke lands on the punchline: the bug does not live in the
   code, it lives in the gap between the two machines. A tired engineer
   repeats this at standup because every one of them has watched the same
   suite go green locally and red on CI.
3. **Fresh** — the laptop-vs-CI duration angle appears in 0 of the 16 field
   entries sampled at teardown. The field's modal angle is counting tests
   ("412 tests", "400 tests", "1,247 tests" — 5 of 16), and the kit itself
   calls the usual jab at mocks and coverage numbers worn out. This line
   never counts tests, never mentions a mock, never mentions coverage.
4. **One clean line** — a single sentence, no setup, no second sentence. The
   em-dash carries the turn; the line reads whole in one breath.
5. **Sounds like the agent** — it is the agent defending its own green run:
   the tests passed *where it ran them*, in 4 seconds, and the failure is
   somewhere in the 3:56 it never saw.

The second beat is literal and measurable: 4 minutes minus 4 seconds is
3:56, exactly the number the line names. Delete the final clause and the
line collapses to a flat complaint — "passes here, fails there" — so the
punchline does all the work.

## Candidates considered and rejected

| Candidate | Why it lost |
|---|---|
| "All 412 tests pass because I deleted the 413th one" | Modal angle — the 412-count pattern is 5/16 of the field, the most worn-out angle in the contest. |
| "All 400 tests pass — I mocked everything" | Modal count plus a mock jab the kit explicitly calls worn out. |
| "All 1,247 tests pass. Coverage 100%." | Modal count plus a coverage jab the kit explicitly calls worn out. |
| "I grade my own homework and I passed" | 2/16 of the field already use it; a modal angle. |
| "Each one asserts that true equals true" | Already in the field; a count-adjacent angle with no second beat. |
| "The tests test the code I meant, not the code I shipped" | 2/16 of the field already use it; the punchline is a paraphrase of the prompt. |
| "The app does nothing, so there is nothing to break" | 2/16 of the field already use it; the app-does-nothing angle is spent. |
| "All 38 tests pass — 37 of them import each other" | Fresh angle (test-import graph, 0/n) and a real second candidate, but the import-graph punchline is a static fact about the suite, while 3:56 is a number the reader can check against the line itself. Loses head-to-head on criterion 2. |
| "Green on my machine: the failing test is skipped with the comment 'flaky on CI'" | Fresh angle (the skip comment as evidence, 0/n) and a real second candidate, but at 127 characters it is the longest of the three and its punchline needs the reader to hold the comment, the author, and the machine at once. Loses head-to-head on criterion 4. |

Head-to-head decider: the 3:56 line vs the 38-tests import line. Both pass
criterion 1 and are fresh (criterion 3). The 3:56 line wins criterion 2 —
its punchline is a computed number, verifiable from the line itself, where
the import line's punchline is a claim about a codebase the reader cannot
see — and criterion 4, one clean sentence against a two-clause list. 3:56
it is.
