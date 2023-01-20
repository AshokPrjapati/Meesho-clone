import React from 'react';

const Pagination = () => {
    let pages = new Array(10).fill(0).map((el,i)=>(
        <button>{i+1}</button>
    ))
    return (
        <div>
           {pages} 
        </div>
    );
}

export default Pagination;
