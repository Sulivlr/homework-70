import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectContactAreFetching, selectContacts} from '../store/contactSlice';
import {fetchContact} from '../store/contactThunk';
import Spinner from '../components/Spinner/Spinner';

const Contacts = () => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(selectContactAreFetching);
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="card-body col-3">
        {isFetching ? (<Spinner/>) : contacts.map((contact) => (
          <div className="card d-flex flex-row mt-4" key={contact.id}>
            <img
              src={contact.photo}
              alt="photo"
              style={{width: '100px'}}
            />
            <p className="mt-4 ms-4">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
