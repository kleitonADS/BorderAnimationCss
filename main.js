import './style.css'
import css3 from '/css3-fill.svg'
import html5 from '/html5-line.svg'
import JavaScript from '/javascript-line.svg'
import reactJs from '/reactjs-line.svg'


document.querySelector('#app').innerHTML = `
  <div>
    <a class="button-icon" href="#" >
      <img src="${html5}" class="logo" alt="Vite logo" />
    </a>
    <a class="button-icon" href="#":>
      <img src="${css3}" class="logo vanilla" alt="JavaScript logo" />
    </a>

     <a class="button-icon" href="#" >
      <img src="${JavaScript}" class="logo" alt="Vite logo" />
    </a>
    <a class="button-icon" href="#":>
      <img src="${reactJs}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Border Animation</h1>
    <p>
    <a>  @KleitonAds</a> 
    </p>

   
  </div>
`


