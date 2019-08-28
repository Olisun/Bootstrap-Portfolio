// Here's my logic:

// I put the 4 projects' ids into an array and using the forEach method, I'm pushing each one into an empty array. I'm basically saying for each id, apply the same DOM method which is to grab that element from the DOM based on its id. This way, I don't have write the same 4 functions for each id.
const arrayItems = ['project1', 'project2', 'project3', 'project4'];
const singleItem = [];
arrayItems.forEach((thingy) => {
  singleItem.push(document.getElementById(thingy));
});

// Now I'm making 2 functions that apply CSS styling and some text changes to each div id. One function to alter the DOM element and the other function to return the DOM back to its original state upon the assigned event.
const eventChange = (event) => {
  event.target.style.backgroundColor = 'yellow';
  event.target.style.transition = 'height 1s, width 1s';
  event.target.style.height = '150px'
  event.target.style.width = '150px'
  event.target.innerHTML = 'Something Awesome is Coming!'
};

const eventReturn = (event) => {
  event.target.style.backgroundColor = '';
  event.target.style.transition = 'height 1s, width 1s';
  event.target.style.height = ''
  event.target.style.width = ''
  event.target.innerHTML = ''
};

// Now that the functions are set, I have to assign when the function actions happen and this is what these event assignment functions are for. When you hover the cursor over the div element, the change occurs and when the cursor (or mouse techniocally) leaves the div, the DOM returns back to its normal state when the page was loaded.
const eventAssignment = (thingy) => {
  thingy.onmouseover = () => {
    eventChange(event);
  };

  thingy.onmouseout = () => {
    eventReturn(event);
  };
};

// Finally, to get this to work, I have to call the forEach method.
singleItem.forEach(eventAssignment);