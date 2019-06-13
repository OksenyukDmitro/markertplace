import React from 'react';
import s from './Chat.module.scss';
import Api from '../../api';
import { routes } from '../router';
import { Redirect } from 'react-router-dom';
import Message from '../../components/Message/Message';

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';

import { formatingTimeAgo } from '../../helpers';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 10,
});

export function Chat({
  participants,
  viewer,
  messages,
  text,
  setText,
  sendMessage,
}) {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login} />;
  }

  if (!messages) {
    return <div>Loads</div>;
  }

  function renderRow({ parent, index, key, style }) {
    const time = formatingTimeAgo(
      new Date(messages[index].createdAt),
    );
    const isViewer = viewer && messages[index].ownerId === viewer.id;
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style} className="row">
          <div
            className={
              isViewer ? s.messageContainerViewer : s.messageContainer
            }
          >
            <div
              className={
                isViewer ? s.messageTextViewer : s.messageText
              }
            >
              {messages[index].text}
            </div>
            <p className={s.time}>{time}</p>
          </div>
        </div>
      </CellMeasurer>
    );
  }

  return (
    <div className={s.container}>
      {participants && participants[0] ? (
        <div className={s.participants}>
          <div className={s.avatarContainer}>
            <img
              className={s.avatar}
              src={
                participants[0].avatar === null
                  ? null
                  : participants[0].avatar
              }
            />
          </div>
          <p className={s.name}>{participants[0].fullName}</p>
        </div>
      ) : null}
      <aside className={s.aside} className={s.aside}>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                rowCount={messages.length}
                scrollToIndex={messages.length - 1}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                rowRenderer={renderRow}
              />
            );
          }}
        </AutoSizer>
      </aside>
      <div className={s.main} />
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={text}
          onChange={(evt) => setText(evt.target.value)}
          placeholder="Type your message her"
        />{' '}
        <button className={s.btn} onClick={sendMessage} type="button">
          SEND
        </button>
      </div>
    </div>
  );
}

Chat.propTypes = {};
/**{messages.map((i) => (
         
          <Message viewer={viewer&& i.ownerId===viewer.id} item={i} />
        ))} */
