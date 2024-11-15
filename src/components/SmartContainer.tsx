import { useEffect, useState, useRef } from "react";
import { ReactNode } from "react";

interface SmartContainerProps {
  align: "left" | "right" | undefined;
  children: ReactNode;
}

export default function SmartContainer({ children }: SmartContainerProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [blockContentWidth, setBlockContentWidth] = useState(0);
  const blockContentRef = useRef<HTMLDivElement | null>(null);

  // Actualiza el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Establece el ancho inicial
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Obtén el ancho del contenedor
  useEffect(() => {
    if (blockContentRef.current) {
      setBlockContentWidth(
        blockContentRef.current.getBoundingClientRect().width
      );
    }
  }, [screenWidth]);

  // Calcula el margen
  const margin = Math.max((screenWidth - blockContentWidth) / 2, 0);

  // Clases de alineación basadas en la propiedad 'align'

  return (
    <>
      <div className="block-content h-0 py-0" ref={blockContentRef}></div>
      <div className="w-full" style={{ paddingLeft: margin }}>
        {children}
        {/*  <div>El ancho de la pantalla es: {screenWidth}px</div>
        <p>El ancho total del contenedor es: {blockContentWidth}px</p>
        <p>El margen calculado es: {margin}px</p> */}
      </div>
    </>
  );
}
