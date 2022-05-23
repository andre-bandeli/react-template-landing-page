import "./footer.scss"
import { useForm } from "react-hook-form"

import React from 'react'

export default function Footer() {

    const { register, handleSubmit, formState: {erros}} = useForm()


  return (
    <div className='footer'>

                    <h1>Contact US: +55 4847-7458 </h1>
                    <h2>E-mail: exemple.us@ourcompany.com </h2>
                    <img src="assets/images/pino.png" alt="" width={25}/>
                    <h3>Business Adrres: 84874 Exemple 74LL</h3>


    </div>
  )
}
