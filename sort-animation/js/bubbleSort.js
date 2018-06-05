//冒泡排序
function bubbleSort(arr) {
  var resArr = arr.slice()
  var len = resArr.length
  var i = len - 1
  while (i--) {
    var sortOk = true
    for (let j = 0; j < resArr.length - 1; j++) {
      var temp = resArr[j]
      if (resArr[j + 1] < resArr[j]) {
        this.pushHis(resArr.slice(), j)
        temp = resArr[j]
        resArr[j] = resArr[j + 1]
        resArr[j + 1] = temp
        sortOk = false
      }
      this.pushHis(resArr.slice(), j)
    }
    if (sortOk == true) {
      break
    }
  }
  return resArr
}

function bubbleSortDom(arr, j) {
  var html = ''
  var item = ''
  for (let i = 0; i < arr.length; i++) {
    if (i == j + 1 || i == j) {
      item = '<li class="sort_li"><span class="sort_span sort_span_blue" style="height: ' + arr[i] + '%"></span></li>'
    } else {
      item = '<li class="sort_li"><span class="sort_span" style="height: ' + arr[i] + '%"></span></li>'
    }
    html = html + item
  }

  document.querySelector('.sort_ul').innerHTML = html
}
