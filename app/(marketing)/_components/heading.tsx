"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1
        className="text-3xl sm:text-5xl md:text-6xl
            font-bold
            "
      >
        Your Ideas, Documents & Plans Structured. Welcome to{" "}
        <span className="underline">Structo</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Structo is the connected workspace where <br /> you develop, and share
        your ideas and vision.
      </h3>
      <Button>
        Enter Structo
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
