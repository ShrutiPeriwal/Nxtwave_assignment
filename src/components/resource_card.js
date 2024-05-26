import React from 'react';

function ResourceCard({ title, description, iconUrl, link, category }) {
    return (
        <div className="card h-100">
            <div className="card-header d-flex flex-row gap-3">
            <img src={iconUrl} className="card-img" alt={title} />
            <div className="header-content">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">{category}</p>
            </div>
            </div>
            
            <div className="card-body d-flex flex-column">
            <a href={link} className="card-text">{link}</a>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default ResourceCard;
