import { BaseSyntheticEvent, Component } from "react";

interface Props {
  pImage?: string;
  pName?: string;
}

interface State {
  sCounter: number;
}

export default class Button extends Component<Props, State> {
  state: State = {
    sCounter: 0,
  };

  clickMeListener = (event: BaseSyntheticEvent): void => {
    console.log("clicked" + this.state.sCounter);
    this.setState({
      sCounter: this.state.sCounter < 10 ? this.state.sCounter + 1 : 0,
    });
  };

  render() {
    return (
      <>
        <img src={this.props.pImage} alt="" />
        <h1>{this.props.pName}</h1>
        <button onClick={this.clickMeListener}>Click</button>
        <p>{this.state.sCounter}</p>
      </>
    );
  }
}