import React from "react";

class Content extends React.Component {
    //state object
    state = { isShowingText: true };

    render() {
        return !this.state.isShowingText && (
            <div>
            Content
        </div>
    );
    }

    componentDidMount(){
        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
    ), 1000);
    }
}
export default Content;
