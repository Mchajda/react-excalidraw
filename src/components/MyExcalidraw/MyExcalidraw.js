import React, { useState, useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import './style.css';

const vHeight = window.innerHeight - 64;

const MyExcalidraw = ({newActiveBoard, previousActiveBoard}) => {       
    const [elements, setElements] = useState([]);
    const [appState, setAppState] = useState({});

    useEffect(() => {
        localStorage.setItem(escape(previousActiveBoard), JSON.stringify({ elements, appState }));

        console.log(escape(newActiveBoard));
        const savedData = localStorage.getItem(escape(newActiveBoard));
        if (savedData) {
            try {
                console.log(savedData);
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

                const a = [];
                const b = {};
                localStorage.setItem(escape(newActiveBoard), JSON.stringify({ a, b }));
            }
        }
        else
        {
            setElements([]);
            setAppState({});
        }
    }, [newActiveBoard, previousActiveBoard]);

    const handleChange = (elements, appState) => {
        setElements(elements);
        setAppState(appState);
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
