// gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "#main" });
// // --- SETUP END ---







// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();











var logo = document.querySelector("#mainlogo");
var page = document.querySelector("#logoPage");
var pg = document.querySelector("#page2")
var pg2 = document.querySelector("#page3")
var pg3 = document.querySelector("#page4")

logo.addEventListener("click",function(){
  page.style.display = "none";
  pg.style.display = "block";
  pg2.style.display = "block";

  var tl = gsap.timeline()

  
  tl.from("#page2 h1",{
    y:400,
    duration:2
  })

  tl.from("#page3 h1, #page3 h4",{
    y:100,
    opacity:0,
    
    
    duration:2,
    scrollTrigger:{
      trigger:"#page3",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"10%",
      duration:7,
      scrub:2,
      // markers:true
      
    }
  })

  tl.from("#page4 h1",{
    y:300,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page4",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 20%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page7 h1",{
    y:100,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page7",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 20%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page9 h1",{
    y:100,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page9",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 30%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page11 h1",{
    y:100,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page11",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 40%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page14 h1",{
    y:90,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page14",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 10%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page15 h1",{
    y:100,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page15",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 20%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })

  tl.from("#page16 h1",{
    y:100,
    opacity:0,
    
    duration:2,
    scrollTrigger:{
      trigger:"#page16",
      opacity:0,
      scroller:"body",
      start:"top top",
      end:"top 20%",
      duration:2,
      scrub:2,
      // markers:true
    }
  })
  
})






gsap.from("#cursor",{
    rotate:"360 deg",
    repeat:-1,
    duration:0.8
  
})

document.addEventListener("mousemove",function(elem){
  gsap.to("#cursor",{
    x:elem.x,
    y:elem.y,
    duration:0.5
  })

})
  
gsap.to("#page6 img",{
  
  // opacity:0,
  duration:4,
  repeat:-1,
  scale:1.5

})



gsap.to("#danger", {
  rotation: 10,
  duration: 2,
  // repeat: -1,
  scrollTrigger: {
    trigger: "#danger",
    scroller: "body",
    scrub: 2,
    start: "top top",
    end:"50",
    
  },
});



