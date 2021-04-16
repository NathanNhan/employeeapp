import React , {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
const Add = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [list, setlist] = useState([]);
    const [editElement, seteditElement] = useState(false);
    const [editId, seteditId] = useState(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !address){
            setlist([])
        } else if(name && address && editElement){
             setlist(
               list.map((item) => {
                 if (item.id === editId) {
                   return { ...item, name: name, address:address };
                 }
                 return item;
               })
             );
             setName("");
             seteditElement(false);
             seteditId(null);
        }
         else {
            const newUser = {id:uuidv4(),name:name,address:address}
            setlist([...list,newUser]);
            setName("");
            setAddress("");
        }
        
    }
    // Chức năng xóa 
    const deleteItem = (id)=>{
        
        let newUser = list.filter((item)=>item.id !== id);
        setlist(newUser);
        
    }
    // chức năng sửa và update
    const editItem = (id) => {
      const editItem = list.find((item) => item.id === id);
      seteditElement(true);
      seteditId(id);
      setName(editItem.name);
      setAddress(editItem.address);
    };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="disabledTextInput">Name</label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="please enter name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="disabledSelect">Address</label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="please enter address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className={editElement ? 'btn btn-warning' : 'btn btn-primary'}>
                {editElement ? 'Update' : 'Submit'}
              </button>
            </div>
          </fieldset>
        </form>
        <div className="container">
          <h2>Striped Rows</h2>
          <p>The .table-striped class adds zebra-stripes to a table:</p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>name</th>
                <th>address</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>
                      <span
                        className="mx-2 text-success"
                        onClick={() => editItem(item.id)}
                      >
                        <i className="fas fa-pen"></i>
                      </span>{" "}
                      <span
                        className="mx-2 text-danger"
                        onClick={() => deleteItem(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Add
