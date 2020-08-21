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
  let [modifySceneId, setModifySceneId] = useState(null);

  const createNewBlock = (blockData) => {
    saveBlockList([...blockList, blockData]);
    setBlockList([...blockList, blockData]);
  };

  const modifyBlock = (blockData) => {
    const targetIndex = blockList.findIndex(
      (data) => data.sceneId === blockData.sceneId
    );
    if (targetIndex === -1) {
      alert(`수정하고자하는 Scene ${blockData.sceneId}을 찾을 수 없습니다.`);
      return;
    }
    saveBlockList([
      ...blockList.slice(0, targetIndex),
      blockData,
      ...blockList.slice(targetIndex + 1),
    ]);
    setBlockList([
      ...blockList.slice(0, targetIndex),
      blockData,
      ...blockList.slice(targetIndex + 1),
    ]);
    setModifySceneId(null);
    setIsSceneFormOpened(false);
  };

  return (
    <Container>
      <ControlMenu
        blockList={blockList}
        setBlockList={setBlockList}
        setModifySceneId={setModifySceneId}
        setIsSceneFormOpened={setIsSceneFormOpened}
      ></ControlMenu>
      <ScriptInput
        blockList={blockList}
        createNewBlock={createNewBlock}
        modifyBlock={modifyBlock}
        isOpend={isSceneFormOpened}
        modifySceneId={modifySceneId}
      ></ScriptInput>
      <BlockContainer>
        <ScriptView
          blockList={blockList}
          setBlockList={setBlockList}
          setModifySceneId={setModifySceneId}
          setIsSceneFormOpened={setIsSceneFormOpened}
        ></ScriptView>
      </BlockContainer>
    </Container>
  );
}

export default App;
