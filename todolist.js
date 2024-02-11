var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var list=document.querySelectorAll(".close")
    for (i = 0; i < list.length; i++) {
        list[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
function function1()
{
    var li=document.createElement("li");
    var inputvalue=document.getElementById("input").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue==='')
    {
        window.alert("Please write some thing");
    }
    else
    {
        document.getElementById("To Do List").appendChild(li);
    }
    document.getElementById("input").value="";
    var span=document.createElement("span");
    var t=document.createTextNode("\u00D7");
    span.className="close"
    span.appendChild(t);
    li.appendChild(span);
    var list=document.querySelectorAll(".close")
    for (i = 0; i < list.length; i++) {
        list[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}