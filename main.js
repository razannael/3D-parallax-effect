const parallax_el = document.querySelectorAll(".parallax");
let xVal = 0,
    yVal = 0;

    let rotateDegree = 0;


    const update = (cursorPosition) => {
        parallax_el.forEach((el)=>{
            let speedx = parseFloat(el.dataset.speedx);
            let speedy = parseFloat(el.dataset.speedy);
            let speedz = parseFloat(el.dataset.speedz);
            let rotateSpeed = parseFloat(el.dataset.rotation);

            let isLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zVal = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isLeft * 0.09;
            el.style.transform = `translateX(calc(-50% + ${-xVal * speedx}px)) rotateY(${rotateDegree * rotateSpeed}deg) translateY(calc(-50% + ${yVal * speedy}px)) perspective(2300px) translateZ(${zVal * speedz}px)`;
    });
    }

    update(0);
    window.addEventListener('mousemove', (e)=>{
        xVal = e.clientX - window.innerWidth / 2;
        yVal = e.clientY - window.innerHeight / 2;
        
        rotateDegree = xVal / (window.innerWidth / 2) * 20;

        update(e.clientX);

    });
