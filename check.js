function bublSort (arr) {
    let n = arr.length
    let swap
    do {
      swap = false
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap arr[i] and arr[i+1]
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swap = true
        }
      }
      n--
    } while (swap)
    return arr
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
  
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
  
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge(left, right) {
    let result = []
    let leftInd = 0
    let rightInd = 0
  
    while (leftInd < left.length && rightInd < right.length) {
      if (left[leftInd] < right[rightInd]) {
        result.push(left[leftInd])
        leftInd++
      } else {
        result.push(right[rightInd])
        rightInd++
      }
    }
  
    return result.concat(left.slice(leftInd)).concat(right.slice(rightInd))
  }
  
  function genRandArr(size) {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(Math.random())
    }
    return arr
  }
  
  function genSortArr(size) {
    let arr = []
    for (let i = size; i >= 1; i--) {
      arr.push(i)
    }
    return arr
  }
  
  function testSortAlg(algorithm, arr) {
    const startTime = performance.now()
    algorithm(arr)
    const endTime = performance.now()
    return endTime - startTime
  }
  
  const smArrSize = 1000
  const larArrSize = 10000
  
  const bublTimeSBest = testSortAlg(bublSort, genSortArr(smArrSize))
  const bublTimeSMid = testSortAlg(bublSort, genRandArr(smArrSize))
  const bublTimeSWorst = testSortAlg (bublSort, genSortArr(smArrSize).reverse())
  
  const bublTimeLBest = testSortAlg(bublSort, genSortArr(larArrSize))
  const bublTimeLMid = testSortAlg(bublSort, genRandArr(larArrSize))
  const bublTimeLWorst = testSortAlg(bublSort, genSortArr(larArrSize).reverse())
  
  const mergTimeSBest = testSortAlg(mergeSort, genSortArr(smArrSize))
  const mergTimeSMid = testSortAlg(mergeSort, genRandArr(smArrSize))
  const mergTimeSWorst = testSortAlg(mergeSort, genSortArr(smArrSize).reverse())
  
  const mergTimeLBest = testSortAlg(mergeSort, genSortArr(larArrSize))
  const mergTimeLMid = testSortAlg(mergeSort, genRandArr(larArrSize))
  const mergTimeLWorst = testSortAlg(mergeSort, genSortArr(larArrSize).reverse())
  
  console.log("Сортировка пузырьком (Мал. массив):")
  console.log(`- Лучший случай: ${bublTimeSBest.toFixed(2)} мил сек`)
  console.log(`- Средний случай: ${bublTimeSMid.toFixed(2)} мил сек`)
  console.log(`- Худший случай: ${bublTimeSWorst.toFixed(2)} мил сек`)
  
  console.log("Сортировка пузырьком (Бол. массив):")
  console.log(`- Лучший случай: ${bublTimeLBest.toFixed(2)} мил сек`)
  console.log(`- Средний случай: ${bublTimeLMid.toFixed(2)} мил сек`)
  console.log(`- Худший случай: ${bublTimeLWorst.toFixed(2)} мил сек`)
  
  console.log("Сортировка слиянием (Мал. массив):")
  console.log(`- Лучший случай: ${mergTimeSBest.toFixed(2)} мил сек`)
  console.log(`- Средний случай: ${mergTimeSMid .toFixed(2)} мил сек`)
  console.log(`- Худший случай: ${mergTimeSWorst .toFixed(2)} мил сек`)
  
  console.log("Сортировка слиянием  (Бол. массив):")
  console.log(`- Лучший случай: ${ mergTimeLBest .toFixed(2)} мил сек`)
  console.log(`- Средний случай: ${mergTimeLMid.toFixed(2)} мил сек`)
  console.log(`- Худший случай: ${mergTimeLWorst.toFixed(2)} мил сек`)
  