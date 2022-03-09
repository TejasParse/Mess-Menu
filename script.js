breakfastEssen = ["WHEAT BREAD","BUTTER JAM","TEA/COFFEE/MILK"]
lunchEssen = ["PICKLE/SUGAR/SALT"]
snacksEssen = ["TEA/COFFEE/MILK"]
dinnerEssen = ["PICKLE/SUGAR/SALT"]

let day = new Date();

fetch("./menu.json")
.then(response=>response.json())
.then(data=> setMenu(data));

function setMenu(data)
{
    let dayNo = day.getDay();
    let weekNo = day.getDate()/7;
    let dayMenu = data[!weekNo%2][dayNo];

    let breakfast = document.querySelector("#breakfast");
    let breakfastMenu = [...dayMenu[0],...breakfastEssen];

    for(let i = 0;i<breakfastMenu.length;i++)
    {
        let obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=breakfastMenu[i];
        breakfast.appendChild(obj1);
    }
    
    let lunch = document.querySelector("#lunch");
    let lunchMenu = [...dayMenu[1],...lunchEssen];

    for(let i = 0;i<lunchMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=lunchMenu[i];
        lunch.appendChild(obj1);
    }

    let dinner = document.querySelector("#dinner");
    let dinnerMenu = [...dayMenu[3],...dinnerEssen];

    for(let i = 0;i<dinnerMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=dinnerMenu[i];
        dinner.appendChild(obj1);
    }

    let snacks = document.querySelector("#snacks");
    let snacksMenu = [...dayMenu[2],...snacksEssen];

    for(let i = 0;i<snacksMenu.length;i++)
    {
        obj1 = document.createElement("li");
        obj1.className="list-group-item items text-center";
        obj1.innerText=snacksMenu[i];
        snacks.appendChild(obj1);
    }



}

