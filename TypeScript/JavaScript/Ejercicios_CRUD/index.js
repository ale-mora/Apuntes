import { CRUD } from "./CRUD.js";

function app() {
    let crud = new CRUD("ejemplo1");
    crud.create([1, 2, 3]);
    crud.create({ message: "holas" });

    let crud2 = new CRUD("ejemplo2");
    console.log(crud2.readAll());
};
app();