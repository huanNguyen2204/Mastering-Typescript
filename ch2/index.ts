// var item1 = { id: 1, name: "item 1" } as any
// item1 = { id: 2 }

// console.log(item1);

// let index: number = 0;
// if (index == 0) {
//   let index: number = 2;
//   console.log(`index = ${index}`);
// }
// console.log(`index = ${index}`);

// function printObject(obj: string | number) {
//   console.log(`obj = ${obj}`);
// }

// printObject(1);
// printObject("string value");
function addWithTypeGuard(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "string") {
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }

  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }

  console.log(`Default return treat both as strings`);
  return arg1.toString() + arg2.toString();
}

console.log(` ${addWithTypeGuard("1", "2")} `);
console.log(` ${addWithTypeGuard(1, 2)} `);

// Type alias
type StringOrNumber = string | number;
function addWithTypeGuard2(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

// Enum
enum DoorState {
  Open,
  Closed,
}

function checkDoorState(state: DoorState) {
  console.log(`enum is value is: ${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`Door is open`);
      break;
    case DoorState.Closed:
      console.log(`Door is closed`);
      break;

    default:
      break;
  }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

// Undefined
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
}

// Null
function printValue(a: number | null) {
  console.log(`a = ${a}`);
}

printValue(1);
printValue(null);

// Optional chaining
var objectA = {
  nestedProperty: {
    name: "nestedPropertyName",
  },
};

// Null or undefined
function testNullOrOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
}

// Variable
var aValue = 1;
console.log("aValue = ", aValue);

var globalString: string;
function setGlobalString(value: string) {
  globalString = value;
}

// Object
let structuredObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject",
  },
};

function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);

// Unknow
let a: any = "test";
let aNumber: number = 2;
aNumber = a;
console.log(aNumber);

// Never
function alwaysThrows() {
  throw new Error("This will always throw");
  return -1;
}

enum AnEnum {
  FIRST,
  SECOND,
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.FIRST:
      return "First Case";
    case AnEnum.SECOND:
      return "Second Case";
  }
  let returnedValue = enumValue;
  return returnedValue;
}

// Object spread
let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };
console.log(`secondObj: ${JSON.stringify(secondObj)}`);

// Spread precedence
let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3: object = { ...objPrec1, ...objPrec2 };
console.log(`object3: ${JSON.stringify(objPrec3, null, 4)}`);

// Spread with array
let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];
console.log(`Third array = ${thirdArray}`);

let objArray1 = [{ id: 1, name: "first element" }];

let objArray2 = [{ id: 2, name: "second element" }];

let objArray3 = [...objArray1, { id: 3, name: "third element" }, ...objArray2];

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);

// Tuples
let tuple1: [string, boolean];
tuple1 = ["test", true];
console.log(tuple1);

let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0]: ${tupleOptional[0]}`);
console.log(`tupleOptional[1]: ${tupleOptional[1]}`);

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string", "string2"];

console.log(tupleRest);

// Object destructuring
let complexObject = {
  aNum: 1,
  bStr: "name",
  cBool: true,
};

let { aNum, bStr, cBool } = complexObject;

console.log(aNum, bStr, cBool);

// Functions
function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}

concatValues("first", "second");
concatValues("third");

function concatWithDefault(a: string, b: string = "default") {
  console.log(`a + b = ${a + b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third");

// Rest params
function testArguments(...args: string[] | number[]) {
  for (var i = 0; i < arguments.length; i++) {
    console.log("argument[" + i + "] = " + arguments[i]);
  }
}
testArguments(1, 2);
testArguments("first", "second", "third");

var myCallback = function (text: any) {
  console.log(`myCallback called with ` + text);
};

function withCallbackArgs(message: any, callbackFn: any) {
  console.log("withCallback called, message: " + message);
  callbackFn(message + " from with callback");
}

withCallbackArgs("inital text", myCallback);

// Functions override
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}
add("first", "second");
add(1, 2);

// Literals
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumbericsValues = 1 | 20 | 65535;
function withLiteral(input: AllowedStringValues | AllowedNumbericsValues) {
  console.log(`called with: ${input}`);
}

withLiteral("one")
withLiteral("two");
withLiteral("three");
withLiteral(65535);
// withLiteral("four");
// withLiteral(2);