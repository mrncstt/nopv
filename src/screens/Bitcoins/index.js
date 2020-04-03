import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { parseISO, format, getTime } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import News from '../../components/News';
import Loading from '../../components/Loading';

import api from '../../services/api'

import { Table } from '../../styles/stylesTable';
import '../../styles/styles.css'

import {
  getBitcoinsRequest,
} from '../../store/modules/bitcoin/actions';

const api_key = '52659f2d220e8e6b65f8388bc6139088e4186ff850934b2ecc70a3f2cfb541b0';

export default function Bitcoins() {
  const dispatch = useDispatch();

  const [bitcoins, setBitcoins] = useState([]);

  useEffect(() => {
    async function loadBitcoins() {

      const response = await api.get(`/data/index/histo/day?indexName=MVDA&limit=10&api_key=${api_key}`);

      const data = response.data.Data.map(bitcoin => ({
        ...bitcoin,
        time: format(Date.now(bitcoin.time),
          "dd 'de' MMMM 'de' Y",
          {
            locale: ptBR,
          }
        ),
      }));

      setBitcoins(data);

      console.log(data);
    }
      loadBitcoins();

  }, [])

 
  useEffect(() => {
    dispatch(getBitcoinsRequest());
  }, [dispatch]);

  return (
    <div className="main-content">
      
      <h2>Datas Bitconis</h2>
      <div><Link className="back" to="/">Back</Link></div>

      <div className="container">

      <Table>
      <section>
        {bitcoins.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th align="center">Open</th>
                <th align="center">High</th>
                <th align="center">Low</th>
                <th align="center">Close</th>
                <th align="center">Time</th>
              </tr>
            </thead>
            <tbody>
              {bitcoins.map((bitcoin, index) => (
                <tr key={index}>
                  <td align="center">{bitcoin.open}</td>
                  <td align="center">{bitcoin.high}</td>
                  <td align="center">{bitcoin.low}</td>
                  <td align="center">{bitcoin.close}</td>
                  <td align="center">{bitcoin.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Loading />
        )}
      </section>
      </Table>

      <section id="news">
        <h2 class="news">Last news Bitcoins</h2>

        <News />
      </section>
      
      </div>

      <div><Link className="back" to="/">Back</Link></div>
      
    </div>
  );
}