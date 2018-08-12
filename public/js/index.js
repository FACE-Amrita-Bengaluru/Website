 $(document).ready(function() {
   $('header').show('slow');
  var nav = responsiveNav(".nav-collapse");
  (function(){
    const  config = {
    apiKey:/*need to create an api key for the website if u are planning to use firebase databse*/
    authDomain: "faceamritablr.firebaseapp.com",
    databaseURL: "https://faceamritablr.firebaseio.com",
    projectId: "faceamritablr",
    storageBucket: "faceamritablr.appspot.com",
    messagingSenderId: "1018230271726"
    
  };
  firebase.initializeApp(config);
  var temp=null;
  const dbRefObject=firebase.database().ref().child('Object');
  dbRefObject.on('value',snap => {
  var t=snap.val();
  var x=document.getElementById('date1');
  x.innerText+= t["day"][0];
  x=document.getElementById('loc1');
  x.innerHTML+=t["loc"][0];
  x=document.getElementById('month1');
  x.innerText=t["month"][0];
  x=document.getElementById('title1');
  x.innerText=t["title"][0];
  x=document.getElementById('time1');
  x.innerHTML+= t["time"][0];
  x=document.getElementById('info1');
  x.innerHTML+= t["info"][0];
  x=document.getElementById('date2');
  x.innerText=t["day"][1];
  x=document.getElementById('month2');
  x.innerText=t["month"][1];
  x=document.getElementById('title2');
  x.innerText=t["title"][1];
  x=document.getElementById('time2');
  x.innerHTML+= t["time"][1];
  x=document.getElementById('loc2');
  x.innerHTML+= t["loc"][1];
  x=document.getElementById('info2');
  x.innerHTML+= t["info"][1];
  x=document.getElementById('date3');
  x.innerText=t["day"][2];
  x=document.getElementById('month3');
  x.innerText=t["month"][2];
  x=document.getElementById('title3');
  x.innerText=t["title"][2];
  x=document.getElementById('time3');
  x.innerHTML+= t["time"][2];
  x=document.getElementById('loc3');
  x.innerHTML+= t["loc"][2];
  x=document.getElementById('info3');
  x.innerHTML+= t["info"][2];
  temp=JSON.stringify(t, null,3);
  //Start of Modal
document.getElementById("pacmfaculty").src =t["acm"]["pacmfaculty"];
document.getElementById("pacmsec").src =t["acm"]["pacmsec"];
document.getElementById("pcoacm").src =t["acm"]["pcoacm"];
document.getElementById("pcsifaculty").src =t["csi"]["pcsifaculty"];
document.getElementById("pcsisec").src =t["csi"]["pcsisec"];
document.getElementById("pcocsi").src =t["csi"]["pcocsi"];
document.getElementById("pacmwfaculty").src =t["acmw"]["pacmwfaculty"];
document.getElementById("pacmwsec").src =t["acmw"]["pacmwsec"];
document.getElementById("pcoacmw").src =t["acmw"]["pcoacmw"];
document.getElementById("pcodefaculty").src =t["code"]["pcodefaculty"];
document.getElementById("pcodesec").src =t["code"]["pcodesec"];
document.getElementById("pcocode").src =t["code"]["pcocode"];
document.getElementById("one").setAttribute("data-src",t["image"]["1"]);
document.getElementById("one").setAttribute("data-responsive",t["image"]["1"]);
document.getElementById("one").setAttribute("data-sub-html",t["sub"]["1"]);
document.getElementById("onem").setAttribute("src",t["image"]["1"]);
document.getElementById("two").setAttribute("data-src",t["image"]["2"]);
document.getElementById("two").setAttribute("data-sub-html",t["sub"]["2"]);
document.getElementById("two").setAttribute("data-responsive",t["image"]["2"]);
document.getElementById("twom").setAttribute("src",t["image"]["2"]);
document.getElementById("three").setAttribute("data-src",t["image"]["3"]);
document.getElementById("three").setAttribute("data-responsive",t["image"]["3"]);
document.getElementById("three").setAttribute("data-sub-html",t["sub"]["3"]);
document.getElementById("threem").setAttribute("src",t["image"]["3"]);
document.getElementById("four").setAttribute("data-src",t["image"]["4"]);
document.getElementById("four").setAttribute("data-responsive",t["image"]["4"]);
document.getElementById("four").setAttribute("data-sub-html",t["sub"]["4"]);
document.getElementById("fourm").setAttribute("src",t["image"]["4"]);
document.getElementById("five").setAttribute("data-src",t["image"]["5"]);
document.getElementById("five").setAttribute("data-responsive",t["image"]["5"]);
document.getElementById("fivem").setAttribute("src",t["image"]["5"]);
document.getElementById("five").setAttribute("data-sub-html",t["sub"]["5"]);
document.getElementById("six").setAttribute("data-src",t["image"]["6"]);
document.getElementById("six").setAttribute("data-responsive",t["image"]["6"]);
document.getElementById("sixm").setAttribute("src",t["image"]["6"]);
document.getElementById("six").setAttribute("data-sub-html",t["sub"]["6"]);
document.getElementById("seven").setAttribute("data-src",t["image"]["7"]);
document.getElementById("seven").setAttribute("data-sub-html",t["sub"]["7"]);
document.getElementById("seven").setAttribute("data-responsive",t["image"]["7"]);
document.getElementById("sevenm").setAttribute("src",t["image"]["7"]);
document.getElementById("eight").setAttribute("data-src",t["image"]["8"]);
document.getElementById("eight").setAttribute("data-responsive",t["image"]["8"]);
document.getElementById("eightm").setAttribute("src",t["image"]["8"]);
document.getElementById("eight").setAttribute("data-sub-html",t["sub"]["8"]);
document.getElementById("nine").setAttribute("data-src",t["image"]["9"]);
document.getElementById("nine").setAttribute("data-responsive",t["image"]["9"]);
document.getElementById("ninem").setAttribute("src",t["image"]["9"]);
document.getElementById("nine").setAttribute("data-sub-html",t["sub"]["9"]);
document.getElementById("ten").setAttribute("data-src",t["image"]["10"]);
document.getElementById("ten").setAttribute("data-responsive",t["image"]["10"]);
document.getElementById("tenm").setAttribute("src",t["image"]["10"]);
document.getElementById("ten").setAttribute("data-sub-html",t["sub"]["10"]);
document.getElementById("eleven").setAttribute("data-src",t["image"]["11"]);
document.getElementById("eleven").setAttribute("data-responsive",t["image"]["11"]);
document.getElementById("elevenm").setAttribute("src",t["image"]["11"]);
document.getElementById("eleven").setAttribute("data-sub-html",t["sub"]["11"]);
document.getElementById("twelve").setAttribute("data-src",t["image"]["12"]);
document.getElementById("twelve").setAttribute("data-responsive",t["image"]["12"]);
document.getElementById("twelvem").setAttribute("src",t["image"]["12"]);
document.getElementById("twelve").setAttribute("data-sub-html",t["sub"]["12"]);
document.getElementById("13").setAttribute("data-src",t["image"]["13"]);
document.getElementById("13").setAttribute("data-responsive",t["image"]["13"]);
document.getElementById("13m").setAttribute("src",t["image"]["13"]);
document.getElementById("13").setAttribute("data-sub-html",t["sub"]["13"]);
document.getElementById("14").setAttribute("data-src",t["image"]["14"]);
document.getElementById("14").setAttribute("data-responsive",t["image"]["14"]);
document.getElementById("14m").setAttribute("src",t["image"]["14"]);
document.getElementById("14").setAttribute("data-sub-html",t["sub"]["14"]);
document.getElementById("15").setAttribute("data-src",t["image"]["15"]);
document.getElementById("15").setAttribute("data-responsive",t["image"]["15"]);
document.getElementById("15m").setAttribute("src",t["image"]["15"]);
document.getElementById("15").setAttribute("data-sub-html",t["sub"]["15"]);
document.getElementById("16").setAttribute("data-src",t["image"]["16"]);
document.getElementById("16").setAttribute("data-responsive",t["image"]["16"]);
document.getElementById("16m").setAttribute("src",t["image"]["16"]);
document.getElementById("16").setAttribute("data-sub-html",t["sub"]["16"]);
document.getElementById("17").setAttribute("data-sub-html",t["sub"]["17"]);
document.getElementById("17").setAttribute("data-src",t["image"]["17"]);
document.getElementById("17").setAttribute("data-responsive",t["image"]["17"]);
document.getElementById("17m").setAttribute("src",t["image"]["17"]);
document.getElementById("18").setAttribute("data-src",t["image"]["18"]);
document.getElementById("18").setAttribute("data-responsive",t["image"]["18"]);
document.getElementById("18m").setAttribute("src",t["image"]["18"]);
document.getElementById("18").setAttribute("data-sub-html",t["sub"]["18"]);
document.getElementById("19").setAttribute("data-src",t["image"]["19"]);
document.getElementById("19").setAttribute("data-responsive",t["image"]["19"]);
document.getElementById("19m").setAttribute("src",t["image"]["19"]);
document.getElementById("19").setAttribute("data-sub-html",t["sub"]["19"]);
document.getElementById("20").setAttribute("data-src",t["image"]["20"]);
document.getElementById("20").setAttribute("data-responsive",t["image"]["20"]);
document.getElementById("20m").setAttribute("src",t["image"]["20"]);
document.getElementById("20").setAttribute("data-sub-html",t["sub"]["20"]);
document.getElementById("pdhead").src =t["overall"]["pdhead"];
document.getElementById("pfhead").src =t["overall"]["pfhead"];
document.getElementById("psec").src =t["team"]["psec"];
document.getElementById("pcosec").src =t["team"]["pcosec"];
document.getElementById("psecacm").src =t["acm"]["pacmsec"];
document.getElementById("pseccsi").src =t["csi"]["pcsisec"];
document.getElementById("pseccode").src =t["code"]["pcodesec"];
document.getElementById("psecacmw").src =t["acmw"]["pacmwsec"];
document.getElementById("pcosecacm").src =t["acm"]["pcoacm"];
document.getElementById("pcoseccsi").src =t["csi"]["pcocsi"];
document.getElementById("pcoseccode").src =t["code"]["pcocode"];
document.getElementById("pcosecacmw").src =t["acmw"]["pcoacmw"];
document.getElementById("pacmf").src =t["acm"]["pacmfaculty"];
document.getElementById("pcsif").src =t["csi"]["pcsifaculty"];
//document.getElementById("pacmwf").src =t["acmw"]["pacmwfaculty"];
document.getElementById("pcodef").src =t["code"]["pcodefaculty"];
//Start of Appending
var br=document.createElement('br');
x=document.getElementById('ndhead');x.innerHTML+=t["overall"]["ndhead"]; x.appendChild(br);x.innerHTML+="CSE Department Head";
x=document.getElementById('nfhead');x.innerHTML+=t["overall"]["nfhead"]; x.appendChild(br);x.innerHTML+="FACE Chairperson";
x=document.getElementById('nsec');x.innerHTML=t["team"]["nsec"]+"<br>"+"Seceratry"+"<br>"+x.innerHTML; 
x=document.getElementById('ncosec');x.innerHTML=t["team"]["ncosec"]+"<br>"+"Co-Seceratry"+"<br>"+x.innerHTML;
x=document.getElementById('nsecacm');x.innerHTML=t["acm"]["nacmsec"]+"<br>";
x=document.getElementById('nseccsi');x.innerHTML=t["csi"]["ncsisec"]+"<br>";
x=document.getElementById('nseccode');x.innerHTML=t["code"]["ncodesec"]+"<br>";
x=document.getElementById('nsecacmw');x.innerHTML=t["acmw"]["nacmwsec"]+"<br>";
x=document.getElementById('ncosecacm');x.innerHTML=t["acm"]["ncoacm"]+"<br>";
x=document.getElementById('ncoseccsi');x.innerHTML=t["csi"]["ncocsi"]+"<br>";
x=document.getElementById('ncoseccode');x.innerHTML=t["code"]["ncocode"]+"<br>";
x=document.getElementById('ncosecacmw');x.innerHTML=t["acmw"]["ncoacmw"]+"<br>";
x=document.getElementById('acmf');x.innerHTML+=t["acm"]["nacmfaculty"]; x.appendChild(br);x.innerHTML+=t["acm"]["cacmfaculty"];
x=document.getElementById('acms');x.innerHTML+=t["acm"]["nacmsec"]; x.appendChild(br);x.innerHTML+=t["acm"]["cacmsec"];
x=document.getElementById('acmc');x.innerHTML+=t["acm"]["ncoacm"]; x.appendChild(br);x.innerHTML+=t["acm"]["ccoacm"];
x=document.getElementById('csif');x.innerHTML+=t["csi"]["ncsifaculty"]; x.appendChild(br);x.innerHTML+=t["csi"]["ccsifaculty"];
x=document.getElementById('csis');x.innerHTML+=t["csi"]["ncsisec"]; x.appendChild(br);x.innerHTML+=t["csi"]["ccsisec"];
x=document.getElementById('csic');x.innerHTML+=t["csi"]["ncocsi"]; x.appendChild(br);x.innerHTML+=t["csi"]["ccocsi"];
x=document.getElementById('acmwf');x.innerHTML+=t["acmw"]["nacmwfaculty"]; x.appendChild(br);x.innerHTML+=t["acmw"]["cacmwfaculty"];
x=document.getElementById('acmws');x.innerHTML+=t["acmw"]["nacmwsec"]; x.appendChild(br);x.innerHTML+=t["acmw"]["cacmwsec"];
x=document.getElementById('acmwc');x.innerHTML+=t["acmw"]["ncoacmw"]; x.appendChild(br);x.innerHTML+=t["acmw"]["ccoacmw"];
x=document.getElementById('codef');x.innerHTML+=t["code"]["ncodefaculty"]; x.appendChild(br);x.innerHTML+=t["code"]["ccodefaculty"];
x=document.getElementById('codes');x.innerHTML+=t["code"]["ncodesec"]; x.appendChild(br);x.innerHTML+=t["code"]["ccodesec"];
x=document.getElementById('codec');x.innerHTML+=t["code"]["ncocode"]; x.appendChild(br);x.innerHTML+=t["code"]["ccocode"];
x=document.getElementById('nacmf');x.innerHTML+=t["acm"]["nacmfaculty"]; x.appendChild(br);x.innerHTML+="ACM & ACM-W Incharge";
x=document.getElementById('ncsif');x.innerHTML+=t["csi"]["ncsifaculty"]; x.appendChild(br);x.innerHTML+="CSI Incharge";
//x=document.getElementById('nacmwf');x.innerHTML+=t["acmw"]["nacmwfaculty"]; x.appendChild(br);x.innerHTML+="ACM-W Incharge";
x=document.getElementById('ncodef');x.innerHTML+=t["code"]["ncodefaculty"]; x.appendChild(br);x.innerHTML+="Codechef Incharge";
document.getElementById("cdhead").setAttribute("href","mailto:"+t["overall"]["cdhead"]+"?");
$('#cdhead').text(t["overall"]["cdhead"]);
document.getElementById("cfhead").setAttribute("href","mailto:"+t["overall"]["cfhead"]+"?");
$('#cfhead').text(t["overall"]["cfhead"]);
document.getElementById("csec").setAttribute("href","tel:"+t["team"]["csec"]);
$('#csec').text(t["team"]["csec"]);
document.getElementById("ccosec").setAttribute("href","tel:"+t["team"]["ccosec"]);
$('#ccosec').text(t["team"]["ccosec"]);
document.getElementById("cacmf").setAttribute("href","mailto:"+t["acm"]["cacmfaculty"]+"?");
$('#cacmf').text(t["acm"]["cacmfaculty"]);
document.getElementById("ccsif").setAttribute("href","mailto:"+t["csi"]["ccsifaculty"]+"?");
$('#ccsif').text(t["csi"]["ccsifaculty"]);
document.getElementById("ccodef").setAttribute("href","mailto:"+t["code"]["ccodefaculty"]+"?");
$('#ccodef').text(t["code"]["ccodefaculty"]);
//Team Members
for(var i=1;i<=t["team"]["n"];i++){
x=document.getElementById('team');x.innerHTML+='<figure><img src="'+t["team"]["p"+i]+'"><figcaption>'+t["team"]["n"+i]+"<br>"+'</figcaption></figure>';
}
    });
}());
});
$(".icon").click(function(){
  $('html,body').animate({
        scrollTop: $(".homepage").offset().top},
        'slow');
});
$("#down").click(function() {
    $('html,body').animate({
        scrollTop: $(".upcoming").offset().top},
        'slow');
});

$("#abtus").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});
$("#events").click(function() {
    $('html,body').animate({
        scrollTop: $(".upcoming").offset().top},
        'slow');
});
$("#clubs").click(function() {
    $('html,body').animate({
        scrollTop: $(".club").offset().top},
        'slow');
});
$("#gal").click(function() {
    $('html,body').animate({
        scrollTop: $(".cont").offset().top},
        'slow');
});
$("#tanda").click(function() {
    $('html,body').animate({
        scrollTop: $(".core").offset().top},
        'slow');
});
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
  document.getElementById("load").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*Start of Gallery*/
$(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true
  });
});
// Inline popups