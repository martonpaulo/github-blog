import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

import {
  CustomPlaceholder,
  SearchBarContainer,
  SearchBarInput,
  SearchIcon,
  SlashBox,
} from "@/components/SearchBar/styles";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SearchBarContainer>
      <SearchIcon>
        <MagnifyingGlass />
      </SearchIcon>

      <SearchBarInput
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {!inputValue && (
        <CustomPlaceholder>
          Type <SlashBox>/</SlashBox> to search
        </CustomPlaceholder>
      )}
    </SearchBarContainer>
  );
}
