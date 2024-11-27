"use client";
import { useState, useEffect } from "react";
import { useAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const updatedItem = { ...newItem, id: newItemId };
      setItems((prevItems) => [...prevItems, updatedItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/g, "");
    setSelectedItemName(cleanName);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main className="flex">
      <div className="flex-1 text-center">
        <h1 className="text-4xl mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
};

export default Page;
