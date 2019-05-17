 let input= document.getElementById("to-do-input");
 let add_button= document.getElementById("enter");
 let ulist= document.getElementById("ulist");
 let counter=0;
// console.dir(add_button);
function createListElement(){
    let li = document.createElement('li');
    let para= document.createElement('strong');
    para.id="text"+counter;
    counter++;
    para.appendChild(document.createTextNode(input.value));
    li.appendChild(para);
    ulist.insertBefore(li, ulist.firstChild);
    input.value= "";

    // crossOut = () => {
    //     li.innerHTML= li.innerHTML.strike();
    //     // console.log(li);
    // }

    function crossOut(){
      
        let text=document.getElementById(para.id);
        try{
        text.innerHTML= text.innerHTML.strike();}
        catch(e){
            return;
        }

    }

    li.addEventListener("click",crossOut);

    function deleteListItem(){
        li.remove();
    }

    let del_button = document.createElement("button");

    del_button.appendChild(document.createTextNode("X"));
    li.appendChild(del_button);

    del_button.addEventListener("click",deleteListItem);

}

function addAfterClick(){
    if(input.value.length > 0 ){
        createListElement();
    }
}

function addAfterEnter(event){
    if(input.value.length > 0 && event.which ===13 ) {
        createListElement();
    }
}

add_button.addEventListener("click",addAfterClick);

input.addEventListener("keypress",addAfterEnter);

