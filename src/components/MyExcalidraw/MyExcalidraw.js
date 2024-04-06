import React, { useState, useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import './style.css';

const vHeight = window.innerHeight - 64;

const MyExcalidraw = () => {       
    const [elements, setElements] = useState([]);
    const [appState, setAppState] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem('excalidrawData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                parsedData.appState.collaborators = new Map();
                
                setElements(Array.isArray(parsedData.elements) ? parsedData.elements : []);

                if (typeof parsedData.appState === 'object' && !Array.isArray(parsedData.appState)) {
                    setAppState(parsedData.appState);
                } else {
                    console.error("Loaded appState is not an object.");
                    setAppState({});
                }
            } catch (error) {
                console.error("Error parsing Excalidraw data: ", error);
                setElements([]);
                setAppState({});
            }
        }
    }, []);

    const handleChange = (elements, appState) => {
        setElements(elements);
        setAppState(appState);
    
        // Log the current board data
        // console.log("Current board data:", { elements, appState });
    
        // Save the current board state to localStorage
        const dataToSave = { elements, appState };
        localStorage.setItem('excalidrawData', JSON.stringify(dataToSave));
    };
    

    return (
        <div style={{ height: vHeight + "px", width: '100%' }}>
            <Excalidraw
                initialData={{
                    elements: elements,
                    appState: appState,
                }}
                onChange={handleChange}
            />
        </div>
    );
};

export default MyExcalidraw;
