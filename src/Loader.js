import React  from 'react';
import ReactLoading from 'react-loading';
import './Loader.css';
const Loader = ({ type, color }) => (
  <div className="loader-page">
  <div className="con-loader">
    <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
  </div>
  </div>
)


export default Loader;
