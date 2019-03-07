import React from 'react';

import {Image} from 'react-bootstrap';
function renderItems(items) {
    const{
      item,
      handleClick,
      i
    }=items;
  return(
    <div className="responsive" key={i}>
      <div className="gallery" key={i}>
        <button  onClick={handleClick(item)} className="btn-img" key={i} >
          <Image src={item}  key={i}></Image>
        </button>
      </div>
    </div>
  )
}
function ItemsGaleria(props){
  const { photos,handleClick }=props;
  console.log(props);
  const items = photos;
  const listImg = items.map((item,i)=>(
    <renderItems item={item} handleClick={handleClick} i={i}/>
  )
  );
  return (listImg);
}

export default ItemsGaleria;
