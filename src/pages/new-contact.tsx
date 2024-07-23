import React, { FormEvent, useState } from 'react';
import { ApiContact } from '../types';
import ButtonSpinner from '../components/Spinner/ButtonSpinner';
import { useNavigate } from 'react-router-dom';
import {createContact, fetchContact} from '../store/contactThunk';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectContactIsCreating} from '../store/contactSlice';





const initialState: ApiContact = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

const NewContact: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectContactIsCreating);
  const [contact, setContact] = useState<ApiContact>(initialState);
  const navigate = useNavigate();

  const changeContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
      await dispatch(createContact(contact));
      navigate('/');
      dispatch(fetchContact());
  };

  return (
    <form onSubmit={onFormSubmit} className="container-fluid col-4 mt-5">
      <h4>Add new contact</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={contact.name}
          onChange={changeContact}
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          value={contact.phone}
          onChange={changeContact}
          type="text"
          name="phone"
          id="phone"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          value={contact.email}
          onChange={changeContact}
          type="text"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          value={contact.photo}
          onChange={changeContact}
          type="url"
          name="photo"
          id="photo"
          className="form-control"
        />
      </div>

      <div className="mt-3">
        <button type="submit"
                className="btn btn-success me-4"
                disabled={isCreating}>
          Save
          {isCreating && <ButtonSpinner />}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          Back to contacts
        </button>
      </div>
    </form>
  );
};

export default NewContact;
