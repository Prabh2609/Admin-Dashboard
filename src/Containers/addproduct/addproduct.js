import React, { Component } from 'react';
import classes from './addproduct.module.css';

class Addproduct extends Component{
    state={
        categories:JSON.parse(localStorage.getItem("Response")).productsPage.categories,
        newProduct:{
            name:'',
            description:'',
            category:'',
            expireDate:'',
            stock:'',
            img:'',
            unitSold:0
        },
        uploadPreview:"https://www.lifewire.com/thmb/yLFRNBmwLcKDRnkaZ0B0nXgLAQM=/960x640/filters:no_upscale():max_bytes(150000):strip_icc()/upload-2c485b5b6fef41f39a05afb9adfce03e.png"
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let data=JSON.parse(localStorage.getItem("Response"))
        data.productsPage.products.push(this.state.newProduct)
        localStorage.setItem("Response",JSON.stringify(data))
        console.log(data)
        this.props.history.push("/product")
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
                        name:tempProductName
                    }
                }))
                break;

            case 'productDescription':
                tempProductDescription=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    description:tempProductDescription
                }
                }))
                break;
                
            case 'productCategory':
                tempProductCategory=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    category:tempProductCategory
                }
                }))
                break;
            
            case 'expiryDate':
                tempExpiryDate=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    expireDate:tempExpiryDate
                }
                }))
                break;
            
            case 'unitsInStock':
                tempUnitsInStock=e.target.value
                this.setState(prevState=>({
                newProduct:{
                    ...prevState.newProduct,
                    stock:tempUnitsInStock
                }
                }))
                break;
            
            default:
                break;
        }
    }
    onImageUpload=(e)=>
    {
        let object=JSON.parse(localStorage.getItem("Response"))
        console.log(e.target.files)
        if(e.target.files && e.target.files[0])
        {
            if(e.target.files[0].size<=1000000)
            {
                let reader=new FileReader()
                reader.onload=(e)=>{
                    let imgSrc=e.target.result
                    this.setState(prevState=>({
                        newProduct:{
                            ...prevState.newProduct,
                            img:imgSrc
                        },
                        uploadPreview:imgSrc
                    }))
                }
                reader.readAsDataURL(e.target.files[0])
            }
            else
                alert("File should not exceed 1MB")
        }
    }
    render(){
        return(
            <div className={classes.addPage}>
                <div className={classes.addContainer}>
                    <div>
                        <h2>Add Product</h2>
                    </div>
                    <form className={classes.addForm} onSubmit={this.handleSubmit}>
                    <div className={classes.container}>
                        <div className={classes.textInput}>
                            <div className={classes.formGroup}>
                                <label htmlFor="productName">Product Name</label>
                                <input name="productName" type="text" className={classes.form}  value={this.state.name} required onInput={(e)=>this.onInputChange(e,'productName')}></input>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="description">Description</label>
                                <textarea rows="9" name="description" className={classes.form} required onChange={(e)=>this.onInputChange(e,'productDescription')}></textarea>
                            </div>
                            <div className={classes.formGroup}>
                                <label htmlFor="category">Category</label>
                                <select required onChange={(e)=>this.onInputChange(e,'productCategory')} className={classes.form}>
                                    <option value="default">Select Category</option>
                                    {this.state.categories.map((item,pos)=>{
                                        return(
                                            <option value={item} keys={pos} >{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className={classes.expiryDateAndUnitStockContainer}>
                                <div className={classes.formGroup}>
                                    <label for="expiry_date">Expire Date</label>
                                     <input className={classes.expiryDate} name="expiry_date" type="date" required onChange={(e)=>this.onInputChange(e,'expiryDate')}></input>
                                 </div>
                                 <div className={classes.formGroup}>
                                     <label for="stock">Units In Stock</label>
                                     <input className={classes.unitsInStock} name="stock" type="number" required onChange={(e)=>this.onInputChange(e,'unitsInStock')}></input>
                                 </div>                                    
                            </div>
                        </div>
                        <div className={classes.imageUpload}>
                            <img className={classes.imagePreview} src={this.state.uploadPreview} alt="imageUpload"/>
                            <input type='file' name='pic' id='pic' accept='image/*' onChange={(e)=>this.onImageUpload(e)}/>
                            <label for='pic'>Upload new photo</label>
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button>add product now</button>
                    </div>
                    
                    </form>
                </div>
            </div>
            // <div className="add-page">
            //     <div className="add-container">
            //         <div>
            //             <h2>Add Product</h2>
            //         </div>
            //         <div className="sections-con">              
            //             <div className="detail-section">
            //                 <form className="add-form" >
            //                     <div>
            //                         <label for="name">Product Name</label>
            //                         <input id="name" name="name" type="text" required onChange={(e)=>this.onInputChange(e,'productName')}></input>
            //                     </div>
            //                     <div>
            //                         <label for="description">Description</label>
            //                         <textarea rows="9" required onChange={(e)=>this.onInputChange(e,'productDescription')}></textarea>
            //                     </div>
            //                     <div>
            //                         <label for="category">category</label>
            //                         <select id="category" className="select-cat" required onChange={(e)=>this.onInputChange(e,'productCategory')}>
            //                             <option value="Select">Select Category</option>
            //                             <option value="New Arrival">New Arrival</option>
            //                             <option value="Most Popular">Most Popular</option>
            //                             <option value="Trending">Trending</option>
            //                         </select>
            //                     </div>
            //                     <div className="inputs-con">
            //                     <div>
            //                         <label for="expiry_date">Expire Date</label>
            //                         <input id="expiry_date" name="expiry_date" type="date" required onChange={(e)=>this.onInputChange(e,'expiryDate')}></input>
            //                     </div>
            //                     <div>
            //                         <label for="stock">Units In Stock</label>
            //                         <input id="stock" name="stock" type="number" required onChange={(e)=>this.onInputChange(e,'unitsInStock')}></input>
            //                     </div>
            //                     </div>
            //                 </form>
            //             </div>
                        
            //             <div className="img-section">
            //                 <div className="upload-img">
            //                     <i className="fas fa-cloud-upload-alt tm-upload-icon"></i>
            //                 </div>
            //                 <div>
            //                     <input type='file' name='pic' id='pic' accept='image/*' onChange={(e)=>this.onImageUpload(e)}/>
            //                     <label for='pic'>Upload new photo</label>
            //                 </div>
            //             </div>
            //             <div>
            //             <button type="submit" className="add-pdt-btn" onClick={this.handleSubmit}>ADD PRODUCT NOW</button>
            //         </div>
            //         </div>
                    
            //     </div>
            // </div>
        )
    }
}

    export default Addproduct;