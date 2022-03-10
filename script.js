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

breakfastEssen = ["WHEAT BREAD","BUTTER JAM","TEA/COFFEE/MILK"]
lunchEssen = ["PICKLE/SUGAR/SALT"]
snacksEssen = ["TEA/COFFEE/MILK"]
dinnerEssen = ["PICKLE/SUGAR/SALT"]

function getMenu(dayClass)
{
    fetch("./menu.json")
    .then(response=>response.json())
    .then(data=> setMenu(data,dayClass));
} 


function setMenu(data,day)
{
    let dayNo = day.getDay();
    let weekNo = parseInt(day.getDate()/7);
    let weekAns;
    if(weekNo%2==0)
    {
        weekAns="odd";
    }
    else
    {
        weekAns="even";
    }
    console.log(dayNo,weekNo,weekAns);
    let dayMenu = data[weekAns][dayNo];
    
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

