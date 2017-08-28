/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare function $(arr: string): JQuery; //ใช้เช็คerror ในclass doLogint()
interface JQuery{
  length:number
}

declare var Materialize :{  //message box แสดง alert error ของclass doLogint()
  toast(text , time) : any;
  updateTextFields();
}