// 二分查找，数组不存在重复的元素，
function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // 位移或者 Math.floor(low + (high-low)/2);
    // 而不用 Math.floor((low+high)/2),防止数据过大，内存溢出
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

// 查找第一个等于给定值的元素, 同理 查找最后一个值等于给定值的元素
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

// 查找第一个大于等于给定值的元素
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