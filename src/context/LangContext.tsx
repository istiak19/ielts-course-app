import { createContext, useContext } from "react";

export const LangContext = createContext<{ lang: string, setLang: (lang: string) => void }>({
    lang: "bn",
    setLang: () => { },
});

export const useLang = () => useContext(LangContext);