import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="items-center">
      <div className="text-center">
        <h1 className="text-4xl mb-8">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
