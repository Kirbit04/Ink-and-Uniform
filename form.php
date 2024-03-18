<?php
//Database entries
$email= $_POST['email'];
$hidden=$_POST['password'];

//Make database connection
$servername='localhost';
$username='root';
$psword='';
$dbname='project';
$conn = new mysqli("localhost","root","","project");

//checking if the connection works
if($conn-> connection_aborted){
    die("connection failed:" .$conn->connection_aborted);
}
else{
    $sql=("INSERT INTO users(email,password) VALUES('$email','$hidden')");
}
$sql = mysqli_query($conn,$sql);
//condition display after logging in

if($sql == true){
    echo "Records saved!";
    header('Location: index.html');
    exit;
}
else{
    echo "No change in database";
}

?>