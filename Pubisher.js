window.addEventListener('DOMContentLoaded', PublisherData);
function PublisherData(){
    // console.log("author")
    var storeData = localStorage.getItem("books");
    if (storeData == null) {
        itemArray.push(inputValue);
    } else {
        itemArray = JSON.parse(storeData)
    }


// console.log(itemArray)
    // console.log(itemArray)
    let  actualData = itemArray.reduce((acc,curr)=>{
        if(curr[2] in acc){
                //console.log("true")
            acc[curr[2]].count++;
        }else{
           // console.log("false")
            acc[curr[2]] = {publisher: curr[2], count: 1}
        }
        return acc;
    },[]); 
    // console.log(actualData)

    let PublisherTableRow = document.querySelector(".PublisherTableRow")
    displayData = "";


    for(acc in actualData){

  
        let dataConntent  = actualData[acc];
        
        displayData +=`
        <tr>
        <td>${dataConntent.publisher}</td>
        <td> ${dataConntent.count}</td>
        <td>
        <button onclick="deleteitem()"> Delete </button>
        </td>
        </tr>
        `
         
    }
    
         PublisherTableRow.innerHTML=displayData; 
};

function deleteitem(){
    //console.log("hello")
let accessData = event.target.parentElement.parentElement;
let name = accessData.children[0].innerHTML;
var storeData = localStorage.getItem("books");
// if (storeData == null) {
//     itemArray.push(inputValue);
// } else {
    itemArray = JSON.parse(storeData)
// }


let filterData= itemArray.filter(items=>{
    return items[2] !== name;
})
console.log(filterData);
localStorage.setItem("books" , JSON.stringify(filterData));
accessData.remove();
PublisherData();
}



        // let PublisherTableRow = document.querySelector(".PublisherTableRow")
        // let TableRows =document.createElement("tr");
        // PublisherTableRow.appendChild(TableRows);
        // let Author= document.createElement("td");
        // TableRows.appendChild(Author)
        // Author.innerText=`${dataConntent.publisher}`;
        // let BookNo= document.createElement("td");
        // TableRows.appendChild(BookNo)
        // BookNo.innerText=`${dataConntent.count}`
        // let actionb= document.createElement("td");
        // TableRows.appendChild(actionb)
        // let btn = document.createElement("button");
        // actionb.appendChild(btn).className="Delete";
        // let Delete= document.createTextNode("Delete")
        // btn.appendChild(Delete)

        // console.log(dataConntent.author);
        // console.log(dataConntent.count);
   



    
 