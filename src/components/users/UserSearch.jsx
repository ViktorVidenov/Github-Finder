import { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

function UserSearch() {
    const [text, setText] = useState('')

    const { users, searchUsers, clearUsers } = useContext(GithubContext);

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search"
                                value={text}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserSearch