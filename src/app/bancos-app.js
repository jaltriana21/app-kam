const createBancos = (form) =>{

    form.appendChild(createForm());
    form.appendChild(createTable());
};



const createForm = () =>{
    const form = document.createElement('form'); 
    form.id = 'form-banco';      
    form.appendChild(divInfoBanco());
    form.appendChild(createInput('text','banco-nombre','Nombre de Banco'));

    return form;
    
};

const createInput = (type,id,placeholder) => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder; 
    input.classList = 'tercero-input';   
    input.required = true;

    return input;
};

const createButton = (id,texto) => {
    const btn = document.createElement('button');
    btn.id = id;   
    btn.innerText = texto;  
    btn.classList = 'btn-compania';  
    
    return btn;
};

const divInfoBanco = () =>{
    const div = document.createElement('div');
    div.appendChild(createInput('text','banco-cuenta','# de Cuenta'));
    div.appendChild(createInput('text','banco-saldo','Saldo Inicial'));
    div.appendChild(createButton('btn-mas','+'));

    return div;

};

const createTable = () => {
    const table = document.createElement('table');   
    table.classList = 'compania-table';
    table.appendChild(createTableHead());

    return table;
};

const tableHeadElemets = (text) =>{
    const title =  document.createElement('th');
    title.innerText = text;

    return title;
}

const createTableHead = () => {
    const tableHead = document.createElement('tr');    
    tableHead.appendChild(tableHeadElemets('Banco'));
    tableHead.appendChild(tableHeadElemets('# Cuenta'));
    tableHead.appendChild(tableHeadElemets('Saldo iniical'));

    return tableHead;

};


export{createBancos};