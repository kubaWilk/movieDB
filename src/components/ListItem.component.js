import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        const {data} = this.props;
        return (<div className="ListItem">
            <img src = {`https://image.tmdb.org/t/p/w185${data.poster_path}`} />
            {data.original_title}
            <br />
            {data.overview}
            <br /><br />
        </div>);
    }
}
 
export default ListItem;