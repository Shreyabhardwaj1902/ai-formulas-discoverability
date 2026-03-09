import { styled } from "../lib/stitches.config";
import { Toolbar } from "@mirohq/design-system";
import {
  IconFrameLinesTwo,
  IconMinus,
  IconPlus,
  IconQuestionMarkCircle,
} from "@mirohq/design-system-icons";

const ControlsWrapper = styled("div", {
  position: "absolute",
  bottom: "16px",
  right: "16px",
  zIndex: 100,
});

const ZoomDisplay = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-noto)",
  color: "var(--foreground)",
  cursor: "pointer",
  userSelect: "none",
  height: "100%",
  padding: "0 8px",
});

interface ZoomControlsProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onResetZoom?: () => void;
  onToggleGrid?: () => void;
  zoom?: number;
  showGrid?: boolean;
}

export function ZoomControls({ 
  onZoomIn, 
  onZoomOut, 
  onResetZoom, 
  onToggleGrid,
  zoom = 100,
  showGrid = true
}: ZoomControlsProps) {
  return (
    <ControlsWrapper>
      <Toolbar>
        {/* Layer Panel */}
        <Toolbar.Icon aria-label="Layer panel">
          <IconFrameLinesTwo />
        </Toolbar.Icon>

        {/* Zoom Out */}
        <Toolbar.Icon onClick={onZoomOut} aria-label="Zoom out">
          <IconMinus />
        </Toolbar.Icon>

        {/* Zoom Display */}
        <Toolbar.Item onClick={onResetZoom} aria-label="Reset zoom">
          <ZoomDisplay>
            {Math.round(zoom)}%
          </ZoomDisplay>
        </Toolbar.Item>

        {/* Zoom In */}
        <Toolbar.Icon onClick={onZoomIn} aria-label="Zoom in">
          <IconPlus />
        </Toolbar.Icon>

        {/* Help */}
        <Toolbar.Icon aria-label="Help">
          <IconQuestionMarkCircle />
        </Toolbar.Icon>
      </Toolbar>
    </ControlsWrapper>
  );
}
