<?php
class Users
{
    private $db;
    private $username;
    private $password;

    //Constructor
    public function __construct(){
        //Connect to db
        $this->db = new mysqli(DBHOST, DBUSER, DBPASS, DBDATABASE);
        if($this->db->connect_errno > 0){
            die("Fel vid anslutning: " . $this->db->connect_error);
        }
    }

    //Registrera ny användare
    public function registerUser($username, $password){

        $username = $this->db->real_escape_string($username);
        $password = $this->db->real_escape_string($password);
        
        $sql = "INSERT INTO users(username, password) VALUES('$username', '$password')";
        $result = $this->db->query($sql);
        return $result;
    }

    //Logga in användare

    public function loginUser($username, $password){
        $username = $this->db->real_escape_string($username);
        $password = $this->db->real_escape_string($password);

        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $this->db->query($sql);

        if($result->num_rows > 0){
            $_SESSION['username'] = $username;
            return true;
        } else{
            return false;
        }
    }

    // //logga ut
    // public function logoutUser(){
    //     session_unset();
    //     session_destroy();
    //     header("location:login.php");
    //     exit();
    // }
}
