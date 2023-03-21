import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button({
  border: "1px solid black",
  marginLeft: 33,
  borderRadius: 5,
  cursor: "pointer",
});
const Li = styled.li({
  marginTop: 5,
  marginBottom: 5,
  padding: 6,
  border: "1px solid black",
  width: 300,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
});
const Ul = styled.ul({
  listStyle: "square",
  width: 300,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

const ContactList = ({ contacts, filter, deleteContact }) => {
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFilteredContacts();

  return (
    <Ul>
      {filtredContacts.map((contact) => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactList;
