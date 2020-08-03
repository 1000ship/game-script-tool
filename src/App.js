import React, { useState, useRef } from "react";
import styled from "styled-components";
import ScriptView from "./Components/ScriptView";
import ScriptInput from "./Components/ScriptInput";
import { loadBlockList, saveBlockList } from "./Utils/api";

const Container = styled.div`
  width: 80%;
  margin: auto auto;
`;

function App() {
  const cachedBlockList = loadBlockList()
  let [blockList, setBlockList] = useState(cachedBlockList);
  let [scriptInputHeight, setScriptInputHeight] = useState(0)

  const createNewBlock = (blockData) => {
    saveBlockList([...blockList, blockData])
    setBlockList([...blockList, blockData]);
  };

  return (
    <Container>
      <ScriptInput
        blockList={blockList}
        createNewBlock={createNewBlock}
        setScriptInputHeight={setScriptInputHeight}
      ></ScriptInput>
      <ScriptView
        blockList={blockList}
        setBlockList={setBlockList}
        scriptInputHeight={scriptInputHeight}
      ></ScriptView>
    </Container>
  );
}

export default App;
