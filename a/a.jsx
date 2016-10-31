import React from 'react';
import s from './a.scss'
class a extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = a;
    }
    render() {
        return <div className={s.container}>a</div>;
    }
}
export default a;