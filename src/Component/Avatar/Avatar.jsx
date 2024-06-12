import React, { useState } from 'react';
import './Avatar.scss';

const Avatar = ({ size = 'md', img, alt = '', tooltip }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="avatar" title={tooltip}>
      {img ? (
        !imgError ? (
          <img
            className={`Avatar-${size}`}
            src={img}
            alt={alt}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="avatar-default">
            <i className="icon-user avatar-men"></i>
          </div>
        )
      ) : alt ? (
        <div className="avatar-alt">
          <i className="fas fa-user"></i>
        </div>
      ) : (
        <div className="avatar-default">
          <i className="far fa-user avatar-men"></i>
        </div>
      )}
    </div>
  );
};

export default Avatar;
