import React from 'react'
import HorizontalText from './HorizontalText'
import moment from 'moment'

function Profile({ userData }) {
  const { owner } = userData[0]
  const profileUrl = owner.avatar_url
  const githubUserName = owner.login
  const githubProfileLink = owner.html_url

  return (
    <div className="profileCard">
      <div className="cardHeader">
        <img
          className="userAvatar"
          src={profileUrl ?? 'https://links.papareact.com/gll'}
          alt=""
        />
        <div className="info">
          <p className="title">
            Github link:&nbsp;
            <a href={githubProfileLink} target="_blank" rel="noreferrer">
              <b>{githubUserName}</b>
            </a>
          </p>
          <HorizontalText
            title="Total Repositories"
            subTitle={userData.length}
          />
        </div>
      </div>
      <div className="repolist">
        <p className="repolistTitle">Repositories</p>
        {userData.map((repo, index) => {
          return (
            <div>
              <p className="listItem" key={repo.id}>
                {index + 1} - {repo.name}
              </p>
              <div style={{ marginLeft: '24px' }}>
                <HorizontalText
                  title="Created"
                  subTitle={moment(repo.created_at).format('MMMM Do YYYY')}
                />
                <HorizontalText
                  title="Default Branch"
                  subTitle={repo.default_branch}
                />
                <HorizontalText
                  title="Open Issues"
                  subTitle={repo.open_issues_count}
                />
                <p>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    Github link
                  </a>
                </p>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                    Live Site
                  </a>
                )}

                {repo.topics.length > 0 && (
                  <p>
                    Topics -
                    {repo.topics.map((t) => (
                      <li>{t}</li>
                    ))}
                  </p>
                )}
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile
