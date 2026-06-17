import axios from "axios";

const API_KEY = "bf4e788c7ff7445895fc6a8b54983126";

export const getTopHeadlines = async () => {
    return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
};

export const getCategoryNews = async (category) => {
    return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
};

export const searchNews = async (keyword) => {
    return axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`
    );
};