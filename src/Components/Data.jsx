import ProductForm from "./ProductForm"
import ProductListing from './ProductListing';
import React from 'react';


function Data() {
    const [allProduct, setAllProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const [lastPage, setLastPage] = React.useState();

    const addToDB = async (productDetail) => {
        try {
            await fetch(`http://localhost:4000/products`, {
                method: "POST",
                body: JSON.stringify(productDetail),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            getProduct();
        } catch (error) {
            setError(true)
        }
    };

    const getProduct = async () => {
        try {
            setLoading(true);
            let res = await fetch(`http://localhost:4000/products?_page=${page}&_limit=5`)
            let data = await res.json();
            setAllProduct(data);

            let last = res.headers.get("X-Total-Count");
            setLastPage(Math.ceil(last / 5));

        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }
    async function deleteItem(id) {
        try {
            await fetch(`http://localhost:4000/products/?${id}`, {
                method: "DELETE"
            });
            getProduct(`http://localhost:4000/products?_page=${page}&_limit=5`);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSort = () => {
        getProduct(`http://localhost:4000/products?_page=${page}&_limit=5&_sort=price`)
    }
    const handlePage = (value) => {
        setPage(page + value);
    }

    React.useEffect(() => {
        getProduct();
    }, [page]);
    return (
        <>
            <ProductForm addToDB={addToDB} />
            {loading ? (<h1>Loading Data...</h1>) :
                error ? (<h1>Error Occur...</h1>) :
                    <ProductListing
                        allProduct={allProduct}
                        handlePage={handlePage}
                        page={page}
                        lastPage={lastPage}
                        handleSort={handleSort}
                       
                        deleteItem={deleteItem} />
            }
        </>
    );
}

export default Data;