
var fileName = "";

$("body").css("transition","all 3s");
var arr = ["#fffff0","#f2ddc3", "#a8b9bd", "#bac7a7"];
function changeColor(){
	// selects a random hex code for the background color
   $("body").css({
        backgroundColor : arr[parseInt(Math.random() * 4)]
      });
}
changeColor();
setInterval(changeColor,100000);
// changes ever 100 seconds




// grabs info from the html file based on their ID
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// failed server attempt
$(document).ready(function() {
    $("#myBtn").click(function() {
    	// Grab filename somehow
    	fileName = "journal_1.txt";
    	console.log("fug");
        $.ajax({
            url : fileName,
            dataType: "text",
            success : function (data) {
                $(".testDiv").html(data);
            }
        });
    });
});