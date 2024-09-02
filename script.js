card_hndle();
window_cntrl();
window.scrollTo(0,0);
toTheTop();


function toTheTop(){
  const button = document.getElementById('up');
  if(button){
button.addEventListener('click' , () => {
  window.scrollTo(0,0);
})}
}

function card_hndle(){
  const bars = document.querySelectorAll('.bars');


  bars.forEach(bar => {
    const img = bar.querySelector('.im'); 
    const info = bar.querySelector('.inf');
    
    img.addEventListener('mouseover' , () => {
      img.classList.add('hide');
      img.classList.remove('show');
      info.classList.add('show');
      info.classList.remove('hide');
    } )

    info.addEventListener('mouseout',() => {
      img.classList.remove('hide');
      img.classList.add('show');
      info.classList.add('hide');
      info.classList.remove('show');
    })
  });
}

function window_cntrl (){
  window.addEventListener('scroll' , function(){
    
  const cont2 = document.querySelector(".container2");
  const cont3 = document.querySelector('.container3');
  const cont4 = document.querySelector('footer');

    var scrollPos= window.scrollY;
    var cont_div = document.querySelector('body');

    if(scrollPos > 360){
      cont2.classList.add("show");
      cont2.classList.remove("hide");
    }
    if(scrollPos >666){
        cont3.classList.add("show");
        cont3.classList.remove("hide");
      
    }
   if(scrollPos >1400){
      cont4.classList.add("show");
      cont4.classList.remove("hide");
    
  }
    console.log(scrollPos);
  })
}
