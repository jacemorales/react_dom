import {Composition} from "remotion";
import {Video} from "./Video";
import narration from "../public/1002.mp3";
import {getAudioDurationInSeconds} from "@remotion/media-utils";
import {useEffect, useState} from "react";

export const RemotionRoot: React.FC = () => {
  const [durationInFrames, setDurationInFrames] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const durationInSeconds = await getAudioDurationInSeconds(narration);
      setDurationInFrames(Math.floor(durationInSeconds * 30)); // 30fps
    })();
  }, []);

  if (durationInFrames === null) {
    return null; // wait until audio duration loads
  }

  return (
    <Composition
      id="MyVideo"
      component={Video}
      durationInFrames={durationInFrames}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ audioSrc: narration }}
    />
  );
};
