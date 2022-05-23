import React from 'react'
import "./projetos.scss"
import ReactElasticCarousel from 'react-elastic-carousel'

export default function Projetos() {

  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 1},
    {width: 1200, itemsToShow: 2},
  ]



  return (

    <div id='projetos'>

      <h1>Projetos</h1>
      
        <div className="container">
        <ReactElasticCarousel breakPoints={breakPoints}>
          <div className='box'>
            
                    <div className="text">
                        <h2>Projeto</h2>
                        <h3>Github</h3>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                          eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
                          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                          eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
                    </div>

                    <div className="btn">
                      <h2>Ferramentas</h2>
                      <div className="col">
                        <button className='btn'>JAVA 12
                        </button>
                        <button className='btn'>MAVEN
                        </button>
                        <button className='btn'>HIBERNATE
                        </button>
                        <button className='btn'>POSTGRES
                        </button>
                        <button className='btn'>GIT/GITLAB
                        </button>
                      </div>
                    </div>
               </div>
              
               <div className='box'>
            
                    <div className="text">
                        <h2>Projeto</h2>
                        <h3>Github</h3>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                          eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
                          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                          eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
                    </div>

                    <div className="btn">
                      <h2>Ferramentas</h2>
                      <div className="col">
                        <button className='btn'>JAVA 12
                        </button>
                        <button className='btn'>MAVEN
                        </button>
                        <button className='btn'>HIBERNATE
                        </button>
                        <button className='btn'>POSTGRES
                        </button>
                        <button className='btn'>GIT/GITLAB
                        </button>
                      </div>
                    </div>
               </div>

               <div className='box'>
            
            <div className="text">
                <h2>Projeto</h2>
                <h3>Github</h3>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                  eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
                  <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi incidunt debitis, 
                  eveniet minus cum corporis quas repudiandae tempore, at enim tempora deleniti</h4>
            </div>

            <div className="btn">
              <h2>Ferramentas</h2>
              <div className="col">
                <button className='btn'>JAVA 12
                </button>
                <button className='btn'>MAVEN
                </button>
                <button className='btn'>HIBERNATE
                </button>
                <button className='btn'>POSTGRES
                </button>
                <button className='btn'>GIT/GITLAB
                </button>
              </div>
            </div>
       </div>

          </ReactElasticCarousel>
        </div>
      

    </div>
  )
}
