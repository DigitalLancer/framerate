import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import StarRating from '../StarRating/StarRating';
const AntModal = (props) => {
  const movie = props.movie;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [rating, setRating] = useState(0);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    console.log("rating: ", rating);
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/rating`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        value: rating
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    window.alert("Rated the movie");

    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Give a Rating
      </Button>
      <Modal
        title="Your Rating"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <StarRating rating={rating} setRating={setRating} />
      </Modal>
    </>
  );
};
export default AntModal;