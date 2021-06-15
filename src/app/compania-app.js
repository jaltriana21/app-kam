import {createTerceros} from './terceros-app';
import {createBancos} from './bancos-app';

const createCompania = ()=>{
    const wrapper = document.getElementById('wrapper-compania');
    wrapper.appendChild(setContentOption());
    return wrapper;
};


const setContentOption = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__options-compania';
    wrapper.id = 'wrapper-options-compania';
    wrapper.appendChild(contentOption());
    return wrapper;
};


const contentOption = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__btn__compania';
    wrapper.id = 'content-btn-compania';
    wrapper.appendChild(setOptions('Datos generales',setForm1));
    wrapper.appendChild(setOptions('Bancos',setForm2));
    wrapper.appendChild(setOptions('Terceros',setForm3));
    return wrapper;
};


const setOptions = (placeholder,ev) => {
    const el = document.createElement('button');
    el.classList = 'btn__compania';
    el.innerText = placeholder;
    el.addEventListener('click', ev);
    return el;
};


const setForm1 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('formulario-bancos');
    const el2 = document.getElementById('formulario-terceros');
    const el3 = document.getElementById('wrapper-formulario-datos');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    if(!el3)wrapper.appendChild(createForm1());
};


const setForm2 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('wrapper-formulario-datos');
    const el2 = document.getElementById('formulario-terceros');
    const el3 = document.getElementById('formulario-bancos');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    if(!el3)wrapper.appendChild(createForm2());
};


const setForm3 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('wrapper-formulario-datos');
    const el2 = document.getElementById('formulario-bancos');
    const el3 = document.getElementById('formulario-terceros');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    if(!el3)wrapper.appendChild(createForm3());
};


const createForm1 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-formulario-datos';
    wrapper.classList = 'wrapper__formulario-datos';
    wrapper.appendChild(contentForm());
    return wrapper;
};


const createForm2 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-bancos';
    createBancos(form);
    return form;
};


const createForm3 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-terceros';    
    createTerceros(form);
    return form;
};


const contentForm = () => {
    const form = document.createElement('form');
    form.classList = 'form__data';
    addOptionsForm(form);
    return form;
};


const addOptionsForm = (form) => {
    form.appendChild(contentInput1());
    form.appendChild(contentInput2('Nombre completo o Razon social','text'));
    form.appendChild(contentInput2('Nombre comercial','text'));
    form.appendChild(contentInput3());
    form.appendChild(contentInput2('Dirección','text'));
    form.appendChild(contentInput2('Correo Electronico','email'));
    form.appendChild(contentInput4());
    form.appendChild(contentInput5());
};


const contentInput1 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData1());
    wrapper.appendChild(setInputData2('Nit'));
    wrapper.appendChild(setInputData2('Dv'));
    return wrapper;
};


const contentInput2 = (placeholder,tp) => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input input';
    el.type = tp;
    el.placeholder = placeholder;
    return el;
};


const contentInput3 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData2('Sigla'));
    wrapper.appendChild(setInputData4());
    wrapper.appendChild(setInputData5());
    wrapper.appendChild(setInputData6());
    wrapper.appendChild(setInputData2('Tel/cel'));
    return wrapper;
};


const contentInput4 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData2('Pagina web'));
    wrapper.appendChild(setInputData3('Cargue su logo'));
    wrapper.appendChild(setInputData7());
    return wrapper;
};


const contentInput5 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData3('Redes sociales'));
    wrapper.appendChild(setInputData2('Instagram'));
    wrapper.appendChild(setInputData2('Facebook'));
    wrapper.appendChild(setInputData2('Tik tok'));
    wrapper.appendChild(setInputData2('Wasa wasa'));
    return wrapper;
};


const setInputData1 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault('Tipo de documento'));
    el.appendChild(addOptions('Cedula ciudadania','1'));
    el.appendChild(addOptions('Cedula extramjero','2'));
    return el;
};


const setInputData2 = (placeholder) => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = placeholder;
    return el;
};


const setInputData3 = (placeholder) => {
    const el = document.createElement('span');
    el.id = 'data-text';
    el.classList = 'data__text';
    el.innerText = placeholder;
    return el;
};


const setInputData4 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault('Pais'));
    return el;
};


const setInputData5 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault('Departamento'));
    return el;
};


const setInputData6 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault('Municipio'));
    return el;
};


const setInputData7 = () => {
    const el = document.createElement('input');
    el.id = 'data-file';
    el.classList = 'data__file';
    el.type = 'file';
    return el;
};


const addOptionsDefault = (placeholder) => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = placeholder;
    return contentOptionDefault;
};


const addOptions = (placeholder,value) => {
    const contentOption1 = document.createElement("option");
    contentOption1.innerHTML = placeholder;
    contentOption1.setAttribute("value",value);
    return contentOption1;
};

export{createCompania};