var arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8];
for (var i = 0; i < arr.length - 1; ++i) {
  if (arr[i] == arr[i + 1]) {
    val = arr[i];
    break;
  }
}
val;
