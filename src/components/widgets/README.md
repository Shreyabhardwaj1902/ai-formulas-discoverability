# Widget System

This directory contains the widget components for the Miro canvas clone.

## Architecture

Each widget is built on top of React Flow's node system, providing:

- **BaseWidget**: Common functionality for all widgets (selection, resizing)
- **Custom Widgets**: Specific implementations (StickyNote, Shape, Text)
- **NodeToolbar**: Properties menu above selected widgets
- **NodeResizer**: Resize handles when widgets are selected

## Features

### Selection
- Single click to select
- Shift + click for multi-select
- Drag to pan (when not clicking on widgets)

### Keyboard Shortcuts
- `Delete` or `Backspace` - Delete selected widgets
- `Cmd/Ctrl + C` - Copy selected widgets
- `Cmd/Ctrl + V` - Paste copied widgets
- `Cmd/Ctrl + D` - Duplicate selected widgets

### Widget Properties
Each widget has a toolbar that appears when selected, allowing you to:
- **Sticky Notes**: Change color (yellow, blue, green, pink, purple)
- **Shapes**: Change shape type (rectangle, circle, triangle) and fill color
- **Text**: Format text (bold, italic, underline) and alignment

### Resizing
All widgets can be resized using the handles that appear when selected.

## Adding New Widgets

To add a new widget type:

1. Create a new file in `/components/widgets/YourWidget.tsx`
2. Extend the `BaseWidget` component
3. Implement your custom UI and data interface
4. Add NodeToolbar for properties
5. Export from `/components/widgets/index.ts`
6. Register in `/components/ReactFlowCanvas.tsx` nodeTypes
7. Add toolbar button in `/components/MiroToolbar.tsx`

Example structure:

```tsx
import { NodeProps, NodeToolbar, Position } from "reactflow";
import { BaseWidget, BaseWidgetData } from "./BaseWidget";

export interface YourWidgetData extends BaseWidgetData {
  // Your custom data fields
}

export function YourWidget({ data, selected }: NodeProps<YourWidgetData>) {
  return (
    <BaseWidget selected={selected} minWidth={100} minHeight={100}>
      <NodeToolbar isVisible={selected} position={Position.Top} offset={10}>
        {/* Your toolbar controls */}
      </NodeToolbar>
      
      {/* Your widget UI */}
    </BaseWidget>
  );
}
```
