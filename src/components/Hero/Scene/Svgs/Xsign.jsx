import React, { useRef } from 'react';
import { rotate, pulse, translate } from '../../../../utilities/utilities';

const Xsign = (props) => {
    const xsignRef = useRef(null);

    const style = {
        position: 'absolute',
        top: `${props.positionY}%`,
        left: `${props.positionX}%`,
        zIndex: -1,
        transition: 'all 100000ms',
        transitionTimingFunction: 'linear',
    };

    React.useEffect(() => {
        if(props.animation.indexOf("rotation") >= 0) {
            rotate(xsignRef, props.animation.replace("rotation-", ""), 1);
        } else if(props.animation === "translation") {
            translate(xsignRef);
        } else {
            pulse(xsignRef);
        }
    }, [props.animation]);

    return (
        <svg ref={xsignRef} className='x-sign' style={style} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} version="1.1" viewBox={`0 0 671 671`}>
            <defs>
                <linearGradient id="grad1" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{stopColor: "#f3f520", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: "#59d102", stopOpacity:1}} />
                </linearGradient>
            </defs>
            <path fill="url(#grad1)" d="m592.16 37.84c-6.3047-6.3008-14.848-9.8398-23.762-9.8398-8.9102 0-17.457 3.5391-23.758 9.8398l-194.64 194.64-194.64-194.64c-8.4922-8.4688-20.855-11.773-32.441-8.6641-11.582 3.1094-20.633 12.16-23.742 23.742-3.1094 11.586 0.19531 23.949 8.6641 32.441l194.64 194.64-194.64 194.64c-8.4688 8.4922-11.773 20.855-8.6641 32.441 3.1094 11.582 12.16 20.633 23.742 23.742 11.586 3.1094 23.949-0.19531 32.441-8.6641l194.64-194.64 194.64 194.64c8.4922 8.4688 20.855 11.773 32.441 8.6641 11.582-3.1094 20.633-12.16 23.742-23.742 3.1094-11.586-0.19531-23.949-8.6641-32.441l-194.64-194.64 194.64-194.64c6.3008-6.3008 9.8398-14.848 9.8398-23.758 0-8.9141-3.5391-17.461-9.8398-23.762z" />
        </svg>
    );
};

export default Xsign;