const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf) 





var tl = gsap.timeline({scrollTrigger:{
    trigger:".container",
    scroller:"body",
    start:"60% 60%",
    end:"250% 60%",
    scrub:true,
    // markers:true,
    pin:true

}})

tl.to(".row-div.two",{
    marginTop:"-32%"    
},'a')
tl.to(".row-div.three",{
    marginTop:"-20%",
    duration:.4,
    y:"-15%"
    // duration:0.4
},'a')
tl.to(".row-div.four",{
    marginTop:"-23%",
    y:"-15%",
    duration:.3

    // duration:0.3

},'a')
tl.to(".row-div.five",{
    marginTop:"-23%",
    y:"-15%",
    duration:.2

    // duration:0.3

},'a')

tl.to(".rotate-div",{
    rotation:-15,
    duration:1,
    scale:.7,
    // dalay:0.7

},'a')
tl.to(".rotate-div",{
    opacity:0.2,
    delay:1


},'a')
tl.to(".mini-line",{
    width:"100%",
},'a')
tl.to(".overlay h1",{
    opacity:"1",
    delay:.3,
    stagger:1
},'a')
var tl1 = gsap.timeline({scrollTrigger:{
    trigger:".section-2",
    scroller:"body",
    start:"0% 80%",
    end:"100% 50%",
    scrub:true,
    // pin:true,
    // markers:true

}})
tl1.to(".curve-wrapper",{
    height:0,
    marginTop:0,
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".context-1",
    scroller:"body",
    start:"38% 70%",
    end:"100% 55%",
    // markers:true,
    scrub:1,
    // pin:true
    }
})
tl2.to(".main-text-two .text-3",{
    width:"97%",
},'b')
tl2.to(".main-text-two .text-4",{
    width:"97%",
    delay:0.5
},'b')
function pinDivAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".pin-div",
        scroller:"body",
        start:"0% 0%",
        end:"300% 50%",
        markers:true,
        scrub:1,
        pin:true
        }
    })
    tl3.to(".pin-div-circle",{
        rotate:"720deg"
    },'a')
    // --------------------------first-div--------------------------------

    tl3.to(".right-div",{
        opacity:1,
        top:"-15%",
        // marginTop:"100%"
    },'a')
    tl3.to("#right-two",{
        opacity:0,
        // top:"0%",
    },'a')
    tl3.to("#right-three",{
        opacity:0,
        // top:"-25%",
    },'a')
    tl2.to("#right-four",{
        opacity:0,
        // top:"0%",
    },'a')
    tl2.to("#right-five",{
        opacity:0,
        // top:"-200%",
    },'a')

    // =========second-div======
    tl3.to(".right-div",{
        opacity:0,
        top:"-115%",
        // marginTop:"100%"
    },'b')
    tl3.to("#right-two",{
        opacity:1,
        // top:"0%",
    },'b')
    tl3.to("#right-three",{
        opacity:0,
        // top:"-25%",
    },'c')
    tl3.to("#right-four",{
        opacity:0,
        // top:"0%",
    },'d')
    tl3.to("#right-five",{
        opacity:0,
        // top:"-200%",
    },'b')
    // =========third-div======
    tl3.to(".right-div",{
        opacity:0,
        top:"-220%",
        // marginTop:"100%"
    },'c')
    tl3.to("#right-two",{
        opacity:0,
        // top:"0%",
    },'c')
    tl3.to("#right-three",{
        opacity:1,
        // top:"-25%",
    },'c')
    tl3.to("#right-four",{
        opacity:0,
        // top:"0%",
    },'c')
    tl3.to("#right-five",{
        opacity:0,
        // top:"-200%",
    },'c')
    // =========four-div======
    tl3.to(".right-div",{
        opacity:0,
        top:"-330%",
        // marginTop:"100%"
    },'d')
    tl3.to("#right-two",{
        opacity:0,
        // top:"0%",
    },'d')
    tl3.to("#right-three",{
        opacity:0,
        // top:"-25%",
    },'d')
    tl3.to("#right-four",{
        opacity:1,
        // top:"0%",
    },'d')
    tl3.to("#right-five",{
        opacity:0,
        // top:"-200%",
    },'d')
    // =========five-div======
    tl3.to(".right-div",{
        opacity:0,
        top:"-440%",
        // marginTop:"100%"
    },'e')
    tl3.to("#right-two",{
        opacity:0,
        // top:"0%",
    },'e')
    tl3.to("#right-three",{
        opacity:0,
        // top:"-25%",
    },'e')
    tl3.to("#right-four",{
        opacity:0,
        // top:"0%",
    },'e')
    tl3.to("#right-five",{
        opacity:1,
        // top:"-200%",
    },'e')
  
    tl3.to(".pin-div-circle",{
        left:"50%",
        // duration:2,
        delay:10,
        rotate:"720deg"
    },'last')
}
pinDivAnimation()
