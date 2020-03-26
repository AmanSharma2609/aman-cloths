import React from "react";
import { SHOP_DATA } from "./shopData";
import Collection from '../../components/collection/collection'

export default function ShopPage() {
  const [shopData, setData] = React.useState(SHOP_DATA);
  return (<div className='shop-page'>
      {
          shopData.map(({ id, ...otherProps }) => (
            <Collection key={id} {...otherProps} />
          ))
      }
      </div>);
}
