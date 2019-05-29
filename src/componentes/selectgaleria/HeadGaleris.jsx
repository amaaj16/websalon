import React, {Fragment } from 'react';
import {Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
const style= theme =>({
  root:{
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    height: '500px',
    alignSelf:'flex-start '
  }

});

function HeadGaleria(props){
  const {classes,concepto} = props;
    return (
      <Fragment>
      <Paper elevation={1} className={classes.root}>
        <h1 className="textCenter" >Galeria</h1>
        <div className="linea"></div>
        <h4 className="textCenter" >Cada monento de tu evento es importante para nosotros. </h4>
        <h5 className="textCenter" > Encuentra en nuestra galeria los sueños realizados de muchos de nuestros clientes,busca el indicado para ti!!.</h5>
        <h5 className="textCenter" >Cada momento es unico, tu decides si quieres realizarlo.</h5>
        <h2 className="textCenter">{concepto}</h2>
      </Paper>
      </Fragment>
    );
  }

  HeadGaleria.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style) (HeadGaleria);
