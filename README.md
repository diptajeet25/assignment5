1.getElementById:IT is use to select an element with a specific Id name,it use to get single element
  getElementsByClass: is use select all elements with a spcific class name, it use to get multiple element of same class.It returs a HTMLCollection
  querySelector: It is use to get the first element by a specific id,class  or tagname.
  querySelectorAll:it is use to get all elements by a specific id,class  or tagname.It returns NodeList

  
2.  first we create new element:let btn= document.createElement("button")
    then add innertext and styles:btn.innerText="Copy"
    then append it into where is will be inserted :document.getElementById("buttoncontainer").append(btn);


3.Event Bubbling is a mechanism use to control propagation through html elements.
 suppose we have a section which has two child div
 one child div has a button inside it,now click in button means click also in the div and also in the section,
 we can stop the propagation by event.stopPropagation();

4.Event Delegation is a method where we can add eventlistner to parent div instead of add in the children elements.
suppose we have a list items,here we add eventlistener in <ul> tag without adding in <li> items.
It is usefull because it increase efficiency of code ,make the code cleaner and shorter.


5.preventDefault:it is used to stop default behaviour when event occurs.we use it mainly in form element
stopPropagation():It is used to stop event bubbling.


    
