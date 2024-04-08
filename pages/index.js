import React, { useEffect, useState } from 'react';
import LeftSidebar from './components/LeftSideBar';
import Navbar from './components/Navbar';
import MainLeft from './components/MainLeft';
import MiddleContent from './components/MiddleContent';
import MainRight from './components/MainRight';


export async function getStaticProps() {
  try {
    // Fetch categories
    const categoriesRes = await fetch('https://dua-server-gamma.vercel.app/categories');
    const categories = await categoriesRes.json();

    // Fetch sub-categories
    const subCategoriesRes = await fetch('https://dua-server-gamma.vercel.app/sub-categories');
    const subCategories = await subCategoriesRes.json();

    // Fetch duas
    const duasRes = await fetch('https://dua-server-gamma.vercel.app/duas');
    const duas = await duasRes.json();

    if (!categoriesRes.ok || !subCategoriesRes.ok || !duasRes.ok) {
      throw new Error('Failed to fetch data');
    }

    return {
      props: {
        categories,
        subCategories,
        duas
      },
      
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        categories: [],
        subCategories: [],
        duas: []
      },
    };
  }
}

function HomePage({ categories, subCategories, duas }) {
  const [selectedCatId, setSelectedCatId] = useState(null);

  const handleSelectCategory = (catId) => {
    setSelectedCatId(catId);
  };

  // Filter the duas based on the selected category
  const filteredDuas = duas.data.filter(dua => selectedCatId === dua.cat_id);

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex flex-row min-h-screen">
      <div className="">

        <MainLeft 
        onSelectCategory={handleSelectCategory}  
        categories={categories} 
        subCategories={subCategories} 
        />

      </div>
      <div className="flex-grow"> 

        <MiddleContent 
        catId={selectedCatId}
        duas={duas}
        filteredDuas={filteredDuas}
        />

      </div>
      <div className=""> 
        <MainRight />
      </div>
    </div>
      </div>
    </div>
  );
}

export default HomePage;