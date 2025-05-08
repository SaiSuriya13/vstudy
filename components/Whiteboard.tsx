"use client";

import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { X, Save, RotateCcw, Trash2 } from "lucide-react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Whiteboard = ({ onClose }: { onClose: () => void }) => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [strokeColor, setStrokeColor] = useState("black");
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (dragRef.current && !isDrawing) {
        const offsetX = e.clientX - position.x;
        const offsetY = e.clientY - position.y;
        setPosition({
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
        });
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (isDrawing) return;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const dragHeader = dragRef.current;
    dragHeader?.addEventListener("mousedown", handleMouseDown);

    return () => {
      dragHeader?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing, position]);

  if (!isMounted) return null;

  const exportImage = async () => {
    if (!canvasRef.current) return;
    try {
      const data = await canvasRef.current.exportImage("png");
      const link = document.createElement("a");
      link.href = data;
      link.download = "whiteboard.png";
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
    }
  };

  const clearCanvas = () => {
    canvasRef.current?.clearCanvas();
  };

  const undo = () => {
    canvasRef.current?.undo();
  };

  const handleColorChange = (color: string) => {
    setStrokeColor(color);
  };

  const handleMouseDownOnCanvas = () => setIsDrawing(true);
  const handleMouseUpOnCanvas = () => setIsDrawing(false);

  return (
    <div
      className="fixed z-[1000] flex flex-col items-center rounded-lg bg-white shadow-lg"
      style={{ left: position.x, top: position.y }}
    >
      <ResizableBox
        width={width}
        height={height}
        minConstraints={[300, 200]}
        maxConstraints={[900, 700]}
        axis="both"
        resizeHandles={["se"]}
        onResizeStop={(e, data) => {
          setWidth(data.size.width);
          setHeight(data.size.height);
        }}
      >
        <div className="relative flex size-full flex-col">
          {/* Header */}
          <div
            ref={dragRef}
            className="flex cursor-move items-center justify-between rounded-t-lg bg-gray-800 p-2 text-white"
          >
            <span>Whiteboard</span>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-600">
              <X size={20} />
            </button>
          </div>

          {/* Canvas with wrapper to track drawing */}
          <div
            className="grow"
            onMouseDown={handleMouseDownOnCanvas}
            onMouseUp={handleMouseUpOnCanvas}
          >
            <ReactSketchCanvas
              ref={canvasRef}
              style={{
                border: "1px solid #ccc",
                borderRadius: "0 0 0.5rem 0.5rem",
                width: "100%",
                height: "100%",
              }}
              strokeWidth={4}
              strokeColor={strokeColor}
            />
          </div>
        </div>
      </ResizableBox>

      {/* Color Picker */}
      <div className="mt-3 flex gap-3">
        {["black", "red", "green", "blue", "yellow"].map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            className={`size-8 rounded-full`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={exportImage}
          className="flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          <Save size={18} />
          Save
        </button>
        <button
          onClick={undo}
          className="flex items-center gap-2 rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
        >
          <RotateCcw size={18} />
          Undo
        </button>
        <button
          onClick={clearCanvas}
          className="flex items-center gap-2 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          <Trash2 size={18} />
          Clear
        </button>
      </div>
    </div>
  );
};

export default Whiteboard;
