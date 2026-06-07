import React from "react";
import { Composition } from "remotion";
import { TestRender } from "./TestRender";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TestRender"
        component={TestRender}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
