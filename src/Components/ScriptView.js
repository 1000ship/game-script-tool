import React, { useState } from "react";
import styled from "styled-components";
import ScriptBlock from "./Partials/ScriptBlock";

const Container = styled.div`
  padding: 5px 0px;
`;

function ScriptView({ blockList, setBlockList }) {

  return (
    <Container>
      {blockList.map(
        ({
          sceneId,
          characterName,
          sceneScript,
          characterImage,
          backgroundImage,
          sceneSound,
          options,
          nextSceneId,
          sceneType,
        }, i) => (
          <ScriptBlock
            key={sceneId}
            sceneId={sceneId}
            characterName={characterName}
            sceneScript={sceneScript}
            characterImage={characterImage}
            backgroundImage={backgroundImage}
            sceneSound={sceneSound}
            options={options}
            setBlockList={setBlockList}
            nextSceneId={nextSceneId}
            sceneType={sceneType}
          ></ScriptBlock>
        )
      )}
    </Container>
  );
}

export default ScriptView;
