import React from 'react';
import T from 'prop-types';
import s from './Message.module.scss';
import { formatingTimeAgo } from '../../helpers';

function Message({ viewer, item }) {
  const { text, createdAt } = item;
  const time = formatingTimeAgo(new Date(createdAt));
  
  return (
    <div className={viewer ? s.containerViewer : s.container}>
      <div className={viewer ? s.textViewer : s.text}>{text}</div>
      <p className={s.time}>{time}</p>
    </div>
  );
}
Message.propTypes = {};
export default Message;
