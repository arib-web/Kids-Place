import React, { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import SingleCatagory from "./singleCatagory";

const Category = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { name: "Sports Car", sub_category: "car", subCategories: [] },
    { name: "Mini Truck", sub_category: "truck", subCategories: [] },
    { name: "Police Car", sub_category: "police", subCategories: [] },
  ]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const data = await Promise.all(
          tabs.map(async (tab) => {
            const response = await fetch(
              `https://kids-place-server.vercel.app/catagory/${tab.sub_category}`
            );
            const subCategories = await response.json();
            return { ...tab, subCategories };
          })
        );
        setTabs(data);
      } catch (error) {
        console.error("Error fetching sub-categories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="text-center my-16">
        <h2 className="text-3xl md:text-4xl font-bold">Shop By Category</h2>
        <p className="text-lg md:text-xl w-96 md:w-1/2 mx-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container mx-auto p-4">
        <Tabs
          className="shadd shadow-2xl "
          selectedIndex={activeTab}
          onSelect={handleTabClick}
        >
          <TabList className="flex mb-10 bg-pink-200 rounded">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className="flex-1 p-4  text-xl border-gray-200 text-center font-bold"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          {tabs.map((tab, index) => (
            <TabPanel key={index} className="pb-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tab.subCategories.slice(0, 2).map((subCategory) => (
                  <SingleCatagory key={subCategory._id} item={subCategory} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
