// ð������
function bubbleSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    console.log('ѭ������:', i);
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        flag = true;
      }
    }
    console.log('for �ⲿ��', arr);
    if (!flag) {
      break;
    }
  }
}

// �������� ���߼���ϣ�����򣨲��ȶ���
/**
 * ��Ϊ�������裬���� + ����
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
    // ���Ҳ����λ��
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

// �鲢����

// ��������, ���ȶ�

// ��һ���������
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
// �ο���https://blog.csdn.net/zhao529670074/article/details/80776253
function quick_sort(arr,from,to){
	var i = from; //�ڱ�i
	var j = to; //�ڱ�j
	// var key = arr[from]; //��׼ֵ
	var index = Math.floor((from+to)/2); // ȡ�м����Ĺؼ��ǣ��ݹ� from to �������м�ֵ��
  var key = arr[index];
	if(from >= to){ //�������ֻ��һ��Ԫ��
	   return;
	}
	while(i < j){
		while(arr[j] > key && i < j){ //���ұ������ҵ�һ����keyС�������ҵ����������ڱ�����������ѭ��
			j--;
		}
		while(arr[i] <= key && i < j){  //����������ҵ�һ����key��������ҵ����������ڱ�����������ѭ��,�����=�ű�֤�ڱ���ѭ������ǰ��key��λ�ò��䣬����Ļ�����ѭ��������i��from��λ�õ�ʱ��fromλ�õ���Ԫ���п��ܲ���key
			i++;
		}
		/**
		  ����ִ�е����1�������ڱ����ҵ���Ŀ��ֵ��2��j�ڱ��ҵ���Ŀ��ֵ��3�������ڱ���û�ҵ�(key�ǵ�ǰ������Сֵ)
		**/
		if(i < j){ //��������Ԫ�ص�λ��
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	arr[index] = arr[i] //
	arr[i] = key;
  console.log('���� i: ', i);
  console.log('���� j��', j);
  console.log('��������������飺', arr)
  quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}


// ���ţ�������һ�ֽⷨ��
// ����������
// arr = [6,4,5,3,1,2], �ò�����ȷ��,���ӣ�https://www.cnblogs.com/hjx-blog/articles/9183453.html
var devide_Xin = function (array, start, end) {
  if(start >= end) return array;
  var baseIndex = Math.floor((start + end) / 2), // ��������
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