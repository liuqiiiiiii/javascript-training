var arr = [1,33,-10,4,23,245,67,87,373,858,654];
function sortArr(arr){
  var count = 0;
  for(let i = 0; i<arr.length;i++) {
    for(let j = 0;j<arr.length-1-i;j++) {
      if(arr[j]>arr[j+1]) {
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
      document.write("第" + (++count) + "次排序后" +arr);
    }
  }
  return arr;
}
console.log(sortArr(arr));
