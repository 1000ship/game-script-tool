const LOCAL_STORAGE_ID = "me.1000ship.game-script-tool";

export const loadBlockList = () => {
  let cachedBlockList;
  try {
    cachedBlockList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
    if (cachedBlockList === null) cachedBlockList = [];
  } catch {
    cachedBlockList = [];
  }
  return cachedBlockList;
};

export const saveBlockList = (blockList) => {
  try {
    localStorage.setItem(
      LOCAL_STORAGE_ID,
      JSON.stringify(blockList)
    );
  } catch {
    alert( "자동 저장 중 문제 발생")
  }
};

export const exportScript = (blockList) => {
  try {

  } catch {

  }
}

export const importScript = () => {
  try {

  } catch {
    
  }
}