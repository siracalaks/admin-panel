import React, { useState } from 'react';
import './CategoryManagement.css';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');

  const handleAddCategory = () => {
    if (selectedCategory.trim() !== '') {
      const newCategory = {
        name: selectedCategory,
        subcategories: []
      };
      setCategories([...categories, newCategory]);
      setSelectedCategory('');
    }
  };

  const handleAddSubcategory = () => {
    if (newSubcategory.trim() !== '') {
      const updatedCategories = categories.map(category => {
        if (category.name === selectedCategory) {
          return {
            ...category,
            subcategories: [...category.subcategories, newSubcategory]
          };
        }
        return category;
      });
      setCategories(updatedCategories);
      setNewSubcategory('');
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className='category-management'>
      <h2 className='text-center my-5 text-warning fs-1 fw-bold'>KATEGORİLENDİRME</h2>
      <div className='category-input-group d-flex justify-content-center gap-5 my-5'>
        <div className='category-input'>
          <label className='me-2 fw-bold'>Kategori Başlığı:</label>
          <input
            type="text"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <button className='btn btn-outline-success ms-2' onClick={handleAddCategory}>Kategori Ekle</button>
        </div>
        <div className='category-input'>
          <label className='me-2 fw-bold'>Alt Başlık:</label>
          <input
            type="text"
            value={newSubcategory}
            onChange={(e) => setNewSubcategory(e.target.value)}
          />
          <button className='btn btn-outline-success ms-2' onClick={handleAddSubcategory}>Alt Başlık Ekle</button>
        </div>
      </div>
      <h3 className='text-center mt-5 text-warning'>Kategori Başlık ve Alt Başlıklar</h3>
      <div className="container mt-5">
        <div className='row justify-content-around gap-3 mx-5'>
          {categories.map((category, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="dropdown text-center">
                <button onClick={() => handleCategoryClick(category.name)} className="btn btn-success dropdown-toggle" type="button" id={`dropdownMenu${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                  {category.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby={`dropdownMenu${index}`}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <a className="dropdown-item" href="#">{subcategory}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
</div>

    </div>
  );
};

export default CategoryManagement;
