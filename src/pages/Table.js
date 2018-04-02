import React, { Component } from 'react';
import { sortable } from 'react-sortable';

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

    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    fetch('http://54.173.199.0:5555/test')
      .then(resp => resp.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error(error.message));
  }

  sortBy(key) {
    this.setState(state => ({
      data: state.data.sort(
        (a, b) =>
          this.state.direction[key] === 'asc'
            ? a[key] < b[key] ? -1 : 1
            : a[key] > b[key] ? -1 : 1
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
      }
    }));
  }

  render() {
    let data = this.state.data;

    return (
      <div>
        <h2>My Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                <button
                  onClick={() => this.sortBy('site_base_url')}
                  className="btn btn--plain"
                >
                  site_base_url
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.sortBy('enabled')}
                  className="btn btn--plain"
                >
                  enabled
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.sortBy('last_update_timestamp')}
                  className="btn btn--plain"
                >
                  last_update_timestamp
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) =>
              <tr key={i}>
                <td>
                  {row.site_base_url}
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
      </div>
    );
  }
}

export default Table;
