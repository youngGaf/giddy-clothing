import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CategoryPage from '../category/category.component';

const ShopPage = ({ match }) =>{
    console.log(match)
    return (
    <div className='shop-page'>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
)};


export default ShopPage;