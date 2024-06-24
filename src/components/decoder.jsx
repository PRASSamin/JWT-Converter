import React from 'react'
import Header from './global/header'
import DecoderTool from './jwt/decode-tool'
import JWTDoc from './jwt/jwt-doc'
import JWTTop from './jwt/jwt-top'
const Decoder = () => {
  return (
    <div className="">
      <Header/>
      <JWTTop main={"JWT Decoder"}/>
      <DecoderTool />
      <JWTDoc />
     </div>
  )
}

export default Decoder
