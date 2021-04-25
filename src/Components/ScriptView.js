import React from "react";
import styled from "styled-components";
import ScriptBlock from "./Partials/ScriptBlock";
import { saveBlockList } from "../Utils/api";

const Container = styled.div`
  padding: 5px 0px;
`;

function ScriptView({
  blockList,
  setBlockList,
  setModifySceneId,
  setIsSceneFormOpened,
}) {
  const moveBlockBy = (sceneId, by) => {
    const index = blockList.findIndex((block) => block.sceneId === sceneId);
    const at = index + by;
    if (at < 0 || at >= blockList.length) return;
    setBlockList((blockList) => {
      const tmpArray = [
        ...blockList.slice(0, index),
        ...blockList.slice(index + 1),
      ];
      const result = [
        ...tmpArray.slice(0, at),
        blockList[index],
        ...tmpArray.slice(at),
      ];
      saveBlockList(result);
      return result;
    });
  };

  const removeBlock = (sceneId) => {
    if (!window.confirm("삭제한 후 되돌릴 수 없습니다. 삭제하시겠습니까?"))
      return;
    setBlockList((blockList) => {
      const removeIndex = blockList.findIndex(
        (block) => block.sceneId === sceneId
      );
      saveBlockList(
        blockList.slice(0, removeIndex).concat(blockList.slice(removeIndex + 1))
      );
      return blockList
        .slice(0, removeIndex)
        .concat(blockList.slice(removeIndex + 1));
    });
  };

  const modifyBlock = (sceneId) => {
    setIsSceneFormOpened( true )
    setModifySceneId( sceneId )
  }

  return (
    <Container>
      {blockList.map(
        ( block, i ) => (
          <ScriptBlock
            key={block.sceneId}
            {...block}
            moveBlockBy={moveBlockBy}
            removeBlock={removeBlock}
            modifyBlock={modifyBlock}
            blockList={blockList}
          ></ScriptBlock>
        )
      )}
    </Container>
  );
}

export default ScriptView;
