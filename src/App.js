import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ControlMenu from "./Components/ControlMenu";
import ScriptInput from "./Components/ScriptInput";
import ScriptView from "./Components/ScriptView";
import { appStateAtom } from "./Stores/atom";
import { blockListSelector } from "./Stores/selector";

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
  const [blockList, setBlockList] = useRecoilState(blockListSelector);
  const [appState, setAppState] = useRecoilState(appStateAtom);

  const createNewBlock = (blockData) => {
    setBlockList((blockList) => [...blockList, blockData]);
  };

  const modifyBlock = (blockData) => {
    setBlockList((blockList) => {
      const targetIndex = blockList.findIndex((data) => data.sceneId === blockData.sceneId);
      if (targetIndex === -1) {
        alert(`수정하고자하는 Scene ${blockData.sceneId}을 찾을 수 없습니다.`);
        return blockList;
      }
      return [...blockList.slice(0, targetIndex), blockData, ...blockList.slice(targetIndex + 1)];
    });
    setAppState({
      isSceneFormOpened: false,
      modifySceneId: null,
    });
  };

  return (
    <Container>
      <ControlMenu></ControlMenu>
      {appState.isSceneFormOpened && <ScriptInput blockList={blockList} createNewBlock={createNewBlock} modifyBlock={modifyBlock}></ScriptInput>}
      <BlockContainer>
        <ScriptView></ScriptView>
      </BlockContainer>
    </Container>
  );
}

export default App;
