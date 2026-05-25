import React from 'react'
import { useSelector } from 'react-redux'
import CustomProductCard from '../../../../components/customcomponents/CustomProductCard'

const WishListProducts = () => {
    const wishlistitem = useSelector((state)=> state.wishlist.items)
    console.log(wishlistitem,'wishlistitemwishlistitemwishlistitem')
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {wishlistitem.map((item) => (
          <CustomProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        ))}
      </div> 
      
    </div>
  )
}

export default WishListProducts
