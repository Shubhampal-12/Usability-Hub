var menulist = document.getElementById("meunList")
var hii = document.getElementById("hiii")
 
  menulist.style.maxHeight="0px"

  hii.addEventListener("click",()=>{
      if( menulist.style.maxHeight=="0px")
        {
         menulist.style.maxHeight="300px"
      }else
      {
         menulist.style.maxHeight="0px"
      }
     
  })

 
