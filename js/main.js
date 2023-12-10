let tg = window.Telegram.WebApp;
        
e_username = document.querySelector(".username");
e_icon = document.querySelector(".icon");

e_username.inner_HTML =  tg.initDataUnsafe.user.username;
e_icon.src = tg.initDataUnsafe.user.photo_url;
tg.expand();
