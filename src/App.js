import React, { useState } from "react";
import styled from "styled-components";
import ControlMenu from "./Components/ControlMenu";
import ScriptView from "./Components/ScriptView";
import ScriptInput from "./Components/ScriptInput";
import { loadBlockList, saveBlockList } from "./Utils/api";

const Container = styled.div`
  @media (min-width: 800px) {
    width: 80%;
  }
  margin: auto auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BlockContainer = styled.div`
  overflow-y: auto;
`;

function App() {
  const cachedBlockList = loadBlockList();
  let [blockList, setBlockList] = useState(cachedBlockList);
  let [isSceneFormOpened, setIsSceneFormOpened] = useState(false);

  const toggleSceneForm = () => {
    setIsSceneFormOpened((opened) => !opened);
  };

  const createNewBlock = (blockData) => {
    saveBlockList([...blockList, blockData]);
    setBlockList([...blockList, blockData]);
  };

  return (
    <Container>
      <ControlMenu
        toggleSceneForm={toggleSceneForm}
        blockList={blockList}
        setBlockList={setBlockList}
      ></ControlMenu>
      <ScriptInput
        blockList={blockList}
        createNewBlock={createNewBlock}
        isOpend={isSceneFormOpened}
      ></ScriptInput>
      <BlockContainer>
        <ScriptView
          blockList={blockList}
          setBlockList={setBlockList}
        ></ScriptView>
      </BlockContainer>
    </Container>
  );
}

export default App;
