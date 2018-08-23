import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div
        style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fce4ec"
      }}>
        <div className="container">
          <div className="row" style={{
            textAlign: "center"
          }}>
            <span
              className="w-100 text-center mt-5"
              style={{
              fontSize: "30px",
              fontFamily: "'Press Start 2P', cursive",
              color: "#4a148c"
            }}>Click App Demo</span>
          </div>
          <div className="row">
            <div className="col"/>
            <div className="col-6">
              <div
                className="row"
                style={{
                borderTop: "1px solid black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black"
              }}>
                <span
                  className="w-100 text-center my-5"
                  style={{
                  fontSize: "90px"
                }}>{this.state.count}</span>
              </div>
              <div className="row">
                <div
                  className="col p-0 bg-success">
                  <div className="w-100 text-center" style={{fontSize:"25px",color:"white",cursor:"pointer"}} onClick ={()=>{
                    this.setState({
                      count:this.state.count + 1
                    })
                  }}>
                  <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="col p-0 bg-warning">
                  <div className="w-100 text-center"style={{fontSize:"25px",color:"white",cursor:"pointer"}} onClick={()=>{
                    this.setState({
                      count:0
                    })
                  }}>
                  <i class="fas fa-sync-alt"></i>
                  </div>
                </div>
                <div className="col p-0 bg-danger">
                  <div className="w-100 text-center" style={{fontSize:"25px",color:"white",cursor:"pointer"}} onClick={()=>{
                    this.setState({
                      count:this.state.count -1
                    })
                  }}>
                  <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

        </div>

      </div>

    );
  }
}

export default App;
