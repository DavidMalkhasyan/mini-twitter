import React from "react";
import { ReactComponent as Avatar } from "../assets/Avatar.svg";
import { ReactComponent as VerifiedIcon } from "../assets/VerifiedAccount.svg";
import "../styles/UserProfileCard.css";

export default function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <Avatar className="user-profile-card__avatar" />
            <div className="user-profile-card__info">
                <div className="user-profile-card__header">
                    <h2 className="user-profile-card__name">John Doe</h2>
                    <VerifiedIcon className="user-profile-card__verified-icon" />
                </div>
                <p className="user-profile-card__username">@johndoe</p>
            </div>
            <div className="user-profile-card__actions">
                <button className="user-profile-card__more-button">...</button>
            </div>
        </div>
    );
}
