import { styled } from "./lib/stitches.config";
import { useState, useCallback, useRef } from "react";
import { MiroHeader } from "./components/MiroHeader";
import { MiroToolbar } from "./components/MiroToolbar";
import { ZoomControls } from "./components/ZoomControls";
import { ReactFlowCanvas } from "./components/ReactFlowCanvas";
import AiPanelSolutionReview from "./imports/AiPanelSolutionReview";
import type { ReactFlowInstance, Viewport } from "reactflow";

const AppContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  fontFamily: "var(--font-noto)",
  backgroundColor: "var(--background)",
});

export default function App() {
  const [selectedTool, setSelectedTool] = useState("select");
  const [zoom, setZoom] = useState(100);
  const [showGrid, setShowGrid] = useState(true);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [aiPanelFormat, setAiPanelFormat] = useState<string | null>(null);
  const [aiGenerating, setAiGenerating] = useState(false);
  const flowRef = useRef<ReactFlowInstance | null>(null);

  // Called from TableFormat when Formula is clicked (no format = table default)
  (window as any).__openAiPanel = (format?: string) => { setAiPanelFormat(format || null); setShowAiPanel(true); };
  (window as any).__closeAiPanel = () => { setShowAiPanel(false); setAiPanelFormat(null); setAiGenerating(false); };
  (window as any).__setAiGenerating = (val: boolean) => setAiGenerating(val);

  const handleFlowMount = useCallback((instance: ReactFlowInstance) => {
    flowRef.current = instance;
    console.log("📊 React Flow instance ready");
    // Set initial zoom
    const currentZoom = instance.getZoom();
    setZoom(Math.round(currentZoom * 100));
  }, []);

  const handleViewportChange = useCallback((viewport: Viewport) => {
    setZoom(Math.round(viewport.zoom * 100));
  }, []);

  const handleToolChange = useCallback((tool: string) => {
    setSelectedTool(tool);
    console.log("🔧 Tool changed to:", tool);
  }, []);

  const handleZoomIn = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.zoomIn({ duration: 200 });
      const currentZoom = flowRef.current.getZoom();
      setZoom(Math.round(currentZoom * 100));
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.zoomOut({ duration: 200 });
      const currentZoom = flowRef.current.getZoom();
      setZoom(Math.round(currentZoom * 100));
    }
  }, []);

  const handleResetZoom = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 });
      setZoom(100);
    }
  }, []);

  const handleToggleGrid = useCallback(() => {
    setShowGrid((prev) => !prev);
  }, []);

  const handleToolReset = useCallback(() => {
    setSelectedTool("select");
    console.log("🔧 Tool reset to select");
  }, []);

  return (
    <AppContainer>
      <MiroHeader />
      <ReactFlowCanvas 
        onFlowMount={handleFlowMount} 
        onViewportChange={handleViewportChange} 
        showGrid={showGrid} 
        activeTool={selectedTool === "select" ? null : selectedTool}
        onToolReset={handleToolReset}
      />
      <MiroToolbar onToolChange={handleToolChange} activeTool={selectedTool} />
      <ZoomControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        onToggleGrid={handleToggleGrid}
        showGrid={showGrid}
      />
      {/* AI Generating Overlay */}
      {aiGenerating && (
        <div style={{
          position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 10,
          background: "#fff", borderRadius: 8, padding: "6px 8px 6px 14px",
          boxShadow: "0 2px 12px rgba(34,36,40,0.12), 0 0 0 0.5px rgba(0,0,0,0.05)",
          zIndex: 60,
        }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#222428", fontFamily: "var(--font-noto)" }}>Generating.</span>
          <button
            onClick={() => { setAiGenerating(false); }}
            style={{
              display: "flex", alignItems: "center", gap: 4,
              background: "#fff", border: "1px solid #FECACA", borderRadius: 6,
              padding: "4px 10px", cursor: "pointer",
              fontSize: 12, fontWeight: 600, color: "#DC2626", fontFamily: "var(--font-noto)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#DC2626" strokeWidth="1.5"/>
              <rect x="6" y="6" width="4" height="4" rx="0.5" fill="#DC2626"/>
            </svg>
            Stop
          </button>
        </div>
      )}

      {/* AI Sidekick Panel */}
      {showAiPanel && (
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: 0,
            isolation: "isolate",
            position: "absolute",
            top: "56px",
            right: "8px",
            width: "400px",
            maxWidth: "400px",
            height: "calc(100vh - 56px - 64px)",
            background: "#FFFFFF",
            border: "0.5px solid #E9EAEF",
            boxShadow: "0px 2px 4px rgba(34, 36, 40, 0.08)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 50,
          }}
        >
          <AiPanelSolutionReview formatContext={aiPanelFormat} />
        </div>
      )}
    </AppContainer>
  );
}