import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { auth, provider } from "../firebase";

export const AuthDisplay = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        // Clean up function
        return () => unsubscribe();
    }, []);

    return (
        <div className="animated-bubbles-container">
            <div className="user-info-container">
                <h2>User Information</h2>
                <table className="user-info-table">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <h3>Avatar</h3>
                                    {currentUser && (
                                        <img
                                            src={currentUser.photoURL}
                                            alt="avatar"
                                            className="avatar-icon"
                                        />
                                    )}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h3>Display Name</h3>
                                    <p>{currentUser?.displayName}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h3>Email</h3>
                                    <p>{currentUser?.email}</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};
