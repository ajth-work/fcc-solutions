// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  console.log("Initial Title = (", title, ")");
  title = title.toLowerCase();
  title = title.trim();
  title = title.split(" ");
  let titleSent = [];
  for (let i = 0; i < title.length; i++) {
    if (title[i] != "") {
      titleSent = titleSent.concat(title[i])
    }
  }
  title = titleSent.join("-");
  console.log("Hyphenated = (", title, ")")
  console.log("----------------")
  return title;
}
// Only change code above this line
urlSlug("Winter Is Coming"); // should return "winter-is-coming".
urlSlug(" Winter Is  Coming"); // should return "winter-is-coming".
//urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"); // should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
//urlSlug("Hold The Door"); // should return "hold-the-door".