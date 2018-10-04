import React, { Component } from 'react';
import ListItem from '../components/ListItem.component';

class ResultsContainter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleResults(results){
        results.sort();
        return results.map( (item, index) => (
            <ListItem data={item} index={index}/>
        ));
    }

    render() {
        const {items} = this.props;
        const renderedResults = items ? this.handleResults(items) : <div></div> 
        return ( 
            <div className="ResultsContainer">
                {renderedResults}
            </div>
         );
    }
}
 
export default ResultsContainter;