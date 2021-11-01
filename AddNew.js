const bookName = document.querySelector("#bookName")
const aurthorName = document.querySelector("#aurthorName");
const publisherName = document.querySelector("#publisherName");
const date = document.querySelector("#date");
var Submit = document.querySelector(".Submit");


Submit.addEventListener("click", saveData);


function saveData() {
    // const inputValues = [bookName.value, aurthorName.value, publisherName.value, date.value]
    // var localData = localStorage.getItem("books");
    //     if (localData == null && inputValues) {    
    //         itemArray = [];
    //     } else {itemArray = JSON.parse(localData)}
    //     itemArray.push(inputValues);
    //     localStorage.setItem("books" , JSON.stringify(itemArray))
        try { 
            if(bookName.value, aurthorName.value, publisherName.value, date.value== "")  throw (alert("Fill the inputs"));
            //if(isNaN(bookName.value && aurthorName.value && publisherName.value && date.value)) throw (alert("not a number"));
            //x = Number(bookName.value && aurthorName.value && publisherName.value);
           // if(bookName.value && aurthorName.value && publisherName.value) throw (alert("Num are not allow"));
            const inputValues = [bookName.value, aurthorName.value, publisherName.value, date.value]
            var localData = localStorage.getItem("books");
            if (localData == null && inputValues) {
                  itemArray = [];
               } else {
                   itemArray = JSON.parse(localData)
               }
               itemArray.push(inputValues);
               localStorage.setItem("books" , JSON.stringify(itemArray))
        alert("Save Data");
         window.location.href = "Library.html";
          }
          catch(err) {
           console.log("Input is " + err);
          }
}





