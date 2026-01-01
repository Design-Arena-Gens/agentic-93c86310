"use client";

const SIGNALS = [
  {
    label: "Blink Suppression",
    tells: "Spikes before deception; brain overloading.",
    counter: "Slow blink response. Force them into detail.",
  },
  {
    label: "Half-Smile Asymmetry",
    tells: "Social dominance display. Hides contempt.",
    counter: "Stay neutral. Ask for reasoning; expose the mask.",
  },
  {
    label: "Chin Withdrawal",
    tells: "Micro-flinch—status threat registered.",
    counter: "Apply gentle silence. Let them fill the void.",
  },
  {
    label: "Shoulder Venting",
    tells: "Pressure valve; anger contained.",
    counter: "Diffuse with data; deny them emotional escalation.",
  },
];

export function SignalLexicon() {
  return (
    <section className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.65)]">
      <header className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
          Micro-Expression Log
        </p>
        <h2 className="text-3xl font-semibold text-slate-100">
          Bodies confess what tongues conceal.
        </h2>
      </header>
      <ul className="grid gap-6 md:grid-cols-2">
        {SIGNALS.map((signal) => (
          <li
            key={signal.label}
            className="rounded-2xl border border-slate-800/70 bg-black/40 p-6 transition-colors hover:border-cyan-400/50 hover:bg-slate-900/60"
          >
            <p className="text-sm uppercase tracking-widest text-cyan-200/80">
              {signal.label}
            </p>
            <p className="mt-3 text-sm text-slate-300">{signal.tells}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Counter
            </p>
            <p className="mt-1 text-sm text-slate-300">{signal.counter}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
