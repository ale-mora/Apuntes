export class CRUD {
    #tableName = null;  // atributos privados.
    #data = null;       // Atributos privados.
    constructor(tableName = undefined) {
        this.#setTableName(tableName);
        this.#setData();
    };
    #setTableName(tableName) {
        this.#tableNameValidate(tableName);
        this.#tableName = tableName;
    }
    #setData() {
        let dataRepository = this.#get(this.#tableName);
        this.#data = dataRepository === null ? [] : dataRepository;
    }
    #tableNameValidate(tableName) {
        if (tableName == undefined) throw new Error("Se requiere el nombre de la Tabla a ingresar");
    };
    #save() {
        let dataToSave = JSON.stringify(this.#data);          // Guarda la Data como texto.
        sessionStorage.setItem(this.#tableName, dataToSave);
    };
    #get(key) {
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);                                // Da formato al texto.
    };
    #existElementWithId(id) {
        return this.#data[id] === undefined ? false : true;
    };
    #checkThatElementExistWithId(id) {
        if (!this.#existElementWithId(id))
            throw new Error("Este elemento no existe");
    };
    create(data) {
        this.#data.push(data);
        this.#save();
        return this.#data.length;
    };
    read(id) {
        this.#checkThatElementExistWithId(id);
        return this.#data[id];
    };
    readAll() {
        return this.#data;
    };
    update(id, data) {
        this.#checkThatElementExistWithId(id);
        this.#data[id] = data;
        this.#save();
        return true;
    };
    delete(id) {
        this.#checkThatElementExistWithId(id);
        this.#data.splice(id, 1);
        this.#save();
        return true;
    };
};

// Los cuatro métodos CRUD:
// El Método create() se le pasa como argumento la información que queremos guardar.
// El método read() nos revolverá la información con el id que le pasemos por argumento.
// Update() nos actualiza la información que tenga el id que recibe por argumento con la
// data que también recibe por argumento
// y delete(), simplemente borrará la información que tenga el id que recibe por argumento.


