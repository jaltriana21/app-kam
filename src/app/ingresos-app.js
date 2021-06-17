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
    wrapper.appendChild(setOptions('btn_ingreso_registro','Registrar un Ingreso',setFormRegistro));
    return wrapper;
};


const setOptions = (id,text,ev) => {
    const el = document.createElement('button');
    el.id = id;
    el.classList = 'btn-ingreso';
    el.innerText = text;
    el.addEventListener('click', ev);
    return el;
};


const setFormItem = () => {
    const wrapper = document.getElementById('wrapper-options-ingreso');
    const registro = document.getElementById('formulario-registro');
    const categoria = document.getElementById('formulario-categoria');
    const item = document.getElementById('formulario-item');
    if(registro)wrapper.removeChild(registro);
    if(categoria)wrapper.removeChild(categoria);
    if(!item)wrapper.appendChild(createDivItem());
};


const setFormCategoria = () => {
    const wrapper = document.getElementById('wrapper-options-ingreso');
    const registro = document.getElementById('formulario-registro');
    const item = document.getElementById('formulario-item');
    const categoria = document.getElementById('formulario-categoria');
    if(registro)wrapper.removeChild(registro);
    if(item)wrapper.removeChild(item);
    if(!categoria)wrapper.appendChild(createDivCategoria());
};


const setFormRegistro = () => {
    const wrapper = document.getElementById('wrapper-options-ingreso');
    const categoria = document.getElementById('formulario-categoria');
    const item = document.getElementById('formulario-item');
    const registro = document.getElementById('formulario-registro');
    if(categoria)wrapper.removeChild(categoria);
    if(item)wrapper.removeChild(item);
    if(!registro)wrapper.appendChild(createDivRegistro());
};


const createDivRegistro = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-registro';        
    wrapper.appendChild(createFormReistro());
    
    return wrapper;
};


const createDivItem = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-item';     
    wrapper.appendChild(createFormItem());

    return wrapper;
};


const createDivCategoria = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'formulario-categoria';   
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

const createFormItem = () =>{
    const form = document.createElement('form');
    form.id = 'item-form';
    form.appendChild(createSubmit('btn-ingreso-item','Guardar'));
    form.appendChild(createformItemElements());

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
    form.appendChild(createSubmit('btn-ingreso-cateoria','Guardar'));
    form.appendChild(createformCategoriaElements());

    return form;
};

const createformCategoriaElements = () =>{
    const divForm =  document.createElement('div');
    divForm.classList = 'tareas-form-elements';
    divForm.appendChild(createInput('name-categoria','Categoria'));   
    divForm.appendChild(createInput('description-categoria','Descripcion de la Categoria'));   
    divForm.appendChild(createInput('color-categoria','Color'));

    return divForm;
};

const createFormReistro = () =>{
    const form = document.createElement('form');
    form.id = 'registro-form';
    form.appendChild(createSubmit('btn-ingreso-registro','Registrar'));
    form.appendChild(createformRegistroElements());
    form.appendChild(createformRegistroElements2());

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

export{createIngresos};