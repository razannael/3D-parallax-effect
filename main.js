const parallax_el = document.querySelectorAll(".parallax");
let xVal = 0,
    yVal = 0;

    window.addEventListener('mousemove', (e)=>{
        xVal = e.clientX - window.innerWidth / 2;
        yVal = e.clientY - window.innerHeight / 2;

        parallax_el.forEach((el)=>{ 
            el.style.transform = `translateX(calc(-50% + ${-xVal}px)) translateY(calc(-50% + ${yVal}px))`
    });

    });