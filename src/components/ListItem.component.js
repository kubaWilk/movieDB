import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        const {data} = this.props;
        return (<div className="ListItem">
            {data.original_title}
        </div>);
    }
}
 
export default ListItem;