import React, { Component } from 'react';
import axios from 'axios';
import TranslationItem from './TranslationItem';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

class TranslationList extends Component {
  state = {
    textList: [],
    selected: null,
    showToast: false
  };

  componentDidMount() {
    this.getTextList();
  }

  getTextList = () => {
    axios
      .get('/api/')
      .then((res) => {
        if (res.data) {
          this.setState({
            textList: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  toggleShowToast = () => {
    this.setState({...this.state, showToast: !this.state.showToast})
  };

  render() {
    let { textList } = this.state;

    return (
      <div>
        <ul className="list-inline">
          {textList.data && textList.data.length > 0 ? (
            textList.data.map((data, index) => {
              return (
                <li key={index} className={this.state.selected == index ? 'active' : ''} onClick={() => {
                  this.setState({...this.state, selected: index})
                }}>
                  <TranslationItem data={data} index={index} symbols={textList.symbols} active={this.state.selected == index} toggleShowToast={this.toggleShowToast} />
                </li>
              );
            })
          ) : (
            <li>No textList(s)</li>
          )}
        </ul>
        <ToastContainer position="top-end" className="p-3">
          <Toast show={this.state.showToast} onClose={this.toggleShowToast} delay={2000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Infomation</strong>
            </Toast.Header>
            <Toast.Body>Data saved successfully!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  }
}

export default TranslationList;