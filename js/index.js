new WOW().init();

let all = document.getElementById("all"),
  img = document.getElementById("img-cont"),
  img_cont = img.innerHTML,
  html = document.getElementById("html"),
  ps = document.getElementById("ps"),
  wp = document.getElementById('wp'),
  mob = document.getElementById("mob"),
  nav = document.querySelector('.nav-list'),
  ham = document.querySelector('.ham'),
  prog = document.querySelectorAll('.prog');


all.onclick = function() {

  'use strict';

  this.style.backgroundColor = 'Orange';
  html.style.backgroundColor = '';
  ps.style.backgroundColor = '';
  wp.style.backgroundColor = '';
  mob.style.backgroundColor = '';



  img.innerHTML = img_cont;
  addOverLay()



}


html.onclick = function() {

  'use strict'

  this.style.backgroundColor = 'Orange';
  ps.style.backgroundColor = '';
  wp.style.backgroundColor = '';
  mob.style.backgroundColor = '';
  all.style.backgroundColor = '';

  img.innerHTML = `
    <div class="img-cont wow fadeInDownBig">
        <div>
        <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img1.jpg">
    </div>
    <div class="img-cont wow slideInRight">
        <div>
            <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img3.jpg">
    </div>
    `
  addOverLay()

}

ps.onclick = function() {

  'use strict';

  this.style.backgroundColor = 'Orange';
  html.style.backgroundColor = '';
  all.style.backgroundColor = '';
  wp.style.backgroundColor = '';
  mob.style.backgroundColor = '';

  img.innerHTML = `
    <div class="img-cont wow bounceInUp">
    <div>
        <p>Show IMG</p>
    </div>
    <img class="img" src="css/images/portfolio-img7.jpg">
    </div>
    `
  addOverLay()

}

wp.onclick = function() {

  'use strict';

  this.style.backgroundColor = 'Orange';
  html.style.backgroundColor = '';
  all.style.backgroundColor = '';
  ps.style.backgroundColor = '';
  mob.style.backgroundColor = '';

  img.innerHTML = `
    <div class="img-cont wow fadeInUpBig">
        <div>
             <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img4.jpg">
    </div>
    </div>
    <div class="img-cont wow bounceInDown">
        <div>
            <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img6.jpg">
        </div>
    <div class="img-cont wow slideInRight">
        <div>
           <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img8.jpg">
    </div>

    `
  addOverLay()


}

mob.onclick = function() {

  'use strict';

  this.style.backgroundColor = 'Orange';
  html.style.backgroundColor = '';
  all.style.backgroundColor = '';
  ps.style.backgroundColor = '';
  wp.style.backgroundColor = '';

  img.innerHTML = `
    <div class="img-cont wow slideInLeft">
        <div>
            <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img2.jpg">
    </div>
    <div class="img-cont wow slideInRight">
        <div>
            <p>Show IMG</p>
        </div>
        <img class="img" src="css/images/portfolio-img5.jpg">
    </div>
    `
  let imgCont = document.querySelectorAll('.img-cont div p');
  addOverLay()
}

setTimeout(() => { all.click() }, 0)


ham.onclick = function() {
  nav.classList.toggle('hide');
  ham.classList.toggle('rotate');
}

prog.forEach((e) => {
  //console.log(e.dataset.prog)
  e.style.width = e.dataset.prog
})

let overlay = (src) => {
  let div = document.createElement('div')
  div.className = 'overlay'
  let imgContainer = document.createElement('div')
  imgContainer.className = "imgcontainer"
  let img = document.createElement('img')
  img.src = src
  let close = document.createElement('div');
  close.className = 'close'
  close.textContent='X'
  imgContainer.appendChild(img)
  div.appendChild(imgContainer)
  imgContainer.appendChild(close)
  document.body.appendChild(div)
  close.onclick = function() {
    div.remove()

  }
  div.onclick = function() {
    div.remove()
  }

}

const addOverLay = () => {
  let imgCont = document.querySelectorAll('.img-cont div p');
  imgCont.forEach((e) => {
    let src = e.parentElement.nextElementSibling.src
    e.onclick = function() {
      overlay(src)

    }
  })
}
