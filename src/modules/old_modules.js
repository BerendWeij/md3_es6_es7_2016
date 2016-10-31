// Manier 1

// var letters = 'ABC';
// var cijfers = 123;
//
// // export fullname
// function fullname(firstname, lastname) {
//   return firstname + ' ' + lastname+ '<br />';
// }
//
// // export initials
// function initials(firstname, lastname) {
//   return firstname[0] + '. ' + lastname[0] + '. <br />';
// }
//
// // export
// module.exports = {
//   'letters': letters,
//   'cijfers': cijfers,
//   'fullname': fullname,
//   'initials': initials
// };









///////////////////////////////////////////////////////////////////////////////











// Manier 2

var exports = module.exports = {};

// vars
var letters;
var cijfers;

exports.letters = 'ABC';
exports.cijfers = 123;

// export fullname
exports.fullname = function(firstname, lastname) {
  return firstname + ' ' + lastname+ '<br />';
};

// export initials
exports.initials = function(firstname, lastname) {
  return firstname[0] + '. ' + lastname[0] + '. <br />';
};
