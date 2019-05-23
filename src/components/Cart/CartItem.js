import React from 'react'

export default function CartItem({item,value}) {

    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem } = value;
  return (

    <div className='row my-4 text-capitalize text-center'>
        {/* {Image} */}
        <div className='col-10 xs-auto col-lg-2'>
            <img src={img} alt='product' style={{width: '5rem', height: '5rem'}} className='img-fluid' />
        </div>

        {/* {Title} */}
        <div className='col-10 xs-auto col-lg-2'>
            <span className='d-lg-none'>product : </span>{title}
        </div>

        {/* {price} */}
        <div className='col-10 xs-auto col-lg-2'>
           <span className='d-lg-none'>price : </span> ${price}
        </div>

        {/* {Buttons for quantity} */}
        <div className='col-10 xs-auto col-lg-2 my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
                <span className='btn btn-black mx-1' onClick={() => decrement(id)}> - </span>
                <span className='btn btn-black mx-1'>{count}</span>
                <span className='btn btn-black mx-1' onClick={() => increment(id)}> + </span>

            </div>
        </div>

        {/* Remove buttons */}
        <div className='col-10 xs-auto col-lg-2'>
            <div className='cart-icon' onClick={() => removeItem(id)}>
                <i className='fas fa-trash'></i>
                </div>
        </div>

        <div className='col-10 xs-auto col-lg-2'>
            <strong>item total : ${total}</strong>
        </div>
       
    </div>

  )
}
