import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import './style.css';

const MyExcalidraw = () => {
    const vHeight = window.innerHeight - 64;
    console.log(vHeight);
    return (
        <div style={{ height: vHeight + "px", width: '100%' }}>
            <Excalidraw
                initialData={null}
                onChange={(elements, state) =>
                    console.log("Elements :", elements, "State : ", state)
                }
                onPointerUpdate={(event) => console.log(event)}
            />
        </div>
    );
};

export default MyExcalidraw;
