const checkbox = document.getElementById('checkbox')
const link = document.getElementById('btn-container')

link.onclick = function(e){
    e.preventDefault();
  }

  link.style.display = "none";
link.onclick = function(e){
  e.preventDefault();
}

checkbox.onclick = function(){
    if(checkbox.checked){
        link.style.display = "inline";
      link.onclick = "";
    }
}


