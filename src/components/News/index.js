import React, { useState, useEffect } from 'react';
import { parseISO, format, getTime } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import './styles.css'

import api from '../../services/api'
const api_key = '52659f2d220e8e6b65f8388bc6139088e4186ff850934b2ecc70a3f2cfb541b0';

export default function News() {
  const [newsBitcoins, setNewsBitcoins] = useState([]);

  useEffect(() => {

    async function newsBitcoins() {

      const response = await api.get(`/data/v2/news/?lang=PT&api_key=${api_key}`);

      const dataNews = response.data.Data.map(news => ({
        ...news,
        published_on: format(Date.now(news.published_on),
          "dd 'de' MMMM 'de' Y",
          {
            locale: ptBR,
          }
        ),
      }));

      setNewsBitcoins(dataNews);
      console.log(dataNews);
    }
      newsBitcoins();
  },[])

  return (
      newsBitcoins.map((news) => (
        <div className="containerNews" key={news.id}>
          <header className="header">
            <h3 className="title">{news.title}</h3> 
            <small className="published">{news.published_on}</small>
          </header>

          <div className="containerImageBody">
            <div className="image">
              <a href={news.url} alt={news.title} target="_blank">
              <img src={news.imageurl} alt={news.title} title={news.title} />
              </a>
            </div>
            <p className="body">
              <a href={news.url} alt={news.title} target="_blank">{news.body}</a>
              <br />
              <br />
              <span className="categories"><strong>Categories:</strong> {news.categories}</span>
              <br />
              <br />
              <span className="tags"><strong>Tags:</strong> {news.tags}</span>
            </p>
            
          </div>
          
        </div>
      ))
  );
}
