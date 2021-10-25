import React, {useState} from 'react';
import {useCombobox, useMultipleSelection} from 'downshift'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  align-items: flex-start;
`;

const StyledCombobox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const StyledOptions = styled.ul`
  width: 100%;
  border: 3px solid black;
  border-top: none;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: block;
    width: 100%;
    padding: 15px 10px;
  }

  li:hover {
    background-color: #f7ec9e !important;
  }
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 3px solid black;
  padding: 2px;
  min-height: 50px;

  &:focus {
    outline: none;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    
    &:focus {
      outline: none;
    }
  }
`;

const SelectedItem = styled.span`
  display: inline-block;
  background-color: #F9E852;
  padding: 2px 4px;
  margin: 2px;

  button {
    border: none;
    background-color: transparent;
  }
`;

const DropdownToggle = styled.button`
  font-size: 25px;
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const items = ['Fava', 'Basia', 'Józef', 'Tola', 'Lotka'];

const Combobox = () => {
    const [inputValue, setInputValue] = useState('')
    const {
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
        selectedItems,
    } = useMultipleSelection({initialSelectedItems: []})
    const getFilteredItems = () =>
        items.filter(
            item =>
                selectedItems.indexOf(item) < 0 &&
                item.toLowerCase().startsWith(inputValue.toLowerCase()),
        )
    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        inputValue,
        defaultHighlightedIndex: 0,
        selectedItem: null,
        items: getFilteredItems(),
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    return {
                        ...changes,
                        isOpen: true,
                    }
            }
            return changes
        },
        onStateChange: ({inputValue, type, selectedItem}) => {
            switch (type) {
                case useCombobox.stateChangeTypes.InputChange:
                    setInputValue(inputValue)
                    break
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                case useCombobox.stateChangeTypes.InputBlur:
                    if (selectedItem) {
                        setInputValue('')
                        addSelectedItem(selectedItem)
                    }
                    break
                default:
                    break
            }
        },
    })

    return (
        <Wrapper>
            <StyledCombobox>
                <StyledInputWrapper  {...getComboboxProps()}>
                    {selectedItems.map((selectedItem, index) => (
                        <SelectedItem
                            key={`selected-item-${index}`}
                            {...getSelectedItemProps({selectedItem, index})}
                        >
                            {selectedItem}
                            <button
                                onClick={e => {
                                    e.stopPropagation()
                                    removeSelectedItem(selectedItem)
                                }}
                            >
                                &#10005;
                            </button>
                        </SelectedItem>
                    ))}
                    <input
                        {...getInputProps(
                            getDropdownProps({preventKeyAction: isOpen}),
                        )}
                    />
                    <DropdownToggle {...getToggleButtonProps()} aria-label={'toggle menu'}>
                        &#9660;
                    </DropdownToggle>
                </StyledInputWrapper>
                <StyledOptions {...getMenuProps()}>
                    {isOpen &&
                    getFilteredItems(items).map((item, index) => (
                        <li
                            style={
                                highlightedIndex === index
                                    ? {backgroundColor: '#bde4ff'}
                                    : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({item, index})}
                        >
                            {item}
                        </li>
                    ))}
                </StyledOptions>
            </StyledCombobox>
        </Wrapper>
    )
};

export default Combobox