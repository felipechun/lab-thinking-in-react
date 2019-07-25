import React, { Component } from 'react'
import ProductRow from "./ProductRow";

export class ProductTable extends Component {

  render() {
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((element, index) => {
                return <ProductRow key={index} {...element}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable
