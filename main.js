const parallax_el = document.querySelectorAll(".parallax");
let xVal = 0,
    yVal = 0;

    window.addEventListener('mousemove', (e)=>{
        xVal = e.clientX - window.innerWidth / 2;
        yVal = e.clientY - window.innerHeight / 2;

        parallax_el.forEach((el)=>{ 
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            el.style.transform = `translateX(calc(-50% + ${-xVal * speedx}px)) translateY(calc(-50% + ${yVal * speedy}px))`
    });

    });