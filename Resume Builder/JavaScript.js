//document.write("hello");
function addNewWEField(){
    // checking button is working or not
    console.log("Adding new field");

    // new node
    let newNode = document.createElement("textarea");

    // add class which you want to show
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    // add reference of id 
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    // in which div you want to insert this node
    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){
    // new node
    let newNode = document.createElement("textarea");

    // add class which you want to show
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    // add reference of id
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    // in which div you want to insert this node
    aqOb.insertBefore(newNode, aqAddButtonOb);
}


//---------- generate cv button code --------------------
function generateCV(){
    console.log("working");

     //--------------- name data -------------------- 
    let namefield = document.getElementById("namefield").value;
    let nameT = document.getElementById("nameT");
    let nameT1 = document.getElementById("nameT1");
    nameT.innerHTML = namefield;
    nameT1.innerHTML = namefield;

    //--------------------- contact no data -----------------
    let contact = document.getElementById("contactfield").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contact;
    
    //----------------- email data --------------------------
    let email = document.getElementById("email").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = email;

    //-------------------- address data --------------------
    let address = document.getElementById("addressfield").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = address;
    
    //----------------------------- linked in link -----------------
    let linkedin = document.getElementById("linkedinfield").value;
    let linkedinT = document.getElementById("linkedinT");
    linkedinT.innerHTML = linkedin;

    //------------------------- gith hub link -----------------
    let github = document.getElementById("githubfield").value;
    let githubT = document.getElementById("githubT");
    githubT.innerHTML = github;

    //========================= insta link================
    let insta = document.getElementById("instafield").value;
    let instaT = document.getElementById("instagramT");
    instaT.innerHTML = insta;

    //-------------------- facebook link ---------------
    let fb = document.getElementById("fbfield").value;
    let fbT = document.getElementById("facebookT");
    fbT.innerHTML = fb;

    //------------------- twitter link ---------------
    let twitter = document.getElementById("twitterfield").value;
    let twitterT = document.getElementById("twitterT");
    twitterT.innerHTML = twitter;

    //-------------------- objective data -------------------
    let objective = document.getElementById("objectivefield").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objective;

    //-------------------- work experience data -----------
    let we = document.getElementsByClassName("wefield");
    let str="";
    for (let e of we){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;
    
    //---------------------- academic field ---------------
    let aq = document.getElementsByClassName("aqfield");
    let str1="";
    for(let e1 of aq){
        str1 = str1 + `<li> ${e1.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //----------------------- imgage file ----------------------
    let file = document.getElementById("imgfield").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function (){
        document.getElementById("imgT").src = reader.result;
    };
    //------------------------- cv form close and template will open ----------
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

 //------------------------- print function-------
 function printCV(){
    let body = document.getElementById("body").innerHTML;
    let data = document.getElementById("cv-template").innerHTML;
    document.getElementById("body").innerHTML=data;
    window.print();
}
