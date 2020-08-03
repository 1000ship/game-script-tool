import React, { useState } from "react";
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

  const createNewBlock = (blockData) => {
    saveBlockList([...blockList, blockData])
    setBlockList([...blockList, blockData]);
  };

  return (
    <Container>
      <ScriptInput
        blockList={blockList}
        createNewBlock={createNewBlock}
      ></ScriptInput>
      <hr />
      <ScriptView
        blockList={blockList}
        setBlockList={setBlockList}
      ></ScriptView>
    </Container>
  );
}

export default App;
