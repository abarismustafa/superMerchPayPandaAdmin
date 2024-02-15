

export function SaveUserDeatilsLocalStorage(user) {
    window.localStorage.setItem("userDetails", user);
    // window.localStorage.setItem("user_id", res?.data._id);
    // window.localStorage.setItem("isLogin", true);
}

export function getUserDetails() {
    return window.localStorage.getItem("userDetails")
}


