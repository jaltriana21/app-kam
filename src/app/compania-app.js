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
    wrapper.appendChild(setOptions1());
    wrapper.appendChild(setOptions2());
    wrapper.appendChild(setOptions3());
    return wrapper;
};


const setOptions1 = () => {
    const el = document.createElement('button');
    el.classList = 'btn__compania';
    el.innerText = 'Datos Generales';
    el.addEventListener('click', setForm1);
    return el;
};

const setOptions2 = () => {
    const el = document.createElement('button');
    el.classList = 'btn__compania';
    el.innerText = 'Bancos';
    el.addEventListener('click', setForm2);
    return el;
};


const setOptions3 = () => {
    const el = document.createElement('button');
    el.classList = 'btn__compania';
    el.innerText = 'Terceros';
    el.addEventListener('click', setForm3);
    return el;
};


const setForm1 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('formulario-bancos');
    const el2 = document.getElementById('formulario-terceros');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    wrapper.appendChild(createForm1());
};

const createForm1 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-datos';
    form.innerText = 'aque va formulario datos generales';
    return form;
};


const setForm2 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('formulario-datos');
    const el2 = document.getElementById('formulario-terceros');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    wrapper.appendChild(createForm2());
};

const createForm2 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-bancos';
    form.innerText = 'aque va formulario bancos';
    return form;
};


const setForm3 = () => {
    const wrapper = document.getElementById('wrapper-options-compania');
    const el = document.getElementById('formulario-datos');
    const el2 = document.getElementById('formulario-bancos');
    if(el)wrapper.removeChild(el);
    if(el2)wrapper.removeChild(el2);
    wrapper.appendChild(createForm3());
};

const createForm3 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-terceros';
    form.innerText = 'aque va formulario terceros';
    return form;
};


export{createCompania};