import React, { Component } from 'react';
import axios from 'axios';

class AxiosGet extends Component {
    // 
    state={
        data:[],
        post:null
    }

    componentDidMount(){
        axios.get("https://localhost:7113/WeatherForecast").then((response) => {
           
        // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            this.setState({
                data: response.data
            });
        })
    }
    PostData=()=>{
axios.post("https://jsonplaceholder.typicode.com/posts",{
    name:'abc',
    age:55
}).then((response)=>{
this.setState({
    post:response.data
})
})
    }

    render() {
        return (
            <div>
               {/* data from axios :- {this.state.data.length>0 &&  JSON.stringify(this.state.data)} */}
               <button onClick={this.PostData}>click</button>
               data from axios :- {this.state.data &&  JSON.stringify(this.state.data)}
            </div>
        );
    }
}

export default AxiosGet;