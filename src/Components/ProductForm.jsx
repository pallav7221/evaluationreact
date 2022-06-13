import React from "react";
const ProductForm = ({addToDB}) =>{
    const [productDetail, setProductDetail] = React.useState({
        title: "",
        Price: "",
        gender: "",
        category:'',
        image:""
    });
    const handleChange = (e) =>{
        // console.log(e.target)
        let { name, value} = e.target;
        
        setProductDetail({ ...productDetail, [name]: value });
        
    }
    const handleSubmit = (e,productDetail) =>{
        e.preventDefault();
        addToDB(productDetail);
        setProductDetail({title: "",
            Price: "",
            gender: "",
            category: '',
            image: ""})
    }
    const { title, gender,category,price,image } = productDetail;
    return <>
        <form onSubmit={(e) => handleSubmit(e,productDetail)}>
            <label>
                Title
                <input
                    value={title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="Enter Title"
                />
            </label>
            <br />
            <label>
                Price
                <input
                    value={price}
                    onChange={handleChange}
                    name="price"
                    type="number"
                    placeholder="Enter Price"
                />
            </label>
            <br />
            <label>
                Category
                <input
                    value={category}
                    onChange={handleChange}
                    name="category"
                    type="text"
                    placeholder="Enter Category"
                />
            </label>

<br />
            <label>
                Image
                <input
                    value={image}
                    onChange={handleChange}
                    name="image"
                    type="text"
                    placeholder="Enter Url"
                />
            </label>
            <br />
            <label>Gender</label>
            <select value={gender} onChange={handleChange} name="gender">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            
            </select>
           <br />
            <input id="submitBtn" type="submit" />
        </form>
    </>
}

export default ProductForm;