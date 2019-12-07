import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components'

const Div = styled.div`
  border-top: 1px solid rgba(0,0,0,.1);
  padding-bottom: var(--space-xxl);
  padding-left: var(--space);
  padding-right: var(--space);
  margin-top: var(--space-xxl);
  margin-bottom: var(--space-xxl);
  h2 {
    font-size: var(--f3);
    font-family: var(--orbitron);
    text-align: center;
  }
  form {
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;

    grid-gap: var(--space-xs);
    @media screen and (min-width: 30em) {
      grid-template-columns: 1fr auto;
    }
    input {
      -webkit-appearance: none;
      font-size: var(--f6);
      border-width: 1px;
      border-style: solid;
      border-color: var(--gray-2);
      padding: var(--space-sm);
      border-radius: 4px;
      background-color: var(--gray-2);
      :focus {
        outline: none;
        border-width: 1px;
        border-color: var(--blue-6);
      }
    }
    input[type="submit"] {
      padding: var(--space-sm) var(--space-lg);
      border-color: var(--gray-9);
      background-color: var(--gray-9);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
    input[type="submit"]:active {
      background-color: var(--gray-8);
    }
  }
`;

export default class EmailListForm extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <Div>
                <h2>Get the latest article</h2>
                <form onSubmit={this._handleSubmit}>
                    <input
                        type="email"
                        onChange={this._handleChange}
                        placeholder="Email address"
                        name="email"
                    />
                  <input type="submit" value="Subscribe" />
                </form>
            </Div>
        );
    }
}
