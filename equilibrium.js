//Equilibrium index of an array in js, 
//An equilibrium index of a sequence as we know it is an index into the sequence such that the sum of elements at lower indices is equal to the sum of elements at higher indices.

var index = 0;
const a = [1, 1, 1, 1, 1, 4];
for(var i=0 ; i< a.length; i ++){
  let l_sum = 0;
  let r_sum = 0;
  let l_p = i-1;
  let r_p = i+1;

  for(l_p;l_p>-1;l_p--){
    if(l_p !== -1)
    l_sum += a[l_p];
  }
  for(r_p;r_p<a.length;r_p++){
    r_sum += a[r_p];
  }
  if(l_sum == r_sum){
    index = i;
  }
}

console.log('index : ',index);
