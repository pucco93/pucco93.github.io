export const rotate = (ref, direction, rotationNumber, precedentTransform = "") => {
    let degrees = rotationNumber * 360;
    if (direction === "clockwise") {
        ref.current.style.transform = `rotate(${degrees}deg) ${precedentTransform}`;
    } else {
        ref.current.style.transform = `rotate(-${degrees}deg ${precedentTransform})`;
    }
    rotationNumber = rotationNumber + 1;
    setTimeout(() => rotate(ref, direction, rotationNumber, precedentTransform), 50000);
};

export const translate = (ref, precedentTransform = "") => {
    let newX = Math.floor(Math.random() * 100);
    let newY = Math.floor(Math.random() * 100);
    let xSign = Math.random() < 0.5 ? "-" : "";
    let ySign = Math.random() < 0.5 ? "-" : "";
    ref.current.style.transform = `translate(${xSign}${newX}%, ${ySign}${newY}%) ${precedentTransform}`;
    setTimeout(() => translate(ref, precedentTransform), 100000);
};

export const pulse = (ref, precedentTransform = "") => {
    let isMirrored = "";
    if (precedentTransform === "scaleY(-1)") {
        isMirrored = "-";
    }
    if (ref.current.style.transform === "scale(2, 2)" || ref.current.style.transform === "scale(2, -2)") {
        ref.current.style.transform = `scale(1, ${isMirrored}1)`;
    } else {
        ref.current.style.transform = `scale(2, ${isMirrored}2)`;
    }
    setTimeout(() => pulse(ref, precedentTransform), 100000);
};

export const randomGradient = () => {
    return `${Math.floor(Math.random() * 100)}%`;
};