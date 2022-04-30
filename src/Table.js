import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Table.css'

function Table() {
    const [table, setTable] = useState([]);

    useEffect(() => {
        const unsub = db.collection('table').onSnapshot(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTable(items);
        });
        return () => {
            unsub();
        };
    },[])
    console.log(table)
  return (
    <table className='table'>
        <tr>
            <th>
                Name
            </th>
            <th>
                Email
            </th>
            <th>
                Contact
            </th>
        </tr>
        
        {
            table.map(item => {
                return(<tr>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Contact}</td>
                </tr>
            )})
        }

    </table>
  )
}

export default Table