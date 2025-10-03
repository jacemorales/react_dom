import { AbsoluteFill, Img } from "remotion";

export const SceneTitle: React.FC<{ title: string; subtitle?: string; image?: string }> = ({ title, subtitle, image }) => {
    return (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            {image && <Img src={image} style={{ width: 150, marginBottom: 30 }} />}
            <h1 style={{ fontSize: 70, marginBottom: 20 }}>{title}</h1>
            {subtitle && <h3 style={{ fontSize: 40, opacity: 0.8 }}>{subtitle}</h3>}
        </AbsoluteFill>
    );
};
