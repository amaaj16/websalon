import React, {Fragment} from 'react';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Paper} from '@material-ui/core';


const styles = theme => ({
  root: {
    width: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 20,

  },

});


function RenderItems(props) {
    const{
      classes,
      items,
      handleClick
    }=props;
    console.log(props)
return(
  <div  className={classes.root}>
      <GridList cellHeight={250}  className={classes.gridList} cols={4}>
        {items.map((tile,i) => (
          <GridListTile key={i} cols={tile.cols || 1}>
            <img src={tile.img} onClick={handleClick.bind(this,tile.img)}  alt={tile.title} style={tile.style} className="size-imgs" />
          </GridListTile>
        ))}
      </GridList>


  </div>
    /*
    const lst =items.map((item,i)=>(
    <div className="responsive" key={i} >
      <div className="gallery" key={i}>
        <button  onClick={handleClick.bind(this,item.img)} className="btn-img" key={i} >
          <Image src={item.img}  key={i}></Image>
        </button>
      </div>
    </div>

  )
);*/
   )
}
function ItemsGaleria(it){
  return (<Fragment><RenderItems items={it.item} handleClick={it.handleClick} classes={styles}/></Fragment>);
}
ItemsGaleria.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsGaleria);
