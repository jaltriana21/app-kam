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
    wrapper.appendChild(contentForm1());
    return wrapper;
};


const createForm2 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-bancos';
    form.innerText = 'aque va formulario bancos';
    return form;
};


const createForm3 = () => {
    const form = document.createElement('div');
    form.id = 'formulario-terceros';
    form.innerText = 'aque va formulario terceros';
    return form;
};


const contentForm1 = () => {
    const form = document.createElement('form');
    form.classList = 'form__data';
    addOptionsForm(form);
    return form;
};


const addOptionsForm = (form) => {
    form.appendChild(sendForm());
    form.appendChild(contentInput1());
    form.appendChild(contentInput2());
    form.appendChild(contentInput3());
    form.appendChild(contentInput4());
    form.appendChild(contentInput5());
    form.appendChild(contentInput6());
    form.appendChild(contentInput7());
    form.appendChild(contentInput8());
};


const sendForm = () => {
    const el = document.createElement('button');
    el.id = 'send-form-data';
    el.classList = 'send__form-data';
    el.type = 'submit';
    el.innerText = 'Guardar';
    return el;
};


const contentInput1 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData1());
    wrapper.appendChild(setInputData2());
    wrapper.appendChild(setInputData3());
    return wrapper;
};


const contentInput2 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input input';
    el.type = 'text';
    el.placeholder = 'Nombre completo o Razon social';
    return el;
};


const contentInput3 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input input';
    el.type = 'text';
    el.placeholder = 'Nombre comercial';
    return el;
};


const contentInput4 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData4());
    wrapper.appendChild(setInputData5());
    wrapper.appendChild(setInputData6());
    wrapper.appendChild(setInputData7());
    wrapper.appendChild(setInputData8());
    return wrapper;
};


const contentInput5 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input input';
    el.type = 'text';
    el.placeholder = 'Dirección';
    return el;
};


const contentInput6 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input input';
    el.type = 'email';
    el.placeholder = 'Correo Electronico';
    return el;
};


const contentInput7 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData9());
    wrapper.appendChild(setInputData10());
    wrapper.appendChild(setInputData11());
    return wrapper;
};


const contentInput8 = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-inputs';
    wrapper.classList = 'wrapper__inputs';
    wrapper.appendChild(setInputData12());
    wrapper.appendChild(setInputData13());
    wrapper.appendChild(setInputData14());
    wrapper.appendChild(setInputData15());
    wrapper.appendChild(setInputData16());
    return wrapper;
};


const setInputData1 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault());
    el.appendChild(addOptions1());
    el.appendChild(addOptions2());
    return el;
};


const setInputData2 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Nit';
    return el;
};


const setInputData3 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Dv';
    return el;
};


const setInputData4 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Sigla';
    return el;
};


const setInputData5 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault2());
    return el;
};


const setInputData6 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault3());
    return el;
};


const setInputData7 = () => {
    const el = document.createElement('select');
    el.id = 'data-select';
    el.classList = 'data__select';
    el.appendChild(addOptionsDefault4());
    return el;
};


const setInputData8 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Tel/cel';
    return el;
};


const setInputData9 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Pagina Web';
    return el;
};


const setInputData10 = () => {
    const el = document.createElement('span');
    el.id = 'data-text';
    el.classList = 'data__text';
    el.innerText = 'Cargue su logo';
    return el;
};


const setInputData11 = () => {
    const el = document.createElement('input');
    el.id = 'data-file';
    el.classList = 'data__file';
    el.type = 'file';
    return el;
};


const setInputData12 = () => {
    const el = document.createElement('span');
    el.id = 'data-text';
    el.classList = 'data__text';
    el.innerText = 'Redes sociales';
    return el;
};


const setInputData13 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Instagram';
    return el;
};


const setInputData14 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Facebook';
    return el;
};


const setInputData15 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Tik Tok';
    return el;
};


const setInputData16 = () => {
    const el = document.createElement('input');
    el.id = 'data-input';
    el.classList = 'data__input';
    el.type = 'text';
    el.placeholder = 'Wasa wasa';
    return el;
};


const addOptionsDefault = () => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = `Tipo de Documento`;
    return contentOptionDefault;
};


const addOptionsDefault2 = () => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = `Pais`;
    return contentOptionDefault;
};


const addOptionsDefault3 = () => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = `Departamento`;
    return contentOptionDefault;
};


const addOptionsDefault4 = () => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = `Municipio`;
    return contentOptionDefault;
};


const addOptions1 = () => {
    const contentOption1 = document.createElement("option");
    contentOption1.innerHTML = `Cedula ciudadania`;
    contentOption1.setAttribute("value",'1');
    return contentOption1;
};


const addOptions2 = () => {
    const contentOption1 = document.createElement("option");
    contentOption1.innerHTML = `Cedula extrajero`;
    contentOption1.setAttribute("value",'2');
    return contentOption1;
};


export{createCompania};