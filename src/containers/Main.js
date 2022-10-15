import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiaryForm from '../components/DiaryForm';
import DiaryItem from '../components/DiaryItem';
import { addItem, deleteItem } from '../redux/actions';
import { Modal } from 'flowbite-react';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null,
    };
  };

  render() {
    const { addItem, diaryItems, deleteItem } = this.props;
    const { show, activeItem } = this.state

    return (
      <div>
        <div className="grid-cols-1">
          <div className="diary-app">
            <h1>Jurnal Kegiatan</h1>
            <DiaryForm addItem={(item) => addItem(item)} />
          </div>
          <div className="diary-app pt-5">
            {diaryItems.length > 0 ? diaryItems.map((item) => {
              return (
                <DiaryItem 
                  key={item.id}
                  item={item}
                  deleteItem={(id) => deleteItem(id)} 
                  showModal={(item) =>
                    this.setState({
                      show: true,
                      activeItem: item 
                    })
                  }
                />
              );
            }) : <h1>No Items</h1>}
          </div>
        </div>
        <Modal show={show} onClose={() => this.setState({ show: false })}>
          <Modal.Header>
            {activeItem?.title}
          </Modal.Header>
          <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              {activeItem?.text}
            </p>
          </div>
          </Modal.Body>
          <Modal.Footer>
            {activeItem?.date}
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);