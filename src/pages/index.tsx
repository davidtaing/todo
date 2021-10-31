import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import TodosContainer from "../components/TodosContainer/TodosContainer";
import Footer from "../components/Footer/Footer";
import SearchProvider from "../context/SearchContext";

const Home: NextPage = () => {
  return (
    <div>
      <SearchProvider>
        <Header />
        <main className="wrapper">
          <TodosContainer />
        </main>
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default Home;
