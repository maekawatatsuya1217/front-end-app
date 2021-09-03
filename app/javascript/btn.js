function btn(){
    const btn = document.getElementById("btn")
    btn.addEventListener('mouseover', function(){
      btn.setAttribute("style", "color: rgb(39, 139, 193);")
    })
    btn.addEventListener('mouseout', function(){
      btn.setAttribute("style", "color:#7b7b7b;")
    })
    btn.addEventListener('click', function(){
      scrollTo(0, 0);
    })
  }
  
  window.addEventListener('load', btn);