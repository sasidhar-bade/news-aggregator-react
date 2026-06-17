import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchNews } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

function Search() {
    const location = useLocation();

    const query =
        new URLSearchParams(location.search)
            .get("q");

    const [news, setNews] = useState([]);

    useEffect(() => {
        if (query) {
            searchNews(query)
                .then((res) => {
                    setNews(res.data.articles);
                });
        }
    }, [query]);

    return (
        <div className="container mt-4">

            <h3>
                Search Results for "{query}"
            </h3>

            <div className="row">

                {news.map((article, index) => (
                    <div
                        key={index}
                        className="col-md-4 mb-4"
                    >
                        <NewsCard article={article} />
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Search;