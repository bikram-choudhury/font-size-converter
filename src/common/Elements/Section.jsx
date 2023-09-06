import React, { Component } from 'react'

function getLiElements(array) {
    const elements = array.map((v, index) => {
        const elem = index + 1;
        if(elem % 2 === 0) {
            return <li>{elem}</li>
        } else {
            return <li>-</li>
        }
    });
    console.log(elements);
    return elements;
}
export default class Section extends Component {
    render() {
        let array = new Array(9);
        array.fill("");
        return (
            <div className=''>
                <ul>
                { getLiElements(array) }
                </ul>
            </div>
        )
    }
}
