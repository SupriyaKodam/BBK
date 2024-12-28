import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Offers from '../Components/Offers';
import Categories from '../Components/Categories';
import Navbardown from '../Components/Navbardown';
import FoodItems from '../Components/FoodItems';
import BiryaniGrid from '../Components/BiryaniGrid';
import BiryaniData from '../Components/BiryaniData';
import FoodRolesInRow from '../Components/FoodRolesInRow';
import FoodGrid from '../Components/Breadsandextra';
import CoolDrinks from '../Components/coolDrinksData ';
import Desserts from '../Components/Desserts';
import CityList from '../Components/CityList';
import Footer from '../Components/Footer';
import Displaying from '../Components/Displaying';

const Landingpage = () => {
  // Create refs for each section
  const biryaniGridRef = useRef(null);
  const biryaniDataRef = useRef(null);
  const foodRolesRef = useRef(null);
  const foodGridRef = useRef(null);
  const coolDrinksRef = useRef(null);
  const dessertsRef = useRef(null);

  // Scroll function to scroll to the appropriate section
  const scrollToSection = (section) => {
    const sectionRefs = {
      biryaniGrid: biryaniGridRef,
      biryaniData: biryaniDataRef,
      foodRoles: foodRolesRef,
      foodGrid: foodGridRef,
      coolDrinks: coolDrinksRef,
      desserts: dessertsRef,
    };

    window.scrollTo({
      top: sectionRefs[section].current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar />
      <Displaying scrollToSection={scrollToSection} />
      <Navbardown />
      <Hero />
      <Offers />
      <Categories />
      <FoodItems />
      <div ref={biryaniGridRef}>
        <BiryaniGrid />
      </div>
      <div ref={biryaniDataRef}>
        <BiryaniData />
      </div>
      <div ref={foodRolesRef}>
        <FoodRolesInRow />
      </div>
      <div ref={foodGridRef}>
        <FoodGrid />
      </div>
      <div ref={coolDrinksRef}>
        <CoolDrinks />
      </div>
      <div ref={dessertsRef}>
        <Desserts />
      </div>
      <CityList />
      <Footer />
    </div>
  );
};

export default Landingpage;
