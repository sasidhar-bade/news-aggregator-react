import { useEffect, useState } from "react";
import { getTopHeadlines } from "../api/newsApi";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getTopHeadlines();

                setNews(response.data.articles || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                Top Headlines
            </h2>

            <div className="row">
                {news.map((article, index) => (
                    <div
                        key={index}
                        className="col-lg-4 col-md-6 mb-4"
                    >
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;