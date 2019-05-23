import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button" ;

export default class Details extends Component {

	render() {
		return (
			<ProductConsumer>
				{ value =>{
				 const {id,company,info,img, title, price, inCart} = value.detailProduct;
				 return (
					<div className='container py-5'>
						{/* {title} */}
						<div className='row'>
							<div className='col-10 mx-auto text-slanted text-blue my-5'>
								<h1>{title}</h1>
								{/* {end title} */}
								{/* {product info} */}
								<div className='row'>
									<div className='col-10 mx-auto col-md-6 my-3'>
										<img src={img} className='img-fluid' alt='product' />
									</div>

									{/* {Info} */}
									<div className='col-10 col-md-6 my-3 text-capitalize'>
										<h3>model: {title}</h3>
										<h4 className='text-title text-uppercase text-muted mt-3 mb-2'>made by: {company}</h4>
										<hr></hr>
										<h4 className='text-blue'><strong>Price: ${price}</strong></h4>
										<p className='text-muted lead'>{info}</p>

										<Link to='/'>
											<ButtonContainer>
												back to products
											</ButtonContainer>
										</Link>
										<ButtonContainer 
										cart
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
										>
											{inCart ? 'in cart' : "Add to cart"}

										</ButtonContainer>
									</div>								
								</div>
							</div>
						</div>
					</div>
				 )
				}}

			</ProductConsumer>
		)
	}
}