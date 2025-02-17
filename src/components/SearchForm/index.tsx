import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import {
  CustomPlaceholder,
  SearchFormContainer,
  SearchFormInput,
  SearchIcon,
  SlashBox,
} from "@/components/SearchForm/styles";
import { usePosts } from "@/hooks/usePosts";
import { searchFormSchema, SearchFormType } from "@/schemas/searchFormSchema";

export function SearchForm() {
  const searchPosts = usePosts((context) => context.searchPosts);

  const { register, handleSubmit, setFocus, control } = useForm<SearchFormType>(
    {
      resolver: zodResolver(searchFormSchema),
    }
  );

  const query = useWatch({ control, name: "query" });

  async function handleSearchPosts(data: SearchFormType) {
    await searchPosts(data.query);
  }

  useEffect(() => {
    const focusQueryOnSlash = (event: KeyboardEvent) => {
      if (event.key !== "/") return;

      event.preventDefault();
      setFocus("query");
    };

    window.addEventListener("keydown", focusQueryOnSlash);

    return () => window.removeEventListener("keydown", focusQueryOnSlash);
  }, [setFocus]);

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchIcon>
        <MagnifyingGlass />
      </SearchIcon>

      <SearchFormInput aria-label="Type / to search" {...register("query")} />

      {!query && (
        <CustomPlaceholder>
          Type <SlashBox>/</SlashBox> to search
        </CustomPlaceholder>
      )}
    </SearchFormContainer>
  );
}
