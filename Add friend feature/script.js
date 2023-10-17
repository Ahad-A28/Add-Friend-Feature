let isstatus = document.querySelector("h3")
let addfriend = document.querySelector("#add")
let flag = 0

addfriend.addEventListener("click", function () {
    if(flag==0){
        addfriend.innerHTML = "Remove Friend"
        addfriend.style.color="red"
        isstatus.innerHTML = "Friends"
        isstatus.style.color = "green"
        

        flag = 1
    }else{
         addfriend.innerHTML = "Add Friend"
         addfriend.style.color="green"
            isstatus.innerHTML = "Stanger"
            isstatus.style.color="red"
            flag = 0
         
    }
   

}
)
