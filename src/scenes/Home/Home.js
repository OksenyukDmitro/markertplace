import React from 'react';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import s from './Home.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { routes } from '../router';
import LatestList from '../LatestList/LatestListContainer';

function Home() {
  return (
    <div className={s.container}>
     
      <Switch>
        <Route path={routes.home} component={LatestList}></Route>
      </Switch>
    </div>
  );
}

Home.propTypes = {};

export default Home;
