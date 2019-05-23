import React from 'react'
import './item-status-filter.css'

const ItemStatusFilter = ({filter, onFilterChange}) => {
  const btnArray = [
    { name: 'all', label: 'All' },
    { name: 'done', label: 'Done' },
    { name: 'active', label: 'Active' }
  ];

  const buttons = btnArray.map(({ name, label }) => {
      const active = filter === name,
            className = 'btn ' + (active ? 'btn-info' : 'btn-outline-secondary');
      return (
        <button key={name} type="button" className={className} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    }
  );

  return (
    <div className="btn-group">
      { buttons }
    </div>
  )

}

export default ItemStatusFilter;
