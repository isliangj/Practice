/**
 * Created by liang on 2017/3/27.
 */
function addition() {
  document.getElementById("app").style.display="none";
  document.getElementById("form").style.display="block";
}

function remove() {
  var div=document.getElementById("content_list");
  while (div.hasChildNodes()){
    div.removeChild(div.firstChild);
  }
}