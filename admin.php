<?php
include_once('includes/config.php');
if (!isset($_SESSION['username'])) {
  header('Location: login.php');
  exit();
}


include_once("includes/header.php");
$username = $_SESSION['username'];
$users = new Users();
if (isset($_POST['logout'])) {
  $users->logoutUser();
  header("Location: logout.php");
}
?>
<form method="post" action="admin.php" class="form-signin">
  <h1>Välkommen <?= $username ?>!</h1>
  <a type="submit" href="logout.php" class="btn btn-lg btn-primary btn-block">Logga ut</a>
  <!-- <input type="submit" name="logout" value="Logga ut" class="btn btn-lg btn-primary btn-block"> -->
</form>
<div class="border-top my-5"></div>
<div class="container">
  <h1 class="work cv-title">Work</h1>

  <table class="table table-hover table">
    <thead class="table-head">
      <tr>
        <th>Datum</th>
        <th>Företag</th>
        <th>Titel</th>
        <th>Ändra</th>
        <th>Radera</th>
      </tr>
    </thead>
    <tbody id="work-list">

    </tbody>
    <tr>
      <td colspan="5"><a onclick="addWork()" class="update text-center "><i class="fa fa-plus fa-2x"></i></a></td>
    </tr>
  </table>
  <form class="form-inline" id="add-work">
  </form>
  <form class="form-inline" id="work-form">

  </form>

</div>

<div class="border-top my-5"></div>
<div class="container">

  <h1 class="work cv-title">Education</h1>

  <table class="table table-hover table-fixed">
    <thead class="table-head">
      <tr>
        <th>Datum</th>
        <th>Skola</th>
        <th>Program</th>
        <th>Ändra</th>
        <th>Radera</th>
      </tr>
    </thead>
    <tbody id="education-list">
    </tbody>
    <tr>
      <td colspan="5"><a onclick="addEducation()" class="update text-center "><i class="fa fa-plus fa-2x"></i></a></td>
    </tr>

  </table>
  <form class="form-inline" id="add-education">
  </form>
  <form class="form-inline" id="education-form">

  </form>
</div>
<div class="border-top my-5"></div>
<div class="container">
  <h1 class="work cv-title">Projekt</h1>

  <div class="card-deck mb-3" id="project-list">

  </div>

  <div class="container my-5">
    <a onclick="addProject()" class="update text-center "><i class="fa fa-plus fa-2x"></i></a>
  </div>

  <form class="form-inline justify-content-between align-content-between flex-wrap" id="add-project">
  </form>
  <form class="form-inline my-5" id="project-form">

  </form>
</div>
<div class="border-top my-5"></div>
<?php include("includes/footer.php"); ?>
