import React from "react"
const ProductListing = ({allProduct, handlePage, page, lastPage,handleSort,deleteItem})=> {
    return <>
        <button onClick={handleSort}>SORT</button>
        
        <div>
           { allProduct.forEach((data) =>{
                return (<div key={data.id}>
                    <h1>{data.title}</h1>
                    <img src={data.img} alt="image"/>
                    <h3>{data.gender}</h3>
                    <h3>{data.category}</h3>
                    <h3>{data.price}</h3>
                    <button onClick={() => { deleteItem(data.id) }}>Delete</button>
                </div>
                    
                )
            })
        }
        
        <button onClick={() => handlePage(-1)} disabled={page === 1}>
            PREV
        </button>
        <button onClick={() => handlePage(1)} disabled={page === lastPage}>
            NEXT
        </button>
        </div>
    </>
}

export default ProductListing;