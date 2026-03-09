import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  IconSquarePencil,
  IconClockCounterClockwise,
  IconSquaresFour,
  IconDotsThreeVertical,
  IconCross,
  IconChevronDown,
  IconPlus,
  IconArrowRight,
  IconSquareLineSquareDashed,
} from "@mirohq/design-system";

/* ─── Escher-style AI avatar (gradient circle + sparkle icon) ─── */
function AgentAvatar({ size = 40 }: { size?: number }) {
  const iconSize = size === 28 ? 14 : 20;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background:
          "linear-gradient(42deg, #322BFE 0%, #6E3CFE 27%, #A34CFF 55%, #D05DFF 82%, #F66EFF 109%)",
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 20 20" fill="none">
        <path d="M8.678 3.207c.325-1.368 2.319-1.37 2.644 0l.026.142.042.255c.49 2.625 2.599 4.662 5.26 5.046 1.554.224 1.562 2.473 0 2.698-2.747.394-4.906 2.552-5.302 5.3-.224 1.562-2.474 1.554-2.698 0-.396-2.747-2.554-4.906-5.302-5.3-1.559-.225-1.556-2.474 0-2.699l.256-.042c2.625-.49 4.662-2.599 5.046-5.26l.028-.14Z" fill="white" />
        {size >= 40 && (
          <>
            <path d="M3.5 14c0 1.38 1.12 2.5 2.5 2.5v1c-1.38 0-2.5 1.12-2.5 2.5h-1c0-1.38-1.12-2.5-2.5-2.5v-1c1.38 0 2.5-1.12 2.5-2.5h1Z" fill="white" />
            <path d="M17.5 0c0 1.38 1.12 2.5 2.5 2.5v1c-1.38 0-2.5 1.12-2.5 2.5h-1c0-1.38-1.12-2.5-2.5-2.5v-1c1.38 0 2.5-1.12 2.5-2.5h1Z" fill="white" />
          </>
        )}
      </svg>
    </div>
  );
}

/* ─── Panel Header ─── */
function PanelHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 12,
        height: 56,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#222428", fontFamily: "var(--font-roobert)", fontFeatureSettings: "'ss01'" }}>
          Sidekick
        </span>
        <IconChevronDown size="small" color="icon-primary" />
        <div style={{ background: "#f1f2f5", borderRadius: 4, padding: "0 6px", height: 20, display: "flex", alignItems: "center", marginLeft: 4 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#222428" }}>AI Beta</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="New chat" variant="ghost" size="medium"><IconSquarePencil /></IconButton>
        <IconButton aria-label="History" variant="ghost" size="medium"><IconClockCounterClockwise /></IconButton>
        <IconButton aria-label="Library" variant="ghost" size="medium"><IconSquaresFour /></IconButton>
        <IconButton aria-label="More" variant="ghost" size="medium"><IconDotsThreeVertical /></IconButton>
        <IconButton aria-label="Close" variant="ghost" size="medium" onPress={() => (window as any).__closeAiPanel?.()}><IconCross /></IconButton>
      </div>
    </div>
  );
}

/* ─── Clickable suggestion pill ─── */
function PromptPill({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        border: "1px solid #e0e2e8",
        borderRadius: 8,
        padding: "6px 12px",
        fontSize: 14,
        fontWeight: 400,
        color: "#222428",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {label}
    </div>
  );
}

/* ─── User message bubble ─── */
function UserBubble({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", paddingLeft: 32 }}>
      <div style={{ background: "#f1f2f5", borderRadius: 8, padding: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.4 }}>{text}</span>
      </div>
    </div>
  );
}

/* ─── Syntax-highlighted formula token ─── */
const TOKEN_COLORS = {
  variable: "#6B21A8",   // purple — formula name (RICE_SCORE, PRIORITY)
  column: "#0891B2",     // teal — column references [Reach], [Impact]
  insights: "#7C3AED",   // violet — Insights labels
  operator: "#64748B",   // slate — = ( ) × + - /
  number: "#D97706",     // amber — numeric literals
  text: "#7B61FF",       // default purple
};

function highlightFormula(line: string): React.ReactNode[] {
  const regex = /(\[.*?\])|(\b\d+(?:\.\d+)?\b)|([=×+\-\/()])|(\b[A-Z_]{2,}\b)|(·\s*Insights)|(\s+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={`t${lastIndex}`} style={{ color: TOKEN_COLORS.text }}>{line.slice(lastIndex, match.index)}</span>);
    }
    const m = match[0];
    if (match[1]) {
      const hasInsights = m.includes("Insights");
      parts.push(<span key={`c${match.index}`} style={{ color: hasInsights ? TOKEN_COLORS.insights : TOKEN_COLORS.column, fontWeight: 600 }}>{m}</span>);
    } else if (match[2]) {
      parts.push(<span key={`n${match.index}`} style={{ color: TOKEN_COLORS.number, fontWeight: 600 }}>{m}</span>);
    } else if (match[3]) {
      parts.push(<span key={`o${match.index}`} style={{ color: TOKEN_COLORS.operator, fontWeight: 400 }}>{m}</span>);
    } else if (match[4]) {
      parts.push(<span key={`v${match.index}`} style={{ color: TOKEN_COLORS.variable, fontWeight: 700 }}>{m}</span>);
    } else if (match[5]) {
      parts.push(<span key={`i${match.index}`} style={{ color: TOKEN_COLORS.insights }}>{m}</span>);
    } else {
      parts.push(<span key={`s${match.index}`}>{m}</span>);
    }
    lastIndex = match.index + m.length;
  }
  if (lastIndex < line.length) {
    parts.push(<span key={`e${lastIndex}`} style={{ color: TOKEN_COLORS.text }}>{line.slice(lastIndex)}</span>);
  }
  return parts;
}

/* ─── Formula card (purple header + syntax highlighted body) ─── */
function FormulaCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div style={{ border: "1px solid #E0E2E8", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
      <div style={{ background: "#E8E0FF", display: "flex", alignItems: "center", gap: 8, padding: "12px 16px" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
          <path d="M8.678 3.207c.325-1.368 2.319-1.37 2.644 0l.026.142.042.255c.49 2.625 2.599 4.662 5.26 5.046 1.554.224 1.562 2.473 0 2.698-2.747.394-4.906 2.552-5.302 5.3-.224 1.562-2.474 1.554-2.698 0-.396-2.747-2.554-4.906-5.302-5.3-1.559-.225-1.556-2.474 0-2.699l.256-.042c2.625-.49 4.662-2.599 5.046-5.26l.028-.14Z" fill="#7B61FF" />
        </svg>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#3B2D7B", fontFamily: "var(--font-roobert)", fontFeatureSettings: "'ss01'" }}>{title}</span>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        {lines.map((line, i) => (
          <div key={i} style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.8, fontFamily: "'Courier New', monospace", whiteSpace: "pre-wrap", wordBreak: "break-word", letterSpacing: 0.3 }}>
            {highlightFormula(line)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Compact formula display (Σ header + green column text, for welcome-back & cell popover) ─── */
function CompactFormulaDisplay({ cardTitle, cardLines }: { cardTitle: string; cardLines: string[] }) {
  const name = cardTitle.replace("Formula - ", "");

  const renderLine = (line: string, lineIdx: number) => {
    const parts = line.split(/(\[.*?\])/);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const colName = part.slice(1, -1).replace(' · Insights', '');
        const isInsights = part.includes('Insights');
        return (
          <span key={`${lineIdx}-${i}`} style={{ color: isInsights ? '#6B21A8' : '#166534', fontSize: 16, fontWeight: 600, whiteSpace: 'nowrap' }}>
            {colName}
          </span>
        );
      }
      const cleaned = part.replace(/[A-Z_]{2,}\s*=\s*/, '');
      if (!cleaned.trim()) return null;
      return <span key={`${lineIdx}-${i}`} style={{ fontSize: 16, color: '#9CA3AF', fontWeight: 400 }}>{cleaned}</span>;
    });
  };

  return (
    <div style={{ border: '1px solid #E0E2E8', borderRadius: 12, padding: '20px 24px', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#6B21A8', fontFamily: "'Courier New', monospace" }}>Σ</span>
        <span style={{ fontSize: 18, fontWeight: 700, color: '#222428' }}>{name}</span>
      </div>
      <div style={{ paddingLeft: 12 }}>
        {cardLines.map((line, i) => (
          <div key={i} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, minHeight: 32 }}>
            {renderLine(line, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Formula data per intent × approach ─── */
const FORMULAS: Record<string, Record<string, {
  intro: string;
  cardTitle: string;
  cardLines: string[];
  bullets: string[];
  closing: string;
  insightsNudge?: string;
}>> = {
  prioritise: {
    roi: {
      intro: "I've built a RICE Score formula for your table. It ranks each item by its return on investment — taking into account how many people it reaches, how much impact it'll have, how confident you are, and how much work it takes.",
      cardTitle: "Formula - RICE Score",
      cardLines: [
        "RICE_SCORE = (",
        "  [Reach] × [Impact] × [Confidence]",
        "  ) / [Effort]",
      ],
      bullets: [
        "Reach is how many people or projects this affects — more reach scores higher.",
        "Impact is how much it moves the needle, rated 1 (minimal) to 3 (massive).",
        "Confidence is how sure you are it will succeed — 1 means certain, 0 means a guess.",
        "Effort is the work required. Because it divides the score, less effort = higher priority.",
      ],
      closing: "You can adjust the column names or scale the weights to fit your team's workflow.\nWould you like a different formula or more examples?",
      insightsNudge: "By the way, you have Likes and Error count from your Insights research — want me to factor those into the formula too?",
    },
    total: {
      intro: "I've created a Total Value Score for your table. It adds up all the positive signals to show which items have the highest overall potential.",
      cardTitle: "Formula - Total Value Score",
      cardLines: [
        "VALUE_SCORE = (",
        "  [Reach] + [Impact] + [Confidence]",
        "  ) - [Effort]",
      ],
      bullets: [
        "Reach, Impact, and Confidence are added together as positive signals.",
        "Effort is subtracted — items that take more work score lower.",
        "Higher score = more valuable overall.",
      ],
      closing: "This is simpler than RICE but doesn't weight the columns. Want to try a weighted version instead?",
      insightsNudge: "Your Insights data (Likes and Error count) could add real user signals here — want to include them?",
    },
  },
  score: {
    weighted: {
      intro: "I've built a Weighted Score formula. You assign importance to each column, and it calculates a single score per item.",
      cardTitle: "Formula - Weighted Score",
      cardLines: [
        "WEIGHTED_SCORE = (",
        "  [Reach] × 0.3 + [Impact] × 0.3",
        "  + [Confidence] × 0.2 + [Effort] × 0.2",
        ")",
      ],
      bullets: [
        "Each column gets a weight (0 to 1) based on how important it is to you.",
        "The weights should add up to 1 for a fair comparison.",
        "You can change the weights to match your team's priorities.",
      ],
      closing: "Want to adjust the weights, or try a different scoring method?",
      insightsNudge: "You also have Likes and Error count from Insights — real user data that could improve the score. Want to add them?",
    },
    normalize: {
      intro: "I've created a Normalized Score that puts all your columns on the same 0–100 scale before combining them. This is useful when columns have very different ranges.",
      cardTitle: "Formula - Normalized Score",
      cardLines: [
        "NORM_SCORE = (",
        "  normalize([Reach]) +",
        "  normalize([Impact]) +",
        "  normalize([Confidence])",
        "  ) - normalize([Effort])",
      ],
      bullets: [
        "Each column is scaled to 0–100 based on its min and max values.",
        "This prevents a column with big numbers from dominating the score.",
        "Effort is subtracted since lower effort is better.",
      ],
      closing: "Want to add custom weights to the normalized scores?",
      insightsNudge: "Your Insights fields (Likes, Error count) could be included here too — they'd get normalized like everything else.",
    },
  },
  average: {
    sum: {
      intro: "Here's a simple Sum formula that adds up the values across your numeric columns for each row.",
      cardTitle: "Formula - Row Sum",
      cardLines: [
        "ROW_SUM = [Reach] + [Impact]",
        "  + [Confidence] + [Effort]",
      ],
      bullets: [
        "Adds all four numeric columns together.",
        "Useful for seeing the total magnitude of each item.",
        "You can remove columns you don't want included.",
      ],
      closing: "Want an average instead, or only sum specific columns?",
      insightsNudge: "You also have Likes and Error count from Insights — want to include those in the sum?",
    },
    average: {
      intro: "Here's an Average formula that gives you the mean value across your numeric columns.",
      cardTitle: "Formula - Row Average",
      cardLines: [
        "ROW_AVG = ( [Reach] + [Impact]",
        "  + [Confidence] + [Effort] ) / 4",
      ],
      bullets: [
        "Divides the sum by the number of columns (4).",
        "Gives a balanced view of each item's overall level.",
        "Easier to compare than raw sums when columns have different scales.",
      ],
      closing: "Want to exclude any columns from the average?",
      insightsNudge: "You also have Likes and Error count from Insights — want to factor those into the average?",
    },
  },
  insights: {
    research_priority: {
      intro: "I've built a Research-Backed Priority Score using your Insights data. It combines your team's estimates with real user signals — Likes show demand, and Error count flags risk.",
      cardTitle: "Formula - Research Priority",
      cardLines: [
        "PRIORITY = (",
        "  ([Reach] × [Impact] × [Confidence])",
        "  + [Likes · Insights] × 2",
        "  - [Error count · Insights] × 3",
        "  ) / [Effort]",
      ],
      bullets: [
        "Reach × Impact × Confidence gives the base priority score, same as RICE.",
        "Likes (from Insights) adds a demand signal — items users actually want get boosted.",
        "Error count (from Insights) adds a risk penalty — more reported issues means higher urgency or lower confidence.",
        "Effort divides the total, so less effort = higher priority.",
      ],
      closing: "The multipliers (×2 for Likes, ×3 for Errors) control how much weight research data gets. You can adjust them.",
    },
    sentiment: {
      intro: "Here's a User Sentiment Score built from your Insights data. It measures how users feel about each item — positive signal from Likes, negative signal from Errors.",
      cardTitle: "Formula - User Sentiment",
      cardLines: [
        "SENTIMENT = (",
        "  [Likes · Insights]",
        "  - [Error count · Insights]",
        "  ) / ([Likes] + [Error count])",
      ],
      bullets: [
        "Likes represents positive user signal — things people want or voted for.",
        "Error count represents friction — things that are causing problems.",
        "Dividing by the total normalises the score between -1 and 1.",
        "A score near 1 means mostly positive; near -1 means mostly negative.",
      ],
      closing: "Want to combine this with your RICE columns for a fuller picture?",
    },
  },
};

/* ─── Stage 2 content per intent ─── */
const STAGE2: Record<string, {
  text: string;
  options: { key: string; description: string }[];
  pills: { key: string; label: string }[];
}> = {
  prioritise: {
    text: "I looked at your table and found 6 numeric columns — Reach, Impact, Confidence, Effort, plus Likes and Error count from Insights. Here are two ways to prioritise:",
    options: [
      { key: "1", description: "Rank by return on investment — which items give you the most bang for the buck, factoring in all four columns." },
      { key: "2", description: "Rank by total value — add up the positive signals and see which items score highest overall." },
    ],
    pills: [
      { key: "roi", label: "Go with return on investment" },
      { key: "total", label: "Show me total value instead" },
    ],
  },
  score: {
    text: "Your table has 6 numeric columns — including Likes and Error count from your Insights research. Here are two ways to score your items:",
    options: [
      { key: "1", description: "Weighted scoring — assign importance to each column and combine them into one score." },
      { key: "2", description: "Normalized scoring — put all columns on the same scale first, so no single column dominates." },
    ],
    pills: [
      { key: "weighted", label: "Use weighted scoring" },
      { key: "normalize", label: "Normalize and compare" },
    ],
  },
  average: {
    text: "I can calculate across your 6 numeric columns (including Likes and Error count from Insights). What would be more useful?",
    options: [
      { key: "1", description: "Sum — add them all up to see the total per row." },
      { key: "2", description: "Average — get the mean value for a balanced view." },
    ],
    pills: [
      { key: "sum", label: "Add them up" },
      { key: "average", label: "Give me the average" },
    ],
  },
  insights: {
    text: "Great choice — your Insights data is especially valuable because it reflects real user behaviour, not estimates. Here's what I can do with it:",
    options: [
      { key: "1", description: "Research-backed priority — combine your RICE columns with Likes (demand) and Error count (risk) to rank items by what users actually need." },
      { key: "2", description: "User sentiment — measure how users feel about each item based on the ratio of Likes to Errors." },
    ],
    pills: [
      { key: "research_priority", label: "Prioritise using research data" },
      { key: "sentiment", label: "Show me user sentiment" },
    ],
  },
};

/* ─── Main content area ─── */
function PanelBody({ chatMessages }: { chatMessages: { role: 'user' | 'ai'; text: string }[] }) {
  // Detect if there's an applied formula from a previous session
  const [isWelcomeBack] = useState(() => ((window as any).__appliedFormulas?.length ?? 0) > 0);
  // stage: "welcome_back" | "intent" → "approach" → "formula" → can loop back via "try different"
  const [stage, setStage] = useState<"welcome_back" | "intent" | "approach" | "formula">(() =>
    (window as any).__appliedFormulas?.length > 0 ? "welcome_back" : "intent"
  );
  const [intentChoice, setIntentChoice] = useState<string | null>(null);
  const [intentLabel, setIntentLabel] = useState("");
  const [approachChoice, setApproachChoice] = useState<string | null>(null);
  const [approachLabel, setApproachLabel] = useState("");
  // History of completed formula rounds (for "try a different approach")
  const [pastFormulas, setPastFormulas] = useState<{ approachKey: string; approachLabel: string }[]>([]);
  // 'idle' → 'loading' → 'preview' → 'done'
  const [applyPhase, setApplyPhase] = useState<'idle' | 'loading' | 'preview' | 'done'>('idle');
  // Welcome-back flow tracking
  const [welcomeBackChoice, setWelcomeBackChoice] = useState<string | null>(null);
  const [returnEdit, setReturnEdit] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when stage changes or new chat messages
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      }, 50);
    }
  }, [stage, pastFormulas.length, chatMessages.length]);

  const handleIntent = (key: string, label: string) => {
    setIntentChoice(key);
    setIntentLabel(label);
    setStage("approach");
  };

  const handleApproach = (key: string, label: string) => {
    setApproachChoice(key);
    setApproachLabel(label);
    setApplyPhase('loading');
    setStage("formula");

    // Immediately trigger preview on the table
    const formulaData = intentChoice ? FORMULAS[intentChoice]?.[key] : null;
    if (formulaData && intentChoice) {
      const colLabel = formulaData.cardTitle.replace("Formula - ", "");
      (window as any).__previewFormula?.(intentChoice, key, colLabel);

      // Listen for phase updates from the table
      (window as any).__onFormulaPhase = (phase: string) => {
        if (phase === 'preview') setApplyPhase('preview');
        if (phase === 'done') setApplyPhase('done');
      };
    }
  };

  const handleTryDifferent = () => {
    // Remove the current preview column from the table
    (window as any).__removePreviewFormula?.();

    if (approachChoice && approachLabel) {
      setPastFormulas((prev) => [...prev, { approachKey: approachChoice, approachLabel }]);
    }
    setApproachChoice(null);
    setApproachLabel("");
    setApplyPhase('idle');
    setStage("approach");
  };

  const handleApply = () => {
    if (!intentChoice || !approachChoice || !formula) return;
    // Store formula info for welcome-back mode
    if (!(window as any).__appliedFormulas) (window as any).__appliedFormulas = [];
    (window as any).__appliedFormulas.push({
      intentKey: intentChoice,
      approachKey: approachChoice,
      colLabel: formula.cardTitle.replace("Formula - ", ""),
      cardTitle: formula.cardTitle,
      cardLines: formula.cardLines,
    });
    // Confirm the existing preview — transitions it to "done"
    (window as any).__confirmFormula?.();
  };

  const handleEditFormula = () => {
    const applied = (window as any).__appliedFormulas;
    const last = applied?.[applied.length - 1];
    if (!last) return;
    setWelcomeBackChoice("Edit formula");
    setIntentChoice(last.intentKey);
    setApproachChoice(last.approachKey);
    setApplyPhase('done');
    setReturnEdit(true);
    setStage("formula");
  };

  const handleAddAnother = () => {
    setWelcomeBackChoice("Add another formula");
    setIntentChoice(null);
    setIntentLabel("");
    setApproachChoice(null);
    setApproachLabel("");
    setPastFormulas([]);
    setApplyPhase('idle');
    setReturnEdit(false);
    setStage("intent");
  };

  const s2 = intentChoice ? STAGE2[intentChoice] : null;
  const formula = intentChoice && approachChoice ? FORMULAS[intentChoice]?.[approachChoice] : null;
  // Filter out already-tried approaches from pills
  const triedKeys = new Set(pastFormulas.map((p) => p.approachKey));
  const availablePills = s2?.pills.filter((p) => !triedKeys.has(p.key) && p.key !== approachChoice) ?? [];

  return (
    <div
      ref={scrollRef}
      style={{
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
      }}
    >
      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 24px 24px" }}>

        {/* ════ Welcome Back ════ */}
        {isWelcomeBack && (() => {
          const applied = (window as any).__appliedFormulas ?? [];
          return (
            <>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <AgentAvatar size={28} />
                <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                  Welcome back! You have {applied.length === 1 ? 'one formula' : `${applied.length} formulas`} on this table:
                </span>
              </div>

              {applied.map((f: any, idx: number) => (
                <CompactFormulaDisplay key={idx} cardTitle={f.cardTitle} cardLines={f.cardLines} />
              ))}

              <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
                How are the numbers looking?
              </span>

              {stage === "welcome_back" && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <PromptPill label="Edit formula" onClick={handleEditFormula} />
                  <PromptPill label="Add another formula" onClick={handleAddAnother} />
                </div>
              )}

              {welcomeBackChoice && <UserBubble text={welcomeBackChoice} />}
            </>
          );
        })()}

        {/* ════ Stage 1: Intent (fresh start) ════ */}
        {!isWelcomeBack && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ background: "#f1f2f5", borderRadius: 999, display: "flex", alignItems: "center", paddingRight: 8 }}>
                <AgentAvatar />
                <IconChevronDown size="small" color="icon-primary" />
              </div>
            </div>

            <span style={{ fontSize: 20, fontWeight: 600, color: "#656b81", lineHeight: 1.4, fontFamily: "var(--font-roobert)", fontFeatureSettings: "'ss01'" }}>
              Hey [User],
            </span>

            <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
              I see you want to add a formula column. Your table has 6 numeric columns — and 2 of them, <span style={{ fontWeight: 600 }}>Likes</span> and <span style={{ fontWeight: 600 }}>Error count</span>, are coming from your <span style={{ color: "#7C3AED", fontWeight: 500 }}>Insights</span> research.
            </span>

            <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
              What are you trying to figure out?
            </span>
          </>
        )}

        {/* Intent pills — shown for fresh start OR after "Add another" from welcome back */}
        {stage === "intent" && (
          <>
            {isWelcomeBack && (
              <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
                What kind of calculation would you like?
              </span>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <PromptPill label="Help me prioritise what to work on first" onClick={() => handleIntent("prioritise", "Help me prioritise what to work on first")} />
              <PromptPill label="Use my research data to rank items" onClick={() => handleIntent("insights", "Use my research data to rank items")} />
              <PromptPill label="Score items based on their potential" onClick={() => handleIntent("score", "Score items based on their potential")} />
              <PromptPill label="Add up or average some numbers" onClick={() => handleIntent("average", "Add up or average some numbers")} />
              <PromptPill label="I have something specific in mind" onClick={() => handleIntent("prioritise", "I have something specific in mind")} />
            </div>
          </>
        )}

        {/* User's intent choice as bubble — only when label exists (not from welcome-back edit) */}
        {intentChoice && intentLabel && <UserBubble text={intentLabel} />}

        {/* ════ Stage 2: Approach (first time) — skip when returning from "Edit formula" ════ */}
        {!returnEdit && intentChoice && s2 && (
          <>
            <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6 }}>
              {s2.text}
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {s2.options.map((opt) => (
                <span key={opt.key} style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 600 }}>{opt.key}.</span> {opt.description}
                </span>
              ))}
            </div>

            {/* First-time approach pills (only if no past formulas and no current choice) */}
            {stage === "approach" && pastFormulas.length === 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s2.pills.map((p) => (
                  <PromptPill key={p.key} label={p.label} onClick={() => handleApproach(p.key, p.label)} />
                ))}
              </div>
            )}

            {/* First approach choice as bubble */}
            {pastFormulas.length === 0 && approachChoice && <UserBubble text={approachLabel} />}
          </>
        )}

        {/* ════ Past formula rounds (from "try different") — skip in returnEdit ════ */}
        {!returnEdit && pastFormulas.map((past, idx) => {
          const pastFormulaData = intentChoice ? FORMULAS[intentChoice]?.[past.approachKey] : null;
          if (!pastFormulaData) return null;
          return (
            <React.Fragment key={`past-${idx}`}>
              {idx === 0 && <UserBubble text={past.approachLabel} />}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <AgentAvatar size={28} />
                <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                  {pastFormulaData.intro}
                </span>
              </div>
              <FormulaCard title={pastFormulaData.cardTitle} lines={pastFormulaData.cardLines} />

              {/* User said "try different" */}
              <UserBubble text="Try a different approach" />

              {/* Sidekick responds with remaining options */}
              <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6 }}>
                Sure, let me show you another option.
              </span>

              {/* Next choice bubble */}
              {idx < pastFormulas.length - 1 && (
                <UserBubble text={pastFormulas[idx + 1].approachLabel} />
              )}
            </React.Fragment>
          );
        })}

        {/* Current "try different" approach pills (after past rounds, before new choice) */}
        {!returnEdit && stage === "approach" && pastFormulas.length > 0 && availablePills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {availablePills.map((p) => (
              <PromptPill key={p.key} label={p.label} onClick={() => handleApproach(p.key, p.label)} />
            ))}
          </div>
        )}

        {/* Current approach choice bubble (after "try different" rounds) */}
        {!returnEdit && pastFormulas.length > 0 && approachChoice && <UserBubble text={approachLabel} />}

        {/* ════ Stage 3: Current Formula ════ */}
        {formula && (
          <>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <AgentAvatar size={28} />
              <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                {formula.intro}
              </span>
            </div>

            <FormulaCard title={formula.cardTitle} lines={formula.cardLines} />

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <AgentAvatar size={28} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#222428", lineHeight: 1.5 }}>Explanation:</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 4 }}>
                  {formula.bullets.map((b, i) => (
                    <span key={i} style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
                      •&ensp;{b}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, marginTop: 4 }}>
                  {formula.closing}
                </span>
              </div>
            </div>

            {applyPhase === 'loading' ? (
              /* Loading — preview generating on the table */
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <AgentAvatar size={28} />
                <span style={{ fontSize: 14, fontWeight: 400, color: "#6f7489", lineHeight: 1.6, paddingTop: 4 }}>
                  Generating preview on your table
                  <span style={{ display: "inline-block", width: 20, textAlign: "left" }}>
                    <span style={{ animation: "dotPulse 1.4s infinite" }}>...</span>
                  </span>
                </span>
              </div>
            ) : applyPhase === 'preview' ? (
              /* Preview ready — show Apply + Try different buttons */
              <>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <AgentAvatar size={28} />
                  <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                    Preview is ready — check the <span style={{ fontWeight: 600 }}>{formula.cardTitle.replace("Formula - ", "")}</span> column in your table. If it looks good, apply it.
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <div
                    onClick={handleApply}
                    style={{
                      background: "#222428",
                      color: "#fff",
                      borderRadius: 8,
                      padding: "8px 16px",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    Apply to table
                  </div>
                  {availablePills.length > 0 && (
                    <div
                      onClick={handleTryDifferent}
                      style={{
                        background: "#fff",
                        color: "#222428",
                        border: "1px solid #222428",
                        borderRadius: 8,
                        padding: "8px 16px",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Try a different approach
                    </div>
                  )}
                </div>
              </>
            ) : applyPhase === 'done' ? (
              /* Done */
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="12" cy="12" r="12" fill="#059669" />
                  <path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#059669", lineHeight: 1.6, paddingTop: 3 }}>
                  Done — {formula.cardTitle.replace("Formula - ", "")} column added to your table.
                </span>
              </div>
            ) : null}

            {/* Insights nudge — only for formulas that don't already use Insights */}
            {formula.insightsNudge && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, background: "#F5F3FF", borderRadius: 8, padding: 12 }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M8.678 3.207c.325-1.368 2.319-1.37 2.644 0l.026.142.042.255c.49 2.625 2.599 4.662 5.26 5.046 1.554.224 1.562 2.473 0 2.698-2.747.394-4.906 2.552-5.302 5.3-.224 1.562-2.474 1.554-2.698 0-.396-2.747-2.554-4.906-5.302-5.3-1.559-.225-1.556-2.474 0-2.699l.256-.042c2.625-.49 4.662-2.599 5.046-5.26l.028-.14Z" fill="#7C3AED" />
                </svg>
                <span style={{ fontSize: 13, fontWeight: 400, color: "#5B21B6", lineHeight: 1.5 }}>
                  {formula.insightsNudge}
                </span>
              </div>
            )}
          </>
        )}

        {/* ════ Free-text chat messages ════ */}
        {chatMessages.length > 0 && (
          <>
            {chatMessages.map((msg, i) =>
              msg.role === 'user' ? (
                <UserBubble key={`chat-${i}`} text={msg.text} />
              ) : (
                <div key={`chat-${i}`} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <AgentAvatar size={28} />
                  <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                    {msg.text}
                  </span>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Canned AI responses for free-text chat ─── */
const CANNED_RESPONSES: { match: RegExp; reply: string }[] = [
  { match: /rice|priorit/i, reply: "RICE scoring is a great way to prioritise — it combines Reach, Impact, Confidence, and Effort into a single number. Want me to generate a RICE formula for your table?" },
  { match: /insight|likes|error count|research/i, reply: "Your Insights data (Likes and Error count) reflects real user behaviour. I can factor those into any formula to make it more accurate. Want me to show you how?" },
  { match: /weight|custom/i, reply: "I can create a weighted formula where you control how much each column matters. Just tell me which columns to include and I'll set up the weights." },
  { match: /sum|add|total/i, reply: "I can add up any combination of your numeric columns. Would you like a simple sum, or should I subtract Effort from the total?" },
  { match: /average|mean/i, reply: "An average across your columns gives a balanced view of each item. Want me to include all 6 numeric columns, or just specific ones?" },
  { match: /explain|what does|how does|what is/i, reply: "Happy to explain! RICE stands for Reach × Impact × Confidence ÷ Effort. It ranks items by their return on investment — higher scores mean more value for less work." },
  { match: /change|adjust|modify|edit/i, reply: "You can adjust any formula after it's applied. Just let me know what you'd like to change — column weights, which fields to include, or the calculation method." },
  { match: /hello|hi|hey/i, reply: "Hey! I'm here to help you build formulas for your table. What would you like to figure out?" },
  { match: /thank|thanks/i, reply: "You're welcome! Let me know if you need anything else with your table." },
];

const DEFAULT_REPLY = "I can help you create formulas, prioritise items, or work with your Insights data. Try asking me something like \"help me prioritise\" or \"use my research data\".";

function getAiReply(message: string): string {
  for (const { match, reply } of CANNED_RESPONSES) {
    if (match.test(message)) return reply;
  }
  return DEFAULT_REPLY;
}

/* ─── Input area ─── */
function PanelInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const hasText = text.trim().length > 0;

  return (
    <div style={{ flexShrink: 0, padding: "0 24px 16px", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          background: "#f1f2f5",
          borderRadius: "8px 8px 0 0",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <IconSquareLineSquareDashed size="small" color="icon-secondary" />
        <span style={{ fontSize: 12, fontWeight: 400, color: "#222428", lineHeight: 1.5 }}>
          Select objects on the canvas to add context
        </span>
      </div>

      <div
        style={{
          border: `1px solid ${hasText ? "#7B61FF" : "#e0e2e8"}`,
          borderRadius: 8,
          background: "#fff",
          position: "relative",
          zIndex: 2,
          transition: "border-color 0.15s",
        }}
      >
        <div style={{ padding: "12px 16px 4px" }}>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              // Auto-resize
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Enter your prompt here..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: 14,
              fontWeight: 400,
              color: "#222428",
              lineHeight: 1.4,
              fontFamily: "var(--font-noto)",
              background: "transparent",
              minHeight: 24,
              maxHeight: 120,
              overflow: "auto",
            }}
            rows={1}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px 8px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="Add" variant="ghost" size="medium"><IconPlus /></IconButton>
            <div style={{ width: 1, height: 32, background: "#e0e2e8", margin: "0 2px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 4, height: 32, padding: "0 8px", cursor: "pointer" }}>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  clipRule="evenodd"
                  d="M2 0C.895 0 0 .895 0 2v9.333C0 12.438.895 13.333 2 13.333h9.333c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2H2Zm-.667 2c0-.368.299-.667.667-.667h9.333c.369 0 .667.299.667.667v2H1.333V2ZM6 5.333h6V8H6V5.333ZM4.667 8V5.333H1.333V8h3.334ZM1.333 9.333h3.334V12H2c-.368 0-.667-.298-.667-.667V9.333ZM6 9.333h6v2c0 .369-.298.667-.667.667H6V9.333Z"
                  fill="#3859FF"
                  fillRule="evenodd"
                />
              </svg>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#3859ff", lineHeight: 1 }}>Create table</span>
              <IconCross size="small" color="icon-brand" />
            </div>
          </div>

          <div
            onClick={handleSend}
            style={{
              background: hasText ? "#222428" : "#e9eaef",
              borderRadius: 4,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: hasText ? "pointer" : "default",
              transition: "background 0.15s",
            }}
          >
            <IconArrowRight size="small" color={hasText ? "icon-on-brand" : "icon-disabled"} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function AiPanelSolutionReview() {
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);

  const handleSend = (text: string) => {
    // Add user message
    setChatMessages((prev) => [...prev, { role: 'user', text }]);
    // Simulate AI thinking, then reply
    setTimeout(() => {
      const reply = getAiReply(text);
      setChatMessages((prev) => [...prev, { role: 'ai', text: reply }]);
    }, 800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", maxWidth: "100%", background: "#fff", borderRadius: 8, overflow: "hidden" }}>
      <PanelHeader />
      <PanelBody chatMessages={chatMessages} />
      <PanelInput onSend={handleSend} />
    </div>
  );
}
