import React, { useMemo } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import "./style.css";

const vHeight = window.innerHeight - 64;

const MyExcalidraw = ({ board }) => {
  const loadFromLS = useMemo(() => {
    try {
      const savedData = localStorage.getItem(escape(board));

      const parsedData = JSON.parse(savedData);
      parsedData.appState.collaborators = new Map();

      const elements = Array.isArray(parsedData.elements)
        ? parsedData.elements
        : [];

      const appState = parsedData.appState;

      return {
        elements,
        appState,
      };
    } catch (error) {
      console.error(error);

      return {
        elements: [],
        appState: {},
      };
    }
  }, [board]);

  const handleChange = (elements, appState) => {
    localStorage.setItem(escape(board), JSON.stringify({ elements, appState }));
  };

  return (
    <div style={{ height: vHeight + "px", width: "100%" }}>
      <Excalidraw
        key={board}
        initialData={loadFromLS}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyExcalidraw;
