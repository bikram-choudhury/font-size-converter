/* Delete this file latter */

import React, { Component, Fragment } from 'react'

const data = {
    mention: 'I am Bikram',
    separator: '. ',
    obj: {x: 1},
    prefix: 'I like ',
    list: ['JavaScript', 'React', 'Angular', 'Node']
};
const result = {
    prefix: 'I like ',
    list: ['JavaScript', 'React', 'Angular', 'Node']
};

function getValuesInString(data) {
    const values = Object.values(data);
    let strArray = [];
    values.forEach(v => {
        if(Object.prototype.toString.call(v) === '[object Array]') {
            strArray = strArray.concat(getValuesInString(v));
        } else if(Object.prototype.toString.call(v) === '[object Object]') {
            strArray = strArray.concat(null);
        } else {
            strArray = strArray.concat(v);
        }
    })
    return strArray;
}

// I like JavaScript, React, Angular, Node

export default class PrintDemo extends Component {
    render() {
        /* const x = 1;
        const y =2;
        const z = x +y;
        return (
            <div>{z}</div>
        ) */
        /* 
        const data = {
            topic: 'React'
        };
        const string = "I love {topic}";
        return (
            <>
                <div>{string}</div>
                <div>{string.replace('{topic}', data.topic)}</div>
            </>
        ); */
        /* return (
            <>
                {
                    data.prefix
                } {
                    [1, false, "3", <span>null</span>, 5]
                }
            </>
        ) */
        /* return (
            <>
                {
                    data.prefix
                } {
                    data.list.join(',')
                }
            </>
        ) */
        /* 
        -----> using string litteral
        const values = Object.values(data);
        return (
            <>
                <div>{values}</div>
                <div>
                    {`${values[0]} ${values[1].join(',')}`}
                </div>
                
            </>
        ); */
        /* return (
            <div>{getValuesInString(data)}</div>
        ) */
        return (
            <ul>
                {
                    ['JS', 'CSS', 'HTML'].map((value, idx) => {
                        return <li key={idx}>{value}</li>
                    })
                }
            </ul>
        )
    }
}
