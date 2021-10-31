import { createContext, useState } from "react";

const SearchContext = createContext({
  searchFilter: "",
  setSearchFilter: (searchFilter: string) => {},
});

const SearchProvider = ({ children }: any) => {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
