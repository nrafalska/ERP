import React, { useState } from 'react';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
    const [view, setView] = useState('allItems'); // Начальное состояние 'allItems'

    return (
        <div className="products-page">
            <h1>Products page</h1>
            <div className="products-container">
                <div className="form-item">MPN</div>
                <div className="form-item">Brand</div>
                <div className="form-item">EAN</div>
                <div className="form-item">Supplier</div>
                <div className="form-item">Status</div>
                <div className="form-item">Supplier Price Out of Date</div>
                <div className="form-item">Stock</div>
                <div className="form-item">Stock 2</div>
                <div className="form-item">COGS</div>
                <div className="form-item">Marketplace</div>
                <div className="form-item">Fulfilment</div>
            </div>
            <div className="buttons-container">
                <div className="search-buttons">
                    <button>Search</button>
                    <button>Reset</button>
                </div>
            </div>
            <div className="items-container">
                <button onClick={() => setView('allItems')}>All items</button>
                <button onClick={() => setView('byCategory')}>By Category</button>
            </div>
            {view === 'allItems' ? (
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SKU</th>
                                <th>MPN</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Status</th>
                                <th>Stock</th>
                                <th>Item name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={7}>No data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="items-container">
                    <div className="item">Doors</div>
                    <div className="item">Battery</div>
                    <div className="item">Engines part</div>
                    <div className="item">Wheels</div>
                    <div className="item">Headlamp</div>
                    <div className="item">Mirrors</div>
                    <div className="item">Breaks</div>
                    <div className="item">Bumpers</div>
                    <div className="item">Chassis</div>
                    <div className="item">Suspension</div>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
