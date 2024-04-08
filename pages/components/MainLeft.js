import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SubCategoryItem = ({ subCategory }) => {
    return (
      <li className="relative pl-8 pr-2 py-1 hover:bg-green-200 rounded-md mb-1 text-gray-700 cursor-pointer">
        <div className="absolute left-4 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2" />
        <div className="absolute left-4 w-0.5 bg-green-500 top-1/2 -translate-y-1/2 h-full" />
        <span>{subCategory.subcat_name_en}</span>
      </li>
    );
  };


const CategoryItem = ({ category, onSelectCategory, selectedCatId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSubCategories = async (catId) => {
        setIsLoading(true);
        try {

          const response = await fetch(`https://dua-server-gamma.vercel.app/subcategories/${catId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setSubCategories(data);
        } catch (error) {
          console.error("Fetching subcategories failed", error);
        } finally {
          setIsLoading(false);
        }
      };

  const handleToggle = () => {
    onSelectCategory(category.cat_id); // Select this category
    if (!isOpen && subCategories?.length === 0) fetchSubCategories(category.cat_id);
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className="relative">
      {/* Vertical line */}
      <div className={`absolute left-4 w-0.5 ${selectedCatId === category.cat_id ? 'bg-green-500' : 'bg-transparent'} h-full`}></div>
      
      <li className="flex justify-between items-center pl-4 pr-2 py-2 hover:bg-green-200 rounded-md mb-1 cursor-pointer"
          onClick={handleToggle}>
        <span className='text-gray-700'>{category.cat_name_en}</span>
        <span className="ml-2">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-gray-700" />
        </span>
      </li>
      
      {isOpen && (
        <ul className="pl-6 pr-2 py-1">
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            subCategories?.data.map(sub => (
                <SubCategoryItem key={sub.subcat_id} subCategory={sub} />
            ))
          )}
        </ul>
      )}
    </div>
    </>



  );
};

export default function MainLeft ({ categories, onSelectCategory }) {
  return (
    <div className="bg-white w-64 h-screen p-4 flex flex-col">
    <div className="bg-green-500 p-4">
  <h2 className="text-white text-center text-lg font-bold">Categories</h2>

</div>
    <h3 className=''>Categories</h3>
    <div className="flex items-center rounded-md mb-4 bg-white">
    <div className="relative">
          <input 
            type="text" 
            placeholder="Search_category"
            className="pl-10 py-2 rounded-md border-2 border-gray-300"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
    </div>
    <ul className="overflow-y-auto">
      {categories?.data.map(category => (
        <CategoryItem 
          key={category.cat_id} 
          category={category} 
          onSelectCategory={onSelectCategory}
        />
      ))}
    </ul>
  </div>
  );
} 