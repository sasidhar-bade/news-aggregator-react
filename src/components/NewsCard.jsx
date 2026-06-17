function NewsCard({ article }) {
    return (
        <div className="news-grid h-100 shadow-sm border-0">

            <img
                src={
                    article.urlToImage ||
                    "https://via.placeholder.com/400x250"
                }
                alt=""
                className="card-img-top"
                style={{
                    height: "220px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body">

                <h5 className="fw-bold">
                    {article.title}
                </h5>

                <p className="text-muted">
                    {article.description?.substring(0, 120)}
                </p>

            </div>

            <div className="card-footer bg-white border-0">

                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning w-100"
                >
                    Read Full Article
                </a>

            </div>

        </div>
    );
}

export default NewsCard;