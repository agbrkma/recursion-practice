function merge(left, right){
    let result = []
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }

    // Concatenate the remaining elements (if any) from left and right
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}


function mergeSort(arr){
    if (arr.length <= 1) {
      return arr;
    } else {
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);

      return merge(mergeSort(left), mergeSort(right))
    }
}

console.log(mergeSort([3,2,1,13,8,5,0,1]))