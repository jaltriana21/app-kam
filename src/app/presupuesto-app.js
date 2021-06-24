const createBudget = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    wrapper.appendChild(setContentBudget());
    return wrapper;
};


const addBtn = (id, clase, text, ev) => {
    const el = document.createElement('button');
    el.id = id;
    el.classList = clase;
    el.innerText = text;
    el.addEventListener('click', ev);
    return el;
};


const addSelect = (text) => {
    const el = document.createElement('select');
    el.id = 'category-select-budget';
    el.classList = 'category__select-budget';
    el.appendChild(addOptionsDefault(text));
    return el;
};


const addOptionsDefault = (placeholder) => {
    const contentOptionDefault = document.createElement("option");
    contentOptionDefault.setAttribute("selected",'selected');
    contentOptionDefault.innerHTML = placeholder;
    return contentOptionDefault;
};


const addIcon = (clase, ev) => {
    const el = document.createElement('i');
    el.classList = clase;
    el.addEventListener('click', ev)
    return el;
};


const addText = (id, clase, text) => {
    const el = document.createElement('span');
    el.id = id;
    el.classList = clase;
    el.innerText = text;
    return el;
};


const addInput = (id, text) => {
    const el = document.createElement('input');
    el.id = `add-input-${id}`;
    el.classList = `add__input-${id}`;
    el.placeholder = text;
    return el;
};


const setContentBudget = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'wrapper__content-budget';
    wrapper.id = 'wrapper-content-budget';
    wrapper.appendChild(addBtn('add-budget', 'add__budget' , 'Crear Presupuesto', setBudget));
    wrapper.appendChild(addBtn('add-history-budget', 'add__budget' , 'Historial de presupuestos', setHistory));
    return wrapper;
};


const setBudget = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentBudget = document.getElementById('wrapper-content-budget');
    wrapper.removeChild(contentBudget);
    wrapper.appendChild(addBudget('added-budget', headerNewBudget('CREAR PRESUPUESTO', setNewAddBudget), mainNewBudget('budget', 'entry')));
};


const setHistory = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentHistory = document.getElementById('wrapper-content-budget');
    wrapper.removeChild(contentHistory);
    wrapper.appendChild(addBudget('added-history', headerNewHistory('HISTORIAL PRESUPUESTO', saveAddHistory), mainNewHistory()));
};


const addBudget = (id, fcn1 , fcn2) => {
    const wrapper = document.createElement('div');
    wrapper.classList = `wrapper__${id}`;
    wrapper.id = `wrapper-${id}`;
    wrapper.appendChild(fcn1);
    wrapper.appendChild(fcn2);
    return wrapper;
};


const headerNewBudget = (text, ev) => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header-budget';
    wrapper.classList = 'wrapper__header-budget';
    wrapper.appendChild(contentAddBtnBudget(text, ev));
    wrapper.appendChild(addBtn('add-save-budget', 'add__budget-new' , 'Guardar', saveAddBudget));
    return wrapper;
};


const headerNewHistory = (text, ev) => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header-history';
    wrapper.classList = 'wrapper__header-history';
    wrapper.appendChild(contentAddBtnHistory(text));
    wrapper.appendChild(addBtn('add-save-history', 'add__history-new' , 'Guardar', ev));
    return wrapper;
};


const contentAddBtnBudget = (text, ev) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__add-btn-budget';
    wrapper.appendChild(addBtn('add-new-budget', 'add__budget-new', text, ev));
    wrapper.appendChild(addSelect('Mes'));
    wrapper.appendChild(addSelect('Año'));
    return wrapper;
};


const contentAddBtnHistory = (text) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__add-btn-history';
    wrapper.appendChild(addBtn('add-new-history', 'add__history-new' , text));
    return wrapper;
};


const mainNewBudget = (id1,id2) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-main-input-${id1}`;
    wrapper.classList = `wrapper__main-input-${id1}`;
    wrapper.appendChild(setMainNewBudget(`${id1}`, 'Categoria', 'Gasto', 'Nombre del Gasto', 'TOTAL GASTOS PRESUPUESTADO'));
    wrapper.appendChild(setMainNewBudget(`${id2}`, 'Categoria', 'Item', 'Monto presupuesto', 'TOTAL INGRESOS PRESUPUESTADO'));
    return wrapper;
};


const mainNewHistory = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main-input-history';
    wrapper.classList = 'wrapper__main-input-history';
    wrapper.appendChild(setMainNewHistory('history', 'Año', 'Mes', 'Gastos', 'Ingresos'));
    return wrapper;
};


const setMainNewBudget = (id, text1, text2, text3, text4) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-input-${id}`;
    wrapper.classList = `wrapper__input-${id}`;
    wrapper.appendChild(addContentInput(id, text1, text2, text3));
    wrapper.appendChild(addContentLabelInput(id, text4));
    return wrapper;
};


const setMainNewHistory = (id, text1, text2, text3, text4) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-input-${id}`;
    wrapper.classList = `wrapper__input-${id}`;
    wrapper.appendChild(addContentInputHistory(id, text1, text2, text3 , text4));
    wrapper.appendChild(addInputHistory(id, text1, text2, text3 , text4));
    return wrapper;
};


const addContentInput = (id, text1, text2, text3) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-content-input-${id}`;
    wrapper.classList = `wrapper__content-input-${id}`;
    wrapper.appendChild(addSelect(text1));
    wrapper.appendChild(addSelect(text2));
    wrapper.appendChild(addInput(id, text3));
    return wrapper;
};


const addContentInputHistory = (id, text1, text2, text3, text4) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-content-input-${id}`;
    wrapper.classList = `wrapper__content-input-${id}`;
    wrapper.appendChild(addText(`add-text-${id}`, `add__text-${id}`, text1));
    wrapper.appendChild(addText(`add-text-${id}`, `add__text-${id}`, text2));
    wrapper.appendChild(addText(`add-text-${id}`, `add__text-${id}`, text3));
    wrapper.appendChild(addText(`add-text-${id}`, `add__text-${id}`, text4));
    return wrapper;
};


const addInputHistory = (id, text1, text2, text3, text4) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-content-load-${id}`;
    wrapper.classList = `wrapper__content-load-${id}`;
    wrapper.appendChild(addInput('load-history', text1));
    wrapper.appendChild(addInput('load-history', text2));
    wrapper.appendChild(addInput('load-history', text3));
    wrapper.appendChild(addInput('load-history', text4));
    wrapper.appendChild(addIcon('bx bx-show'));
    wrapper.appendChild(addIcon('bx bxs-edit-alt', setEditBudget));
    wrapper.appendChild(addIcon('bx bxs-trash-alt'));
    return wrapper;
};


const addContentLabelInput = (id,text) => {
    const wrapper = document.createElement('div');
    wrapper.id = `wrapper-label-${id}`;
    wrapper.classList = `wrapper__label-${id}`;
    wrapper.appendChild(addText(`title-${id}`, `title__${id}`, text));
    wrapper.appendChild(addInput('budget', ''));
    return wrapper;
};


const saveAddBudget = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentBudget = document.getElementById('wrapper-added-budget');
    wrapper.removeChild(contentBudget);
    wrapper.appendChild(setContentBudget());
};


const saveAddHistory = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentHistory = document.getElementById('wrapper-added-history');
    wrapper.removeChild(contentHistory);
    wrapper.appendChild(setContentBudget());
};


const saveEditBudget = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentBudget = document.getElementById('wrapper-edit-budget');
    wrapper.removeChild(contentBudget);
    wrapper.appendChild(setContentBudget());
};


const setNewAddBudget = () => {
    const wrapperBudget = document.getElementById('wrapper-content-input-budget');
    const wrapperHistory = document.getElementById('wrapper-content-input-entry');
    wrapperBudget.appendChild(addContentInput('budget', 'Categoria', 'Gasto', 'Nombre del Gasto'));
    wrapperHistory.appendChild(addContentInput('entry', 'Categoria', 'Item', 'Monto presupuesto'));
};


const setEditBudget = () => {
    const wrapper = document.getElementById('wrapper-presupuesto');
    const contentHistory = document.getElementById('wrapper-added-history');
    wrapper.removeChild(contentHistory);
    wrapper.appendChild(addBudget('edit-budget', headerNewHistory('EDITAR PRESUPUESTO', saveEditBudget), mainNewBudget('edit-budget', 'edit-entry')));
};



export{createBudget};