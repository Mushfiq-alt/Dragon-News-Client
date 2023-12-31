import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sports from "../SportBar/Sports";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-mushfiq-alt.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>            
            <div className="ps-4">
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-light-emphasis">{category.name}</Link>
                    </p>)
                }
                <Sports></Sports>
            </div>
        </div>
    );
};

export default LeftNav;