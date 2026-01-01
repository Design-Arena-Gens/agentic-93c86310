"use client";

import { useMemo, useState } from "react";

type Scenario = {
  id: string;
  title: string;
  environment: string;
  primaryGoal: string;
  manipulationSignals: string[];
  leveragePoints: string[];
  counterMoves: string[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "boardroom",
    title: "Executive Boardroom",
    environment: "Corporate hierarchy, status-sensitive.",
    primaryGoal: "Dominate decision flow without open confrontation.",
    manipulationSignals: [
      "Strategic compliments right before dissent.",
      "Information withholding until tension peaks.",
      "Delegation framed as empowerment, hiding accountability transfer.",
    ],
    leveragePoints: [
      "Mirror calm breathing—forces others to match your tempo.",
      "Use silence after objections; let insecurity surface.",
      "Summarize the scattered points; own the narrative spine.",
    ],
    counterMoves: [
      "Surface hidden metrics; strip away manufactured uncertainty.",
      "Ask for timeline commitments to expose hedging.",
      "Call for written recap—forces manipulators into clarity.",
    ],
  },
  {
    id: "political",
    title: "Political Arena",
    environment: "Coalitions, public optics, whispered debts.",
    primaryGoal: "Shape perceived inevitability of your agenda.",
    manipulationSignals: [
      "Leaking selective truths that corner dissenters.",
      "Aligning with a 'neutral' voice that owes favors.",
      "Framing opposition as emotional while staying stoic.",
    ],
    leveragePoints: [
      "Seed inevitability through controlled data drops.",
      "Offer public praise to a rival; watch who flinches.",
      "Maintain eye contact only during summary; it anchors authority.",
    ],
    counterMoves: [
      "Expose the timeline of leaks; reveal choreography.",
      "Ask each ally for private commitments—track inconsistencies.",
      "Redirect the narrative to mutual stakes, not personalities.",
    ],
  },
  {
    id: "academic",
    title: "Academic Power Struggle",
    environment: "Reputation economies, peer review as weapon.",
    primaryGoal: "Guard intellectual territory and funding leverage.",
    manipulationSignals: [
      "Methodology concerns raised in casual hallway talks.",
      "Paper co-authorships dangled to sideline critics.",
      "Selective citation to rewrite ownership of ideas.",
    ],
    leveragePoints: [
      "Document every informal critique; bring them into daylight.",
      "Offer collaboration but on your framework—set the standard.",
      "Publish concise briefs to control how your work is referenced.",
    ],
    counterMoves: [
      "Force public peer review where logic must stand unmasked.",
      "Clarify authorship boundaries in writing—no ambiguity.",
      "Map funding influence networks; expose conflicts calmly.",
    ],
  },
  {
    id: "competitive",
    title: "High-Stakes Competition",
    environment: "Limited time, inflated egos, observer pressure.",
    primaryGoal: "Maintain composure while opponents destabilize.",
    manipulationSignals: [
      "Rapid-fire questions to fracture attention.",
      "Subtle physical encroachment to trigger limbic reactions.",
      "Feigning vulnerability to lower your guard.",
    ],
    leveragePoints: [
      "Control breathing cadence—sets rhythm for the room.",
      "Reframe attacks as data requests; stay surgical.",
      "Anchor your space physically; micro-adjust posture.",
    ],
    counterMoves: [
      "Slow the tempo: 'Clarify that point'—forces them to repeat.",
      "Call out proximity play with a smile; disarms aggression.",
      "Keep notes visible; demonstrates you are unshaken.",
    ],
  },
];

export function ScenarioAnalyzer() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(SCENARIOS[0].id);

  const scenario = useMemo(
    () => SCENARIOS.find((item) => item.id === selectedScenarioId) ?? SCENARIOS[0],
    [selectedScenarioId],
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/50 p-8 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-950/40 to-black/80" />
      <div className="relative flex flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.5rem] text-slate-400">
              Scenario Decoder
            </p>
            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
              Select the battlefield. Observe the puppeteers.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedScenarioId(item.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  item.id === scenario.id
                    ? "border-cyan-400/70 bg-cyan-500/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                    : "border-slate-700/80 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="space-y-3 rounded-2xl border border-slate-800/60 bg-black/40 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Environment
            </p>
            <h3 className="text-xl font-semibold text-slate-50">{scenario.title}</h3>
            <p className="text-sm text-slate-400">{scenario.environment}</p>
            <p className="text-sm text-cyan-200/90">{scenario.primaryGoal}</p>
          </article>

          <article className="space-y-3 rounded-2xl border border-slate-800/60 bg-black/40 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Leverage Points
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {scenario.leveragePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="space-y-3 rounded-2xl border border-slate-800/60 bg-black/40 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Manipulation Signals
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {scenario.manipulationSignals.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber-300/80" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-3 rounded-2xl border border-slate-800/60 bg-black/40 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Defensive Counter-Moves
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {scenario.counterMoves.map((move) => (
                <li key={move} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300/80" />
                  <span>{move}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
