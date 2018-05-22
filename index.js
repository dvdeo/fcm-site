var firebaseRoot;
$(document).ready(function(){
    
    firebaseRoot = firebase.database().ref();
    getChild(firebaseRoot);
});
//get child
function getChild(firebaseRoot){
    var email = document.getElementById("email");
    var firebaseEmailRef = firebaseRoot.child("Users/user_01/Email");
    firebaseEmailRef.on('value', function(datasnapshot){
        console.log(datasnapshot.val());
        email.innerText = datasnapshot.val();
    }); 
}
//get database
function getDB(){
    var rootRef = firebase.database().ref().child("Users");
    rootRef.on("child_added", snap=>{
        var name = snap.child("Name").val();
        var email = snap.child("Email").val();
        console.log(name);
        console.log(email);
    });
}
// import db
function importDb(){
    var txtVal = document.getElementById('txtVal').value;

    var firebaseRef = firebase.database().ref();
    
    firebaseRef.child("Text").set(txtVal);
}