document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName('main')[0].style.backgroundSize = "cover"
    // var windowH = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // );      
    var windowH =document.documentElement.clientHeight;
    // document.getElementsByClassName('log')[0].innerHTML = windowH
    window.addEventListener('scroll', function() {
        // console.log(pageYOffset)
        
        if ( pageYOffset <= windowH ) {
            document.getElementsByClassName('main-filter')[0].style.filter = "opacity("+(pageYOffset/10)+"%)"
        }

        if ( pageYOffset >= 35 ) {
            document.getElementsByTagName('nav')[0].style.position = "fixed";
            document.getElementsByTagName('nav')[0].style.margin = "-40px auto";
        } else {
            document.getElementsByTagName('nav')[0].style.position = "absolute";
            document.getElementsByTagName('nav')[0].style.margin = "0px auto";
        }

        if ( pageYOffset >= 0) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('main-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('location-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*2-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('areas-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*6-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('transport-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*7-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('appearance-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*8-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('values-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*9-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('apartments-link')[0].classList.add("active")
        }
        if ( pageYOffset >= windowH*10-100) {
            document.getElementsByClassName('active')[0].classList.remove("active")
            document.getElementsByClassName('about-link')[0].classList.add("active")
        }

        if ( pageYOffset >= windowH*2-100 ) {
            document.getElementsByClassName('area-0-img-bef')[0].style.top = "-15px"
            document.getElementsByClassName('area-0-img-bef')[0].style.right = "-15px"
            document.getElementsByClassName('area-0-img-aft')[0].style.top = "15px"
            document.getElementsByClassName('area-0-img-aft')[0].style.right = "15px"
        }
        if ( pageYOffset >= windowH*3-100 ) {
            document.getElementsByClassName('area-1-img-bef')[0].style.top = "-15px"
            document.getElementsByClassName('area-1-img-bef')[0].style.right = "-15px"
            document.getElementsByClassName('area-1-img-aft')[0].style.top = "15px"
            document.getElementsByClassName('area-1-img-aft')[0].style.right = "15px"
        }
        if ( pageYOffset >= windowH*4-100 ) {
            document.getElementsByClassName('area-2-img-bef')[0].style.top = "-15px"
            document.getElementsByClassName('area-2-img-bef')[0].style.right = "-15px"
            document.getElementsByClassName('area-2-img-aft')[0].style.top = "15px"
            document.getElementsByClassName('area-2-img-aft')[0].style.right = "15px"
        }
        if ( pageYOffset >= windowH*5-100 ) {
            document.getElementsByClassName('area-3-img-bef')[0].style.top = "-15px"
            document.getElementsByClassName('area-3-img-bef')[0].style.right = "-15px"
            document.getElementsByClassName('area-3-img-aft')[0].style.top = "15px"
            document.getElementsByClassName('area-3-img-aft')[0].style.right = "15px"
        }
    });
})
