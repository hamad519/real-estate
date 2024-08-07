import React from 'react'

const BreadcrumbCheckout = () => {
  return (
    <>
    <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg"
    style={{backgroundImage:'url(img/breadcrumb.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Checkout</h2>
                        <div className="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BreadcrumbCheckout