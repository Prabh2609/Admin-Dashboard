import React, { Component } from 'react';
import classes from './product.module.css';
import { Link } from 'react-router-dom';
import { RouteEndPoints } from '../../Utils/RouteEndPoints';
import { connect } from 'react-redux';
import ProductCategory from '../../Components/productCategory/productCategory';


class Product extends Component{

    state={
        products:JSON.parse(localStorage.getItem("Response")).productsPage.products,
        categories:JSON.parse(localStorage.getItem("Response")).productsPage.categories,
        array:[]
    }

    Checked=(e)=>{
        alert(e.target.value)
        let id=e.target.id
        this.setState(prevState=>({
            array:[...prevState.array,id]
        }))       
    }
    onDeleteSelecetedClick=()=>
    {
        this.state.array.map(id=>console.log(id))
    }
    deleteRowWithId=(id)=>{
        let array=this.state.products
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        array.splice(id,1)
        tempObject.productsPage.products=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        this.setState({products:array})
    }    

    render(){
        return(
            <div className={classes.productPage}>
                <div className={classes.productContentContainer}>
                    <div className={classes.productContent}>
                        <div className={classes.productTableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">UNIT SOLD</th>
                                        <th scope="col">IN STOCK</th>
                                        <th scope="col">EXPIRY DATE</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((products,pos)=>{
                                            return(
                                                <tr key={pos}>
                                                    <th scope="row">
                                                        <input id={pos} className={classes.checkbox} type="checkbox" checked onChange={(e)=>{this.Checked(e)}}></input>
                                                    </th>
                                                    <td>
                                                        {products.name}
                                                    </td>
                                                    <td>
                                                        {products.unitSold}
                                                    </td>
                                                    <td>
                                                        {products.stock}
                                                    </td>
                                                    <td>
                                                        {products.expireDate}
                                                    </td>
                                                    <td>
                                                        <i id={pos}  className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>{this.deleteRowWithId(e.target.id)}}></i>    
                                                    </td>
                                                </tr>                                            
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>      
                        <div className={classes.buttonContainer}>
                            <Link to={RouteEndPoints.AddNewProduct}>
                            <button>add new product</button>
                            </Link>                            
                            <button onClick={()=>this.onDeleteSelecetedClick()}>delete selected product</button>
                        </div>
                    </div>
                    {/*category  */}<ProductCategory/>
                </div>
            </div>
        )
    }
}


export default Product;