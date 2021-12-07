import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const LIst = (props) => {
    console.log("compeleted",props.compeleted);
    return (
    <div className="container">   
    <div className="row"> 
    <div className="col-md-8 mx-auto d-flex justify-content-between mt-3"> 
        <h3 className="text-light" style={{textDecoration : props.compeleted ? "line-through" : null}}>{props.text}</h3> 
        <div>
        <button className="btn btn-warning" onClick={() => props.cutIt(props.id)}>✔</button>
        <button className="btn btn-danger" onClick={() => props.onselect(props.id)}>✖</button></div>
    </div>
    </div>
    </div>
    );
}

export default LIst;
