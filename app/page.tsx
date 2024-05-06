"use client"
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric"
import { handleCanvasMouseDown, handleCanvasMouseUp, handleCanvasObjectModified, handleCanvaseMouseMove, handleResize, initializeFabric, renderCanvas } from "@/lib/canvas";
import { ActiveElement } from "@/types/type";
import { useMutation, useStorage } from "@/liveblocks.config";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object|null>(null);
  const selectedShapeRef = useRef<string|null>(null);
  const canvasObjects = useStorage((root) => root.canvasObjects)
  const activeObjectRef = useRef<fabric.Object>(null);

  const syncShapeInStorage = useMutation(({storage}, object)=>{
    if(!object)return;
    const {objectId} = object;

    const shapeData = object.toJSON();
    shapeData.objectId = objectId;

    const canvasObject = storage.get("canvasObjects");
    canvasObject.set(objectId, shapeData)
  },[])

  useEffect(()=>{
    renderCanvas({
      fabricRef,
      canvasObjects,
      activeObjectRef
    })
  },[canvasObjects])

  const [activeElement, setActiveElement] = useState({
    name: "",
    value: "",
    icon: ""
  })

  const handleActiveElement = (ele: ActiveElement) => {
    setActiveElement(ele);
    selectedShapeRef.current = ele?.value as string;
  }

  useEffect(() => {
    const canvas = initializeFabric({
      canvasRef,
      fabricRef,
    });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })
    
    canvas.on("mouse:move", (options) => {
      handleCanvaseMouseMove({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
        syncShapeInStorage
      })
    })

    canvas.on("mouse:up", (options) => {
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
        syncShapeInStorage,
        setActiveElement,
        activeObjectRef
      })
    })

    canvas.on("object:modified",(options) => {
      handleCanvasObjectModified({
        options,
        syncShapeInStorage,
      })
    })

    window.addEventListener("resize", ()=> {
      handleResize({ fabricRef })
    })
  }, [])
  
  return (
    <main className="h-screen overflow-hidden">
      <Navbar activeElement={activeElement} handleActiveElement={handleActiveElement}/>
      <section className="flex h-full flex-row">
        <LeftSidebar/>
        <Live canvasRef={canvasRef}/>
        <RightSidebar/>
      </section>
    </main>
  );
}