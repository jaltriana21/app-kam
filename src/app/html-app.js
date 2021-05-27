import {createCompania} from './compania-app';
import main from '../html/html-main.html';
import navegation from '../html/html-nav.html';

const init = (container) => {
    createWrapper(container);
    showSections();
};


const createWrapper = (container) => {
    const main = document.getElementById(container);
    main.appendChild(createLayout());
};


const createLayout = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-html';
    wrapper.classList = 'wrapper__html';
    addSectionsLayout(wrapper);
    return wrapper;
};


const showSections = () => {
    createCompania();
};


const addSectionsLayout = (wrapper) => {
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());
};


const createHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.appendChild(setNavegation());
    return wrapper;
};


const setNavegation = ()=>{
    const navegation = document.createElement('nav');
    navegation.classList = 'nav__container';
    navegation.appendChild(setMenu());
    return navegation;
};


const setMenu = ()=>{
    const navMenu = document.createElement('div')
    navMenu.classList = 'nav__menu';
    navMenu.id = 'nav-menu';
    navMenu.appendChild(list());  
    return navMenu;
};


const list = ()=>{
    const navList = document.createElement('ul');
    navList.classList = 'nav__list';
    navList.id = 'nav-list'; 
    addItems(navList);
    return navList;
};


const addItems = (navList) => {
    navList.appendChild(setItem1());
    navList.appendChild(setItem2());
    navList.appendChild(setItem3());
    navList.appendChild(setItem4());
    navList.appendChild(setItem5());
    navList.appendChild(setItem6());
    navList.appendChild(setItem7());
    navList.appendChild(setItem8());
};



const setItem1 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink1());
    return navItem;
};

const setItem2 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink2());
    return navItem;
};


const setItem3 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink3());
    return navItem;
};

const setItem4 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink4());
    return navItem;
};

const setItem5 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink5());
    return navItem;
};

const setItem6 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink6());
    return navItem;
};

const setItem7 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink7());
    return navItem;
};


const setItem8 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink8());
    return navItem;
};



const setLink1 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link active';
    navLink.id = 'home';
    navLink.appendChild(setImgNav());
    navLink.addEventListener('click', setSection);
    return navLink;
};


const setImgNav = () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = navegation;
    return wrapper;
};

const setLink2 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'ingresos';
    navLink.innerText = 'Ingresos';
    navLink.addEventListener('click', setSection);
    return navLink;
}    

const setLink3 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'gastos';
    navLink.innerText = 'Gastos';
    navLink.addEventListener('click', setSection);
    return navLink;
}  


const setLink4 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'presupuesto';
    navLink.innerText = 'Presupuesto';
    navLink.addEventListener('click', setSection);
    return navLink;
}  


const setLink5 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'tareas';
    navLink.innerText = 'Tareas';
    navLink.addEventListener('click', setSection);
    return navLink;
}  
 

const setLink6 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'cuadre';
    navLink.innerText = 'Cuadre de caja';
    navLink.addEventListener('click', setSection);
    return navLink;
} 

const setLink7 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'informes';
    navLink.innerText = 'Informes';
    navLink.addEventListener('click', setSection);
    return navLink;
} 

const setLink8 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'compania';
    navLink.innerText = 'Compañia';
    navLink.addEventListener('click', setSection);
    return navLink;
} 


const createMain = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main';
    wrapper.classList = 'wrapper__main';
    wrapper.appendChild(setMain());
    return wrapper;
};


const setMain = () => {
    const main = document.createElement('main');
    main.appendChild(createSections());
    return main;
};


const createSections = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-sections';
    wrapper.classList = 'wrapper__sections';
    wrapper.innerHTML = main;
    return wrapper;
};


const setSection = (ev) => {
    const wrapper = document.getElementsByClassName('wrapper__nav');
    const content = [].slice.call(wrapper);
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.srcElement.id;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};



export{init};