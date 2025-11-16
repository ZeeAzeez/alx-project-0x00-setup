import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Variants</h2>

        {/* Small buttons */}
        <div className="flex gap-4 items-center">
          <Button
            title="Small Rounded SM"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-sm hover:bg-blue-600"
          />
          <Button
            title="Small Rounded MD"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
          />
          <Button
            title="Small Rounded Full"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
          />
        </div>

        <div className="flex gap-4 items-center">
          <Button
            title="Medium Rounded SM"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-sm hover:bg-green-600"
          />
          <Button
            title="Medium Rounded MD"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-md hover:bg-green-600"
          />
          <Button
            title="Medium Rounded Full"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-full hover:bg-green-600"
          />
        </div>

        <div className="flex gap-4 items-center">
          <Button
            title="Large Rounded SM rounded-lg"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-sm hover:bg-purple-600"
          />
          <Button
            title="Large Rounded MD rounded-lg"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-md hover:bg-purple-600"
          />
          <Button
            title="Large Rounded Full rounded-lg"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-full hover:bg-purple-600"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
