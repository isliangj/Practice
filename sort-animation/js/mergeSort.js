function mergeSort(oriArr) {
  var arr = oriArr.slice()
  var gap = 1
  var gapArr = []
  var n = 0
  var that = this
  while (gap < arr.length - 1) {
    gap = Math.pow(2, n)
    if (gap <= arr.length - 1) {
      gapArr.push(gap)
    }
    n++
  }
  var glen = gapArr.length
  for (var i = 0; i < glen; i++) {
    gap = gapArr[i]
    for (let j = 0; j < arr.length; j = j + gap * 2) {
      s1.call(this, arr, j, j + gap * 2 - 1, gap) //借用方法。其实是为了传递this。
    }
  }
  return arr
}

//a是开始游标。b是结束游标。n是左数组的长度。

function s1(arr, a, b, n) {
  var n

  if (arr.length < 2 || n == 0 || b - a + 1 == n) {
    return arr
  }

  if (b > arr.length - 1) {
    //归并时后面一个数组的b可能超出数组。因为它是加的gap*2。这时要让这个b标识到整个数组最后一位去。
    b = arr.length - 1
  }
  var rn = b - a + 1 - n

  for (let i = a, j = a + n; n > 0, i <= b, rn > 0, j <= b; ) {
    if (arr[i] < arr[j]) {
      i++
      n--
      this.pushHis(arr.slice(), i - 1, j, a, b)
      continue
    } else {
      var temp = arr[j]
      for (var k = j; k > i; k--) {
        this.pushHis(arr.slice(), i, j, a, b, k, temp)
        arr[k] = arr[k - 1]
      }
      arr[i] = temp
      j++
      i++
      rn--
      this.pushHis(arr.slice(), i - 1, j - 1, a, b)
      continue
    }
  }
}

/*
*  arr:数组
*  a:左边数组比较到哪一位。
*  b:右边数组比较到哪一位。
*  c:标记本轮插入排序的开始位。
*  d:标记本轮插入排序的结束位。
*  tag:当前在对比的序号;循环中的k
*  temp:当前在找位的值;
*/

function mergeSortDom(arr, a, b, c, d, tag, temp) {
  var html = ''
  var item = ''
  if (a == b) {
    a = a - 1
  }
  for (let i = 0; i < arr.length; i++) {
    spanClass = 'sort_span'

    if (c <= i && i <= d) {
      spanClass += ' sort_span_blue'
    }

    if (i == a || i == b) {
      spanClass += ' sort_span_green'
    }

    if (tag && i == tag) {
      item =
        '<li class="sort_li"><span class="' +
        spanClass +
        '" style="height: ' +
        arr[i] +
        '%"></span><span class="sort_span_in" style="height:' +
        temp +
        '%"></span></li>'
    } else {
      item = '<li class="sort_li"><span class="' + spanClass + '" style="height: ' + arr[i] + '%"></span></li>'
    }
    html = html + item
  }
  document.querySelector('.sort_ul').innerHTML = html
}
