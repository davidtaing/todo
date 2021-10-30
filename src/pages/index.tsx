import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import TodosContainer from "../components/TodosContainer/TodosContainer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="wrapper">
        <TodosContainer />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
