**Add your own guidelines here**

<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
# Miro Design System - Figma to Code Guidelines

## Table of Contents
1. [Overview](#overview)
2. [Core Principles](#core-principles)
3. [Component Mapping](#component-mapping)
4. [Icon Naming Convention](#icon-naming-convention)
5. [Custom Styling Guidelines](#custom-styling-guidelines)
6. [Canvas Components (React Flow)](#canvas-components-react-flow)
7. [Implementation Checklist](#implementation-checklist)

---

## Overview

This document provides comprehensive guidelines for translating Figma designs into production-ready code using the Miro Design System. All components should prioritize the Miro Design System, with custom components created only when no equivalent exists.

**Design System URL:** https://miro-design-git-ai-test-branch-miro-web.vercel.app/

---

## Core Principles

### Priority Order for Implementation
1. **First:** Use Miro Design System components
2. **Second:** Map Figma components to Miro equivalents
3. **Third:** Create custom components only if no match exists
4. **Always:** Follow Miro's styling and accessibility guidelines

### Key Rules
- ✅ Always check Miro Design System first
- ✅ Maintain consistent naming conventions
- ✅ Follow accessibility standards (WCAG compliance)
- ✅ Use semantic HTML where possible
- ✅ Implement keyboard navigation for all interactive elements
- ❌ Never create custom components without checking the design system
- ❌ Never deviate from established patterns without documentation

---

## Component Mapping

### Foundation Components

#### Buttons
**Miro Design System Components:**
- `<Button>` - Primary action button
- `<Button variant="secondary">` - Secondary actions
- `<Button variant="tertiary">` - Tertiary actions
- `<Button variant="ghost">` - Minimal button style
- `<Button variant="danger">` - Destructive actions
- `<IconButton>` - Icon-only buttons

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Button/Primary            →  <Button variant="primary">
Button/Secondary          →  <Button variant="secondary">
Button/Outline            →  <Button variant="secondary">
Button/Ghost              →  <Button variant="ghost">
Button/Danger             →  <Button variant="danger">
Icon Button               →  <IconButton>
```

**Implementation Example:**
```jsx
// Primary Button
<Button variant="primary" size="medium" onClick={handleClick}>
  Save Changes
</Button>

// Button with Icon
<Button variant="primary" iconBefore={<IconCheck />}>
  Confirm
</Button>
```

---

#### Input Fields
**Miro Design System Components:**
- `<Input>` - Text input
- `<TextArea>` - Multi-line text input
- `<Select>` - Dropdown selection
- `<Checkbox>` - Checkbox input
- `<Radio>` - Radio button input
- `<Switch>` - Toggle switch
- `<SearchInput>` - Search field

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Input/Text                →  <Input type="text">
Input/Email               →  <Input type="email">
Input/Password            →  <Input type="password">
Input/Search              →  <SearchInput>
Textarea                  →  <TextArea>
Dropdown/Select           →  <Select>
Checkbox                  →  <Checkbox>
Radio Button              →  <Radio>
Toggle/Switch             →  <Switch>
```

**Implementation Example:**
```jsx
// Text Input
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  helperText="We'll never share your email"
/>

// Select Dropdown
<Select
  label="Choose option"
  options={options}
  value={selectedValue}
  onChange={handleChange}
/>
```

---

#### Typography
**Miro Design System Components:**
- `<Heading>` - Headings (h1-h6)
- `<Text>` - Body text
- `<Label>` - Form labels
- `<Link>` - Hyperlinks

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Heading 1                 →  <Heading level={1}>
Heading 2                 →  <Heading level={2}>
Heading 3                 →  <Heading level={3}>
Body/Regular              →  <Text>
Body/Bold                 →  <Text weight="bold">
Body/Small                →  <Text size="small">
Label                     →  <Label>
Link                      →  <Link>
```

**Implementation Example:**
```jsx
// Headings
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>

// Body Text
<Text size="medium" weight="regular">
  This is body text content
</Text>

// Links
<Link href="/path">Learn more</Link>
```

---

#### Cards & Containers
**Miro Design System Components:**
- `<Card>` - Content container
- `<Panel>` - Side panel container
- `<Dialog>` - Modal dialog
- `<Popover>` - Popover overlay
- `<Tooltip>` - Tooltip component
- `<Drawer>` - Slide-out panel

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Card                      →  <Card>
Modal/Dialog              →  <Dialog>
Popover                   →  <Popover>
Tooltip                   →  <Tooltip>
Side Panel                →  <Drawer>
Panel                     →  <Panel>
```

**Implementation Example:**
```jsx
// Card
<Card padding="large" elevation="medium">
  <Card.Header>
    <Heading level={3}>Card Title</Heading>
  </Card.Header>
  <Card.Content>
    Card body content goes here
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Dialog
<Dialog
  open={isOpen}
  onClose={handleClose}
  title="Confirm Action"
>
  <Dialog.Content>
    Are you sure you want to proceed?
  </Dialog.Content>
  <Dialog.Footer>
    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
    <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
  </Dialog.Footer>
</Dialog>
```

---

#### Navigation
**Miro Design System Components:**
- `<Tabs>` - Tab navigation
- `<Menu>` - Dropdown menu
- `<Breadcrumbs>` - Breadcrumb navigation
- `<Pagination>` - Page navigation
- `<Stepper>` - Step indicator

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Tabs                      →  <Tabs>
Menu/Dropdown             →  <Menu>
Breadcrumbs               →  <Breadcrumbs>
Pagination                →  <Pagination>
Steps/Stepper             →  <Stepper>
```

**Implementation Example:**
```jsx
// Tabs
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
  <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
</Tabs>

// Menu
<Menu>
  <Menu.Trigger>
    <Button>Open Menu</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item onClick={handleAction1}>Action 1</Menu.Item>
    <Menu.Item onClick={handleAction2}>Action 2</Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={handleAction3}>Action 3</Menu.Item>
  </Menu.Content>
</Menu>
```

---

#### Feedback Components
**Miro Design System Components:**
- `<Alert>` - Alert messages
- `<Toast>` - Toast notifications
- `<Badge>` - Status badge
- `<Spinner>` - Loading spinner
- `<ProgressBar>` - Progress indicator
- `<Skeleton>` - Loading placeholder

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Alert/Info                →  <Alert variant="info">
Alert/Success             →  <Alert variant="success">
Alert/Warning             →  <Alert variant="warning">
Alert/Error               →  <Alert variant="error">
Toast/Notification        →  <Toast>
Badge                     →  <Badge>
Spinner/Loading           →  <Spinner>
Progress Bar              →  <ProgressBar>
Skeleton                  →  <Skeleton>
```

**Implementation Example:**
```jsx
// Alert
<Alert variant="success" onClose={handleClose}>
  <Alert.Title>Success!</Alert.Title>
  <Alert.Description>Your changes have been saved.</Alert.Description>
</Alert>

// Badge
<Badge variant="success">Active</Badge>
<Badge variant="warning" count={5}>New</Badge>

// Spinner
<Spinner size="medium" />

// Progress Bar
<ProgressBar value={progress} max={100} />
```

---

#### Data Display
**Miro Design System Components:**
- `<Table>` - Data table
- `<List>` - List items
- `<Avatar>` - User avatar
- `<Chip>` - Tag/chip element
- `<Divider>` - Visual separator
- `<EmptyState>` - Empty state illustration

**Figma to Code Mapping:**
```
Figma Layer Name          →  Miro Component
--------------------------------------------------
Table                     →  <Table>
List                      →  <List>
Avatar                    →  <Avatar>
Tag/Chip                  →  <Chip>
Divider/Separator         →  <Divider>
Empty State               →  <EmptyState>
```

**Implementation Example:**
```jsx
// Table
<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Actions</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Item 1</Table.Cell>
      <Table.Cell><Badge>Active</Badge></Table.Cell>
      <Table.Cell><Button variant="ghost">Edit</Button></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

// Avatar
<Avatar
  src="/path/to/image.jpg"
  name="John Doe"
  size="medium"
/>

// Chip
<Chip onRemove={handleRemove}>Tag Name</Chip>
```

---

## Icon Naming Convention

### Conversion Rules

**Figma Icon Naming → Code Implementation**

Figma uses kebab-case with "icon-" prefix:
```
icon-arrow-curves-sparks
```

Code uses PascalCase with "Icon" prefix:
```jsx
import { IconArrowCurvesSparks } from '@miro/design-system/icons';
```

### Conversion Formula
1. Remove "icon-" prefix from Figma name
2. Split by hyphens
3. Capitalize each word
4. Add "Icon" prefix
5. Join without spaces

### Examples

```
Figma Name                    →  Code Import
--------------------------------------------------
icon-arrow-curves-sparks      →  IconArrowCurvesSparks
icon-check                    →  IconCheck
icon-close                    →  IconClose
icon-settings-gear            →  IconSettingsGear
icon-user-profile             →  IconUserProfile
icon-search-magnifying-glass  →  IconSearchMagnifyingGlass
icon-edit-pencil              →  IconEditPencil
icon-trash-delete             →  IconTrashDelete
icon-arrow-left               →  IconArrowLeft
icon-arrow-right              →  IconArrowRight
icon-chevron-down             →  IconChevronDown
icon-chevron-up               →  IconChevronUp
icon-plus-add                 →  IconPlusAdd
icon-minus-remove             →  IconMinusRemove
icon-info-circle              →  IconInfoCircle
icon-warning-triangle         →  IconWarningTriangle
icon-error-x                  →  IconErrorX
icon-success-check            →  IconSuccessCheck
```

### Usage in Components

```jsx
import {
  IconArrowCurvesSparks,
  IconCheck,
  IconClose
} from '@miro/design-system/icons';

// In Button
<Button iconBefore={<IconCheck />}>
  Confirm
</Button>

// In IconButton
<IconButton
  icon={<IconClose />}
  label="Close"
  onClick={handleClose}
/>

// Standalone Icon
<IconArrowCurvesSparks size={24} color="primary" />
```

### Icon Sizes
```jsx
<Icon size="small" />    // 16px
<Icon size="medium" />   // 24px (default)
<Icon size="large" />    // 32px
<Icon size={40} />       // Custom size
```

### Icon Colors
```jsx
<Icon color="primary" />
<Icon color="secondary" />
<Icon color="success" />
<Icon color="warning" />
<Icon color="error" />
<Icon color="inherit" />  // Inherits text color
```

---

## Custom Styling Guidelines

Reference: https://miro-design-git-ai-test-branch-miro-web.vercel.app/get-started/developers/styling

### Design Tokens

Miro Design System uses design tokens for consistent styling. Always reference tokens instead of hard-coded values.

#### Color Tokens
```jsx
// Semantic Colors
--color-primary
--color-primary-hover
--color-primary-active
--color-secondary
--color-success
--color-warning
--color-error
--color-info

// Neutral Colors
--color-neutral-0 (white)
--color-neutral-100
--color-neutral-200
--color-neutral-300
--color-neutral-400
--color-neutral-500
--color-neutral-600
--color-neutral-700
--color-neutral-800
--color-neutral-900 (black)

// Background Colors
--color-background-primary
--color-background-secondary
--color-background-tertiary
--color-background-inverse

// Text Colors
--color-text-primary
--color-text-secondary
--color-text-tertiary
--color-text-inverse
--color-text-disabled
```

#### Spacing Tokens
```jsx
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
```

#### Typography Tokens
```jsx
// Font Families
--font-family-primary: 'Inter', sans-serif
--font-family-monospace: 'Monaco', monospace

// Font Sizes
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-md: 16px
--font-size-lg: 18px
--font-size-xl: 20px
--font-size-2xl: 24px
--font-size-3xl: 32px

// Font Weights
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700

// Line Heights
--line-height-tight: 1.25
--line-height-normal: 1.5
--line-height-relaxed: 1.75
```

#### Border Radius Tokens
```jsx
--border-radius-sm: 4px
--border-radius-md: 8px
--border-radius-lg: 12px
--border-radius-xl: 16px
--border-radius-full: 9999px
```

#### Shadow Tokens
```jsx
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

### Custom Styling Implementation

#### Using CSS Variables
```css
/* Component styles using design tokens */
.custom-component {
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-md);
  line-height: var(--line-height-normal);
}

.custom-component:hover {
  background-color: var(--color-primary-hover);
}
```

#### Using Styled Components
```jsx
import styled from 'styled-components';

const CustomCard = styled.div`
  background-color: var(--color-background-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);

  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;
```

#### Using Tailwind-like Utilities
```jsx
// If Miro provides utility classes
<div className="bg-primary text-white p-md rounded-md shadow-md">
  Content
</div>
```

### Responsive Design

```css
/* Breakpoints */
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px

/* Usage */
.responsive-component {
  padding: var(--spacing-sm);
}

@media (min-width: 768px) {
  .responsive-component {
    padding: var(--spacing-md);
  }
}

@media (min-width: 1024px) {
  .responsive-component {
    padding: var(--spacing-lg);
  }
}
```

### Accessibility Styling

```css
/* Focus states - Always visible */
.interactive-element:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Focus visible (keyboard only) */
.interactive-element:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* High contrast support */
@media (prefers-contrast: high) {
  .component {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Dark Mode Support

```css
/* Light mode (default) */
:root {
  --color-background-primary: #ffffff;
  --color-text-primary: #1a1a1a;
}

/* Dark mode */
[data-theme="dark"] {
  --color-background-primary: #1a1a1a;
  --color-text-primary: #ffffff;
}

/* Automatic dark mode based on system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-primary: #1a1a1a;
    --color-text-primary: #ffffff;
  }
}
```

---

## Canvas Components (React Flow)

For any canvas-related features, use React Flow library as the foundation.

Reference: https://reactflow.dev/api-reference/components

### Core React Flow Components

#### ReactFlow Container
```jsx
import ReactFlow, {
  MiniMap,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';

function FlowCanvas() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}
```

### React Flow Components Reference

#### Background Component
```jsx
import { Background } from 'reactflow';

// Variants: dots, lines, cross
<Background
  variant="dots"
  gap={12}
  size={1}
  color="#f0f0f0"
/>
```

#### Controls Component
```jsx
import { Controls, ControlButton } from 'reactflow';

<Controls>
  <ControlButton onClick={handleCustomAction}>
    <IconCustom />
  </ControlButton>
</Controls>
```

#### MiniMap Component
```jsx
import { MiniMap } from 'reactflow';

<MiniMap
  nodeColor={(node) => {
    switch (node.type) {
      case 'input': return '#6ede87';
      case 'output': return '#ff0072';
      default: return '#1a192b';
    }
  }}
  nodeStrokeWidth={3}
  zoomable
  pannable
/>
```

#### Panel Component
```jsx
import { Panel } from 'reactflow';

<Panel position="top-left">
  <div className="custom-controls">
    <Button>Custom Action</Button>
  </div>
</Panel>

<Panel position="top-right">
  <div className="info-panel">Info content</div>
</Panel>

<Panel position="bottom-center">
  <div className="status-bar">Status</div>
</Panel>
```

### Custom Nodes

```jsx
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="custom-node">
      <Handle
        type="target"
        position={Position.Left}
        id="input"
      />

      <div className="node-content">
        <Heading level={3}>{data.label}</Heading>
        <Text>{data.description}</Text>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="output"
      />
    </div>
  );
}

// Register custom node
const nodeTypes = {
  custom: CustomNode,
};

<ReactFlow nodeTypes={nodeTypes} ... />
```

### Custom Edges

```jsx
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeText,
  getBezierPath
} from 'reactflow';

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          <Badge>{data.label}</Badge>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

// Register custom edge
const edgeTypes = {
  custom: CustomEdge,
};

<ReactFlow edgeTypes={edgeTypes} ... />
```

### Node Resizing

```jsx
import { NodeResizer, NodeResizeControl } from 'reactflow';

function ResizableNode({ data }) {
  return (
    <>
      <NodeResizer
        minWidth={100}
        minHeight={50}
        color="var(--color-primary)"
      />

      {/* OR use custom resize controls */}
      <NodeResizeControl
        position="bottom-right"
        style={{ background: 'transparent', border: 'none' }}
      >
        <IconResize />
      </NodeResizeControl>

      <div className="node-content">
        {data.label}
      </div>
    </>
  );
}
```

### Node Toolbar

```jsx
import { NodeToolbar } from 'reactflow';

function NodeWithToolbar({ data }) {
  return (
    <>
      <NodeToolbar
        isVisible={data.toolbarVisible}
        position="top"
      >
        <IconButton icon={<IconEdit />} onClick={handleEdit} />
        <IconButton icon={<IconDelete />} onClick={handleDelete} />
        <IconButton icon={<IconCopy />} onClick={handleDuplicate} />
      </NodeToolbar>

      <div className="node-content">
        {data.label}
      </div>
    </>
  );
}
```

### Viewport Portal

```jsx
import { ViewportPortal } from 'reactflow';

function FlowWithPortal() {
  return (
    <ReactFlow nodes={nodes} edges={edges}>
      <ViewportPortal>
        <div
          style={{
            position: 'absolute',
            left: 100,
            top: 100,
          }}
        >
          <Card>
            <Text>This content scales with viewport</Text>
          </Card>
        </div>
      </ViewportPortal>
    </ReactFlow>
  );
}
```

### Canvas Integration with Miro Components

```jsx
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel
} from 'reactflow';
import {
  Button,
  IconButton,
  Card,
  Tooltip
} from '@miro/design-system';

function MiroCanvas() {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={customNodeTypes}
      edgeTypes={customEdgeTypes}
    >
      <Background variant="dots" />

      <Controls>
        <ControlButton onClick={handleZoomIn}>
          <IconZoomIn />
        </ControlButton>
        <ControlButton onClick={handleZoomOut}>
          <IconZoomOut />
        </ControlButton>
      </Controls>

      <MiniMap />

      {/* Top toolbar using Miro components */}
      <Panel position="top-center">
        <Card padding="small">
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <Tooltip content="Add Node">
              <IconButton
                icon={<IconPlus />}
                onClick={handleAddNode}
              />
            </Tooltip>
            <Tooltip content="Delete">
              <IconButton
                icon={<IconTrash />}
                onClick={handleDelete}
              />
            </Tooltip>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Card>
      </Panel>
    </ReactFlow>
  );
}
```

---

## Implementation Checklist

### Before Starting Development

- [ ] Review complete Figma design
- [ ] Identify all unique components
- [ ] Map each Figma component to Miro Design System
- [ ] List custom components needed (if any)
- [ ] Review accessibility requirements
- [ ] Confirm responsive breakpoints

### Component Implementation

- [ ] Import Miro Design System components
- [ ] Use semantic HTML elements
- [ ] Apply design tokens for styling
- [ ] Implement proper icon naming (PascalCase)
- [ ] Add ARIA labels for accessibility
- [ ] Test keyboard navigation
- [ ] Verify focus states
- [ ] Test with screen readers

### Canvas Features (React Flow)

- [ ] Install React Flow library
- [ ] Set up ReactFlow container
- [ ] Define custom node types
- [ ] Define custom edge types
- [ ] Implement Background component
- [ ] Add Controls component
- [ ] Add MiniMap if needed
- [ ] Style nodes with Miro components
- [ ] Add interactive toolbar (Panel)
- [ ] Test zoom and pan functionality

### Styling

- [ ] Use CSS variables from design tokens
- [ ] Implement responsive design
- [ ] Add dark mode support
- [ ] Test high contrast mode
- [ ] Support reduced motion
- [ ] Verify spacing consistency
- [ ] Check color contrast ratios (WCAG AA)

### Quality Assurance

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance testing
- [ ] Code review
- [ ] Documentation complete

### Documentation

- [ ] Component usage examples
- [ ] Props documentation
- [ ] Custom styling notes
- [ ] Accessibility considerations
- [ ] Known limitations
- [ ] Future improvements

---

## Quick Reference

### Import Statements

```jsx
// Miro Design System Components
import {
  Button,
  IconButton,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Card,
  Dialog,
  Tooltip,
  Tabs,
  Table,
  Badge,
  Alert,
  Spinner,
} from '@miro/design-system';

// Miro Icons
import {
  IconCheck,
  IconClose,
  IconArrowCurvesSparks,
  IconSettings,
} from '@miro/design-system/icons';

// React Flow
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
```

### Common Patterns

```jsx
// Button with icon
<Button iconBefore={<IconCheck />} variant="primary">
  Save
</Button>

// Form field
<Input
  label="Email"
  type="email"
  error={errors.email}
  helperText="Required field"
/>

// Card with content
<Card>
  <Card.Header>
    <Heading level={2}>Title</Heading>
  </Card.Header>
  <Card.Content>
    Content here
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Canvas with Miro components
<ReactFlow nodes={nodes} edges={edges}>
  <Background variant="dots" />
  <Controls />
  <Panel position="top-right">
    <Button onClick={handleSave}>Save</Button>
  </Panel>
</ReactFlow>
```

---

## Support & Resources

- **Design System Documentation:** https://miro-design-git-ai-test-branch-miro-web.vercel.app/
- **React Flow Documentation:** https://reactflow.dev/api-reference/components
- **Accessibility Guidelines:** Follow WCAG 2.1 Level AA
- **Questions:** Contact design system team

---

**Version:** 1.0
**Last Updated:** 2025
**Maintained by:** Design System Team
-->