import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comic from '../../components/Comic/index';
import './index.css';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import Loader from 'react-loader-spinner';

const Comics = ({ navLoc, setNavLoc, searchComic }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchData = async (search) => {
    try {
      const response = await axios({
        url: 'http://localhost:3001/comics',
        method: 'post',
        data: {
          page: currentPage,
          limit,
          search: search || null,
        },
      });
      setTotal(response.data.total);
      setNavLoc('comics');
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData(searchComic);
  }, [currentPage, limit, searchComic]);

  let renderComics;
  if (!isLoading) {
    renderComics = data.map((comic, index) => {
      return (
        <Comic
          image={comic.thumbnail.path + '.' + comic.thumbnail.extension}
          name={comic.title}
          key={comic.id}
          style={{ color: 'white' }}
        ></Comic>
      );
    });
  }
  return (
    <div className="super-container-comics">
      <h3>Comics</h3>
      <div className="container-comics9">{isLoading ? null : renderComics}</div>
      {isLoading ? null : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1440px',
            padding: '50px 24px',
            margin: 'auto',
          }}
        >
          <Pagination
            defautlCurrent={1}
            total={total}
            onChange={(page, pageSize) => {
              setCurrentPage(page);
              setLimit(pageSize);
              console.log(page, pageSize);
            }}
          />
        </div>
      )}
      {!isLoading ? null : <Loader type="Puff"></Loader>}
    </div>
  );
};

export default Comics;
