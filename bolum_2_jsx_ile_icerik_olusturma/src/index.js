// 1) React ve ReactDOM kütüphanelerini içe aktarma
import React from "react";
import ReactDOM from "react-dom/client";

// 2) ID'si root olan bir div'e referans alın
const el = document.getElementById("root")

// 3) React'e o elementi kontrol etmesini söyleyin.
const root = ReactDOM.createRoot(el)

// 4) Bir bileşen oluşturma
function App() {
    return <h1>Merhaba,Dünya!</h1>
}

// 5) Bileşeni ekranda gösterme
root.render(<App/>)