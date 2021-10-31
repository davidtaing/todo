import { createContext, useState } from "react";

export const SearchContext = createContext({
  searchFilter: "",
  setSearchFilter: (searchFilter: string) => {},
});

export const SearchProvider = ({ children }: any) => {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>
      {children}
    </SearchContext.Provider>
  );
};
