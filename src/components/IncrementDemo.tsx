import { AbsoluteFill, useCurrentFrame } from "remotion";

export const IncrementDemo: React.FC = () => {
  const frame = useCurrentFrame(); // current frame of the video
  const fps = 30;

  // One increment every half second
  const count = Math.floor(frame / (fps));

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <div style={{ textAlign: "center", color: "black" }}>
        <h1 style={{ fontSize: 120, margin: 0 }}>{count}</h1>
        <button
          style={{
            fontSize: 40,
            marginTop: 20,
            padding: "20px 40px",
            border: "2px solid white",
            borderRadius: 8,
            background: "grey",
            color: "white",
          }}
        >
          Increment
        </button>
      </div>
    </AbsoluteFill>
  );
};
