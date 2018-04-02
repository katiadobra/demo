import React, { Component } from 'react';

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
      },
      active: !state.active
    }));
  }

  render() {
    let data = this.state.data;
    let headers = ['site_base_url', 'enabled', 'last_update_timestamp'];

    return (
      <div>
        <h2>My Data</h2>
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, index) => {
                const arrow =
                  this.state.direction[header] === 'asc'
                    ? 'is--asc'
                    : 'is--desc';
                const classes = `btn btn--plain ${arrow}`;

                return (
                  <th>
                    <button
                      onClick={() => this.sortBy(header)}
                      key={index}
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
