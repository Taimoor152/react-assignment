import React from 'react';

const CategoryColumn = ({ category, onSubcategoryClick }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'not-started': return 'not-started';
      case 'in-progress': return 'in-progress';
      case 'completed': return 'completed';
      case 'partially-uploaded': return 'partially-uploaded';
      case 'fully-uploaded': return 'fully-uploaded';
      case 'delayed': return 'delayed';
      default: return 'not-started';
    }
  };

  return (
    <div className="category-column">
      <div 
        className="category-header" 
        style={{ backgroundColor: category.color }}
      >
        <div className="category-name">{category.name}</div>
        <div className="category-progress">{category.progress.toFixed(2)}%</div>
      </div>

      <div className="subcategories">
        {category.subcategories.map((sub, subIndex) => (
          <div 
            key={subIndex} 
            className="subcategory"
            onClick={() => onSubcategoryClick && onSubcategoryClick(category.id, sub.id)}
            style={{ cursor: onSubcategoryClick ? 'pointer' : 'default' }}
          >
            <div className="subcategory-name">{sub.name}</div>
            <div className="status-circles">
              {sub.circles.map((circle, circleIndex) => (
                <span
                  key={circleIndex}
                  className={`status-circle ${getStatusClass(circle.status)}`}
                >
                  {circle.num}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryColumn;
