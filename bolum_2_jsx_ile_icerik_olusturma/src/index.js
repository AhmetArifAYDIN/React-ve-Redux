// 1) React ve ReactDOM kütüphanelerini içe aktarma
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) ID'si root olan bir div'e referans alın
const el = document.getElementById("root")

// 3) React'e o elementi kontrol etmesini söyleyin.
const root = ReactDOM.createRoot(el)

// 4) Bir bileşen oluşturma
// Prop -> Özelliklerin kısaltması
// Nesne propa yazılabilir ancak doğrudan ekrana yazdırılamaz. Yani bir değişkeni objeye eşitleyip bunu yazdıramazsınız ancak özellik olarak yazdırabilirsiniz. Örneğin style{{border: 3px solid red }} gibi.
// autofocus kullanıcı bir web sitesine ilk girdiğinde örneğin bir metin yazacak direk alabiliriz.


// JSX'e çevirmeden önce yapılacaklar:
// 1. Propları camelCase düzeninde yaz,
// 2. Sayıları obje içinde yazman gerekiyor,
// 3. Örneğin:
/*
<input spellCheck /> yazmakla <input spellCheck={true} /> // yazmak aynı şeydir
<input spellCheck={false} /> True için yine false daki gibi yapılabilir. obje içine yazıldığı unutulmamalıdır
Yukardaki örnekteki spellCheck otomatik yazım hatalarını söyleyen bir özelliktir.
*/
// 4. JSX'de class yerine className kullanılır,
// 5. JSX'de style verirken html deki gibi "" arasında gibi vermiyoruz onun yerine yukardaki gibi iki obje arasına yazıp her özelliği virgül ile ayırıyoruz ayrıca örneğin html de border-radius ise JSX'de borderRadius örneğin:
/* 
{{borderRadius: 50px, backgroundColor: red}}
*/
  

// 5) Bileşeni ekranda gösterme
root.render(<App/>)