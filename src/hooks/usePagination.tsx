'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"

export interface PaginationResult {
  hasPrev: boolean
  prevPage: () => void
  hasNext: boolean
  nextPage: () => void
  pageContent: any[]
  currentPage: number
  changePage: (n: number) => void
  totalPages: number
}

export default function usePagination(data: any[], pageSize: number = 3): PaginationResult {
  const [currentPage, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageContent, setPageContent] = useState<any[]>(data.slice(0, pageSize));

  const hasNext = currentPage < totalPages - 1;
  const hasPrev = currentPage > 0;

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [data, pageSize]);

  useEffect(() => {
    const first = pageSize * currentPage;
    const last = Math.min(first + pageSize, data.length);
    const newContent = data.slice(first, last)
    setPageContent(newContent);
  }, [currentPage, data, pageSize]);

  const nextPage = () => {
    if (hasNext) {
      setPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (hasPrev) {
      setPage(currentPage - 1);
    }
  }

  const changePage = (n: number) => {
    if (n >= 0 && n < totalPages) {
      setPage(n);
    }
  }

  return { totalPages, currentPage, changePage, nextPage, prevPage, pageContent, hasNext, hasPrev }
}