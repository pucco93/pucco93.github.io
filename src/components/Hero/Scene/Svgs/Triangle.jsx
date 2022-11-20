import React, { useRef, useEffect } from 'react';
import { rotate, pulse, translate, randomGradient } from '../../../../utilities/utilities';

const Triangle = (props) => {
    const triangleRef = useRef(null);

    const style = {
        position: 'absolute',
        top: `${props.positionY}%`,
        left: `${props.positionX}%`,
        zIndex: -1,
        transform: 'scaleY(-1)',
        transition: 'all 100000ms',
        transitionTimingFunction: 'linear',
    };

    useEffect(() => {
        if(props.animation.indexOf("rotation") >= 0) {
            rotate(triangleRef, props.animation.replace("rotation-", ""), 1, "scaleY(-1)");
        } else if(props.animation === "translation") {
            translate(triangleRef, "scaleY(-1)");
        } else {
            pulse(triangleRef, "scaleY(-1)");
        }
    }, [props.animation]);

    return (
        <svg ref={triangleRef} className='triangle' height={props.height} width={props.width} style={style} viewBox={`0 0 ${props.width} ${props.height}`}>
        <defs>
            <linearGradient id="grad4" x1={randomGradient()} y1={randomGradient()} x2={randomGradient()} y2={randomGradient()}>
                <stop offset="0%" style={{ stopColor: "#bf0fff", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#cbff49", stopOpacity: 1 }} />
            </linearGradient>
        </defs>
            <polygon points={`${props.stroke},${props.stroke} ${props.width / 2},${props.height - props.stroke} ${props.width - props.stroke},${props.stroke}`} strokeWidth={`${props.stroke}px`} fill="transparent" stroke="url(#grad4)" />
        </svg>
    );
};

export default Triangle;