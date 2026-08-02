"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { searchProducts, type Product } from "@/lib/products";

export function SiteSearch() {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    setResults(searchProducts(query));
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (results[0]) {
      window.location.href = results[0].url;
    }
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && results[0]) {
      event.preventDefault();
      const first = document.getElementById(`${listId}-0`);
      first?.focus();
    }
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-label="Search Nabhi offerings"
        className="grid size-9 place-items-center rounded-full border border-[#d8e0d5] bg-white/70 text-[#31543a] transition-colors hover:border-[#a3e635] hover:bg-[#cde0b8]/40"
        onClick={() => {
          setOpen((value) => !value);
          queueMicrotask(() => inputRef.current?.focus());
        }}
        type="button"
      >
        {open ? <X className="size-3.5" /> : <Search className="size-3.5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.6rem)] z-50 w-[min(22rem,calc(100vw-2rem))] border border-[#d8e0d5] bg-[#f7f6f1] p-3">
          <form onSubmit={submit}>
            <label className="sr-only" htmlFor={`${listId}-input`}>
              Search products and services
            </label>
            <input
              autoComplete="off"
              className="w-full border-b border-[#d8e0d5] bg-transparent py-2 text-sm text-[#0f1c13] outline-none placeholder:text-[#4a5b4e]/70"
              id={`${listId}-input`}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Try rag, persona, healthcare…"
              ref={inputRef}
              role="combobox"
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded={results.length > 0}
              type="search"
              value={query}
            />
          </form>

          {query.trim() ? (
            <ul className="mt-3 max-h-72 overflow-auto" id={listId} role="listbox">
              {results.length === 0 ? (
                <li className="px-1 py-3 text-xs text-[#4a5b4e]">
                  No matches. Try “rag”, “nabhi persona”, or “voice”.
                </li>
              ) : (
                results.map((product, index) => (
                  <li key={product.id} role="option">
                    <Link
                      className="block px-2 py-2.5 transition-colors hover:bg-[#cde0b8]/35 focus:bg-[#cde0b8]/35 focus:outline-none"
                      href={product.url}
                      id={`${listId}-${index}`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="block text-sm font-medium text-[#0f1c13]">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-[11px] leading-4 text-[#4a5b4e]">
                        {product.description}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          ) : (
            <p className="mt-3 px-1 text-[11px] leading-4 text-[#4a5b4e]">
              Search target words for Nabhi Persona, RAG, voice, and healthcare.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
