import React, {Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Image,Container,Row,Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import "../galeria/Galeria.css";
import HeadGaleria from "./HeadGaleris.jsx";
const style= theme =>({


})

function SelectGaleria(props){
    const {albums} = props;
      const albumsD = albums;
      const lstAlbums = albumsD.map((album,i)=>(
        <Col lg="auto" md="auto" sm="auto">
          <Link to={album.to} key={i} replace >
            <div className="responsive">
              <div className="album">
                <Image src={album.photo} className="img-album"></Image>
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
      <HeadGaleria/>

      <Container fluid={true}>
        <Row className="justify-content-md-center">
            {lstAlbums}
        </Row>
      </Container>
      </Fragment>
    );
  }

  SelectGaleria.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style) (SelectGaleria);
