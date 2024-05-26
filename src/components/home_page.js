import React, { useState, useEffect } from 'react';
import ResourceCard from './resource_card';
import Pagination from './pagination';
import Header from './header';

function HomePage() {
  const [resources, setResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('Resources');
  const resourcesPerPage = 6;

  useEffect(() => {
    fetch('https://media-content.ccbp.in/website/react-assignment/resources.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResources(data);

      })
      .catch(error => console.error('Error fetching resources:', error));
  }, []);

  const filteredResources = resources.filter(resource => {
    const matchesQuery = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      currentTab === 'Resources' || 
      (currentTab === 'Requests' && resource.tag === 'request') || 
      (currentTab === 'Users' && resource.tag === 'user'); 
  
    return matchesQuery && matchesTab;
  });

  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1); 
  };
  return (
    <>
 <Header />
  <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-tabs content-tabs">
            {['Resources', 'Requests', 'Users'].map(tab => (
              <li className="nav-item " key={tab}>
                <button
                  className={`nav-link ${currentTab === tab ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(tab);
                  }}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a resource..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {currentResources.map(resource => (
          <div key={resource.id} className="col-md-4 col-sm-6 col-xs-12 mb-3 d-flex align-items-stretch">
            <ResourceCard
              title={resource.title}
              description={resource.description}
              iconUrl={resource.icon_url}
              link={resource.link}
              category={resource.category}
              tag={resource.tag}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
