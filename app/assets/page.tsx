import AssetCard from "@/app/components/assetCard";
import TabBook from "../components/tabBook";
export default function Assets() {
    const mockAssets = [
        {
          name: "Willow Creek Cottage",
          price: "$2M",
          change: "(+11.11%)",
          imageUrl: "pic/willow.png",
        },
        {
          name: "BYD Yangwang U9",
          price: "$130,000",
          change: "(+4.75%)",
          imageUrl: "pic/byd.png",
        },
      ];


  return (
    <div className="w-full h-full px-6 p-4 flex flex-col items-center">
        <div className="bg-white text-black text-center py- rounded-lg mb-4 w-[179px] h-[49px]">
        <h2 className="text-[32px]">ASSETS</h2>
      </div>
      <TabBook>
        <div className="book p-4 bg-white rounded-l-xl w-full h-[650px]">
    <div className="grid grid-cols-2 gap-4">
      {mockAssets.map((asset, index) => (
        <AssetCard
          key={index}
          name={asset.name}
          price={asset.price}
          change={asset.change}
          imageUrl={asset.imageUrl}
        />
      ))}
    </div>
  </div>
        <div className="tabs flex flex-col w-[37px]">
          <div className="p-2">
            <p>Assets</p>
          </div>
          <div className="p-2">
            <p>Cosmetics</p>
          </div>
        </div>
      </TabBook>
    </div>
  );
}
