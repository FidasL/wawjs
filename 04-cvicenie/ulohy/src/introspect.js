/*
Implementation of "better" introspection functions
Just as an excercise,
some of them may be useful in real life as well
*/
module.exports = {
  allOwnKeys,
  allOwnValues,
  allOwnEntries,
  getProtoChain,
  allKeys,
  forIn,
  shallowClone,
  hasInheritedProperty,
  hasOverridenProperty
};
// Object.keys supporting Symbols and non-enumerables
function allOwnKeys(o) {
  let pole = [];
  let symbols = Object.getOwnPropertySymbols(o);

  names = Object.getOwnPropertyNames(o);

  for (let x in names)
    pole.push(names[x]);


  return pole.concat(symbols);
}
// Object.values supporting Symbols and non-enumerables
function allOwnValues(o) {
	let pole = [];
	names = Object.getOwnPropertyNames(o);

	for (let x in names)
		pole.push(o[names[x]]);


	let symbols = Object.getOwnPropertySymbols(o);
  	if (symbols.length != 0){
  		for (let x in symbols)
			pole.push(o[symbols[x]]);
  	}

  	return pole;
}
// Object.entries supporting Symbols and non-enumerables
function allOwnEntries(o) {
  let pole = [];

  names = Object.getOwnPropertyNames(o);

  for (let x in names){
    var pom = [];
    pom.push(names[x]);
    pom.push(o[names[x]]);
    pole.push(pom);
  }

  let symbols = Object.getOwnPropertySymbols(o);
  for (let x in symbols){
    let pom = [];
    pom.push(symbols[x]);
    pom.push(o[symbols[x]]);

    pole.push(pom);
  }




  console.log(pole)
  return pole;
}
// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {

}
// Object.keys including, inherited, not-enumeble, symbols
function allKeys(obj) {

}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {

}
// create copy of object
// with same propereties,
// including symbols,
// same values
// and same property ownership
function shallowClone(obj) {

}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {

}

function hasOverridenProperty(obj, prop) {


}