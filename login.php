<?php
include_once ('includes/config.php');
if(isset($_POST['username'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $users = new Users();
    if($users->loginUser($username, $password)){
        // $_SESSION['username'] = $username;
        header("Location: admin.php");
    }else{
        echo "<div class='alert alert-danger'>Felaktigt användarnamn eller lösenord. Vänligen försök igen.</div>";

    }
}
include_once ('includes/header.php');
$page_title = "Administration";
?>
<div class="container-fluid">
        <form method="post" action="login.php" class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Logga in</h1>
            <label for="username"  class="sr-only">Username</label>
            <input type="text" name="username"  class="form-control" placeholder="Användarnamn" required autofocus>

            <label for="password"  class="sr-only">Password</label>
            <input type="password" name="password" class="form-control" placeholder="Lösenord" required>
            <input type="submit" value="Logga in" class="btn btn-lg btn-primary btn-block">
        </form>
</div>
<div class="">
  <a href="register.php">Skapa användare</a>
</div>
<?php include("includes/footer.php");
?>
