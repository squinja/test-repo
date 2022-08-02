import React, { useEffect } from "react";

function MoveToNextLineIndex({ name, moveLineIndexByOne, setIsChoiceBranch }) {
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.keyCode);
      moveLineIndexByOne();
      setIsChoiceBranch(true);
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default MoveToNextLineIndex;
