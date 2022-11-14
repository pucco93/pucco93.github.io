import React from 'react';
import Circle from './Svgs/Circle';
import Square from './Svgs/Square';
import Triangle from './Svgs/Triangle';
import Xsign from './Svgs/Xsign';

const Scene = () => {
    return(
        <div className='scene-container'>
            <Triangle   id={1} width={100}     height={100}    positionX={40}  positionY={10} stroke={10} animation={"translation"} />
            <Xsign      id={1} width={120}     height={120}    positionX={80}  positionY={15} animation={"rotation-clockwise"}/>
            <Square     id={1} width={90}      height={90}     positionX={20}  positionY={70} stroke={20} animation={"translation"} />
            <Circle     id={1} width={30}      height={30}     positionX={10}  positionY={15} stroke={8} animation={"translation"}/>
            <Triangle   id={2} width={45}      height={45}     positionX={60}  positionY={80} stroke={6} animation={"pulsing"}/>
            <Square     id={2} width={35}      height={35}     positionX={70}  positionY={60} stroke={10} animation={"rotation-anti-clockwise"}/>
            <Xsign      id={2} width={50}      height={50}     positionX={9}  positionY={68} animation={"pulsing"}/>
            <Circle     id={2} width={300}     height={300}    positionX={80}  positionY={60} stroke={40} animation={"rotation-clockwise"} />
        </div>
    );
};

export default Scene;