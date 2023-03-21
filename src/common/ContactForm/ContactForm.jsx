import PropTypes from "prop-types";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Form = styled.form({
  border: "2px solid black",
  width: 400,
  padding: 15,
});
const Button = styled.button({
  border: "1px solid black",
  borderRadius: 5,
  cursor: "pointer",
});

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      this.props.contacts.some((contact) =>
        contact.name.includes(this.state.name)
      )
    ) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    this.props.addContact(newContact);
    this.reset();
  };
  reset = (e) => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form action="" onSubmit={this.onSubmit}>
          <p>Name</p>
          <input
            onChange={this.onInputChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            onChange={this.onInputChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactForm;
