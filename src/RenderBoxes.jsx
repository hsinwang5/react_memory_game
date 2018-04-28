import React, { Component } from 'react';
import './RenderBoxes.css';
import PropTypes from 'prop-types'

class RenderBoxes extends Component {
    render() {
        const {flipCard} = this.props;
        const pointerEvents = this.props.pointerEvents
        
        const colorArr = this.props.colorArr.map((color, index) => {
            return (
                <div 
                key={index}
                style={{
                    background: color,
                    pointerEvents: pointerEvents
                }
                }
                className="box-container__colorbox"
                onClick={() => flipCard(index)}
                ></div>
            )
        });
        return (
            <div className="box-container" >
            
            {colorArr}
            </div>
        )
    }
}

export default RenderBoxes;