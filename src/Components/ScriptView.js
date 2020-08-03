import React from "react";
import styled from "styled-components";
import ScriptBlock from "./Partials/ScriptBlock";

const Container = styled.div`
`;

function ScriptView() {
  return (
    <Container>
      <ScriptBlock
        sceneId="#3-1"
        characterName="John Mayer"
        sceneScript="Hello, the weather is sunny"
        characterImage="smile.png"
        backgroundImage="park.png"
        sceneSound="laugh.mp3"
        options={[]}
      ></ScriptBlock>
      <ScriptBlock
        sceneId="#3-1"
        characterName="John Mayer"
        sceneScript="Hello, the weather is sunny"
        characterImage="smile.png"
        backgroundImage="park.png"
        sceneSound="laugh.mp3"
        options={[]}
      ></ScriptBlock>
    </Container>
  );
}

export default ScriptView;
