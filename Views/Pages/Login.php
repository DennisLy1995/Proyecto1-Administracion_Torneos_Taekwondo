<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../styles/Login.css">
    <title></title>
  </head>
  <body>
    <div id="Page">
      <div class="TituloPaginas">
        <div>
          <h1>Login</h1>
        </div>
      </div>
        <form class="FormularioLogin" onsubmit="return enviarFormularioLogin()">
          <label for="email">Email</label>
          <input name="email" type="email" />
          <label for="password">Password</label>
          <input name="password" type="password" />
          <input type="submit" />
        </form>
      </div>
    <script src="../js/jquery-3.2.1.js"></script>
    <script src="/js/Login/LogicaNegocioLogin.js"></script>
    <script src="/js/Site.js"></script>
  </body>
</html>