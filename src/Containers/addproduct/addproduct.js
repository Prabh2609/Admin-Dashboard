import React, { Component } from 'react';
import './addproduct.css';

class Addproduct extends Component{
    state={
        newProduct:{
            productName:'',
            productDescription:'',
            productCategory:'',
            expiryDate:'',
            unitsInStock:'',
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let data=JSON.parse(localStorage.getItem("Response"))
        data.productsPage.products.push(this.state.newProduct)
        console.log(data)
    }
    onInputChange=(e,name)=>{
        let tempProductName,tempProductDescription,tempProductCategory,tempExpiryDate,tempUnitsInStock;
        switch(name)
        {
            case 'productName':
                tempProductName=e.target.value
                this.setState(prevState=>({
                    newProduct:{
                        ...prevState.newProduct,
                        productName:tempProductName
                    }
                }))
                break;

            case 'productDescription':
                tempProductDescription=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    productDescription:tempProductDescription
                }
                }))
                break;
                
            case 'productCategory':
                tempProductCategory=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    productCategory:tempProductCategory
                }
                }))
                break;
            
            case 'expiryDate':
                tempExpiryDate=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    expiryDate:tempExpiryDate
                }
                }))
                break;
            
            case 'unitsInStock':
                tempUnitsInStock=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    unitsInStock:tempUnitsInStock
                }
                }))
                break;
            
            default:
                break;
        }
    }
    onImageUpload=(e)=>
    {
        let account=this.state.accountType
        let object=JSON.parse(localStorage.getItem("Response"))
        console.log(e.target.files)
        if(e.target.files && e.target.files[0])
        {
            let reader=new FileReader()
            reader.onload=(e)=>{
                let imgSrc=e.target.result
                this.setState({avatar:e.target.result})
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    render(){
        return(
            <div className="add-page">
                <div className="add-container">
                    <div>
                        <h2>Add Product</h2>
                    </div>
                    <div className="sections-con">              
                        <div className="detail-section">
                            <form className="add-form" >
                                <div>
                                    <label for="name">Product Name</label>
                                    <input id="name" name="name" type="text" required onChange={(e)=>this.onInputChange(e,'productName')}></input>
                                </div>
                                <div>
                                    <label for="description">Description</label>
                                    <textarea rows="9" required onChange={(e)=>this.onInputChange(e,'productDescription')}></textarea>
                                </div>
                                <div>
                                    <label for="category">category</label>
                                    <select id="category" className="select-cat" required onChange={(e)=>this.onInputChange(e,'productCategory')}>
                                        <option value="Select">Select Category</option>
                                        <option value="New Arrival">New Arrival</option>
                                        <option value="Most Popular">Most Popular</option>
                                        <option value="Trending">Trending</option>
                                    </select>
                                </div>
                                <div className="inputs-con">
                                <div>
                                    <label for="expiry_date">Expire Date</label>
                                    <input id="expiry_date" name="expiry_date" type="date" required onChange={(e)=>this.onInputChange(e,'expiryDate')}></input>
                                </div>
                                <div>
                                    <label for="stock">Units In Stock</label>
                                    <input id="stock" name="stock" type="number" required onChange={(e)=>this.onInputChange(e,'unitsInStock')}></input>
                                </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="img-section">
                            <div className="upload-img">
                                <i className="fas fa-cloud-upload-alt tm-upload-icon"></i>
                            </div>
                            <div>
                                <input type='file' name='pic' id='pic' accept='image/*' onChange={(e)=>this.onImageUpload(e)}/>
                                <label for='pic'>Upload new photo</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="add-pdt-btn" onClick={this.handleSubmit}>ADD PRODUCT NOW</button>
                    </div>
                </div>
            </div>
        )
    }
}

    export default Addproduct;