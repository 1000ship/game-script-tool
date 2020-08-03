import React from "react";
import styled from "styled-components";
import ScriptBlock from "./Partials/ScriptBlock";

const Container = styled.div``;

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
          ></ScriptBlock>
        )
      )}
    </Container>
  );
}

export default ScriptView;
