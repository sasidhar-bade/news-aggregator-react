import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            navigate(`/search?q=${keyword}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="/">NewsHub</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/category/technology">Technology</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/category/business">Business</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/category/sports">Sports</Link>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={handleSearch}>

                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search News"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />

                        <button
                            className="btn btn-warning"
                            type="submit"
                        >
                            Search
                        </button>

                    </form>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;