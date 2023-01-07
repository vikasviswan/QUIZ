import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class LifeCycleMethods extends Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.state={name:"Vikas",location:"blore",show:true};
       
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps",props);
        return {location: props.loc};
    }

    componentDidMount(){
        console.log("componentDidMount");
        setTimeout(
            ()=>{
                this.setState({name:"kochi"})
            },3000
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextState);
        // if(nextState.name == "kochi"){
        //     return false;
        // }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previos", prevState);
        console.log("Current", this.state);
        return this.state;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate", this.state);
    }


    render() {
        let myfragment;
      if(this.state.show){
          myfragment = <ChildComponent></ChildComponent>;
      }

        return (
            <div>
                <p>Name is : {this.state.name}</p>
                <p>location is : {this.state.location}</p>

                {myfragment}
        <button type='button' onClick={()=>{this.setState({show: !this.state.show})}}>Toogle Child Component</button>

            </div>
        );
    }
}

export default LifeCycleMethods;