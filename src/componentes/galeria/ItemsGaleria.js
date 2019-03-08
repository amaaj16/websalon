import React, {Fragment} from 'react';
import {Image} from 'react-bootstrap';
function RenderItems(props) {
    const{
      items,
      handleClick
    }=props;

    console.log(items);
    const lst =items.map((item,i)=>(
    <div className="responsive" >
      <div className="gallery" key={i}>
        <button  onClick={handleClick(item)} className="btn-img" key={i} >
          <Image src={item}  key={i}></Image>
        </button>
      </div>
    </div>

  )
).bind(this);

  return(lst  )
}
function ItemsGaleria(it){
  return (<Fragment><RenderItems items={it.item} handleClick={it.handleClick} /></Fragment>);
}

export default ItemsGaleria;
