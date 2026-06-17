import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoryNews } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

function Category() {

    const { category } = useParams();

    const [news, setNews] = useState([]);

    useEffect(() => {

        getCategoryNews(category)
            .then(res => {
                setNews(res.data.articles);
            });

    }, [category]);

    return (
        <div className="container mt-4">

            <h2>{category.toUpperCase()}</h2>

            <div className="row">

                {news.map((article, index) => (

                    <div
                        key={index}
                        className="col-lg-4 col-md-6 col-sm-12 mb-4"
                    >
                        <NewsCard article={article} />
                    </div>

                ))}

            </div>

        </div>
    );
}

export default Category;