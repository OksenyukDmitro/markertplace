import React from 'react';
import s from './SingleProduct.module.scss';
import test from '../../Images/test.jpg';
import heart from '../../Images/greyHeart.svg';
import Modal from 'react-modal';
import { userOperations } from '../../modules/user';
import { formatDate, randomColor } from '../../helpers';
import ContactSellerModal from '../../scenes/ContactSellerModal/ContactSellerModalContainer';

Modal.setAppElement('#root');

const SingleProduct = ({
  ownerProfile,
  owner,
  item,
  addToBookmarks,
  isLoading,
  toggleModal,
  isModalOpen,
  viewer,
  openInbox,
  history,
}) => {
  if (!item) return <div>Loading</div>;

  const random_color = randomColor();

  const createdAt = formatDate(new Date(item.createdAt));

  const isViewer = viewer && owner && viewer.id === owner.id;
  return (
    <div className={s.pfloat}>
      <div>
        <div className={s.imgContainer}>
          <img
            className={s.pimg}
            src={
              Array.isArray(item.photos) && item.photos.length > 0
                ? item.photos[0]
                : test
            }
          />
          <div className={s.add} src={heart} onClick={addToBookmarks}>
            ${item.price}
          </div>
        </div>
        {owner ? (
          <div className={s.user}>
            <div className={s.userInfo} onClick={ownerProfile}>
              <div className={s.green} />
              <div
                className={s.userIconContent}
                style={{ backgroundColor: random_color }}
              >
                {owner.fullName[0]}
              </div>
              <p className={s.fullname}>{owner.fullName}</p>

              <p className={s.location}>{owner.location}</p>
            </div>
            <button
              type="button"
              onClick={isViewer ? openInbox : toggleModal}
              className={s.btnChat}
            >
              {isViewer ? 'Chats' : 'Chat with seller'}
            </button>
            <button className={s.btnChat}>Add to favorive</button>
          </div>
        ) : null}
        <div className={s.itemContainer}>
          <div className={s.pname}>{item.title}</div>{' '}
          <p className={s.fullname}>{createdAt}</p>
          <div className={s.description}>{item.description}</div>
        </div>
      </div>
      <Modal
        onRequestClose={toggleModal}
        isOpen={isModalOpen}
        style={{
          overlay: {
            position: 'absolute',
            zIndex: 12311,
            backgroundColor: 'rgb(255, 255, 255);',
          },
        }}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <ContactSellerModal
          productId={item.id}
          onClose={toggleModal}
        />
      </Modal>
    </div>
  );
};

export default SingleProduct;
