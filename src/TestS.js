import React, { useEffect, useState } from "react";
import "./App.css"; // Yukarıdaki CSS kodunuza uygun bir dosya adı vermelisiniz

function App() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <p>Ekranı {scrollY} piksel kaydırdınız.</p>
            <div style={{ height: "1000px" }}>Sayfanın üst kısmına uzun bir içerik ekleyin.</div>
            {scrollY >= 1000 ? (
                <div className="sticky-element">
                    {/* Sticky öğenin içeriğini buraya ekleyin */}
                    <img src="https://fastly.picsum.photos/id/481/1024/768.jpg?hmac=XvBGyBBsyz_C8j7dZVVT6BhYdzkgL2F1mrtwKagZyZQ" alt="Sabit Resim" />
                </div>
            ) : null}
            <div style={{ height: "2000px" }}>Sayfanın altına uzun bir içerik ekleyin.</div>
        </div>
    );
}

export default App;
