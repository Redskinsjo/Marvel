import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Char from '../../components/Char/index';
import './index.css';
import 'antd/dist/antd.css';
import { Pagination, message } from 'antd';
import Loader from 'react-loader-spinner';

const Characters = ({ navLoc, setNavLoc, searchChar }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  let renderChars;

  const fetchData = async (search) => {
    try {
      const response = await axios({
        url: 'https://backendmarvel.herokuapp.com/characters',
        method: 'post',
        data: {
          page: currentPage,
          limit,
          search: search || null,
        },
      });
      setTotal(response.data.total);
      setNavLoc('characters');
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  // const userSearch = async (search) => {
  //   renderChars = data.filter((char, index) => {
  //     const regex = new RegExp(search, 'i');
  //     if (regex.test(char.name)) {
  //       return char;
  //     }
  //   });
  // };

  useEffect(() => {
    fetchData(searchChar);
  }, [currentPage, limit, searchChar]);
  // useEffect(() => {
  //   console.log(1);
  //   userSearch(searchChar);
  // }, [searchChar]);

  console.log(renderChars);

  if (!isLoading) {
    renderChars = data.map((char, index) => {
      return (
        <Char
          image={char.thumbnail.path + '.' + char.thumbnail.extension}
          details={char.urls[0].url}
          name={char.name}
          id={char.id}
          key={char.id}
        ></Char>
      );
    });
  }
  // if (!isLoading && searchChar) {
  //   renderChars = data.map((char, index) => {
  //     return (
  //       <Char
  //         image={char.thumbnail.path + '.' + char.thumbnail.extension}
  //         details={char.urls[0].url}
  //         name={char.name}
  //         id={char.id}
  //         key={char.id}
  //       ></Char>
  //     );
  //   });
  // }

  return (
    <div className="super-container-characters">
      <h3>Characters</h3>
      <div className="container-characters">
        {isLoading ? null : renderChars}
      </div>
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
            }}
          ></Pagination>
        </div>
      )}
      {!isLoading ? null : <Loader type="Puff"></Loader>}
    </div>
  );
};

export default Characters;
