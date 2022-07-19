import Head from "next/head";
import Image from "next/image";
import ParkingSpaceItem from "../components/parking_space/ParkingSpaceItem";

export default function Home() {
  return (
    <main className="container-fluid min-vh-100 bg-gray-100 py-5">
      <div className="container py-1">
        <div className="row">
          <ParkingSpaceItem />
          <ParkingSpaceItem />
          <ParkingSpaceItem />
          <ParkingSpaceItem />
        </div>
      </div>
    </main>
  );
}
