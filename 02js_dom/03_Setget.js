
// how to get value of dom

var element;

// element=document.getElementById("content").innerText; // gives all the inner content
// element=document.getElementById("content").innerHTML;// gives whole html 
// element=document.getElementById("header").getAttribute("style");// to get the value of attribute present in particular element
// element=document.getElementById("header").getAttributeNode("style");// to get whole attribute with value;
// element=document.getElementById("header")// return all attribute
// element=document.getElementById("header").attributes[0]// return the first attribute name




// to set the value in dom


// element=document.getElementById("header").innerText="wowww";// set the inner text

// element=document.getElementById("header").innerHTML="<h1> WOEEEE <h2>";//to set inner Html


// element=document.getElementById("header").setAttribute("style","color:yellow") // change color



document.getElementById("header").classList.add("xyz","efg");
element=document.getElementById("header").classList;// display all list
 console.log(element);

 document.getElementById("header").classList.remove("xyz");// remove xyz list
 element=document.getElementById("header").classList;
 console.log(element);
 
 

