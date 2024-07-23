import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {
  closeModal,
  selectContactAreFetching,
  selectContactId,
  selectContacts,
  selectModalOpen
} from '../store/contactSlice';
import Spinner from '../components/Spinner/Spinner';

const ModalForm = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const isFetching = useAppSelector(selectContactAreFetching);
  const isOpen = useAppSelector(selectModalOpen);
  const contactId = useAppSelector(selectContactId);
  const displayStyle = {display: isOpen ? 'block' : 'none'};
  const selectedContact = contacts.find(contact => contact.id === contactId);

  return (
    <>
      <div className="modal-backdrop fade show" style={displayStyle}></div>
      <div className="modal" style={displayStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={() => dispatch(closeModal())}></button>
            </div>
            <div>
              {isFetching ? (
                <Spinner />
              ) : (
                selectedContact && (
                  <div className="modal-body d-flex justify-content-around">
                    <div style={{width: '40%'}}>
                      <img
                        src={selectedContact.photo}
                        alt="photo"
                      />
                    </div>
                    <div>
                      <h4 className="mb-4">{selectedContact.name}</h4>
                      <p className="mt-5">{selectedContact.phone}</p>
                      <p>{selectedContact.email}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">Delete</button>
              <button type="button" className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
