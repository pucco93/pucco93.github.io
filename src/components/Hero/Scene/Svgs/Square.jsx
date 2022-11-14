import React, { useRef, useEffect } from 'react';
import { rotate, pulse, translate, randomGradient } from '../../../../utilities/utilities';

const Square = (props) => {
    const squareRef = useRef(null);

    const style = {
        position: 'absolute',
        top: `${props.positionY}%`,
        left: `${props.positionX}%`,
        zIndex: -1,
        transition: 'all 100000ms',
        transitionTimingFunction: 'linear',
    };

    useEffect(() => {
        if(props.animation.indexOf("rotation") >= 0) {
            rotate(squareRef, props.animation.replace("rotation-", ""), 1);
        } else if(props.animation === "translation") {
            translate(squareRef);
        } else {
            pulse(squareRef);
        }
    }, [props.animation]);

    return (
        <svg ref={squareRef} className='square' style={style} xmlns="http://www.w3.org/2000/svg" width={`${props.width}px`} height={`${props.height}px`}>
            <defs>
                <linearGradient id="grad2" x1={randomGradient()} y1={randomGradient()} x2={randomGradient()} y2={randomGradient()}>
                    <stop offset="0%" style={{ stopColor: "rgb(253,189,85)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgb(249,131,255)", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <rect width={props.width} height={props.height} strokeWidth={`${props.stroke}px`} fill="transparent" stroke="url(#grad2)" />
        </svg>
    );
};

export default Square;