/*import React from 'react';
import T from 'prop-types';
import s from './MessagesList.module.scss';
import { formatingTimeAgo } from '../../helpers';

function MessageList({
  viewer,
  item,
  key, // Unique key within array of rows
  index, // Index of row within collection
  // The List is currently being scrolled
  isVisible,
  data
}) {
    console.log(data)
    debugger
  const { text, createdAt } = list[index];
  const time = formatingTimeAgo(new Date(createdAt));
  console.log(viewer);
  return (
    <div
      key={key}
      className={viewer ? s.containerViewer : s.container}
    >
      <div className={viewer ? s.textViewer : s.text}>
        {' '}
        {list[index]}
      </div>
      <p className={s.time}>{time}</p>
    </div>
  );
}
MessageList.propTypes = {};
export default MessageList;
*/