import React, { useEffect, useState } from 'react'
import Banner from '../banner/Banner'
import Category from '../category/Category'
import ProductMinimal from '../product-minimal/ProductMinimal'
import ProductFeatured from '../product-featured/ProductFeatured'
import ProductMain from '../product-main/ProductMain'
import Blog from '../blog/Blog'
import Testimonials from '../testimonial/Testimonials'
import CTA from '../CTA/CTA'
import Service from '../service/Service'
import Sidebar from '../sidebar/Sidebar'
import { GET_ALL } from '../../service/apiService'
import ProductCategory from '../product-category/ProductCategory'

const Main = () => {
    const [categories, setCategoies] = useState([]);

    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategoies(item.data));
    }, [categories]);
    const filteredCategories = categories.filter(
        (category) => category.isHome === 1
    );
    return (
        <>
            <main>
                {/*- BANNER    */}
                <Banner />
                {/*- CATEGORY  */}
                <Category />
                {/*- PRODUCT    */}
                <div className="product-container">
                    <div className="container">
                        {/*    - SIDEBAR  */}
                        <Sidebar />
                        <div className="product-box">
                            {/*      - PRODUCT MINIMAL    */}
                            <ProductMinimal />
                            {/*    - PRODUCT FEATURED    */}
                            <ProductFeatured />
                            {/*    - PRODUCT GRID    */}
                            <ProductMain />
                        </div>
                    </div>
                </div>
                <div className="container">
          {filteredCategories.length > 0 &&
            filteredCategories.map((row) => (
              <ProductCategory categoryName={row.name} categoryId={row.id} key={row.id}/>
            ))}
        </div>
                {/*- TESTIMONIALS, CTA & SERVICE    */}
                <div>
                    <div className="container">
                        <div className="testimonials-box">
                            {/*      - TESTIMONIALS    */}
                            <Testimonials />
                            {/*     - CTA    */}
                            <CTA />
                            {/*    - SERVICE   */}
                            <Service />
                        </div>
                    </div>
                </div>
                {/*- BLOG   */}
                <Blog />
            </main>
        </>
    )
}

export default Main
