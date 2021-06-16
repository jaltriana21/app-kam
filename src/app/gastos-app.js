const createSpend = ()=>{
    const wrapper = document.getElementById('wrapper-gastos');
    wrapper.appendChild(setContentSpend());
    return wrapper;
};


const setContentSpend = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__content-spend';
    wrapper.id = 'wrapper-content-spend';
    wrapper.appendChild(addBtn('add-spend', 'add__spend' , 'Crear Gasto', setSpend));
    wrapper.appendChild(addBtn('add-category', 'add__spend' , 'Crear Categoria', setCategory));
    wrapper.appendChild(addContent());
    return wrapper;
};


const addBtn = (id, clase, text, ev) => {
    const el = document.createElement('button');
    el.id = id;
    el.classList = clase;
    el.innerText = text;
    el.addEventListener('click', ev)
    return el;
};


const addContent = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'register-spend';
    wrapper.classList = 'register__spend';
    wrapper.appendChild(addBtnLink('btn-spend' , 'btn__spend'));
    return wrapper;
};


const addBtnLink = (id, clase) => {
    const el = document.createElement('button');
    el.id = id;
    el.classList = clase;
    el.appendChild(addText('title-register-spend', 'title__register-spend', 'Registre un gasto'));
    el.appendChild(addIcon('bx bx-add-to-queue'));
    el.addEventListener('click', setRegister)
    return el;
};


const addText = (id, clase, text) => {
    const el = document.createElement('span');
    el.id = id;
    el.classList = clase;
    el.innerText = text;
    return el;
};


const addIcon = (clase) => {
    const el = document.createElement('i');
    el.classList = clase;
    return el;
};


const setSpend = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentSpend = document.getElementById('wrapper-content-spend');
    wrapper.removeChild(contentSpend);
    wrapper.appendChild(addSpend());
};


const setCategory = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentSpend = document.getElementById('wrapper-content-spend');
    wrapper.removeChild(contentSpend);
    wrapper.appendChild(addCategory());
};


const setRegister = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentSpend = document.getElementById('wrapper-content-spend');
    wrapper.removeChild(contentSpend);
    wrapper.appendChild(addRegister());
};


const addSpend = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__added-spend';
    wrapper.id = 'wrapper-added-spend';
    wrapper.appendChild(headerNewSpend());
    wrapper.appendChild(mainNewSpend());
    return wrapper;
};


const addCategory = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__added-category';
    wrapper.id = 'wrapper-added-category';
    wrapper.appendChild(headerNewCategory());
    wrapper.appendChild(mainNewCategory());
    return wrapper;
};


const addRegister = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__added-register';
    wrapper.id = 'wrapper-added-register';
    wrapper.appendChild(headerNewRegister());
    wrapper.appendChild(mainNewRegister());
    return wrapper;
};


const headerNewSpend = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header-spend';
    wrapper.classList = 'wrapper__header-spend';
    wrapper.appendChild(contentAddBtn('add-new-spend', 'add__spend-new' , 'CREAR GASTO', createAddSpend));
    wrapper.appendChild(addBtn('add-save-spend', 'add__spend-new' , 'Guardar', saveAddSpend));
    return wrapper;
};


const headerNewCategory = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header-category';
    wrapper.classList = 'wrapper__header-category';
    wrapper.appendChild(contentAddBtn('add-new-category', 'add__category-new' , 'CREAR CATEGORIA', createAddCategory));
    wrapper.appendChild(addBtn('add-save-category', 'add__category-new' , 'Guardar', saveAddCategory));
    return wrapper;
};


const headerNewRegister = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header-register';
    wrapper.classList = 'wrapper__header-register';
    wrapper.appendChild(addContentRegister());
    wrapper.appendChild(addBtn('add-save-register', 'add__register-new' , 'Registro', saveAddRegister));
    return wrapper;
};


const mainNewSpend = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main-spend';
    wrapper.classList = 'wrapper__main-spend';
    wrapper.appendChild(addInput('Nombre del Gasto'));
    wrapper.appendChild(addInput('Categoria'));
    wrapper.appendChild(addInput('Descripción del gasto'));
    wrapper.appendChild(addInput('Periodicidad'));
    wrapper.appendChild(addInput('Color'));
    return wrapper;
};


const mainNewCategory = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main-category';
    wrapper.classList = 'wrapper__main-category';
    wrapper.appendChild(addInput('Categoria'));
    wrapper.appendChild(addInput('Descripción de la categoria'));
    wrapper.appendChild(addInput('Color'));
    return wrapper;
};


const mainNewRegister = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main-register';
    wrapper.classList = 'wrapper__main-register';
    wrapper.appendChild(contentInputRegister1());
    wrapper.appendChild(contentInputRegister2());
    return wrapper;
};


const contentInputRegister1 = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__inputs-register1';
    wrapper.appendChild(addSelect('Categoria'));
    wrapper.appendChild(addSelect('Gasto'));
    wrapper.appendChild(addInput('Nota'));
    wrapper.appendChild(addInput('Monto'));
    return wrapper;
};



const contentInputRegister2 = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__inputs-register2';
    wrapper.appendChild(addInput('Escribe aqui el nomre si alguien te debe este dinero'));
    wrapper.appendChild(addInput('Monto que te adeudan'));
    wrapper.appendChild(addSelect('Banco'));
    return wrapper;
};


const contentAddBtn = (id, clase, text, ev) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__add-btn';
    wrapper.appendChild(addBtn(id, clase, text, ev));
    return wrapper;
};


const addContentRegister = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'register';
    wrapper.classList = 'register';
    wrapper.appendChild(addBtnLink2('btn-spend-register' , 'btn__spend-register'));
    return wrapper;
};


const addBtnLink2 = (id, clase) => {
    const el = document.createElement('button');
    el.id = id;
    el.classList = clase;
    el.appendChild(addText('title-register', 'title__register', 'Registro'));
    return el;
};


const addInput = (text) => {
    const el = document.createElement('input');
    el.id = 'add-input-spend';
    el.classList = 'add__input-spend';
    el.placeholder = text;
    return el;
};


const addSelect = (text) => {
    const el = document.createElement('select');
    el.id = 'category-select';
    el.classList = 'category__select';
    el.appendChild(addOptionsDefault(text));
    return el;
};


const addOptionsDefault = (placeholder) => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = placeholder;
    return contentOptionDefault;
};


const createAddSpend = () => {
    const wrapper = document.getElementById('wrapper-added-spend');
    wrapper.appendChild(mainNewSpend());
};

const createAddCategory = () => {
    const wrapper = document.getElementById('wrapper-added-category');
    wrapper.appendChild(mainNewCategory());
};


const saveAddSpend = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentSpend = document.getElementById('wrapper-added-spend');
    wrapper.removeChild(contentSpend);
    wrapper.appendChild(setContentSpend());
};


const saveAddCategory = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentCategory = document.getElementById('wrapper-added-category');
    wrapper.removeChild(contentCategory);
    wrapper.appendChild(setContentSpend());
};


const saveAddRegister = () => {
    const wrapper = document.getElementById('wrapper-gastos');
    const contentCategory = document.getElementById('wrapper-added-register');
    wrapper.removeChild(contentCategory);
    wrapper.appendChild(setContentSpend());
};



export{createSpend};