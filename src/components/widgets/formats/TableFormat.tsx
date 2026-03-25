import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../ui/utils";
import { BaseFormatWidget } from "./BaseFormatWidget";
import {
  IconTable,
  IconSync,
  IconFunnel,
  IconArrowsDownUp,
  IconRectanglesTwoLinesFour,
  IconEyeOpenSlash,
  IconPlus,
  TableMenuIcon,
} from "./FormatIcons";
import {
  DropdownMenu,
  IconTextLinesThree,
  IconCalendarBlank,
  IconUser,
  IconSelect,
  IconCheckBoxLines,
  IconNumber,
  IconLink,
  IconFormula,
  IconInformationMarkCircle,
  IconSparks,
  IconSparksFilled,
} from "@mirohq/design-system";

// --- Types ---

type ColumnType = 
  | 'text' 
  | 'number' 
  | 'select' 
  | 'multiSelect' 
  | 'date' 
  | 'person' 
  | 'link' 
  | 'tags' 
  | 'blocking' 
  | 'blockedBy'
  | 'parent'
  | 'child'
  | 'formula'
  | 'relatesTo';

interface Column {
  id: string;
  type: ColumnType;
  label: string;
  width: number; // in px
  isPrimary?: boolean;
  options?: string[]; // for select/multiSelect
  source?: 'insights'; // field sourced from Miro Insights
  formulaPhase?: 'loading' | 'preview' | 'done'; // staged formula column
}

interface Row {
  id: string;
  [key: string]: any; // columnId -> value
}

interface TableData {
  columns: Column[];
  rows: Row[];
}

// --- Constants ---

const AVATAR_COLORS: Record<string, string> = {
  'Zak Brown': '#E8A838',
  'Oscar Piastri': '#3B82F6',
  'Jenson Button': '#EF4444',
  'Niki Lauda': '#8B5CF6',
  'Mika Hakkinen': '#10B981',
};

const FUNCTION_COLORS: Record<string, { bg: string; text: string }> = {
  'Form factor': { bg: '#DCFCE7', text: '#166534' },
  'Engine efficiency': { bg: '#FEF3C7', text: '#92400E' },
  'Driver input': { bg: '#FFE4D6', text: '#9A3412' },
  'Handling balance': { bg: '#DBEAFE', text: '#1E40AF' },
  'Analytics': { bg: '#F3E8FF', text: '#6B21A8' },
};

const DEFAULT_COLUMNS: Column[] = [
  { id: 'c1', type: 'text', label: 'Title', width: 200, isPrimary: true },
  { id: 'c2', type: 'person', label: 'RACI', width: 160 },
  { id: 'c3', type: 'select', label: 'Function', width: 160, options: ['Form factor', 'Engine efficiency', 'Driver input', 'Handling balance', 'Analytics'] },
  { id: 'c4', type: 'number', label: 'Reach', width: 100 },
  { id: 'c5', type: 'number', label: 'Impact', width: 100 },
  { id: 'c6', type: 'number', label: 'Confidence', width: 120 },
  { id: 'c7', type: 'number', label: 'Effort', width: 100 },
  { id: 'c8', type: 'number', label: 'Likes', width: 90, source: 'insights' },
  { id: 'c9', type: 'number', label: 'Error count', width: 110, source: 'insights' },
];

const DEFAULT_ROWS: Row[] = [
  { id: 'r1', c1: 'Refining the car\'s aero...', c2: 'Zak Brown', c3: 'Form factor', c4: 200, c5: 2.5, c6: 0.75, c7: 4, c8: 34, c9: 2 },
  { id: 'r2', c1: 'Enhancing the efficien...', c2: 'Oscar Piastri', c3: 'Engine efficiency', c4: 150, c5: 2, c6: 0.5, c7: 20, c8: 12, c9: 8 },
  { id: 'r3', c1: 'Integrating advanced...', c2: 'Jenson Button', c3: 'Driver input', c4: 80, c5: 1.5, c6: 0.8, c7: 8, c8: 27, c9: 5 },
  { id: 'r4', c1: 'Fine-tuning the suspe...', c2: 'Niki Lauda', c3: 'Handling balance', c4: 200, c5: 3, c6: 0.9, c7: 44, c8: 45, c9: 1 },
  { id: 'r5', c1: 'Implementing innovati...', c2: 'Mika Hakkinen', c3: 'Form factor', c4: 49, c5: 2, c6: 0.75, c7: 12, c8: 8, c9: 11 },
  { id: 'r6', c1: 'Implementing predicti...', c2: 'Oscar Piastri', c3: 'Analytics', c4: 40, c5: 1, c6: 0.65, c7: 5, c8: 19, c9: 3 },
  { id: 'r7', c1: 'Developing more effici...', c2: 'Zak Brown', c3: 'Handling balance', c4: 30, c5: 2, c6: 0.8, c7: 6, c8: 22, c9: 7 },
];

/* ─── Table Formula Presets ─── */
const TABLE_PRESETS: Record<string, {
  title: string;
  columns: Column[];
  rows: Row[];
  nudge: { title: string; description: string; miniHeaders: string[]; miniColorKeys: string[]; miniRows: string[][] };
}> = {
  prioritisation: {
    title: "H1 Team Priorities",
    columns: DEFAULT_COLUMNS,
    rows: DEFAULT_ROWS,
    nudge: {
      title: "Prioritise with a formula?",
      description: "Your table has fields like Reach and Impact that work well together — I can turn them into a score.",
      miniHeaders: ["Reach", "Impact", "Conf.", "Effort", "Likes"],
      miniColorKeys: ["Reach", "Impact", "Confidence", "Effort", "Likes"],
      miniRows: [["200", "2.5", "0.75", "4", "34"], ["150", "2", "0.5", "20", "12"]],
    },
  },
};

const FIELD_TYPES: { label: string; type: ColumnType; miroIcon: React.ComponentType<any>; group: 'Custom' | 'Formula' }[] = [
  { label: 'Text', type: 'text', miroIcon: IconTextLinesThree, group: 'Custom' },
  { label: 'Date', type: 'date', miroIcon: IconCalendarBlank, group: 'Custom' },
  { label: 'Person', type: 'person', miroIcon: IconUser, group: 'Custom' },
  { label: 'Select', type: 'select', miroIcon: IconSelect, group: 'Custom' },
  { label: 'Multi-select', type: 'multiSelect', miroIcon: IconCheckBoxLines, group: 'Custom' },
  { label: 'Number', type: 'number', miroIcon: IconNumber, group: 'Custom' },
  { label: 'URL', type: 'link', miroIcon: IconLink, group: 'Custom' },
  { label: 'Formula', type: 'formula', miroIcon: IconFormula, group: 'Formula' },
];

// --- Components ---

function HeaderButton({ icon, onClick }: { icon: React.ReactNode; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="size-[32px] bg-[var(--background)] rounded-[var(--radius-sm)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer transition-colors hover:bg-[var(--secondary)]"
    >
      <div className="size-4 flex items-center justify-center">{icon}</div>
    </div>
  );
}

function HeaderCell({
  column,
  onResize,
  onFormulaClick,
}: {
  column: Column;
  onResize: (newWidth: number) => void;
  onFormulaClick?: (e: React.MouseEvent) => void;
}) {
  const Icon = getIconForType(column.type);
  const [isResizing, setIsResizing] = useState(false);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = column.width;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const diff = moveEvent.clientX - startXRef.current;
      const newWidth = Math.max(50, startWidthRef.current + diff);
      onResize(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  return (
    <div
      className={cn(
        "h-[44px] bg-[var(--background)] flex items-center px-2 gap-2 overflow-hidden border-r border-transparent hover:border-[var(--border)] group relative",
        column.isPrimary ? "pl-[44px]" : "justify-center"
      )}
      style={{ width: column.width, minWidth: column.width, cursor: column.formulaPhase === 'done' ? 'pointer' : undefined }}
      onPointerDownCapture={column.formulaPhase === 'done' ? (e) => e.stopPropagation() : undefined}
      onClick={column.formulaPhase === 'done' ? (e) => { e.stopPropagation(); onFormulaClick?.(e); } : undefined}
    >
      <div className="size-4 text-[var(--muted-foreground)] flex items-center justify-center shrink-0">
        <Icon />
      </div>
      <span className="text-[13px] font-semibold text-[var(--muted-foreground)] whitespace-nowrap overflow-hidden text-ellipsis font-[family-name:var(--font-noto)]">
        {column.label}
      </span>
      {/* Formula column — Preview badge */}
      {column.formulaPhase === 'preview' && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: 18,
            padding: '0 6px',
            borderRadius: 4,
            background: '#7B61FF',
            color: '#fff',
            fontSize: 11,
            fontWeight: 600,
            flexShrink: 0,
            letterSpacing: 0.3,
          }}
        >
          Preview
        </span>
      )}
      {/* Formula column — Done sparkle with tooltip */}
      {column.formulaPhase === 'done' && (
        <span
          title="Edit or iterate on this formula"
          onClick={(e) => { e.stopPropagation(); (window as any).__openAiPanel?.(); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          className="gradient-sparkle"
        >
          <IconSparksFilled size="small" />
        </span>
      )}

      {/* Resize Handle */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-[4px] cursor-col-resize z-10 hover:bg-[var(--primary)] opacity-0 hover:opacity-100 transition-opacity nodrag",
          isResizing && "bg-[var(--primary)] opacity-100"
        )}
        onMouseDown={handleMouseDown}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function getIconForType(type: ColumnType) {
  const field = FIELD_TYPES.find(f => f.type === type);
  return field ? field.miroIcon : IconTextLinesThree;
}

// --- Cell Renderers ---

const CellContent = ({ 
  value, 
  type, 
  isEditing, 
  onChange, 
  onBlur 
}: { 
  value: any; 
  type: ColumnType; 
  isEditing: boolean; 
  onChange: (val: any) => void; 
  onBlur: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // Editing Mode
  if (isEditing) {
    return (
      <input
        ref={inputRef}
        className="w-full h-full bg-white px-1 outline-none border border-[var(--primary)] rounded-sm font-[family-name:var(--font-noto)] text-[14px]"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onBlur();
        }}
      />
    );
  }

  // View Mode
  if (value === null || value === undefined || value === '') return <div className="h-4" />; // Placeholder for height

  switch (type) {
    case 'select':
    case 'multiSelect':
    case 'tags': {
      const colors = FUNCTION_COLORS[value as string] || { bg: 'var(--secondary)', text: 'var(--foreground)' };
      return (
         <div
           className="px-2 py-1 rounded-[4px] text-[13px] whitespace-nowrap font-[family-name:var(--font-noto)] inline-block font-medium"
           style={{ backgroundColor: colors.bg, color: colors.text }}
         >
           {value}
         </div>
      );
    }
    case 'link':
      return (
         <div className="bg-[var(--secondary)] rounded-full px-2 py-1 flex items-center gap-1 max-w-full inline-flex">
            <div className="size-4 rounded-full bg-blue-200 shrink-0" />
            <span className="text-[14px] truncate font-[family-name:var(--font-noto)] text-blue-600 underline decoration-blue-300">{value}</span>
         </div>
      );
    case 'person': {
      const avatarColor = AVATAR_COLORS[value as string] || '#9CA3AF';
      const initials = (value as string).split(' ').map(n => n[0]).join('').slice(0, 2);
      return (
         <div className="flex items-center gap-2 max-w-full">
            <div
              className="size-6 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
              style={{ backgroundColor: avatarColor }}
            >
              {initials}
            </div>
            <span className="text-[14px] truncate font-[family-name:var(--font-noto)] text-[var(--foreground)]">{value}</span>
         </div>
      );
    }
    case 'number':
      return <span className="text-[14px] text-[var(--foreground)] font-[family-name:var(--font-noto)] tabular-nums text-right w-full block">{value}</span>;
    default:
      return <span className="text-[14px] text-[var(--foreground)] truncate font-[family-name:var(--font-noto)]">{value}</span>;
  }
};

export function TableFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const preset = data?.preset ? TABLE_PRESETS[data.preset] : null;
  const [columns, setColumns] = useState<Column[]>(preset?.columns || data?.columns || DEFAULT_COLUMNS);
  const [rows, setRows] = useState<Row[]>(preset?.rows || data?.rows || DEFAULT_ROWS);
  const [editingCell, setEditingCell] = useState<{ rowId: string; colId: string } | null>(null);
  const [formulaPopover, setFormulaPopover] = useState<{ x: number; y: number; colLabel: string } | null>(null);
  // Formula nudge popup
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);
  const [nudgePos, setNudgePos] = useState<{ top: number; left: number } | null>(null);
  const nudgeAnchorRef = useRef<HTMLDivElement>(null);

  // Track nudge anchor position
  useEffect(() => {
    if (!showNudge || !nudgeAnchorRef.current) { setNudgePos(null); return; }
    const update = () => {
      if (nudgeAnchorRef.current) {
        const rect = nudgeAnchorRef.current.getBoundingClientRect();
        setNudgePos({ top: rect.top, left: rect.right });
      }
    };
    update();
    const id = setInterval(update, 100);
    return () => clearInterval(id);
  }, [showNudge]);

  const handleAddRow = () => {
    const newRow: Row = {
      id: `r${Date.now()}`,
    };
    // Initialize empty
    columns.forEach(col => newRow[col.id] = null);
    setRows([...rows, newRow]);
  };

  const handleAddColumn = (type: ColumnType, label: string) => {
    const newColId = `c${Date.now()}`;
    const newCol: Column = {
      id: newColId,
      type,
      label,
      width: 150,
    };
    setColumns([...columns, newCol]);
  };

  // Build a lookup from column label → column id
  const colByLabel = useCallback(() => {
    const map: Record<string, string> = {};
    columns.forEach((c) => { map[c.label] = c.id; });
    return map;
  }, [columns]);

  // Formula evaluators keyed by intent + approach
  const formulaEvaluators: Record<string, (row: Row, m: Record<string, string>) => number> = {
    'prioritise:roi': (r, m) => {
      const reach = Number(r[m['Reach']] ?? 0);
      const impact = Number(r[m['Impact']] ?? 0);
      const confidence = Number(r[m['Confidence']] ?? 0);
      const effort = Number(r[m['Effort']] ?? 1);
      return Math.round(((reach * impact * confidence) / effort) * 100) / 100;
    },
    'prioritise:total': (r, m) => {
      return Number(r[m['Reach']] ?? 0) + Number(r[m['Impact']] ?? 0) + Number(r[m['Confidence']] ?? 0) - Number(r[m['Effort']] ?? 0);
    },
    'score:weighted': (r, m) => {
      return Math.round((Number(r[m['Reach']] ?? 0) * 0.3 + Number(r[m['Impact']] ?? 0) * 0.3 + Number(r[m['Confidence']] ?? 0) * 0.2 + Number(r[m['Effort']] ?? 0) * 0.2) * 100) / 100;
    },
    'score:normalize': (r, m) => {
      // Simplified: just sum the raw values minus effort
      return Number(r[m['Reach']] ?? 0) + Number(r[m['Impact']] ?? 0) + Number(r[m['Confidence']] ?? 0) - Number(r[m['Effort']] ?? 0);
    },
    'average:sum': (r, m) => {
      return Number(r[m['Reach']] ?? 0) + Number(r[m['Impact']] ?? 0) + Number(r[m['Confidence']] ?? 0) + Number(r[m['Effort']] ?? 0);
    },
    'average:average': (r, m) => {
      const sum = Number(r[m['Reach']] ?? 0) + Number(r[m['Impact']] ?? 0) + Number(r[m['Confidence']] ?? 0) + Number(r[m['Effort']] ?? 0);
      return Math.round((sum / 4) * 100) / 100;
    },
    'insights:research_priority': (r, m) => {
      const base = Number(r[m['Reach']] ?? 0) * Number(r[m['Impact']] ?? 0) * Number(r[m['Confidence']] ?? 0);
      const likes = Number(r[m['Likes']] ?? 0);
      const errors = Number(r[m['Error count']] ?? 0);
      const effort = Number(r[m['Effort']] ?? 1);
      return Math.round(((base + likes * 2 - errors * 3) / effort) * 100) / 100;
    },
    'insights:sentiment': (r, m) => {
      const likes = Number(r[m['Likes']] ?? 0);
      const errors = Number(r[m['Error count']] ?? 0);
      const total = likes + errors;
      if (total === 0) return 0;
      return Math.round(((likes - errors) / total) * 100) / 100;
    },
  };

  // Track the current preview column id so we can confirm or remove it
  const previewColIdRef = useRef<string | null>(null);

  // Expose __previewFormula — called when user picks an approach (before "Apply")
  // Shows loading shimmer → preview with values
  useEffect(() => {
    (window as any).__previewFormula = (intentKey: string, approachKey: string, colLabel: string) => {
      const key = `${intentKey}:${approachKey}`;
      const evaluator = formulaEvaluators[key];
      if (!evaluator) return;

      const m = colByLabel();
      const newColId = `cFormula${Date.now()}`;
      previewColIdRef.current = newColId;

      // Phase 1: loading — show "Formula" header + skeleton cells
      setColumns((prev) => [...prev, {
        id: newColId,
        type: 'number' as ColumnType,
        label: 'Formula',
        width: 140,
        formulaPhase: 'loading',
      }]);

      // Phase 2: preview — show actual name + values + "Preview" badge
      setTimeout(() => {
        // Guard: only proceed if this column is still the active preview
        if (previewColIdRef.current !== newColId) return;
        setColumns((prev) => prev.map((c) =>
          c.id === newColId ? { ...c, label: colLabel, formulaPhase: 'preview' } : c
        ));
        setRows((prev) => prev.map((row) => ({
          ...row,
          [newColId]: evaluator(row, m),
        })));
        // Notify panel that preview is ready
        (window as any).__onFormulaPhase?.('preview');
      }, 1500);
    };

    // __confirmFormula — called when user clicks "Apply to table"
    // Transitions preview → done
    (window as any).__confirmFormula = () => {
      const colId = previewColIdRef.current;
      if (!colId) return;
      setColumns((prev) => prev.map((c) =>
        c.id === colId ? { ...c, formulaPhase: 'done' } : c
      ));
      previewColIdRef.current = null;
      // Notify panel
      (window as any).__onFormulaPhase?.('done');
    };

    // __removePreviewFormula — called when user clicks "Try a different approach"
    // Removes the preview column entirely
    (window as any).__removePreviewFormula = () => {
      const colId = previewColIdRef.current;
      if (!colId) return;
      setColumns((prev) => prev.filter((c) => c.id !== colId));
      setRows((prev) => prev.map((row) => {
        const { [colId]: _, ...rest } = row;
        return rest as Row;
      }));
      previewColIdRef.current = null;
    };

    // Show formula nudge attached to this table
    (window as any).__showFormulaNudge = () => {
      setShowNudge(true);
    };

    return () => {
      delete (window as any).__previewFormula;
      delete (window as any).__confirmFormula;
      delete (window as any).__removePreviewFormula;
      delete (window as any).__showFormulaNudge;
    };
  }, [columns, rows]);

  const handleColumnResize = (colId: string, newWidth: number) => {
    setColumns(columns.map(col => 
      col.id === colId ? { ...col, width: newWidth } : col
    ));
  };

  const handleCellUpdate = (rowId: string, colId: string, value: any) => {
    setRows(rows.map(row => {
      if (row.id === rowId) {
        return { ...row, [colId]: value };
      }
      return row;
    }));
  };

  const finishEditing = () => {
    setEditingCell(null);
  };

  return (
    <>
    <BaseFormatWidget
      icon={<TableMenuIcon />}
      title="H1 Team Priorities"
      formatType="table"
      selected={selected}
      id={id}
      className="w-auto h-auto inline-block"
    >
      {/* Hidden SVG gradient definition for sparkle icons */}
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
      <div className="bg-[var(--background)] p-1 rounded-[var(--radius-lg)] border border-[var(--border)] inline-block select-none">
        {/* Toolbar */}
        <div className="flex gap-1 mb-2 px-1">
          <HeaderButton icon={<IconSync />} />
          <HeaderButton icon={<IconTable />} />
          <HeaderButton icon={<IconFunnel />} />
          <HeaderButton icon={<IconArrowsDownUp />} />
          <HeaderButton icon={<IconRectanglesTwoLinesFour />} />
          <HeaderButton icon={<IconEyeOpenSlash />} />
        </div>

        {/* Grid Container */}
        <div className="bg-[var(--border)] rounded-[var(--radius-md)] flex flex-col gap-[1px] p-[1px] overflow-hidden">
          
          {/* Header Row */}
          <div className="flex gap-[1px]">
            {columns.map(col => (
              <HeaderCell
                key={col.id}
                column={col}
                onResize={(newWidth) => handleColumnResize(col.id, newWidth)}
                onFormulaClick={col.formulaPhase === 'done' ? (e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  setFormulaPopover({
                    x: rect.left,
                    y: rect.bottom + 4,
                    colLabel: col.label,
                  });
                } : undefined}
              />
            ))}
            {/* Add Column Button */}
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <div className="w-[44px] bg-[var(--background)] flex items-center justify-center hover:bg-[var(--secondary)] cursor-pointer transition-colors">
                  <IconPlus className="size-4 text-[var(--muted-foreground)]" />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="bottom" align="end" sideOffset={4} css={{ width: 240 }}>
                {/* Header with label + info icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', boxSizing: 'border-box', paddingBottom: 4 }}>
                  <span className="text-[13px] text-[var(--muted-foreground)] font-medium font-[family-name:var(--font-noto)]">Custom fields</span>
                  <IconInformationMarkCircle size="small" color="icon-secondary" />
                </div>
                {/* Standard field types */}
                {FIELD_TYPES.filter(f => f.group === 'Custom').map(field => (
                  <DropdownMenu.Item
                    key={field.type}
                    onSelect={() => handleAddColumn(field.type, field.label)}
                  >
                    <DropdownMenu.IconSlot>
                      <field.miroIcon />
                    </DropdownMenu.IconSlot>
                    {field.label}
                  </DropdownMenu.Item>
                ))}
                {/* Separator + Formula */}
                <DropdownMenu.Separator />
                {FIELD_TYPES.filter(f => f.group === 'Formula').map(field => (
                  <DropdownMenu.Item
                    key={field.type}
                    onSelect={() => {
                      // Don't add column here — __applyFormula handles it with staged animation
                      (window as any).__openAiPanel?.();
                    }}
                  >
                    <DropdownMenu.IconSlot>
                      <field.miroIcon />
                    </DropdownMenu.IconSlot>
                    {field.label}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div key={row.id} className="flex gap-[1px]">
              {columns.map((col, colIndex) => {
                const isPrimary = col.isPrimary;
                return (
                  <div 
                    key={col.id}
                    className={cn(
                      "min-h-[44px] bg-[var(--background)] flex items-center px-2 py-1 overflow-hidden",
                      isPrimary ? "flex" : ""
                    )}
                    style={{ width: col.width, minWidth: col.width }}
                    onDoubleClick={() => setEditingCell({ rowId: row.id, colId: col.id })}
                  >
                    {isPrimary ? (
                      <>
                         {/* Row Number / Handle */}
                         <div className="w-[44px] flex items-center justify-center text-[var(--muted-foreground)] text-xs shrink-0 -ml-2 mr-2 border-r border-transparent self-stretch">
                            <span className="opacity-50 group-hover:opacity-100">{index + 1}</span>
                         </div>
                         <div className="flex-1 overflow-hidden">
                            <CellContent 
                              value={row[col.id]} 
                              type={col.type} 
                              isEditing={editingCell?.rowId === row.id && editingCell?.colId === col.id}
                              onChange={(val) => handleCellUpdate(row.id, col.id, val)}
                              onBlur={finishEditing}
                            />
                         </div>
                      </>
                    ) : col.formulaPhase === 'loading' ? (
                      /* Shimmer skeleton for loading formula cells */
                      <div className="w-full h-full flex items-center justify-end px-2">
                        <div
                          style={{
                            width: [60, 72, 54, 78, 48, 66, 58][index % 7],
                            height: 12,
                            borderRadius: 6,
                            background: 'linear-gradient(90deg, #EDE9FE 25%, #F5F3FF 50%, #EDE9FE 75%)',
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 1.5s ease-in-out infinite',
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full h-full flex items-center"
                        onPointerDownCapture={col.formulaPhase === 'done' ? (e) => e.stopPropagation() : undefined}
                        onClick={col.formulaPhase === 'done' ? (e) => {
                          e.stopPropagation();
                          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                          setFormulaPopover({
                            x: rect.left,
                            y: rect.bottom + 4,
                            colLabel: col.label,
                          });
                        } : undefined}
                        style={col.formulaPhase === 'done' ? { cursor: 'pointer' } : undefined}
                      >
                        <CellContent
                           value={row[col.id]}
                           type={col.type}
                           isEditing={editingCell?.rowId === row.id && editingCell?.colId === col.id}
                           onChange={(val) => handleCellUpdate(row.id, col.id, val)}
                           onBlur={finishEditing}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Row End Spacer */}
              <div className="w-[44px] bg-[var(--background)]" />
            </div>
          ))}

          {/* Add Row Footer */}
          <div
            onClick={handleAddRow}
            className="h-[36px] bg-[var(--background)] flex items-center px-[14px] cursor-pointer hover:bg-[var(--secondary)] transition-colors"
          >
             <IconPlus className="size-4 text-[var(--muted-foreground)]" />
          </div>
        </div>
      </div>

      {/* Formula cell popover — rendered via portal to escape ReactFlow transforms */}
      {formulaPopover && createPortal(
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 10000 }} onClick={() => setFormulaPopover(null)} />
          {(() => {
            const applied = (window as any).__appliedFormulas ?? [];
            const info = applied.find((f: any) => f.colLabel === formulaPopover.colLabel);
            if (!info) return null;
            return (
              <div
                style={{
                  position: 'fixed',
                  left: formulaPopover.x,
                  top: formulaPopover.y,
                  zIndex: 10001,
                  background: '#fff',
                  border: '1px solid #E0E2E8',
                  borderRadius: 8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  padding: '12px 16px',
                  width: 260,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#6B21A8', fontFamily: "'Courier New', monospace" }}>Σ</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#222428', fontFamily: 'var(--font-noto)' }}>{info.colLabel}</span>
                </div>
                <div style={{ lineHeight: 2, marginBottom: 10, paddingLeft: 4 }}>
                  {info.cardLines.map((line: string, lineIdx: number) => (
                    <div key={lineIdx} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
                      {line.split(/(\[.*?\])/).map((part: string, i: number) => {
                        if (part.startsWith('[') && part.endsWith(']')) {
                          const colName = part.slice(1, -1).replace(' · Insights', '');
                          const isInsights = part.includes('Insights');
                          return (
                            <span key={`${lineIdx}-${i}`} style={{
                              background: isInsights ? '#EDE9FE' : '#DCFCE7',
                              color: isInsights ? '#6B21A8' : '#166534',
                              borderRadius: 4,
                              padding: '1px 6px',
                              fontSize: 12,
                              fontWeight: 600,
                              whiteSpace: 'nowrap',
                            }}>
                              {colName}
                            </span>
                          );
                        }
                        const cleaned = part.replace(/[A-Z_]{2,}\s*=\s*/, '');
                        if (!cleaned.trim()) return null;
                        return <span key={`${lineIdx}-${i}`} style={{ fontSize: 12, color: '#64748B' }}>{cleaned}</span>;
                      })}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="gradient-sparkle" style={{ display: 'inline-flex' }}>
                      <IconSparks size="small" />
                    </span>
                    <span style={{ fontSize: 11, color: '#7D8297', fontWeight: 500, fontFamily: 'var(--font-noto)' }}>AI generated</span>
                  </div>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setFormulaPopover(null);
                      (window as any).__openAiPanel?.();
                    }}
                    style={{ fontSize: 11, color: '#7B61FF', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-noto)' }}
                  >
                    Edit in Sidekick
                  </span>
                </div>
              </div>
            );
          })()}
        </>,
        document.body
      )}
    </BaseFormatWidget>

      {/* Nudge anchor — invisible element to track position */}
      {showNudge && <div ref={nudgeAnchorRef} style={{ position: "absolute", top: 0, left: "100%", width: 0, height: 0 }} />}

      {/* Formula Nudge — portaled to body */}
      {showNudge && nudgePos && createPortal(
        <div
          style={{
            position: "fixed",
            top: nudgePos.top,
            left: nudgePos.left + 12,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(34, 36, 40, 0.14), 0 0 0 0.5px rgba(0,0,0,0.05)",
            width: 220,
            maxHeight: 300,
            overflow: "hidden",
            zIndex: 9999,
            animation: "fadeSlideIn 400ms ease-out both",
            padding: "8px 8px 0 8px",
          }}
        >
          {(() => {
            const nudgeData = preset?.nudge || TABLE_PRESETS.prioritisation.nudge;
            return (
              <>
                <div style={{ background: "#F7F7F8", borderRadius: 4, padding: "8px 6px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 8, fontFamily: "var(--font-noto)", tableLayout: "fixed" }}>
                    <thead>
                      <tr>
                        {nudgeData.miniHeaders.map((h, i) => (
                          <th key={i} style={{
                            fontWeight: 600, color: "#7C3AED",
                            padding: "3px 2px", textAlign: "center",
                            background: "rgba(124, 58, 237, 0.08)",
                            borderBottom: "1px solid #E9EAEF",
                            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          }}>{h}</th>
                        ))}
                        <th style={{ fontWeight: 600, color: "#AEB2C0", padding: "3px 2px", textAlign: "center", borderBottom: "1px solid #E9EAEF", width: 16 }}>=</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nudgeData.miniRows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{
                              padding: "3px 2px", textAlign: "center", color: "#222428", fontSize: 8,
                              background: "rgba(124, 58, 237, 0.04)",
                            }}>{cell}</td>
                          ))}
                          <td style={{ padding: "3px 2px", textAlign: "center", color: "#9CA3AF", fontWeight: 600, fontSize: 8, width: 16 }}>?</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ padding: "10px 4px 12px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#222428", lineHeight: 1.3, marginBottom: 3 }}>
                    {nudgeData.title}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 400, color: "#6f7489", lineHeight: 1.4, marginBottom: 10 }}>
                    {nudgeData.description}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowNudge(false); (window as any).__openAiPanel?.(); }}
                      style={{ background: "#3859FF", color: "#fff", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", lineHeight: 1.3, whiteSpace: "nowrap" }}
                    >
                      Create formula
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowNudge(false); }}
                      style={{ background: "transparent", color: "#222428", border: "none", padding: "5px 8px", fontSize: 11, fontWeight: 500, cursor: "pointer", lineHeight: 1.3, whiteSpace: "nowrap" }}
                    >
                      No, thanks
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>,
        document.body
      )}
    </>
  );
}
