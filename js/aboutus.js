
// Change color upon hover
const sec1 = document.querySelector('.sectionpink');

sec1.addEventListener('mouseover', function(event){
  event.target.style.backgroundColor='orange';
});

const sec2 = document.querySelector('.sectionblue');

sec2.addEventListener('mouseover', function(event){
  event.target.style.backgroundColor='#4CAF50';
});

//Tab navigation

class TabLink{
    constructor(link){
        this.tabContent=document.querySelector(`.content[data-tab='${link.dataset.tab}']`)
        this.tabContent = new Content(this.tabContent)
        link.addEventListener('click', () => this.linkClick())
    }

    linkClick(){
        this.tabContent.toggleContent();
    }
}

class Content{
    constructor(tabElement){
        this.tabElement=tabElement;
        }
        toggleContent(){
        this.tabElement.classList.toggle('change');
        }
    }

const links = document.querySelectorAll('.link');

links.forEach(link => new TabLink(link));