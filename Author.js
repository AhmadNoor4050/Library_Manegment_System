
window.addEventListener('DOMContentLoaded', authorData);
function authorData(){
    // console.log("author")
    var storeData = localStorage.getItem("books");
    if (storeData == null) {
        itemArray.push(inputValue);
    } else {
        itemArray = JSON.parse(storeData)
    }



    let  actualData = itemArray.reduce((acc,curr)=>{
                if(curr[1] in acc){
            acc[curr[1]].count++;
        }else{
            acc[curr[1]] = {author: curr[1], count: 1}
        }
        return acc;
    },[]); 

    
    let tableBody = document.querySelector(".tBody");
    displayData = "";
    for(accm in actualData){
        // console.log(accm);
        let dataConntent  = actualData[accm];
        displayData+=`
        <tr>
        <td>${dataConntent.author}</td>
        <td>${dataConntent.count}</td>
        <td>
        <button onclick="authorDataDelete()" >Delete</button>
        </td>
        </tr>
        `

    }
    tableBody.innerHTML=displayData; 
}

function authorDataDelete(){
    let check= event.target.parentElement.parentElement;
    console.log(check);
    let accessData= check.children[0].innerHTML;
    console.log(accessData) 
    var storeData = localStorage.getItem("books");

    itemArray=JSON.parse(storeData)
    
    let authorDataFilte = itemArray.filter(items=>{
        return items[1] != accessData;
    })
    localStorage.setItem("books" , JSON.stringify(authorDataFilte));
    check.remove();
    authorData();



}



       // console.log(dataConntent);




        // let tBody = document.querySelector(".tBody")
        // let TableRow =document.createElement("tr");
        // tBody.appendChild(TableRow);
        // let Author= document.createElement("td");
        // TableRow.appendChild(Author)
        // Author.innerText=`${dataConntent.author}`;
        // let BookNo= document.createElement("td");
        // TableRow.appendChild(BookNo)
        // BookNo.innerText=`${dataConntent.count}`
        // let actionb= document.createElement("td");
        // TableRow.appendChild(actionb)
        // let btn = document.createElement("button");
        // actionb.appendChild(btn).className="Delete";
        // let Delete= document.createTextNode("Delete")
        // btn.appendChild(Delete)

        // console.log(dataConntent.author);
        // console.log(dataConntent.count);
//     }
    
// }




