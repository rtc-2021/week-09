my_var = 'one';

function a() {
  var my_var = 'one';
}

if (true) {
  var my_scoped_var = 'one';
  let my_properly_scoped_var = 'two';
}

const my_var = 'one';
let my_var = 'one';

let my_complex_string = my_var + ' two';
my_complex_string = `${my_var} two`;
