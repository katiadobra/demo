import React, { Component } from 'react';

// const tr =

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://54.173.199.0:5555/test')
      .then(resp => resp.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error(error.message));
  }

  render() {
    let data = this.state.data;

    return (
      <div>
        <h2>My Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>site_base_url</th>
              <th>enabled</th>
              <th>last_update_timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row =>
              <tr>
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
