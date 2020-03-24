function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
      case " ":
        temp[i] = "&nbsp;";
        break;
      case "¢":
        temp[i] = "&cent;";
        break;
      case "£":
        temp[i] = "&pound;";
        break;
      case "¥":
        temp[i] = "&yen;";
        break;
      case "€":
        temp[i] = "&euro;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");