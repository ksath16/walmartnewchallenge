const { default: axios } = require("axios")
const { useEffect, useState } = require("react")

export const Users = () => {
    const [users, setUsers] = useState([])
    const [apiError, setApiError] = useState(false)

    const fetchUsers = async () => {
        try {
            const data = await axios.get('users')
            setUsers(data.data)
        } catch (e) {
            setApiError(true)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return <> {!apiError ? <div>
        <table class="table table table-striped table-inverse table-responsive">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Age</th>

                </tr>
            </thead>
            <tbody>
                {users.map(data => {
                    return <tr key={Math.random()}>
                        <td scope="row">{data.username}</td>
                        <td>{data.age}</td>

                    </tr>
                })
                }

            </tbody>
        </table>
    </div> : <div className="text-center">Problem processing request</div>}
    </>
}