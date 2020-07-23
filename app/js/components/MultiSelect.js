import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Downshift from "downshift";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";

const styles = theme => ({
  chipContainer: {
    backgroundColor: "transparent",
    display: "inline-block",
    marginBottom: 10
  },
  chip: {
    marginTop: 10,
    marginRight: 5
  },
  paper: {
    maxHeight: "150px",
    overflowY: "auto"
  }
});

const renderInput = inputProps => {
  const { InputProps, classes, availableItems } = inputProps;

  const allItemSelected = availableItems.length === 0;

  return (
    <TextField
      fullWidth
      label={
        allItemSelected ? "No more character to add" : "Choose a character"
      }
      disabled={allItemSelected}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...InputProps
      }}
    />
  );
};

const renderChipList = inputProps => {
  const { classes, selectedItem, onRemoveItem } = inputProps;
  return (
    <div className={classes.chipContainer}>
      {selectedItem.length > 0 &&
        selectedItem.map(item => (
          <Chip
            key={item}
            className={classes.chip}
            label={item}
            deleteIcon={<CancelIcon />}
            onDelete={() => onRemoveItem(item)}
            onClick={() => onRemoveItem(item)}
          />
        ))}
    </div>
  );
};

const renderSuggestion = params => {
  const { item, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem.indexOf(item.name) > -1;

  return (
    !isSelected && (
      <MenuItem
        {...itemProps}
        key={item.id}
        selected={isHighlighted}
        component="div"
      >
        {item.name}
      </MenuItem>
    )
  );
};

const getSuggestions = (inputValue, itemList) =>
  itemList.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

function MultiSelect(props) {
  const { classes, availableItems, onRemoveItem, ...rest } = props;

  return (
    <Downshift {...rest}>
      {({
        getInputProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        isOpen
      }) => (
        <div>
          {renderChipList({
            classes,
            onRemoveItem,
            selectedItem
          })}

          {renderInput({
            classes,
            selectedItem,
            availableItems,
            InputProps: {
              ...getInputProps({
                onClick: () => toggleMenu()
              })
            }
          })}

          {isOpen && (
            <Paper className={classes.paper} square>
              {getSuggestions(inputValue, availableItems).map((item, index) =>
                renderSuggestion({
                  item,
                  index,
                  itemProps: getItemProps({
                    item: item.name
                  }),
                  highlightedIndex,
                  selectedItem
                })
              )}
            </Paper>
          )}
        </div>
      )}
    </Downshift>
  );
}
/*
class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.renderChipList = this.renderChipList.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }
  renderChipList (inputProps) {
    const { availableItems, itemSelected, onRemoveItem } = inputProps;
    return (
      <div className={availableItems.chipContainer}>
        {itemSelected.length > 0 &&
          itemSelected.map(item => (
            <Chip
              key={item}
              className={availableItems.chip}
              label={item}
              deleteIcon={<CancelIcon />}
              onDelete={() => onRemoveItem(item)}
              onClick={() => onRemoveItem(item)}
            />
          ))}
      </div>
    );
  }

  renderInput (inputProps) {
    const { availableItems, itemSelected, InputProps } = inputProps;

    const allItemSelected = availableItems.length === 0;

    return (
      <TextField
        fullWidth
        label={
          allItemSelected ? "No more genres to add" : "Choose a genre"
        }
        disabled={allItemSelected}
        InputProps={{
          /*classes: {
            input: classes.input
          },
          ...InputProps
        }}
      />
    );
  }

  getSuggestions (inputValue, itemList) {
    console.log(inputValue);
    return (itemList.filter(item =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
  }

  renderSuggestion (params) {
    const { item, index, itemProps, highlightedIndex, itemSelected } = params;
    const isHighlighted = highlightedIndex === index;
    const isSelected = itemSelected.indexOf(item.name) > -1;

    return (
      !isSelected && (
        <MenuItem
          {...itemProps}
          key={item.id}
          selected={isHighlighted}
          component="div"
        >
          {item.name}
        </MenuItem>
      )
    );
  }


  render() {
    const { availableItems, itemSelected, onRemoveItem, onChange, inputValue, onInputValueChange } = this.props;
    return ( 
      <Downshift 
        itemToString={item => (item ? item.value : '')}
      >
      {({
        getInputProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        isOpen
      }) => (
      <div>
        {this.renderChipList({
          availableItems,
          onRemoveItem,
          itemSelected
        })}
        {this.renderInput({
          itemSelected,
          availableItems,
          InputProps: {
            ...getInputProps({
              onClick: () => toggleMenu()
            })
          }
        })}
        {/*Paper originally had a classes.paper var for className}
        {console.log(inputValue)}
        {inputValue ? 
        isOpen && (
          <Paper square>
            {this.getSuggestions(inputValue, availableItems).map((item, index) =>
              this.renderSuggestion({
                item,
                index,
                itemProps: getItemProps({
                  item: item.name
                }),
                highlightedIndex,
                itemSelected
              })
            )}
          </Paper> 
        ) : ""}
      </div>
      )}
      >
      </Downshift>
    )
  }
}
*/
export default withStyles(styles)(MultiSelect);
