window.addEventListener('DOMContentLoaded', displyData);



function displyData() {
     
    var storeData = localStorage.getItem("books");

    if (storeData == null) {
        itemArray.push(inputValue);
        
    } else {
        itemArray = JSON.parse(storeData)
    }
  //  console.log(itemArray)

    let displaypath = document.getElementById("displaypath");
    let display = '';
    itemArray.map((items, index) => {
        display +=`

        
            <tr>
                <td>${index+1}</td>
                <td>${items[0]}</td>
                <td>${items[1]}</td>
                <td>${items[2]}</td>
                <td>${items[3]}</td>
                <td>
                <button onclick="editItem()" class="editBtn">Update</button>
                <button onClick="deleteitem(${index})">Delete</button></td>
            </tr>
        `;
        

    });
    displaypath.innerHTML = display;
    
   
}
function deleteitem(index){

    
    console.log(index)
    var storeData = localStorage.getItem("books");
       // console.log(index)
        itemArray = JSON.parse(storeData);
        itemArray.splice(index,1);
    alert("delete this file")
    localStorage.setItem("books", JSON.stringify(itemArray));
    
    displyData();
    //console.log(itemArray);    
};
