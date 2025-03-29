import AssetCard from "@/app/components/assetCard";

export default function Assets() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <AssetCard
        name="Willow Creek Cottage"
        price="$2M"
        change="(+11.11%)"
        imageUrl="/cottage.jpg" // replace with your actual image path
      />
    </div>
  );
}
