import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import './style.css';

const MyExcalidraw = () => {
    return (
        <div style={{ height: "100vh", width: '100%' }}>
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
