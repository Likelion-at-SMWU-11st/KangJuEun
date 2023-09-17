import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
  {
    name: "tesla",
    text: "테슬라",
  },
  {
    name: "apple",
    text: "애플",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    /* active 상태일 때의 스타일 */
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;

    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1.5rem;
  }
`;

const Categories = ({ onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          to={c.name === "all" ? "/" : `/${c.name}`}
          onClick={() => onSelect(c.name)} // 카테고리 클릭 시 onSelect 호출
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
