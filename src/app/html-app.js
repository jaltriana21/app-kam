import {createCompania} from './compania-app';
import {createTareas} from './tareas-app';
import { createIngresos } from './ingresos-app';
import main from '../html/html-main.html';
import navegation from '../html/html-nav.html';
import { createSpend } from './gastos-app';
import { createBudget } from './presupuesto-app';


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
    createTareas();
    createIngresos();
    createSpend();
    createBudget();
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
    navList.appendChild(setItem(setLink1()));
    navList.appendChild(setItem(setLink2('Ingresos','ingresos')));
    navList.appendChild(setItem(setLink2('Gastos','gastos')));
    navList.appendChild(setItem(setLink2('Presupuesto','presupuesto')));
    navList.appendChild(setItem(setLink2('Tarea','tareas')));
    navList.appendChild(setItem(setLink2('Cuadre caja','cuadre')));
    navList.appendChild(setItem(setLink2('Informes','informes')));
    navList.appendChild(setItem(setLink2('Compañia','compania')));
};


const setItem = (fcn)=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(fcn);
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


const setLink2 = (placeholder,id)=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = id;
    navLink.innerText = placeholder;
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