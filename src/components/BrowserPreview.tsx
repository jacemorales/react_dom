import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const BrowserPreview: React.FC = () => {
  const frame = useCurrentFrame();

  // Animate opacity: fade in new content after frame 30
  const contentOpacity = interpolate(frame, [0, 30, 60], [0, 0, 1]);

  // Cursor moves across screen
  const cursorX = interpolate(frame, [0, 120], [200, 600]);
  const cursorY = interpolate(frame, [0, 120], [300, 350]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: 20,
        padding: 20,
        color: "white",
        fontFamily: "monospace",
      }}
    >
      <div style={{ marginBottom: 10, display: "flex", gap: 8 }}>
        <div style={{ width: 12, height: 12, borderRadius: 6, background: "#ff5f56" }} />
        <div style={{ width: 12, height: 12, borderRadius: 6, background: "#ffbd2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: 6, background: "#27c93f" }} />
      </div>

      {/* Browser content */}
      <div style={{ opacity: contentOpacity, fontSize: 32 }}>
        <h2>Hello React!</h2>
        <p>This text updated thanks to the Virtual DOM 🎉</p>
        <button
          style={{
            background: "#61dafb",
            border: "none",
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          Click Me
        </button>
      </div>

      {/* Cursor */}
      <div
        style={{
          position: "absolute",
          left: cursorX,
          top: cursorY,
          fontSize: 40,
        }}
      >
        🖱
      </div>
    </AbsoluteFill>
  );
};
