import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "Red" };
    }

    render() {
        return (
            <h1>My favorite color is {this.state.favoriteColor}</h1>
        )
    }
}

Header.defaultProps = {
    favoriteColor: "Yellow"
}

export default Header;