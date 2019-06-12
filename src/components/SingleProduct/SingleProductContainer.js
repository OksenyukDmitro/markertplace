import { connect } from 'react-redux';
import { compose, withHandlers,lifecycle, withState} from 'recompose';
import SingleProduct from './SingleProductView';
import { userOperations } from '../../modules/user';
import { routes } from '../../scenes/router';
import { withRouter, generatePath } from 'react-router-dom';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';


const mapStateToProps = (state,props) => ({
  owner: productsSelectors.getProductOwner(state, props.match.params.id),
  viewer: state.viewer.user,
  isLoading: state.products.product.isLoading,
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};
const enhancer = compose(
  withRouter,
  withState('isModalOpen', 'setIsModalOpen',false),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),  lifecycle({
    componentDidMount() {
     
      if (!this.props.owner|| !this.props.item)
        this.props.fetchProduct(this.props.match.params.id);
    },
  }),
  
  withHandlers({  
    toggleModal:props=>()=>{
      if(props.viewer){
      props.setIsModalOpen(!props.isModalOpen)}
      else{
        props.history.push({
          pathname: generatePath(routes.profile, { id: props.owner.id} ),
        
            state: { id: props.item.id },
        });
      }

    },
    openInbox:props=>()=>{
      props.history.push(routes.inbox)
    },
    
    addToBookmarks:(props)=>()=>{
        console.log(props.item);
    },
    ownerProfile:(props)=>()=>{
      props.history.push({
        pathname: generatePath(routes.profile, { id: props.owner.id} ),
      
        //  state: { item: props.item },
      });
    },
    handleFetchUser:(props)=>()=>{
    
       props.fetchProduct(props.item.ownerId);
    },
  }),
);
export default enhancer(SingleProduct);
