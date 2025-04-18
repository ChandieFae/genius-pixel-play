import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Eraser, Undo2, Redo2, Wand2 } from "lucide-react";

export default function GenieFixTray() {
  const [brushSize, setBrushSize] = useState(15);
  const [isErasing, setIsErasing] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-2xl p-4 flex flex-col items-center gap-4 w-[340px] z-50">
      <div className="flex items-center justify-between w-full">
        <Button variant="ghost" onClick={() => setIsErasing(!isErasing)}>
          <Eraser className="h-5 w-5 mr-2" /> {isErasing ? "Erasing" : "Erase"}
        </Button>
        <Button variant="ghost">
          <Undo2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost">
          <Redo2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost">
          <Wand2 className="h-5 w-5 mr-2" /> Smart Fix
        </Button>
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">Brush Size</label>
        <Slider
          defaultValue={[brushSize]}
          min={1}
          max={100}
          step={1}
          onValueChange={([val]) => setBrushSize(val)}
        />
      </div>
      <div className="flex justify-end w-full gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button variant="default">Apply Fix</Button>
      </div>
    </div>
  );
}
