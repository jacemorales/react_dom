import {AbsoluteFill, Audio, Sequence, Img} from "remotion";
import {SceneTitle} from "./components/SceneTitle";
import {CodeSnippet} from "./components/CodeSnippet";
import {BrowserPreview} from "./components/BrowserPreview";
import music from "../public/bg.mp3";
import icon from "../public/icon.svg";
import img1 from "../public/img_1.png";
import img2 from "../public/img_2.png";
import img3 from "../public/img_3.png";
import img4 from "../public/img_4.png";
import { IncrementDemo } from "./components/IncrementDemo";

export const Video: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black", color: "white", fontFamily: "Roboto, sans-serif" }}>
      <Audio src={audioSrc} />
      <Audio src={music} volume={0.15} />

      <Sequence durationInFrames={32}>
        <SceneTitle title="Understanding React DOM" subtitle="Explained by Jace Morales" image={icon} />
      </Sequence>

      <Sequence from={32} durationInFrames={201}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <Img src={img1} style={{ width: "60%" }} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={254} durationInFrames={123}>
        <CodeSnippet code={`import ReactDOM from "react-dom";\n\nReactDOM.render(<App />, document.getElementById("root"));`} />
      </Sequence>

      <Sequence from={398} durationInFrames={178}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1, padding: 40 }}>
            <h2>Real DOM</h2>
            <Img src={img2} style={{ width: "100%" }} />
          </div>
          <div style={{ flex: 1, padding: 40 }}>
            <h2>Virtual DOM</h2>
            <Img src={img3} style={{ width: "100%" }} />
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={597} durationInFrames={300}>
        <IncrementDemo />
      </Sequence>

      <Sequence from={900} durationInFrames={200}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <h2>Virtual DOM Diffing</h2>
          <Img src={img4} style={{ width: "70%" }} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={1100} durationInFrames={235}>
        <BrowserPreview />
      </Sequence>

      <Sequence from={1355} durationInFrames={132}>
        <SceneTitle title="React DOM bridges React and the Browser" subtitle="That’s the power of React!" image={icon} />
      </Sequence>
    </AbsoluteFill>
  );
};
