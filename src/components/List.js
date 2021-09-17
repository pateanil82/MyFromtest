import React, {useEffect,useState} from 'react';

function List() {
 const [users, setUsers] = useState([]);
  
useEffect(() => {
  const data = JSON.parse(localStorage.getItem("userdetails"));
  console.log(data);
  setUsers(data);
}, [])
  return (
    <div className="App">
      <table>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        
        {users && users.map((item,index)=>{
          console.log("item",item);
          return(
            <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        })}
        
      </table>
     
    </div>
  );
}

export default List;
