import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import TodosContainer from "../components/TodosContainer/TodosContainer";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="wrapper">
        <TodosContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
