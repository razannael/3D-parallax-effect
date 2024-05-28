const parallax_el = document.querySelectorAll(".parallax");
let xVal = 0,
    yVal = 0;

    window.addEventListener('mousemove', (e)=>{
        xVal = e.clientX - window.innerWidth / 2;
        yVal = e.clientY - window.innerHeight / 2;

    
        parallax_el.forEach((el)=>{ 
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;

            let isLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zVal = (e.clientX - parseFloat(getComputedStyle(el).left)) * isLeft * 0.09;
            el.style.transform = `translateX(calc(-50% + ${-xVal * speedx}px)) translateY(calc(-50% + ${yVal * speedy}px)) perspective(2300px) translateZ(${zVal * speedz}px)`;
    });

    });