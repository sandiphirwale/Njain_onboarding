var study = [
    { 
        country: [ 
            { name: "India", tagHospitals: [] },
            { name: "Canada", tagHospitals: [] },
            { name: "France", tagHospitals: [] },
        ],
    },
    {
        hospital: [ "hospital1","hospital2","hospital3","hospital4","hospital5"]
    }
];

var lenc = study[0].country.length;
var lenh = study[1].hospital.length;
var droppableText;

function study1(){
    document.getElementById("boxdrop1").innerHTML =  "";
    document.getElementById("hospdrag1").innerHTML =  "";
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    
    for( let i=0; i<lenc; i++){
        study[0].country[i].tagHospitals = [];
         document.getElementById("boxdrop1").innerHTML += 
              study[0].country[i].name + " <br> " + " <div ondragover=allowDrop(event) ondrop=drop(event) class=box " + "id="+ study[0].country[i].name + ">" +"</div>";
    }

    for( let j=0; j<lenh; j++){
        document.getElementById("hospdrag1").innerHTML += " <div draggable=true ondragstart=dragStart(event) ondragover=stop(event) class=dragitem id=draga"+ j +">"  + study[1].hospital[j] + "</div>" + " <br> " ;       
    }

}

function study2(){
    document.getElementById("boxdrop2").innerHTML =  "";
    document.getElementById("hospdrag2").innerHTML =  "";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    document.getElementById("card3").style.display = "none";

    for( let i=0; i<lenc; i++){
        study[0].country[i].tagHospitals = [];
        document.getElementById("boxdrop2").innerHTML +=
             study[0].country[i].name + " <br> " + " <div ondragover=allowDrop(event) ondrop=drop(event) class=box " + "id="+ study[0].country[i].name + ">" +"</div>";
    }

    for( let j=0; j<lenh; j++){
        document.getElementById("hospdrag2").innerHTML += " <div draggable=true ondragstart=dragStart(event) ondragover=stop(event) class=dragitem id=dragb"+ j +">"+ study[1].hospital[j] + "</div>" + " <br> ";
    }
}

function study3(){
    document.getElementById("boxdrop3").innerHTML =  "";
    document.getElementById("hospdrag3").innerHTML =  "";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";

    for( let i=0; i<lenc; i++){
        study[0].country[i].tagHospitals = [];
        document.getElementById("boxdrop3").innerHTML += 
            study[0].country[i].name + " <br> " + " <div ondragover=allowDrop(event) ondrop=drop(event) class=box " + "id="+ study[0].country[i].name + ">" +"</div>";
    }

    for( let j=0; j<lenh; j++){
        document.getElementById("hospdrag3").innerHTML += " <div draggable=true ondragstart=dragStart(event) ondragover=stop(event) class=dragitem id=dragc"+ j +">"+ study[1].hospital[j] + "</div>" + " <br> ";
    }
}

function dragStart(ev){
   droppableText = ev;
   for (let k=0; k<lenc; k++){
      if(study[0].country[k].name == droppableText.target.parentElement.id ){
          var index = study[0].country[k].tagHospitals.indexOf(droppableText.target.textContent);
          study[0].country[k].tagHospitals.splice(index,1);
      }
   }
}

function allowDrop(ev){
    ev.preventDefault();
}

function stop(ev){
    ev.stopPropagation();
}

function drop(ev){
    ev.target.append(document.getElementById(droppableText.target.id));
    document.getElementById(droppableText.target.id).style.margin = "10px";
    for (let k=0; k<lenc; k++){
        if(ev.target.id ==  study[0].country[k].name){
            if(study[0].country[k].tagHospitals.length == 0){
                study[0].country[k].tagHospitals.push(droppableText.target.textContent);
            } else {
                if ( study[0].country[k].tagHospitals.indexOf(droppableText.target.textContent) == -1){
                   study[0].country[k].tagHospitals.push(droppableText.target.textContent);
                }
            }  
            console.log("Updated hospital list in country",study);   
        }        
    }
}


var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 18.591110, lng: 73.733823},
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: {lat: 18.591110, lng: 73.733823},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Dassault Systemes Solutions Labs Pune',
  });
}

