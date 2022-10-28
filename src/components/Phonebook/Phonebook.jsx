import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class Phonebook extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    name: "",
    phoneNumber: "",
  };

  nameInputId = nanoid();
  phoneNumberInputId = nanoid();

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.resetSubmit();
  };

  resetSubmit = () => {
    this.setState({ name: "", phoneNumber: "" });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.phoneNumberInputId}>
            Phone number:
            <input
              type="tel"
              name="phoneNumber"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              id={this.phoneNumberInputId}
            />
          </label>
          <button tupe="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
