import React from 'react'
import './home.css'
import { Table } from 'react-bootstrap'
const Home = () => {
  return (
    <div className='home'>
        <div className='title'>
            Medical Record Web App
        </div>
        <div className="description">
            <div className="owner-name">
                <label>Owner Name XYZ XYZ</label>
            </div>
            <div className="address">
                <label>Address </label>
            </div>
            <div className="app-details">
                <Table responsive dark>
                    <thead>
                        <tr>
                            <th>Routes</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>/</td>
                            <td>Home Page</td>
                        </tr>
                        <tr>
                            <td>/dashboard</td>
                            <td>contains two tab for Customer and Agent list</td>
                        </tr>
                        <tr>
                            <td>/add-agent</td>
                            <td>To add Agent</td>
                        </tr>
                        <tr>
                            <td>/add-customer</td>
                            <td>To add customer</td>
                        </tr>
                    </tbody>
                </Table>
                <small>*note - to add customer check if agent is already registered or no. if registered go to /add-customer else go to /add-agent to add agent first</small>
            </div>
        </div>
    </div>
  )
}

export default Home