const createTareas = ()=>{
    const wrapper = document.getElementById('wrapper-tareas');
    tareasContent(wrapper);
    return wrapper;
};


const tareasContent = (wrapper) =>{
    wrapper.appendChild(firstDiv());
    wrapper.appendChild(createForm());
    wrapper.appendChild(createTable());
};

const firstDiv = () => {
    const div = document.createElement('div');
    div.classList = 'tareas-div';
    div.appendChild(createButton('tareas-hoy','Mis Tareas de Hoy'));
    div.appendChild(createButton('tareas-semana','Mis Tareas de la semana'));
    div.appendChild(createDatePicker('first-date'));
    div.appendChild(createDatePicker('second-date'));
    div.appendChild(createAddButton());


    return div;
};

const createDatePicker = (id) => {
    const input = document.createElement('input');   
    input.id = id;
    input.type = 'date';
    input.classList = 'btn-tareas';


    return input;
};

const createButton = (id,text) => {

    const btn = document.createElement('button');
    btn.id = id;   
    btn.innerText = text;
    btn.classList = 'btn-tareas';  

    return btn
};



const createAddButton = () =>{
    
    const btn = document.createElement('button');
    btn.id = 'btn-add';   
    btn.innerText = '+';
    btn.classList = 'btn-add-tareas';  
    btn.addEventListener('click',showForm);

    return btn
}

const createForm = () =>{
    const form = document.createElement('form'); 
    form.id = 'tareas-form';  
    form.hidden = true;
    form.appendChild(divFormElements());
    
    return form;
    
};

const divFormElements = () =>{
    const div = document.createElement('div');
    div.classList = 'tareas-form-elements'
    div.appendChild(createInput('date','tareas-date','Fecha'));
    div.appendChild(createInput('time','tareas-time','Hora'));
    div.appendChild(createInput('text','tareas-description','Descripcion de Tarea'));
    div.appendChild(createInput('text','tareas-place','Lugar'));

    return div;
}

const createInput = (type,id,placeholder) => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder; 
    input.classList = 'tareas-input';   
    input.required = true;

    return input;
};

const createTable = () => {
    const table = document.createElement('table');   
    table.classList = 'tarea-table';
    table.appendChild(createTableHead());

    return table;
};

const createTableHead = () => {
    const tableHead = document.createElement('tr');    
    tableHead.appendChild(tableHeadElemets('Fecha'));
    tableHead.appendChild(tableHeadElemets('Hora'));
    tableHead.appendChild(tableHeadElemets('Descripcion de tareas'));
    tableHead.appendChild(tableHeadElemets('Completada'));

    return tableHead;

};

const tableHeadElemets = (text) => { 
    const title =  document.createElement('th');
    title.innerText = text;

    return title;
};


const showForm = () =>{
    const form = document.getElementById('tareas-form');
    form.hidden = false;
}

export{createTareas};