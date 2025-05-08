import React from "react";
import { Link } from "react-router-dom";
import PostButton from "./PostButton";
import UserProfileCard from "../components/UserProfileCard.jsx";
import { ReactComponent as HomeIcon } from "../assets/Home.svg";
import { ReactComponent as ExploreIcon } from "../assets/Vector.svg";
import { ReactComponent as NotificationsIcon } from "../assets/Notifications.svg";
import { ReactComponent as MessagesIcon } from "../assets/Messages.svg";
import { ReactComponent as ListsIcon } from "../assets/Lists.svg";
import { ReactComponent as BookmarksIcon } from "../assets/Bookmarks.svg";
import { ReactComponent as CommunitiesIcon } from "../assets/Communities.svg";
import { ReactComponent as VerifiedOrgsIcon } from "../assets/VerifiedOrgs.svg";
import { ReactComponent as ProfileIcon } from "../assets/Profile.svg";
import { ReactComponent as MoreIcon } from "../assets/More_Circle.svg";
import { ReactComponent as LogoIcon } from "../assets/Logo.svg";

import "../styles/NavigationBar.css";


export default function NavigationBar() {
    return (
        <nav className="navigation-bar">
            <div className="navigation-bar__list">
                <Link to="/" className="navigation-bar__logo">
                    <LogoIcon className="navigation-bar__logo-icon" />
                </Link>
                <Link to="/" className="navigation-bar__link">
                    <HomeIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Home</span>
                </Link>
                <Link to="/explore" className="navigation-bar__link">
                    <ExploreIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Explore</span>
                </Link>
                <Link to="/notifications" className="navigation-bar__link">
                    <NotificationsIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Notifications</span>
                </Link>
                <Link to="/messages" className="navigation-bar__link">
                    <MessagesIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Messages</span>
                </Link>
                <Link to="/lists" className="navigation-bar__link">
                    <ListsIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Lists</span>
                </Link>
                <Link to="/bookmarks" className="navigation-bar__link">
                    <BookmarksIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Bookmarks</span>
                </Link>
                <Link to="/communities" className="navigation-bar__link">
                    <CommunitiesIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Communities</span>
                </Link>
                <Link to="/verified" className="navigation-bar__link">
                    <VerifiedOrgsIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Verified Orgs</span>
                </Link>
                <Link to="/profile" className="navigation-bar__link">
                    <ProfileIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">Profile</span>
                </Link>
                <Link to="/more" className="navigation-bar__link">
                    <MoreIcon className="navigation-bar__icon" />
                    <span className="navigation-bar__text">More</span>
                </Link>
            </div>
            <PostButton />
            <UserProfileCard />
        </nav>
    );
}
