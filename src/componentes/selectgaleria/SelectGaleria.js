import React, {Fragment } from 'react';

import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';

import "../galeria/Galeria.css";
function SelectGaleria(props){

    const {albums} = props;
      const albumsD = albums;
      const lstAlbums = albumsD.map((album,i)=>(
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



    ));
    return (
      <Fragment>
      <div className="title"><h1>Galeria</h1></div>
      <div>{lstAlbums}</div>
      </Fragment>
    );
  }

export default SelectGaleria;
