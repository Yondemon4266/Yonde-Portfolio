import React, { useEffect } from 'react';

const DynamicText = () => {
    console.log(window.innerHeight);
    

    useEffect(() => {
        if (window.innerHeight > 700) {
        const target = document.getElementById('text-target');
        let array = ["simple", "clear", "smart", "strong"];
        let wordIndex = 0;
        let letterIndex = 0;

        const createLetter = () => {
            const letter = document.createElement('span');
            target?.appendChild(letter);
            letter.classList.add("letter");
            letter.style.opacity = '0';
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000);
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                  wordIndex = 0;
                  letterIndex = 0;
                  loop();  
                } else if (letterIndex < array[wordIndex]?.length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 2000);
                }
            }, 80)
        }
        loop();
    }
    }, [])
    return (
        <>
        {window.innerHeight > 1000 ? (<span className="dynamic-text"><span>simply</span>
        <span id="text-target"></span></span>): (<span className="dynamic-text"><span>simply smart</span>
        <span id="text-target"></span></span>) }
        </>
        
    );
};

export default DynamicText;