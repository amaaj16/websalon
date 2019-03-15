import React, {Fragment } from 'react';

import {Link} from 'react-router-dom';
import {Image,Container,Row,Col} from 'react-bootstrap';
import {Paper,Typography} from '@material-ui/core';
import "../galeria/Galeria.css";
function SelectGaleria(props){
  console.log(props.albums);
    const {albums} = props;
      const albumsD = albums;
      const lstAlbums = albumsD.map((album,i)=>(
        <Col lg="auto" md="auto" sm="auto">
          <Link to={album.to} key={i} replace >
            <div className="responsive">
              <div className="album">
                <Image src={album.photo} ></Image>
                <div className="titleAlbum">
                  <h5>{album.name}</h5>
                </div>
              </div>
            </div>
          </Link>
      </Col>


    ));
    return (
      <Fragment>
      <Paper>
        <Typography variant='h1' align='center'> </Typography>
      </Paper>
      <div className="title"><h1>Galeria</h1></div>
      <Container fluid={true}>
        <Row className="justify-content-md-center">
            {lstAlbums}
        </Row>
      </Container>

      </Fragment>
    );
  }

export default SelectGaleria;
