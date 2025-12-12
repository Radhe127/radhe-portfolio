import { createContext, useContext, useMemo, useState } from "react";
import Loading from "../components/Loading";

const LoadingContext = createContext(null);

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  const value = useMemo(
    () => ({ isLoading, setIsLoading, percent, setPercent }),
    [isLoading, percent]
  );

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={percent} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
}
