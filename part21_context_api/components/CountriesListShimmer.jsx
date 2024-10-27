import React from 'react'; // Ensure React is imported
import './CountriesListShimmer.css'; // Importing the CSS for shimmer effect

export default function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((e, i) => {
        return (
          <div key={i} className="country-card shimmer-card">
            
          </div>
        );
      })}
    </div>
  );
}
