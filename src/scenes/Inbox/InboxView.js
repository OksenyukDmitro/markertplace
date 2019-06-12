import React from 'react';
import T from 'prop-types';
import s from './Inbox.module.scss';
import Api from '../../api';
import { routes } from '../../scenes/router';
import {
  Route,
  generatePath,
  Redirect,
  Link,
} from 'react-router-dom';
import Chat from '../Chat/ChatContainer';
import { formatingTime } from '../../helpers';
import { Header } from '../../components';
function Inbox({ items,openChat, match }) {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login} />;
  }
  console.log('in');
  console.log(items);
  if (!items) return <div>Load</div>;
  return (
    <div>
      {' '}
      <Header />
      <div className={s.container}>
        <aside className={s.aside}>
          {items.map((i) => (
            <div className={i.id===match.params.id?s.selectedChat:s.chats} onClick={() => openChat(i.id)}>
              <Link
                className={s.chatName}
                to={generatePath(routes.chat, { id: i.id })}
              >
                {i.product && i.product.title
                  ? i.product.title
                  : 'Product'}
                <p className={s.time}>
                  {i.lastMessage && i.lastMessage.createdAt
                    ? formatingTime(new Date(i.lastMessage.createdAt))
                    : null}
                </p>
              </Link>
              <p className={s.lastMessage}>
                {i.lastMessage && i.lastMessage.text
                  ? i.lastMessage.text
                  : null}
              </p>
            </div>
          ))}
        </aside>
        <div className={s.main}>
          <Route exact path={routes.chat} component={Chat} />
        </div>
      </div>
    </div>
  );
}

Inbox.propTypes = {};

export default Inbox;
