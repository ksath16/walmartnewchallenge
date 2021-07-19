import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AgeMetrics } from './AgeMetrics';




export const ItemsDropDown = () => {
    const [usersItems, setUsersItems] = useState([])
    const [apiError, setApiError] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')

    const onChange = (d) => {
        setSelectedItem(d)
    }

    const fetchUsersItems = async () => {
        try {
            const data = await axios.get('usersItems')
            setUsersItems(data.data)
        } catch (e) {
            setApiError(true)
        }
    }
    useEffect(() => {
        fetchUsersItems()
    }, [])

    return <>
        <h2>Age Demographic of Users with  {selectedItem}</h2>

        <> <Dropdown onSelect={onChange}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                select Item
</Dropdown.Toggle>

            <Dropdown.Menu >
                {usersItems.map(item => {
                    return <Dropdown.Item eventKey={item} >{item}</Dropdown.Item>
                })}

                {/* <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item >Something else</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
            <AgeMetrics item={selectedItem} />
        </>
    </>

}