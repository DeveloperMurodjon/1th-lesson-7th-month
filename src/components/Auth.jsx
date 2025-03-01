import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

function Auth() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const handleLogin = () => {
        const userData = { name: "John Doe", email: "john@example.com" };
        dispatch(login(userData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <span>Salom, {user.name}</span>
                    <button onClick={handleLogout}>Chiqish</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Kirish</button>
            )}
        </div>
    );
}

export default Auth;
