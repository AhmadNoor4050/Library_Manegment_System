let editBtn=document.querySelector(".editBtn");

//editBtn.addEventListener("click", editItem);

function editItem(){
    
     let targetData = event.target.parentElement.parentElement;
     console.log(targetData);
     let index = targetData.children[0].innerHTML;
     console.log(index);

     let storeData = localStorage.getItem("books");
     itemArray  = JSON.parse(storeData);
     console.log(storeData);

     targetData.children[1].innerHTML = null;
     targetData.children[2].innerHTML = null;
     targetData.children[3].innerHTML = null;
     targetData.children[4].innerHTML = null;
     targetData.children[5].innerHTML = null;

     
     const bookName = document.createElement("input")
     const aurthorName = document.createElement("input");
     const publisherName = document.createElement("input");
     const date = document.createElement("input");
     bookName.className = "updateInputs";
     aurthorName.className="updateInputs";
     publisherName.className = "updateInputs";
     date.className= "updateInputs";
     //date.type = "Date";
     let doneBtn = document.createElement("button");
     doneBtn.innerText = "Done";
     doneBtn.className = "doneBtn";
     doneBtn.style.display="inlineBlock";
     doneBtn.style.margin="3px";
     let cancelBtn =document.createElement("button");
     cancelBtn.innerText="Cancel";
     cancelBtn.className="cancelBtn";
     cancelBtn.style.display="inlineBlock";
     cancelBtn.style.margin="3px";

     targetData.children[1].appendChild(bookName);
     targetData.children[2].appendChild(aurthorName);
     targetData.children[3].appendChild(publisherName);
     targetData.children[4].appendChild(date);
     targetData.children[5].appendChild(doneBtn , cancelBtn);
     targetData.children[5].appendChild(cancelBtn);


     //console.log(index);
     bookName.value = itemArray[index - 1][0];
     console.log(bookName.value);
     aurthorName.value = itemArray[index - 1][1];
     console.log(aurthorName.value);
     publisherName.value = itemArray[index - 1][2];
     console.log(publisherName.value);
     date.value = itemArray[index - 1][3];
     console.log(date.value);

     alert("Update Data")

    doneBtn.addEventListener("click", updateFunction);
    function updateFunction(){
        itemArray[index-1]={
            0: bookName.value,
            1: aurthorName.value,
            2: publisherName.value,
            3 :date.value
        };
        window.location.href= "Library.html";
        localStorage.setItem("books", JSON.stringify(itemArray));
    }
    cancelBtn.addEventListener("click" , ()=>{
        window.location.href = "Library.html";
    })



}

