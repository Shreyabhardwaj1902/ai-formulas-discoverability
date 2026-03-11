import React, { useState, useEffect, useRef } from "react";
import {
  Button,
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
  IconSparks,
  IconSparksFilled,
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

/* ─── Hidden SVG gradient definition (rendered once) ─── */
function AiGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
      <defs>
        <linearGradient id="ai-sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(42)">
          <stop offset="0%" stopColor="#322BFE" />
          <stop offset="27%" stopColor="#6E3CFE" />
          <stop offset="55%" stopColor="#A34CFF" />
          <stop offset="82%" stopColor="#D05DFF" />
          <stop offset="100%" stopColor="#F66EFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Gradient sparkle icon wrapper ─── */
function GradientSparks({ filled, size = "small" }: { filled?: boolean; size?: "small" | "medium" | "large" }) {
  return (
    <span className="gradient-sparkle" style={{ display: "inline-flex", flexShrink: 0 }}>
      {filled ? <IconSparksFilled size={size} /> : <IconSparks size={size} />}
    </span>
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

/* ─── Typing indicator (three bouncing dots) ─── */
function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <AgentAvatar size={28} />
      <div style={{ display: "flex", alignItems: "center", gap: 4, paddingTop: 4 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#AEB2C0",
              animation: `typingBounce 1.4s ease-in-out ${i * 0.16}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Streaming text reveal (word-by-word, like Claude/Gemini) ─── */
function StreamingText({ text, speed = 20, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const words = text.split(' ');
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);
  // Reveal 2-3 words at a time for natural pacing
  const chunkSize = words.length > 30 ? 3 : 2;

  useEffect(() => {
    if (count >= words.length) {
      if (!doneRef.current) {
        doneRef.current = true;
        onComplete?.();
      }
      return;
    }
    const t = setTimeout(() => setCount((c) => Math.min(c + chunkSize, words.length)), speed);
    return () => clearTimeout(t);
  }, [count, words.length, speed, chunkSize]);

  return <>{words.slice(0, count).join(' ')}</>;
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
        <GradientSparks filled size="small" />
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

/* ─── Done state with expandable formula syntax ─── */
function DoneWithFormula({ formula }: { formula: { cardTitle: string; cardLines: string[] } }) {
  const [expanded, setExpanded] = useState(false);
  const name = formula.cardTitle.replace("Formula - ", "");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, animation: "fadeSlideIn 400ms ease-out both" }}>
      {/* Success row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="12" fill="#059669" />
          <path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#059669", lineHeight: 1.6 }}>
          Done — {name} column added to your table.
        </span>
      </div>

      {/* Clickable formula peek */}
      <div
        onClick={() => setExpanded((v) => !v)}
        style={{
          border: "1px solid #E0E2E8",
          borderRadius: 8,
          overflow: "hidden",
          cursor: "pointer",
          transition: "box-shadow 150ms ease",
          boxShadow: expanded ? "0 2px 8px rgba(34,36,40,0.10)" : "none",
        }}
      >
        {/* Header bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "8px 12px", background: expanded ? "#F9FAFB" : "#fff",
          transition: "background 150ms ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#6B21A8", fontFamily: "'Courier New', monospace" }}>Σ</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#222428" }}>{name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "linear-gradient(135deg, #EDE9FE, #F3E8FF)", borderRadius: 4, padding: "2px 6px" }}>
              <GradientSparks size="small" />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#7C3AED" }}>AI generated</span>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              style={{ transition: "transform 200ms ease", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M4 6l4 4 4-4" stroke="#6f7489" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Expandable syntax body */}
        {expanded && (
          <div style={{ padding: "10px 16px 14px", borderTop: "1px solid #E0E2E8", background: "#FAFAFE" }}>
            {formula.cardLines.map((line, i) => (
              <div key={i} style={{
                fontSize: 13, fontWeight: 500, lineHeight: 1.8,
                fontFamily: "'Courier New', monospace", whiteSpace: "pre-wrap",
                wordBreak: "break-word", letterSpacing: 0.3,
              }}>
                {highlightFormula(line)}
              </div>
            ))}
          </div>
        )}
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

/* ─── Main content area (owns chat state + stage flow) ─── */
function PanelBody() {
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
  const streamedSet = useRef(new Set<number>());
  const [, forceUpdate] = useState(0);
  // Progressive reveal: "analyzing" → intro → card → explanation → outcomes
  const [formulaRevealStep, setFormulaRevealStep] = useState<0 | 1 | 2 | 3 | 4>(0);

  // Chat state (owned here so handlers can trigger stage flow)
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  // Track the last AI chat reply so "yes/no" follow-ups have context
  const lastAiReplyRef = useRef<string>("");

  // Auto-scroll to bottom when stage changes or new chat messages or reveal progresses
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      }, 50);
    }
  }, [stage, pastFormulas.length, chatMessages.length, formulaRevealStep]);

  // Scroll when typing indicator appears
  useEffect(() => {
    if (isTyping && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      }, 100);
    }
  }, [isTyping]);

  // Current formula data
  const formula = intentChoice && approachChoice ? FORMULAS[intentChoice]?.[approachChoice] : null;

  // Progressive reveal when formula stage is entered
  useEffect(() => {
    if (stage !== "formula" || !formula) { setFormulaRevealStep(0); return; }
    // If returning to edit, skip the animation
    if (returnEdit) { setFormulaRevealStep(4); return; }
    // Step 0 → 1 (analyzing → intro text): 1.5s
    const t1 = setTimeout(() => setFormulaRevealStep(1), 1500);
    // Step 1 → 2 (show formula card): 2.5s
    const t2 = setTimeout(() => setFormulaRevealStep(2), 2500);
    // Step 2 → 3 (show explanation): 3.5s
    const t3 = setTimeout(() => setFormulaRevealStep(3), 3500);
    // Step 3 → 4 (show outcomes/actions): 4.5s
    const t4 = setTimeout(() => setFormulaRevealStep(4), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [stage, formula, returnEdit]);

  // Build context for the reply function (always current, no ref delay)
  const chatContext: ChatContext = {
    intentKey: intentChoice,
    approachKey: approachChoice,
    formulaTitle: formula?.cardTitle?.replace("Formula - ", "") ?? null,
    formulaBullets: formula?.bullets ?? null,
    formulaLines: formula?.cardLines ?? null,
    hasInsightsNudge: !!formula?.insightsNudge,
    insightsNudgeText: formula?.insightsNudge ?? null,
    closingText: formula?.closing ?? null,
    applyPhase,
    stage,
  };

  // ── Chat handler — triggers stage flow when possible, otherwise gives text reply ──
  const handleChatSend = (text: string) => {
    const lower = text.toLowerCase().trim();
    const isAffirmative = /^(yes|yeah|yep|sure|ok|okay|please|do it|go ahead|absolutely|definitely|add them|sounds good|let's do it|why not|yea|ya|y$|go for it|first one|option 1|1$)/i.test(lower);
    const isSecondOption = /^(second|option 2|2$|the other one|other|latter)/i.test(lower);

    // ── Intent stage: match typed text to an intent, or default to best guess ──
    if (stage === "intent" || stage === "welcome_back") {
      const intentMatch = matchIntent(lower);
      // Always advance — if no specific match, default to "prioritise"
      handleIntent(intentMatch || "prioritise", text);
      return;
    }

    // ── Approach stage: match typed text to an approach pill ──
    if (stage === "approach" && intentChoice) {
      const s2 = STAGE2[intentChoice];
      if (s2) {
        // Try to match text to a specific approach
        const approachMatch = matchApproach(lower, intentChoice, s2);
        if (approachMatch) {
          handleApproach(approachMatch.key, text);
          return;
        }
        // "yes", "first one", "1" → pick first available pill
        if (isAffirmative && s2.pills.length > 0) {
          const pill = s2.pills[0];
          handleApproach(pill.key, text);
          return;
        }
        // "second", "2", "other" → pick second pill
        if (isSecondOption && s2.pills.length > 1) {
          const pill = s2.pills[1];
          handleApproach(pill.key, text);
          return;
        }
        // Check if user is switching to a different intent
        const intentRematch = matchIntent(lower);
        if (intentRematch && intentRematch !== intentChoice) {
          handleIntent(intentRematch, text);
          return;
        }
        // Anything else at approach stage → just pick the first approach
        handleApproach(s2.pills[0].key, text);
        return;
      }
    }

    // ── Formula stage: "yes" to insights nudge or closing ──
    if (stage === "formula" && formula) {
      if (isAffirmative && formula.insightsNudge) {
        setChatMessages((prev) => [...prev, { role: 'user', text }]);
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const fTitle = formula.cardTitle.replace("Formula - ", "");
          const reply = `Done! I've updated the ${fTitle} formula to include your Insights data. Likes now boosts items with real user demand, and Error count adds a risk penalty for items with reported issues. The scores in your table reflect the change.`;
          lastAiReplyRef.current = reply;
          setChatMessages((prev) => [...prev, { role: 'ai', text: reply }]);
        }, 1200);
        return;
      }
    }

    // ── Fallback: "yes" after an AI chat reply that asked a question ──
    if (isAffirmative && lastAiReplyRef.current) {
      const lastReply = lastAiReplyRef.current.toLowerCase();
      if (lastReply.includes("want") || lastReply.includes("show you")) {
        // Try to infer what to do from the last reply
        if (!intentChoice) {
          if (lastReply.includes("insight") || lastReply.includes("research")) { handleIntent("insights", text); return; }
          if (lastReply.includes("rice") || lastReply.includes("priorit")) { handleIntent("prioritise", text); return; }
          if (lastReply.includes("weight") || lastReply.includes("score")) { handleIntent("score", text); return; }
          if (lastReply.includes("sum") || lastReply.includes("average")) { handleIntent("average", text); return; }
        }
      }
    }

    // ── Last resort: text reply via context-aware function ──
    setChatMessages((prev) => [...prev, { role: 'user', text }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply = getContextAwareReply(text, chatContext);
      lastAiReplyRef.current = reply;
      setChatMessages((prev) => [...prev, { role: 'ai', text: reply }]);
    }, 1200);
  };

  // Helper: match text to an intent key (short prefixes to handle typos)
  function matchIntent(lower: string): string | null {
    if (/priori|rank.*first|what.*work.*on|important|urgent/i.test(lower)) return "prioritise";
    if (/insig|resear|likes|error.?count|user.?data|real.?data|formula.*my/i.test(lower)) return "insights";
    if (/score|potential|rate|evaluat|compar/i.test(lower)) return "score";
    if (/sum|add.?up|averag|mean|total|calculat/i.test(lower)) return "average";
    // Catch-all: "formula" or "create" with context clues
    if (/formula/i.test(lower)) return "insights";
    return null;
  }

  // Helper: match text to an approach key within a stage2
  function matchApproach(lower: string, intent: string, s2: typeof STAGE2[string]): { key: string } | null {
    // Try matching against pill labels first
    for (const pill of s2.pills) {
      const pillWords = pill.label.toLowerCase().split(/\s+/);
      const matchCount = pillWords.filter((w) => w.length > 3 && lower.includes(w)).length;
      if (matchCount >= 2) return { key: pill.key };
    }
    // Intent-specific keyword matching
    if (intent === "prioritise") {
      if (/roi|return|investment|bang.*buck/i.test(lower)) return { key: "roi" };
      if (/total|add up|overall|simple/i.test(lower)) return { key: "total" };
    }
    if (intent === "score") {
      if (/weight/i.test(lower)) return { key: "weighted" };
      if (/normal/i.test(lower)) return { key: "normalize" };
    }
    if (intent === "average") {
      if (/sum|add/i.test(lower)) return { key: "sum" };
      if (/average|mean/i.test(lower)) return { key: "average" };
    }
    if (intent === "insights") {
      if (/priori|resear|rank|demand|risk/i.test(lower)) return { key: "research_priority" };
      if (/sentim|feel|ratio|mood/i.test(lower)) return { key: "sentiment" };
    }
    return null;
  }

  const handleIntent = (key: string, label: string) => {
    setIntentChoice(key);
    setIntentLabel(label);
    setStage("approach");
  };

  const handleApproach = (key: string, label: string) => {
    setApproachChoice(key);
    setApproachLabel(label);
    setApplyPhase('loading');
    setFormulaRevealStep(0);
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
    setFormulaRevealStep(0);
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
  // Filter out already-tried approaches from pills
  const triedKeys = new Set(pastFormulas.map((p) => p.approachKey));
  const availablePills = s2?.pills.filter((p) => !triedKeys.has(p.key) && p.key !== approachChoice) ?? [];

  return (
    <>
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
                <FormulaCard key={idx} title={f.cardTitle} lines={f.cardLines} />
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
            {/* Step 0: Sidekick is analyzing */}
            {formulaRevealStep === 0 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <AgentAvatar size={28} />
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#6f7489", lineHeight: 1.6 }}>
                    Analyzing your table columns and data
                    <span style={{ display: "inline-block", width: 20, textAlign: "left" }}>
                      <span style={{ animation: "dotPulse 1.4s infinite" }}>...</span>
                    </span>
                  </span>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }}>
                    {["Reach", "Impact", "Confidence", "Effort", "Likes", "Errors"].map((col) => (
                      <span key={col} style={{
                        fontSize: 11, fontWeight: 600, color: "#7C3AED", background: "#F5F3FF",
                        borderRadius: 4, padding: "2px 8px", animation: "fadeSlideIn 600ms ease-out both",
                      }}>{col}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1+: Intro text */}
            {formulaRevealStep >= 1 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, animation: formulaRevealStep === 1 ? "fadeSlideIn 400ms ease-out both" : undefined }}>
                <AgentAvatar size={28} />
                <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                  {formula.intro}
                </span>
              </div>
            )}

            {/* Step 2+: Formula card */}
            {formulaRevealStep >= 2 && (
              <div style={{ animation: formulaRevealStep === 2 ? "fadeSlideIn 400ms ease-out both" : undefined }}>
                <FormulaCard title={formula.cardTitle} lines={formula.cardLines} />
              </div>
            )}

            {/* Step 3+: Explanation bullets + closing */}
            {formulaRevealStep >= 3 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, animation: formulaRevealStep === 3 ? "fadeSlideIn 400ms ease-out both" : undefined }}>
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
            )}

            {/* Step 4: Outcomes — apply phase, insights nudge */}
            {formulaRevealStep >= 4 && (
              <>
                {applyPhase === 'loading' ? (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, animation: "fadeSlideIn 400ms ease-out both" }}>
                    <AgentAvatar size={28} />
                    <span style={{ fontSize: 14, fontWeight: 400, color: "#6f7489", lineHeight: 1.6, paddingTop: 4 }}>
                      Generating preview on your table
                      <span style={{ display: "inline-block", width: 20, textAlign: "left" }}>
                        <span style={{ animation: "dotPulse 1.4s infinite" }}>...</span>
                      </span>
                    </span>
                  </div>
                ) : applyPhase === 'preview' ? (
                  <>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, animation: "fadeSlideIn 400ms ease-out both" }}>
                      <AgentAvatar size={28} />
                      <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                        Preview is ready — check the <span style={{ fontWeight: 600 }}>{formula.cardTitle.replace("Formula - ", "")}</span> column in your table. If it looks good, apply it.
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <Button size="medium" onPress={handleApply}>Apply to table</Button>
                      {availablePills.length > 0 && (
                        <Button size="medium" variant="secondary" onPress={handleTryDifferent}>Try a different approach</Button>
                      )}
                    </div>
                  </>
                ) : applyPhase === 'done' ? (
                  <DoneWithFormula formula={formula} />
                ) : null}

                {/* Insights nudge */}
                {formula.insightsNudge && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, background: "#F5F3FF", borderRadius: 8, padding: 12, animation: "fadeSlideIn 400ms ease-out both" }}>
                    <div style={{ flexShrink: 0, marginTop: 2 }}>
                      <GradientSparks size="small" />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 400, color: "#5B21B6", lineHeight: 1.5 }}>
                      {formula.insightsNudge}
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ════ Free-text chat messages ════ */}
        {chatMessages.map((msg, i) => {
          if (msg.role === 'user') {
            return <UserBubble key={`chat-${i}`} text={msg.text} />;
          }
          const isLatestAi = !chatMessages.slice(i + 1).some((m) => m.role === 'ai');
          const shouldStream = isLatestAi && !streamedSet.current.has(i);
          return (
            <div key={`chat-${i}`} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <AgentAvatar size={28} />
              <span style={{ fontSize: 14, fontWeight: 400, color: "#222428", lineHeight: 1.6, paddingTop: 4 }}>
                {shouldStream ? (
                  <StreamingText
                    text={msg.text}
                    speed={20}
                    onComplete={() => { streamedSet.current.add(i); forceUpdate((n) => n + 1); }}
                  />
                ) : msg.text}
              </span>
            </div>
          );
        })}

        {/* Typing indicator while AI is thinking */}
        {isTyping && <TypingIndicator />}
      </div>
    </div>
    <PanelInput onSend={handleChatSend} />
    </>
  );
}

/* ─── Chat context for context-aware replies ─── */
interface ChatContext {
  intentKey: string | null;
  approachKey: string | null;
  formulaTitle: string | null;
  formulaBullets: string[] | null;
  formulaLines: string[] | null;
  hasInsightsNudge: boolean;
  insightsNudgeText: string | null;
  closingText: string | null;
  applyPhase: string;
  stage: string;
}

/* ─── Context-aware AI reply ─── */
function getContextAwareReply(message: string, ctx: ChatContext): string {
  const lower = message.toLowerCase().trim();

  const isAffirmative = /^(yes|yeah|yep|sure|ok|okay|please|do it|go ahead|absolutely|definitely|add them|sounds good|let's do it|why not|yea|ya|y$)/i.test(lower);
  const isNegative = /^(no|nah|not now|skip|maybe later|nope|i'm good|not yet|no thanks|n$)/i.test(lower);

  // ── 1. Responding to the Insights nudge ──
  if (ctx.hasInsightsNudge && ctx.formulaTitle) {
    if (isAffirmative) {
      return `Done! I've updated the ${ctx.formulaTitle} formula to include your Insights data. Likes now boosts items with real user demand, and Error count adds a risk penalty for items with reported issues. The scores in your table reflect the change.`;
    }
    if (isNegative) {
      return `No problem — ${ctx.formulaTitle} works well on its own. You can always add Insights data later if you want to factor in real user signals.`;
    }
  }

  // ── 2. Responding to the closing question ──
  if (ctx.closingText && ctx.formulaTitle) {
    if (isAffirmative) {
      return `Sure! I can adjust ${ctx.formulaTitle} for you. What would you like to change — the column weights, which fields to include, or the overall calculation method?`;
    }
    if (isNegative) {
      return `Got it — ${ctx.formulaTitle} looks good as is. Let me know if you want to tweak anything later.`;
    }
  }

  // ── 3. Formula-specific questions ──
  if (ctx.formulaTitle && ctx.formulaBullets) {
    // Explain / how it works
    if (/how does|how do|explain|what does|what is|tell me more|break.*down|what.*mean|walk me through/i.test(lower)) {
      const bullets = ctx.formulaBullets.map((b) => `• ${b}`).join('\n');
      return `Here's how ${ctx.formulaTitle} works:\n\n${bullets}\n\nWant me to adjust anything?`;
    }

    // Why this formula
    if (/why|reason|logic behind|rationale/i.test(lower)) {
      return `${ctx.formulaTitle} is designed to give you a single number per row that captures multiple signals. ${ctx.formulaBullets[0]} This makes it easy to sort and compare items at a glance — higher score means higher priority.`;
    }

    // Modify / tweak
    if (/change|adjust|modify|weight|tweak|update|custom/i.test(lower)) {
      return `I can customize ${ctx.formulaTitle} for you. For example, I can make certain columns count more, remove columns you don't need, or swap the calculation method entirely. What would you like to change?`;
    }

    // Which columns
    if (/column|field|which|what.*include|what.*using|variable/i.test(lower)) {
      const hasInsights = ctx.formulaLines?.some((l) => l.includes('Insights'));
      return `${ctx.formulaTitle} currently uses Reach, Impact, Confidence, and Effort from your table.${hasInsights ? ' It also factors in Likes and Error count from your Insights research.' : ' I can also add your Insights data (Likes and Error count) for real user signals — want me to include them?'}`;
    }

    // Reliability / accuracy
    if (/accurate|reliable|trust|good enough|confident|valid/i.test(lower)) {
      return `${ctx.formulaTitle} is a well-established framework used by product teams worldwide. The scores are only as reliable as your input data — make sure your Reach and Impact estimates are up to date for the most accurate results.`;
    }

    // Sorting / using results
    if (/sort|rank|order|highest|lowest|best|worst|top|bottom|use.*result/i.test(lower)) {
      return `Once applied, you can sort the ${ctx.formulaTitle} column to see your highest-priority items at the top. Higher score = more value relative to effort. You can also use it to filter out low-scoring items.`;
    }

    // Specific column questions
    if (/reach/i.test(lower) && !/research/i.test(lower)) {
      return `Reach measures how many people or projects each item affects. In ${ctx.formulaTitle}, higher reach pushes the score up — items that touch more users are considered more impactful.`;
    }
    if (/impact/i.test(lower)) {
      return `Impact measures how much each item moves the needle — typically rated 1 (minimal) to 3 (massive). In ${ctx.formulaTitle}, items with higher impact get a significant score boost.`;
    }
    if (/confidence/i.test(lower)) {
      return `Confidence reflects how sure you are about the estimates. A confidence of 1 means you're certain, 0.5 means it's a rough guess. It acts as a multiplier — lower confidence tempers the overall score.`;
    }
    if (/effort/i.test(lower)) {
      return `Effort represents the work required — time, people, complexity. In ${ctx.formulaTitle}, effort divides the score, so less effort = higher priority. Think of it as the "cost" side of a cost-benefit equation.`;
    }
    if (/likes/i.test(lower)) {
      return `Likes come from your Insights research and represent real user demand — items that users actually want or voted for. Adding Likes to the formula means popular items get a boost in their score.`;
    }
    if (/error|bug/i.test(lower)) {
      return `Error count comes from your Insights data and flags risk. Items with more reported errors might need urgent attention, or they might signal lower confidence. In the formula, errors typically act as a penalty.`;
    }

    // Compare formulas
    if (/different|other|alternative|compare|vs|versus|better/i.test(lower)) {
      return `${ctx.formulaTitle} is one approach. I can also show you a simpler total value score, a weighted score where you control importance per column, or a normalized version that puts all columns on the same scale. Want me to try a different one?`;
    }
  }

  // ── 4. General keyword fallbacks (short prefixes for typo tolerance) ──
  if (/rice|priori/i.test(lower)) return "RICE scoring combines Reach × Impact × Confidence ÷ Effort into a single priority number. Want me to generate a RICE formula for your table?";
  if (/insig|likes|error.?count|resear|formula/i.test(lower)) return "Your Insights data (Likes and Error count) reflects real user behaviour. I can factor those into any formula. Want me to show you how?";
  if (/sum|add.?up|total/i.test(lower)) return "I can add up any combination of your numeric columns. Would you like a simple sum, or should I subtract Effort from the total?";
  if (/averag|mean/i.test(lower)) return "An average across your columns gives a balanced view of each item. Want me to include all 6 numeric columns, or just specific ones?";
  if (/hello|hi|hey/i.test(lower)) return "Hey! I'm here to help you build formulas for your table. What would you like to figure out?";
  if (/thank|thanks/i.test(lower)) return "You're welcome! Let me know if you need anything else with your table.";

  // ── 5. Context-aware default ──
  if (ctx.formulaTitle) {
    return `I can help with your ${ctx.formulaTitle} formula — ask me how it works, what the columns mean, or how to adjust it. You can also ask me to add your Insights data or try a completely different approach.`;
  }

  return "I can help you create formulas, prioritise items, or work with your Insights data. Try asking me something like \"help me prioritise\" or \"use my research data\".";
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
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", maxWidth: "100%", background: "#fff", borderRadius: 8, overflow: "hidden" }}>
      <AiGradientDefs />
      <PanelHeader />
      <PanelBody />
    </div>
  );
}
