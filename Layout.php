<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/Partials.css">
    <link rel="stylesheet" type="text/css" href="styles/Site.css">
    <link rel="stylesheet" type="text/css" href="styles/Tables.css">
    <script src="../js/Helpers.js"></script>
    <title></title>
    <?php
      $Scrpts = array();
    ?>

</head>
<body>
    <header class="header">

  <div class="wrap">

    <div class="logo"><a href="#"><img src="../img/Logo-FCT.png"></a></div>

    <a id="menu-icon">&#9776;</a>

    <nav id="navbar" class="navbar">

    </nav>

  </div>
</header>
    <main id="content">
        <?php
          if(isset($_GET['page']))
          {
            $page_name = $_GET['page'];
            include("Views/Pages/".$page_name.".php");
          }
          else{
            include("Views/Pages/Home.php");
          }
        ?>
    </main>
    <footer>
        <p>&copy; 2017 - Dot Software Solutions</p>
    </footer>
    <script src="../js/jquery-3.2.1.js"></script>
    <script src="../js/jquery-ui.js"></script>
    <script src="../js/Site.js"></script>
    <script src="../js/Layout/LogicaInterfazLayout.js"></script>
    <?php
      if(!empty($Scrpts)){
      foreach($Scrpts as $Scrpt)
      {
        echo "<script src='".$Scrpt."'></script>";
      }
      }
    ?>

</body>
</html>
