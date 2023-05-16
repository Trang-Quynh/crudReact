import {useEffect, useState} from "react";

const listUsers = [
    {
        id: 0,
        name: '1'
    },
    {
        id: 1,
        name: '2'
    }
]
export function Home(props){

    const [users, setUsers] = useState([]);
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [idEdit, setIdEdit] = useState(-1)


   // did mount
    useEffect(()=>{
        setUsers(listUsers)

    }, []);

    const add = () =>{
        let user = {
            id: id,
            name: name
        }
        let newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers)
        setName('')
        setId('')
    }

    const deleteFunction = (id) =>{
        let newUsers = [...users]
        let index = -1;
        for (let i = 0; i < newUsers.length; i++) {
            if(newUsers[i].id === id){
                index = i;
            }
        }
        if (index >= 0) {
            newUsers.splice(index, 1);
            setUsers(newUsers);
        }
    }


    const showForm = (item) =>{
       return (
            <>
                <input value={item.id} onChange={(e) => setId(e.target.value)} type="text" />
                <input value={item.name} onChange={(e) => setName(e.target.value)} type="text" />
                <button onClick={(e) => updateFunction(item.id)}>Submit</button>
            </>

        )

    }



    const updateFunction = (id) =>{
        let newUsers = [...users]
        let user = {
            id: id,
            name: name
        }
        let index = -1;
        for (let i = 0; i < newUsers.length; i++) {
            if(newUsers[i].id === id){
                index = i;
            }
        }
            newUsers[index] = user;
            setUsers(newUsers);
            setIdEdit(!idEdit)
    }
    return(
        <>

            <h1>hello</h1>
            <input value={id} onChange={(e)=>{setId(e.target.value)}} type="text"/><br/>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><br/>
            <button onClick={add}>Add</button>
            {
                users.map(item =>(
                    <div key={item.id} >
                            <p>{item.id}. {item.name}</p>
                            <button onClick={(e) =>{ deleteFunction(item.id)}}>Delete</button>
                            <button onClick={(e) =>{setIdEdit(item.id)}}>Update</button>
                            { (idEdit == item.id) ? showForm(item) : <></> }
                    </div>
                ))
            }
        </>

    )




}

