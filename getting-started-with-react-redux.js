// Although React components can manage their own state locally, when you have a
// complex app, it's generally better to keep the app state in a single location
// with Redux. There are exceptions when individual components may have local
// state specific only to them. Finally, because Redux is not designed to work
// with React out of the box, you need to use the react-redux package. It
// provides a way for you to pass Redux state and dispatch to your React
// components as props.

// Over the next few challenges, first, you'll create a simple React component
// which allows you to input new text messages. These are added to an array
// that's displayed in the view. This should be a nice review of what you
// learned in the React lessons. Next, you'll create a Redux store and actions
// that manage the state of the messages array. Finally, you'll use react-redux
// to connect the Redux store with your component, thereby extracting the local
// state into the Redux store.

// Start with a DisplayMessages component. Add a constructor to this component
// and initialize it with a state that has two properties: input, that's set to
// an empty string, and messages, that's set to an empty array.


class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props);
        
        this.state = {
            input: "",
            messages: []
        };
    }
    // Change code above this line
    render() {
        return <div />
  }
};

