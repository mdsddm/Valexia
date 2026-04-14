import { useEffect, useRef, useState } from "react";
import { socket } from "../lib/socket";
import { EraserIcon, TrashIcon, PenIcon } from "lucide-react";

export default function WhiteboardPanel({ sessionId }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [lineWidth, setLineWidth] = useState(3);

  const colors = [
    { name: "White", val: "#ffffff" },
    { name: "Black", val: "#000000" },
    { name: "Red", val: "#ef4444" },
    { name: "Green", val: "#22c55e" },
    { name: "Blue", val: "#3b82f6" },
    { name: "Yellow", val: "#eab308" },
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // To prevent blurriness, set internal resolution to match physical size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      contextRef.current = context;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Sync color/width changes to context
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = lineWidth;
    }
  }, [color, lineWidth]);

  useEffect(() => {
    if (!sessionId) return;

    socket.emit("join-session", sessionId);

    // Make sure we have a reference to the latest context settings
    const drawLine = ({ x0, y0, x1, y1, c, w, isErase }) => {
      if (!contextRef.current) return;
      
      const ctx = contextRef.current;
      const prevColor = ctx.strokeStyle;
      const prevWidth = ctx.lineWidth;
      const prevComp = ctx.globalCompositeOperation;

      ctx.strokeStyle = c;
      ctx.lineWidth = w;
      if (isErase) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = w * 2;
      } else {
        ctx.globalCompositeOperation = "source-over";
      }

      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      ctx.closePath();

      // Reset
      ctx.strokeStyle = prevColor;
      ctx.lineWidth = prevWidth;
      ctx.globalCompositeOperation = prevComp;
    };

    socket.on("whiteboard-draw", (data) => {
      drawLine(data);
    });

    socket.on("whiteboard-clear", () => {
      const canvas = canvasRef.current;
      const ctx = contextRef.current;
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    return () => {
      socket.off("whiteboard-draw");
      socket.off("whiteboard-clear");
    };
  }, [sessionId]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(e);

    // For emitting
    const lastX = contextRef.current.lastX || offsetX;
    const lastY = contextRef.current.lastY || offsetY;

    const isErase = color === "empty"; // our simple eraser logic
    const drawColor = isErase ? "#000" : color;
    
    if (isErase) {
      contextRef.current.globalCompositeOperation = "destination-out";
      contextRef.current.lineWidth = lineWidth * 2;
    } else {
      contextRef.current.globalCompositeOperation = "source-over";
    }

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    socket.emit("whiteboard-action", {
      sessionId,
      action: "draw",
      data: {
        x0: lastX,
        y0: lastY,
        x1: offsetX,
        y1: offsetY,
        c: drawColor,
        w: lineWidth,
        isErase,
      }
    });

    contextRef.current.lastX = offsetX;
    contextRef.current.lastY = offsetY;
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    contextRef.current.lastX = null;
    contextRef.current.lastY = null;
  };

  const getCoordinates = (e) => {
    if (e.touches && e.touches.length > 0) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top,
      };
    }
    return {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
    };
  };

  const clearWhiteboard = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      socket.emit("whiteboard-action", {
        sessionId,
        action: "clear",
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-base-200">
      <div className="flex items-center gap-4 p-3 bg-base-100 border-b border-base-300">
        <div className="flex gap-2 items-center border-r border-base-300 pr-4">
          <PenIcon className="w-4 h-4" />
          {colors.map((c) => (
            <button
              key={c.name}
              className={`w-6 h-6 rounded-full border-2 ${color === c.val ? "border-primary" : "border-transparent"}`}
              style={{ backgroundColor: c.val }}
              title={c.name}
              onClick={() => setColor(c.val)}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2 border-r border-base-300 pr-4">
          <button 
            className={`btn btn-sm btn-ghost gap-2 ${color === "empty" ? "bg-base-300" : ""}`}
            onClick={() => setColor("empty")}
            title="Eraser"
          >
            <EraserIcon className="w-4 h-4" />
            Eraser
          </button>
        </div>

        <div className="flex items-center gap-2 border-r border-base-300 pr-4">
          <span className="text-sm">Width:</span>
          <input
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            className="range range-xs range-primary w-24"
          />
        </div>

        <button 
          onClick={clearWhiteboard}
          className="btn btn-sm btn-error btn-outline gap-2 ml-auto"
        >
          <TrashIcon className="w-4 h-4" />
          Clear
        </button>
      </div>

      <div className="flex-1 relative cursor-crosshair overflow-hidden touch-none">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={finishDrawing}
          onMouseOut={finishDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={finishDrawing}
          onTouchCancel={finishDrawing}
          className="bg-base-300"
        />
      </div>
    </div>
  );
}
