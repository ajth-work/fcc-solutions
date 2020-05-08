function convertHTML(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "&") {
      str = str.replace(str[i], "&amp;");
    } else switch (str[i]) {
        case ">":
          str = str.replace(str[i], "&gt;");
          break;
        case "<":
          str = str.replace(str[i], "&lt;");
          break;
        case "'":
          str = str.replace(str[i], "&apos;");
          break;
        case '"':
          str = str.replace(str[i], "&quot;");
          break;
      }
  }
  console.log(str)
  return str;
}

convertHTML("Dolce & Gabbana"); // should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos"); //  should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve"); //  should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"'); //  should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List"); //  should return "Schindler&apos;s List".
convertHTML("<>"); //  should return "&lt;&gt;".
convertHTML("abc"); //  should return "abc".

// & = &amp;
// < = &lt;
// > = &gt;
// " = &quot;
// ' = &apos;