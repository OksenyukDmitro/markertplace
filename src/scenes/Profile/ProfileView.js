import React from 'react';
import T from 'prop-types';
import s from './Profile.module.scss';
import { Header, SearchBox } from '../../components';
import { Footer } from '../../components';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import test from '../../Images/test.jpg';
import UserProducts from '../UserProducts/UserProductsContainer';
import ProductsList from '../../components/ProductsList/ProductsListContainer';
import { fetchUserProducts } from '../../modules/user/userOperations';

function Profile({
  onChangeSearchText,
  searchText,
  fetchUserProducts,
  match,
  isLoading,
  owner,
  products,
}) {
  if (isLoading || !owner) return <div>Loading</div>;

  if (products === undefined) {
    fetchUserProducts(match.params.id);
  }
  return (
    <div>
      <div className={s.container}>
        <Header>
          <SearchBox onChange={onChangeSearchText} />
        </Header>
        <div className={s.contentContainer}>
          <div className={s.avatarContainer}>
            <img
              className={s.avatar}
              src={owner.avatar === null ? test : owner.avatar}
            />
          </div>
          <p className={s.fullName}>{owner.fullName}</p>
          <p className={s.fullName}>{owner.location}</p>
          <div className={s.infoContainer}>
            <table className={s.table}>
              <tbody>
                <tr>
                  <th className={s.th}>
                    <p className={s.count}>22%</p>
                    <p className={s.title}>Positive feedback</p>
                  </th>
                  <th className={s.th}>
                    <p className={s.count}>12</p>
                    <p className={s.title}>Sales</p>
                  </th>
                  <th className={s.th}>
                    <p className={s.count}>
                      {products ? products.length : 0}
                    </p>
                    <p className={s.title}>Active listings</p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          {products
            ? products.map((item) =>
                ~item.title.indexOf(searchText) ? (
                  <ProductsList item={item} />
                ) : null,
              )
            : null}{' '}
        </div>
      </div>{' '}
      <Footer />
    </div>
  );
}

Profile.propTypes = {};
/** */
export default Profile;
