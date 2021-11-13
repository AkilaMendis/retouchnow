<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <script src="_js/user.js?v=0000000001"></script>

</head>
<body>
    
                        <p class="input-label">Email</p>
                        <input type="text" id="txtUserName" class="login-input">
                        <p class="input-label">Password</p>
                        <input type="text" id="txtPassword" class="login-input">
                        <br>
                        
                      

                        <button id="info-button" onClick="IsValiedData()">
                            Sign in
                        </button>



<script>
    var elem = document.getElementById("txtPassword");
    elem.onkeyup = function (e) {
        if (e.keyCode == 13) {
            IsValiedData();
        }
    }


</script>


</body>
</html>