import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        // tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1});
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1});
    // }

    // renderTags() {
    //     return <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li>)}</ul>;
    // }
    render() { 
        console.log(this.props);
        return (
            <div>
                {this.props.children}              
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => {this.handleIncrement({id:1})}} className = "btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counterId)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.state.tags.length === 0 && "please create a new tag!!!"}
                {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const{ value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;