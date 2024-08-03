import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (
    <>
      <h1 className="skills text-center mb-5">SKILLS</h1>
      <div className="container">
        {/* Row 1 */}
        <div className="row mb-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='html.png' alt='HTML' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">HTML 5</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='css.png' alt='CSS' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">CSS 3</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='bootstrap.jpg' alt='Bootstrap' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">BOOTSTRAP</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='js.png' alt='JavaScript' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='react.webp' alt='React' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">React</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='mongo.gif' alt='MongoDB' className="card-img-top mx-auto h-20" style={{ height: '130px', width: '100%' }} />
              <div className="card-body text-center">
                <h5 className="card-title">MongoDB</h5>
              </div>
            </div> 
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-4">
         
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='node.png' alt='Node.js' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Node.js</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='express.png' alt='Express' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Express</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='git.png' alt='Git' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Git</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mb-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='c.png' alt='C' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">C</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='cpp.png' alt='Cpp' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Cpp</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='mysql.png' alt='MySQL' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">MySQL</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5 */}
        
        <div className="row mb-4">
         
          
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='java.png' alt='Java' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Java</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='tail.jpeg' alt='Java' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">TailWind</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src='php.png' alt='Java' className="card-img-top mx-auto" style={{ height: '125px', width: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">PHP</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;
