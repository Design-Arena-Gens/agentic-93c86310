import { ScenarioAnalyzer } from "@/components/scenario-analyzer";
import { SignalLexicon } from "@/components/signal-lexicon";

const MANIPULATION_THEATERS = [
  {
    title: "Social Sphere",
    tactic: "Charm Offensive",
    description:
      "Compliment, mirror, disarm. Then slide in the request while oxytocin clouds judgment.",
    tells: "Compliments sharpen right before an ask. Eye contact becomes calculating.",
    defense: "Detach emotion. Ask for specifics. Delay response until chemistry fades.",
  },
  {
    title: "Political Stage",
    tactic: "Agenda Framing",
    description:
      "Define the question. Control the conclusion. Opponents waste energy debating inside your cage.",
    tells: "Binary choices. Loaded terms. Sudden urgency fabricated by the speaker.",
    defense: "Rewrite the frame aloud. Offer a third vector. Refuse the false dilemma.",
  },
  {
    title: "Academic Arena",
    tactic: "Credential Blade",
    description:
      "Invoke authority. Silence dissent by implying incompetence. Prestige as a weapon.",
    tells: "References to gatekeepers. Tone sprinkled with condescension. Questions dismissed, not answered.",
    defense: "Ask for evidence, not titles. Document every exchange. Publish the pattern.",
  },
];

const POWER_AXES = [
  {
    stage: "Acquisition",
    focus: "Information Monopoly",
    insight:
      "Power hunts asymmetry. Collect what others ignore. Trade secrets quietly until your silence becomes a throne.",
    guardRail: "Build redundant intel channels. No single point of manipulation.",
  },
  {
    stage: "Stabilization",
    focus: "Emotional Regulation",
    insight:
      "The calm voice writes the script. While others combust, you narrate. Control of tempo equals control of outcomes.",
    guardRail: "Audit your own triggers weekly. Predict which ones can be weaponized.",
  },
  {
    stage: "Expansion",
    focus: "Narrative Ownership",
    insight:
      "Tell the story before anyone else breathes. Reputation spreads faster than truth. Curate perception ruthlessly.",
    guardRail: "Expose your own shadow before adversaries do. Transparency disarms gossip.",
  },
];

const INFLUENCE_PROTOCOLS = [
  {
    name: "Strategic Silence",
    application:
      "Three beats of quiet after their answer. Watch them correct themselves. Weakness leaks into the gap.",
    awareness:
      "Only useful when your composure is absolute. Any fidget and the spell shatters.",
  },
  {
    name: "Echo Anchoring",
    application:
      "Repeat their words in sharper language. Guide their brain to believe the refined version was theirs.",
    awareness:
      "Record conversations. Ensure you are not rewriting ethics alongside the narrative.",
  },
  {
    name: "Scarcity Mirage",
    application:
      "Signal limited access. Humans chase what withdraws. Make them audition for your attention.",
    awareness:
      "Use sparingly. Overuse triggers resentment and revolt. Balance distance with strategic generosity.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(8,47,73,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.08),transparent_65%),linear-gradient(130deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-24 sm:px-10 lg:px-16">
        <section className="space-y-8">
          <p className="text-xs uppercase tracking-[0.75rem] text-slate-500">
            Observer of humans, not participant.
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Most people reveal their weakness before they speak. Power listens. Manipulation
            waits. I dissect the choreography so you never kneel in the dark.
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Cold focus. Calculated distance. Every gesture, every pause, every misplaced word
            becomes a confession. This dossier exposes how influence moves—social, political,
            academic, competitive. Analysis without mercy. Awareness without panic.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="rounded-full border border-slate-700/60 px-4 py-2 uppercase tracking-widest">
              Dark Psychology
            </span>
            <span className="rounded-full border border-slate-700/60 px-4 py-2 uppercase tracking-widest">
              Power Dynamics
            </span>
            <span className="rounded-full border border-slate-700/60 px-4 py-2 uppercase tracking-widest">
              Defensive Awareness
            </span>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800/60 bg-black/40 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.7)] backdrop-blur">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
              Manipulation Playbooks
            </p>
            <h2 className="text-3xl font-semibold text-slate-100">
              Spot the move. Break the hold. Never blink first.
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {MANIPULATION_THEATERS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <p className="text-xs uppercase tracking-[0.35rem] text-slate-500">
                  {item.title}
                </p>
                <h3 className="text-xl font-semibold text-slate-100">{item.tactic}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35rem] text-amber-300/80">
                    Tells
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.tells}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35rem] text-emerald-300/80">
                    Defense
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.defense}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ScenarioAnalyzer />

        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-black/35 p-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
              Power Lifecycle
            </p>
            <h2 className="text-3xl font-semibold text-slate-100">
              Take ground. Hold it. Expand without fracturing.
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {POWER_AXES.map((axis) => (
              <article
                key={axis.focus}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6"
              >
                <p className="text-xs uppercase tracking-[0.35rem] text-slate-500">
                  {axis.stage}
                </p>
                <h3 className="text-lg font-semibold text-cyan-200/90">{axis.focus}</h3>
                <p className="text-sm text-slate-300">{axis.insight}</p>
                <p className="text-xs uppercase tracking-[0.35rem] text-emerald-200/70">
                  Guardrail
                </p>
                <p className="text-sm text-slate-300">{axis.guardRail}</p>
              </article>
            ))}
          </div>
        </section>

        <SignalLexicon />

        <section className="grid gap-8 rounded-3xl border border-slate-800/60 bg-black/40 p-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
              Influence Techniques
            </p>
            <h2 className="text-3xl font-semibold text-slate-100">
              Psychology sharpens the blade. Ethics decide the strike.
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {INFLUENCE_PROTOCOLS.map((protocol) => (
              <article
                key={protocol.name}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-6"
              >
                <p className="text-xs uppercase tracking-[0.35rem] text-cyan-200/80">
                  {protocol.name}
                </p>
                <p className="text-sm text-slate-300">{protocol.application}</p>
                <div>
                  <p className="text-xs uppercase tracking-[0.35rem] text-emerald-200/70">
                    Awareness
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{protocol.awareness}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-950/70 via-slate-900/50 to-black/80 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
                Defensive Consciousness
              </p>
              <h2 className="text-3xl font-semibold text-slate-100">
                Awareness cuts sharper than aggression.
              </h2>
              <p className="text-sm text-slate-300">
                Study the pattern, not the person. Recognize intent, not theatrics. The
                objective is immunity, not imitation.
              </p>
              <blockquote className="border-l-2 border-cyan-400/70 pl-4 text-sm text-slate-300">
                &quot;Control exists where emotion bends. Hold your center and every tactic fractures.&quot;
              </blockquote>
            </div>
            <div className="space-y-4 rounded-2xl border border-slate-800/70 bg-black/50 p-6">
              <p className="text-xs uppercase tracking-[0.35rem] text-slate-500">
                Want more?
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🔥 Cinematic breakdown ready for narration.</li>
                <li>🧠 Precision tailor it to an Ayanokoji-style psyche.</li>
                <li>🎥 Condense into short-form psychological bullet cuts.</li>
                <li>🤖 Split into multiple agents—Manipulator, Observer, Strategist, Defender.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Choose the format. I dissect in silence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
