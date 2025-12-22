import { useEffect, useState } from "react";
import "../styles/loader.css";

const messages = [
    "Ingredient Checker 🥕",
    "Flavor Blender 🥄",
    "Spice Adjuster 🌶️",
    "Serve with Love 🍽️",
];

export default function RecipeLoader() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % messages.length);
        }, 1800);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="loader-overlay">
            <div className="loader-card">
                <div className="pan">
                    <span className="steam s1" />
                    <span className="steam s2" />
                    <span className="steam s3" />
                </div>

                <h3 className="loader-title">FlavorFlow מבשל עבורך</h3>
                <p className="loader-message">{messages[index]}</p>
            </div>
        </div>
    );
}
