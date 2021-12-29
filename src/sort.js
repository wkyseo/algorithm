// 冒泡排序
function bubbleSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    console.log('循环次数:', i);
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        flag = true;
      }
    }
    console.log('for 外部：', arr);
    if (!flag) {
      break;
    }
  }
}

// 插入排序， ？高级：希尔排序（不稳定）
/**
 * 分为两个步骤，搬移 + 插入
 * @param {array} arr 
 * @returns 
 */
function insertSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let val = arr[i];
    let j = i - 1;
    // 查找插入的位置
    for (; j >= 0; j--) {
      if (arr[j] < val) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = val;
  }
}

var arr = [4, 5, 6, 1, 3, 2]

// 归并排序

// 快速排序, 不稳定

// 阮一峰快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

let count = 0;
// 参考：https://blog.csdn.net/zhao529670074/article/details/80776253
function quick_sort(arr,from,to){
	var i = from; //哨兵i
	var j = to; //哨兵j
	// var key = arr[from]; //标准值
	var index = Math.floor((from+to)/2); // 取中间数的关键是（递归 from to 函数的中间值）
  var key = arr[index];
	if(from >= to){ //如果数组只有一个元素
	   return;
	}
	while(i < j){
		while(arr[j] > key && i < j){ //从右边向左找第一个比key小的数，找到或者两个哨兵相碰，跳出循环
			j--;
		}
		while(arr[i] <= key && i < j){  //从左边向右找第一个比key大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证在本轮循环结束前，key的位置不变，否则的话跳出循环，交换i和from的位置的时候，from位置的上元素有可能不是key
			i++;
		}
		/**
		  代码执行道这里，1、两个哨兵到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(key是当前数组最小值)
		**/
		if(i < j){ //交换两个元素的位置
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	arr[index] = arr[i] //
	arr[i] = key;
  console.log('基数 i: ', i);
  console.log('遍历 j：', j);
  console.log('基数交换后的数组：', arr)
  quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}


// 快排，网上另一种解法，
// 代码有问题
// arr = [6,4,5,3,1,2], 得不到正确答案,链接：https://www.cnblogs.com/hjx-blog/articles/9183453.html
var devide_Xin = function (array, start, end) {
  if(start >= end) return array;
  var baseIndex = Math.floor((start + end) / 2), // 基数索引
       i = start,
       j = end;

  while (i < j) {
      while (array[i] < array[baseIndex] && i > j) {
          i++;
      }
      while (array[j] >= array[baseIndex] && i> j)  {
          j--;
      }

      if(i < j) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          i++;
          j--;
      }
  }
  return i;
}

var quickSort_Xin = function (array, start, end) {
  if(array.length < 1) {
      return array;
  }
  var index = devide_Xin(array, start, end);
  if(start < index -1) {
      quickSort_Xin(array, start, index - 1);
  }
  if(end > index) {
      quickSort_Xin(array, index, end);
  }

  return array;
}