// Interface
interface IIdName {
  id: number;
  name: string;
}

let idObject: IIdName = {
  id: 2,
  name: "This is a name",
};

console.log(idObject);

// Optional
interface IOptional {
  id: number;
  name?: string;
}

let optionalId: IOptional = {
  id: 1,
};

let optionalIdName: IOptional = {
  id: 2,
  name: "optional name",
};

console.log("OptionalId: ", optionalId);
console.log("OptionalIdName: ", optionalIdName);

// Interface naming
interface IWeakType {
  id?: number;
  name?: string;
}

interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
  if ("id" in obj) {
    console.log(`obj.name: ${obj.name}`);
  }
  if ("descr" in obj) {
    console.log(`obj.value: ${obj.value}`);
  }
}

printNameOrValue({
  id: 1,
  name: "nameValue",
});

printNameOrValue({
  descr: "description",
  value: 2,
});

// Key of
interface IPerson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof IPerson;

type PersonPropertyLiteral = "id" | "name";

function getProperty(key: PersonPropertyName, value: IPerson) {
  console.log(`${key}: ${value[key]}`);
}

getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });

// Classes
class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.print() called.`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.print();

// Implement interface
interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}

class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() called`);
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called`);
  }
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);

class ClassC {
  print(): void {
    console.log(`ClassC.print() called`);
  }
}
let classC = new ClassC();
printClass(classC);

// Class constructor
class ClassWithConstructor {
  id: number;
  constructor(_id: number) {
    this.id = _id
  }
}

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

// Class modifiers
class ClassWithPublicProperty {
  public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
console.log(publicAccess);

// Constructor parameter properties
class ClassWithCtorMods {
  constructor(public id: number, public name: string) {}
}

// let myClassMod = new ClassWithConstructor(1, "test"); 
// console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);

class ClassWithReadonly {
  readonly name: string;
  
  constructor(_name: string) {
    this.name = _name;  
  }

  // setNameValue(_name: string) {
  //   this.name = _name;
  // }
}

// Get and set value
class ClassWithAccessors {
  private _id: number = 0;
  
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }

  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

// Static functions
class StaticFunction {
  static printTwo() {
    console.log(`2`);
  }
}

StaticFunction.printTwo();

// Static properties
class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

// Namespace
namespace FirstNameSpace {
  export class NameSpaceClass {}
  export class NotExported {}
}

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
let notExported = new FirstNameSpace.NotExported(); 

// Inheritance
interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string
}

class IdNameClass implements IDerivedFromBase {
  id: number = 0;
  name: string = "nameString";
}

// Function override
class BaseClassWithFn {
  print(text: string) {
    console.log(`BaseClassWithFn.print() : ${text}`)
  }
}

class DerivedClassFnOverride extends BaseClassWithFn {
  print(text: string) {
    console.log(`DerivedClassFnOverride.print(${text})`)
  }
}