import { AbsoluteFill } from "remotion";

export const CodeSnippet: React.FC<{ code: string }> = ({ code }) => {
    return (
        <AbsoluteFill style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "Fira Code, monospace", padding: 40 }}>
            <pre style={{ fontSize: 30, whiteSpace: "pre-wrap" }}>{code}</pre>
        </AbsoluteFill>
    );
};
