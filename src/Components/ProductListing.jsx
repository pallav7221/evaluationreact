import React from "react"
const ProductListing = ({allProduct, handlePage, page, lastPage})=> {
    return <>
   
        <div>
           { allProduct.forEach((data) =>{
                return (<>
                    <h1>{data.title}</h1>
                    <img src={data.img} />
                    <h3>{data.gender}</h3>
                    <h3>{data.category}</h3>
                    <h3>{data.price}</h3>
                    <button>Delete</button>
                </>
                    
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