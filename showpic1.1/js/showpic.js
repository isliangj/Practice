//调用prepareplaceholder和preparegallery函数
function addLoadEvent(func) {
  var oldonload=window.onload;
  //typeof操作符返回一个字符串,指示未经计算的操作数的类型
  if(typeof window.onload!='function'){
    window.onload=func;
  }
  else {
    window.onload=function () {
      oldonload();
      func();
    }
  }
}

//将现有元素后插入新元素
function insertAfter(newElement, targetElement) {
  var parent=targetElement.parentNode;
  if (parent.lastChild==targetElement){
    parent.appendChild(newElement);
  }
  else {
    parent.insertBefore(newElement,targetElement.nextElementSibling);
  }
}

//创建一个img和p标签
function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var placeholder=document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","image/pic05.jpg");
  placeholder.setAttribute("alt","my image" );
  var description=document.createElement("p");
  description.setAttribute("id","description");
  var desctext= document.createTextNode("Choose an image");
  description.appendChild(desctext);
  var gallery=document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
}

//负责处理事件,遍历每个链接
function prepareGallery(){
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  var gallery=document.getElementById("imagegallery");
  var links=gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick=function(){
      return showPic(this);
    }
    links[i].onkeypress=links[i].onclick;
  }
}

//负责把占位符图片切换为目标图片
function showPic(whichpic){
  if(!document.getElementById("placeholder")) return false;
  var source=whichpic.getAttribute("href");
  var placeholder=document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if(!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")){
    var text=whichpic.getAttribute("title");
  }
  else {
    var text="";
  }
  var description=document.getElementById("description");
  if (description.firstChild.nodeType==3){
    description.firstChild.nodeValue=text;
  }
  return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
