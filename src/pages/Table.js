import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const header = ['site_base_url', 'enabled', 'last_update_timestamp'];

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      direction: {
        site_base_url: 'asc',
        enabled: 'asc',
        last_update_timestamp: 'asc'
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://54.173.199.0:5555/test')
      .then(resp => resp.data)
      .then(data => this.setState({ data }))
      .catch(error => console.error(error.message));
  }

  sortBy(key) {
    this.setState(state => ({
      data: state.data
        .slice()
        .sort(
          (a, b) =>
            state.direction[key] === 'asc'
              ? a[key] < b[key] ? -1 : 1
              : a[key] > b[key] ? -1 : 1
        ),
      direction: {
        [key]: state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    }));
  }

  render() {
    const data = this.state.data;

    return (
      <main className="content">
        <h1 className="caption">My Data</h1>
        <table className="table">
          <thead>
            <tr>
              {header.map((header, index) => {
                const arrow =
                  this.state.direction[header] === 'asc'
                    ? 'is--asc'
                    : 'is--desc';
                const classes = `btn btn--plain ${arrow}`;

                return (
                  <th key={index}>
                    <button
                      onClick={() => this.sortBy(header)}
                      className={classes}
                    >
                      {header}
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) =>
              <tr key={i}>
                <td>
                  <Link to={row.site_base_url} target="_blank">
                    {row.site_base_url}
                  </Link>
                </td>
                <td>
                  {row.enabled}
                </td>
                <td>
                  {row.last_update_timestamp}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Table;
