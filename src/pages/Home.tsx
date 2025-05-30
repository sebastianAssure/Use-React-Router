import TriggerButton from "../components/TriggerButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="flex justify-center text-3xl font-bold my-6">
        Welcome to Book Store
      </h2>
      <TriggerButton></TriggerButton>
    </div>
  );
}
