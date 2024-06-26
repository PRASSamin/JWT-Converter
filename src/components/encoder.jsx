import React, { useEffect } from 'react'
import Header from './global/header'
import EncoderTool from './jwt/encode-tool'
import JWTDoc from './jwt/jwt-doc'
import JWTTop from './jwt/jwt-top'
const Encoder = () => {

  useEffect(() => {
    document.title = "JWTify - Encode JWT"
  })

  return (
    <div className="">
      <Header/>
      <JWTTop main={"JWT Encoder"}/>
      <EncoderTool />
      <JWTDoc />
     </div>
  )
}

export default Encoder
