import React, { useState } from 'react'
import LIst from './LIst';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [Items, setItems] = useState({});
    const [input, setinput] = useState([]);
    const [value, setValue] = useState("all");
    console.log(input);
    const inputdata = (e) => {
        const {name,value} = e.target
        // const value = e.target.value;
        console.log(name, value);
        setItems({ ...Items, [name]: value });
    }
    const inputEvent = () => {
        if (!Items.user) {
            toast.error("Please Add Items... ")
        } else {
            setinput((olditem) => {
                const newRecord = { ...Items, id: new Date().getTime(), compeleted: false }
                return ([...olditem, newRecord]);
            })
            setItems({
                user: "",
            })
        }
    }
    const deleteitem = (id) => {
        setinput((oldItems) => {
            return oldItems.filter((arrelem) => {
                return arrelem.id !== id;
            });
        })
    }
    const cutIt = (id) => {
        console.log("setItems", id);

        let dummy = input
        // console.log("dummy", dummy);
        dummy = input.map(v => {
            if (v.id === id) {
                return { ...v, compeleted: !v.compeleted }
            } else {
                return v
            }
        })
        setinput(dummy)
        // setItems = ({compeleted:true});
        // console.log(setItems);    
    }
    console.log(value);
    return (
        <>
        <div className="contact">
        <div className="container">
        <div className="row">
        <div className="col-lg-8 mx-auto mt-5">
        <div className="row">
        <div className="col-lg-6 d-flex">
            <input className="form-control" type="text" value={Items.user} onChange={inputdata} name="user" />
            <button className="btn bg-white me-1" onClick={inputEvent}>➕</button>
            <ToastContainer position="top-center"/>
        </div>
        <div className="col-lg-6">
            <select className="form-select" name='select' onChange={(e) => setValue(e.target.value)}>
                <option value="all" name="all" >All</option>
                <option value="comeleted" name="comeleted">Compeleted</option>
                <option value="Uncompelet" name="Uncompelet">Uncompelet</option>
            </select>
            </div>
        </div>
            </div>
            </div>
            </div>
                {value === "all" && input.map(v => {
                    const { id, user, compeleted } = v;
                    return (
                                <LIst                                                
                                        cutIt={cutIt}
                                        compeleted={compeleted}
                                        text={user}
                                        key={id}
                                        id={id}
                                        onselect={deleteitem}
                                            />
                                        )
                })}
                {value === "comeleted" && input.map(v => {
                    const { id, user, compeleted } = v;
                    if(v.compeleted === true){
                        return (
                                <LIst                        
                                        cutIt={cutIt}
                                        compeleted={compeleted}
                                        text={user}
                                        key={id}
                                        id={id}
                                        onselect={deleteitem}
                                    />
                                )
                    }
                })}

                {value === "Uncompelet" && input.map(v => {
                    const { id, user, compeleted } = v;
                    if(v.compeleted === false){
                        return (
                                <LIst                                              
                                        cutIt={cutIt}
                                        compeleted={compeleted}
                                        text={user}
                                        key={id}
                                        id={id}
                                        onselect={deleteitem}
                                            />
                                        )
                    }
                })}
                </div>
        </>
    )
}

export default Cart;

