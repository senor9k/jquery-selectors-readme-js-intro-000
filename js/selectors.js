// declare your functions here...
function paragraphSelector(){
  $( document ).ready( function () {
    return $('p').text()
  });
}

function lastImageSelector(){
  $( document ).ready( function () {
    return $('img:last')
  });
}
