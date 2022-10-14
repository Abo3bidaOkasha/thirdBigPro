// document.getElementById("btn2").onclick=function(){
//     document.getElementById("qwe").innerHTML="asdasdasd"


// }
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
