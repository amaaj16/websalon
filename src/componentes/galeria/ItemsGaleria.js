import React, {Fragment} from 'react';
import {Image} from 'react-bootstrap';
function RenderItems(props) {
    const{
      items,
      handleClick
    }=props;

    
    const lst =items.map((item,i)=>(
    <div className="responsive" key={i} >
      <div className="gallery" key={i}>
        <button  onClick={handleClick.bind(this,item.img)} className="btn-img" key={i} >
          <Image src={item.img}  key={i}></Image>
        </button>
      </div>
    </div>

  )
);
  return(lst  )
}
function ItemsGaleria(it){
  return (<Fragment><RenderItems items={it.item} handleClick={it.handleClick} /></Fragment>);
}

export default ItemsGaleria;
