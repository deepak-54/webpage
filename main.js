  var typed = new Typed('#element', {
      strings: ['Software Developer..', 'Web Developer..','Gaphics Designer..','React<sub>js</sub> Developer..'],
      typeSpeed: 150,
      loop: true,
      backSpeed: 100,
    });

    var typed = new Typed('#name-type',{
      strings: ['Deepak Singh---'],
      typeSpeed: 150,
      loop: true,
      backSpeed:100,
    });

    const barEle = document.querySelector(".bar")
    const asideEle = document.querySelector(".sides")
    const closEle = document.querySelector(".close")
    const singOut = document.querySelector(".signOut")
    const contEle = document.querySelector(".contact")
    const setEle = document.querySelector(".setting")
    const arrowRight = document.querySelector(".arrow-r")
  // const rightSide = document.querySelector('.side')
    barEle.addEventListener("click",()=>{
      // asideEle.style.display = 'block'
        asideEle.classList.toggle('r-active')
    })
    arrowRight.addEventListener("click",()=>{
      asideEle.classList.remove('r-active')
    })
    // closEle.addEventListener("click",()=>{
    //   asideEle.style.display = 'none'
    // })

    singOut.addEventListener("click",()=>{
      confirm("Are You Sure Sign out Account")
    })
    // const logo = document.querySelector(".logo-image")
    const arroeEle = document.querySelector(".arrow-s")
    const leftSide = document.querySelector(".l-side")
    const logoEle = document.querySelector(".logo-image")
    
    logoEle.addEventListener("click",()=>{
      leftSide.classList.toggle('l-active')
      logoEle.style.display = 'none'

    })
    arroeEle.addEventListener("click",()=>{
      leftSide.classList.remove('l-active')
      logoEle.style.display = 'block'
    })


// const fName= document.querySelector(".fName").value
// console.log(fName)

//     const formBtn = document.querySelector(".form-button")
    









//     const cardEle = document.querySelector(".card-content")
//     const cardLink = document.querySelector(".card-link")
// cardEle.addEventListener("click",()=>{
//   cardLink.setAttribute("href","https://www.youtube.com/")
// })

