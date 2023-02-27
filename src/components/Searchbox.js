import React, { Component } from "react";
import Emojibox from "./Emojibox";
class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      valueHolder: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://emoji-api.com/emojis?access_key=60f8517f434747a32430aa08724df6b274a01d70"
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          ...this.state,
          data: res,
        })
      );
    fetch(
      "https://emoji-api.com/emojis?access_key=60f8517f434747a32430aa08724df6b274a01d70"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          ...this.state,
          valueHolder: res,
        });
      });
  }

  //const [search, setSearch] = useState("");
  handleSearch = (e) => {
    console.log(this.state.valueHolder);
    this.setState({
      search: e.target.value,
    });
    if (e.target.value !== "") {
      let filteredEmoji = this.state.data.filter((e) => {
        return e.unicodeName.includes(this.state.search);
      });
      //setData(filteredEmoji);
      this.setState({
        //...this.state,
        data: filteredEmoji,
      });
    } else {
      this.setState({
        //...this.state,
        data: this.state.valueHolder,
      });
      //setData(valueHolder);
    }
  };

  render() {
    //const [data] = this.state;

    return (
      <div>
        <div className="search-div">
          <input
            className="search-box"
            placeholder="Search Emoji"
            type="text"
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </div>

        <Emojibox emojiValue={this.state.data} />
      </div>
    );
  }
}

export default Searchbox;
