admin/classes/User.class.php
- 
I denna fil hanteras funktioner som Registrering, logga in samt logga ut

**URLE, URLP, URLW** är i detta fall länkad till det lokala Apiét

admin/includes/config.php
-
I denna fil finns anslutningsuppgifter till db, i detta fall den lokala databasen

admin/includes/footer.php
-
I denna fil finns HTML för footer med link till main.js
admin/includes/header.php
-
I denna fil finns HTML för header link till bootstrap som jag har valt att köra. 

admin/js/main.js
-
Alla funktioner för kontakt med api finns i denna fil
```

//Variabler
const urlE = 'http://localhost/projekt/api/education.php/education/';
const urlP = 'http://localhost/projekt/api/projects.php/projects/';
const urlW = 'http://localhost/projekt/api/work.php/work/';
```

admin/admin.php
-
Vy för inloggning av admingränssnittet

admin/login.php
-
Vy för inloggning till admingränssnittet

admin/logout.php
-
Hanterar så att sessionen avbryts vid utloggning

admin/register.php
-
Hanterar vy för registrering utav ny användare



```

//Variabler
const urlE = 'http://localhost/projekt/api/education.php/education/';
const urlP = 'http://localhost/projekt/api/projects.php/projects/';
const urlW = 'http://localhost/projekt/api/work.php/work/';
```
