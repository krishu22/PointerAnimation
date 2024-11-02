var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var imgdiv = document.querySelector("#image");
var overlay = document.querySelector("#overlay");

main.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
                x:dets.x-25,
                y:dets.y-25,
                duration:0.001, // jitni kam value hogi utna sath sath chlega
                ease:"back.out"
        })
})

imgdiv.addEventListener("mousemove",function(){
        cursor.innerHTML="heyy", // = not :
        gsap.to(cursor,{
                scale:4,
        })
        gsap.to(overlay,{
                backgroundColor:"rgba(0,0,0,0.235)"
        })
})

imgdiv.addEventListener("mouseleave",function(){
        cursor.innerHTML="",
        gsap.to(cursor,{
                scale:1,
        })
        gsap.to(overlay,{
                backgroundColor:"rgba(0,0,0,0)",
        })
})