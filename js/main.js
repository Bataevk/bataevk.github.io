let tg = window.Telegram.WebApp;
        
e_username = document.querySelector(".username");
e_icon = document.querySelector(".icon");

alert(tg.initDataUnsafe.user.username);


e_username.inner_HTML =  tg.initDataUnsafe.user.username;
if (typeof tg.initDataUnsafe.user.photo_url != undefined ){
    e_icon.src = tg.initDataUnsafe.user.photo_url;
}
tg.expand();
