const BASE_URL = "http://hn.algolia.com/api/v1/search?";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link as NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Pagination, TextField, Stack, Link, PaginationItem } from "@mui/material";

import React from "react";

export const PaginationHomePage = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(parseInt(location.search?.split('=')[1]) || 1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios
      .get(BASE_URL + `query=${query}&page=${page - 1}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        console.log(data);
        setPosts(data.hits);
        setPageQty(data.nbPages);

        if (data.nbPages < page) {
          setPage(1);
          navigate('/', {replace: true});
        }
      });
  }, [query, page]);

  return (
    <>
     
        <TextField
          fullWidth
          label="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              showFirstButton
              showLastButton
              sx={{ marfinY: 3, marginX: "auto" }}
              renderItem={(item) => (
                <PaginationItem 
                    component={NavLink}
                    to={`/?page=${item.page}`}
                    {...item}
                />
              )}
            />
          )}
          {posts?.map((post) => (
            <Link key={post.objectID} className="post">
              {post.title || post.story_title}
            </Link>
          ))}
        </Stack>
     
    </>
  );
};
