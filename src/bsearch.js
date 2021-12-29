// ���ֲ��ң����鲻�����ظ���Ԫ�أ�
function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // λ�ƻ��� Math.floor(low + (high-low)/2);
    // ������ Math.floor((low+high)/2),��ֹ���ݹ����ڴ����
    let mid = low + ((high - low) >> 1);
    console.log('mid: ', mid);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else if (arr[mid] < value) {
      low = mid + 1;
    }
  }
}

// recursion
function binarySearchByRecursion(arr, low, high, value) {
  if (low > high) {
    return -1;
  }
  let mid = low + ((high - low) >> 1);
  if (arr[mid] == value) {
    return mid;
  } else if (arr[mid] > value) {
    high = mid - 1;
  } else if (arr[mid] < value) {
    low = mid + 1;
  }
  return binarySearchByRecursion(arr, low, high, value);
}

// ���ҵ�һ�����ڸ���ֵ��Ԫ��, ͬ�� �������һ��ֵ���ڸ���ֵ��Ԫ��
// arr = [1,3,4,5,6,8,8,8,11,18]
function binarySearchFirst(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < value) {
      low = mid + 1;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else {
      if (mid === 0 || arr[mid - 1] < value) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

// ���ҵ�һ�����ڵ��ڸ���ֵ��Ԫ��
function binarySearchMax(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] >= value) {
      if (mid === 0 || arr[mid - 1] < value) {
        return mid
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] < value) {
      high = mid - 1;
    }
  }
  return -1;
}