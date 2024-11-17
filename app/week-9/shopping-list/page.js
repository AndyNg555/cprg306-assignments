"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "../new-item";
import ItemList from "../item-list";
import MealIdeas from "../meal-ideas";
import itemsData from "./items.json";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    router.push("/");
    return null;
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/g, "");
    setSelectedItemName(cleanName);
  };

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
