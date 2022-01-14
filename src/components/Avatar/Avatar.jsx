import React from "react";

export const Avatar = ({
    alt,
    height = 200,
    showCheckIcon = false,
    showBackgroundRed = false,
    src,
    width = 200
}) => {
    return (
        <div className="avatar-wrapper">
            <img
                className="avatar"
                src={src}
                alt={alt}
                width={width}
                height={height}

            />
            {showCheckIcon && (
                <div
                    className={`check-icon ${
                        showBackgroundRed ? "check-icon--red" 
                        :
                        "check-icon--black"
                    }`}
                />
            )}
        </div>
    );
};