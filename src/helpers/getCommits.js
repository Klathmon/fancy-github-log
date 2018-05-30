import { GITHUB_API_BASE_URL } from './constants'

export default async function getCommits (repo) {
  const resp = await (await window.fetch(`${GITHUB_API_BASE_URL}/repos/${repo}/commits`)).json()

  return resp.map(({ sha, parents }) => {
    return {
      sha,
      parents: parents.map(({ sha }) => sha)
    }
  })
}
