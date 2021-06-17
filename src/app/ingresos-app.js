const createIngresos = ()=>{
    const wrapper = document.getElementById('wrapper-ingresos');
    wrapper.appendChild(setContentOption());
    return wrapper;
};

const setContentOption = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__options-ingreso';
    wrapper.id = 'wrapper-options-ingreso';
    wrapper.appendChild(contentOption());
    return wrapper;
};


const contentOption = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__btn__ingreso';
    wrapper.id = 'content-btn-ingreso';
    wrapper.appendChild(setOptions('btn_ingreso_item','Crear Item',setFormItem));
    wrapper.appendChild(setOptions('btn_ingreso_categoria','Crear Categoria',setFormCategoria));
    wrapper.appendChild(addDivRegistro());    
    return wrapper;
};

const addDivRegistro = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'register-spend';
    wrapper.classList = 'registro__ingreso';
    wrapper.appendChild(addBtnRegistro('btn-spend' , 'btn__ingreso'));
    return wrapper;
};


const addBtnRegistro = (id, clase) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.classList = clase;
    btn.appendChild(addText('title-registro-ingreso', 'title__registro-ingreso', 'Registre un Ingreso'));
    btn.appendChild(addIcon('bx bx-add-to-queue'));
    btn.addEventListener('click', setFormRegistro)
    return btn;
};


const addText = (id, clase, text) => {
    const span = document.createElement('span');
    span.id = id;
    span.classList = clase;
    span.innerText = text;

    return span;
};


const addIcon = (clase) => {
    const el = document.createElement('i');
    el.classList = clase;

    return el;
};


const setOptions = (id,text,ev) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.classList = 'btn-ingreso';
    btn.innerText = text;
    btn.addEventListener('click', ev);
    return btn;
};



const setFormItem = () => {
    const wrapper = document.getElementById('wrapper-ingresos');
    const content = document.getElementById('wrapper-options-ingreso');
    wrapper.removeChild(content);
    wrapper.appendChild(createDivItem());
    
};


const setFormCategoria = () => {
    const wrapper = document.getElementById('wrapper-ingresos');
    const content = document.getElementById('wrapper-options-ingreso');
    wrapper.removeChild(content);
    wrapper.appendChild(createDivCategoria());
};


const setFormRegistro = () => {
    const wrapper = document.getElementById('wrapper-ingresos');
    const content = document.getElementById('wrapper-options-ingreso');
    wrapper.removeChild(content);
    wrapper.appendChild(createDivRegistro());
};


const createDivRegistro = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-ingreso';
    wrapper.classList = 'formulario__ingreso';        
    wrapper.appendChild(createFormReistro());
    
    return wrapper;
};


const createDivItem = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-ingreso';
    wrapper.classList = 'formulario__ingreso';     
    wrapper.appendChild(createFormItem());

    return wrapper;
};


const createDivCategoria = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-ingreso';
    wrapper.classList = 'formulario__ingreso';    
    wrapper.appendChild(createFormCategoria());    
    
    return wrapper;
};

const createInput = (id,placeholder) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.placeholder = placeholder; 
    input.classList = 'ingresos-input';   
    input.required = true;

    return input;
};

const createSubmit = (id,text) => {
    const btn = document.createElement('input');
    btn.type = 'submit';
    btn.id = id;   
    btn.value = text;   
    btn.classList = 'ingresos-btninput';      
    
    return btn;
};

const createBtnGoBack = () =>{
    const btn = document.createElement('button');
    btn.type = 'button';    
    btn.innerHTML = 'Atras';   
    btn.classList = 'ingresos-btninput'; 
    btn.addEventListener('click',showMainMenu)
    
    return btn;
}

const createSelect = (id,options) => {
    const select = document.createElement('select');
    select.id = id;
    select.classList = 'ingresos-input';
    select.appendChild(options);

    return select;
    
};

const createOptionDefault = (value) => {
    const options = document.createElement('option');
    options.innerText = value;
    options.selected = true;

    return options;
};

const createTitleH3 = (text) =>{
    const h3 = document.createElement('h3');
    h3.classList = 'ingreso-registro-title'
    h3.innerHTML = text;

    return h3;
}

const createFormItem = () =>{
    const form = document.createElement('form');
    form.id = 'item-form';
    form.appendChild(createTitleH3('CREAR ITEM'));          
    form.appendChild(createBtnGoBack());
    form.appendChild(createformItemElements());
    form.appendChild(createSubmit('btn-ingreso-item','Guardar'));

    return form;

};

const createformItemElements = () =>{
    const divForm =  document.createElement('div');
    divForm.classList = 'tareas-form-elements';
    divForm.appendChild(createInput('name-item','Nombre del Item'));
    divForm.appendChild(createInput('categoria-item','Categoria'));
    divForm.appendChild(createInput('description-item','Descripcion del Item'));
    divForm.appendChild(createInput('venta-item','Venta'));
    divForm.appendChild(createInput('color-item','Color'));

    return divForm;
};

const createFormCategoria = () =>{
    const form = document.createElement('form');
    form.id = 'item-form';
    form.appendChild(createTitleH3('CREAR CATEGORIA'));  
    form.appendChild(createBtnGoBack());   
    form.appendChild(createformCategoriaElements());
    form.appendChild(createSubmit('btn-ingreso-cateoria','Guardar'));
    return form;
};

const createformCategoriaElements = () =>{
    const divForm =  document.createElement('div');
    divForm.classList = 'registro-form-elements';
    divForm.appendChild(createInput('name-categoria','Categoria'));   
    divForm.appendChild(createInput('description-categoria','Descripcion de la Categoria'));   
    divForm.appendChild(createInput('color-categoria','Color'));

    return divForm;
};

const createFormReistro = () =>{
    const form = document.createElement('form');
    form.id = 'registro-form';
    form.appendChild(createTitleH3('REGISTRAR INGRESO'));  
    form.appendChild(createBtnGoBack());    
    form.appendChild(createformRegistroElements());
    form.appendChild(createformRegistroElements2());
    form.appendChild(createSubmit('btn-ingreso-registro','Registrar'));

    return form;
};

const createformRegistroElements = () =>{
    const divForm =  document.createElement('div');
    divForm.classList = 'registro-form-elements';
    divForm.appendChild(createInput('cliente-registro','Cliente o Tercero')); 
    divForm.appendChild(createSelect('registro-banco',createOptionDefault('Banco')));  
    

    return divForm;
};

const createformRegistroElements2 = () =>{
    const divForm =  document.createElement('div');
    divForm.classList = 'registro-form-elements';
    divForm.appendChild(createSelect('registro-item',createOptionDefault('Item'))); 
    divForm.appendChild(createInput('categoria-registro','Categoria')); 
    divForm.appendChild(createInput('nota-registro','Nota')); 
    divForm.appendChild(createInput('unidades-registro','Unidades'));   
    divForm.appendChild(createInput('monto-registro','Monto'));           

    return divForm;
};

const showMainMenu = () => {
    const wrapper = document.getElementById('wrapper-ingresos');
    const content = document.getElementById('formulario-ingreso');
    wrapper.removeChild(content);
    wrapper.appendChild(setContentOption());
};

export{createIngresos};