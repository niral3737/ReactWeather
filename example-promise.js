function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Invalid Numbers');
    }
  });
}


addPromise(4, 5).then(function (sum) {
  console.log('sum is '+ sum);
},
function (error) {
  console.log('error is '+error);
});

addPromise(4, undefined).then(function (sum) {
  console.log('sum is '+ sum);
},
function (error) {
  console.log('error is '+error);
});
