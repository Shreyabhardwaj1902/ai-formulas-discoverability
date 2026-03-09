import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { DocumentMenuIcon } from "./FormatIcons";
import { cn } from "../../ui/utils";
import { NodeToolbar, Position } from "reactflow";
import { 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  MessageSquare, 
  Sparkles,
  FileText
} from "lucide-react";

const DEFAULT_TITLE = "Untitled doc";
const DEFAULT_SUBTITLE = "Press '/' for options or start writing";

// --- Template List Component ---
const TEMPLATES = [
  { icon: FileText, label: "Retrospective Summary" },
  { icon: FileText, label: "Product Brief" },
  { icon: FileText, label: "Research Synthesis" },
  { icon: FileText, label: "Meeting Notes" },
];

function TemplateList() {
  return (
    <div className="flex flex-col items-start w-full pt-[32px]">
      <div className="flex flex-col justify-center font-semibold text-[var(--muted-foreground)] text-[10.5px] leading-[1.25] mb-[4px] font-[family-name:var(--font-noto)]">
        <p>Choose a starting template</p>
      </div>
      {TEMPLATES.map((template, i) => (
        <div key={i} className="w-full rounded-[2.6px] hover:bg-[var(--secondary)] cursor-pointer transition-colors">
          <div className="flex items-center gap-[8px] p-[8px]">
             <div className="relative size-[24px] shrink-0 flex items-center justify-center text-[var(--muted-foreground)]">
               <template.icon size={20} strokeWidth={1.5} />
             </div>
             <div className="flex flex-col justify-center text-[var(--muted-foreground)] text-[9.2px] leading-[1.57] font-[family-name:var(--font-noto)]">
               <p>{template.label}</p>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Inline Parser ---
function parseInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// --- Document Line Component ---
interface DocumentLineProps {
  text: string;
  index: number;
  isActive: boolean;
  onFocus: (index: number) => void;
  onChange: (val: string) => void;
  onSplit: (index: number, textBefore: string, textAfter: string) => void;
  onMergePrev: (index: number, currentText: string) => void;
  onMergeNext: (index: number, currentText: string) => void;
  onMove: (index: number, direction: -1 | 1) => void;
}

const DocumentLine = ({ 
  text, 
  index, 
  isActive, 
  onFocus, 
  onChange, 
  onSplit, 
  onMergePrev, 
  onMergeNext,
  onMove
}: DocumentLineProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Determine block type and content
  let blockType = 'paragraph';
  let prefix = '';
  let displayContent = text;

  if (text.startsWith('# ')) {
    blockType = 'h1';
    prefix = '# ';
    displayContent = text.slice(2);
  } else if (text.startsWith('## ')) {
    blockType = 'h2';
    prefix = '## ';
    displayContent = text.slice(3);
  } else if (text.startsWith('- ')) {
    blockType = 'bullet';
    prefix = '- ';
    displayContent = text.slice(2);
  }

  // Auto-resize effect
  useEffect(() => {
    if (isActive && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [isActive, text]);

  // Focus management
  useEffect(() => {
    if (isActive && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isActive]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    // Special case: if user types markdown triggers at start
    if (blockType === 'paragraph' && newValue.startsWith('# ')) {
      // User wants H1
      onChange('# ' + newValue.slice(2));
    } else if (blockType === 'paragraph' && newValue.startsWith('## ')) {
       // User wants H2
      onChange('## ' + newValue.slice(3));
    } else if (blockType === 'paragraph' && newValue.startsWith('- ')) {
      // User wants bullet
      onChange('- ' + newValue.slice(2));
    } else {
      // Normal text update
      onChange(prefix + newValue);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Stop propagation to prevent widget deletion
    e.stopPropagation();

    if (e.key === 'Escape') {
      e.preventDefault();
      e.currentTarget.blur();
      // We rely on the onBlur handler passed from parent or handled here
      // Actually, we need to tell parent to clear selection.
      // We'll handle this by adding an onExit prop or checking activeLineIndex in parent
      // For now, let's just blur. The parent needs to know to set activeLineIndex null.
      // We will modify the component to accept onExit callback.
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const cursor = e.currentTarget.selectionStart;
      const textBefore = displayContent.slice(0, cursor);
      const textAfter = displayContent.slice(cursor);
      
      // Logic for next line type
      let nextPrefix = ''; // Default to paragraph
      if (blockType === 'bullet') {
         nextPrefix = '- '; // Continue list
         if (textBefore.trim() === '') {
            // If hitting enter on empty bullet, end list (convert current to paragraph)
            onChange(''); // Clear current line to empty paragraph
            return; 
         }
      }
      
      onSplit(index, prefix + textBefore, nextPrefix + textAfter);
    } else if (e.key === 'Backspace') {
      if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === 0) {
        // If at start of line
        if (blockType !== 'paragraph' && displayContent.length > 0) {
           // If it's a styled block with content, downgrade to paragraph but keep content
           // effectively "deleting" the formatting
           e.preventDefault();
           onChange(displayContent); // Remove prefix
        } else {
           // Merge with previous line
           e.preventDefault();
           onMergePrev(index, text);
        }
      }
    } else if (e.key === 'ArrowUp') {
      if (e.currentTarget.selectionStart === 0) {
        e.preventDefault();
        onMove(index, -1);
      }
    } else if (e.key === 'ArrowDown') {
      if (e.currentTarget.selectionStart === displayContent.length) {
        e.preventDefault();
        onMove(index, 1);
      }
    } else if (e.key === 'Delete') {
       // Prevent node deletion on Delete key too
       e.stopPropagation();
    }
  };

  // Common Styles
  const commonStyles = "w-full resize-none outline-none border-none font-[family-name:var(--font-noto)] bg-transparent p-0 m-0 overflow-hidden block";
  
  // Style mapping to ensure identical look between View and Edit
  const getStyles = (type: string) => {
    switch (type) {
      case 'h1':
        return {
          fontSize: 'var(--text-3xl)',
          fontFamily: 'var(--font-roobert)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 1.3,
          color: 'var(--foreground)',
          letterSpacing: '0.0022px',
          paddingTop: '16px',
          paddingBottom: '2.6px',
        };
      case 'h2':
        return {
          fontSize: 'var(--text-2xl)',
          fontFamily: 'var(--font-roobert)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 1.375, // 'leading-snug'
          color: 'var(--foreground)',
          paddingTop: '16px',
          paddingBottom: '8px',
        };
      case 'bullet':
        return {
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-noto)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 1.6,
          color: 'var(--foreground)',
          paddingTop: '4px',
          paddingBottom: '4px',
          paddingLeft: '24px', // Space for bullet
        };
      default: // paragraph
        return {
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-noto)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 1.6,
          color: text === DEFAULT_SUBTITLE ? 'var(--muted-foreground)' : 'var(--foreground)',
          paddingTop: '4px',
          paddingBottom: '4px',
        };
    }
  };

  const styles = getStyles(blockType);

  if (isActive) {
    return (
      <div 
        className="relative rounded -mx-1 px-1" 
        style={{ 
          paddingTop: styles.paddingTop, 
          paddingBottom: styles.paddingBottom,
          marginLeft: '-4px',
          marginRight: '-4px'
        }}
      >
         {blockType === 'bullet' && (
           <span className="absolute left-2 top-[4px] text-[var(--foreground)] select-none" style={{ lineHeight: styles.lineHeight }}>•</span>
         )}
        <textarea
          ref={textareaRef}
          value={displayContent}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={commonStyles}
          rows={1}
          style={{ 
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            lineHeight: styles.lineHeight,
            color: styles.color,
            letterSpacing: (styles as any).letterSpacing,
            paddingLeft: blockType === 'bullet' ? '24px' : '0px',
          }}
        />
      </div>
    );
  }

  // View Mode Rendering (Must match Edit Mode Styles exactly)
  return (
    <div 
      onClick={() => onFocus(index)}
      className="relative cursor-text hover:bg-black/5 rounded -mx-1 px-1 transition-colors select-none"
      style={{ 
        paddingTop: styles.paddingTop, 
        paddingBottom: styles.paddingBottom,
        marginLeft: '-4px', // Compensate for hover padding
        marginRight: '-4px'
      }}
    >
       {blockType === 'bullet' && (
           <span className="absolute left-[6px] top-[4px] text-[var(--foreground)]" style={{ lineHeight: styles.lineHeight }}>•</span>
       )}
       <div 
         style={{ 
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            lineHeight: styles.lineHeight,
            color: styles.color,
            letterSpacing: (styles as any).letterSpacing,
            paddingLeft: blockType === 'bullet' ? '24px' : '0px',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word'
         }}
       >
          {parseInline(displayContent) || <br/>}
       </div>
    </div>
  );
};

// --- Formatting Toolbar ---
function FormattingToolbar() {
  return (
    <div className="flex items-center bg-white rounded-md shadow-lg border border-[var(--border)] p-1 gap-1">
      <button className="px-2 py-1 hover:bg-[var(--secondary)] rounded text-xs font-medium flex items-center gap-1 text-[var(--foreground)]">
        H2 Heading 2
      </button>
      <div className="w-[1px] h-4 bg-[var(--border)] mx-1" />
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-[var(--foreground)]">
        <Bold size={14} />
      </button>
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-[var(--foreground)]">
        <span className="font-serif italic">A</span>
      </button>
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-[var(--foreground)]">
        <Italic size={14} />
      </button>
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-[var(--foreground)]">
        <LinkIcon size={14} />
      </button>
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-[var(--foreground)]">
        <MessageSquare size={14} />
      </button>
      <div className="w-[1px] h-4 bg-[var(--border)] mx-1" />
      <button className="p-1 hover:bg-[var(--secondary)] rounded text-purple-500">
        <Sparkles size={14} />
      </button>
    </div>
  );
}

export function DocumentFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  // State for content (lines)
  const [content, setContent] = useState(data?.content || `# ${DEFAULT_TITLE}\n${DEFAULT_SUBTITLE}`);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);

  // Specs from Figma
  // Using standard A4-like width to prevent "very big width" issues
  const WIDTH = 680;
  const MIN_HEIGHT = 1000; // Standardize height closer to A4 proportion
  
  const HORIZONTAL_PADDING = 56; 
  const TOP_PADDING = 56; 
  const BOTTOM_PADDING = 56;

  const lines = content.split('\n');

  // Update global content when a line changes
  const handleLineChange = (index: number, newText: string) => {
    const newLines = [...lines];
    newLines[index] = newText;
    setContent(newLines.join('\n'));
  };

  const handleSplit = (index: number, textBefore: string, textAfter: string) => {
    const newLines = [...lines];
    newLines[index] = textBefore;
    newLines.splice(index + 1, 0, textAfter);
    setContent(newLines.join('\n'));
    setActiveLineIndex(index + 1);
  };

  const handleMergePrev = (index: number, currentText: string) => {
    if (index === 0) return; // Cannot merge first line up
    const newLines = [...lines];
    // Logic to merge: append current text to previous line
    // Note: we should probably strip the prefix of current text if we are merging
    // but onMergePrev is called with 'text' which includes prefix. 
    // Usually merging paragraphs means joining content.
    // Simplified: Just join
    
    // Remove active line
    newLines.splice(index, 1);
    
    // Append content to previous
    // We need to know if previous line is compatible? 
    // For now, just focus previous line and let user handle text merging manually if needed
    // Or actually append text?
    // Let's just focus previous for safety to avoid complex markdown merging rules for now
    // User asked for "delete" to "delete text", not widget.
    
    // Better UX: append content
    const prevLine = newLines[index - 1];
    newLines[index - 1] = prevLine + currentText.replace(/^#+\s|- \s/, '');
    
    setContent(newLines.join('\n'));
    setActiveLineIndex(index - 1); 
  };
  
  const handleMergeNext = (index: number, currentText: string) => {
     // Not implemented for basic Backspace flow usually
  };

  const handleMove = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < lines.length) {
      setActiveLineIndex(newIndex);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    // If clicked below last line, focus last line or create new one
    if (e.target === e.currentTarget) {
       setActiveLineIndex(lines.length - 1);
    }
  };

  // Clear active line if widget loses selection? 
  // Or keep it? User said "I should be able to directly edit...".
  // Usually if you click outside (deselect), editing stops.
  useEffect(() => {
    if (!selected) {
      setActiveLineIndex(null);
    }
  }, [selected]);

  useEffect(() => {
    if (data?.content) {
      setContent(data.content);
    }
  }, [data?.content]);

  const isPlaceholder = content.trim() === `# ${DEFAULT_TITLE}\n${DEFAULT_SUBTITLE}` || content.trim() === `# ${DEFAULT_TITLE}`;

  return (
    <BaseFormatWidget 
      icon={<DocumentMenuIcon />} 
      title="Document" 
      selected={selected}
      id={id}
      className={`w-[${WIDTH}px]`}
    >
      <div 
        className="bg-[var(--card)] rounded-[8px] flex flex-col select-text cursor-text relative selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)] transition-all duration-200 shadow-[0px_0px_0px_0.937px_var(--border)]"
        style={{ 
          width: `${WIDTH}px`,
          minHeight: `${MIN_HEIGHT}px`,
          paddingTop: `${TOP_PADDING}px`,
          paddingBottom: `${BOTTOM_PADDING}px`,
          paddingLeft: `${HORIZONTAL_PADDING}px`,
          paddingRight: `${HORIZONTAL_PADDING}px`,
        }}
        onClick={handleContainerClick}
      >
        {/* Formatting Toolbar (Only show when a line is active and editing) */}
        {selected && activeLineIndex !== null && (
          <NodeToolbar position={Position.Top} offset={-40} isVisible={true} className="z-50">
             <FormattingToolbar />
          </NodeToolbar>
        )}

        {/* Content Area */}
        <div className="flex flex-col w-full relative z-10">
          {lines.map((line, i) => (
            <DocumentLine 
              key={i} 
              index={i}
              text={line}
              isActive={activeLineIndex === i}
              onFocus={setActiveLineIndex}
              onChange={(val) => handleLineChange(i, val)}
              onSplit={handleSplit}
              onMergePrev={handleMergePrev}
              onMergeNext={handleMergeNext}
              onMove={handleMove}
            />
          ))}
          
          {/* Show Templates if content is just the placeholder */}
          {isPlaceholder && <TemplateList />}
          
          {/* Clickable area to append content if short */}
          <div 
            className="flex-grow min-h-[100px] w-full cursor-text" 
            onClick={(e) => {
              e.stopPropagation();
              // If last line is empty, focus it. Else create new line.
              const lastLine = lines[lines.length - 1];
              if (lastLine.trim() === '') {
                setActiveLineIndex(lines.length - 1);
              } else {
                 const newLines = [...lines, ""];
                 setContent(newLines.join('\n'));
                 setActiveLineIndex(newLines.length - 1);
              }
            }}
          />
        </div>
      </div>
    </BaseFormatWidget>
  );
}
