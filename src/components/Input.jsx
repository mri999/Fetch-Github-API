import React, { useState } from 'react'
import '../App.css'
import { API } from '../apiService'
import Profile from './Profile'

function Input() {
  const [githubUser, setGithubUser] = useState('mri999')
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(false)

  const handleFetchData = () => {
    setLoading(true)
    if (githubUser) {
      API.getUserData(githubUser)
        .then((res) => {
          setUserData(res.data)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      alert('Please enter valid user name')
    }
  }

  return (
    <div>
      <div>
        <h2>Enter GitHub username</h2>
      </div>
      <div>
        <input
          className="inputField"
          value={githubUser}
          placeholder="Github username goes here..."
          onChange={(e) => setGithubUser(e.target.value)}
        />
        <button onClick={handleFetchData} className="submitBtn">
          {loading ? 'Searching...' : 'Get Data'}
        </button>
      </div>
      {userData && <Profile userData={userData} />}
    </div>
  )
}

export default Input
