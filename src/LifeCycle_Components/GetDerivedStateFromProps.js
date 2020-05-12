import React from 'react';

class Header1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "Red" };
    }

    static getDerivedStateFromProps(props, state) {
        return { favoriteColor: props.favcol };
    }

    render() {
        return (
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}

Header1.defaultProps = {
    favcol: "Yellow"
}

export default Header1