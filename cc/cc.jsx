import React from 'react';
import s from './cc.scss'
class cc extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = cc;
    }
    render() {
        return <div className={s.container}>cc</div>;
    }
}
export default cc;