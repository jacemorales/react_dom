// src/index.ts
import {registerRoot} from "remotion";
import {Video} from "./Video";
import narration from "../public/1002.mp3";
import {getAudioDurationInSeconds} from "@remotion/media-utils";
import {Composition} from "remotion";

// Compute audio duration synchronously using top-level async IIFE
(async () => {
  const durationInSeconds = await getAudioDurationInSeconds(narration);
  const durationInFrames = Math.floor(durationInSeconds * 30); // 30fps

  registerRoot(() => (
    <Composition
      id="MyVideo"
      component={Video}
      durationInFrames={durationInFrames}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ audioSrc: narration }}
    />
  ));
})();
