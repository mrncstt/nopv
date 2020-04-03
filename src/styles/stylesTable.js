import styled from 'styled-components';

export const Table = styled.div`
  min-height: 100%;
  background: #eee;
  width: 100%;

  table {
    color: #444;
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        text-align: left;
        background: rgba(51, 68, 149, 1);
        align-items: center;
        justify-content: center;
        color: #ffffff;
      }

      th {
        padding: 10px;
        text-transform: uppercase;
      }
    }

    tbody {
      tr {
        border-bottom: 1px dotted #996430;
        background: #ffffff;
        color: #334495;
        transition: all 0.07s ease;

        &:hover {
          background: rgba(51, 68, 149, 0.8);
          border-top: 1px dotted #996430;
          color: #ffffff;
          transition: all 0.07s ease;
          padding-left: 10px;
        }
      }

      td {
        padding: 14px 0;
        transition: all 1s ease;
      }

      a {
        color: #334495;
      }
    }
  }
`;
