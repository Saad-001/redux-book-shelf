import React from "react";

import { 
  HiPlusCircle, 
  HiMinusCircle,
  HiCheckCircle 
} from 'react-icons/hi';
import { useDispatch } from "react-redux";
import {addToReadingList, finishedBookList, removeFromReadingList}  from '../../Redux/actions/bookAction';
import styles from './book.module.css';


const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props.book;
  const { noButton, markButton, plusButton } = props;

  const dispatch = useDispatch();
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      {
        noButton?

        console.log("noButton book Item")
        :
        <div className={styles.control_icons} >
        {
          plusButton  && markButton?
            <>
            <HiPlusCircle title="Add to Reading" onClick={() => dispatch(addToReadingList(props.book))} className={styles.plus_icon} />
            <HiCheckCircle title="Mark as Finish" onClick={() => dispatch(finishedBookList(props.book))} className={styles.check_icon} />
            </>
          :
          <>
            <HiMinusCircle title="Remove from list" onClick={() => dispatch(removeFromReadingList(props.book))} className={styles.minus_icon} />
            <HiCheckCircle title="Mark as Finish" onClick={() => dispatch(finishedBookList(props.book))} className={styles.check_icon} />
          </>
        }       
      </div>
      }
    </div>
  );
};

export default SingleBook;
