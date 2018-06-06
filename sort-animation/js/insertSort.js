/*
*  arr:数组
*  a:当前已完成排序的数量。排序循环中的i。
*  b:当前在比较的位。循环中的j+1;
*  temp:当前比较的值;
*/

function insertSortDom(arr, a, b, temp) {
  var html = ''
  var item = ''
  var spanClass = ''
  for (let i = 0; i < arr.length; i++) {
    spanClass = 'sort_span'

    if (i <= a) {
      spanClass += ' sort_span_blue'
    }

    item = '<li class="sort_li"><span class="' + spanClass + '" style="height: ' + arr[i] + '%"></span></li>'

    if (i == b) {
      item =
        '<li class="sort_li"><span class="' +
        spanClass +
        '" style="height: ' +
        arr[i] +
        '%"></span><span class="sort_span_in" style="height:' +
        temp +
        '%"></span></li>'
    }

    html = html + item
  }

  document.querySelector('.sort_ul').innerHTML = html
}

//插入排序：
function insertSort(oriArr) {
  var arr = oriArr.slice()

  for (let i = 1; i < arr.length; i++) {
    var temp = arr[i]
    for (var j = i - 1; j > -1; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
        this.pushHis(arr.slice(), i - 1, j + 1, temp)
      } else {
        break
      }
    }
    arr[j + 1] = temp
    this.pushHis(arr.slice(), i, j, temp)
  }
  return arr
}
