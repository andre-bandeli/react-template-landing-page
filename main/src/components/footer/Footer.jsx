import "./footer.scss"
import { useForm } from "react-hook-form"

import React from 'react'

export default function Footer() {

    const { register, handleSubmit, formState: {erros}} = useForm()


  return (
    <div className='footer'>

        <div className="box">
            <div className="col">
                <div className="lef">
                    <h2>
                        COMPANY
                    </h2>

                    <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nostrum ex doloribus nihil blanditiis deserunt lsads
                    </li>
                   
                    </ul>
                </div>
                <div className="rig">
                
                <ul>
                    <li>
                       <img src="assets/images/logo.png" alt="" />
                    </li>

                </ul>
                
                </div>
            </div>
            <div className="col">


                <div className="cont">
                    <h1>Contact US: +55 4847-7458 </h1>
                    <h2>E-mail: exemple.us@ourcompany.com </h2>
                    <img src="assets/images/pino.png" alt="" width={25}/>
                    <h3>Business Adrres: 84874 Exemple 74LL</h3>
                    
                </div>
                
            </div>
                <div className="col">
                    <div className="form">
                        <h3>Send a message!</h3>
                        <h4>Get notfied of new products</h4>
                        
                        <form action="">
                            <div className="fields">
                                <label> Titulo</label>
                                <imput type="text" name="title" {...register("title")}/>
                            </div>

                            <div className="btn">
                               <button type="submit" > ENVIAR
                                </button> 
                            </div>

                        </form>


                    </div>
                </div>
        </div>

    </div>
  )
}
