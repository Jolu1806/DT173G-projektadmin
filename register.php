<?php
include ("includes/config.php");
include("includes/header.php");
include("classes/Users.class.php");

if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $register = new Users();

            if($register->registerUser($username, $password)){
                $message = "<p class='success'>Tack för din registrering! <a href='login.php'>Klicka här</a> för att komma till inloggning.</p>";
            }else{
                $message = "<p class='error'>Fel vid registrering, vänligen försök igen.</p>";
            }



}


?>
    <h1>Registrering</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">

            <?php if(isset($message)){
                echo "<div class='message'>" . $message . "</div>";
            }
            ?>

        <label for="username"><h3>Användarnamn:</h3></label>
        <input type="text" name="username" value="" placeholder="Användarnamn">

        <label for="password"><h3>Lösenord:</h3></label>
        <input type="password" name="password" value="" placeholder="Lösenord">
        <button type="submit" name="submit">Submit</button>
    </form>
    <?php include("includes/footer.php");
?>
