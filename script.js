document.getElementById('date').valueAsDate = new Date();
getMenu(new Date());

document.querySelector("#date").addEventListener("change",()=>{
  
    let temp = document.getElementById('date').valueAsDate;
    if(temp==null)
    {
        return;
    }
    getMenu(temp)
    console.log(temp.getDay());
    console.log(temp.getDate());
});

breakfastEssen = ["BREAD/BUTTER/JAM","TEA/COFFEE/MILK"]
lunchEssen = ["PICKLE/SUGAR/SALT"]
snacksEssen = ["TEA/COFFEE/MILK"]
dinnerEssen = ["PICKLE/SUGAR/SALT","BUTTER MILK"]

function getMenu(dayClass)
{
    fetch("./menu.json")
    .then(response=>response.json())
    .then(data=> setMenu(data,dayClass));
} 


function setMenu(data,day)
{
    let dayNo = day.getDay();
    
    if(dayNo==3)
    {
        document.querySelector("#specialMenu").classList.add("visible");
        document.querySelector("#specialMenu").classList.remove("invisible");
    }
    else
    {
        document.querySelector("#specialMenu").classList.add("invisible");
        document.querySelector("#specialMenu").classList.remove("visible");
    }

    let dayMenu = data["all"][dayNo];
    
    let breakfast = document.querySelector("#breakfast");
    let breakfastMenu = [...dayMenu[0],...breakfastEssen];

    console.log(breakfast.children);

    while (breakfast.childNodes.length > 2) {
        breakfast.removeChild(breakfast.lastChild);
    }
    for(let i = 0;i<breakfastMenu.length;i++)
    {
        let obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=breakfastMenu[i];
        breakfast.appendChild(obj1);
    }
    
    let lunch = document.querySelector("#lunch");
    let lunchMenu = [...dayMenu[1],...lunchEssen];
    while (lunch.childNodes.length > 2) {
        lunch.removeChild(lunch.lastChild);
    }
    for(let i = 0;i<lunchMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=lunchMenu[i];
        lunch.appendChild(obj1);
    }

    let dinner = document.querySelector("#dinner");
    let dinnerMenu = [...dayMenu[3],...dinnerEssen];
    while (dinner.childNodes.length > 2) {
        dinner.removeChild(dinner.lastChild);
    }
    for(let i = 0;i<dinnerMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=dinnerMenu[i];
        dinner.appendChild(obj1);
    }

    let snacks = document.querySelector("#snacks");
    let snacksMenu = [...dayMenu[2],...snacksEssen];
    while (snacks.childNodes.length > 2) {
        snacks.removeChild(snacks.lastChild);
    }
    for(let i = 0;i<snacksMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=snacksMenu[i];
        snacks.appendChild(obj1);
    }



}


document.querySelector("#breakfast").classList.remove("bf1");
document.querySelector("#lunch").classList.remove("ln1");
document.querySelector("#snacks").classList.remove("sn1");
document.querySelector("#dinner").classList.remove("dn1");

