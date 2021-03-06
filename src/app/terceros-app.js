
const createTerceros = (form) =>{    

    form.appendChild(createButton());      
    form.appendChild(createForm());    
    form.appendChild(createTable());
    
    

};

const createForm = () =>{
    const form = document.createElement('form'); 
    form.id = 'form-tercero';  
    form.hidden = true;
    addFormElements(form);

    return form;
    
};

const addFormElements = (form) =>{
      
    form.appendChild(divDocument());   
    form.appendChild(divNombre());
    form.appendChild(divPlace());
    form.appendChild(divMail());
    form.appendChild(createSaveButton());  
    form.appendChild(createLine());
    
};

const divDocument = () =>{
    const div = document.createElement('div');
    div.appendChild(createSelect('tercero-tipoDoc',createOptions('Tipo de documento')));
    div.appendChild(createInput('text','tercero-nit','Nit'));
    div.appendChild(createInput('text','tercero-dv','Dv'));

    return div;
};

const divNombre = () =>{
    const div = document.createElement('div');
    div.appendChild(createInput('text','tercero-name','Nombre o Razon social'));
    div.appendChild(document.createElement('br'));
    div.appendChild(createInput('text','tercero-comercial','Nombre Comercial'));

    return div

};

const divPlace = () =>{
    const div = document.createElement('div');
    div.appendChild(createInput('text','tercero-sigla','Sigla'));
    div.appendChild((createSelect('tercero-pais',createOptions('Pais'))));
    div.appendChild((createSelect('tercero-departamento',createOptions('Departamento'))));
    div.appendChild((createSelect('tercero-ciudad',createOptions('Ciudad'))));
    div.appendChild(createInput('tel','tercero-tel','Telefono'));

    return div
};

const divMail = () =>{
    const div = document.createElement('div');
    div.appendChild(createInput('email','tercero-email','Correo'));
    div.appendChild(document.createElement('br'));
    div.appendChild(createInput('text','tercero-direccion','Direccion'));

    return div;
}

const createInput = (type,id,placeholder) => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder; 
    input.classList = 'tercero-input';   
    input.required = true;

    return input;
};

const createSelect = (id,options) => {
    const select = document.createElement('select');
    select.id = id;
    select.classList = 'tercero-select';
    select.appendChild(options);

    return select;
    
};

const createOptions = (value) => {
    const options = document.createElement('option');
    options.innerText = value;
    options.selected = true;

    return options;
};

const createLine = () =>{
    const line = document.createElement('hr');
    line.classList = 'tercero-hr';
    
    return line;
}

const createTable = () => {
    const table = document.createElement('table');   
    table.classList = 'compania-table';
    table.appendChild(createTableHead());

    return table;
};

const createTableHead = () => {
    const tableHead = document.createElement('tr');    
    tableHead.appendChild(tableHeadElemets('Nombre'));
    tableHead.appendChild(tableHeadElemets('Identificacion'));
    tableHead.appendChild(tableHeadElemets('Telefono'));

    return tableHead;

};

const tableHeadElemets = (text) =>{
    const title =  document.createElement('th');
    title.innerText = text;

    return title;
}

const createButton = () => {
    const btn = document.createElement('button');
    btn.id = 'tercero-create';   
    btn.innerText = 'Crear Tercero +';
    btn.classList = 'btn-compania';  
    btn.addEventListener('click',showForm);
    
    return btn;
};

const createSaveButton =() =>{
    const btn = document.createElement('button');
    btn.id = 'tercero-save';   
    btn.innerText = 'Guardar';
    btn.classList = 'btn-compania';  
    btn.addEventListener('click',hideForm);
    return btn;

};

const showForm = () =>{
    const form = document.getElementById('form-tercero');
    form.hidden = false;
    const btn =  document.getElementById('tercero-create');
    btn.hidden = true;
};

const hideForm = () =>{
    const form = document.getElementById('form-tercero');
    form.hidden = true;
    const btn =  document.getElementById('tercero-create');
    btn.hidden = false;
};



export{createTerceros};