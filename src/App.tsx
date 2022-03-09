import React from "react";
import { Galaxy } from "./components/Galaxy";
import { Planets } from "./components/Planets";
import { Planet } from "./components/Planet";
import { OrbitProvider } from "./context/OrbitContext";

function App() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 p-16">
      <div className="w-96 h-96">
        <OrbitProvider items={["CT", "AA", "TE"]}>
          <Galaxy classNames="bg-blue-100">
            <Planets>
              {({ idx, planet }: { idx: number; planet: any }) => (
                <Planet
                  idx={idx}
                  key={idx}
                  className="bg-blue-200 flex flex-col items-center text-6xl font-bold justify-center"
                >
                  {planet}
                </Planet>
              )}
            </Planets>
          </Galaxy>
        </OrbitProvider>
      </div>
    </div>
  );
}

export default App;
