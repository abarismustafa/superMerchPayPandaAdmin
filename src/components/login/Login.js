import login from "../../assets/images/logo/merchant.paypanda-logo.png";
import loginimg from "../../assets/images/logo/login.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { LoginSubmit } from "../../api/login/Login";
import CustomInputField from "../../common/CustomInputField";
import { SaveUserDeatilsLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChangeLogin = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const cloneData = { ...loginForm };
    cloneData[name] = value;
    setLoginForm(cloneData);
  };

  const submitSignIn = async () => {
    setLoading(true);
    try {
      let result = await LoginSubmit(loginForm);
      if (result.statusCode == "200") {
        setLoading(false);
        SaveUserDeatilsLocalStorage(result.data.token);
        dispatch(setIsLogin({ isLogin: !!result.data.token }));
        navigate("/admin");
      } else {
        throw new Error(result.data.message);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="authincation h-100 h-100-2">
        <div className="container-fluid  ">
          <div className="row h-100">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
              <div className="login-form">
                <div className="text-center">
                  <h3 className="title">Sign In</h3>
                  <p>Sign in to your account to start using PayPanda</p>
                </div>
                <form action="#">
                  <div className="mb-4">
                    {/* <label className="mb-1 text-dark">Email</label> */}

                    <CustomInputField
                      type="email"
                      placeholder="Enter Email *"
                      value={loginForm.email}
                      name="email"
                      // hasError={errors.firstName && touched.firstName}
                      onChange={handleChangeLogin}
                      // onBlur={handleBlur}
                      // errorMsg={errors.firstName}
                      // autoFocus={true}
                      // id="firstName"
                    />
                  </div>
                  <div className="mb-4 position-relative">
                    {/* <label className="mb-1 text-dark">Password</label> */}
                    <CustomInputField
                      type="password"
                      placeholder="Enter Password *"
                      value={loginForm.password}
                      name="password"
                      // hasError={errors.firstName && touched.firstName}
                      onChange={handleChangeLogin}
                      // onBlur={handleBlur}
                      // errorMsg={errors.firstName}
                      // autoFocus={true}
                      // id="firstName"
                    />

                    {/* <span className="show-pass eye">
                                            <i className="fa fa-eye-slash" />
                                            <i className="fa fa-eye" />
                                        </span> */}
                  </div>
                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-4">
                      <div className="form-check custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox1"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox1"
                        >
                          Remember my preference
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <a href="#" className="btn-link text-primary">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={submitSignIn}
                      disabled={!loginForm.password || !loginForm.email}
                    >
                      {loading && <Spinner animation="border" />}Sign In
                    </button>
                  </div>
                  <h6 className="login-title">
                    <span>Or continue with</span>
                  </h6>
                  <div className="mb-3">
                    <ul className="d-flex align-self-center justify-content-center">
                      <li>
                        <a
                          target="_blank"
                          href="#"
                          className="fab fa-facebook-f btn-facebook"
                        />
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="#"
                          className="fab fa-google-plus-g btn-google-plus mx-2"
                        />
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="#"
                          className="fab fa-linkedin-in btn-linkedin me-2"
                        />
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="#"
                          className="fab fa-twitter btn-twitter"
                        />
                      </li>
                    </ul>
                  </div>
                  {/* <p className="text-center">
                                        Not registered?
                                        <a
                                            className="btn-link text-primary"
                                            href="page-register.html"
                                        >
                                            Register
                                        </a>
                                    </p> */}
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="pages-left h-100">
                <div className="login-content">
                  <a href="#">
                    <img src={login} className="mb-3 logo-dark" alt />
                  </a>
                  {/* <a href="#"><img src={loginimg} alt="" /></a> */}
                  <p>
                    PayPanda uses line charts to visualize customer-related
                    metrics and trends over time.
                  </p>
                </div>
                <div className="login-media text-center">
                  <img src={loginimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
