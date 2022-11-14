import React, { useRef, useEffect } from 'react';
import { rotate, pulse, translate } from '../../../../utilities/utilities';

const Circle = (props) => {
    const circleRef = useRef(null);

    const style = {
        position: 'absolute',
        top: `${props.positionY}%`,
        left: `${props.positionX}%`,
        zIndex: -1,
        transition: 'all 50000ms',
        transitionTimingFunction: 'linear',
    };

    useEffect(() => {
        if(props.animation.indexOf("rotation") >= 0) {
            rotate(circleRef, props.animation.replace("rotation-", ""), 1);
        } else if(props.animation === "translation") {
            translate(circleRef);
        } else {
            pulse(circleRef);
        }
    }, []);

    return(
        <svg ref={circleRef} className='circle' style={style} xmlns="http://www.w3.org/2000/svg" width={`${props.width * 2}px`} height={`${props.height * 2}px`}>
        <defs>
            <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(255,94,247)", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: "rgb(2,245,255)", stopOpacity:1}} />
            </linearGradient>
        </defs>
        <circle cx="50%" cy="50%" r={`${props.width - (props.stroke / 2)}px`} stroke="url(#grad3)" strokeWidth={`${props.stroke}px`} fill="transparent" />
    </svg>
    );
};

export default Circle;