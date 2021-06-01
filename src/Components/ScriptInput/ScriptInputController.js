import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { appStateAtom } from "../../Stores/atom";
import { blockListSelector } from "../../Stores/selector";
import { OPTION_MINIMUM_COUNT } from "../../Utils/Constant";
import { DEFAULT_SCENE } from "./constant";
import ScriptInputPresenter from "./ScriptInputPresenter";

function ScriptInput({ createNewBlock, modifyBlock }) {
  const appState = useRecoilValue(appStateAtom);
  const blockList = useRecoilValue(blockListSelector);
  const { modifySceneId } = appState;

  const defaultScene = useMemo(() => (modifySceneId ? blockList.find((data) => data.sceneId === modifySceneId) : DEFAULT_SCENE), [blockList, modifySceneId]);
  useEffect(() => {
    setFormData({ ...defaultScene });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let [formData, setFormData] = useState(defaultScene);

  const onInputChange = (e) => {
    const {
      name,
      value,
      dataset: { optionIndex, value: dataValue },
    } = e.target;
    if (optionIndex !== undefined) {
      // for option text input
      setFormData((data) => {
        data.options[optionIndex][name] = value;
        return { ...data };
      });
    } else {
      // for text input, radio button
      setFormData({
        ...formData,
        [name]: dataValue ? dataValue : value,
      });
    }
  };

  const onOptionAddClick = (e) => {
    setFormData({
      ...formData,
      options: formData.options.concat({
        answer: "",
        reaction: "",
        nextId: "",
      }),
    });
  };

  const onOptionRemoveClick = (e) => {
    if (formData.options.length > OPTION_MINIMUM_COUNT)
      setFormData((formData) => ({
        ...formData,
        options: formData.options.slice(0, formData.options.length - 1),
      }));
  };

  const onNewBlockClick = (e) => {
    if (formData.sceneId.length === 0) alert("Scene ID를 입력하세요.");
    else if (blockList.find((block) => block.sceneId === formData.sceneId)) {
      alert("중복되는 Scene Type과 Scene ID가 있습니다.");
    } else if (createNewBlock) {
      createNewBlock({ ...formData });
      setFormData({
        ...defaultScene,
        options: [
          {
            answer: "",
            reaction: "",
            nextId: "",
          },
        ],
      });
    }
  };

  const onModifyBlockClick = (e) => modifyBlock({ ...formData });

  return (
    <ScriptInputPresenter
      isModifyMode={modifySceneId !== null}
      formData={formData}
      onInputChange={onInputChange}
      onOptionAddClick={onOptionAddClick}
      onOptionRemoveClick={onOptionRemoveClick}
      onNewBlockClick={onNewBlockClick}
      onModifyBlockClick={onModifyBlockClick}
    ></ScriptInputPresenter>
  );
}

export default ScriptInput;
