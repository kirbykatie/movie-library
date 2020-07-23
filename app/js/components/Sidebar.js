//WIP

import React from "react";
import { Link, Router } from "@reach/router";
import MultiSelect from "./MultiSelect";
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedItem: [],
			items: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.addSelectedItem = this.addSelectedItem.bind(this);
		this.removeSelectedItem = this.removeSelectedItem.bind(this);
		this.handleChangeInput = this.handleChangeInput.bind(this);
	}
//https://codesandbox.io/s/github/kentcdodds/downshift-examples/tree/master/?module=%2Fsrc%2Fordered-examples%2F04-multi-select.js&moduleview=1
//https://codesandbox.io/s/7k3674z09q

	componentDidMount() {
		//setState for items to genres
	}

	handleChange(selectedItem) {
    if (this.state.selectedItem.includes(selectedItem)) {
      this.removeSelectedItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  };

  addSelectedItem(item) {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: [...selectedItem, item],
      genres: items.filter(i => i.name !== item)
    }));
  }

  removeSelectedItem(item) {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }));
  };

  handleChangeInput(inputVal) {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(this.state.selectedItem)) {
      this.setState({ inputValue: inputVal });
    }
  };
	render() {
		const { selectedItem, items } = this.state;
		return (
			<section className="sidebar">
				<div className="sidebar_wrap">
					<FormGroup>
		        <FormControl>
		          <FormLabel>Genre</FormLabel>
		          <MultiSelect
		            onInputValueChange={this.handleChangeInput}
		            inputValue={this.state.inputValue}
		            availableItems={items}
		            selectedItem={selectedItem}
		            onChange={this.handleChange}
		            onRemoveItem={this.removeSelectedItem}
		          />
		        </FormControl>
		      </FormGroup>
				</div>
			</section>
		)
	}
}

export default Sidebar;