import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// API_KEY 에 본인 API 키를 넣어주세요!
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        let endpoint = "";
        if (category === "all") {
          endpoint = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=1a42460239d5425e998c257c9efbc5d3`;
        } else if (category === "apple" || category === "tesla") {
          // "애플" 또는 "테슬라" 카테고리는 해당 키워드로 원문 기사를 불러옴
          endpoint = `https://newsapi.org/v2/everything?q=${category}&apiKey=1a42460239d5425e998c257c9efbc5d3`;
        } else {
          // 기존 카테고리는 한국(KR) 기사를 불러옴
          endpoint = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=1a42460239d5425e998c257c9efbc5d3`;
        }

        const response = await axios.get(endpoint);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
