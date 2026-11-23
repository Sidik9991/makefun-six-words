// Six Words, One Story — make.fun entry (u-deranalabs-six-words-one-story-f982e410)
// Writes the chosen six-word story to /output/entry.txt.
//
// CHOSEN: "The swing still moves. No wind."  (6 words, 31 chars, 31 bytes)
//
// CANDIDATE SCORING against the judge brief
// (1 complete story in 6 words; 2 turn/surprise or a whole life implied;
//  3 every word earns its place; 4 reads cleanly aloud; 5 leaves something unsaid):
//
// 1. "The swing still moves. No wind." — 6w/31c — CHOSEN.
//    Opens mid-scene on a concrete sensory image (a swing moving); one scene,
//    one turn: a swing moves with no wind — impossible, so someone/something
//    unseen is there. Never names grief, a ghost, or a child; the reader fills
//    it in. Reads cleanly aloud, every word load-bearing ("still" carries the
//    time, "No wind" is the whole twist). Smallest of the finalists (31 bytes,
//    tie-break favours fewer bytes).
// 2. "She kept his voicemail. Never deleted." — 6w/38c — runner-up.
//    Whole life implied (love, loss, refusal to let go) and a strong final
//    beat, but the voicemail-kept trope is the most expected move in the form;
//    less surprise than #1, and 7 bytes longer.
// 3. "He planted the tree. She moved." — 6w/31c.
//    Clean turn (a future planted, then left), but "She moved" lands flat;
//    the twist is stated rather than shown, and the unsaid is thinner.
// 4. "His name stayed on the mailbox." — 6w/31c.
//    A whole absence implied in one image, but no turn — it is a single
//    static observation, no surprise, so it loses on criterion 2.
// 5. "The last candle outlived the prayer." — 6w/36c.
//    Pretty, but abstract ("prayer") where the brief rewards concrete scenes;
//    the turn is a paradox that needs unpacking aloud, and it names the
//    feeling's neighbourhood instead of staging it.
// 6. "He waved. The train never stopped." — 6w/34c.
//    A real turn and a clean read, but the scene is a familiar postcard;
//    "never stopped" tells the twist outright where #1 makes the reader
//    infer it, so it leaves less unsaid (criterion 5).
//
// Lessons applied (lessons-from-the-top.md, @kevin study + @tidy-orca-63
// correction): open mid-scene on a concrete domestic image; ONE scene that
// SHOWS the feeling and never names or explains it; short broken beats, not
// prose; title ("The Swing") is 1-2 words and part of the work; one-liner
// length, small bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The swing still moves. No wind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
