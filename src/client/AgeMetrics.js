
import axios from 'axios';
import { useEffect, useState } from 'react';
export const AgeMetrics = ({ item }) => {
    const [users, setUsers] = useState([])
    const [apiError, setApiError] = useState(false)

    const fetchUsers = async () => {
        try {
            const data = await axios({ method: 'GET', url: 'users/age', params: { item } })
            setUsers(data.data)
        } catch (e) {
            setApiError(true)
        }
    }
    useEffect(() => {
        if(!!item){
            fetchUsers()
        }
        
    }, [item])
    return <> {!apiError ? <div>
        <table class="table table table-hover table-inverse table-responsive">
            <thead>
                <tr>
                    <th>Age</th>
                    <th>Count</th>

                </tr>
            </thead>
            <tbody>
                {users.map(data => {
                    return <tr key={Math.random()}>
                        <td scope="row">{data.age}</td>
                        <td>{data.count}</td>

                    </tr>
                })
                }

            </tbody>
        </table>
        
    </div> : <div>Problem processing request</div>}
    </>

}