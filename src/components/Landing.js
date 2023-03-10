import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import Blog from "./landing/blog/Blog";
import What from "./landing/what/What";
import Info from "./landing/info/Info";
import Footer from "./landing/footer/Footer";

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
      return <Redirect to="/projects" />;
    }
  
    return (
      <div>
        <section className="landing">
          <div className="dark-overlay">
            <div className="landing-inner">
              <h1 className="x-large">Bug Tracker</h1>
              <p className="lead">Lets track that bug.</p>
              <div className="buttons">
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <What />
          <Info />
          <Footer />
        </section>
      </div>
    );
  };
  
  Landing.propTypes = {
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps)(Landing);