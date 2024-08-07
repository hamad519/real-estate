import React from 'react'
import { Link } from 'react-router-dom'
const BreadcrumbDetails = () => {
  return (
    <>
    <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg" style={{
        backgroundImage:'url(img/breadcrumb.jpg)'
    }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Vegetable’s Package</h2>
                        <div className="breadcrumb__option">
                            <Link to={'/'}>Home</Link>
                            <a>Vegetables</a>
                            <span>Vegetable’s Package</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BreadcrumbDetails