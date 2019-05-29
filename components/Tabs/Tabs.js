
class TabLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.link=link;
    // Get the custom data attribute on the Link
    // this.data;
    this.tabsLink=document.querySelector(`.tabs-link[data-tab='${link.dataset.tab}']`);

    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement=document.querySelector(`.tabs-item[data-tab='${link.dataset.tab}']`);

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.itemElement= new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    link.addEventListener('click', () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    const element = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

     for (var i = 0; i < element.length; i++) {
        element[i].classList.remove('tabs-link-selected');
     }
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link??WHAT
    this.element.classList.select();
}
}


class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('tabs-item-selected');
   }
    // Add a class named "tabs-item-selected" to this element
    this.items.classList.add("tabs-link-selected");
  }
} 


/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');

links.forEach(function(link){
  return new TabLink(link); 
 });