import { BaseSyntheticEvent, Component } from "react";

interface Props {
  pName: string;
}
interface State {
  sRName: string;
}

export default class Header extends Component<Props, State> {
  state: State = {
    sRName: "",
  };

  constructor(props: Props) {
    super(props);
    this.inputChange.bind(this);
  }

  inputChange = (event: BaseSyntheticEvent): void => {
    console.log(typeof event);
    console.log(event);
    this.setState({ sRName: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.props.pName}</h1>
        <input type="text" onChange={this.inputChange} />
        <div>{this.state.sRName}</div>
      </div>
    );
  }
}
