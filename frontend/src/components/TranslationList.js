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
		  <div className="tooltip__content">

        <div className="tooltip__main--container right_panel">
          <div className="tooltip__main">
            <div className="tooltip__table--wrapper">
              <div className="tooltip__table">
                <table cellSpacing="0">
                  <tbody>
                    {textList.data && textList.data.length > 0 ? (
                      textList.data.map((data, index) => {
                        return (
                          <tr key={index} className={this.state.selected == index ? 'active__translate' : ''} onClick={() => {
                            this.setState({...this.state, selected: index})
                          }}>
                            <TranslationItem data={data} index={index} symbols={textList.symbols} active={this.state.selected == index} toggleShowToast={this.toggleShowToast} />
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>
                          No textList(s)
                        </td>
                      </tr>
                    )}
                    </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <ul className="list-inline">
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
          </ul> */}
          <ToastContainer position="top-end" className="p-3">
            <Toast show={this.state.showToast} onClose={this.toggleShowToast} delay={2000} autohide>
              <Toast.Header>
                <strong className="me-auto">Infomation</strong>
              </Toast.Header>
              <Toast.Body>Data saved successfully!</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    );
  }
}

export default TranslationList;